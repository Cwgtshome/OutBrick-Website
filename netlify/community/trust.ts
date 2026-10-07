// Trust levels (phase 2): members earn "trusted" automatically; run daily by
// netlify/functions/community-trust.mts.
//
// A member becomes trusted when all of these hold:
//   - the account is at least 7 days old, not deleted, not banned, with a confirmed address;
//   - 10 or more visible posts (not hidden, held, or deleted, in threads that are not hidden,
//     held, deleted or merged away);
//   - 2 or more of their replies are marked as a thread's solution, or their ideas have
//     received 5 or more votes from others (votes stand in for likes; there is no like button);
//   - no upheld report in the last 30 days (a report resolved by hiding their post) and no post
//     of theirs hidden by a moderator in that time;
//   - no moderator or admin ever set their role back to member (a demotion is not undone).
//
// Trusted members skip the review queue for links (forum.ts → needsReview) and get higher rate
// limits (forum.ts → limitFor). Nothing here ever lowers a role: staff (moderator, team, admin)
// are untouched, and a trusted member who stops qualifying stays trusted until a person decides.

import { transaction } from './db.ts';
import { modLog, num, run } from './forum.ts';

export const TRUST_RULES = { minDays: 7, minPosts: 10, minSolutions: 2, minVotes: 5, cleanDays: 30 } as const;

/** Members who qualify today, by id. */
export async function trustCandidates(): Promise<number[]> {
  const r = TRUST_RULES;
  const rows = await run(
    `SELECT m.id::int AS id FROM members m
      WHERE m.role = 'member' AND m.deleted_at IS NULL AND m.email_verified
        AND (m.banned_until IS NULL OR m.banned_until <= now())
        AND m.created_at <= now() - make_interval(days => $1)
        AND (SELECT count(*) FROM posts p JOIN threads t ON t.id = p.thread_id
              WHERE p.author_id = m.id AND NOT p.hidden AND NOT p.pending AND p.deleted_at IS NULL
                AND NOT t.hidden AND NOT t.pending AND t.deleted_at IS NULL AND t.merged_into IS NULL) >= $2
        AND ((SELECT count(*) FROM threads t JOIN posts p ON p.id = t.solved_post_id
               WHERE p.author_id = m.id AND t.author_id <> m.id AND t.deleted_at IS NULL AND NOT t.hidden) >= $3
             OR (SELECT count(*) FROM votes v JOIN threads t ON t.id = v.thread_id
                  WHERE t.author_id = m.id AND v.member_id <> m.id AND t.deleted_at IS NULL) >= $4)
        AND NOT EXISTS (SELECT 1 FROM reports rp JOIN posts p ON p.id = rp.post_id
                         WHERE p.author_id = m.id AND rp.resolution = 'hidden' AND rp.resolved_at > now() - make_interval(days => $5))
        AND NOT EXISTS (SELECT 1 FROM mod_log l JOIN posts p ON l.target_type = 'post' AND p.id = l.target_id
                         WHERE p.author_id = m.id AND l.action = 'post.hide' AND l.created_at > now() - make_interval(days => $5))
        AND NOT EXISTS (SELECT 1 FROM mod_log l WHERE l.target_type = 'member' AND l.target_id = m.id
                         AND l.action = 'member.role' AND l.data->>'to' = 'member')
      ORDER BY m.id
      LIMIT 500`,
    [r.minDays, r.minPosts, r.minSolutions, r.minVotes, r.cleanDays],
  );
  return rows.map((row) => num(row.id));
}

/** Promote everyone who qualifies; returns who was promoted. */
export async function runTrustPromotion(): Promise<number[]> {
  const ids = await trustCandidates();
  const promoted: number[] = [];
  for (const id of ids) {
    await transaction(async (q) => {
      // Still a plain member at this instant (a moderator may have acted in between).
      const rows = await q(`UPDATE members SET role = 'trusted' WHERE id = $1 AND role = 'member' RETURNING id`, [id]);
      if (!rows.length) return;
      await modLog(q, null, 'member.trust', 'member', id, 'automatic', { from: 'member', to: 'trusted' });
      promoted.push(id);
    });
  }
  if (promoted.length) console.log(`[community-trust] promoted ${promoted.length} member(s) to trusted`);
  return promoted;
}
