import { randomUUID } from 'node:crypto';
import { ipHash, rateAllow, sha256, sql } from '../netlify/community/db.ts';
import { isAllowedOrigin, json } from '../netlify/community/http.ts';
import { handleSubmission, type SubmissionPayload } from '../emails/submission.ts';
import { normalizeEmail } from '../emails/links.ts';
import { recordSiteEvent } from '../netlify/lifecycle/analytics.ts';

const names = new Set(['contact', 'careers', 'affiliate', 'newsletter']);
/** Visitor emails (acknowledgements and confirm-your-subscription) one address may receive a day. */
export const PER_ADDRESS_DAILY = 3;
/** The path of the page a form was on (no host, no query), for analytics. */
function pagePath(referrer: string | null): string | null {
  try { return referrer ? new URL(referrer).pathname.slice(0, 300) : null; } catch { return null; }
}
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
  // Per recipient as well as per sender: many IPs must not be able to flood one inbox. Past the
  // limit the submission is still stored and the team still told; only the visitor email is
  // withheld, and the answer is the same, so it reveals nothing about the address.
  const acknowledge = await rateAllow(`form:to:${sha256(normalizeEmail(data.email) ?? '').slice(0, 32)}`, PER_ADDRESS_DAILY, 86400);
  const payload: SubmissionPayload = { id: randomUUID(), form_name: name, site_url: 'https://www.outbrick.site', created_at: new Date().toISOString(), data: { ...data, referrer: req.headers.get('referer') ?? '' }, ...(acknowledge ? {} : { acknowledge: false }) };
  await sql`INSERT INTO web_form_submissions (id, form_name, payload, delivery_state) VALUES (${payload.id}, ${name}, ${JSON.stringify(payload)}::jsonb, 'pending')`;
  if (name === 'newsletter') await recordSiteEvent('signup', { email: normalizeEmail(data.email), locale: typeof data.language === 'string' ? data.language : null, source: pagePath(req.headers.get('referer')) });
  // Sending is synchronous on the first try, while the durable row protects failures.
  // A contact message answers with its case reference (never its private link), so the page can show it at once.
  let ref: string | undefined;
  try { ref = (await deliverForm(payload)).record?.ref; }
  catch { console.error(JSON.stringify({ event: 'outbrick-form-delivery-deferred' })); }
  return json(ref ? { received: true, ref } : { received: true }, { status: 202 });
}
async function deliverForm(payload: SubmissionPayload) {
  const outcome = await handleSubmission(payload, process.env);
  // A deliberate skip (the per-address limit) with the team told is done, not a retry.
  const delivered = outcome.status === 'sent' ? outcome.team !== 'failed' : outcome.status === 'skipped' && outcome.reason === 'address rate limit' && outcome.team === 'sent';
  await sql`UPDATE web_form_submissions SET delivery_state = ${delivered ? 'sent' : 'pending'}, attempts = attempts + 1, retry_at = now() + interval '10 minutes', updated_at = now() WHERE id = ${payload.id}`;
  return outcome;
}
export async function drainForms(): Promise<void> {
  if (!process.env.RESEND_API_KEY) return;
  const rows = await sql`UPDATE web_form_submissions SET delivery_state = 'processing', retry_at = now() + interval '10 minutes' WHERE id IN (SELECT id FROM web_form_submissions WHERE delivery_state IN ('pending','processing') AND retry_at <= now() AND attempts < 6 ORDER BY created_at LIMIT 10 FOR UPDATE SKIP LOCKED) RETURNING payload`;
  for (const row of rows) {
    // One submission that throws must not hold back the rest; its claim lapses and it is retried.
    try { await deliverForm(row.payload as SubmissionPayload); }
    catch { console.error(JSON.stringify({ event: 'outbrick-form-delivery-deferred' })); }
  }
}
