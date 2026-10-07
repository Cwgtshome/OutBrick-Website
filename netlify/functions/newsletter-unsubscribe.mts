// /.netlify/functions/newsletter-unsubscribe?e=<address>&l=<language>&t=<signature>
//
// Every newsletter email carries this link and the matching List-Unsubscribe and
// List-Unsubscribe-Post headers (RFC 8058).
//
//   POST with "List-Unsubscribe=One-Click" (the mail client's own Unsubscribe button):
//        sets `unsubscribed: true` on the Resend contact and answers 200.
//   GET  (the link in the footer): a one-button confirmation page, because link scanners
//        fetch every GET in a message and must not unsubscribe anybody.
//   POST from that page: unsubscribes and redirects to /newsletter/unsubscribed.
//
// The signature never expires, so an old letter's link still works.

import { handleUnsubscribe } from '../../emails/newsletter.ts';

export default async function handler(req: Request): Promise<Response> {
  return handleUnsubscribe(req, process.env);
}
