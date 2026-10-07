// Badges: who has earned what, awarding them, and staff grants.
//
// Earned badges are awarded two ways. Where it costs one small query, on the spot:
//   first_post    when a member's post goes up without review
//   helpful       when one of their answers is marked as the solution (levels 1, 10, 50)
//   bug_hunter    when a moderator moves their bug report to confirmed, fixed or released
//   idea_maker    when a moderator moves their idea to planned, in progress or shipped
//   shipped       when their idea is marked shipped
//   popular_post  when one of their posts reaches 25 reactions
// and by the daily job (community-badges.mts), which finds everything the spot checks missed
// (posts approved from the queue, answers counted after a hide is undone …) plus:
//   welcomer      replies to ten different newcomers' first threads (not their own)
//   anniversary   a year of membership (level = years, one award per year)
// beta_tester and accessibility_champion are granted by staff only.
//
// Counting rules: only visible content (not hidden, pending or deleted; in a visible thread)
// counts, an answer to your own question never counts towards helpful, reactions from deleted
// or banned members never count, and nobody deleted or banned is awarded anything automatically.
// The release bot's account earns nothing.
//
// A badge is awarded once per (badge, level). Revoking keeps the row with revoked_at set, so the
// daily job does not hand it straight back; a staff grant can restore it.
//
// Each award writes a 'badge' notification, data { badge, level }, with the granting staff
// member as actor (null when earned); netlify/community/notify.ts emails it unless the member
// switched 'badge' off.

import type { BadgeGrantResponse, BadgeKey, MemberBadge } from '../../lib/community/contract.ts';
import { badgeKeys, badgeOrder, helpfulLevels } from '../../lib/community/contract.ts';
import { sql, transaction, type Query } from './db.ts';
import { badRequest, json, notFound, readJson } from './http.ts';
import { requireRole } from './session.ts';
import { idParam, iso, modLog, num, run, txt } from './forum.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

/** Members who may be awarded automatically. `m` is the members alias. The address is releases.ts's RELEASES_EMAIL (not imported: releases.ts imports this file's neighbours). */
const autoEligible = `m.deleted_at IS NULL AND (m.banned_until IS NULL OR m.banned_until <= now()) AND lower(m.email) <> 'releases@outbrick.site'`;

/** Visible-post conditions for alias p in thread alias t. */
const visiblePost = `NOT p.hidden AND NOT p.pending AND p.deleted_at IS NULL AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending`;

export const confirmedBugStatuses = ['confirmed', 'fixed', 'released'] as const;
export const plannedIdeaStatuses = ['planned', 'in_progress', 'shipped'] as const;

/** Keep members.top_badge, the badge shown next to the name, in step with member_badges. */
export async function refreshTopBadge(q: Query, memberId: number): Promise<void> {
  await q(
    `UPDATE members SET top_badge = (
        SELECT b.badge FROM member_badges b
          JOIN jsonb_array_elements_text($2::jsonb) WITH ORDINALITY AS o(k, ord) ON o.k = b.badge
         WHERE b.member_id = $1 AND b.revoked_at IS NULL
         ORDER BY o.ord LIMIT 1)
      WHERE id = $1`,
    [memberId, JSON.stringify(badgeOrder)],
  );
}

/**
 * Award `badge` at `level` to a member, once. Returns whether it was new. Automatic awards
 * (grantedBy null) skip deleted and banned members and the release account; staff grants skip
 * only deleted members.
 */
export async function award(q: Query, memberId: number, badge: BadgeKey, level = 1, grantedBy: number | null = null): Promise<boolean> {
  const who = grantedBy == null ? autoEligible : 'm.deleted_at IS NULL';
  const rows = await q(
    `INSERT INTO member_badges (member_id, badge, level, granted_by)
     SELECT m.id, $2::text, $3::int, $4::bigint FROM members m WHERE m.id = $1::bigint AND ${who}
     ON CONFLICT (member_id, badge, level) DO NOTHING
     RETURNING member_id`,
    [memberId, badge, level, grantedBy],
  );
  if (!rows.length) return false;
  await notifyBadge(q, memberId, badge, level, grantedBy);
  await refreshTopBadge(q, memberId);
  return true;
}

async function notifyBadge(q: Query, memberId: number, badge: BadgeKey, level: number, actorId: number | null): Promise<void> {
  await q(`INSERT INTO notifications (member_id, kind, actor_id, data) VALUES ($1, 'badge', $2, $3::jsonb)`, [memberId, actorId, JSON.stringify({ badge, level })]);
}

