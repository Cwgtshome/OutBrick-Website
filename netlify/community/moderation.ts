// Moderation: reports, the review queue, approving and hiding posts, bans and roles.
//
// Every action here writes a mod_log row in the same transaction as the change, so the log
// can never say something happened that did not, or miss something that did.

import type { CategoryKind, MemberRole, ModMemberResponse, ModQueueItem, ModReport, ReportReason } from '../../lib/community/contract.ts';
import { transaction } from './db.ts';
import { badRequest, forbidden, json, notFound, readJson, str } from './http.ts';
import { hasRole, requireRole, type Viewer } from './session.ts';
import {
  idParam,
  iso,
  isoOrNull,
  modLog,
  num,
  postColumns,
  postView,
  publicMember,
  refreshThreadCounters,
  renderBody,
  run,
  txt,
  type Row,
} from './forum.ts';
import { notifyModeration, notifyNewPost } from './notifications.ts';
import { loadPost } from './posts.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

const roles: readonly MemberRole[] = ['member', 'trusted', 'moderator', 'team', 'admin'];
const rank = (role: MemberRole) => roles.indexOf(role);

const threadCols = `t.id::int AS t_id, t.slug AS t_slug, t.title AS t_title, t.locked AS t_locked, t.solved_post_id::int AS t_solved,
  c.slug AS c_slug, c.kind AS c_kind,
  EXISTS (SELECT 1 FROM posts r WHERE r.thread_id = t.id AND r.number > 1 AND r.deleted_at IS NULL) AS t_replies`;

const ctxFor = (r: Row, viewer: Viewer) => ({ viewer, locked: Boolean(r.t_locked), solvedPostId: r.t_solved == null ? null : num(r.t_solved), hasReplies: Boolean(r.t_replies) });

// Reports -----------------------------------------------------------------------------------------

export const listReports: Handler = async (req) => {
  const viewer = await requireRole(req, 'moderator');
  const reportRows = await run(
    `SELECT ${postColumns},
            rp.id::int AS rp_id, rp.reason AS rp_reason, rp.note AS rp_note, rp.created_at AS rp_created,
            rm.id::int AS r_id, rm.display_name AS r_name, rm.role AS r_role, (rm.deleted_at IS NOT NULL) AS r_deleted,
            (SELECT count(*)::int FROM reports o WHERE o.post_id = p.id AND o.resolved_at IS NULL) AS rp_open,
            ${threadCols}
       FROM reports rp
       JOIN members rm ON rm.id = rp.reporter_id
       JOIN posts p ON p.id = rp.post_id
       JOIN members m ON m.id = p.author_id
       JOIN threads t ON t.id = p.thread_id
       JOIN categories c ON c.id = t.category_id
      WHERE rp.resolved_at IS NULL
      ORDER BY rp.created_at, rp.id
      LIMIT 200`,
  );
  const reports: ModReport[] = reportRows.map((r) => ({
    id: num(r.rp_id),
    reason: r.rp_reason as ReportReason,
    note: txt(r.rp_note),
    createdAt: iso(r.rp_created),
    reporter: publicMember(r, 'r_'),
    post: postView(r, ctxFor(r, viewer)),
    thread: { id: num(r.t_id), slug: String(r.t_slug), title: String(r.t_title) },
    openReports: num(r.rp_open),
  }));
  return json({ reports });
};

export const resolveReport: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'moderator');
  const id = idParam(params.id);
  const body = await readJson(req);
  const action = body.action;
  if (action !== 'dismiss' && action !== 'hide') throw badRequest('invalid', 'Choose dismiss or hide.', { action: 'invalid' });
  const note = str(body, 'note', { min: action === 'hide' ? 2 : 0, max: 500, optional: action !== 'hide', label: 'The note' });
  const [report] = await run(`SELECT id::int AS id, post_id::int AS post_id, resolved_at FROM reports WHERE id = $1`, [id]);
  if (!report) throw notFound('That report does not exist.');
  const postId = num(report.post_id);
  await transaction(async (q) => {
    if (action === 'hide') await hideInTransaction(q, viewer, postId, note);
    await q(
      `UPDATE reports SET resolved_at = now(), resolved_by = $1, resolution = $2 WHERE post_id = $3 AND resolved_at IS NULL`,
      [viewer.id, action === 'hide' ? 'hidden' : 'dismissed', postId],
    );
    await modLog(q, viewer.id, `report.${action}`, 'report', id, note, { postId });
  });
  return json({ ok: true });
};

