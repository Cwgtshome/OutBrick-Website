-- Newsletter: pause, frequency and the welcome-series hold-back (9 October 2026).
-- See netlify/lifecycle/newsletter.ts and docs/EMAIL-LIFECYCLE.md.
--
-- newsletter_subscribers  gains
--   paused_until   a pause the reader chose on the preferences page (30 or 90 days). Until then
--                  no newsletter email is queued or sent; the outbox drops paused rows when it
--                  renders them, and the "still want these?" clock restarts when the pause ends;
--   frequency      'everything' (the default) or 'monthly': a monthly reader gets no welcome
--                  extras and is opted out of the "New versions" Resend topic;
--   holdout        assigned once, at the first confirmation, for NEWSLETTER_HOLDOUT_PERCENT (10)
--                  of new readers from an HMAC of the address: they get welcome 1 but not
--                  letters 2 and 3, so the series can be measured against no series.
-- email_events            gains
--   cohort         on a 'confirmed' row only: 'treatment' or 'holdout' for a reader who started
--                  the welcome series, so the report can compare the two without an address;
--   detail         on a 'prefs_saved' row only: the choices saved (topics, frequency, pause),
--                  never anything about the reader.

ALTER TABLE newsletter_subscribers
  ADD COLUMN paused_until timestamptz,
  ADD COLUMN frequency text NOT NULL DEFAULT 'everything' CHECK (frequency IN ('everything','monthly')),
  ADD COLUMN holdout boolean NOT NULL DEFAULT false;

ALTER TABLE email_events
  ADD COLUMN cohort text CHECK (cohort IS NULL OR cohort IN ('treatment','holdout')),
  ADD COLUMN detail jsonb CHECK (detail IS NULL OR octet_length(detail::text) <= 500);
CREATE INDEX email_events_cohort ON email_events (address_hash, occurred_at) WHERE cohort IS NOT NULL;
CREATE INDEX email_events_address ON email_events (address_hash, type, occurred_at) WHERE address_hash IS NOT NULL;
