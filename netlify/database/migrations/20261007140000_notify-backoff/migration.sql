-- A notification email that Resend refuses is retried with exponential backoff (5, 10, 20 …
-- minutes, at most 6 hours apart) and given up after 8 attempts (email_skipped = 'send_failed'),
-- so an outage or a revoked key can't keep the notifier, and the database, awake every five
-- minutes. See netlify/community/notify.ts.
ALTER TABLE notifications ADD COLUMN email_attempts integer NOT NULL DEFAULT 0;
ALTER TABLE notifications ADD COLUMN email_retry_at timestamptz;