// The review queue --------------------------------------------------------------------------------

export const listQueue: Handler = async (req) => {
  const viewer = await requireRole(req, 'moderator');
  const rows = await run(
    `SELECT ${postColumns}, ${threadCols}
       FROM posts p JOIN members m ON m.id = p.author_id JOIN threads t ON t.id = p.thread_id JOIN categories c ON c.id = t.category_id
      WHERE p.pending AND NOT p.hidden AND p.deleted_at IS NULL AND t.deleted_at IS NULL
      ORDER BY p.created_at, p.id
      LIMIT 200`,
  );
  const posts: ModQueueItem[] = rows.map((r) => ({
    post: postView(r, ctxFor(r, viewer)),
    thread: { id: num(r.t_id), slug: String(r.t_slug), title: String(r.t_title), category: { slug: String(r.c_slug), kind: r.c_kind as CategoryKind } },
  }));
  return json({ posts });
};

export const approvePost: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'moderator');
  const id = idParam(params.id);
  const [post] = await run(
    `SELECT p.id::int AS id, p.thread_id::int AS thread_id, p.number, p.pending, p.body_md, p.reply_to, p.author_id::int AS author_id,
            t.author_id::int AS t_author, t.category_id::int AS t_category
       FROM posts p JOIN threads t ON t.id = p.thread_id WHERE p.id = $1 AND p.deleted_at IS NULL`,
    [id],
  );
  if (!post) throw notFound('That post does not exist.');
  if (post.pending) {
    const rendered = await renderBody(String(post.body_md));
    const threadId = num(post.thread_id);
    await transaction(async (q) => {
      await q(`UPDATE posts SET pending = false WHERE id = $1`, [id]);
      if (num(post.number) === 1) await q(`UPDATE threads SET pending = false WHERE id = $1`, [threadId]);
      await refreshThreadCounters(q, threadId);
      await modLog(q, viewer.id, 'post.approve', 'post', id);
      // The post is public from now, so this is when everyone who should hear about it does.
      await notifyNewPost(q, {
        threadId,
        categoryId: num(post.t_category),
        postId: id,
        postNumber: num(post.number),
        actorId: num(post.author_id),
        threadAuthorId: num(post.t_author),
        replyTo: post.reply_to == null ? null : num(post.reply_to),
        mentionedIds: rendered.mentionedIds,
      });
    });
  }
  return json({ post: await loadPost(id, viewer) });
};

// Hiding ------------------------------------------------------------------------------------------

async function hideInTransaction(q: (text: string, params?: unknown[]) => Promise<Row[]>, viewer: Viewer, postId: number, reason: string): Promise<void> {
  const [post] = await q(`SELECT thread_id::int AS thread_id, author_id::int AS author_id, hidden, pending, number FROM posts WHERE id = $1`, [postId]);
  if (!post) throw notFound('That post does not exist.');
  if (post.hidden) return;
  // Hiding a queued post is the moderator's rejection: it leaves the review queue for good, and a
  // queued opening post takes its (still unpublished) thread with it.
  await q(`UPDATE posts SET hidden = true, hidden_reason = $1, pending = false WHERE id = $2`, [reason, postId]);
  if (post.pending && num(post.number) === 1) await q(`UPDATE threads SET pending = false, hidden = true WHERE id = $1`, [num(post.thread_id)]);
  await refreshThreadCounters(q, num(post.thread_id));
  await modLog(q, viewer.id, 'post.hide', 'post', postId, reason);
  await notifyModeration(q, { threadId: num(post.thread_id), postId, actorId: viewer.id, postAuthorId: num(post.author_id), reason });
}

