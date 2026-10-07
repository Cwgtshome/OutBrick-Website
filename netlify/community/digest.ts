// The weekly digest (phase 2): opt-in, Mondays, run by netlify/functions/community-digest.mts.
//
// Who: members with `email_prefs.digest = true` (the default is off), a confirmed address that
// is not a placeholder, not deleted and not banned.
//
// What, for the seven days before the run, in the member's language (threads in their language
// or English):
//   - the top five threads of each category they watch (Announcements aside), ranked by visible
//     posts that week, then votes, then the latest activity;
//   - new release announcements;
//   - their own threads from the last 60 days that still have no reply.
// A member with nothing in any section gets no email (the week is recorded as 'empty').
//
// Once per member per ISO week: the week is claimed in `digest_sends` before sending (a second
// run, or an overlapping one, finds the claim and skips), Resend gets an Idempotency-Key of
// member + week, and a failed send releases the claim for the next run. The function runs from
// 08:00 UTC every ten minutes until 10:50, so a large list that does not fit in one run's time
// budget is finished by the later runs, and the later runs are no-ops once everyone has theirs.

import { threadPath, type CommunityLocale } from '../../lib/community/contract.ts';
import { communityUrl } from '../../emails/community.ts';
import { communityWeeklyDigest, digestHasContent, type CategoryKindName, type DigestThread } from '../../emails/community-digest.ts';
import { SENDERS, sendEmail, type OutgoingEmail, type ResendResult } from '../../emails/resend.ts';
import { sql } from './db.ts';
import { SITE } from './http.ts';
import { listUnsubscribeHeaders, unsubscribeUrl } from './auth/inbox.ts';

export type Sender = (apiKey: string, email: OutgoingEmail, idempotencyKey?: string) => Promise<ResendResult>;
export type DigestSummary = { week: string; sent: number; empty: number; failed: number; remaining: boolean };

const TOP_PER_CATEGORY = 5;
const UNANSWERED_DAYS = 60;

