// Categories and threads: the lists, a thread's page, starting one, and everything done to a
// thread as a whole (edit, status, pin/lock/hide, solve, vote, follow, read position).

import type {
  Category,
  CategoryKind,
  CommunityLocale,
  FollowLevel,
  ThreadDetail,
  ThreadListResponse,
  ThreadSort,
  ThreadStatus,
  ThreadSummary,
} from '../../lib/community/contract.ts';
import { bugStatuses, communityLocales, ideaStatuses, pageSize } from '../../lib/community/contract.ts';
import { ipHash, rateAllow, slugify, transaction } from './db.ts';
import { ApiError, badRequest, filledTooFast, forbidden, int, json, notFound, oneOf, readJson, str, tooMany } from './http.ts';
import { currentMember, hasRole, requireMember, type Viewer } from './session.ts';
import {
  BODY_MAX,
  Params,
  assertImagesOk,
  attachUploads,
  bugFromRow,
  bugToJson,
  categoryBySlug,
  defaultStatus,
  idParam,
  isModerator,
  iso,
  limitFor,
  modLog,
  needsReview,
  num,
  postColumns,
  postView,
  postVisible,
  readBug,
  readLocale,
  refreshThreadCounters,
  renderBody,
  requireCanWrite,
  run,
  solvableKinds,
  txt,
  statusesFor,
  summaryById,
  threadColumns,
  threadJoins,
  threadSummary,
  threadVisible,
  visibleThread,
  type Row,
} from './forum.ts';
import { notifyNewPost, notifySolved, notifyStatus } from './notifications.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

// Categories -------------------------------------------------------------------------------------

export const listCategories: Handler = async (req) => {
  const viewer = await currentMember(req);
  const p = new Params();
  const followJoin = viewer ? `LEFT JOIN follows f ON f.member_id = ${p.add(viewer.id)} AND f.target_type = 'category' AND f.target_id = c.id` : '';
  const rows = await run(
    `SELECT c.id::int AS id, c.slug, c.kind, c.team_only_threads,
            count(t.id)::int AS thread_count, COALESCE(sum(t.reply_count + 1), 0)::int AS post_count, max(t.last_post_at) AS last_post_at
            ${viewer ? ', min(f.level) AS level' : ''}
       FROM categories c
       LEFT JOIN threads t ON t.category_id = c.id AND t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending
       ${followJoin}
      WHERE NOT c.archived
      GROUP BY c.id
      ORDER BY c.position, c.id`,
    p.values,
  );
  const categories: Category[] = rows.map((r) => {
    const category: Category = {
      id: num(r.id),
      slug: String(r.slug),
      kind: r.kind as CategoryKind,
      teamOnlyThreads: Boolean(r.team_only_threads),
      threadCount: num(r.thread_count),
      postCount: num(r.post_count),
      lastPostAt: r.last_post_at == null ? null : iso(r.last_post_at),
    };
    if (viewer) category.following = (r.level as FollowLevel | null) ?? 'none';
    return category;
  });
  return json({ categories });
};

// Lists ------------------------------------------------------------------------------------------

const sorts: readonly ThreadSort[] = ['latest', 'new', 'top', 'unanswered'];