export const hidePost: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'moderator');
  const id = idParam(params.id);
  const body = await readJson(req);
  const [exists] = await run(`SELECT hidden, thread_id::int AS thread_id FROM posts WHERE id = $1`, [id]);
  if (!exists) throw notFound('That post does not exist.');
  if (body.hidden === false) {
    if (exists.hidden) {
      await transaction(async (q) => {
        await q(`UPDATE posts SET hidden = false, hidden_reason = NULL WHERE id = $1`, [id]);
        await refreshThreadCounters(q, num(exists.thread_id));
        await modLog(q, viewer.id, 'post.unhide', 'post', id);
      });
    }
  } else {
    const reason = str(body, 'reason', { min: 2, max: 500, label: 'The reason' });
    await transaction(async (q) => {
      await hideInTransaction(q, viewer, id, reason);
      await q(`UPDATE reports SET resolved_at = now(), resolved_by = $1, resolution = 'hidden' WHERE post_id = $2 AND resolved_at IS NULL`, [viewer.id, id]);
    });
  }
  return json({ post: await loadPost(id, viewer) });
};

// Members -----------------------------------------------------------------------------------------

async function modMember(id: number): Promise<ModMemberResponse> {
  const [m] = await run(
    `SELECT id::int AS m_id, display_name AS m_name, role AS m_role, (deleted_at IS NOT NULL) AS m_deleted, banned_until, ban_reason FROM members WHERE id = $1`,
    [id],
  );
  if (!m) throw notFound('That member does not exist.');
  const banned = m.banned_until != null && new Date(iso(m.banned_until)).getTime() > Date.now();
  return { member: { ...publicMember(m, 'm_'), bannedUntil: banned ? isoOrNull(m.banned_until) : null, banReason: banned ? ((m.ban_reason as string | null) ?? null) : null } };
}

async function targetMember(id: number): Promise<{ id: number; role: MemberRole }> {
  const [m] = await run(`SELECT id::int AS id, role FROM members WHERE id = $1 AND deleted_at IS NULL`, [id]);
  if (!m) throw notFound('That member does not exist.');
  return { id: num(m.id), role: m.role as MemberRole };
}

export const banMember: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'moderator');
  const id = idParam(params.id);
  const body = await readJson(req);
  const target = await targetMember(id);
  if (target.id === viewer.id) throw forbidden('You cannot ban yourself.');
  if (target.role === 'admin') throw forbidden('Nobody can ban an admin.');
  // A moderator bans members below them; an admin bans anyone who is not an admin.
  if (!hasRole(viewer, 'admin') && rank(target.role) >= rank(viewer.role)) throw forbidden('Only an admin can ban someone with your role or above.');
  const days = typeof body.days === 'number' && Number.isInteger(body.days) ? body.days : NaN;
  if (!(days >= 0 && days <= 36500)) throw badRequest('invalid', 'Choose a number of days.', { days: 'invalid' });
  if (days === 0) {
    await transaction(async (q) => {
      await q(`UPDATE members SET banned_until = NULL, ban_reason = NULL WHERE id = $1`, [id]);
      await modLog(q, viewer.id, 'member.unban', 'member', id);
    });
  } else {
    const reason = str(body, 'reason', { min: 2, max: 500, label: 'The reason' });
    await transaction(async (q) => {
      await q(`UPDATE members SET banned_until = now() + make_interval(days => $1), ban_reason = $2 WHERE id = $3`, [days, reason, id]);
      await modLog(q, viewer.id, 'member.ban', 'member', id, reason, { days });
    });
  }
  return json(await modMember(id));
};

export const setRole: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'admin');
  const id = idParam(params.id);
  const body = await readJson(req);
  if (!roles.includes(body.role as MemberRole)) throw badRequest('invalid', 'That is not a role.', { role: 'invalid' });
  const role = body.role as MemberRole;
  const target = await targetMember(id);
  if (target.id === viewer.id) throw forbidden('You cannot change your own role.');
  if (target.role !== role) {
    await transaction(async (q) => {
      await q(`UPDATE members SET role = $1 WHERE id = $2`, [role, id]);
      await modLog(q, viewer.id, 'member.role', 'member', id, '', { from: target.role, to: role });
    });
  }
  return json(await modMember(id));
};
