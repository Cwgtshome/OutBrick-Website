// Posts: replying, editing, deleting, reporting, and the composer's Preview tab.

import type { Post, ReportReason } from '../../lib/community/contract.ts';
import { pageSize } from '../../lib/community/contract.ts';
import { ipHash, transaction } from './db.ts';
import { ApiError, badRequest, filledTooFast, forbidden, honeypotHit, tooFast, json, notFound, oneOf, readJson, str } from './http.ts';
import { currentMember, requireMember, type Viewer } from './session.ts';
import {
  BODY_MAX,
  Params,
  assertImagesOk,
  attachUploads,
  assertMineOrMod,
  idParam,
  isModerator,
  limitFor,
  modLog,
  needsReview,
  num,
  postColumns,
  postForWrite,
  postView,
  postVisible,
  refreshThreadCounters,
  renderBody,
  requireCanWrite,
  run,
  visibleThread,
} from './forum.ts';
import { notifyMentions, notifyNewPost } from './notifications.ts';
import { rateLimitOrThrow } from './threads.ts';
// Feature board and interactive features (community-fx).
import { onVisiblePost } from './badges.ts';
import { decoratePosts } from './reactions.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

export const DELETED_MD = '[deleted]';
export const DELETED_HTML = '<p>[deleted]</p>';

/** A post as the viewer sees it, with the context postView needs. */
export async function loadPost(id: number, viewer: Viewer | null): Promise<Post> {
  const [row] = await run(`SELECT ${postColumns} FROM posts p JOIN members m ON m.id = p.author_id WHERE p.id = $1`, [id]);
  if (!row) throw notFound('That post does not exist.');
  const thread = await visibleThread(num(row.thread_id), viewer);
  const [replies] = await run(`SELECT EXISTS (SELECT 1 FROM posts WHERE thread_id = $1 AND number > 1 AND deleted_at IS NULL) AS yes`, [thread.id]);
  const [post] = await decoratePosts([postView(row, { viewer, locked: thread.locked, solvedPostId: thread.solved_post_id, hasReplies: Boolean(replies?.yes) })], viewer);
  return post;
}

/** The page of the thread on which the viewer sees post `number`. */
async function pageOf(threadId: number, number: number, viewer: Viewer): Promise<number> {
  const p = new Params();
  const visible = postVisible(p, viewer);
  const [row] = await run(`SELECT count(*)::int AS n FROM posts p WHERE p.thread_id = ${p.add(threadId)} AND p.number <= ${p.add(number)} AND ${visible}`, p.values);
  return Math.max(1, Math.ceil(num(row?.n) / pageSize.posts));
}

// Replying ----------------------------------------------------------------------------------------

export type ReplyOutcome = { post: Post; page: number; decoy: boolean };

/**
 * Post a reply as `viewer` with every rule the forum has: verified address, bans (refused by
 * the caller's requireMember or by `viewer.banned`), locked threads, the honeypot and the
 * time-to-fill check (a decoy success), rate limits, image checks and the review queue. The
 * site's form and reply by email (reply-email.ts) both come through here.
 */
