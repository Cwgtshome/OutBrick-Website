-- OutBrick Community: the feature board and the interactive features.
-- Ideas statuses gain in_progress (threads.status has no CHECK; the code validates it), a
-- shipped version and the time of the last status change; reactions, polls, bookmarks and
-- badges get their tables. See netlify/community/{ideas,reactions,polls,live,badges,people}.ts.

-- The feature board -----------------------------------------------------------------------------

-- The version an idea shipped in ("5.1"), set by moderators; the release bot links the
-- announcement of that version into the idea when Apple publishes it.
ALTER TABLE threads ADD COLUMN shipped_version text CHECK (shipped_version IS NULL OR shipped_version ~ '^\d{1,4}(\.\d{1,4}){0,3}$');
CREATE INDEX threads_shipped_version_idx ON threads (shipped_version) WHERE shipped_version IS NOT NULL;

-- When a moderator last changed the status: the roadmap's "recently shipped" (90 days) and the
-- bug and idea leaderboards are measured from it. NULL for threads never changed by hand.
ALTER TABLE threads ADD COLUMN status_changed_at timestamptz;
CREATE INDEX threads_status_idx ON threads (status, status_changed_at DESC) WHERE status IS NOT NULL AND deleted_at IS NULL;

-- Trending (votes in the last seven days) and vote moves on merge.
CREATE INDEX votes_thread_created_idx ON votes (thread_id, created_at DESC);
CREATE INDEX votes_member_idx ON votes (member_id);

-- Hot this week: replies by time within a thread.
CREATE INDEX posts_thread_created_idx ON posts (thread_id, created_at DESC);

-- Reactions on posts -----------------------------------------------------------------------------

CREATE TABLE reactions (
  post_id     bigint NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  kind        text NOT NULL CHECK (kind IN ('like','love','celebrate','funny','thanks','insightful')),
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (post_id, member_id, kind)
);
CREATE INDEX reactions_member_idx ON reactions (member_id, created_at DESC);
CREATE INDEX reactions_post_created_idx ON reactions (post_id, created_at DESC);

-- Polls on a thread's opening post ----------------------------------------------------------------

CREATE TABLE polls (
  thread_id   bigint PRIMARY KEY REFERENCES threads(id) ON DELETE CASCADE,
  question    text NOT NULL CHECK (char_length(question) BETWEEN 1 AND 200),
  multiple    boolean NOT NULL DEFAULT false,
  closes_at   timestamptz,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE poll_options (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  thread_id   bigint NOT NULL REFERENCES polls(thread_id) ON DELETE CASCADE,
  position    integer NOT NULL,
  label       text NOT NULL CHECK (char_length(label) BETWEEN 1 AND 100),
  UNIQUE (thread_id, position)
);

CREATE TABLE poll_votes (
  option_id   bigint NOT NULL REFERENCES poll_options(id) ON DELETE CASCADE,
  thread_id   bigint NOT NULL REFERENCES polls(thread_id) ON DELETE CASCADE,
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (option_id, member_id)
);
CREATE INDEX poll_votes_thread_member_idx ON poll_votes (thread_id, member_id);

-- Bookmarks (private to the member) ---------------------------------------------------------------

CREATE TABLE bookmarks (
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  post_id     bigint NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, post_id)
);
CREATE INDEX bookmarks_member_idx ON bookmarks (member_id, created_at DESC);

-- Badges ------------------------------------------------------------------------------------------

-- One row per badge (and level: helpful 1/10/50 solved answers, anniversary 1, 2, 3… years).
-- A revoked badge keeps its row with revoked_at set, so the daily job never hands it back.
CREATE TABLE member_badges (
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  badge       text NOT NULL CHECK (badge IN ('first_post','helpful','bug_hunter','idea_maker','shipped','welcomer',
                                             'beta_tester','accessibility_champion','anniversary','popular_post')),
  level       integer NOT NULL DEFAULT 1 CHECK (level >= 1),
  granted_by  bigint REFERENCES members(id),  -- staff who granted it; NULL for automatic awards
  awarded_at  timestamptz NOT NULL DEFAULT now(),
  revoked_at  timestamptz,
  revoked_by  bigint REFERENCES members(id),
  PRIMARY KEY (member_id, badge, level)
);
CREATE INDEX member_badges_badge_idx ON member_badges (badge) WHERE revoked_at IS NULL;

-- The badge shown next to the member's name, kept by netlify/community/badges.ts.
ALTER TABLE members ADD COLUMN top_badge text;
