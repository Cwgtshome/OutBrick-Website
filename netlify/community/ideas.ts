// The feature board: the Ideas category's roadmap, trending and hot sorts, similar-title
// suggestions for the composer, moving votes when two ideas are merged, and linking a release
// announcement into the ideas it shipped.
//
//   GET /roadmap?locale=                   → RoadmapResponse
//   GET /threads/similar?title=&category=  → SimilarThreadsResponse
//   GET /threads?sort=trending | hot       (the ORDER BY comes from here; threads.ts lists)
//
// Statuses for ideas: open | considering | planned | in_progress | shipped | declined.

import type { CommunityLocale, RoadmapColumn, RoadmapResponse, RoadmapStatus, SimilarThreadsResponse } from '../../lib/community/contract.ts';
import { communityLocales, roadmapStatuses, threadPath } from '../../lib/community/contract.ts';
import { ipHash, type Query } from './db.ts';
import { json } from './http.ts';
import { currentMember } from './session.ts';
import { renderMarkdown } from './markdown.ts';
import { Params, num, refreshThreadCounters, run, threadColumns, threadJoins, threadSummary, threadVisible } from './forum.ts';
import { rateLimitOrThrow } from './threads.ts';
import { onStatus } from './badges.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

// Sorts ---------------------------------------------------------------------------------------

/**
 * trending: votes cast in the last 7 days, each weighted by recency (half-life two days), so a
 * vote today counts 1, two days ago 0.5, six days ago 0.125. Ties fall back to all-time votes.
 */
export const trendingOrder = `(SELECT COALESCE(sum(power(0.5, extract(epoch FROM now() - v.created_at) / 172800.0)), 0)
    FROM votes v WHERE v.thread_id = t.id AND v.created_at > now() - interval '7 days') DESC, t.vote_count DESC, t.last_post_at DESC, t.id DESC`;

/**
 * hot: replies (weight 1) and reactions (weight 0.5) in the last 7 days, on visible posts, each
 * decayed with a half-life of two days. Ties fall back to the latest activity.
 */
export const hotOrder = `((SELECT COALESCE(sum(power(0.5, extract(epoch FROM now() - hp.created_at) / 172800.0)), 0)
      FROM posts hp WHERE hp.thread_id = t.id AND hp.number > 1 AND NOT hp.hidden AND NOT hp.pending AND hp.deleted_at IS NULL
       AND hp.created_at > now() - interval '7 days')
   + 0.5 * (SELECT COALESCE(sum(power(0.5, extract(epoch FROM now() - hr.created_at) / 172800.0)), 0)
      FROM reactions hr JOIN posts rp ON rp.id = hr.post_id
     WHERE rp.thread_id = t.id AND NOT rp.hidden AND NOT rp.pending AND rp.deleted_at IS NULL
       AND hr.created_at > now() - interval '7 days')) DESC, t.last_post_at DESC, t.id DESC`;

/** hot lists only threads with something in the last 7 days. */
export const hotFilter = `(EXISTS (SELECT 1 FROM posts hp WHERE hp.thread_id = t.id AND hp.number > 1 AND NOT hp.hidden AND NOT hp.pending AND hp.deleted_at IS NULL AND hp.created_at > now() - interval '7 days')
  OR EXISTS (SELECT 1 FROM reactions hr JOIN posts rp ON rp.id = hr.post_id WHERE rp.thread_id = t.id AND NOT rp.hidden AND NOT rp.pending AND rp.deleted_at IS NULL AND hr.created_at > now() - interval '7 days'))`;

// The roadmap ---------------------------------------------------------------------------------

const COLUMN_LIMIT = 50;
export const SHIPPED_WINDOW_DAYS = 90;

/** ?locale=fr lists French and English ideas; absent or 'all', every language. */
function languageFilter(p: Params, locale: string | null): string {
  if (!locale || locale === 'all' || !communityLocales.includes(locale as CommunityLocale)) return 'TRUE';
  const langs = locale === 'en' ? ['en'] : [locale, 'en'];
  return `t.language IN (SELECT jsonb_array_elements_text(${p.add(JSON.stringify(langs))}::jsonb))`;
}

