-- OutBrick Community: what the forum code needs beyond the core schema.
-- See netlify/community/forum.ts and netlify/community/notifications.ts.

-- A thread whose opening post waits in the review queue is itself waiting: only its author and
-- moderators see it until the post is approved.
ALTER TABLE threads ADD COLUMN pending boolean NOT NULL DEFAULT false;

-- Deleting the opening post of a thread nobody has answered deletes the thread. The row stays
-- (notifications and reports point at it); every list and page treats it as gone.
ALTER TABLE threads ADD COLUMN deleted_at timestamptz;

-- Whether the post renders a link, recorded when it is written: a new member's first two posts
-- with a link go to the review queue, and this is what "first two" counts.
ALTER TABLE posts ADD COLUMN has_link boolean NOT NULL DEFAULT false;

-- Search over thread titles in the same 'simple' configuration as posts.
CREATE INDEX threads_title_fts ON threads USING gin (to_tsvector('simple', title));
CREATE INDEX faq_entries_text_trgm ON faq_entries USING gin ((question || ' ' || answer_md) gin_trgm_ops);
CREATE INDEX faq_entries_locale_idx ON faq_entries (locale, position);

-- One notification per member per post: a member who is both replied to and mentioned in the
-- same post, and also watches the thread, hears about it once. The forum inserts the kinds in
-- priority order (reply, mention, watched) with ON CONFLICT DO NOTHING.
CREATE UNIQUE INDEX notifications_post_once ON notifications (member_id, post_id)
  WHERE post_id IS NOT NULL AND kind IN ('reply', 'mention', 'watched');

-- One release notice per member per announcement thread, however often the bot runs.
CREATE UNIQUE INDEX notifications_release_once ON notifications (member_id, thread_id)
  WHERE kind = 'release';

-- The moderators' queue: posts waiting for review, oldest first.
CREATE INDEX posts_pending_idx ON posts (created_at) WHERE pending;
