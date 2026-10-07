// Merging one thread into another (moderators and up), phase 2.
//
//   POST /api/community/mod/threads/:id/merge  { intoThreadId } → { thread: ThreadSummary, moved }
//
// What happens, in one transaction:
//   - Every post of the source thread moves into the target. The target's opening post stays
//     number 1; every other post of both threads is renumbered in date order (created_at, then
//     id), and "in reply to #n" references follow their posts to the new numbers.
//   - Read positions become "read up to the last post you had read, at its new number".
//   - Solved: the target keeps its solution; if it had none and the source had one, the
//     source's solution becomes the target's.
//   - Follows of the source become follows of the target, unless the member already has a level
//     on the target (a mute there stays a mute).
//   - Votes: combineVotes(), the feature board's hook (community-fx); then the target's count
//     is recounted from the votes table.
//   - Notifications, FAQ entries and release records that pointed at the source point at the
//     target.
//   - The source becomes a hidden, locked stub with `merged_into` = target. GET /threads/:id of
//     it answers { redirect: { id, slug } } (see threads.ts → getThread).
//   - A mod_log row 'thread.merge', and one 'merged' notification for each author of a moved
//     post (except the moderator), pointing at their first moved post.

import type { MergeThreadResponse } from '../../lib/community/contract.ts';
import { transaction, type Query } from './db.ts';
import { badRequest, json, notFound, readJson } from './http.ts';
import { requireRole } from './session.ts';
import { idParam, modLog, num, refreshThreadCounters, summaryById } from './forum.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

// Phase 2 (community-p2) HOOK — community-fx's vote combiner. Until the branches are merged
// this is a no-op (the source's votes stay on the stub); replace the body with
//   await theirCombineVotes(fromThreadId, intoThreadId, q)
// when wiring. It runs inside the merge transaction, before the target's vote_count is recounted.
export async function combineVotes(fromThreadId: number, intoThreadId: number, q: Query): Promise<void> {
  void fromThreadId;
  void intoThreadId;
  void q;
}

/** How many redirects a merged URL follows (a thread merged into one later merged elsewhere). */
const MAX_HOPS = 5;

/** Where a merged thread now lives, following chained merges; null when it was not merged. */
export async function mergedTarget(run: Query, threadId: number): Promise<{ id: number; slug: string } | null> {
  let id = threadId;
  let found: { id: number; slug: string } | null = null;
  for (let hop = 0; hop < MAX_HOPS; hop++) {
    const [row] = await run(`SELECT t.merged_into::int AS into_id, m.slug, m.deleted_at FROM threads t LEFT JOIN threads m ON m.id = t.merged_into WHERE t.id = $1`, [id]);
    if (!row || row.into_id == null || row.deleted_at != null) break;
    found = { id: num(row.into_id), slug: String(row.slug) };
    id = found.id;
  }
  return found;
}

