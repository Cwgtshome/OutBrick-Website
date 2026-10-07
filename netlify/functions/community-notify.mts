// Every five minutes: email pending community notifications (and each new member's welcome).
// See netlify/community/notify.ts for the rules: preferences, skips, grouping, the hourly cap
// and idempotency. Without RESEND_API_KEY it does nothing and says so once.
//
// Scheduled functions run only on the published production deploy, never on Deploy Previews.

import { runNotify } from '../community/notify.ts';

export default async (): Promise<Response> => {
  try {
    await runNotify();
  } catch (error) {
    console.error('[community-notify] run failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};

export const config = { schedule: '*/5 * * * *' };
