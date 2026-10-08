// The lifecycle outbox: emails that go out later, or that must survive a failed first try.
//
// A row says what to send (`kind` + `payload`), to whom, and from when (`send_after`). The email
// itself is rendered at send time, so it carries the current year, the reader's current
// language and preferences, and it can be dropped if it no longer applies (an unsubscribed
// reader, a case that was reopened). netlify/functions/lifecycle-outbox.mts drains it every ten
// minutes, but only opens the database when something is due:
//
//   - enqueue() writes the row and then lowers a "next due" time in Netlify Blobs
//     (`community-signals`, key `outbox-due`), never raises it;
//   - the tick reads that time first and returns at once while it lies in the future;
//   - a drain recomputes it from the table (the earliest unsent row), or clears it.
//
// If Blobs is unavailable the gate fails open and the tick queries as it would without it.
// Rows are claimed for five minutes before sending (a run cut off mid-send is retried), sends
// carry a Resend Idempotency-Key from `dedupe_key`, and a failed send backs off 15 min × 2^n,
// giving up after 6 attempts.

import { getStore } from '@netlify/blobs';
import { sql, transaction, type Query } from '../community/db.ts';
import type { SignalStore } from '../community/idle.ts';
import type { ResendResult, OutgoingEmail } from '../../emails/resend.ts';

export type OutboxKind =
  | 'welcome-2'
  | 'welcome-3'
  | 'support-feedback'
  | 'support-fixed'
  | 'reengage'
  | 'sunset'
  | 'policy'
  | 'security';

export type OutboxItem = {
  kind: OutboxKind;
  to: string;
  locale: string;
  payload?: Record<string, unknown>;
  sendAfter?: Date;
  dedupeKey: string;
};

const DUE_KEY = 'outbox-due';
export const MAX_ATTEMPTS = 6;

let override: SignalStore | null = null;
export function setOutboxStoreForTests(store: SignalStore | null): void {
  override = store;
}

function store(): SignalStore | null {
  if (override) return override;
  try {
    const blobs = getStore({ name: 'community-signals', consistency: 'strong' });
    return {
      get: (key) => blobs.get(key, { type: 'json' }) as Promise<unknown>,
      set: async (key, value) => {
        await blobs.setJSON(key, value);
      },
    };
  } catch {
    return null;
  }
}

async function readDue(): Promise<number | null | undefined> {
  const s = store();
  if (!s) return undefined;
  try {
    const v = (await s.get(DUE_KEY)) as { at?: unknown } | null;
    if (v === null) return null;
    return typeof v?.at === 'number' ? v.at : null;
  } catch {
    return undefined; // fail open
  }
}

async function writeDue(at: number | null): Promise<void> {
  const s = store();
  if (!s) return;
  try {
    await s.set(DUE_KEY, { at });
  } catch {
    /* the next tick fails open */
  }
}

/** Lower the next-due time to `at` (never raise it). Call after the enqueueing transaction commits. */
export async function signalOutbox(at: number): Promise<void> {
  const current = await readDue();
  if (current === undefined) return;
  if (current === null || at < current) await writeDue(at);
}

/** Queue emails (inside `q`'s transaction when given). Duplicates by dedupe key are ignored. Returns the earliest send time. */
export async function enqueue(items: OutboxItem[], q?: Query): Promise<number | null> {
  if (!items.length) return null;
  let earliest: number | null = null;
  for (const item of items) {
    const after = item.sendAfter ?? new Date();
    const text = `INSERT INTO email_outbox (kind, to_email, locale, payload, dedupe_key, send_after)
                  VALUES ($1, $2, $3, $4::jsonb, $5, $6) ON CONFLICT (dedupe_key) DO NOTHING`;
    const params = [item.kind, item.to, item.locale, JSON.stringify(item.payload ?? {}), item.dedupeKey.slice(0, 250), after.toISOString()];
    if (q) await q(text, params);
    else await transaction((tx) => tx(text, params));
    earliest = earliest === null ? after.getTime() : Math.min(earliest, after.getTime());
  }
  return earliest;
}

/** Enqueue and signal in one call, for code that is not inside a transaction. */
export async function enqueueNow(items: OutboxItem[]): Promise<void> {
  const at = await enqueue(items);
  if (at !== null) await signalOutbox(at);
}

/** Cancel unsent rows for an address (all kinds, or the given ones). */
export async function cancelFor(email: string, kinds?: OutboxKind[]): Promise<void> {
  if (kinds?.length) {
    await sql`UPDATE email_outbox SET cancelled_at = now() WHERE lower(to_email) = lower(${email}) AND sent_at IS NULL AND cancelled_at IS NULL AND kind = ANY(string_to_array(${kinds.join(',')}::text, ','))`;
  } else {
    await sql`UPDATE email_outbox SET cancelled_at = now() WHERE lower(to_email) = lower(${email}) AND sent_at IS NULL AND cancelled_at IS NULL`;
  }
}

export async function cancelKey(dedupeKey: string): Promise<void> {
  await sql`UPDATE email_outbox SET cancelled_at = now() WHERE dedupe_key = ${dedupeKey} AND sent_at IS NULL AND cancelled_at IS NULL`;
}