export async function listThreads(
  viewer: Viewer | null,
  query: { category?: string | null; language?: string | null; sort?: string | null; status?: string | null; page?: string | null; author?: string | null },
): Promise<ThreadListResponse> {
  const p = new Params();
  const where = [threadVisible(p, viewer)];
  let categoryFilter = false;
  if (query.category) {
    where.push(`c.slug = ${p.add(query.category)}`);
    categoryFilter = true;
  }
  // language: 'all' (the default), one locale, or a comma list such as "fr,en".
  const langs = (query.language ?? 'all')
    .split(',')
    .map((l) => l.trim())
    .filter((l) => communityLocales.includes(l as CommunityLocale));
  if (langs.length && query.language !== 'all') where.push(`t.language IN (SELECT jsonb_array_elements_text(${p.add(JSON.stringify(langs))}::jsonb))`);
  if (query.status) {
    const all: readonly string[] = [...bugStatuses, ...ideaStatuses];
    if (all.includes(query.status)) where.push(`t.status = ${p.add(query.status)}`);
  }
  if (query.author && /^\d{1,15}$/.test(query.author)) where.push(`t.author_id = ${p.add(Number(query.author))}`);
  const sort = oneOf(query.sort, sorts, 'latest');
  if (sort === 'unanswered') where.push('t.reply_count = 0');
  const order =
    sort === 'new'
      ? 't.created_at DESC, t.id DESC'
      : sort === 'top'
        ? 't.vote_count DESC, t.last_post_at DESC, t.id DESC'
        : sort === 'unanswered'
          ? 't.created_at DESC, t.id DESC'
          : `${categoryFilter ? 't.pinned DESC, ' : ''}t.last_post_at DESC, t.id DESC`;

  const whereSql = where.join(' AND ');
  const [countRow] = await run(`SELECT count(*)::int AS n ${threadJoins} WHERE ${whereSql}`, p.values);
  const total = num(countRow?.n);
  const pages = Math.max(1, Math.ceil(total / pageSize.threads));
  const page = int(query.page, 1, 1, pages);
  const cols = threadColumns(p, viewer);
  const rows = await run(
    `SELECT ${cols} ${threadJoins} WHERE ${whereSql} ORDER BY ${order} LIMIT ${pageSize.threads} OFFSET ${(page - 1) * pageSize.threads}`,
    p.values,
  );
  return { threads: rows.map((r) => threadSummary(r, viewer)), page, pages, total };
}

export const getThreads: Handler = async (req, _params, url) => {
  const viewer = await currentMember(req);
  const s = url.searchParams;
  return json(
    await listThreads(viewer, {
      category: s.get('category'),
      language: s.get('language'),
      sort: s.get('sort'),
      status: s.get('status'),
      page: s.get('page'),
      author: s.get('author'),
    }),
  );
};

// Starting a thread ------------------------------------------------------------------------------

/** What a honeypot hit is told: a convincing success, with nothing stored. */
function decoyThread(title: string, categorySlug: string, kind: CategoryKind, language: CommunityLocale, viewer: Viewer): ThreadSummary {
  const now = new Date().toISOString();
  const author = { id: viewer.id, displayName: viewer.display_name, role: viewer.role };
  return {
    id: 0,
    slug: slugify(title),
    title,
    category: { slug: categorySlug, kind },
    language,
    status: null,
    statusNote: null,
    pinned: false,
    locked: false,
    hidden: false,
    solved: false,
    voteCount: 0,
    replyCount: 0,
    viewCount: 0,
    author,
    lastPoster: author,
    lastPostAt: now,
    createdAt: now,
    releaseVersion: null,
  };
}

export async function rateLimitOrThrow(checks: [string, number, number][]): Promise<void> {
  for (const [key, max, windowSeconds] of checks) {
    if (!(await rateAllow(key, max, windowSeconds))) throw tooMany();
  }
}

