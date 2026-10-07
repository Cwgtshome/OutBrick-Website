-- OutBrick Community: the core schema. See docs/COMMUNITY-PLAN.md.
--
-- Conventions: bigint identity keys; timestamptz everywhere; nothing that identifies a visitor
-- (an IP address, a raw token) is stored in the clear — tokens and IPs are SHA-256 hashes.

CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Members -----------------------------------------------------------------------------------

CREATE TABLE members (
  id              bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  display_name    text NOT NULL CHECK (char_length(display_name) BETWEEN 2 AND 40),
  name_chosen     boolean NOT NULL DEFAULT false,  -- false until the member picks a name on first sign-in
  email           text NOT NULL,
  email_verified  boolean NOT NULL DEFAULT false,
  locale          text NOT NULL DEFAULT 'en' CHECK (locale IN ('en','fr','de','es','ja')),
  role            text NOT NULL DEFAULT 'member' CHECK (role IN ('member','trusted','moderator','team','admin')),
  bio             text NOT NULL DEFAULT '' CHECK (char_length(bio) <= 500),
  -- Per-kind email switches; absent keys use the defaults in netlify/community/notify.ts.
  email_prefs     jsonb NOT NULL DEFAULT '{}'::jsonb,
  banned_until    timestamptz,
  ban_reason      text,
  created_at      timestamptz NOT NULL DEFAULT now(),
  last_seen_at    timestamptz NOT NULL DEFAULT now(),
  -- Account deletion keeps the row (posts keep their thread) but blanks everything personal.
  deleted_at      timestamptz
);
CREATE UNIQUE INDEX members_display_name_key ON members (lower(display_name)) WHERE deleted_at IS NULL;
CREATE UNIQUE INDEX members_email_key ON members (lower(email)) WHERE deleted_at IS NULL;

-- One row per sign-in method linked to a member: apple, google, facebook, email.
CREATE TABLE identities (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  provider    text NOT NULL CHECK (provider IN ('apple','google','facebook','email')),
  subject     text NOT NULL,          -- the provider's stable user id (the email address for 'email')
  email       text,
  created_at  timestamptz NOT NULL DEFAULT now(),
  last_used_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (provider, subject)
);
CREATE INDEX identities_member_idx ON identities (member_id);

CREATE TABLE sessions (
  token_hash  text PRIMARY KEY,       -- hex SHA-256 of the cookie value
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  expires_at  timestamptz NOT NULL,
  user_agent  text NOT NULL DEFAULT ''
);
CREATE INDEX sessions_member_idx ON sessions (member_id);

-- One-time tokens: email sign-in links, OAuth state, email-change confirmations.
CREATE TABLE auth_tokens (
  token_hash  text PRIMARY KEY,
  purpose     text NOT NULL CHECK (purpose IN ('signin','oauth_state','email_change')),
  email       text,
  data        jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at  timestamptz NOT NULL DEFAULT now(),
  expires_at  timestamptz NOT NULL,
  used_at     timestamptz
);

-- Forum ------------------------------------------------------------------------------------

CREATE TABLE categories (
  id                 integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug               text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9-]{2,40}$'),
  kind               text NOT NULL CHECK (kind IN ('announcements','support','bugs','ideas','accessibility','showcase','general')),
  position           integer NOT NULL DEFAULT 0,
  team_only_threads  boolean NOT NULL DEFAULT false,
  archived           boolean NOT NULL DEFAULT false,
  created_at         timestamptz NOT NULL DEFAULT now()
);

INSERT INTO categories (slug, kind, position, team_only_threads) VALUES
  ('announcements', 'announcements', 0, true),
  ('help',          'support',       1, false),
  ('bugs',          'bugs',          2, false),
  ('ideas',         'ideas',         3, false),
  ('accessibility', 'accessibility', 4, false),
  ('show-and-tell', 'showcase',      5, false),
  ('general',       'general',       6, false);