export const getRoadmap: Handler = async (req, _params, url) => {
  const viewer = await currentMember(req);
  const locale = url.searchParams.get('locale');
  const columns: RoadmapColumn[] = [];
  for (const status of roadmapStatuses) {
    const p = new Params();
    const where = [threadVisible(p, viewer), `c.kind = 'ideas'`, `t.status = ${p.add(status)}`, languageFilter(p, locale)];
    if (status === 'shipped') where.push(`COALESCE(t.status_changed_at, t.updated_at) > now() - make_interval(days => ${SHIPPED_WINDOW_DAYS})`);
    const whereSql = where.join(' AND ');
    const [count] = await run(`SELECT count(*)::int AS n ${threadJoins} WHERE ${whereSql}`, p.values);
    const cols = threadColumns(p, viewer);
    const order = status === 'shipped' ? 'COALESCE(t.status_changed_at, t.updated_at) DESC, t.id DESC' : 't.vote_count DESC, t.last_post_at DESC, t.id DESC';
    const rows = await run(`SELECT ${cols} ${threadJoins} WHERE ${whereSql} ORDER BY ${order} LIMIT ${COLUMN_LIMIT}`, p.values);
    columns.push({ status: status as RoadmapStatus, threads: rows.map((r) => threadSummary(r, viewer)), total: num(count?.n) });
  }
  const res: RoadmapResponse = { columns };
  return json(res);
};

// Similar titles ------------------------------------------------------------------------------

export const SIMILARITY = 0.25;

export const getSimilar: Handler = async (req, _params, url) => {
  const viewer = await currentMember(req);
  const title = (url.searchParams.get('title') ?? '').replace(/\s+/g, ' ').trim().slice(0, 140);
  if (title.length < 4) return json({ threads: [] } satisfies SimilarThreadsResponse);
  await rateLimitOrThrow([[`similar:ip:${ipHash(req)}`, 60, 60]]);
  const p = new Params();
  const where = [threadVisible(p, viewer)];
  const category = url.searchParams.get('category');
  if (category) where.push(`c.slug = ${p.add(category)}`);
  const t = p.add(title);
  where.push(`(similarity(t.title, ${t}) >= ${SIMILARITY} OR to_tsvector('simple', t.title) @@ plainto_tsquery('simple', ${t}))`);
  const cols = threadColumns(p, viewer);
  const rows = await run(
    `SELECT ${cols}, similarity(t.title, ${t}) AS sim ${threadJoins} WHERE ${where.join(' AND ')}
      ORDER BY sim DESC, t.vote_count DESC, t.id DESC LIMIT 5`,
    p.values,
  );
  const res: SimilarThreadsResponse = { threads: rows.map((r) => threadSummary(r, viewer)) };
  return json(res);
};

// Merging -------------------------------------------------------------------------------------

/**
 * Move every vote on `fromThreadId` to `intoThreadId`, one per member: a member who voted for
 * both keeps one vote, and the target's author never gains a vote for their own idea. The vote
 * keeps its original time (so trending is not distorted). Both threads' counts are recounted.
 * Call inside the merge's transaction.
 */
export async function combineVotes(fromThreadId: number, intoThreadId: number, q: Query): Promise<{ moved: number; voteCount: number }> {
  if (fromThreadId === intoThreadId) {
    const [row] = await q(`SELECT vote_count FROM threads WHERE id = $1`, [intoThreadId]);
    return { moved: 0, voteCount: num(row?.vote_count) };
  }
  const moved = await q(
    `INSERT INTO votes (thread_id, member_id, created_at)
     SELECT $2::bigint, v.member_id, v.created_at FROM votes v
      WHERE v.thread_id = $1::bigint AND v.member_id <> (SELECT author_id FROM threads WHERE id = $2::bigint)
     ON CONFLICT (thread_id, member_id) DO NOTHING
     RETURNING member_id`,
    [fromThreadId, intoThreadId],
  );
  await q(`DELETE FROM votes WHERE thread_id = $1`, [fromThreadId]);
  await q(`UPDATE threads SET vote_count = 0 WHERE id = $1`, [fromThreadId]);
  const [row] = await q(`UPDATE threads SET vote_count = (SELECT count(*) FROM votes WHERE thread_id = $1) WHERE id = $1 RETURNING vote_count`, [intoThreadId]);
  return { moved: moved.length, voteCount: num(row?.vote_count) };
}

