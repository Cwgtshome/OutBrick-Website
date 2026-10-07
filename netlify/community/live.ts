// Live updates for an open page, cheap enough to poll.
//
//   GET /threads/:id/updates?after=<postNumber> → ThreadUpdatesResponse
//       The thread page polls this every 20 seconds while it is visible. It never counts a
//       view, and answers from the browser's cache for 5 seconds (private: what a member sees
//       depends on who they are, so no shared cache may keep it).
//   GET /pulse → PulseResponse
//       The header bell: unread notifications (0 signed out) and when the newest visible thread
//       was started. Also private, 5 seconds.

import type { PulseResponse, ThreadUpdatesResponse } from '../../lib/community/contract.ts';
import { int, json } from './http.ts';
import { currentMember } from './session.ts';
import { Params, idParam, isoOrNull, num, postColumns, postView, postVisible, run, threadVisible, visibleThread } from './forum.ts';
import { decoratePosts } from './reactions.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

const cacheHeaders = { 'Cache-Control': 'private, max-age=5', Vary: 'Cookie' };
export const UPDATES_MAX = 10;

export const getUpdates: Handler = async (req, params, url) => {
  const viewer = await currentMember(req);
  const id = idParam(params.id);
  const thread = await visibleThread(id, viewer);
  const after = int(url.searchParams.get('after'), 0, 0, 1_000_000_000);
  const p = new Params();
  const visible = postVisible(p, viewer);
  const tid = p.add(id);
  const a = p.add(after);
  const [counts] = await run(
    `SELECT count(*) FILTER (WHERE p.number > ${a})::int AS n, max(p.number) AS last FROM posts p WHERE p.thread_id = ${tid} AND ${visible}`,
    p.values,
  );
  const newPosts = num(counts?.n);
  let latest: ThreadUpdatesResponse['latest'] = [];
  if (newPosts) {
    const rows = await run(
      `SELECT ${postColumns} FROM posts p JOIN members m ON m.id = p.author_id
        WHERE p.thread_id = ${tid} AND p.number > ${a} AND ${visible} ORDER BY p.number LIMIT ${UPDATES_MAX}`,
      p.values,
    );
    const [replies] = await run(`SELECT EXISTS (SELECT 1 FROM posts WHERE thread_id = $1 AND number > 1 AND deleted_at IS NULL) AS yes`, [id]);
    const ctx = { viewer, locked: thread.locked, solvedPostId: thread.solved_post_id, hasReplies: Boolean(replies?.yes) };
    latest = await decoratePosts(rows.map((r) => postView(r, ctx)), viewer);
  }
  const res: ThreadUpdatesResponse = { newPosts, lastNumber: Math.max(after, num(counts?.last)), latest };
  return json(res, { headers: cacheHeaders });
};

export const getPulse: Handler = async (req) => {
  const viewer = await currentMember(req);
  let unread = 0;
  if (viewer) {
    const [row] = await run(`SELECT count(*)::int AS n FROM notifications WHERE member_id = $1 AND read_at IS NULL AND kind <> 'welcome'`, [viewer.id]);
    unread = num(row?.n);
  }
  const p = new Params();
  const [latest] = await run(`SELECT max(t.created_at) AS at FROM threads t WHERE ${threadVisible(p, viewer)}`, p.values);
  const res: PulseResponse = { unreadNotifications: unread, latestThreadAt: isoOrNull(latest?.at) };
  return json(res, { headers: cacheHeaders });
};
