// Every five minutes: email pending community notifications (and each new member's welcome).
// See netlify/community/notify.ts for the rules: preferences, skips, grouping, the hourly cap
// and idempotency. Without RESEND_API_KEY it does nothing and says so once.
//
// It opens the database only when there is something to do (netlify/community/idle.ts): a new
// work signal, work that falls due, or the once-a-day safety sweep. Otherwise the database stays
// asleep, which is what keeps a free plan inside its monthly compute.
//
// Scheduled functions run only on the published production deploy, never on Deploy Previews.

import { runNotify, type Sender } from '../community/notify.ts';
import { notifyGate, notifyRan } from '../community/idle.ts';

/** One scheduled tick, exported for tests. */
export async function notifyTick(
  now = Date.now(),
  opts: { afterRun?: () => Promise<void>; apiKey?: string; send?: Sender } = {},
): Promise<{ ran: boolean; reason: string }> {
  // Read the token BEFORE querying: anything committed after this read signals a newer token.
  const gate = await notifyGate(now);
  if (!gate.run) return { ran: false, reason: gate.reason };
  const summary = await runNotify({ apiKey: opts.apiKey, send: opts.send });
  await opts.afterRun?.();
  // Overdue work goes to the next tick; nothing pending means only a signal or the sweep wakes it.
  const dueAt = summary.dueAt === null ? null : Math.max(summary.dueAt, now);
  await notifyRan(gate.token, dueAt, now);
  return { ran: true, reason: gate.reason };
}

const handler = async (): Promise<Response> => {
  try {
    const { ran, reason } = await notifyTick();
    if (ran) console.log(`[community-notify] ran: ${reason}`);
  } catch (error) {
    // Nothing is recorded, so the next tick runs again.
    console.error('[community-notify] run failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};
export default handler;

export const config = { schedule: '*/5 * * * *' };
