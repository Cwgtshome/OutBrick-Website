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
  try {
    const response = await fetch(`${API}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(9000),
    });
    const text = await response.text();
    let data: Record<string, unknown> | null = null;
    try {
      data = text ? (JSON.parse(text) as Record<string, unknown>) : null;
    } catch {
      data = null;
    }
    if (!response.ok) {
      const message = typeof data?.message === 'string' ? data.message : text.slice(0, 200);
      return { ok: false, status: response.status, data, error: `${method} ${shown} -> ${response.status}: ${message}` };
    }
    return { ok: true, status: response.status, data };
  } catch (error) {
    return { ok: false, status: 0, data: null, error: `${method} ${shown} failed: ${error instanceof Error ? error.message : String(error)}` };
  }
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
 */
export async function subscribeContact(apiKey: string, email: string, segmentIds: string[]): Promise<ResendResult> {
  const segments = segmentIds.filter(Boolean);
  const created = await resend(apiKey, '/contacts', {
    body: { email, unsubscribed: false, segments: segments.map((id) => ({ id })) },
  });
  if (created.ok) return created;
  // Already a contact (Resend answers 409 or 422 for a duplicate): update it instead.
  const contact = `/contacts/${encodeURIComponent(email)}`;
  const updated = await resend(apiKey, contact, { method: 'PATCH', body: { unsubscribed: false } });
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

/** The newsletter segment, plus an optional per-language segment (RESEND_SEGMENT_ID_FR …). */
export function newsletterSegments(env: Record<string, string | undefined>, locale: string): string[] {
  const main = env.RESEND_SEGMENT_ID ?? env.RESEND_AUDIENCE_ID ?? '';
  const perLanguage = env[`RESEND_SEGMENT_ID_${locale.toUpperCase()}`] ?? '';
  return [...new Set([main, perLanguage].filter(Boolean))];
}