/** ISO 8601 week of `date` (UTC), e.g. "2026-W41". */
export function isoWeek(date: Date): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day); // the Thursday of this week decides the year
  const yearStart = Date.UTC(d.getUTCFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

const asLocale = (v: unknown): CommunityLocale => (['en', 'fr', 'de', 'es', 'ja', 'pt-BR'].includes(String(v)) ? (v as CommunityLocale) : 'en');
const url = (locale: CommunityLocale, t: Record<string, unknown>) => `${SITE}${threadPath(locale, { id: Number(t.id), slug: String(t.slug) })}`;

type Member = { id: number; display_name: string; email: string; locale: string };

/** The digest's sections for one member, from the week ending at `now`. */
export async function digestContent(member: Member, now: Date) {
  const locale = asLocale(member.locale);
  const since = new Date(now.getTime() - 7 * 86400_000).toISOString();
  const langs = JSON.stringify([...new Set([locale, 'en'])]);

  const followed = await sql`
    SELECT c.id::int AS id, c.kind FROM follows f JOIN categories c ON c.id = f.target_id
     WHERE f.member_id = ${member.id} AND f.target_type = 'category' AND f.level = 'watch' AND NOT c.archived AND c.kind <> 'announcements'
     ORDER BY c.position, c.id`;
  const categories: { kind: CategoryKindName; threads: DigestThread[] }[] = [];
  for (const cat of followed) {
    const rows = await sql`
      SELECT t.id::int AS id, t.slug, t.title, t.reply_count::int AS replies, t.vote_count::int AS votes,
             (SELECT count(*)::int FROM posts p WHERE p.thread_id = t.id AND p.created_at > ${since}::timestamptz
                 AND NOT p.hidden AND NOT p.pending AND p.deleted_at IS NULL) AS recent
        FROM threads t
       WHERE t.category_id = ${cat.id} AND t.deleted_at IS NULL AND t.merged_into IS NULL AND NOT t.hidden AND NOT t.pending
         AND t.last_post_at > ${since}::timestamptz
         AND t.language IN (SELECT jsonb_array_elements_text(${langs}::jsonb))
       ORDER BY recent DESC, t.vote_count DESC, t.last_post_at DESC, t.id DESC
       LIMIT ${TOP_PER_CATEGORY}`;
    const threads = rows.filter((r) => Number(r.recent) > 0).map((r) => ({ title: String(r.title), url: url(locale, r), replies: Number(r.replies), votes: cat.kind === 'ideas' ? Number(r.votes) : undefined }));
    if (threads.length) categories.push({ kind: cat.kind as CategoryKindName, threads });
  }

  const releaseRows = await sql`
    SELECT t.id::int AS id, t.slug, t.release_version FROM threads t
     WHERE t.release_version IS NOT NULL AND t.created_at > ${since}::timestamptz
       AND t.deleted_at IS NULL AND t.merged_into IS NULL AND NOT t.hidden AND NOT t.pending
     ORDER BY t.created_at DESC LIMIT 3`;
  const releases = releaseRows.map((r) => ({ version: String(r.release_version), url: url(locale, r) }));

  const unansweredRows = await sql`
    SELECT t.id::int AS id, t.slug, t.title FROM threads t JOIN categories c ON c.id = t.category_id
     WHERE t.author_id = ${member.id} AND t.reply_count = 0 AND c.kind <> 'announcements'
       AND t.deleted_at IS NULL AND t.merged_into IS NULL AND NOT t.hidden AND NOT t.pending
       AND t.created_at > ${new Date(now.getTime() - UNANSWERED_DAYS * 86400_000).toISOString()}::timestamptz
     ORDER BY t.created_at DESC LIMIT 5`;
  const unanswered = unansweredRows.map((r) => ({ title: String(r.title), url: url(locale, r), replies: 0 }));
  return { locale, categories, releases, unanswered };
}

let warned = false;

export async function runDigest(opts: { apiKey?: string; send?: Sender; now?: Date; budgetMs?: number; pauseMs?: number; limit?: number } = {}): Promise<DigestSummary> {
  const now = opts.now ?? new Date();
  const week = isoWeek(now);
  const summary: DigestSummary = { week, sent: 0, empty: 0, failed: 0, remaining: false };
  const apiKey = opts.apiKey ?? process.env.RESEND_API_KEY ?? '';
  if (!apiKey) {
    if (!warned) console.log('[community-digest] RESEND_API_KEY is not set; no digests are sent.');
    warned = true;
    return summary;
  }
  const send = opts.send ?? sendEmail;
  const started = Date.now();
  const budget = opts.budgetMs ?? 22_000;
  const pause = opts.pauseMs ?? 550; // Resend's default limit is two requests a second

  const members = (await sql`
    SELECT m.id::int AS id, m.display_name, m.email, m.locale FROM members m
     WHERE m.deleted_at IS NULL AND m.email_verified AND (m.banned_until IS NULL OR m.banned_until <= now())
       AND m.email_prefs->>'digest' = 'true'
       AND m.email NOT LIKE '%.invalid' AND m.email NOT LIKE '%@invalid'
       AND NOT EXISTS (SELECT 1 FROM digest_sends d WHERE d.member_id = m.id AND d.week = ${week})
     ORDER BY m.id
     LIMIT ${opts.limit ?? 1000}`) as unknown as Member[];

  for (const member of members) {
    if (Date.now() - started > budget) {
      summary.remaining = true;
      break;
    }
    const [claimed] = await sql`INSERT INTO digest_sends (member_id, week) VALUES (${member.id}, ${week}) ON CONFLICT DO NOTHING RETURNING member_id`;
    if (!claimed) continue;
    const content = await digestContent(member, now);
    if (!digestHasContent(content)) {
      await sql`UPDATE digest_sends SET status = 'empty' WHERE member_id = ${member.id} AND week = ${week}`;
      summary.empty++;
      continue;
    }
    const { locale } = content;
    const unsub = unsubscribeUrl(apiKey, member.id, 'digest');
    const rendered = communityWeeklyDigest({
      name: member.display_name,
      ...content,
      communityUrl: communityUrl(locale),
      manageUrl: communityUrl(locale, '/settings'),
      unsubscribeUrl: unsub,
      unsubscribeKind: 'digest',
    });
    const result = await send(
      apiKey,
      {
        ...SENDERS.community,
        to: member.email,
        subject: rendered.subject,
        html: rendered.html,
        text: rendered.text,
        headers: listUnsubscribeHeaders(unsub),
        tags: [{ name: 'form', value: 'community-weekly-digest' }, { name: 'locale', value: locale }],
      },
      `community-weekly-${member.id}-${week}`,
    );
    if (!result.ok) {
      console.error(`[community-digest] member ${member.id}: ${result.error}`);
      await sql`DELETE FROM digest_sends WHERE member_id = ${member.id} AND week = ${week}`;
      summary.failed++;
      continue;
    }
    await sql`UPDATE digest_sends SET status = 'sent' WHERE member_id = ${member.id} AND week = ${week}`;
    summary.sent++;
    if (pause) await new Promise((resolve) => setTimeout(resolve, pause));
  }
  if (summary.sent || summary.failed || summary.empty) console.log(`[community-digest] ${week}: sent ${summary.sent}, empty ${summary.empty}, failed ${summary.failed}${summary.remaining ? ', more next run' : ''}`);
  return summary;
}
