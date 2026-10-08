// Every ten minutes: send the lifecycle emails that are due (welcome series, "did we solve it?",
// fixed-in-version notices, policy notices, retried security notices) and, once a day at 08:00
// UTC, sweep for "still want these?". See netlify/lifecycle/run.ts and outbox.ts. It opens the
// database only when something is due, so a quiet site stays asleep.
//
// Scheduled functions run only on the published production deploy, never on Deploy Previews.

import { lifecycleTick } from '../lifecycle/run.ts';

const handler = async (): Promise<Response> => {
  try {
    await lifecycleTick();
  } catch (error) {
    console.error('[lifecycle-outbox] run failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};
export default handler;

export const config = { schedule: '*/10 * * * *' };
