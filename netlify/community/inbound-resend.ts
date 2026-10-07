// Everything that knows the shape of Resend's inbound email ("receiving") webhooks, in one place,
// so a change on Resend's side is a change here only.
//
// Resend signs webhooks the Svix way: headers svix-id, svix-timestamp and svix-signature (a
// space-separated list of "v1,<base64 HMAC-SHA256>"), over "<id>.<timestamp>.<raw body>", keyed
// with the base64 part of the endpoint's signing secret after "whsec_".
//
// The event for a received message is { type: 'email.received', created_at, data: { email_id,
// from, to[], cc[], subject, message_id, … } }. It may carry only that metadata; the body is then
// fetched with GET https://api.resend.com/emails/receiving/<email_id>, which answers the message
// with `text`, `html` and `headers`. Both places are read, so either shape works.

import { createHmac, timingSafeEqual } from 'node:crypto';

export const SIGNATURE_TOLERANCE_SECONDS = 5 * 60;

/** True when the Svix headers sign `body` with `secret` and the timestamp is within tolerance. */
export function verifySvix(secret: string, headers: Headers, body: string, nowSeconds = Math.floor(Date.now() / 1000)): boolean {
  const id = headers.get('svix-id') ?? '';
  const timestamp = headers.get('svix-timestamp') ?? '';
  const signatures = headers.get('svix-signature') ?? '';
  if (!id || !/^\d{1,12}$/.test(timestamp) || !signatures || !secret) return false;
  if (Math.abs(nowSeconds - Number(timestamp)) > SIGNATURE_TOLERANCE_SECONDS) return false;
  const key = Buffer.from(secret.replace(/^whsec_/, ''), 'base64');
  if (!key.length) return false;
  const expected = createHmac('sha256', key).update(`${id}.${timestamp}.${body}`).digest();
  for (const part of signatures.split(' ')) {
    const [version, sig] = part.split(',', 2);
    if (version !== 'v1' || !sig) continue;
    const given = Buffer.from(sig, 'base64');
    if (given.length === expected.length && timingSafeEqual(given, expected)) return true;
  }
  return false;
}

export type InboundMessage = {
  emailId: string;
  messageId: string;
  /** The sender's bare address, lower-cased. */
  from: string;
  /** Every recipient address (to and cc), bare and lower-cased. */
  recipients: string[];
  subject: string;
  text: string | null;
  html: string | null;
  headers: Record<string, string>;
};

const str = (v: unknown) => (typeof v === 'string' ? v : '');

/** "Ada <ada@example.com>" or "ada@example.com" → "ada@example.com". */
export function bareAddress(value: unknown): string {
  const s = str(value).trim();
  const angle = /<([^<>\s]+@[^<>\s]+)>/.exec(s);
  return (angle ? angle[1] : s).trim().toLowerCase();
}

function addressList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((v) => bareAddress(typeof v === 'object' && v ? (v as Record<string, unknown>).email ?? (v as Record<string, unknown>).address : v)).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map(bareAddress).filter(Boolean);
  return [];
}

function headerMap(value: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (Array.isArray(value)) {
    for (const h of value) if (h && typeof h === 'object') out[str((h as Record<string, unknown>).name).toLowerCase()] = str((h as Record<string, unknown>).value);
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) out[k.toLowerCase()] = str(v);
  }
  return out;
}

/** The message in an event, or null when the event is not a received email. */
export function parseInboundEvent(event: unknown): InboundMessage | null {
  const e = (event && typeof event === 'object' ? event : {}) as Record<string, unknown>;
  if (e.type !== 'email.received') return null;
  const d = (e.data && typeof e.data === 'object' ? e.data : {}) as Record<string, unknown>;
  const emailId = str(d.email_id) || str(d.id);
  if (!emailId) return null;
  return mergeMessage({ emailId, messageId: str(d.message_id), from: '', recipients: [], subject: '', text: null, html: null, headers: {} }, d);
}

/** Fill a message from an event's data or from the API's received email (whichever has more). */
export function mergeMessage(m: InboundMessage, d: Record<string, unknown>): InboundMessage {
  const recipients = [...new Set([...m.recipients, ...addressList(d.to), ...addressList(d.cc)])];
  return {
    emailId: m.emailId,
    messageId: m.messageId || str(d.message_id),
    from: m.from || bareAddress(d.from),
    recipients,
    subject: m.subject || str(d.subject),
    text: m.text ?? (typeof d.text === 'string' ? d.text : null),
    html: m.html ?? (typeof d.html === 'string' ? d.html : null),
    headers: { ...headerMap(d.headers), ...m.headers },
  };
}

export type ResendFetch = (url: string, init: RequestInit) => Promise<Response>;

/** The message body from Resend's API, when the event did not carry it. */
export async function fetchReceived(apiKey: string, m: InboundMessage, fetcher: ResendFetch = fetch): Promise<InboundMessage> {
  const res = await fetcher(`https://api.resend.com/emails/receiving/${encodeURIComponent(m.emailId)}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${apiKey}`, 'User-Agent': 'outbrick-site/1.0' },
    signal: AbortSignal.timeout(9000),
  });
  if (!res.ok) throw new Error(`GET /emails/receiving -> ${res.status}`);
  return mergeMessage(m, (await res.json()) as Record<string, unknown>);
}

/** A crude HTML → text for messages with no text part: quotes dropped, breaks kept, tags gone. */
export function htmlToText(html: string): string {
  return html
    .replace(/<(script|style|head)[\s\S]*?<\/\1>/gi, '')
    .replace(/<blockquote[\s\S]*?<\/blockquote>/gi, '')
    .replace(/<div[^>]*class="[^"]*(gmail_quote|moz-cite-prefix|yahoo_quoted)[^"]*"[\s\S]*$/i, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}
