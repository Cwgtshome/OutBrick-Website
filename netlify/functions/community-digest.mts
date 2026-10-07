// Mondays: the OutBrick Community's opt-in weekly digest (netlify/community/digest.ts).
//
// It runs every ten minutes from 08:00 to 10:50 UTC. The first run sends as many as fit in its
// time budget; the later ones finish the list and then find nothing to do, because each member
// is claimed once per ISO week. Without RESEND_API_KEY it does nothing.
//
// Scheduled functions run only on the published production deploy, never on Deploy Previews.

import { runDigest } from '../community/digest.ts';

const communityDigest = async (): Promise<Response> => {
  try {
    await runDigest();
  } catch (error) {
    console.error('[community-digest] run failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};

export default communityDigest;

export const config = { schedule: '*/10 8-10 * * 1' };
