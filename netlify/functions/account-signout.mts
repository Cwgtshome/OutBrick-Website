// GET/POST /.netlify/functions/account-signout?… — "Sign out of every device" from the new
// sign-in email. GET shows a button; the POST ends every session. See netlify/lifecycle/security.ts.

import { handleSignOutAll } from '../lifecycle/security.ts';

export default async function handler(req: Request): Promise<Response> {
  return handleSignOutAll(req, process.env);
}
