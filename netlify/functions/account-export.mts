// GET /.netlify/functions/account-export?… — the JSON export behind the 24-hour signed link in
// the "Your data is ready" email. See netlify/lifecycle/security.ts and auth/account.ts.

import { buildExport } from '../community/auth/account.ts';
import { handleExportDownload } from '../lifecycle/security.ts';

export default async function handler(req: Request): Promise<Response> {
  return handleExportDownload(req, process.env, buildExport);
}