export const postThread: Handler = async (req) => {
  const viewer = await requireMember(req);
  const body = await readJson(req, 128 * 1024);
  const category = await categoryBySlug(txt(body.categorySlug));
  const fields: Record<string, string> = {};
  let title = '';
  let md = '';
  try {
    title = str(body, 'title', { min: 4, max: 140, label: 'The title' });
  } catch (e) {
    Object.assign(fields, (e as ApiError).fields);
  }
  try {
    md = str(body, 'body', { min: 1, max: BODY_MAX, label: 'The post' });
  } catch (e) {
    Object.assign(fields, (e as ApiError).fields);
  }
  const language = readLocale(body.language, (viewer.locale as CommunityLocale) ?? 'en');
  let bug = null;
  if (category.kind === 'bugs') {
    try {
      bug = readBug(body.bug);
    } catch (e) {
      Object.assign(fields, (e as ApiError).fields);
    }
  }
  if (Object.keys(fields).length) throw badRequest('invalid', 'Some fields need another look.', fields);

  requireCanWrite(viewer);
  if (category.team_only_threads && !hasRole(viewer, 'team')) throw forbidden('Only the OutBrick team starts threads here. You can reply to any of them.');

  if ((typeof body.website === 'string' && body.website.trim() !== '') || filledTooFast(body)) {
    return json({ thread: decoyThread(title, category.slug, category.kind, language, viewer) }, { status: 201 });
  }

  await rateLimitOrThrow([
    [`thread:day:${viewer.id}`, limitFor(viewer, 20, 60), 86400],
    [`thread:hour:${viewer.id}`, limitFor(viewer, 5, 15), 3600],
  ]);

  const rendered = await renderBody(md, { uploadOwners: [viewer.id] });
  assertImagesOk(rendered);
  const pending = await needsReview(viewer, rendered.hasLink);
  const threadId = await transaction(async (q) => {
    const [t] = await q(
      `INSERT INTO threads (category_id, author_id, title, slug, language, status, bug, pending, last_poster_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb, $8, $2) RETURNING id::int AS id`,
      [category.id, viewer.id, title, slugify(title), language, defaultStatus(category.kind), bug ? bugToJson(bug) : null, pending],
    );
    const id = num(t.id);
    const [post] = await q(
      `INSERT INTO posts (thread_id, author_id, number, body_md, body_html, pending, has_link) VALUES ($1, $2, 1, $3, $4, $5, $6) RETURNING id::int AS id`,
      [id, viewer.id, md, rendered.html, pending, rendered.hasLink],
    );
    await attachUploads(q, num(post.id), rendered.uploadIds);
    await refreshThreadCounters(q, id);
    // The author follows their own thread; muting it later silences replies too.
    await q(`INSERT INTO follows (member_id, target_type, target_id, level) VALUES ($1, 'thread', $2, 'watch') ON CONFLICT DO NOTHING`, [viewer.id, id]);
    await q(`INSERT INTO reads (member_id, thread_id, last_number) VALUES ($1, $2, 1) ON CONFLICT DO NOTHING`, [viewer.id, id]);
    if (!pending) {
      await notifyNewPost(q, {
        threadId: id,
        categoryId: category.id,
        postId: num(post.id),
        postNumber: 1,
        actorId: viewer.id,
        threadAuthorId: viewer.id,
        replyTo: null,
        mentionedIds: rendered.mentionedIds,
      });
    }
    return id;
  });
  return json({ thread: await summaryById(threadId, viewer) }, { status: 201 });
};

// A thread's page --------------------------------------------------------------------------------

async function followLevel(viewer: Viewer | null, type: 'thread' | 'category', id: number): Promise<FollowLevel> {
  if (!viewer) return 'none';
  const [row] = await run(`SELECT level FROM follows WHERE member_id = $1 AND target_type = $2 AND target_id = $3`, [viewer.id, type, id]);
  return (row?.level as FollowLevel | undefined) ?? 'none';
}

/** Count a view at most once an hour per viewer (member id, or IP hash when signed out). */
async function countView(req: Request, viewer: Viewer | null, threadId: number): Promise<boolean> {
  const who = viewer ? `m${viewer.id}` : `ip${ipHash(req)}`;
  if (!(await rateAllow(`view:${threadId}:${who}`, 1, 3600))) return false;
  await run(`UPDATE threads SET view_count = view_count + 1 WHERE id = $1`, [threadId]);
  return true;
}

