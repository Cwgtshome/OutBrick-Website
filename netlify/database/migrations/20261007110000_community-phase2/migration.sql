-- OutBrick Community, phase 2: thread merges, image uploads, passkeys, machine translation,
-- reply by email and the weekly digest. See docs/COMMUNITY-PLAN.md (Phases) and the modules
-- named beside each table. Additive only: nothing from phase 1 changes meaning.

-- Single-use challenges for passkey registration and sign-in live with the other one-time tokens.
ALTER TABLE auth_tokens DROP CONSTRAINT IF EXISTS auth_tokens_purpose_check;
ALTER TABLE auth_tokens ADD CONSTRAINT auth_tokens_purpose_check
  CHECK (purpose IN ('signin','oauth_state','email_change','passkey_register','passkey_login'));

-- Thread merges (netlify/community/merge.ts). A merged thread stays as a hidden stub whose URL
-- answers with a redirect to the thread it was merged into.
ALTER TABLE threads ADD COLUMN merged_into bigint REFERENCES threads(id) ON DELETE SET NULL;
CREATE INDEX threads_merged_into_idx ON threads (merged_into) WHERE merged_into IS NOT NULL;

-- Image uploads (netlify/community/uploads.ts). The bytes live in Netlify Blobs, store
-- "community-uploads", under `blob_key`; `id` is random, so upload addresses cannot be guessed.
CREATE TABLE uploads (
  id                text PRIMARY KEY CHECK (id ~ '^[A-Za-z0-9_-]{22}$'),
  member_id         bigint NOT NULL REFERENCES members(id),
  blob_key          text NOT NULL UNIQUE,
  content_type      text NOT NULL CHECK (content_type IN ('image/jpeg','image/png','image/webp')),
  width             integer NOT NULL CHECK (width BETWEEN 1 AND 4096),
  height            integer NOT NULL CHECK (height BETWEEN 1 AND 4096),
  bytes             integer NOT NULL CHECK (bytes > 0),
  created_at        timestamptz NOT NULL DEFAULT now(),
  attached_post_id  bigint REFERENCES posts(id) ON DELETE SET NULL,
  deleted_at        timestamptz,
  deleted_by        bigint REFERENCES members(id)
);
CREATE INDEX uploads_member_idx ON uploads (member_id, created_at DESC);
CREATE INDEX uploads_post_idx ON uploads (attached_post_id) WHERE attached_post_id IS NOT NULL;

-- Passkeys (netlify/community/auth/passkeys.ts). The WebAuthn user handle is random and per
-- member, never the member id; credentials are stored as base64url text.
ALTER TABLE members ADD COLUMN webauthn_handle text UNIQUE;
CREATE TABLE passkeys (
  id             bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  member_id      bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  credential_id  text NOT NULL UNIQUE,
  public_key     text NOT NULL,            -- the COSE_Key, base64url
  algorithm      integer NOT NULL CHECK (algorithm IN (-7, -257)),
  sign_count     bigint NOT NULL DEFAULT 0,
  transports     jsonb NOT NULL DEFAULT '[]'::jsonb,
  nickname       text NOT NULL DEFAULT '' CHECK (char_length(nickname) <= 60),
  aaguid         text NOT NULL DEFAULT '',
  backed_up      boolean NOT NULL DEFAULT false,
  created_at     timestamptz NOT NULL DEFAULT now(),
  last_used_at   timestamptz
);
CREATE INDEX passkeys_member_idx ON passkeys (member_id);

-- Machine translation on request (netlify/community/translate.ts): one row per post body
-- (its SHA-256, so an edit is a new revision) and target language.
CREATE TABLE post_translations (
  post_id     bigint NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  revision    text NOT NULL,
  locale      text NOT NULL CHECK (locale IN ('en','fr','de','es','ja')),
  body_md     text NOT NULL,
  body_html   text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (post_id, revision, locale)
);

-- Reply by email (netlify/community/reply-email.ts): every inbound message once, by its id.
CREATE TABLE inbound_emails (
  message_id  text PRIMARY KEY,
  received_at timestamptz NOT NULL DEFAULT now(),
  member_id   bigint REFERENCES members(id) ON DELETE SET NULL,
  thread_id   bigint REFERENCES threads(id) ON DELETE SET NULL,
  post_id     bigint REFERENCES posts(id) ON DELETE SET NULL,
  outcome     text NOT NULL DEFAULT 'processing'
);

-- The weekly digest (netlify/community/digest.ts): one row per member per ISO week, claimed
-- before the email is sent, so a rerun never sends the same week twice.
CREATE TABLE digest_sends (
  member_id  bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  week       text NOT NULL CHECK (week ~ '^\d{4}-W\d{2}$'),
  status     text NOT NULL DEFAULT 'sending',
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, week)
);