/** A member's current badges, best first (then the highest level first). */
export async function listBadges(memberId: number, q?: Query): Promise<MemberBadge[]> {
  const text = `SELECT badge, level, awarded_at, (granted_by IS NOT NULL) AS granted FROM member_badges WHERE member_id = $1 AND revoked_at IS NULL`;
  const rows = q ? await q(text, [memberId]) : await run(text, [memberId]);
  return rows
    .map((r) => ({ key: r.badge as BadgeKey, level: num(r.level), awardedAt: iso(r.awarded_at), granted: Boolean(r.granted) }))
    .sort((a, b) => badgeOrder.indexOf(a.key) - badgeOrder.indexOf(b.key) || b.level - a.level);
}

// Spot checks ---------------------------------------------------------------------------------

/** A post went up visibly: the author's first_post. */
export async function onVisiblePost(q: Query, authorId: number): Promise<void> {
  await award(q, authorId, 'first_post');
}

/** Solved answers that count for 'helpful': visible, and not an answer to your own thread. */
export async function solvedCount(q: Query, memberId: number): Promise<number> {
  const [row] = await q(
    `SELECT count(*)::int AS n FROM threads t JOIN posts p ON p.id = t.solved_post_id
      WHERE p.author_id = $1 AND p.author_id <> t.author_id AND ${visiblePost}`,
    [memberId],
  );
  return num(row?.n);
}

/** An answer was marked solved: every helpful level its author has now reached. */
export async function onSolved(q: Query, answerAuthorId: number): Promise<void> {
  const n = await solvedCount(q, answerAuthorId);
  for (const level of helpfulLevels) if (n >= level) await award(q, answerAuthorId, 'helpful', level);
}

/** A moderator changed a thread's status: the author's bug_hunter, idea_maker or shipped. */
export async function onStatus(q: Query, threadId: number): Promise<void> {
  const [t] = await q(
    `SELECT t.author_id::int AS author_id, t.status, c.kind FROM threads t JOIN categories c ON c.id = t.category_id
      WHERE t.id = $1 AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending`,
    [threadId],
  );
  if (!t) return;
  const status = txt(t.status);
  const author = num(t.author_id);
  if (t.kind === 'bugs' && (confirmedBugStatuses as readonly string[]).includes(status)) await award(q, author, 'bug_hunter');
  if (t.kind === 'ideas' && (plannedIdeaStatuses as readonly string[]).includes(status)) await award(q, author, 'idea_maker');
  if (t.kind === 'ideas' && status === 'shipped') await award(q, author, 'shipped');
}

export const POPULAR_REACTIONS = 25;

/** Reactions on a post that count: from members who are neither deleted nor banned. */
export const countedReactions = (postAlias: string) =>
  `(SELECT count(*) FROM reactions r JOIN members rm ON rm.id = r.member_id
     WHERE r.post_id = ${postAlias}.id AND rm.deleted_at IS NULL AND (rm.banned_until IS NULL OR rm.banned_until <= now()))`;

/** A post got a reaction: popular_post at 25. */
export async function onReaction(q: Query, postId: number): Promise<void> {
  const [row] = await q(
    `SELECT p.author_id::int AS author_id, ${countedReactions('p')}::int AS n FROM posts p JOIN threads t ON t.id = p.thread_id WHERE p.id = $1 AND ${visiblePost}`,
    [postId],
  );
  if (row && num(row.n) >= POPULAR_REACTIONS) await award(q, num(row.author_id), 'popular_post');
}

// The daily job -------------------------------------------------------------------------------

export const WELCOMER_THREADS = 10;
const JOB_LIMIT = 2000;

