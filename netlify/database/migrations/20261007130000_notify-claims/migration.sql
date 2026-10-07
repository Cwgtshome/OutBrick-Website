-- Notification emails are claimed before they are sent and marked emailed only after Resend has
-- accepted them. A claim older than 15 minutes is treated as abandoned (the run timed out or
-- crashed mid-send) and the row is picked up again; the batch's Idempotency-Key stops a resend
-- from reaching the member twice.
ALTER TABLE notifications ADD COLUMN email_claimed_at timestamptz;
DROP INDEX IF EXISTS notifications_unemailed_idx;
CREATE INDEX notifications_unemailed_idx ON notifications (created_at) WHERE emailed_at IS NULL AND email_skipped IS NULL;
