// A small client for Resend's REST API (https://resend.com/docs/api-reference), with fetch
// and no SDK. The key is passed in by the caller, read from process.env, and is never logged:
// errors report the endpoint, the status and Resend's own message, nothing else.
//
// Resend groups contacts in segments (it used to call them audiences). The newsletter segment
// is "OutBrick News"; its id is the RESEND_SEGMENT_ID environment variable.

const API = 'https://api.resend.com';

export const SENDERS = {
  support: { from: 'OutBrick Support <support@outbrick.site>', replyTo: 'support@outbrick.site' },
  news: { from: 'OutBrick News <news@outbrick.site>', replyTo: 'news@outbrick.site' },
  // OutBrick Community: sign-in links, welcome, notifications. Replies reach support@.
  community: { from: 'OutBrick Community <support@outbrick.site>', replyTo: 'support@outbrick.site' },
  // Community release announcements go out as news, from news@.
  communityNews: { from: 'OutBrick News <news@outbrick.site>', replyTo: 'news@outbrick.site' },
  // The team's copy of a submission, from and to the inbox that handles that form: support@ for
  // contact, careers and affiliate, news@ for newsletter sign-ups. Its Reply-To is the visitor
  // whenever they gave an address.
  supportTeam: { from: 'OutBrick Forms <support@outbrick.site>', replyTo: 'support@outbrick.site' },
  newsTeam: { from: 'OutBrick News sign-ups <news@outbrick.site>', replyTo: 'news@outbrick.site' },
} as const;

export type ResendResult = { ok: boolean; status: number; data: Record<string, unknown> | null; error?: string };

export async function resend(
  apiKey: string,
  path: string,
  { method = 'POST', body, idempotencyKey }: { method?: string; body?: unknown; idempotencyKey?: string } = {},
): Promise<ResendResult> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'User-Agent': 'outbrick-site/1.0',
  };
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey.slice(0, 256);
  // Contact paths carry an email address; logs name the endpoint without it.
  const shown = path.replace(/\/contacts\/[^/]+/, '/contacts/<contact>');
  // A 429 means Resend refused the request, so even resource creation can be retried.
  // Keep the exact body and idempotency key across attempts. Bound the whole call to 12 s
  // so the two submission emails fit within the event function's execution window.
  const serialized = body === undefined ? undefined : JSON.stringify(body);
  const deadline = Date.now() + 12000;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await fetch(`${API}${path}`, {
        method,
        headers,
        body: serialized,
        signal: AbortSignal.timeout(Math.max(1, Math.min(9000, deadline - Date.now()))),
      });
      const text = await response.text();
      let data: Record<string, unknown> | null = null;
      try {
        data = text ? (JSON.parse(text) as Record<string, unknown>) : null;
      } catch {
        data = null;
      }
      if (response.ok) return { ok: true, status: response.status, data };
      const message = typeof data?.message === 'string' ? data.message : text.slice(0, 200);
      const failure = { ok: false, status: response.status, data, error: `${method} ${shown} -> ${response.status}: ${message}` };
      if (response.status !== 429 || attempt === 3) return failure;
      const retryAfter = response.headers.get('retry-after');
      const seconds = retryAfter === null || !retryAfter.trim() ? NaN : Number(retryAfter);
      const requested = Number.isFinite(seconds) ? Math.max(0, seconds * 1000) : retryAfter ? Math.max(0, Date.parse(retryAfter) - Date.now()) : 0;
      const delay = Math.max(1000 * 2 ** attempt, Number.isFinite(requested) ? requested : 0) + Math.floor(Math.random() * 250);
      // Never retry sooner than Retry-After; leave room for the next request or return the
      // failure for an operator to recover from the stored Netlify submission.
      if (Date.now() + delay + 100 >= deadline) return failure;
      await new Promise<void>((resolve) => setTimeout(resolve, delay));
    } catch (error) {
      // Do not repeat ambiguous network failures or 5xx writes to resources that do not
      // support idempotency. They retain the existing failure/reporting behaviour.
      return { ok: false, status: 0, data: null, error: `${method} ${shown} failed: ${error instanceof Error ? error.message : String(error)}` };
    }
  }
  return { ok: false, status: 0, data: null, error: `${method} ${shown} exhausted retries` };
}

