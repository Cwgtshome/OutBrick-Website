// GET/POST /.netlify/functions/support-feedback?p=…&x=…&t=… — the one-tap answers in the
// "Did we solve it?" email (netlify/lifecycle/cases.ts handleFeedback). GET shows the choice and
// an optional comment box, so a link scanner records nothing; the POST records it.

import { handleFeedback } from '../lifecycle/cases.ts';

export default async function handler(req: Request): Promise<Response> {
  return handleFeedback(req, process.env);
}
