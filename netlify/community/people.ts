// Members as the community sees them: profile statistics, badges and recent posts, the
// leaderboards, and @mention suggestions for the composer.
//
//   GET /members/:id                      MemberProfile gains stats, badges, recentPosts (members.ts calls profileExtras)
//   GET /leaderboard?period=&kind=        → LeaderboardResponse
//   GET /members/suggest?q=               → MemberSuggestResponse (signed in; never an email)
//
// Only public content counts (not hidden, pending or deleted, in a visible thread), and deleted
// and banned members appear nowhere. Leaderboards leave the OutBrick team (team and admin roles,
// the release account among them) out of the members' list and show them separately.

import type {
  LeaderboardEntry,
  LeaderboardKind,
  LeaderboardPeriod,
  LeaderboardResponse,
  MemberProfile,
  MemberStats,
  MemberSuggestResponse,
  ProfilePost,
} from '../../lib/community/contract.ts';
import { ipHash } from './db.ts';
import { json, oneOf } from './http.ts';
import { requireMember } from './session.ts';
import { iso, num, publicMember, run } from './forum.ts';
import { listBadges } from './badges.ts';
import { rateLimitOrThrow } from './threads.ts';
import { plainExcerpt } from '../../emails/community.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

const visiblePost = `NOT p.hidden AND NOT p.pending AND p.deleted_at IS NULL AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending`;
const visibleThread = `t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending`;
const activeMember = (alias: string) => `${alias}.deleted_at IS NULL AND (${alias}.banned_until IS NULL OR ${alias}.banned_until <= now())`;
const STAFF_ROLES = `('team', 'admin')`;

// Profiles ------------------------------------------------------------------------------------

export async function memberStats(memberId: number): Promise<MemberStats> {
  const [r] = await run(
    `SELECT
       (SELECT count(*)::int FROM posts p JOIN threads t ON t.id = p.thread_id WHERE p.author_id = $1 AND ${visiblePost}) AS posts,
       (SELECT count(*)::int FROM threads t WHERE t.author_id = $1 AND ${visibleThread}) AS threads,
       (SELECT count(*)::int FROM threads t JOIN posts p ON p.id = t.solved_post_id WHERE p.author_id = $1 AND p.author_id <> t.author_id AND ${visiblePost}) AS solved,
       (SELECT count(*)::int FROM reactions x JOIN members rm ON rm.id = x.member_id JOIN posts p ON p.id = x.post_id JOIN threads t ON t.id = p.thread_id
         WHERE p.author_id = $1 AND ${visiblePost} AND ${activeMember('rm')}) AS reactions,
       (SELECT count(*)::int FROM threads t JOIN categories c ON c.id = t.category_id WHERE t.author_id = $1 AND c.kind = 'ideas' AND t.status = 'shipped' AND ${visibleThread}) AS shipped,
       (SELECT count(*)::int FROM threads t JOIN categories c ON c.id = t.category_id WHERE t.author_id = $1 AND c.kind = 'bugs'
         AND t.status IN ('confirmed', 'fixed', 'released') AND ${visibleThread}) AS bugs`,
    [memberId],
  );
  return {
    posts: num(r?.posts),
    threads: num(r?.threads),
    solved: num(r?.solved),
    reactionsReceived: num(r?.reactions),
    ideasShipped: num(r?.shipped),
    bugsConfirmed: num(r?.bugs),
  };
}

export async function recentPosts(memberId: number, limit = 10): Promise<ProfilePost[]> {
  const rows = await run(
    `SELECT p.id::int AS id, p.number, p.body_md, p.created_at, t.id::int AS thread_id, t.slug, t.title
       FROM posts p JOIN threads t ON t.id = p.thread_id
      WHERE p.author_id = $1 AND ${visiblePost}
      ORDER BY p.created_at DESC, p.id DESC LIMIT ${limit}`,
    [memberId],
  );
  return rows.map((r) => ({
    id: num(r.id),
    number: num(r.number),
    thread: { id: num(r.thread_id), slug: String(r.slug), title: String(r.title) },
    excerpt: plainExcerpt(String(r.body_md), 200),
    createdAt: iso(r.created_at),
  }));
}

const noStats: MemberStats = { posts: 0, threads: 0, solved: 0, reactionsReceived: 0, ideasShipped: 0, bugsConfirmed: 0 };

/** What MemberProfile adds for the feature board. A deleted member shows nothing. */
export async function profileExtras(memberId: number, deleted: boolean): Promise<Pick<MemberProfile, 'stats' | 'badges' | 'recentPosts'>> {
  if (deleted) return { stats: { ...noStats }, badges: [], recentPosts: [] };
  const [stats, badges, posts] = await Promise.all([memberStats(memberId), listBadges(memberId), recentPosts(memberId)]);
  return { stats, badges, recentPosts: posts };
}

// Leaderboards --------------------------------------------------------------------------------

const periods: readonly LeaderboardPeriod[] = ['week', 'month', 'all'];
const kinds: readonly LeaderboardKind[] = ['helpers', 'ideas', 'bugs'];
const periodDays: Record<LeaderboardPeriod, number> = { week: 7, month: 30, all: 36500 };
const BOARD_SIZE = 20;

