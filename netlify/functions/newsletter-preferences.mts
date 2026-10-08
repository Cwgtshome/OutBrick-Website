// GET/POST /.netlify/functions/newsletter-preferences — the OutBrick News preferences page
// (topics, language, unsubscribe) behind a signed link, the page that emails that link, and the
// "keep me on the list" answer. See netlify/lifecycle/newsletter.ts handlePreferences.

import { handlePreferences } from '../lifecycle/newsletter.ts';

export default async function handler(req: Request): Promise<Response> {
  return handlePreferences(req, process.env);
}
