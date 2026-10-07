// Reactions and bookmarks on posts, and the per-viewer extras every Post in a thread carries.
//
//   POST /posts/:id/reactions { reaction, on } → { reactions: PostReaction[] }
//   POST /posts/:id/bookmark  { on }           → { bookmarked }
//   GET  /me/bookmarks?page=                   → BookmarksResponse (wired in auth/routes.ts,
//                                                because community-auth.mts serves /me/*)
//
// Reactions: a fixed set (contract reactionKinds), one of each kind per member per post, never
// on your own post, never on a hidden, pending or deleted post or in a locked thread (except for
// moderators). They need a verified address, like posting, and are rate-limited. Counts leave out
// reactions from deleted and banned members.
//
// Bookmarks are private: only the member sees them, and the list shows only posts they can
// still see.

import type { BookmarkItem, BookmarksResponse, Post, PostReaction, ReactionKind } from '../../lib/community/contract.ts';
import { reactionKinds } from '../../lib/community/contract.ts';
import { transaction } from './db.ts';
import { ApiError, badRequest, forbidden, int, json, readJson, unauthorized } from './http.ts';
import { currentMember, requireMember, type Viewer } from './session.ts';
import { Params, idParam, isModerator, iso, jsonList, num, postForWrite, postVisible, publicMember, requireCanWrite, run, threadVisible } from './forum.ts';
import { rateLimitOrThrow } from './threads.ts';
import { onReaction } from './badges.ts';
import { plainExcerpt } from '../../emails/community.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

const notBanned = (alias: string) => `${alias}.deleted_at IS NULL AND (${alias}.banned_until IS NULL OR ${alias}.banned_until <= now())`;

/** Every reaction kind for each post id, in reactionKinds order. */
export async function reactionsFor(postIds: number[], viewer: Viewer | null): Promise<Map<number, PostReaction[]>> {
  const out = new Map<number, PostReaction[]>();
  for (const id of postIds) out.set(id, reactionKinds.map((kind) => ({ kind, count: 0, mine: false })));
  if (!postIds.length) return out;
  const rows = await run(
    `SELECT r.post_id::int AS post_id, r.kind, count(*)::int AS n, bool_or(r.member_id = $2::bigint) AS mine
       FROM reactions r JOIN members rm ON rm.id = r.member_id
      WHERE r.post_id IN (SELECT jsonb_array_elements_text($1::jsonb)::bigint) AND ${notBanned('rm')}
      GROUP BY r.post_id, r.kind`,
    [jsonList(postIds), viewer?.id ?? 0],
  );
  for (const r of rows) {
    const entry = out.get(num(r.post_id))?.find((x) => x.kind === r.kind);
    if (entry) {
      entry.count = num(r.n);
      entry.mine = Boolean(r.mine);
    }
  }
  return out;
}

/** Add reactions (and, for a signed-in viewer, `bookmarked`) to posts. Deleted posts get zero counts. */
export async function decoratePosts(posts: Post[], viewer: Viewer | null): Promise<Post[]> {
  const ids = posts.filter((p) => p.id > 0).map((p) => p.id);
  const reactions = await reactionsFor(ids, viewer);
  let marked = new Set<number>();
  if (viewer && ids.length) {
    const rows = await run(`SELECT post_id::int AS id FROM bookmarks WHERE member_id = $1 AND post_id IN (SELECT jsonb_array_elements_text($2::jsonb)::bigint)`, [
      viewer.id,
      jsonList(ids),
    ]);
    marked = new Set(rows.map((r) => num(r.id)));
  }
  for (const post of posts) {
    post.reactions = reactions.get(post.id) ?? reactionKinds.map((kind) => ({ kind, count: 0, mine: false }));
    if (viewer) post.bookmarked = marked.has(post.id);
  }
  return posts;
}

// Reacting ------------------------------------------------------------------------------------

