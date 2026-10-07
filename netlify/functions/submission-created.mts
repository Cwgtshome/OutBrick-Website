// Netlify runs a function named `submission-created` by itself for every verified Netlify Forms
// submission (an event-triggered function: it answers no public route, and Netlify signs the
// event and checks the signature before invoking it). The body is `{ "payload": <submission> }`,
// with `form_name`, `data` (every field, plus `referrer`, `user_agent` and `ip`),
// `human_fields`, `id` and `site_url`.
//
// It sends the visitor an acknowledgement (contact, careers, affiliate) or the newsletter's
// confirm-your-subscription email, then the team's own copy of the submission to
// support@outbrick.site (emails/team.ts). The rules live in emails/submission.ts. Whatever happens it
// answers 200: the submission is already stored in Netlify, and a failed email is logged with
// the submission id rather than retried into a loop.

import { handleSubmission } from '../../emails/submission.ts';

export default async function handler(req: Request): Promise<Response> {
  let payload: unknown;
  try {
    const body = (await req.json()) as { payload?: unknown };
    payload = body?.payload;
  } catch {
    console.error('[email] submission-created: the event body was not JSON');
    return new Response('ok');
  }
  try {
    await handleSubmission(payload as Parameters<typeof handleSubmission>[0], process.env);
  } catch (error) {
    console.error('[email] submission-created failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response('ok');
}
