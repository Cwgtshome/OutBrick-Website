// The community's emails from notifications: run every five minutes by
// netlify/functions/community-notify.mts.
//
// Rows in `notifications` are written by the forum (replies, mentions, follows, status changes,
// solved answers, release posts, moderation) and, for the welcome, by sign-in. This picks the
// ones that are at least two minutes old (so a quick edit or delete settles first) and have not
// been emailed or skipped, and for each member:
//
//   - skips them, recording why in `email_skipped`, when the member is deleted, banned (except
//     moderation notices, which explain the ban), has no confirmed address, has switched that kind
//     off, wrote the post themselves, or when the post or thread has since been hidden, held or
//     deleted (an author who has deleted their account shows as "Former member", as on the forum);
//   - sends the welcome on its own, moderation notices on their own, and everything else as one
//     email for one item or one grouped email for several (release announcements from news@,
//     the rest from support@);
//   - sends at most six emails per member per hour; the rest wait and go as one grouped email
//     on a later run;
//   - claims rows before sending and gives each batch a Resend Idempotency-Key derived from its
//     notification ids, so overlapping runs or a retry never send the same email twice.
//
// Email preferences: every kind is on unless the member's `email_prefs` has `{ kind: false }`.

import { threadPath, type CommunityLocale } from '../../lib/community/contract.ts';
import { communityDigest, communityNotification, communityUrl, communityWelcome, plainExcerpt, type NotificationItem } from '../../emails/community.ts';
import { communityKinds, type CommunityKind, type UnsubscribeKind } from '../../emails/community-i18n.ts';
import { SENDERS, sendEmail, type OutgoingEmail, type ResendResult } from '../../emails/resend.ts';
import { SITE } from './http.ts';
import { sha256, sql } from './db.ts';
import { listUnsubscribeHeaders, unsubscribeUrl } from './auth/inbox.ts';

export const HOURLY_CAP = 6;
export const SETTLE_SECONDS = 120;
/** A welcome waits this long for an unconfirmed member to confirm their address. */
const WELCOME_WAIT_DAYS = 7;

export function wantsEmail(prefs: Record<string, unknown> | null | undefined, kind: string): boolean {
  if (kind === 'welcome') return true;
  return (prefs ?? {})[kind] !== false;
}

type Row = {
  id: number;
  member_id: number;
  kind: string;
  actor_id: number | null;
  data: Record<string, unknown>;
  created_at: string | Date;
  display_name: string;
  email: string;
  email_verified: boolean;
  locale: string;
  email_prefs: Record<string, unknown>;
  banned: boolean;
  deleted: boolean;
  actor_name: string | null;
  thread_id: number | null;
  thread_title: string | null;
  thread_slug: string | null;
  thread_hidden: boolean | null;
  post_number: number | null;
  body_md: string | null;
  post_gone: boolean;
};

export type Sender = (apiKey: string, email: OutgoingEmail, idempotencyKey?: string) => Promise<ResendResult>;
export type NotifySummary = { sent: number; skipped: number; deferred: number; failed: number };

let warned = false;

const parse = (v: unknown) => (typeof v === 'string' ? (JSON.parse(v) as Record<string, unknown>) : ((v as Record<string, unknown>) ?? {}));
const isKind = (k: string): k is CommunityKind => (communityKinds as readonly string[]).includes(k);

/** Why a row gets no email ('wait': not yet, try again later), or null to send it. */
function skipReason(row: Row, now: number): string | null {
  if (row.deleted) return 'deleted';
  if (row.banned && row.kind !== 'moderation') return 'banned';
  if (row.kind === 'welcome') {
    if (row.email_verified) return null;
    return now - new Date(row.created_at).getTime() > WELCOME_WAIT_DAYS * 86400_000 ? 'unverified' : 'wait';
  }
  if (!row.email_verified) return 'unverified';
  if (!isKind(row.kind)) return 'unknown_kind';
  if (!wantsEmail(row.email_prefs, row.kind)) return 'pref_off';
  if (row.actor_id != null && row.actor_id === row.member_id) return 'self';
  if (row.thread_id == null || row.thread_title == null) return 'gone';
  if (row.kind !== 'moderation' && (row.thread_hidden || row.post_gone)) return 'hidden';
  return null;
}