export async function threadDetail(req: Request, viewer: Viewer | null, threadId: number, query: { page?: string | null; post?: string | null }): Promise<ThreadDetail> {
  const thread = await visibleThread(threadId, viewer);
  if (await countView(req, viewer, threadId)) thread.view_count = num(thread.view_count) + 1;
  const mod = isModerator(viewer);

  const p = new Params();
  const visible = postVisible(p, viewer);
  const tid = p.add(threadId);
  const [counts] = await run(
    `SELECT count(*)::int AS n,
            count(*) FILTER (WHERE p.number > 1 AND p.deleted_at IS NULL)::int AS replies
       FROM posts p WHERE p.thread_id = ${tid} AND ${visible}`,
    p.values,
  );
  const total = num(counts?.n);
  const pages = Math.max(1, Math.ceil(total / pageSize.posts));
  let page = int(query.page, 1, 1, pages);
  // ?post=N opens the page holding post N (links from notifications and search).
  if (query.post && /^\d{1,9}$/.test(query.post)) {
    const q2 = new Params();
    const v2 = postVisible(q2, viewer);
    const [pos] = await run(`SELECT count(*)::int AS n FROM posts p WHERE p.thread_id = ${q2.add(threadId)} AND p.number < ${q2.add(Number(query.post))} AND ${v2}`, q2.values);
    page = Math.min(pages, Math.floor(num(pos?.n) / pageSize.posts) + 1);
  }
  const rows = await run(
    `SELECT ${postColumns} FROM posts p JOIN members m ON m.id = p.author_id
      WHERE p.thread_id = ${tid} AND ${visible}
      ORDER BY p.number LIMIT ${pageSize.posts} OFFSET ${(page - 1) * pageSize.posts}`,
    p.values,
  );
  const [anyReplies] = await run(`SELECT EXISTS (SELECT 1 FROM posts WHERE thread_id = $1 AND number > 1 AND deleted_at IS NULL) AS yes`, [threadId]);
  const ctx = { viewer, locked: thread.locked, solvedPostId: thread.solved_post_id, hasReplies: Boolean(anyReplies?.yes) };

  let solvedPostNumber: number | null = null;
  if (thread.solved_post_id != null) {
    const [s] = await run(`SELECT number FROM posts WHERE id = $1`, [thread.solved_post_id]);
    solvedPostNumber = s ? num(s.number) : null;
  }

  let firstUnread: number | null = null;
  if (viewer) {
    const q3 = new Params();
    const v3 = postVisible(q3, viewer);
    const [u] = await run(
      `SELECT min(p.number) AS n FROM posts p
        WHERE p.thread_id = ${q3.add(threadId)} AND ${v3}
          AND p.number > COALESCE((SELECT last_number FROM reads WHERE member_id = ${q3.add(viewer.id)} AND thread_id = p.thread_id), 0)`,
      q3.values,
    );
    firstUnread = u?.n == null ? null : num(u.n);
  }

  let replyBlocked: string | undefined;
  if (!viewer) replyBlocked = 'signin';
  else if (viewer.banned) replyBlocked = 'banned';
  else if (!viewer.email_verified) replyBlocked = 'unverified';
  else if (thread.locked && !mod) replyBlocked = 'locked';

  const isAuthor = Boolean(viewer && viewer.id === thread.author_id);
  const detail: ThreadDetail = {
    thread: threadSummary(thread, viewer),
    bug: bugFromRow(thread.bug),
    posts: rows.map((r) => postView(r, ctx)),
    page,
    pages,
    solvedPostNumber,
    firstUnread,
    following: await followLevel(viewer, 'thread', threadId),
    canReply: !replyBlocked,
    canModerate: mod,
    canSetStatus: mod && statusesFor(thread.category_kind).length > 0,
    canSolve: Boolean(viewer && !viewer.banned && (isAuthor || mod) && solvableKinds.includes(thread.category_kind)),
  };
  if (replyBlocked) detail.replyBlocked = replyBlocked;
  return detail;
}

export const getThread: Handler = async (req, params, url) => {
  const viewer = await currentMember(req);
  return json(await threadDetail(req, viewer, idParam(params.id), { page: url.searchParams.get('page'), post: url.searchParams.get('post') }));
};

// Editing a thread -------------------------------------------------------------------------------

const TITLE_EDIT_WINDOW_MS = 24 * 3600 * 1000;

