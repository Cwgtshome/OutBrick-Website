// Notifications: the forum only writes rows here. The accounts side's scheduled function
// (community-notify.mts) reads unsent rows, applies each member's email switches and sends.
//
// Who hears about what:
//   reply       the thread's author, and the author of the post being answered
//   mention     everyone @named in the post
//   watched     everyone watching the thread or its category (a muted thread overrides a
//               watched category)
//   status      the thread's author, when a moderator changes a bug's or idea's status, and
//               everyone who voted for the idea (unless they muted the thread)
//   solved      the author of the post marked as the solution
//   release     everyone, unless they muted Announcements (the default is on)
//   moderation  the author of a post a moderator hid
//
// Never the person who did the thing, never a deleted or currently banned member, and never
// more than one row per member per post: the kinds are inserted in priority order (reply,
// mention, watched) against a unique index, so the first that applies wins. Reply notices
// also respect a muted thread; a mention does not, because it is addressed to you by name.
//
// The `data` each kind carries (CommunityNotification.data):
//   reply       { replyTo: number | null }        the post number answered, if any
//   mention     {}
//   watched     { via: 'thread' | 'category' }
//   status      { status, statusNote, previous }  ThreadStatus | null, string | null, ThreadStatus | null;
//               to a voter also { as: 'voter' }
//   badge       { badge, level }                  BadgeKey, number (no thread; netlify/community/badges.ts)
//   release     on an idea: { version, ideaId }   to its voters and author (netlify/community/ideas.ts)
//   solved      {}
//   release     { version }
//   moderation  { action: 'hidden', reason }
// thread_id is set on every kind; post_id on reply, mention, watched, solved and moderation.

import type { Query } from './db.ts';

const eligible = (actor: string) =>
  `m.deleted_at IS NULL AND (m.banned_until IS NULL OR m.banned_until <= now()) AND m.id <> ${actor}`;

const onceConflict = `ON CONFLICT (member_id, post_id) WHERE post_id IS NOT NULL AND kind IN ('reply', 'mention', 'watched') DO NOTHING`;

/** Insert one notification of `kind` for each listed member who is eligible. */
async function insertFor(
  q: Query,
  kind: string,
  memberIds: number[],
  opts: { threadId: number; postId: number | null; actorId: number | null; data: Record<string, unknown>; respectThreadMute: boolean },
): Promise<void> {
  const ids = [...new Set(memberIds.filter((id) => Number.isSafeInteger(id) && id > 0))];
  if (!ids.length) return;
  const mute = opts.respectThreadMute
    ? `AND NOT EXISTS (SELECT 1 FROM follows f WHERE f.member_id = m.id AND f.target_type = 'thread' AND f.target_id = $2::bigint AND f.level = 'mute')`
    : '';
  await q(
    `INSERT INTO notifications (member_id, kind, thread_id, post_id, actor_id, data)
     SELECT m.id, $1::text, $2::bigint, $3::bigint, $4::bigint, $5::jsonb FROM members m
      WHERE m.id IN (SELECT jsonb_array_elements_text($6::jsonb)::bigint) AND ${eligible('COALESCE($4::bigint, 0)')} ${mute}
     ${opts.postId == null ? '' : onceConflict}`,
    [kind, opts.threadId, opts.postId, opts.actorId, JSON.stringify(opts.data), JSON.stringify(ids)],
  );
}

export type NewPostEvent = {
  threadId: number;
  categoryId: number;
  postId: number;
  postNumber: number;
  actorId: number;
  threadAuthorId: number;
  /** The post number this one answers, if any. */
  replyTo: number | null;
  mentionedIds: number[];
};

