// One tick of the lifecycle outbox (netlify/functions/lifecycle-outbox.mts, every ten minutes):
//
//   1. once a day, in the 08:00 UTC wake window the other daily jobs share, a sweep: queue
//      "still want these?" (only with engagement tracking on), requeue Resend contact syncs still
//      owed, apply the retention periods the privacy policy states, import pre-existing
//      newsletter readers once, and prune the outbox, the webhook receipts and email analytics
//      older than 400 days. Each step is isolated, so one failure never skips the rest;
//   2. if anything is due (outbox.ts's gate), send it, and do the release broadcast work
//      (newsletter.ts: drafts still owed, and autosend once a draft's review window passed).
//      The daily sweep does step 2 whatever the gate says, as the safety net for a lost signal.
//
// Both steps leave the database asleep when there is nothing to do.

import { platformStore } from '../platform.ts';
import { sql } from '../community/db.ts';
import { sendEmail } from '../../emails/resend.ts';
import { prepareFeedback, prepareFixed } from './cases.ts';
import { applyRetention, backfillSubscribers, prepareReengage, prepareResendSync, prepareSunset, prepareWelcome, processReleaseBroadcasts, requeueResendSync, sweepReengagement, type ReleaseSummary } from './newsletter.ts';
import { pruneEmailEvents } from './analytics.ts';
import { drain, outboxGate, outboxRan, pruneOutbox, type DrainSummary, type Preparer, type Sender } from './outbox.ts';
import { preparePolicy, prepareSecurity } from './security.ts';

export const SWEEP_HOUR_UTC = 8;

export const prepare: Preparer = async (row, apiKey) => {
  switch (row.kind) {
    case 'welcome-1':
    case 'welcome-2':
    case 'welcome-3':
      return prepareWelcome(row, apiKey);
    case 'support-feedback':
      return prepareFeedback(row, apiKey);
    case 'support-fixed':
      return prepareFixed(row, apiKey);
    case 'reengage':
      return prepareReengage(row, apiKey);
    case 'sunset':
      return prepareSunset(row, apiKey);
    case 'policy':
      return preparePolicy(row, apiKey);
    case 'security':
      return prepareSecurity(row, apiKey);
    case 'resend-sync':
      return prepareResendSync(row, apiKey);
    default:
      return null;
  }
};

async function sweepDone(day: string): Promise<boolean | undefined> {
  try {
    const store = platformStore('community-signals');
    return (await store.get('lifecycle-sweep-day', { type: 'text' })) === day;
  } catch {
    return undefined;
  }
}

async function flag(key: string): Promise<boolean | undefined> {
  try {
    return (await platformStore('community-signals').get(key, { type: 'text' })) === 'done';
  } catch {
    return undefined;
  }
}

async function setFlag(key: string): Promise<void> {
  try {
    await platformStore('community-signals').set(key, 'done');
  } catch {
    /* the import is idempotent */
  }
}

async function markSweep(day: string): Promise<void> {
  try {
    await platformStore('community-signals').set('lifecycle-sweep-day', day);
  } catch {
    /* the sweep is idempotent: running twice queues nothing new */
  }
}

/** Run one sweep step; a failure is logged and the next step still runs. */
async function step<T>(name: string, work: () => Promise<T>): Promise<T | undefined> {
  try {
    return await work();
  } catch (error) {
    console.error(`[lifecycle] ${name} failed: ${error instanceof Error ? error.message : String(error)}`);
    return undefined;
  }
}

const earliest = (...at: (number | null | undefined)[]) => {
  const known = at.filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
  return known.length ? Math.min(...known) : null;
};

export async function lifecycleTick(
  now = new Date(),
  opts: { apiKey?: string; send?: Sender; env?: Record<string, string | undefined>; skipSweep?: boolean } = {},
): Promise<{ swept: boolean; drained: DrainSummary | null; releases?: ReleaseSummary | null }> {
  const env = opts.env ?? process.env;
  const apiKey = opts.apiKey ?? env.RESEND_API_KEY;
  if (!apiKey) return { swept: false, drained: null };
  let swept = false;
  const day = now.toISOString().slice(0, 10);
  if (!opts.skipSweep && now.getUTCHours() === SWEEP_HOUR_UTC && (await sweepDone(day)) !== true) {
    // Once ever: readers who confirmed before the lifecycle table existed (a Blobs marker, and the
    // import itself is idempotent).
    if ((await flag('subscriber-backfill-v1')) !== true) {
      try {
        const added = await backfillSubscribers(apiKey, env);
        await setFlag('subscriber-backfill-v1');
        console.log(`[lifecycle] imported ${added} existing newsletter reader(s)`);
      } catch (error) {
        console.error(`[lifecycle] subscriber import failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    const queued = await step('re-engagement sweep', () => sweepReengagement(env, now));
    const resynced = await step('Resend contact requeue', () => requeueResendSync(env, now));
    await step('retention', () => applyRetention());
    await step('outbox prune', () => pruneOutbox());
    await step('webhook receipt prune', () => sql`DELETE FROM resend_webhook_events WHERE received_at < now() - interval '30 days'`);
    await step('email analytics prune', () => pruneEmailEvents());
    await markSweep(day);
    if (queued) console.log(`[lifecycle] sweep queued ${queued} re-engagement email(s)`);
    if (resynced) console.log(`[lifecycle] sweep requeued ${resynced} Resend contact sync(s)`);
    swept = true;
  }
  // The sweep drains whatever the gate says: a signal lost to a storage error costs a day at most.
  if (!swept && !(await outboxGate(now.getTime()))) return { swept, drained: null };
  const drained = await drain({ apiKey, prepare, send: opts.send ?? sendEmail, now });
  const releases = await step('release broadcasts', () => processReleaseBroadcasts(apiKey, env, now));
  // A failed release step is tried again in fifteen minutes rather than waiting for the sweep.
  await outboxRan(earliest(drained.nextDue, releases ? releases.nextDue : now.getTime() + 15 * 60_000));
  if (drained.sent || drained.failed || drained.dropped) console.log(`[lifecycle] sent ${drained.sent}, dropped ${drained.dropped}, failed ${drained.failed}`);
  return { swept, drained, releases: releases ?? null };
}
