-- Customer lifecycle email (8 October 2026). See netlify/lifecycle/ and emails/lifecycle.ts.
--
-- support_cases        one row per contact-form message, so a reply, a "fixed in 5.2" and a
--                      "did we solve it?" can all refer to the same case (reference OB-XXXXXX).
-- support_case_events  the case's history: created, staff replies, status changes, feedback.
-- applications         affiliate and careers applications, so the decision can be emailed.
-- newsletter_subscribers  the newsletter's own lifecycle state (Resend keeps the list itself):
--                      welcome-series progress, topics, engagement for the "still want these?" email.
-- email_outbox         emails that go out later (welcome series, feedback requests, re-engagement,
--                      policy notices), drained by netlify/functions/lifecycle-outbox.mts.
-- member_devices       browser/OS fingerprints a member has signed in from, for new-device alerts.

CREATE TABLE support_cases (
  id               bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  ref              text NOT NULL UNIQUE CHECK (ref ~ '^OB-[0-9A-Z]{6}$'),
  submission_id    text UNIQUE,
  email            text NOT NULL,
  name             text NOT NULL DEFAULT '',
  locale           text NOT NULL DEFAULT 'en' CHECK (locale IN ('en','fr','de','es','ja','pt-BR')),
  topic            text NOT NULL DEFAULT '',
  message          text NOT NULL DEFAULT '',
  device           text NOT NULL DEFAULT '',
  app_version      text NOT NULL DEFAULT '',
  ios_version      text NOT NULL DEFAULT '',
  -- open: needs the team; replied: the team answered; fix_pending: waiting for fixed_in to ship;
  -- resolved: done (feedback may follow); closed: done, no feedback.
  status           text NOT NULL DEFAULT 'open' CHECK (status IN ('open','replied','fix_pending','resolved','closed')),
  fixed_in         text CHECK (fixed_in IS NULL OR fixed_in ~ '^\d{1,4}(\.\d{1,4}){0,3}$'),
  fixed_notified_at timestamptz,
  feedback_rating  smallint CHECK (feedback_rating BETWEEN 1 AND 5),
  feedback_solved  boolean,
  feedback_comment text CHECK (feedback_comment IS NULL OR char_length(feedback_comment) <= 2000),
  feedback_at      timestamptz,
  reopened         integer NOT NULL DEFAULT 0,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX support_cases_status ON support_cases (status, updated_at DESC);
CREATE INDEX support_cases_fix ON support_cases (fixed_in) WHERE status = 'fix_pending';

CREATE TABLE support_case_events (
  id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  case_id    bigint NOT NULL REFERENCES support_cases(id) ON DELETE CASCADE,
  kind       text NOT NULL CHECK (kind IN ('created','reply','status','fixed_in','fixed_notified','feedback_requested','feedback','reopened','note')),
  body       text NOT NULL DEFAULT '' CHECK (char_length(body) <= 20000),
  actor_id   bigint REFERENCES members(id) ON DELETE SET NULL,
  data       jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX support_case_events_case ON support_case_events (case_id, id);

CREATE TABLE applications (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  kind          text NOT NULL CHECK (kind IN ('affiliate','careers')),
  submission_id text UNIQUE,
  email         text NOT NULL,
  name          text NOT NULL DEFAULT '',
  locale        text NOT NULL DEFAULT 'en' CHECK (locale IN ('en','fr','de','es','ja','pt-BR')),
  role          text NOT NULL DEFAULT '',   -- careers: the role applied for
  code          text NOT NULL DEFAULT '',   -- affiliate: the proposed (then approved) code
  details       jsonb NOT NULL DEFAULT '{}'::jsonb,
  -- received → in_review → approved | declined (affiliate) / next_step | declined (careers)
  status        text NOT NULL DEFAULT 'received' CHECK (status IN ('received','in_review','approved','next_step','declined')),
  decided_at    timestamptz,
  decided_by    bigint REFERENCES members(id) ON DELETE SET NULL,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX applications_status ON applications (kind, status, created_at DESC);

CREATE TABLE newsletter_subscribers (
  email          text PRIMARY KEY CHECK (email = lower(email)),
  locale         text NOT NULL DEFAULT 'en' CHECK (locale IN ('en','fr','de','es','ja','pt-BR')),
  status         text NOT NULL DEFAULT 'subscribed' CHECK (status IN ('subscribed','unsubscribed','sunset')),
  -- Topics the reader wants; every topic is on unless set to false.
  topics         jsonb NOT NULL DEFAULT '{}'::jsonb,
  confirmed_at   timestamptz NOT NULL DEFAULT now(),
  welcome_step   smallint NOT NULL DEFAULT 1,  -- 1 = the welcome went out with the confirmation
  last_engaged_at timestamptz NOT NULL DEFAULT now(),
  reengage_sent_at timestamptz,
  updated_at     timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX newsletter_subscribers_engaged ON newsletter_subscribers (last_engaged_at) WHERE status = 'subscribed';

CREATE TABLE email_outbox (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  kind        text NOT NULL,
  to_email    text NOT NULL,
  locale      text NOT NULL DEFAULT 'en',
  payload     jsonb NOT NULL DEFAULT '{}'::jsonb,
  -- Stable per email, so a requeue or a retried drain never sends it twice.
  dedupe_key  text NOT NULL UNIQUE,
  send_after  timestamptz NOT NULL DEFAULT now(),
  claimed_until timestamptz,
  attempts    integer NOT NULL DEFAULT 0,
  sent_at     timestamptz,
  cancelled_at timestamptz,
  last_error  text,
  created_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX email_outbox_due ON email_outbox (send_after) WHERE sent_at IS NULL AND cancelled_at IS NULL;
CREATE INDEX email_outbox_to ON email_outbox (lower(to_email)) WHERE sent_at IS NULL AND cancelled_at IS NULL;

CREATE TABLE member_devices (
  member_id   bigint NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  fingerprint text NOT NULL,
  label       text NOT NULL DEFAULT '',
  first_seen  timestamptz NOT NULL DEFAULT now(),
  last_seen   timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (member_id, fingerprint)
);