export type OutgoingEmail = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
  tags?: { name: string; value: string }[];
};

export function sendEmail(apiKey: string, email: OutgoingEmail, idempotencyKey?: string): Promise<ResendResult> {
  return resend(apiKey, '/emails', {
    idempotencyKey,
    body: {
      from: email.from,
      to: [email.to],
      reply_to: email.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
      headers: email.headers,
      tags: email.tags,
    },
  });
}

/**
 * Put a confirmed address in the newsletter segment, subscribed. A new address is created
 * straight into the segment; an address Resend already knows (someone who left and came back)
 * is switched back to subscribed and added to the segment.
 *
 * `properties` are the contact's custom properties: `language` (8 October 2026) is the language
 * the subscriber chose, which `send-newsletter.mjs --by-language` sends each issue in. The plan's
 * three segments cannot hold one segment per language, so the language rides on the contact.
 */
export async function subscribeContact(apiKey: string, email: string, segmentIds: string[], properties: Record<string, string> = {}): Promise<ResendResult> {
  const segments = segmentIds.filter(Boolean);
  const props = Object.keys(properties).length ? { properties } : {};
  const created = await resend(apiKey, '/contacts', {
    body: { email, unsubscribed: false, segments: segments.map((id) => ({ id })), ...props },
  });
  if (created.ok || (created.status !== 409 && created.status !== 422)) return created;
  // Already a contact (Resend answers 409 or 422 for a duplicate): update it instead.
  const contact = `/contacts/${encodeURIComponent(email)}`;
  const updated = await resend(apiKey, contact, { method: 'PATCH', body: { unsubscribed: false, ...props } });
  if (!updated.ok) return { ...updated, error: `${created.error}; then ${updated.error}` };
  for (const id of segments) {
    const added = await resend(apiKey, `${contact}/segments/${encodeURIComponent(id)}`, { method: 'POST' });
    // 409/422: already in the segment, which is the state we want.
    if (!added.ok && added.status !== 409 && added.status !== 422) return added;
  }
  return updated;
}

/** Unsubscribe an address from every broadcast. A contact that does not exist is already "unsubscribed". */
export async function unsubscribeContact(apiKey: string, email: string): Promise<ResendResult> {
  const result = await resend(apiKey, `/contacts/${encodeURIComponent(email)}`, { method: 'PATCH', body: { unsubscribed: true } });
  if (!result.ok && result.status === 404) return { ok: true, status: 404, data: null };
  return result;
}

/** The environment-variable suffix for a language: `FR`, `JA`, and `PT_BR` for Brazilian Portuguese. */
export function localeEnvSuffix(locale: string): string {
  return locale === 'pt-BR' ? 'PT_BR' : locale.toUpperCase();
}

/** The newsletter segment, plus an optional per-language segment (RESEND_SEGMENT_ID_FR …). */
export function newsletterSegments(env: Record<string, string | undefined>, locale: string): string[] {
  const main = env.RESEND_SEGMENT_ID ?? env.RESEND_AUDIENCE_ID ?? '';
  const perLanguage = env[`RESEND_SEGMENT_ID_${localeEnvSuffix(locale)}`] ?? '';
  return [...new Set([main, perLanguage].filter(Boolean))];
}

/**
 * The Resend topics an issue can be filed under (8 October 2026): `releases` ("New versions")
 * and `tips` ("Tips and events"). Both default to opt_in, so a subscriber hears both until they
 * turn one off on Resend's preference page.
 */
export const NEWSLETTER_TOPICS = { releases: 'RESEND_TOPIC_RELEASES', tips: 'RESEND_TOPIC_TIPS' } as const;
export type NewsletterTopic = keyof typeof NEWSLETTER_TOPICS;

export function topicId(env: Record<string, string | undefined>, topic: unknown): string | undefined {
  if (topic !== 'releases' && topic !== 'tips') return undefined;
  return env[NEWSLETTER_TOPICS[topic]] || undefined;
}
