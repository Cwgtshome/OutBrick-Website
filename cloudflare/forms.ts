import { randomUUID } from 'node:crypto';
import { ipHash, rateAllow, sql } from '../netlify/community/db.ts';
import { isAllowedOrigin, json } from '../netlify/community/http.ts';
import { handleSubmission, type SubmissionPayload } from '../emails/submission.ts';
import { normalizeEmail } from '../emails/links.ts';

const names = new Set(['contact', 'careers', 'affiliate', 'newsletter']);
/** Persist first, acknowledge second; scheduled retries handle provider outages. */
export async function submitForm(req: Request): Promise<Response> {
  if (!isAllowedOrigin(req.headers.get('origin'))) return json({ error: 'origin' }, { status: 403 });
  if (!(req.headers.get('content-type') ?? '').startsWith('application/x-www-form-urlencoded')) return json({ error: 'content_type' }, { status: 415 });
  const reader = req.body?.getReader();
  if (!reader) return json({ error: 'empty' }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let length = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > 64 * 1024) { await reader.cancel(); return json({ error: 'too_large' }, { status: 413 }); }
    chunks.push(value);
  }
  const params = new URLSearchParams(Buffer.concat(chunks).toString('utf8'));
  const data: Record<string, string | string[]> = {};
  for (const key of new Set(params.keys())) {
    const values = params.getAll(key);
    data[key] = values.length === 1 ? values[0] : values;
  }
  const name = data['form-name'];
  if (typeof name !== 'string' || !names.has(name)) return json({ error: 'form' }, { status: 400 });
  // A honeypot success doesn't confirm that mail was sent or that an address subscribed.
  if (typeof data['bot-field'] === 'string' && data['bot-field'].trim()) return json({ received: true });
  if (typeof data.email !== 'string' || !normalizeEmail(data.email)) return json({ error: 'email' }, { status: 400 });
  if (data.consent !== 'yes') return json({ error: 'consent' }, { status: 400 });
  if (!(await rateAllow(`form:${ipHash(req)}`, 10, 3600))) return json({ error: 'rate_limit' }, { status: 429 });
  const payload: SubmissionPayload = { id: randomUUID(), form_name: name, site_url: 'https://www.outbrick.site', created_at: new Date().toISOString(), data: { ...data, referrer: req.headers.get('referer') ?? '' } };
  await sql`INSERT INTO web_form_submissions (id, form_name, payload, delivery_state) VALUES (${payload.id}, ${name}, ${JSON.stringify(payload)}::jsonb, 'pending')`;
  // Sending is synchronous on the first try, while the durable row protects failures.
  try { await deliverForm(payload); }
  catch { console.error(JSON.stringify({ event: 'outbrick-form-delivery-deferred' })); }
  return json({ received: true }, { status: 202 });
}
async function deliverForm(payload: SubmissionPayload): Promise<void> {
  const outcome = await handleSubmission(payload, process.env);
  const delivered = outcome.status === 'sent' && outcome.team !== 'failed';
  await sql`UPDATE web_form_submissions SET delivery_state = ${delivered ? 'sent' : 'pending'}, attempts = attempts + 1, retry_at = now() + interval '10 minutes', updated_at = now() WHERE id = ${payload.id}`;
}
export async function drainForms(): Promise<void> {
  if (!process.env.RESEND_API_KEY) return;
  const rows = await sql`UPDATE web_form_submissions SET delivery_state = 'processing', retry_at = now() + interval '10 minutes' WHERE id IN (SELECT id FROM web_form_submissions WHERE delivery_state IN ('pending','processing') AND retry_at <= now() AND attempts < 6 ORDER BY created_at LIMIT 10 FOR UPDATE SKIP LOCKED) RETURNING payload`;
  for (const row of rows) await deliverForm(row.payload as SubmissionPayload);
}
