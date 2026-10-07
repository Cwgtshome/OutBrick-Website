// Reply by email (phase 2): answer a notification from Mail and the answer is posted.
//
// Outgoing: a single-item notification email about a thread (reply, mention, watched, status,
// solved, merged — not releases, moderation notices or grouped emails) gets
//   Reply-To: reply+<member>.<thread>.<notification>.<mac>@<COMMUNITY_REPLY_DOMAIN>
// The three ids are base 36 and the MAC is the first 128 bits of an HMAC-SHA256, in lower-case
// hex because some mail systems lower-case the local part. Its key is derived with HKDF from
// RESEND_API_KEY (salt "outbrick-community-reply-v1"), so there is no extra secret to manage.
// Only when COMMUNITY_REPLY_DOMAIN, RESEND_WEBHOOK_SECRET and RESEND_API_KEY are all set.
//
// Incoming: POST /api/community/email/inbound, Resend's inbound webhook (no Origin; Svix-signed,
// see inbound-resend.ts). For each message, once (by its Message-ID, else Resend's email id):
//   1. a reply+ address on our domain with a valid MAC, naming a notification that was sent to
//      that member about that thread;
//   2. the From address is that member's own, confirmed address (case-insensitive);
//   3. the text part (or the HTML reduced to text), with the quoted history cut off;
//   4. posted with every normal rule (posts.ts → replyAs): bans, locked threads, rate limits,
//      the review queue, image checks — and in answer to the post the notification was about.
// A refusal at step 3 or 4 sends the member a short email saying why, with their text. Steps 1
// and 2 failing get no answer at all: replying to whoever sent an unsigned or forged message
// would turn this into a way to send mail to strangers.
//
// Answers 200 { ok: true, outcome } for anything handled (Resend stops retrying), 401 for a bad
// signature, 503 when switched off, and 500 when Resend's API could not be read (Resend retries;
// the message's claim is released first).

import { createHmac, hkdfSync } from 'node:crypto';
import { threadPath, type CommunityLocale } from '../../lib/community/contract.ts';
import { communityUrl } from '../../emails/community.ts';
import { communityReplyBounce, type BounceReason } from '../../emails/community-digest.ts';
import { SENDERS, sendEmail } from '../../emails/resend.ts';
import { rateAllow, sha256, sql } from './db.ts';
import { ApiError, SITE, json } from './http.ts';
import type { MemberRow, Viewer } from './session.ts';
import { replyByEmailConfigured } from './features.ts';
import { fetchReceived, htmlToText, parseInboundEvent, verifySvix, type ResendFetch } from './inbound-resend.ts';
import { replyAs } from './posts.ts';

// Addresses ---------------------------------------------------------------------------------------

const SALT = 'outbrick-community-reply-v1';
const replyKey = (apiKey: string) => Buffer.from(hkdfSync('sha256', apiKey, SALT, 'reply-to', 32));
const mac = (apiKey: string, m: number, t: number, n: number) => createHmac('sha256', replyKey(apiKey)).update(`reply\n${m}\n${t}\n${n}`).digest('hex').slice(0, 32);

export type ReplyToken = { memberId: number; threadId: number; notificationId: number };

export function replyAddress(apiKey: string, domain: string, token: ReplyToken): string {
  const { memberId: m, threadId: t, notificationId: n } = token;
  return `reply+${m.toString(36)}.${t.toString(36)}.${n.toString(36)}.${mac(apiKey, m, t, n)}@${domain.trim().toLowerCase()}`;
}

/** The token in a reply+ address on `domain`, if its MAC is right. */
export function readReplyAddress(apiKey: string, domain: string, address: string): ReplyToken | null {
  const m = /^reply\+([0-9a-z]{1,11})\.([0-9a-z]{1,11})\.([0-9a-z]{1,11})\.([0-9a-f]{32})@(.+)$/.exec(address.trim().toLowerCase());
  if (!m || !apiKey || m[5] !== domain.trim().toLowerCase()) return null;
  const [memberId, threadId, notificationId] = [m[1], m[2], m[3]].map((v) => Number.parseInt(v, 36));
  if (![memberId, threadId, notificationId].every((v) => Number.isSafeInteger(v) && v > 0)) return null;
  const expected = mac(apiKey, memberId, threadId, notificationId);
  let diff = 0;
  for (let i = 0; i < 32; i++) diff |= expected.charCodeAt(i) ^ m[4].charCodeAt(i);
  return diff === 0 ? { memberId, threadId, notificationId } : null;
}

