// One tick of the lifecycle outbox (netlify/functions/lifecycle-outbox.mts, every ten minutes):
//
//   1. once a day, in the 08:00 UTC wake window the other daily jobs share, a sweep: queue
//      "still want these?" (only with engagement tracking on) and prune old outbox rows;
//   2. if anything is due (outbox.ts's Blobs gate), send it.
//
// Both steps leave the database asleep when there is nothing to do.

import { getStore } from '@netlify/blobs';
import { sendEmail } from '../../emails/resend.ts';
import { prepareFeedback, prepareFixed } from './cases.ts';
import { prepareReengage, prepareSunset, prepareWelcome, sweepReengagement } from './newsletter.ts';
import { drain, outboxGate, outboxRan, pruneOutbox, type DrainSummary, type Preparer, type Sender } from './outbox.ts';
import { preparePolicy, prepareSecurity } from './security.ts';

export const SWEEP_HOUR_UTC = 8;

export const prepare: Preparer = async (row, apiKey) => {
  switch (row.kind) {
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
    default:
      return null;
  }
};

async function sweepDone(day: string): Promise<boolean | undefined> {
  try {
    const store = getStore({ name: 'community-signals', consistency: 'strong' });
    return (await store.get('lifecycle-sweep-day', { type: 'text' })) === day;
  } catch {
    return undefined;
  }
}

async function markSweep(day: string): Promise<void> {
  try {
    await getStore({ name: 'community-signals', consistency: 'strong' }).set('lifecycle-sweep-day', day);
  } catch {
    /* the sweep is idempotent: running twice queues nothing new */
  }
}

export async function lifecycleTick(
  now = new Date(),
  opts: { apiKey?: string; send?: Sender; env?: Record<string, string | undefined>; skipSweep?: boolean } = {},
): Promise<{ swept: boolean; drained: DrainSummary | null }> {
  const env = opts.env ?? process.env;
  const apiKey = opts.apiKey ?? env.RESEND_API_KEY;
  if (!apiKey) return { swept: false, drained: null };
  let swept = false;
  const day = now.toISOString().slice(0, 10);
  if (!opts.skipSweep && now.getUTCHours() === SWEEP_HOUR_UTC && (await sweepDone(day)) !== true) {
    const queued = await sweepReengagement(env, now);
    await pruneOutbox();
    await markSweep(day);
    if (queued) console.log(`[lifecycle] sweep queued ${queued} re-engagement email(s)`);
    swept = true;
  }
  if (!(await outboxGate(now.getTime()))) return { swept, drained: null };
  const drained = await drain({ apiKey, prepare, send: opts.send ?? sendEmail, now });
  await outboxRan(drained.nextDue);
  if (drained.sent || drained.failed || drained.dropped) console.log(`[lifecycle] sent ${drained.sent}, dropped ${drained.dropped}, failed ${drained.failed}`);
  return { swept, drained };
}
