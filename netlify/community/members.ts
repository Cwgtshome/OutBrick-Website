// A member's public profile: name, role, bio, when they joined, how much they have posted and
// how many of their answers were marked as solutions, and their latest threads. Never the email.
// A deleted account shows as "Former member" with nothing else about it.

import type { MemberProfile } from '../../lib/community/contract.ts';
import { json, notFound } from './http.ts';
import { currentMember } from './session.ts';
import { profileExtras } from './people.ts';
import { Params, idParam, iso, num, publicMember, run, txt, threadColumns, threadJoins, threadSummary, threadVisible } from './forum.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

export const getMember: Handler = async (req, params) => {
  const viewer = await currentMember(req);
  const id = idParam(params.id);
  const [m] = await run(
    `SELECT id::int AS m_id, display_name AS m_name, role AS m_role, (deleted_at IS NOT NULL) AS m_deleted, top_badge AS m_badge, bio, created_at,
            (SELECT count(*)::int FROM posts p JOIN threads t ON t.id = p.thread_id
              WHERE p.author_id = members.id AND NOT p.hidden AND NOT p.pending AND p.deleted_at IS NULL
                AND t.deleted_at IS NULL AND NOT t.hidden) AS post_count,
            (SELECT count(*)::int FROM threads t JOIN posts p ON p.id = t.solved_post_id
              WHERE p.author_id = members.id AND t.deleted_at IS NULL AND NOT t.hidden) AS solved_count
       FROM members WHERE id = $1`,
    [id],
  );
  if (!m) throw notFound('That member does not exist.');
  const deleted = Boolean(m.m_deleted);
  const profile: MemberProfile = {
    member: {
      ...publicMember(m, 'm_'),
      bio: deleted ? '' : txt(m.bio),
      joinedAt: iso(m.created_at),
      postCount: num(m.post_count),
      solvedCount: num(m.solved_count),
    },
    recentThreads: [],
    ...(await profileExtras(id, deleted)),
  };
  if (!deleted) {
    const p = new Params();
    const cols = threadColumns(p, viewer);
    const visible = threadVisible(p, viewer);
    const rows = await run(`SELECT ${cols} ${threadJoins} WHERE t.author_id = ${p.add(id)} AND ${visible} ORDER BY t.created_at DESC LIMIT 10`, p.values);
    profile.recentThreads = rows.map((r) => threadSummary(r, viewer));
  }
  return json(profile);
};