function scoreSql(kind: LeaderboardKind): { cte: string; detail: string[] } {
  const since = `now() - make_interval(days => $1::int)`;
  if (kind === 'helpers') {
    return {
      cte: `s AS (SELECT p.author_id AS member_id, count(*) AS solved FROM threads t JOIN posts p ON p.id = t.solved_post_id
                   WHERE p.author_id <> t.author_id AND ${visiblePost} AND p.created_at > ${since} GROUP BY 1),
            r AS (SELECT p.author_id AS member_id, count(*) AS reactions FROM reactions x JOIN members rm ON rm.id = x.member_id
                   JOIN posts p ON p.id = x.post_id JOIN threads t ON t.id = p.thread_id
                   WHERE ${visiblePost} AND ${activeMember('rm')} AND x.created_at > ${since} GROUP BY 1),
            sc AS (SELECT COALESCE(s.member_id, r.member_id) AS member_id, COALESCE(s.solved, 0)::int AS solved, COALESCE(r.reactions, 0)::int AS reactions,
                          (COALESCE(s.solved, 0) + COALESCE(r.reactions, 0))::int AS score
                     FROM s FULL JOIN r ON r.member_id = s.member_id)`,
      detail: ['solved', 'reactions'],
    };
  }
  if (kind === 'ideas') {
    return {
      cte: `sc AS (SELECT t.author_id AS member_id, count(*)::int AS votes, count(*)::int AS score
                     FROM votes v JOIN threads t ON t.id = v.thread_id JOIN categories c ON c.id = t.category_id JOIN members vm ON vm.id = v.member_id
                    WHERE c.kind = 'ideas' AND ${visibleThread} AND ${activeMember('vm')} AND v.member_id <> t.author_id AND v.created_at > ${since}
                    GROUP BY 1)`,
      detail: ['votes'],
    };
  }
  return {
    cte: `sc AS (SELECT t.author_id AS member_id, count(*)::int AS confirmed, count(*)::int AS score
                   FROM threads t JOIN categories c ON c.id = t.category_id
                  WHERE c.kind = 'bugs' AND t.status IN ('confirmed', 'fixed', 'released') AND ${visibleThread}
                    AND COALESCE(t.status_changed_at, t.created_at) > ${since}
                  GROUP BY 1)`,
    detail: ['confirmed'],
  };
}

async function board(kind: LeaderboardKind, period: LeaderboardPeriod, staff: boolean): Promise<LeaderboardEntry[]> {
  const { cte, detail } = scoreSql(kind);
  const rows = await run(
    `WITH ${cte}
     SELECT sc.*, m.id::int AS m_id, m.display_name AS m_name, m.role AS m_role, false AS m_deleted, m.top_badge AS m_badge
       FROM sc JOIN members m ON m.id = sc.member_id
      WHERE sc.score > 0 AND ${activeMember('m')} AND m.role ${staff ? 'IN' : 'NOT IN'} ${STAFF_ROLES}
      ORDER BY sc.score DESC, m.id
      LIMIT ${BOARD_SIZE}`,
    [periodDays[period]],
  );
  let rank = 0;
  let last = Number.NaN;
  return rows.map((r, i) => {
    const score = num(r.score);
    if (score !== last) rank = i + 1;
    last = score;
    return { rank, member: publicMember(r, 'm_'), score, detail: Object.fromEntries(detail.map((k) => [k, num(r[k])])) };
  });
}

export const getLeaderboard: Handler = async (_req, _params, url) => {
  const period = oneOf(url.searchParams.get('period'), periods, 'week');
  const kind = oneOf(url.searchParams.get('kind'), kinds, 'helpers');
  const [entries, team] = await Promise.all([board(kind, period, false), board(kind, period, true)]);
  const res: LeaderboardResponse = { period, kind, entries, team };
  // The same for everyone, so a minute in any cache is fine.
  return json(res, { headers: { 'Cache-Control': 'public, max-age=60' } });
};

// Mention suggestions -------------------------------------------------------------------------

export const SUGGEST_MAX = 8;

export const suggestMembers: Handler = async (req, _params, url) => {
  const viewer = await requireMember(req);
  const q = (url.searchParams.get('q') ?? '').replace(/^@/, '').replace(/\s+/g, ' ').trim().slice(0, 40);
  if (!q) return json({ members: [] } satisfies MemberSuggestResponse);
  await rateLimitOrThrow([
    [`suggest:member:${viewer.id}`, 120, 60],
    [`suggest:ip:${ipHash(req)}`, 240, 60],
  ]);
  const cols = `m.id::int AS m_id, m.display_name AS m_name, m.role AS m_role, false AS m_deleted, m.top_badge AS m_badge`;
  const where = `${activeMember('m')} AND m.name_chosen`;
  const prefix = `${q.toLowerCase().replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
  const rows = await run(
    `SELECT ${cols} FROM members m WHERE ${where} AND lower(m.display_name) LIKE $1 ESCAPE '\\'
      ORDER BY char_length(m.display_name), lower(m.display_name), m.id LIMIT ${SUGGEST_MAX}`,
    [prefix],
  );
  if (rows.length < SUGGEST_MAX && q.length >= 2) {
    const seen = rows.map((r) => num(r.m_id));
    const fuzzy = await run(
      `SELECT ${cols} FROM members m
        WHERE ${where} AND similarity(m.display_name, $1) >= 0.2
          AND m.id NOT IN (SELECT jsonb_array_elements_text($2::jsonb)::bigint)
        ORDER BY similarity(m.display_name, $1) DESC, m.id LIMIT ${SUGGEST_MAX - rows.length}`,
      [q, JSON.stringify(seen)],
    );
    rows.push(...fuzzy);
  }
  const res: MemberSuggestResponse = { members: rows.map((r) => publicMember(r, 'm_')) };
  return json(res);
};