CREATE TABLE threads (
  id              bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category_id     integer NOT NULL REFERENCES categories(id),
  author_id       bigint NOT NULL REFERENCES members(id),
  title           text NOT NULL CHECK (char_length(title) BETWEEN 4 AND 140),
  slug            text NOT NULL,
  language        text NOT NULL DEFAULT 'en' CHECK (language IN ('en','fr','de','es','ja')),
  -- Bugs: new | confirmed | fixed | released | not_a_bug | duplicate.
  -- Ideas: open | considering | planned | shipped | declined.
  status          text,
  status_note     text,               -- e.g. "Fixed in 5.1"
  -- Bug reports: device, os_version, app_version, assistive (array), steps, expected, actual.
  bug             jsonb,
  solved_post_id  bigint,
  pinned          boolean NOT NULL DEFAULT false,
  locked          boolean NOT NULL DEFAULT false,
  hidden          boolean NOT NULL DEFAULT false,
  vote_count      integer NOT NULL DEFAULT 0,
  reply_count     integer NOT NULL DEFAULT 0,
  view_count      integer NOT NULL DEFAULT 0,
  last_post_at    timestamptz NOT NULL DEFAULT now(),
  last_poster_id  bigint REFERENCES members(id),
  release_version text UNIQUE,        -- set on automatic release announcements
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX threads_category_idx ON threads (category_id, pinned DESC, last_post_at DESC) WHERE NOT hidden;
CREATE INDEX threads_latest_idx ON threads (last_post_at DESC) WHERE NOT hidden;
CREATE INDEX threads_author_idx ON threads (author_id);
CREATE INDEX threads_title_trgm ON threads USING gin (title gin_trgm_ops);

CREATE TABLE posts (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  thread_id     bigint NOT NULL REFERENCES threads(id) ON DELETE CASCADE,
  author_id     bigint NOT NULL REFERENCES members(id),
  number        integer NOT NULL,     -- 1 is the opening post
  body_md       text NOT NULL CHECK (char_length(body_md) BETWEEN 1 AND 20000),
  body_html     text NOT NULL,        -- rendered by netlify/community/markdown.ts, allow-listed
  reply_to      integer,              -- the post number this one answers, if any
  hidden        boolean NOT NULL DEFAULT false,
  hidden_reason text,
  pending       boolean NOT NULL DEFAULT false,  -- waiting in the review queue
  created_at    timestamptz NOT NULL DEFAULT now(),
  edited_at     timestamptz,
  deleted_at    timestamptz,
  search        tsvector GENERATED ALWAYS AS (to_tsvector('simple', body_md)) STORED,
  UNIQUE (thread_id, number)
);
CREATE INDEX posts_thread_idx ON posts (thread_id, number);
CREATE INDEX posts_author_idx ON posts (author_id, created_at DESC);
CREATE INDEX posts_search_idx ON posts USING gin (search);
CREATE INDEX posts_body_trgm ON posts USING gin (body_md gin_trgm_ops);

ALTER TABLE threads ADD CONSTRAINT threads_solved_post_fk FOREIGN KEY (solved_post_id) REFERENCES posts(id) ON DELETE SET NULL;

CREATE TABLE post_revisions (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id     bigint NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  body_md     text NOT NULL,
  edited_by   bigint NOT NULL REFERENCES members(id),
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE votes (
  thread_id   bigint NOT NULL REFERENCES threads(id) ON DELETE CASCADE,
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (thread_id, member_id)
);

-- Following a thread or a category. level 'watch' emails every new post; 'mute' silences it.
CREATE TABLE follows (
  member_id    bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  target_type  text NOT NULL CHECK (target_type IN ('thread','category')),
  target_id    bigint NOT NULL,
  level        text NOT NULL DEFAULT 'watch' CHECK (level IN ('watch','mute')),
  created_at   timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, target_type, target_id)
);
CREATE INDEX follows_target_idx ON follows (target_type, target_id);

-- How far each member has read each thread, for "first unread".
CREATE TABLE reads (
  member_id     bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  thread_id     bigint NOT NULL REFERENCES threads(id) ON DELETE CASCADE,
  last_number   integer NOT NULL DEFAULT 0,
  updated_at    timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, thread_id)
);

-- Notifications: kinds are reply, mention, watched, status, solved, release, moderation.
CREATE TABLE notifications (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  kind        text NOT NULL,
  thread_id   bigint REFERENCES threads(id) ON DELETE CASCADE,
  post_id     bigint REFERENCES posts(id) ON DELETE CASCADE,
  actor_id    bigint REFERENCES members(id),
  data        jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at  timestamptz NOT NULL DEFAULT now(),
  read_at     timestamptz,
  emailed_at  timestamptz,
  email_skipped text           -- why no email went: 'pref_off', 'unverified', 'batched' …
);
CREATE INDEX notifications_member_idx ON notifications (member_id, created_at DESC);
CREATE INDEX notifications_unemailed_idx ON notifications (created_at) WHERE emailed_at IS NULL AND email_skipped IS NULL;

-- Moderation -------------------------------------------------------------------------------

CREATE TABLE reports (
  id           bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id      bigint NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  reporter_id  bigint NOT NULL REFERENCES members(id),
  reason       text NOT NULL CHECK (reason IN ('spam','abuse','off_topic','personal_info','other')),
  note         text NOT NULL DEFAULT '' CHECK (char_length(note) <= 1000),
  created_at   timestamptz NOT NULL DEFAULT now(),
  resolved_at  timestamptz,
  resolved_by  bigint REFERENCES members(id),
  resolution   text,
  UNIQUE (post_id, reporter_id)
);
CREATE INDEX reports_open_idx ON reports (created_at) WHERE resolved_at IS NULL;

CREATE TABLE mod_log (
  id           bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  actor_id     bigint REFERENCES members(id),   -- null for the system (release bot, spam rules)
  action       text NOT NULL,
  target_type  text NOT NULL,
  target_id    bigint NOT NULL,
  reason       text NOT NULL DEFAULT '',
  data         jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at   timestamptz NOT NULL DEFAULT now()
);

-- Rate limiting: one row per counted event, keyed by e.g. 'post:member:42' or 'signin:ip:<hash>'.
CREATE TABLE rate_events (
  key   text NOT NULL,
  at    timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX rate_events_key_idx ON rate_events (key, at DESC);

-- FAQ --------------------------------------------------------------------------------------

CREATE TABLE faq_entries (
  id           integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  locale       text NOT NULL CHECK (locale IN ('en','fr','de','es','ja')),
  topic        text NOT NULL DEFAULT 'general',
  question     text NOT NULL,
  answer_md    text NOT NULL,
  answer_html  text NOT NULL,
  thread_id    bigint REFERENCES threads(id) ON DELETE SET NULL,  -- promoted from a solved thread
  position     integer NOT NULL DEFAULT 0,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),
  search       tsvector GENERATED ALWAYS AS (to_tsvector('simple', question || ' ' || answer_md)) STORED
);
CREATE INDEX faq_entries_search_idx ON faq_entries USING gin (search);

-- The release bot ---------------------------------------------------------------------------

CREATE TABLE app_releases (
  version     text PRIMARY KEY,
  released_at timestamptz,
  thread_id   bigint REFERENCES threads(id) ON DELETE SET NULL,
  seen_at     timestamptz NOT NULL DEFAULT now()
);

-- The account the release bot and system notices post as. It cannot sign in: no identity row.
INSERT INTO members (display_name, email, email_verified, role, bio)
VALUES ('OutBrick', 'releases@outbrick.site', true, 'team', 'Release notes, posted the moment Apple publishes an update.');