export const react: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  if (!(reactionKinds as readonly string[]).includes(String(body.reaction))) throw badRequest('invalid', 'That is not a reaction.', { reaction: 'invalid' });
  if (typeof body.on !== 'boolean') throw badRequest('invalid', 'on must be true or false.', { on: 'invalid' });
  const kind = body.reaction as ReactionKind;
  requireCanWrite(viewer);
  const { post, thread } = await postForWrite(id, viewer);
  if (num(post.author_id) === viewer.id) throw forbidden('You cannot react to your own post.');
  if (post.deleted_at != null || post.hidden || post.pending) throw badRequest('invalid', 'That post takes no reactions.');
  if (thread.locked && !isModerator(viewer)) throw new ApiError(403, 'locked', 'This thread is locked.');
  await rateLimitOrThrow([
    [`react:min:${viewer.id}`, 30, 60],
    [`react:hour:${viewer.id}`, 300, 3600],
  ]);
  await transaction(async (q) => {
    if (body.on) {
      const added = await q(`INSERT INTO reactions (post_id, member_id, kind) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING RETURNING post_id`, [id, viewer.id, kind]);
      if (added.length) await onReaction(q, id);
    } else await q(`DELETE FROM reactions WHERE post_id = $1 AND member_id = $2 AND kind = $3`, [id, viewer.id, kind]);
  });
  const reactions = (await reactionsFor([id], viewer)).get(id)!;
  return json({ reactions });
};

// Bookmarks -----------------------------------------------------------------------------------

export const BOOKMARK_MAX = 2000;

export const bookmark: Handler = async (req, params) => {
  const viewer = await currentMember(req);
  if (!viewer) throw unauthorized();
  const id = idParam(params.id);
  const body = await readJson(req);
  if (typeof body.on !== 'boolean') throw badRequest('invalid', 'on must be true or false.', { on: 'invalid' });
  await postForWrite(id, viewer);
  await rateLimitOrThrow([[`bookmark:hour:${viewer.id}`, 200, 3600]]);
  if (body.on) {
    const [count] = await run(`SELECT count(*)::int AS n FROM bookmarks WHERE member_id = $1`, [viewer.id]);
    if (num(count?.n) >= BOOKMARK_MAX) throw badRequest('too_many', `You can keep up to ${BOOKMARK_MAX} bookmarks.`);
    await run(`INSERT INTO bookmarks (member_id, post_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`, [viewer.id, id]);
  } else await run(`DELETE FROM bookmarks WHERE member_id = $1 AND post_id = $2`, [viewer.id, id]);
  return json({ bookmarked: body.on });
};

const BOOKMARKS_PAGE = 30;

export async function listBookmarks(req: Request, url: URL): Promise<Response> {
  const viewer = await currentMember(req);
  if (!viewer) throw unauthorized();
  const p = new Params();
  const where = `b.member_id = ${p.add(viewer.id)} AND p.deleted_at IS NULL AND ${postVisible(p, viewer)} AND ${threadVisible(p, viewer)}`;
  const from = `FROM bookmarks b JOIN posts p ON p.id = b.post_id JOIN threads t ON t.id = p.thread_id JOIN members m ON m.id = p.author_id`;
  const [countRow] = await run(`SELECT count(*)::int AS n ${from} WHERE ${where}`, p.values);
  const total = num(countRow?.n);
  const pages = Math.max(1, Math.ceil(total / BOOKMARKS_PAGE));
  const page = int(url.searchParams.get('page'), 1, 1, pages);
  const rows = await run(
    `SELECT p.id::int AS id, p.number, p.body_md, p.created_at, b.created_at AS bookmarked_at,
            t.id::int AS thread_id, t.slug, t.title,
            m.id::int AS m_id, m.display_name AS m_name, m.role AS m_role, (m.deleted_at IS NOT NULL) AS m_deleted, m.top_badge AS m_badge
       ${from} WHERE ${where}
      ORDER BY b.created_at DESC, p.id DESC LIMIT ${BOOKMARKS_PAGE} OFFSET ${(page - 1) * BOOKMARKS_PAGE}`,
    p.values,
  );
  const bookmarks: BookmarkItem[] = rows.map((r) => ({
    post: { id: num(r.id), number: num(r.number), author: publicMember(r, 'm_'), excerpt: plainExcerpt(String(r.body_md), 200), createdAt: iso(r.created_at) },
    thread: { id: num(r.thread_id), slug: String(r.slug), title: String(r.title) },
    bookmarkedAt: iso(r.bookmarked_at),
  }));
  const res: BookmarksResponse = { bookmarks, page, pages, total };
  return json(res);
}