export const patchThread: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  const thread = await visibleThread(id, viewer);
  const mod = isModerator(viewer);
  const isAuthor = viewer.id === thread.author_id;
  const sets: string[] = [];
  const p = new Params();
  const logs: [string, string, Record<string, unknown>][] = [];
  let statusEvent: { status: ThreadStatus | null; statusNote: string | null; previous: string | null } | null = null;

  if (body.title !== undefined) {
    const title = str(body, 'title', { min: 4, max: 140, label: 'The title' });
    const fresh = Date.now() - new Date(iso(thread.created_at)).getTime() < TITLE_EDIT_WINDOW_MS;
    if (!mod && !(isAuthor && fresh && !thread.locked)) throw forbidden('A thread’s title can be changed by its author for 24 hours after posting.');
    if (!mod) requireCanWrite(viewer);
    if (title !== thread.title) {
      sets.push(`title = ${p.add(title)}`, `slug = ${p.add(slugify(title))}`);
      if (!isAuthor) logs.push(['thread.retitle', '', { from: thread.title, to: title }]);
    }
  }

  let kind = thread.category_kind;
  if (body.categorySlug !== undefined) {
    if (!mod) throw forbidden('Only moderators move threads.');
    const target = await categoryBySlug(txt(body.categorySlug));
    if (target.id !== thread.category_id) {
      sets.push(`category_id = ${p.add(target.id)}`);
      kind = target.kind;
      logs.push(['thread.move', '', { from: thread.category_slug, to: target.slug }]);
      if (body.status === undefined && statusesFor(kind) !== statusesFor(thread.category_kind)) {
        const status = defaultStatus(kind);
        sets.push(`status = ${p.add(status)}`);
      }
    }
  }

  if (body.status !== undefined || body.statusNote !== undefined) {
    if (!mod) throw forbidden('Only moderators and the OutBrick team change a status.');
    const allowed = statusesFor(kind);
    let status = (thread.status as ThreadStatus | null) ?? null;
    if (body.status !== undefined) {
      if (body.status === null) status = null;
      else if (!allowed.includes(body.status as ThreadStatus)) throw badRequest('invalid', 'That status does not apply here.', { status: 'invalid' });
      else status = body.status as ThreadStatus;
    }
    let statusNote = (thread.status_note as string | null) ?? null;
    if (body.statusNote !== undefined) statusNote = body.statusNote === null ? null : str(body, 'statusNote', { max: 140, optional: true, label: 'The status note' }) || null;
    if (status !== thread.status || statusNote !== thread.status_note) {
      sets.push(`status = ${p.add(status)}`, `status_note = ${p.add(statusNote)}`);
      statusEvent = { status, statusNote, previous: (thread.status as string | null) ?? null };
      logs.push(['thread.status', '', { from: thread.status, to: status, note: statusNote }]);
    }
  }

  for (const flag of ['pinned', 'locked', 'hidden'] as const) {
    if (body[flag] === undefined) continue;
    if (!mod) throw forbidden('Only moderators do that.');
    if (typeof body[flag] !== 'boolean') throw badRequest('invalid', `${flag} must be true or false.`, { [flag]: 'invalid' });
    if (body[flag] !== thread[flag]) {
      sets.push(`${flag} = ${p.add(body[flag])}`);
      logs.push([`thread.${flag === 'pinned' ? 'pin' : flag === 'locked' ? 'lock' : 'hide'}`, '', { value: body[flag] }]);
    }
  }

  if (sets.length) {
    await transaction(async (q) => {
      await q(`UPDATE threads SET ${sets.join(', ')}, updated_at = now() WHERE id = ${p.add(id)}`, p.values);
      for (const [action, reason, data] of logs) await modLog(q, viewer.id, action, 'thread', id, reason, data);
      if (statusEvent) await notifyStatus(q, { threadId: id, actorId: viewer.id, threadAuthorId: thread.author_id, ...statusEvent });
    });
  }
  return json({ thread: await summaryById(id, viewer) });
};

// Solved ------------------------------------------------------------------------------------------