/** A post became visible (on creation, or when a moderator approved it). */
export async function notifyNewPost(q: Query, e: NewPostEvent): Promise<void> {
  const base = { threadId: e.threadId, postId: e.postId, actorId: e.actorId };
  if (e.postNumber > 1) {
    const recipients = [e.threadAuthorId];
    if (e.replyTo != null) {
      const [row] = await q(`SELECT author_id::int AS id FROM posts WHERE thread_id = $1 AND number = $2 AND deleted_at IS NULL`, [e.threadId, e.replyTo]);
      if (row) recipients.push(Number(row.id));
    }
    await insertFor(q, 'reply', recipients, { ...base, data: { replyTo: e.replyTo }, respectThreadMute: true });
  }
  await insertFor(q, 'mention', e.mentionedIds, { ...base, data: {}, respectThreadMute: false });

  // Watchers of the thread first, so `via` says the more specific reason, then of the category.
  const threadWatchers = await q(`SELECT member_id::int AS id FROM follows WHERE target_type = 'thread' AND target_id = $1 AND level = 'watch'`, [e.threadId]);
  await insertFor(q, 'watched', threadWatchers.map((r) => Number(r.id)), { ...base, data: { via: 'thread' }, respectThreadMute: true });
  const categoryWatchers = await q(`SELECT member_id::int AS id FROM follows WHERE target_type = 'category' AND target_id = $1 AND level = 'watch'`, [e.categoryId]);
  await insertFor(q, 'watched', categoryWatchers.map((r) => Number(r.id)), { ...base, data: { via: 'category' }, respectThreadMute: true });
}

/** An edit added @mentions: only the newly named hear about it (the index skips anyone already told). */
export async function notifyMentions(q: Query, e: { threadId: number; postId: number; actorId: number; mentionedIds: number[] }): Promise<void> {
  await insertFor(q, 'mention', e.mentionedIds, { threadId: e.threadId, postId: e.postId, actorId: e.actorId, data: {}, respectThreadMute: false });
}

export async function notifyStatus(
  q: Query,
  e: { threadId: number; actorId: number; threadAuthorId: number; status: string | null; statusNote: string | null; previous: string | null },
): Promise<void> {
  await insertFor(q, 'status', [e.threadAuthorId], {
    threadId: e.threadId,
    postId: null,
    actorId: e.actorId,
    data: { status: e.status, statusNote: e.statusNote, previous: e.previous },
    respectThreadMute: false,
  });
  // The idea's voters (never its author twice, never the moderator who changed it).
  const voters = await q(`SELECT member_id::int AS id FROM votes WHERE thread_id = $1 AND member_id <> $2`, [e.threadId, e.threadAuthorId]);
  await insertFor(q, 'status', voters.map((r) => Number(r.id)), {
    threadId: e.threadId,
    postId: null,
    actorId: e.actorId,
    data: { status: e.status, statusNote: e.statusNote, previous: e.previous, as: 'voter' },
    respectThreadMute: true,
  });
}

export async function notifySolved(q: Query, e: { threadId: number; postId: number; actorId: number; postAuthorId: number }): Promise<void> {
  await insertFor(q, 'solved', [e.postAuthorId], { threadId: e.threadId, postId: e.postId, actorId: e.actorId, data: {}, respectThreadMute: false });
}

export async function notifyModeration(q: Query, e: { threadId: number; postId: number; actorId: number; postAuthorId: number; reason: string }): Promise<void> {
  await insertFor(q, 'moderation', [e.postAuthorId], {
    threadId: e.threadId,
    postId: e.postId,
    actorId: e.actorId,
    data: { action: 'hidden', reason: e.reason },
    respectThreadMute: false,
  });
}

/**
 * A release was announced: everyone who watches the Announcements category, and everyone with
 * no follow row for it at all (on by default). A member opts out by muting the category.
 */
export async function notifyRelease(q: Query, e: { threadId: number; categoryId: number; actorId: number; version: string }): Promise<number> {
  const rows = await q(
    `INSERT INTO notifications (member_id, kind, thread_id, post_id, actor_id, data)
     SELECT m.id, 'release', $1::bigint, NULL::bigint, $2::bigint, $3::jsonb FROM members m
      WHERE ${eligible('$2::bigint')}
        AND NOT EXISTS (SELECT 1 FROM follows f WHERE f.member_id = m.id AND f.target_type = 'category' AND f.target_id = $4 AND f.level = 'mute')
     ON CONFLICT (member_id, thread_id) WHERE kind = 'release' DO NOTHING
     RETURNING id`,
    [e.threadId, e.actorId, JSON.stringify({ version: e.version }), e.categoryId],
  );
  return rows.length;
}