function itemOf(row: Row, locale: CommunityLocale): NotificationItem {
  const data = row.data ?? {};
  const kind = row.kind as CommunityKind;
  const str = (v: unknown) => (typeof v === 'string' && v.trim() ? v : null);
  return {
    kind,
    actorName: row.actor_name,
    threadTitle: row.thread_title ?? '',
    url: `${SITE}${threadPath(locale, { id: Number(row.thread_id), slug: String(row.thread_slug ?? 'thread') }, row.post_number)}`,
    excerpt: plainExcerpt(str(data.excerpt) ?? row.body_md ?? '', 400),
    status: str(data.status),
    statusNote: str(data.statusNote),
    version: str(data.version),
    reason: str(data.reason),
  };
}

const batchKey = (prefix: string, memberId: number, ids: number[]) => `community-${prefix}-${memberId}-${sha256(ids.join(',')).slice(0, 32)}`;

async function claim(ids: number[]): Promise<number[]> {
  const rows = await sql`UPDATE notifications SET emailed_at = now()
                          WHERE id IN (SELECT jsonb_array_elements_text(${JSON.stringify(ids)}::jsonb)::bigint)
                            AND emailed_at IS NULL AND email_skipped IS NULL
                          RETURNING id::int AS id`;
  return rows.map((r) => Number(r.id));
}

async function release(ids: number[]): Promise<void> {
  await sql`UPDATE notifications SET emailed_at = NULL WHERE id IN (SELECT jsonb_array_elements_text(${JSON.stringify(ids)}::jsonb)::bigint)`;
}

async function skip(ids: number[], reason: string): Promise<void> {
  if (!ids.length) return;
  await sql`UPDATE notifications SET email_skipped = ${reason}
             WHERE id IN (SELECT jsonb_array_elements_text(${JSON.stringify(ids)}::jsonb)::bigint) AND emailed_at IS NULL`;
}

async function sentLastHour(memberId: number): Promise<number> {
  const [row] = await sql`SELECT count(*)::int AS n FROM rate_events WHERE key = ${`notify:member:${memberId}`} AND at > now() - interval '1 hour'`;
  return Number(row?.n ?? 0);
}

