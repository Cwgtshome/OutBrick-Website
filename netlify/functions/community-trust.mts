// Daily: members who have earned it become "trusted" (netlify/community/trust.ts for the rules).
// It only ever promotes; nobody is demoted by a schedule.
//
// Scheduled functions run only on the published production deploy, never on Deploy Previews.

import { runTrustPromotion } from '../community/trust.ts';

const communityTrust = async (): Promise<Response> => {
  try {
    await runTrustPromotion();
  } catch (error) {
    console.error('[community-trust] run failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};

export default communityTrust;

// 08:00 UTC: the shared daily wake window (see community-badges.mts).
export const config = { schedule: '0 8 * * *' };
