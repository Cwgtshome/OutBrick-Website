-- Email delivery hardening (9 October 2026). See docs/EMAIL-LIFECYCLE.md.
--
-- newsletter_subscribers  gains the reader's suppression (a hard bounce, a spam complaint or
--                         Resend's own suppression, from netlify/functions/resend-events.mts),
--                         the consent record written at confirmation (when, from which page,
--                         which version of the sign-up wording, and the stored form
--                         submission), and a flag for a Resend contact sync still owed.
-- resend_webhook_events   svix ids already handled, so a redelivered webhook is a no-op.
-- release_broadcasts      one row per version and language: the Resend Broadcast draft the
--                         release bot made, and whether it was sent (RELEASE_EMAIL_AUTOSEND).

ALTER TABLE newsletter_subscribers
  ADD COLUMN suppressed_at timestamptz,
  ADD COLUMN suppression_reason text CHECK (suppression_reason IS NULL OR char_length(suppression_reason) <= 200),
  ADD COLUMN consent_at timestamptz,
  ADD COLUMN consent_source text CHECK (consent_source IS NULL OR char_length(consent_source) <= 300),
  ADD COLUMN consent_text_version text CHECK (consent_text_version IS NULL OR char_length(consent_text_version) <= 40),
  ADD COLUMN submission_id text REFERENCES web_form_submissions(id) ON DELETE SET NULL,
  -- True from the moment a confirmation is recorded until Resend has the contact.
  ADD COLUMN resend_pending boolean NOT NULL DEFAULT false;
CREATE INDEX newsletter_subscribers_resend_pending ON newsletter_subscribers (email) WHERE resend_pending;

CREATE TABLE resend_webhook_events (
  svix_id     text PRIMARY KEY CHECK (char_length(svix_id) <= 200),
  type        text NOT NULL DEFAULT '',
  received_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE release_broadcasts (
  version      text NOT NULL CHECK (version ~ '^\d{1,4}(\.\d{1,4}){0,3}$'),
  locale       text NOT NULL CHECK (locale IN ('en','fr','de','es','ja','pt-BR')),
  segment_id   text NOT NULL,
  -- The What's New text the draft is built from, kept so a failed draft can be retried.
  notes        text NOT NULL DEFAULT '' CHECK (char_length(notes) <= 8000),
  broadcast_id text,
  created_at   timestamptz NOT NULL DEFAULT now(),
  -- Before the draft exists: when to try creating it again. After: when it may be sent.
  send_after   timestamptz NOT NULL DEFAULT now(),
  sent_at      timestamptz,
  cancelled_at timestamptz,
  attempts     integer NOT NULL DEFAULT 0,
  last_error   text,
  PRIMARY KEY (version, locale)
);
CREATE INDEX release_broadcasts_due ON release_broadcasts (send_after) WHERE sent_at IS NULL AND cancelled_at IS NULL;
