-- Email analytics (9 October 2026). See netlify/lifecycle/analytics.ts and docs/EMAIL-LIFECYCLE.md.
--
-- email_events  one row per Resend delivery event (every email.* webhook, plus contact.updated
--               unsubscribes) and per site-side newsletter milestone (signup, confirmed, our own
--               unsubscribe, saved preferences). Addresses are never stored: address_hash is an
--               HMAC keyed from RESEND_API_KEY (purpose 'analytics'), enough to count unique
--               readers and nothing else. Clicked links keep their path and utm_* tags only.
--               Rows older than 400 days are pruned by the daily lifecycle sweep.

CREATE TABLE email_events (
  id              bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  type            text NOT NULL CHECK (type IN (
                    'sent','delivered','delivery_delayed','opened','clicked','bounced','complained','suppressed','failed','unsubscribed',
                    'signup','confirmed','unsubscribed_site','prefs_saved')),
  resend_email_id text CHECK (resend_email_id IS NULL OR char_length(resend_email_id) <= 100),
  broadcast_id    text CHECK (broadcast_id IS NULL OR char_length(broadcast_id) <= 100),
  -- The send's `form` tag (the template), and its `locale` tag.
  form            text CHECK (form IS NULL OR char_length(form) <= 80),
  locale          text CHECK (locale IS NULL OR char_length(locale) <= 10),
  link_url        text CHECK (link_url IS NULL OR char_length(link_url) <= 500),
  -- Site milestones: the page the sign-up came from (a path), or how the reader left.
  source          text CHECK (source IS NULL OR char_length(source) <= 300),
  address_hash    text CHECK (address_hash IS NULL OR char_length(address_hash) <= 64),
  occurred_at     timestamptz NOT NULL DEFAULT now(),
  -- Webhook events only; site milestones have none.
  svix_id         text UNIQUE CHECK (svix_id IS NULL OR char_length(svix_id) <= 200)
);
CREATE INDEX email_events_form_type ON email_events (form, type, occurred_at);
CREATE INDEX email_events_type_time ON email_events (type, occurred_at);
CREATE INDEX email_events_broadcast ON email_events (broadcast_id, type) WHERE broadcast_id IS NOT NULL;
CREATE INDEX email_events_time ON email_events (occurred_at);