/** Every (member, badge, level) earned and not yet held (or revoked), up to `limit`. */
export async function badgeCandidates(q: Query, limit = JOB_LIMIT): Promise<{ member_id: number; badge: BadgeKey; level: number }[]> {
  const rows = await q(
    `WITH vp AS (
        SELECT p.id, p.author_id, p.thread_id, p.number FROM posts p JOIN threads t ON t.id = p.thread_id WHERE ${visiblePost}
     ),
     solved AS (
        SELECT p.author_id AS member_id, count(*) AS n FROM threads t JOIN posts p ON p.id = t.solved_post_id
         WHERE p.author_id <> t.author_id AND ${visiblePost} GROUP BY p.author_id
     ),
     firsts AS (
        SELECT DISTINCT ON (author_id) id, author_id FROM threads
         WHERE deleted_at IS NULL AND NOT hidden AND NOT pending ORDER BY author_id, created_at, id
     ),
     cand AS (
        SELECT DISTINCT author_id AS member_id, 'first_post' AS badge, 1 AS level FROM vp
        UNION ALL
        SELECT s.member_id, 'helpful', l.level FROM solved s JOIN (SELECT jsonb_array_elements_text($1::jsonb)::int AS level) l ON s.n >= l.level
        UNION ALL
        SELECT DISTINCT t.author_id, 'bug_hunter', 1 FROM threads t JOIN categories c ON c.id = t.category_id
         WHERE c.kind = 'bugs' AND t.status IN ('confirmed', 'fixed', 'released') AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending
        UNION ALL
        SELECT DISTINCT t.author_id, 'idea_maker', 1 FROM threads t JOIN categories c ON c.id = t.category_id
         WHERE c.kind = 'ideas' AND t.status IN ('planned', 'in_progress', 'shipped') AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending
        UNION ALL
        SELECT DISTINCT t.author_id, 'shipped', 1 FROM threads t JOIN categories c ON c.id = t.category_id
         WHERE c.kind = 'ideas' AND t.status = 'shipped' AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending
        UNION ALL
        SELECT vp.author_id, 'welcomer', 1 FROM vp JOIN firsts f ON f.id = vp.thread_id
         WHERE vp.number > 1 AND vp.author_id <> f.author_id
         GROUP BY vp.author_id HAVING count(DISTINCT f.id) >= $2
        UNION ALL
        SELECT m.id, 'anniversary', extract(year FROM age(now(), m.created_at))::int FROM members m
         WHERE m.created_at <= now() - interval '1 year'
        UNION ALL
        SELECT DISTINCT p.author_id, 'popular_post', 1 FROM vp p WHERE ${countedReactions('p')} >= $3
     )
     SELECT DISTINCT c.member_id::int AS member_id, c.badge, c.level::int AS level
       FROM cand c JOIN members m ON m.id = c.member_id
      WHERE ${autoEligible}
        AND NOT EXISTS (SELECT 1 FROM member_badges b WHERE b.member_id = c.member_id AND b.badge = c.badge AND b.level = c.level)
      ORDER BY 1, 2, 3
      LIMIT ${Math.max(1, Math.trunc(limit))}`,
    [JSON.stringify(helpfulLevels), WELCOMER_THREADS, POPULAR_REACTIONS],
  );
  return rows.map((r) => ({ member_id: num(r.member_id), badge: r.badge as BadgeKey, level: num(r.level) }));
}

export async function runBadgeJob(limit = JOB_LIMIT): Promise<{ awarded: number }> {
  return transaction(async (q) => {
    let awarded = 0;
    for (const c of await badgeCandidates(q, limit)) if (await award(q, c.member_id, c.badge, c.level)) awarded++;
    return { awarded };
  });
}

// Staff grants --------------------------------------------------------------------------------

/** POST /mod/members/:id/badges { badge, on, level? } (team and admin) → BadgeGrantResponse */
export const grantBadge: Handler = async (req, params) => {
  const staff = await requireRole(req, 'team');
  const id = idParam(params.id);
  const body = await readJson(req);
  if (!(badgeKeys as readonly string[]).includes(String(body.badge))) throw badRequest('invalid', 'That is not a badge.', { badge: 'invalid' });
  const badge = body.badge as BadgeKey;
  if (typeof body.on !== 'boolean') throw badRequest('invalid', 'on must be true or false.', { on: 'invalid' });
  const levelGiven = body.level !== undefined && body.level !== null;
  const level = levelGiven ? Number(body.level) : 1;
  if (!Number.isSafeInteger(level) || level < 1 || level > 100) throw badRequest('invalid', 'The level is a whole number from 1 to 100.', { level: 'invalid' });
  const [m] = await sql`SELECT id::int AS id FROM members WHERE id = ${id} AND deleted_at IS NULL`;
  if (!m) throw notFound('That member does not exist.');

  const badges = await transaction(async (q) => {
    if (body.on) {
      const restored = await q(
        `UPDATE member_badges SET revoked_at = NULL, revoked_by = NULL, granted_by = $4, awarded_at = now()
          WHERE member_id = $1 AND badge = $2 AND level = $3 AND revoked_at IS NOT NULL RETURNING member_id`,
        [id, badge, level, staff.id],
      );
      if (restored.length) {
        await notifyBadge(q, id, badge, level, staff.id);
        await refreshTopBadge(q, id);
      } else await award(q, id, badge, level, staff.id);
      await modLog(q, staff.id, 'member.badge.grant', 'member', id, '', { badge, level });
    } else {
      // Without a level, every level of the badge is revoked.
      await q(
        `UPDATE member_badges SET revoked_at = now(), revoked_by = $4
          WHERE member_id = $1 AND badge = $2 AND ($3::int IS NULL OR level = $3::int) AND revoked_at IS NULL`,
        [id, badge, levelGiven ? level : null, staff.id],
      );
      await refreshTopBadge(q, id);
      await modLog(q, staff.id, 'member.badge.revoke', 'member', id, '', { badge, level: levelGiven ? level : null });
    }
    return listBadges(id, q);
  });
  const res: BadgeGrantResponse = { badges };
  return json(res);
};
