-- Independent durable storage replaces Netlify Forms. Existing cases, applications,
-- subscribers and signed email links keep their original identifiers.
CREATE TABLE web_form_submissions (
  id text PRIMARY KEY,
  form_name text NOT NULL CHECK (form_name IN ('contact','careers','affiliate','newsletter')),
  payload jsonb NOT NULL,
  delivery_state text NOT NULL DEFAULT 'pending' CHECK (delivery_state IN ('pending','processing','sent','archived')),
  attempts integer NOT NULL DEFAULT 0,
  retry_at timestamptz NOT NULL DEFAULT now() + interval '10 minutes',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX web_form_submissions_due ON web_form_submissions (retry_at) WHERE delivery_state IN ('pending','processing');
