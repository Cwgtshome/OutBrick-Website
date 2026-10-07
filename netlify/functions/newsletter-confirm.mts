// GET /.netlify/functions/newsletter-confirm?e=<address>&l=<language>&x=<expiry>&t=<signature>
//
// The link in the "Confirm your subscription" email. It checks the HMAC signature and the
// 7-day expiry (emails/links.ts). GET displays a confirmation page; its deliberate POST adds
// the address to the OutBrick News segment in Resend,
// sends the welcome email, and redirects to /newsletter/confirmed in the reader's language.
// A bad or expired link lands on /newsletter/link-expired, which carries a fresh sign-up form.
//
// Mail scanners may GET or HEAD without subscribing anyone. Repeated POSTs carry an
// idempotency key for the welcome email.

import { handleConfirm } from '../../emails/newsletter.ts';

export default async function handler(req: Request): Promise<Response> {
  return handleConfirm(req, process.env);
}