export async function replyAs(viewer: Viewer, threadId: number, body: Record<string, unknown>): Promise<ReplyOutcome> {
  if (viewer.banned) throw new ApiError(403, 'banned', `Your account is suspended${viewer.ban_reason ? `: ${viewer.ban_reason}` : ''}.`);
  const thread = await visibleThread(threadId, viewer);
  const md = str(body, 'body', { min: 1, max: BODY_MAX, label: 'The reply' });
  requireCanWrite(viewer);
  const mod = isModerator(viewer);
  if (thread.locked && !mod) throw new ApiError(403, 'locked', 'This thread is locked, so it takes no new replies.');
  const replyToRaw = body.replyTo == null ? null : Number(body.replyTo);
  if (replyToRaw != null && (!Number.isSafeInteger(replyToRaw) || replyToRaw < 1)) throw badRequest('invalid', 'That is not a post to reply to.', { replyTo: 'invalid' });

  if (honeypotHit(body)) {
    const now = new Date().toISOString();
    const decoy: Post = {
      id: 0,
      number: num(thread.reply_count) + 2,
      author: { id: viewer.id, displayName: viewer.display_name, role: viewer.role },
      html: '',
      replyTo: replyToRaw,
      createdAt: now,
      editedAt: null,
      hidden: false,
      pending: false,
      isSolution: false,
      canEdit: false,
      canDelete: false,
    };
    return { post: decoy, page: 1, decoy: true };
  }
  if (filledTooFast(body)) throw tooFast();

  await rateLimitOrThrow([[`post:hour:${viewer.id}`, limitFor(viewer, 30, 90), 3600]]);

  const rendered = await renderBody(md, { uploadOwners: [viewer.id] });
  assertImagesOk(rendered);
  const pending = await needsReview(viewer, rendered.hasLink);
  const created = await transaction(async (q) => {
    // Lock the thread row: post numbers are handed out one at a time per thread.
    const [locked] = await q(`SELECT locked FROM threads WHERE id = $1 FOR UPDATE`, [threadId]);
    if (!locked) throw notFound('That thread does not exist.');
    if (locked.locked && !mod) throw new ApiError(403, 'locked', 'This thread is locked, so it takes no new replies.');
    const [next] = await q(`SELECT COALESCE(max(number), 0) + 1 AS n FROM posts WHERE thread_id = $1`, [threadId]);
    const number = num(next.n);
    let replyTo: number | null = null;
    if (replyToRaw != null && replyToRaw < number) {
      const [target] = await q(`SELECT 1 FROM posts WHERE thread_id = $1 AND number = $2`, [threadId, replyToRaw]);
      if (target) replyTo = replyToRaw;
    }
    const [row] = await q(
      `INSERT INTO posts (thread_id, author_id, number, body_md, body_html, reply_to, pending, has_link)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id::int AS id`,
      [threadId, viewer.id, number, md, rendered.html, replyTo, pending, rendered.hasLink],
    );
    const postId = num(row.id);
    await attachUploads(q, postId, rendered.uploadIds);
    await refreshThreadCounters(q, threadId);
    await q(
      `INSERT INTO reads (member_id, thread_id, last_number) VALUES ($1, $2, $3)
       ON CONFLICT (member_id, thread_id) DO UPDATE SET last_number = GREATEST(reads.last_number, EXCLUDED.last_number), updated_at = now()`,
      [viewer.id, threadId, number],
    );
    if (!pending) {
      await notifyNewPost(q, {
        threadId,
        categoryId: thread.category_id,
        postId,
        postNumber: number,
        actorId: viewer.id,
        threadAuthorId: thread.author_id,
        replyTo,
        mentionedIds: rendered.mentionedIds,
      });
      await onVisiblePost(q, viewer.id);
    }
    return { postId, number };
  });
  return { post: await loadPost(created.postId, viewer), page: await pageOf(threadId, created.number, viewer), decoy: false };
}

export const postReply: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const threadId = idParam(params.id);
  const body = await readJson(req, 128 * 1024);
  const { post, page } = await replyAs(viewer, threadId, body);
  return json({ post, page }, { status: 201 });
};

// Editing -----------------------------------------------------------------------------------------

export const patchPost: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req, 128 * 1024);
  const { post, thread } = await postForWrite(id, viewer);
  const authorId = num(post.author_id);
  assertMineOrMod(viewer, authorId);
  const mod = isModerator(viewer);
  if (post.deleted_at != null) throw badRequest('invalid', 'A deleted post cannot be edited.');
  if (!mod) {
    requireCanWrite(viewer);
    if (thread.locked) throw new ApiError(403, 'locked', 'This thread is locked, so its posts can no longer be edited.');
  }
  const md = str(body, 'body', { min: 1, max: BODY_MAX, label: 'The post' });
  if (md === post.body_md) return json({ post: await loadPost(id, viewer) });

  // The author's own uploads, and the editing moderator's.
  const rendered = await renderBody(md, { uploadOwners: [...new Set([authorId, viewer.id])] });
  assertImagesOk(rendered);
  // Editing a link into a post is held for review the same way posting one is.
  const hadLink = Boolean(post.has_link);
  const nowPending = Boolean(post.pending) || (!hadLink && rendered.hasLink && viewer.id === authorId && (await needsReview(viewer, true)));
  await transaction(async (q) => {
    await q(`INSERT INTO post_revisions (post_id, body_md, edited_by) VALUES ($1, $2, $3)`, [id, post.body_md, viewer.id]);
    await q(`UPDATE posts SET body_md = $1, body_html = $2, has_link = $3, pending = $4, edited_at = now() WHERE id = $5`, [
      md,
      rendered.html,
      rendered.hasLink,
      nowPending,
      id,
    ]);
    await attachUploads(q, id, rendered.uploadIds);
    if (nowPending && !post.pending) {
      if (num(post.number) === 1) await q(`UPDATE threads SET pending = true WHERE id = $1`, [thread.id]);
      await refreshThreadCounters(q, thread.id);
    }
    if (viewer.id !== authorId) await modLog(q, viewer.id, 'post.edit', 'post', id);
    if (!nowPending) await notifyMentions(q, { threadId: thread.id, postId: id, actorId: viewer.id, mentionedIds: rendered.mentionedIds });
  });
  return json({ post: await loadPost(id, viewer) });
};

