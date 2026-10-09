// POST /.netlify/functions/resend-events — Resend's delivery webhook: engagement, bounces,
// complaints, suppressions and unsubscribes.
//
// Configure one webhook in Resend pointing here, and put its signing secret in
// RESEND_EVENTS_WEBHOOK_SECRET. Subscribe it to every email.* event and contact.updated. Every
// email.* event (and an unsubscribing contact.updated) is recorded in email_events for the
// admin's email report (netlify/lifecycle/analytics.ts), hashed, never with the address. Then:
//
//   - email.clicked: a link in a letter from news@ (a Broadcast or a one-to-one newsletter
//     email) was followed, which marks that reader engaged (an unsubscribe link does not).
//     "Still want these?" (netlify/lifecycle/newsletter.ts) needs this before it can ever ask
//     anyone; turn that on with NEWSLETTER_ENGAGEMENT_TRACKING=on only once this webhook
//     delivers. email.opened is recorded for the report and nothing more: Apple Mail Privacy
//     Protection fetches the images of every message, so an open is no evidence of reading
//     and would keep every Apple Mail reader "engaged" for ever.
//   - email.bounced (permanent bounces only), email.complained, email.suppressed: from any of
//     our senders. The address is marked suppressed in newsletter_subscribers and every unsent
//     outbox email to it is cancelled, newsletter or not. A complaint also unsubscribes the
//     Resend contact, so Broadcasts stop as well.
//   - contact.updated: a contact that became unsubscribed in Resend (its own unsubscribe page,
//     the dashboard) leaves the list here too and its queued letters are cancelled.
//
// Every request is verified (Svix signature), and each svix-id is recorded once handled, so a
// redelivery does nothing. Everything it does is idempotent anyway. A failure answers 500 so
// Resend retries.

import { verifySvix } from '../community/inbound-resend.ts';
import { databaseAvailable, sql } from '../community/db.ts';
import { normalizeEmail } from '../../emails/links.ts';
import { toText } from '../../emails/core.ts';
import { unsubscribeContact } from '../../emails/resend.ts';
import { markEngaged, onContactUnsubscribed, onSuppressed } from '../lifecycle/newsletter.ts';
import { recordWebhookEvent } from '../lifecycle/analytics.ts';

type Env = Record<string, string | undefined>;
type Deps = { unsubscribe?: (apiKey: string, email: string) => Promise<{ ok: boolean; error?: string }> };

const addressesOf = (value: unknown): string[] =>
  (Array.isArray(value) ? value : [value])
    .map((a) => normalizeEmail(toText(a).replace(/^.*<([^>]+)>.*$/, '$1')))
    .filter((a): a is string => Boolean(a));

/** Only a permanent bounce suppresses. Resend documents email.bounced as permanent; a payload that says otherwise is believed. */
function permanentBounce(data: Record<string, unknown>): boolean {
  const bounce = data.bounce && typeof data.bounce === 'object' ? (data.bounce as Record<string, unknown>) : null;
  const type = toText(bounce?.type).trim();
  return !type || /permanent|hard/i.test(type);
}

function eventTime(event: { created_at?: unknown; data?: Record<string, unknown> }): Date | null {
  const at = new Date(toText(event.created_at ?? event.data?.created_at));
  return Number.isFinite(at.getTime()) ? at : null;
}

export async function handleResendEvent(req: Request, env: Env = process.env, deps: Deps = {}): Promise<Response> {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  const secret = env.RESEND_EVENTS_WEBHOOK_SECRET ?? '';
  if (!secret) return new Response('Not configured', { status: 503 });
  const raw = await req.text();
  if (raw.length > 256_000) return new Response('Too large', { status: 413 });
  if (!verifySvix(secret, req.headers, raw)) return new Response('Bad signature', { status: 401 });
  let event: { type?: string; created_at?: unknown; data?: Record<string, unknown> };
  try {
    event = JSON.parse(raw);
  } catch {
    return new Response('ok');
  }
  const type = String(event.type ?? '');
  const data = event.data && typeof event.data === 'object' ? event.data : {};
  // Every email.* event is recorded for analytics; contact.updated only matters for unsubscribes.
  if ((!type.startsWith('email.') && type !== 'contact.updated') || !databaseAvailable(env)) return new Response('ok');

  const svixId = (req.headers.get('svix-id') ?? '').slice(0, 200);
  if (svixId) {
    const [seen] = await sql`SELECT 1 AS seen FROM resend_webhook_events WHERE svix_id = ${svixId}`;
    if (seen) return new Response('ok');
  }
  const at = eventTime(event);
  await recordWebhookEvent(event, svixId, env.RESEND_API_KEY);

  if (type === 'email.clicked') {
    const from = typeof data.from === 'string' ? data.from : '';
    const click = data.click && typeof data.click === 'object' ? (data.click as Record<string, unknown>) : {};
    const leaving = /unsubscribe/i.test(toText(click.link));
    if (/news@outbrick\.site/i.test(from) && !leaving) for (const email of addressesOf(data.to)) await markEngaged(email);
  } else if (type === 'contact.updated') {
    const email = normalizeEmail(data.email);
    if (email && data.unsubscribed === true) {
      const left = await onContactUnsubscribed(email, at);
      if (left) console.log('[resend-events] a reader unsubscribed in Resend');
    }
  } else if (type === 'email.complained' || type === 'email.suppressed' || (type === 'email.bounced' && permanentBounce(data))) {
    const reason = type === 'email.bounced' ? 'bounced' : type === 'email.complained' ? 'complained' : 'suppressed';
    const apiKey = env.RESEND_API_KEY ?? '';
    for (const email of addressesOf(data.to)) {
      await onSuppressed(email, reason, at);
      // A complaint is the strongest "stop": Broadcasts must not reach the address either.
      if (reason === 'complained' && apiKey) {
        const result = await (deps.unsubscribe ?? unsubscribeContact)(apiKey, email);
        if (!result.ok) console.error(`[resend-events] could not unsubscribe a complainant in Resend: ${result.error}`);
      }
    }
    console.log(`[resend-events] ${reason}: suppressed and cancelled queued email`);
  }

  if (svixId) await sql`INSERT INTO resend_webhook_events (svix_id, type) VALUES (${svixId}, ${type}) ON CONFLICT (svix_id) DO NOTHING`;
  return new Response('ok');
}

export default async function handler(req: Request): Promise<Response> {
  try {
    return await handleResendEvent(req);
  } catch (error) {
    console.error(`[resend-events] failed: ${error instanceof Error ? error.message : String(error)}`);
    return new Response('Retry later', { status: 500 });
  }
}