export async function runNotify(opts: { apiKey?: string; send?: Sender; limit?: number; budgetMs?: number } = {}): Promise<NotifySummary> {
  const summary: NotifySummary = { sent: 0, skipped: 0, deferred: 0, failed: 0 };
  const apiKey = opts.apiKey ?? process.env.RESEND_API_KEY ?? '';
  if (!apiKey) {
    if (!warned) console.log('[community-notify] RESEND_API_KEY is not set; no community emails are sent.');
    warned = true;
    return summary;
  }
  const send = opts.send ?? sendEmail;
  const started = Date.now();
  const budget = opts.budgetMs ?? 22_000;

  const rows = (await sql`
    SELECT n.id::int AS id, n.member_id::int AS member_id, n.kind, n.actor_id::int AS actor_id, n.data, n.created_at,
           m.display_name, m.email, m.email_verified, m.locale, m.email_prefs,
           (m.banned_until IS NOT NULL AND m.banned_until > now()) AS banned, (m.deleted_at IS NOT NULL) AS deleted,
           CASE WHEN a.deleted_at IS NOT NULL THEN 'Former member' ELSE a.display_name END AS actor_name,
           t.id::int AS thread_id, t.title AS thread_title, t.slug AS thread_slug,
           (t.hidden OR t.pending OR t.deleted_at IS NOT NULL) AS thread_hidden,
           p.number AS post_number,
           COALESCE(p.body_md, (SELECT fp.body_md FROM posts fp WHERE fp.thread_id = t.id AND fp.number = 1)) AS body_md,
           (p.id IS NOT NULL AND (p.hidden OR p.pending OR p.deleted_at IS NOT NULL)) AS post_gone
      FROM notifications n
      JOIN members m ON m.id = n.member_id
      LEFT JOIN members a ON a.id = n.actor_id
      LEFT JOIN threads t ON t.id = n.thread_id
      LEFT JOIN posts p ON p.id = n.post_id
     WHERE n.emailed_at IS NULL AND n.email_skipped IS NULL
       AND n.created_at < now() - make_interval(secs => ${SETTLE_SECONDS})
     ORDER BY n.member_id, n.created_at, n.id
     LIMIT ${opts.limit ?? 500}`) as unknown as Row[];

  const byMember = new Map<number, Row[]>();
  for (const row of rows) {
    row.data = parse(row.data);
    row.email_prefs = parse(row.email_prefs);
    const list = byMember.get(row.member_id) ?? [];
    list.push(row);
    byMember.set(row.member_id, list);
  }

  const now = Date.now();
  for (const [memberId, list] of byMember) {
    if (Date.now() - started > budget) break;
    const skips = new Map<string, number[]>();
    const sendable: Row[] = [];
    for (const row of list) {
      const reason = skipReason(row, now);
      if (reason === 'wait') summary.deferred++;
      else if (reason) skips.set(reason, [...(skips.get(reason) ?? []), row.id]);
      else sendable.push(row);
    }
    for (const [reason, ids] of skips) {
      await skip(ids, reason);
      summary.skipped += ids.length;
    }
    if (!sendable.length) continue;

    const first = sendable[0];
    const locale = (['en', 'fr', 'de', 'es', 'ja'].includes(first.locale) ? first.locale : 'en') as CommunityLocale;
    const batches: { kind: 'welcome' | 'single' | 'group'; rows: Row[]; news: boolean }[] = [];
    for (const row of sendable.filter((r) => r.kind === 'welcome')) batches.push({ kind: 'welcome', rows: [row], news: false });
    for (const row of sendable.filter((r) => r.kind === 'moderation')) batches.push({ kind: 'single', rows: [row], news: false });
    const others = sendable.filter((r) => r.kind !== 'welcome' && r.kind !== 'moderation' && r.kind !== 'release');
    const releases = sendable.filter((r) => r.kind === 'release');
    if (others.length) batches.push({ kind: others.length === 1 ? 'single' : 'group', rows: others, news: false });
    if (releases.length) batches.push({ kind: releases.length === 1 ? 'single' : 'group', rows: releases, news: true });

    let used = await sentLastHour(memberId);
    for (const batch of batches) {
      if (used >= HOURLY_CAP) {
        summary.deferred += batch.rows.length;
        continue;
      }
      const claimed = new Set(await claim(batch.rows.map((r) => r.id)));
      const rowsNow = batch.rows.filter((r) => claimed.has(r.id));
      if (!rowsNow.length) continue;
      const ids = rowsNow.map((r) => r.id);
      const manageUrl = communityUrl(locale, '/settings');
      let email: OutgoingEmail;
      let key: string;
      if (batch.kind === 'welcome') {
        const rendered = communityWelcome({ locale, name: first.display_name, manageUrl });
        email = { ...SENDERS.community, to: first.email, subject: rendered.subject, html: rendered.html, text: rendered.text, tags: [{ name: 'form', value: 'community-welcome' }, { name: 'locale', value: locale }] };
        key = `community-welcome-${memberId}`;
      } else {
        const items = rowsNow.map((r) => itemOf(r, locale));
        const kinds = [...new Set(items.map((i) => i.kind))];
        const unsubKind: UnsubscribeKind = kinds.length === 1 ? kinds[0] : 'all';
        const unsub = unsubscribeUrl(apiKey, memberId, unsubKind);
        const links = { manageUrl, unsubscribeUrl: unsub, unsubscribeKind: unsubKind };
        const rendered =
          rowsNow.length === 1 ? communityNotification({ locale, item: items[0], ...links }) : communityDigest({ locale, items, notificationsUrl: communityUrl(locale, '/notifications'), ...links });
        const sender = batch.news ? SENDERS.communityNews : SENDERS.community;
        email = {
          ...sender,
          to: first.email,
          subject: rendered.subject,
          html: rendered.html,
          text: rendered.text,
          headers: listUnsubscribeHeaders(unsub),
          tags: [{ name: 'form', value: rowsNow.length === 1 ? `community-${items[0].kind}` : 'community-digest' }, { name: 'locale', value: locale }],
        };
        key = batchKey('notify', memberId, ids);
      }
      const result = await send(apiKey, email, key);
      if (!result.ok) {
        console.error(`[community-notify] member ${memberId}: ${result.error}`);
        await release(ids);
        summary.failed += ids.length;
        continue;
      }
      await sql`INSERT INTO rate_events (key) VALUES (${`notify:member:${memberId}`})`;
      used++;
      summary.sent++;
    }
  }
  if (summary.sent || summary.failed) console.log(`[community-notify] sent ${summary.sent}, skipped ${summary.skipped}, deferred ${summary.deferred}, failed ${summary.failed}`);
  return summary;
}