// Deleting ----------------------------------------------------------------------------------------

export const deletePost: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const { post, thread } = await postForWrite(id, viewer);
  const authorId = num(post.author_id);
  assertMineOrMod(viewer, authorId);
  if (post.deleted_at != null) return json({ ok: true });
  const number = num(post.number);
  if (number === 1) {
    const [replies] = await run(`SELECT EXISTS (SELECT 1 FROM posts WHERE thread_id = $1 AND number > 1 AND deleted_at IS NULL) AS yes`, [thread.id]);
    if (replies?.yes) throw forbidden('The opening post of a thread with replies cannot be deleted. A moderator can hide it instead.');
  }
  await transaction(async (q) => {
    await q(`UPDATE posts SET deleted_at = now(), body_md = $1, body_html = $2, has_link = false WHERE id = $3`, [DELETED_MD, DELETED_HTML, id]);
    await q(`UPDATE threads SET solved_post_id = NULL WHERE id = $1 AND solved_post_id = $2`, [thread.id, id]);
    if (number === 1) await q(`UPDATE threads SET deleted_at = now() WHERE id = $1`, [thread.id]);
    await refreshThreadCounters(q, thread.id);
    if (viewer.id !== authorId) await modLog(q, viewer.id, 'post.delete', 'post', id);
  });
  return json({ ok: true });
};

// Reporting ---------------------------------------------------------------------------------------

const reasons: readonly ReportReason[] = ['spam', 'abuse', 'off_topic', 'personal_info', 'other'];

export const reportPost: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  await postForWrite(id, viewer);
  if (!reasons.includes(body.reason as ReportReason)) throw badRequest('invalid', 'Choose a reason.', { reason: 'invalid' });
  const reason = oneOf(body.reason, reasons, 'other');
  const note = str(body, 'note', { max: 1000, optional: true, label: 'The note' });
  await rateLimitOrThrow([[`report:day:${viewer.id}`, 20, 86400]]);
  // One report per member per post: reporting again is not an error, it just changes nothing.
  await run(`INSERT INTO reports (post_id, reporter_id, reason, note) VALUES ($1, $2, $3, $4) ON CONFLICT (post_id, reporter_id) DO NOTHING`, [
    id,
    viewer.id,
    reason,
    note,
  ]);
  return json({ ok: true });
};

// Preview -----------------------------------------------------------------------------------------

export const preview: Handler = async (req) => {
  const body = await readJson(req, 128 * 1024);
  const md = typeof body.body === 'string' ? body.body : '';
  if (md.length > BODY_MAX) throw badRequest('invalid', 'The post is too long.', { body: 'too_long' });
  await rateLimitOrThrow([[`preview:ip:${ipHash(req)}`, 60, 60]]);
  if (!md.trim()) return json({ html: '' });
  const viewer = await currentMember(req);
  // Signed in: the same image rules as posting, so the preview says what Post would refuse.
  const rendered = await renderBody(md, viewer ? { uploadOwners: [viewer.id] } : { uploadOwners: [] });
  const problems: string[] = [];
  if (rendered.imagesWithoutAlt > 0) problems.push('image_needs_alt');
  if (rendered.unknownUploads > 0) problems.push('upload_not_found');
  return json(problems.length ? { html: rendered.html, problems } : { html: rendered.html });
};
