// Daily: award the community badges that are not awarded on the spot (welcomer, anniversary)
// and catch up on any the spot checks missed (posts approved from the queue, answers counted
// after a hide was undone …). Each new badge becomes a 'badge' notification, which
// community-notify.mts emails unless the member switched badge emails off.
// The rules are netlify/community/badges.ts; this file only gives them a schedule.
//
// Scheduled functions run on published deploys only, never on Deploy Previews.

import { runBadgeJob } from '../community/badges.ts';
import { signalNotifyWork } from '../community/idle.ts';

const communityBadges = async (): Promise<Response> => {
  try {
    const { awarded } = await runBadgeJob();
    if (awarded) await signalNotifyWork();
    console.log(`[community-badges] awarded ${awarded}`);
  } catch (error) {
    console.error('[community-badges] failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};

export default communityBadges;

// 08:00 UTC, the one daily wake window it shares with community-trust, the notifier's safety
// sweep and (on Mondays) the digest, so the database wakes once a day rather than four times.
export const config = { schedule: '0 8 * * *' };
