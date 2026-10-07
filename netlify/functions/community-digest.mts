// Mondays: the OutBrick Community's opt-in weekly digest (netlify/community/digest.ts).
//
// The first run is at 08:00 UTC, in the same wake window as the daily jobs. Later runs every ten
// minutes until 10:50 finish anything the first run's time budget left, and once a week's run
// ends with nothing left, a marker in Netlify Blobs (netlify/community/idle.ts) makes the rest of
// that week's runs skip the database entirely. Without RESEND_API_KEY it does nothing.
//
// Scheduled functions run only on the published production deploy, never on Deploy Previews.

import { isoWeek, runDigest } from '../community/digest.ts';
import type { Sender } from '../community/notify.ts';
import { digestWeekDone, markDigestWeekDone } from '../community/idle.ts';

/** One scheduled tick, exported for tests. */
export async function digestTick(now = new Date(), opts: { apiKey?: string; send?: Sender } = {}): Promise<{ ran: boolean }> {
  const week = isoWeek(now);
  const apiKey = opts.apiKey ?? process.env.RESEND_API_KEY;
  if (!apiKey || (await digestWeekDone(week))) return { ran: false };
  const summary = await runDigest({ now, apiKey, send: opts.send });
  if (!summary.remaining && summary.failed === 0) await markDigestWeekDone(week);
  return { ran: true };
}

const communityDigest = async (): Promise<Response> => {
  try {
    await digestTick();
  } catch (error) {
    console.error('[community-digest] run failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};

export default communityDigest;

export const config = { schedule: '*/10 8-10 * * 1' };