/** Move an unsent row's send time (a second staff reply pushes the feedback request back). */
export async function reschedule(dedupeKey: string, sendAfter: Date): Promise<void> {
  await sql`UPDATE email_outbox SET send_after = ${sendAfter.toISOString()} WHERE dedupe_key = ${dedupeKey} AND sent_at IS NULL AND cancelled_at IS NULL`;
}

export type Row = { id: number; kind: OutboxKind; to_email: string; locale: string; payload: Record<string, unknown>; attempts: number; dedupe_key: string };

/**
 * What to do with one due row: an email to send, `null` to drop it (no longer applies), or
 * `{ action }` for work that sends nothing (the sunset). `after` runs once the send succeeded.
 */
export type Prepared = { email: OutgoingEmail; after?: () => Promise<void> } | { action: () => Promise<void> } | null;
export type Preparer = (row: Row, apiKey: string) => Promise<Prepared>;
export type Sender = (apiKey: string, email: OutgoingEmail, idempotencyKey?: string) => Promise<ResendResult>;

export type DrainSummary = { sent: number; dropped: number; failed: number; nextDue: number | null };

/** Send what is due, at most `limit` rows. */
export async function drain(opts: { apiKey: string; prepare: Preparer; send: Sender; now?: Date; limit?: number }): Promise<DrainSummary> {
  const now = opts.now ?? new Date();
  const limit = opts.limit ?? 60;
  const rows = (await transaction(async (q) =>
    q(
      `UPDATE email_outbox SET claimed_until = $1::timestamptz + interval '5 minutes'
        WHERE id IN (SELECT id FROM email_outbox
                      WHERE sent_at IS NULL AND cancelled_at IS NULL AND send_after <= $1::timestamptz
                        AND (claimed_until IS NULL OR claimed_until < $1::timestamptz)
                      ORDER BY send_after, id LIMIT $2 FOR UPDATE SKIP LOCKED)
        RETURNING id::int, kind, to_email, locale, payload, attempts, dedupe_key`,
      [now.toISOString(), limit],
    ),
  )) as unknown as Row[];
  const summary: DrainSummary = { sent: 0, dropped: 0, failed: 0, nextDue: null };
  for (const row of rows) {
    let prepared: Prepared;
    try {
      prepared = await opts.prepare(row, opts.apiKey);
    } catch (error) {
      prepared = null;
      console.error(`[outbox] ${row.kind} #${row.id} could not be prepared: ${error instanceof Error ? error.message : String(error)}`);
    }
    if (prepared === null) {
      await sql`UPDATE email_outbox SET cancelled_at = now(), claimed_until = NULL WHERE id = ${row.id}`;
      summary.dropped++;
      continue;
    }
    if ('action' in prepared) {
      await prepared.action();
      await sql`UPDATE email_outbox SET sent_at = now(), claimed_until = NULL WHERE id = ${row.id}`;
      summary.sent++;
      continue;
    }
    const result = await opts.send(opts.apiKey, prepared.email, `outbox-${row.dedupe_key}`.slice(0, 256));
    if (result.ok) {
      // A deleted account's address is not kept once its last email has gone.
      await sql`UPDATE email_outbox SET sent_at = now(), claimed_until = NULL, last_error = NULL,
                  to_email = CASE WHEN ${row.kind}::text = 'security' AND payload->>'template' = 'account-deleted' THEN '' ELSE to_email END
                WHERE id = ${row.id}`;
      await prepared.after?.();
      summary.sent++;
    } else {
      const attempts = row.attempts + 1;
      const giveUp = attempts >= MAX_ATTEMPTS;
      const retry = new Date(now.getTime() + 15 * 60_000 * 2 ** (attempts - 1));
      await sql`UPDATE email_outbox SET attempts = ${attempts}, claimed_until = NULL, last_error = ${String(result.error ?? result.status).slice(0, 300)},
                  send_after = ${retry.toISOString()}::timestamptz, cancelled_at = ${giveUp ? now.toISOString() : null}::timestamptz
                WHERE id = ${row.id}`;
      console.error(`[outbox] ${row.kind} #${row.id} failed (attempt ${attempts}${giveUp ? ', giving up' : ''}): ${result.error}`);
      summary.failed++;
    }
  }
  const [next] = await sql`SELECT min(send_after) AS at FROM email_outbox WHERE sent_at IS NULL AND cancelled_at IS NULL`;
  const at = next?.at;
  summary.nextDue = at instanceof Date ? at.getTime() : typeof at === 'string' ? Date.parse(at) : null;
  return summary;
}

/** The tick's gate: run only when the stored next-due time has come (or Blobs can't say). */
export async function outboxGate(now: number): Promise<boolean> {
  const due = await readDue();
  if (due === undefined) return true;
  return due !== null && due <= now;
}

export async function outboxRan(nextDue: number | null): Promise<void> {
  await writeDue(nextDue);
}

/** Old rows go after 90 days; nothing in them is needed once sent or cancelled. */
export async function pruneOutbox(): Promise<void> {
  await sql`DELETE FROM email_outbox WHERE (sent_at IS NOT NULL OR cancelled_at IS NOT NULL) AND created_at < now() - interval '90 days'`;
}
