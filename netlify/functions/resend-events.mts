// POST /.netlify/functions/resend-events — Resend's delivery webhook for OutBrick News engagement.
//
// Configure one webhook in Resend for `email.opened` and `email.clicked`, pointing here, and put
// its signing secret in RESEND_EVENTS_WEBHOOK_SECRET. Every open or click of a letter from news@
// (a Broadcast or a one-to-one newsletter email) marks that reader engaged, which is what
// "still want these?" (netlify/lifecycle/newsletter.ts) needs before it can ever ask anyone; turn
// that on with NEWSLETTER_ENGAGEMENT_TRACKING=on only once this webhook delivers.
//
// Apple Mail Privacy Protection fetches images for every message, so opens over-count. That
// only ever keeps people on the list; it never removes anyone.

import { verifySvix } from '../community/inbound-resend.ts';
import { databaseAvailable } from '../community/db.ts';
import { normalizeEmail } from '../../emails/links.ts';
import { markEngaged } from '../lifecycle/newsletter.ts';

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  const secret = process.env.RESEND_EVENTS_WEBHOOK_SECRET ?? '';
  if (!secret) return new Response('Not configured', { status: 503 });
  const raw = await req.text();
  if (raw.length > 256_000) return new Response('Too large', { status: 413 });
  if (!verifySvix(secret, req.headers, raw)) return new Response('Bad signature', { status: 401 });
  let event: { type?: string; data?: Record<string, unknown> };
  try {
    event = JSON.parse(raw);
  } catch {
    return new Response('ok');
  }
  if (event.type !== 'email.opened' && event.type !== 'email.clicked') return new Response('ok');
  const from = typeof event.data?.from === 'string' ? event.data.from : '';
  if (!/news@outbrick\.site/i.test(from)) return new Response('ok');
  const to = Array.isArray(event.data?.to) ? event.data.to : [event.data?.to];
  if (!databaseAvailable()) return new Response('ok');
  for (const address of to) {
    const email = normalizeEmail(String(address ?? '').replace(/^.*<([^>]+)>.*$/, '$1'));
    if (email) await markEngaged(email);
  }
  return new Response('ok');
}