export const solveThread: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  const thread = await visibleThread(id, viewer);
  if (!solvableKinds.includes(thread.category_kind)) throw badRequest('invalid', 'Only help, accessibility and bug threads can be marked solved.');
  if (viewer.id !== thread.author_id && !isModerator(viewer)) throw forbidden('Only the person who asked, or a moderator, marks the answer.');
  const postId = body.postId == null ? null : Number(body.postId);
  let solution: Row | null = null;
  if (postId != null) {
    if (!Number.isSafeInteger(postId)) throw badRequest('invalid', 'That is not a post.', { postId: 'invalid' });
    const [row] = await run(
      `SELECT id::int AS id, author_id::int AS author_id, number FROM posts
        WHERE id = $1 AND thread_id = $2 AND number > 1 AND NOT hidden AND NOT pending AND deleted_at IS NULL`,
      [postId, id],
    );
    if (!row) throw badRequest('invalid', 'That reply cannot be the answer.', { postId: 'invalid' });
    solution = row;
  }
  if ((solution ? num(solution.id) : null) !== thread.solved_post_id) {
    await transaction(async (q) => {
      await q(`UPDATE threads SET solved_post_id = $1, updated_at = now() WHERE id = $2`, [postId, id]);
      if (viewer.id !== thread.author_id) await modLog(q, viewer.id, solution ? 'thread.solve' : 'thread.unsolve', 'thread', id, '', { postId });
      if (solution) await notifySolved(q, { threadId: id, postId: num(solution.id), actorId: viewer.id, postAuthorId: num(solution.author_id) });
    });
  }
  return json({ thread: await summaryById(id, viewer) });
};

// Votes -------------------------------------------------------------------------------------------

export const voteThread: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  const thread = await visibleThread(id, viewer);
  if (thread.category_kind !== 'ideas') throw badRequest('invalid', 'Only ideas take votes.');
  if (thread.author_id === viewer.id) throw forbidden('You cannot vote for your own idea.');
  requireCanWrite(viewer);
  const on = body.on !== false;
  const result = await transaction(async (q) => {
    if (on) await q(`INSERT INTO votes (thread_id, member_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`, [id, viewer.id]);
    else await q(`DELETE FROM votes WHERE thread_id = $1 AND member_id = $2`, [id, viewer.id]);
    const [row] = await q(`UPDATE threads SET vote_count = (SELECT count(*) FROM votes WHERE thread_id = $1) WHERE id = $1 RETURNING vote_count`, [id]);
    return num(row.vote_count);
  });
  return json({ voteCount: result, voted: on });
};

// Following ---------------------------------------------------------------------------------------

const followLevels: readonly FollowLevel[] = ['watch', 'mute', 'none'];

async function setFollow(viewer: Viewer, type: 'thread' | 'category', targetId: number, raw: unknown): Promise<FollowLevel> {
  if (!followLevels.includes(raw as FollowLevel)) throw badRequest('invalid', 'Choose watch, mute or none.', { level: 'invalid' });
  const level = raw as FollowLevel;
  if (level === 'none') await run(`DELETE FROM follows WHERE member_id = $1 AND target_type = $2 AND target_id = $3`, [viewer.id, type, targetId]);
  else
    await run(
      `INSERT INTO follows (member_id, target_type, target_id, level) VALUES ($1, $2, $3, $4)
       ON CONFLICT (member_id, target_type, target_id) DO UPDATE SET level = EXCLUDED.level`,
      [viewer.id, type, targetId, level],
    );
  return level;
}

export const followThread: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  await visibleThread(id, viewer);
  return json({ level: await setFollow(viewer, 'thread', id, body.level) });
};

export const followCategory: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const body = await readJson(req);
  const [row] = await run(`SELECT id::int AS id FROM categories WHERE slug = $1 AND NOT archived`, [params.slug]);
  if (!row) throw notFound('That category does not exist.');
  return json({ level: await setFollow(viewer, 'category', num(row.id), body.level) });
};

// Read position -----------------------------------------------------------------------------------

export const markRead: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  await visibleThread(id, viewer);
  const n = int(body.number, 0, 0, 1_000_000_000);
  await run(
    `INSERT INTO reads (member_id, thread_id, last_number, updated_at) VALUES ($1, $2, $3, now())
     ON CONFLICT (member_id, thread_id) DO UPDATE SET last_number = GREATEST(reads.last_number, EXCLUDED.last_number), updated_at = now()`,
    [viewer.id, id, n],
  );
  return json({ ok: true });
};