/** The Reply-To for a notification email, or null when reply by email is off. */
export function replyToFor(token: ReplyToken, env: Record<string, string | undefined> = process.env): string | null {
  if (!replyByEmailConfigured(env)) return null;
  return replyAddress(env.RESEND_API_KEY ?? '', env.COMMUNITY_REPLY_DOMAIN ?? '', token);
}

// Quoted history ----------------------------------------------------------------------------------

/** Lines that start the quoted history in the mail clients our members use, in our five languages. */
const attribution = [
  /^on\b.{0,300}\bwrote:?\s*$/i,
  /^le\b.{0,300}\ba écrit\s?:?\s*$/i,
  /^am\b.{0,300}\bschrieb.{0,200}:?\s*$/i,
  /^el\b.{0,300}\bescribió:?\s*$/i,
  /のメッセージ[:：]\s*$/,
  /^-{2,}\s*(original message|message d’origine|message d'origine|ursprüngliche nachricht|mensaje original)\s*-{2,}\s*$/i,
  /^_{10,}\s*$/, // Outlook's rule above its "From:" block
];

/** The new text of a reply: everything above the quoted history, without `>` lines or a signature. */
export function stripQuoted(text: string): string {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  const kept: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // "On Tue, 7 Oct 2026 at 10:00, OutBrick Community <reply+…>" + "wrote:" on the next line.
    const joined = i + 1 < lines.length ? `${line} ${lines[i + 1].trim()}` : line;
    if (attribution.some((re) => re.test(line)) || (/^(on|le|am|el)\b/i.test(line) && attribution.slice(0, 4).some((re) => re.test(joined)))) break;
    if (lines[i] === '-- ' || line === '--') break; // the signature separator
    if (line.startsWith('>')) continue;
    kept.push(lines[i].replace(/\s+$/, ''));
  }
  return kept.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

// The webhook -------------------------------------------------------------------------------------

let fetcher: ResendFetch | null = null;
/** Tests replace Resend's API for reading a received message. */
export function setInboundFetchForTests(f: ResendFetch | null): void {
  fetcher = f;
}

async function viewerById(id: number): Promise<Viewer | null> {
  const [row] = (await sql`SELECT id::int, display_name, email, email_verified, locale, role, bio, email_prefs, banned_until, ban_reason, created_at, deleted_at
                             FROM members WHERE id = ${id} AND deleted_at IS NULL`) as unknown as MemberRow[];
  if (!row) return null;
  return { ...row, banned: Boolean(row.banned_until && new Date(row.banned_until).getTime() > Date.now()) };
}

const outcome = async (messageId: string, value: string, extra: { memberId?: number; threadId?: number; postId?: number } = {}) => {
  await sql`UPDATE inbound_emails SET outcome = ${value}, member_id = ${extra.memberId ?? null}, thread_id = ${extra.threadId ?? null}, post_id = ${extra.postId ?? null}
             WHERE message_id = ${messageId}`;
  return json({ ok: true, outcome: value });
};

function bounceReason(error: unknown): BounceReason {
  if (!(error instanceof ApiError)) return 'failed';
  if (error.code === 'locked') return 'locked';
  if (error.code === 'banned' || (error.code === 'forbidden' && /suspended/i.test(error.message))) return 'banned';
  if (error.code === 'rate_limited') return 'rate_limited';
  if (error.code === 'unverified') return 'unverified';
  if (error.code === 'not_found') return 'not_found';
  if (error.status < 500) return 'invalid';
  return 'failed';
}

async function bounce(apiKey: string, member: Viewer, threadId: number, messageId: string, reason: BounceReason, text: string): Promise<void> {
  // Never more than a few a day: a misbehaving autoresponder must not start a loop.
  if (!(await rateAllow(`reply-bounce:${member.id}`, 5, 86400))) return;
  const locale = (['en', 'fr', 'de', 'es', 'ja'].includes(member.locale) ? member.locale : 'en') as CommunityLocale;
  const [t] = await sql`SELECT id::int AS id, slug, title FROM threads WHERE id = ${threadId}`;
  const threadUrl = t ? `${SITE}${threadPath(locale, { id: Number(t.id), slug: String(t.slug) })}` : communityUrl(locale);
  const rendered = communityReplyBounce({ locale, reason, threadTitle: t ? String(t.title) : '', threadUrl, text, manageUrl: communityUrl(locale, '/settings') });
  const sent = await sendEmail(
    apiKey,
    { ...SENDERS.community, to: member.email, subject: rendered.subject, html: rendered.html, text: rendered.text, headers: { 'Auto-Submitted': 'auto-replied' }, tags: [{ name: 'form', value: 'community-reply-bounce' }, { name: 'locale', value: locale }] },
    `community-bounce-${sha256(messageId).slice(0, 32)}`,
  );
  if (!sent.ok) console.error(`[community-inbound] bounce failed: ${sent.error}`);
}

export async function inboundEmail(req: Request): Promise<Response> {
  const env = process.env;
  if (!replyByEmailConfigured(env)) return json({ error: { code: 'unavailable', message: 'Reply by email is not switched on.' } }, { status: 503 });
  const apiKey = env.RESEND_API_KEY ?? '';
  const domain = (env.COMMUNITY_REPLY_DOMAIN ?? '').trim().toLowerCase();
  const raw = await req.text();
  if (raw.length > 2_000_000) return json({ error: { code: 'too_large', message: 'Too large.' } }, { status: 413 });
  if (!verifySvix(env.RESEND_WEBHOOK_SECRET ?? '', req.headers, raw)) return json({ error: { code: 'bad_signature', message: 'The webhook signature does not verify.' } }, { status: 401 });

  let event: unknown;
  try {
    event = JSON.parse(raw);
  } catch {
    return json({ ok: true, outcome: 'ignored' });
  }
  let message = parseInboundEvent(event);
  if (!message) return json({ ok: true, outcome: 'ignored' });
  const messageId = (message.messageId || `resend:${message.emailId}`).slice(0, 500);
  const [claimed] = await sql`INSERT INTO inbound_emails (message_id) VALUES (${messageId}) ON CONFLICT DO NOTHING RETURNING message_id`;
  if (!claimed) return json({ ok: true, outcome: 'duplicate' });

  if (message.text === null && message.html === null) {
    try {
      message = await fetchReceived(apiKey, message, fetcher ?? fetch);
    } catch (error) {
      console.error('[community-inbound] could not read the message from Resend:', error instanceof Error ? error.message : String(error));
      await sql`DELETE FROM inbound_emails WHERE message_id = ${messageId}`;
      return json({ error: { code: 'upstream', message: 'Could not read the message yet.' } }, { status: 500 });
    }
  }

  const token = message.recipients.map((r) => readReplyAddress(apiKey, domain, r)).find((t) => t !== null) ?? null;
  if (!token) return outcome(messageId, 'bad_token');
  const member = await viewerById(token.memberId);
  if (!member || !member.email_verified || member.email.trim().toLowerCase() !== message.from) {
    console.log(`[community-inbound] ignored a reply for member ${token.memberId}: the sender is not that member`);
    return outcome(messageId, 'wrong_sender', { memberId: member?.id });
  }
  const [note] = await sql`SELECT n.id, p.number FROM notifications n LEFT JOIN posts p ON p.id = n.post_id
                            WHERE n.id = ${token.notificationId} AND n.member_id = ${member.id} AND n.thread_id = ${token.threadId}`;
  if (!note) return outcome(messageId, 'bad_token', { memberId: member.id });
  const auto = (message.headers['auto-submitted'] ?? 'no').toLowerCase();
  if (auto !== 'no' || /^(auto|bulk|list|junk)$/i.test(message.headers.precedence ?? '')) return outcome(messageId, 'auto_reply', { memberId: member.id, threadId: token.threadId });

  const text = stripQuoted(message.text ?? htmlToText(message.html ?? ''));
  if (!text) {
    await bounce(apiKey, member, token.threadId, messageId, 'empty', '');
    return outcome(messageId, 'bounced:empty', { memberId: member.id, threadId: token.threadId });
  }
  try {
    const { post } = await replyAs(member, token.threadId, { body: text, replyTo: note.number == null ? null : Number(note.number) });
    console.log(`[community-inbound] member ${member.id} replied by email in thread ${token.threadId}${post.pending ? ' (held for review)' : ''}`);
    return outcome(messageId, post.pending ? 'posted:pending' : 'posted', { memberId: member.id, threadId: token.threadId, postId: post.id });
  } catch (error) {
    const reason = bounceReason(error);
    if (reason === 'failed') console.error('[community-inbound] reply failed:', error instanceof Error ? error.message : String(error));
    await bounce(apiKey, member, token.threadId, messageId, reason, text);
    return outcome(messageId, `bounced:${reason}`, { memberId: member.id, threadId: token.threadId });
  }
}