// Shipped links -------------------------------------------------------------------------------

/** Whether a status note names `version` as a whole version: "Shipped in 5.1" names 5.1 but not 5.10 or 5.1.2. */
export function noteMentionsVersion(note: string | null | undefined, version: string): boolean {
  if (!note) return false;
  const v = version.replace(/\./g, '\\.');
  return new RegExp(`(^|[^0-9.])v?${v}(?![0-9]|\\.[0-9])`, 'i').test(note);
}

/**
 * The release bot posted `version` (announcement thread `announcementId`): reply in every idea
 * it shipped — status shipped with a note naming the version, or shipped_version equal to it —
 * "Shipped in OutBrick X" with a link to the announcement, and give that idea's voters and its
 * author a 'release' notification, data { version, ideaId }. An idea matched by
 * shipped_version that is not yet marked shipped is marked shipped (with the note "Shipped in
 * X" if it had none). Runs inside the bot's transaction, so once per version.
 */
export async function linkShippedIdeas(q: Query, e: { version: string; announcementId: number; announcementSlug: string; botId: number }): Promise<number[]> {
  const candidates = await q(
    `SELECT t.id::int AS id, t.status, t.status_note, t.shipped_version, t.author_id::int AS author_id
       FROM threads t JOIN categories c ON c.id = t.category_id
      WHERE c.kind = 'ideas' AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending
        AND (t.shipped_version = $1 OR (t.status = 'shipped' AND t.status_note LIKE '%' || $1 || '%'))
      ORDER BY t.id`,
    [e.version],
  );
  const ideas = candidates.filter((r) => r.shipped_version === e.version || noteMentionsVersion(r.status_note as string | null, e.version));
  if (!ideas.length) return [];
  const body = `Shipped in OutBrick ${e.version}. [Read the release notes](${threadPath('en', { id: e.announcementId, slug: e.announcementSlug })}).`;
  // Rendered without the database (no @mentions): this runs inside the bot's transaction.
  const rendered = renderMarkdown(body);
  const linked: number[] = [];
  for (const idea of ideas) {
    const ideaId = num(idea.id);
    if (idea.status !== 'shipped') {
      await q(
        `UPDATE threads SET status = 'shipped', status_note = COALESCE(status_note, $2), status_changed_at = now(), updated_at = now() WHERE id = $1`,
        [ideaId, `Shipped in ${e.version}`],
      );
      await onStatus(q, ideaId);
    }
    await q(`UPDATE threads SET shipped_version = $2 WHERE id = $1 AND shipped_version IS NULL`, [ideaId, e.version]);
    const [next] = await q(`SELECT COALESCE(max(number), 0) + 1 AS n FROM posts WHERE thread_id = $1`, [ideaId]);
    const [post] = await q(
      `INSERT INTO posts (thread_id, author_id, number, body_md, body_html, has_link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id::int AS id`,
      [ideaId, e.botId, num(next.n), body, rendered.html, rendered.hasLink],
    );
    await refreshThreadCounters(q, ideaId);
    await q(
      `INSERT INTO notifications (member_id, kind, thread_id, post_id, actor_id, data)
       SELECT m.id, 'release', $1::bigint, $2::bigint, $3::bigint, $4::jsonb FROM members m
        WHERE (m.id IN (SELECT member_id FROM votes WHERE thread_id = $1::bigint) OR m.id = $5::bigint)
          AND m.deleted_at IS NULL AND (m.banned_until IS NULL OR m.banned_until <= now()) AND m.id <> $3::bigint
       ON CONFLICT (member_id, thread_id) WHERE kind = 'release' DO NOTHING`,
      [ideaId, num(post.id), e.botId, JSON.stringify({ version: e.version, ideaId }), num(idea.author_id)],
    );
    linked.push(ideaId);
  }
  return linked;
}