export async function mergeThreads(actorId: number, sourceId: number, targetId: number): Promise<{ moved: number }> {
  if (sourceId === targetId) throw badRequest('invalid', 'A thread cannot be merged into itself.', { intoThreadId: 'same_thread' });
  return transaction(async (q) => {
    // Lock both rows, lower id first, so two merges cannot deadlock.
    const locked = await q(
      `SELECT id::int AS id, title, deleted_at, merged_into, solved_post_id::int AS solved_post_id, author_id::int AS author_id
         FROM threads WHERE id IN ($1, $2) ORDER BY id FOR UPDATE`,
      [sourceId, targetId],
    );
    const source = locked.find((r) => num(r.id) === sourceId);
    const target = locked.find((r) => num(r.id) === targetId);
    if (!source || source.deleted_at != null || source.merged_into != null) throw notFound('That thread does not exist.');
    if (!target || target.deleted_at != null) throw badRequest('invalid', 'The thread to merge into does not exist.', { intoThreadId: 'not_found' });
    if (target.merged_into != null) throw badRequest('invalid', 'That thread was itself merged into another; merge into that one.', { intoThreadId: 'merged' });

    const posts = await q(
      `SELECT id::int AS id, thread_id::int AS thread_id, number, reply_to, author_id::int AS author_id
         FROM posts WHERE thread_id IN ($1, $2)
        ORDER BY (thread_id = $2 AND number = 1) DESC, created_at, id`,
      [sourceId, targetId],
    );
    if (!posts.some((p) => num(p.thread_id) === targetId && num(p.number) === 1)) throw badRequest('invalid', 'The thread to merge into has no opening post.', { intoThreadId: 'not_found' });

    // The new numbering, and the old (thread, number) → new number map for references.
    const newNumber = new Map<string, number>();
    posts.forEach((p, i) => newNumber.set(`${num(p.thread_id)}:${num(p.number)}`, i + 1));
    const plan = posts.map((p, i) => ({
      id: num(p.id),
      n: i + 1,
      r: p.reply_to == null ? null : (newNumber.get(`${num(p.thread_id)}:${num(p.reply_to)}`) ?? null),
    }));

    // Read positions, computed from the old numbers before they change.
    const reads = await q(
      `WITH m AS (SELECT (x->>'t')::bigint AS t, (x->>'o')::int AS o, (x->>'n')::int AS n FROM jsonb_array_elements($1::jsonb) x)
       SELECT r.member_id::int AS member_id, max(m.n)::int AS n
         FROM reads r JOIN m ON m.t = r.thread_id AND m.o <= r.last_number
        WHERE r.thread_id IN ($2, $3)
        GROUP BY r.member_id`,
      [JSON.stringify(posts.map((p, i) => ({ t: num(p.thread_id), o: num(p.number), n: i + 1 }))), sourceId, targetId],
    );

    // Two passes so the (thread_id, number) unique key never sees a collision.
    await q(
      `UPDATE posts p SET thread_id = $2, number = -((x->>'n')::int), reply_to = (x->>'r')::int
         FROM jsonb_array_elements($1::jsonb) x WHERE p.id = (x->>'id')::bigint`,
      [JSON.stringify(plan), targetId],
    );
    await q(`UPDATE posts SET number = -number WHERE thread_id = $1 AND number < 0`, [targetId]);

    await q(`DELETE FROM reads WHERE thread_id IN ($1, $2)`, [sourceId, targetId]);
    if (reads.length) {
      await q(
        `INSERT INTO reads (member_id, thread_id, last_number)
         SELECT (x->>'m')::bigint, $2, (x->>'n')::int FROM jsonb_array_elements($1::jsonb) x`,
        [JSON.stringify(reads.map((r) => ({ m: num(r.member_id), n: num(r.n) }))), targetId],
      );
    }

    if (target.solved_post_id == null && source.solved_post_id != null) await q(`UPDATE threads SET solved_post_id = $1 WHERE id = $2`, [source.solved_post_id, targetId]);

    await q(
      `INSERT INTO follows (member_id, target_type, target_id, level, created_at)
       SELECT member_id, 'thread', $2, level, created_at FROM follows WHERE target_type = 'thread' AND target_id = $1
       ON CONFLICT (member_id, target_type, target_id) DO NOTHING`,
      [sourceId, targetId],
    );
    await q(`DELETE FROM follows WHERE target_type = 'thread' AND target_id = $1`, [sourceId]);

    await combineVotes(sourceId, targetId, q);
    await q(`UPDATE threads SET vote_count = (SELECT count(*) FROM votes WHERE thread_id = $1) WHERE id = $1`, [targetId]);

    // One release notice per member per thread: drop the source's where the target has one.
    await q(
      `DELETE FROM notifications s WHERE s.thread_id = $1 AND s.kind = 'release'
          AND EXISTS (SELECT 1 FROM notifications t WHERE t.thread_id = $2 AND t.kind = 'release' AND t.member_id = s.member_id)`,
      [sourceId, targetId],
    );
    await q(`UPDATE notifications SET thread_id = $2 WHERE thread_id = $1`, [sourceId, targetId]);
    await q(`UPDATE faq_entries SET thread_id = $2 WHERE thread_id = $1`, [sourceId, targetId]);
    await q(`UPDATE app_releases SET thread_id = $2 WHERE thread_id = $1`, [sourceId, targetId]);

    await q(
      `UPDATE threads SET merged_into = $2, hidden = true, locked = true, pending = false, solved_post_id = NULL,
              reply_count = 0, vote_count = (SELECT count(*) FROM votes WHERE thread_id = $1), updated_at = now()
        WHERE id = $1`,
      [sourceId, targetId],
    );
    await refreshThreadCounters(q, targetId);

    const moved = posts.filter((p) => num(p.thread_id) === sourceId);
    await modLog(q, actorId, 'thread.merge', 'thread', sourceId, '', { into: targetId, moved: moved.length });

    // Tell each author whose posts moved, once, at their first moved post.
    const firstByAuthor = new Map<number, number>();
    for (const p of moved) if (!firstByAuthor.has(num(p.author_id))) firstByAuthor.set(num(p.author_id), num(p.id));
    const notices = [...firstByAuthor].filter(([author]) => author !== actorId).map(([m, post]) => ({ m, post }));
    if (notices.length) {
      await q(
        `INSERT INTO notifications (member_id, kind, thread_id, post_id, actor_id, data)
         SELECT m.id, 'merged', $2::bigint, (x->>'post')::bigint, $3::bigint, $4::jsonb
           FROM jsonb_array_elements($1::jsonb) x JOIN members m ON m.id = (x->>'m')::bigint
          WHERE m.deleted_at IS NULL`,
        [JSON.stringify(notices), targetId, actorId, JSON.stringify({ fromThreadId: sourceId, fromTitle: String(source.title) })],
      );
    }
    return { moved: moved.length };
  });
}

export const mergeThread: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'moderator');
  const sourceId = idParam(params.id);
  const body = await readJson(req);
  const into = typeof body.intoThreadId === 'number' ? body.intoThreadId : typeof body.intoThreadId === 'string' ? Number(body.intoThreadId) : Number.NaN;
  if (!Number.isSafeInteger(into) || into <= 0) throw badRequest('invalid', 'Choose the thread to merge into.', { intoThreadId: 'invalid' });
  const { moved } = await mergeThreads(viewer.id, sourceId, into);
  const result: MergeThreadResponse = { thread: await summaryById(into, viewer), moved };
  return json(result);
};
