// Support cases: one per contact-form message, so the team can answer it, mark it fixed in a
// version, and ask "did we solve it?" — and the player always sees the same reference.
//
//   created   by the contact form (emails/submission.ts → createCase), reference OB-XXXXXX in
//             the acknowledgement and the team copy;
//   replied   when staff answer from /community/admin (replyToCase): the player gets
//             supportReply, and a feedback request is queued for three days later (a second reply
//             pushes it back; reopening or closing cancels it);
//   fix_pending  when staff mark it "fixed in 5.2" (markFixed); the release bot calls
//             notifyFixedCases(version) when that version reaches the App Store, which emails
//             supportFixed, resolves the case and queues the feedback request;
//   resolved / closed  by staff; closing cancels any feedback request.
//
// Feedback answers arrive through netlify/functions/support-feedback.mts (handleFeedback). A
// "not yet" reopens the case and emails the team.

import { randomInt } from 'node:crypto';
import { sql, transaction } from '../community/db.ts';
import { iso, isoOrNull, num } from '../community/forum.ts';
import { badRequest, json, notFound, readJson, str, SITE, type Route } from '../community/http.ts';
import { requireRole } from '../community/session.ts';
import { isEmailLocale, type EmailLocale } from '../../emails/i18n.ts';
import { toText } from '../../emails/core.ts';
import { normalizeEmail, signedUrl, verifySigned } from '../../emails/links.ts';
import { feedbackPage, simplePage, supportFeedback, supportFixed, supportReply, teamCaseUpdate } from '../../emails/lifecycle.ts';
import { lifecycleCopy } from '../../emails/lifecycle-i18n.ts';
import { SENDERS, sendEmail, type OutgoingEmail } from '../../emails/resend.ts';
import { cancelKey, enqueue, reschedule, signalOutbox, type Row as OutboxRow, type Prepared } from './outbox.ts';
import { caseTrackUrl } from './player-cases.ts';

export const FEEDBACK_DELAY_DAYS = 3;
const FEEDBACK_LINK_DAYS = 30;
const TEAM_INBOX = 'support@outbrick.site';
const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const statuses = ['open', 'replied', 'fix_pending', 'resolved', 'closed'] as const;
type Status = (typeof statuses)[number];

export function newRef(): string {
  let s = 'OB-';
  for (let i = 0; i < 6; i++) s += alphabet[randomInt(alphabet.length)];
  return s;
}

/** 5.10 > 5.9; "5.1" ≥ "5.1.0". */
export function versionAtLeast(have: string, want: string): boolean {
  const a = have.split('.').map(Number);
  const b = want.split('.').map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const x = a[i] ?? 0;
    const y = b[i] ?? 0;
    if (x !== y) return x > y;
  }
  return true;
}

export const caseAdminUrl = (id: number) => `${SITE}/community/admin?case=${id}`;
const feedbackKey = (id: number) => `feedback-${id}`;

export type NewCase = {
  submissionId: string;
  email: string;
  name: string;
  locale: EmailLocale;
  topic: string;
  message: string;
  device: string;
  appVersion: string;
  iosVersion: string;
  /** The contact form's topic-specific answers (level, purchase, assistive technology, what was tried). Kept on the "created" event. */
  details?: Record<string, string>;
};

/** The contact form's optional, topic-specific fields that a case keeps, with their length limits. */
export const caseDetailFields = { level: 12, 'purchase-item': 120, 'purchase-date': 40, assistive: 60, tried: 60, guide: 60, source: 20 } as const;
export type CaseDetailField = keyof typeof caseDetailFields;

/** Only the known detail fields, trimmed and capped; empty values are dropped. */
export function cleanCaseDetails(data: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, max] of Object.entries(caseDetailFields)) {
    const raw = data[key];
    const text = typeof raw === 'string' ? raw : typeof raw === 'number' ? String(raw) : '';
    const value = Array.from(text, (ch) => (ch.charCodeAt(0) < 32 || ch.charCodeAt(0) === 127 ? ' ' : ch)).join('').trim().slice(0, max);
    if (value) out[key] = value;
  }
  return out;
}

/** Store a contact message as a case and return its reference (the same one if Netlify redelivers the submission). */
export async function createCase(input: NewCase): Promise<{ id: number; ref: string }> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const ref = newRef();
    const rows = await sql`
      INSERT INTO support_cases (ref, submission_id, email, name, locale, topic, message, device, app_version, ios_version)
      VALUES (${ref}, ${input.submissionId}, ${input.email}, ${input.name.slice(0, 120)}, ${input.locale}, ${input.topic.slice(0, 40)},
              ${input.message.slice(0, 5000)}, ${input.device.slice(0, 80)}, ${input.appVersion.slice(0, 20)}, ${input.iosVersion.slice(0, 20)})
      ON CONFLICT DO NOTHING
      RETURNING id::int, ref`;
    if (rows[0]) {
      const details = input.details && Object.keys(input.details).length ? { details: input.details } : {};
      await sql`INSERT INTO support_case_events (case_id, kind, data) VALUES (${num(rows[0].id)}, 'created', ${JSON.stringify(details)}::jsonb)`;
      return { id: num(rows[0].id), ref: String(rows[0].ref) };
    }
    const [existing] = await sql`SELECT id::int, ref FROM support_cases WHERE submission_id = ${input.submissionId}`;
    if (existing) return { id: num(existing.id), ref: String(existing.ref) };
    // Otherwise the reference collided; try another.
  }
  throw new Error('could not allocate a case reference');
}

type CaseRow = Record<string, unknown>;

function caseView(r: CaseRow) {
  return {
    id: num(r.id),
    ref: String(r.ref),
    email: String(r.email),
    name: String(r.name),
    locale: String(r.locale),
    topic: String(r.topic),
    message: String(r.message),
    device: String(r.device),
    appVersion: String(r.app_version),
    iosVersion: String(r.ios_version),
    status: String(r.status) as Status,
    fixedIn: (r.fixed_in as string | null) ?? null,
    fixedNotifiedAt: isoOrNull(r.fixed_notified_at),
    feedback: r.feedback_at ? { rating: r.feedback_rating == null ? null : num(r.feedback_rating), solved: (r.feedback_solved as boolean | null) ?? null, comment: (r.feedback_comment as string | null) ?? '', at: iso(r.feedback_at) } : null,
    reopened: num(r.reopened),
    createdAt: iso(r.created_at),
    updatedAt: iso(r.updated_at),
  };
}
export type CaseView = ReturnType<typeof caseView>;

const caseColumns = `id::int, ref, email, name, locale, topic, message, device, app_version, ios_version, status, fixed_in, fixed_notified_at,
  feedback_rating, feedback_solved, feedback_comment, feedback_at, reopened, created_at, updated_at`;

async function loadCase(id: number): Promise<CaseRow> {
  const [row] = await sql`SELECT id::int, ref, email, name, locale, topic, message, device, app_version, ios_version, status, fixed_in, fixed_notified_at,
    feedback_rating, feedback_solved, feedback_comment, feedback_at, reopened, created_at, updated_at FROM support_cases WHERE id = ${id}`;
  if (!row) throw notFound('No such case.');
  return row;
}

const caseId = (params: Record<string, string>) => {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) throw notFound('No such case.');
  return id;
};

const localeOf = (v: unknown): EmailLocale => (isEmailLocale(v) ? v : 'en');

// ---------------------------------------------------------------------------------------
// Staff API (team and admin): /api/community/admin/cases…

export const listCases: Route['run'] = async (req) => {
  await requireRole(req, 'team');
  const url = new URL(req.url);
  const status = url.searchParams.get('status') ?? 'active';
  const q = (url.searchParams.get('q') ?? '').trim().slice(0, 80);
  const page = Math.max(1, Math.min(1000, Number(url.searchParams.get('page')) || 1));
  const active = status === 'active';
  const like = `%${q.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
  const rows = await sql`
    SELECT id::int, ref, email, name, locale, topic, message, device, app_version, ios_version, status, fixed_in, fixed_notified_at,
           feedback_rating, feedback_solved, feedback_comment, feedback_at, reopened, created_at, updated_at
      FROM support_cases
     WHERE (${active} AND status IN ('open','replied','fix_pending') OR NOT ${active} AND (${status} = 'all' OR status = ${status}))
       AND (${q} = '' OR ref ILIKE ${like} OR email ILIKE ${like} OR name ILIKE ${like} OR message ILIKE ${like})
     ORDER BY (status = 'open') DESC, updated_at DESC
     LIMIT 50 OFFSET ${(page - 1) * 50}`;
  const [counts] = await sql`SELECT count(*) FILTER (WHERE status = 'open')::int AS open, count(*) FILTER (WHERE status = 'replied')::int AS replied,
    count(*) FILTER (WHERE status = 'fix_pending')::int AS fix_pending, round(avg(feedback_rating)::numeric, 2)::float AS rating,
    count(*) FILTER (WHERE feedback_at IS NOT NULL)::int AS answered FROM support_cases`;
  return json({ cases: rows.map(caseView), counts: { open: num(counts?.open), replied: num(counts?.replied), fixPending: num(counts?.fix_pending), rating: counts?.rating ?? null, answered: num(counts?.answered) }, page });
};

export const getCase: Route['run'] = async (req, params) => {
  await requireRole(req, 'team');
  const id = caseId(params);
  const row = await loadCase(id);
  const events = await sql`SELECT e.id::int, e.kind, e.body, e.data, e.created_at, m.display_name AS actor
                             FROM support_case_events e LEFT JOIN members m ON m.id = e.actor_id
                            WHERE e.case_id = ${id} ORDER BY e.id`;
  return json({
    case: caseView(row),
    events: events.map((e) => ({ id: num(e.id), kind: String(e.kind), body: String(e.body), data: e.data ?? {}, actor: (e.actor as string | null) ?? null, at: iso(e.created_at) })),
  });
};

type Send = (apiKey: string, email: OutgoingEmail, key?: string) => ReturnType<typeof sendEmail>;
let sender: Send = sendEmail;
export function setCaseSenderForTests(send: Send | null): void {
  sender = send ?? sendEmail;
}

async function queueFeedback(id: number, row: CaseRow, from: Date): Promise<void> {
  const after = new Date(from.getTime() + FEEDBACK_DELAY_DAYS * 86400_000);
  // A case asks once: if a request was already sent or answered, nothing new is queued.
  if (row.feedback_at) return;
  const [sent] = await sql`SELECT 1 FROM email_outbox WHERE dedupe_key = ${feedbackKey(id)} AND sent_at IS NOT NULL`;
  if (sent) return;
  await reschedule(feedbackKey(id), after);
  const at = await enqueue([{ kind: 'support-feedback', to: String(row.email), locale: String(row.locale), payload: { caseId: id }, sendAfter: after, dedupeKey: feedbackKey(id) }]);
  await signalOutbox(at ?? after.getTime());
}

/** POST /admin/cases/:id/reply { message } — email the player and log the reply. */
export const replyToCase: Route['run'] = async (req, params) => {
  const viewer = await requireRole(req, 'team');
  const id = caseId(params);
  const body = await readJson(req, 32 * 1024);
  const message = str(body, 'message', { min: 2, max: 10000, label: 'Message' });
  const staffName = str(body, 'signature', { max: 60, optional: true }) || viewer.display_name.split(' ')[0];
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw badRequest('unavailable', 'Email is not configured (RESEND_API_KEY).');
  const row = await loadCase(id);
  const locale = localeOf(row.locale);
  const rendered = supportReply({ locale, name: String(row.name), ref: String(row.ref), staff: staffName, message, original: String(row.message), trackUrl: caseTrackUrl(apiKey, id, locale) });
  const [{ n }] = (await sql`SELECT count(*)::int AS n FROM support_case_events WHERE case_id = ${id} AND kind = 'reply'`) as { n: number }[];
  const result = await sender(
    apiKey,
    {
      ...SENDERS.support,
      to: String(row.email),
      subject: rendered.subject,
      html: rendered.html,
      text: rendered.text,
      headers: { 'X-Entity-Ref-ID': `${toText(row.ref)}-reply-${num(n) + 1}` },
      tags: [{ name: 'form', value: 'support-reply' }, { name: 'locale', value: locale }],
    },
    `case-${id}-reply-${num(n) + 1}`,
  );
  if (!result.ok) throw badRequest('send_failed', `The email was not sent: ${result.error ?? result.status}`);
  await transaction(async (q) => {
    await q(`INSERT INTO support_case_events (case_id, kind, body, actor_id) VALUES ($1, 'reply', $2, $3)`, [id, message, viewer.id]);
    await q(`UPDATE support_cases SET status = CASE WHEN status = 'fix_pending' THEN status ELSE 'replied' END, updated_at = now() WHERE id = $1`, [id]);
  });
  if (row.status !== 'fix_pending') await queueFeedback(id, row, new Date());
  return json({ case: caseView(await loadCase(id)) });
};

/** POST /admin/cases/:id/status { status } */
export const setCaseStatus: Route['run'] = async (req, params) => {
  const viewer = await requireRole(req, 'team');
  const id = caseId(params);
  const body = await readJson(req);
  const status = toText(body.status) as Status;
  if (!statuses.includes(status) || status === 'fix_pending') throw badRequest('invalid', 'Unknown status.');
  const row = await loadCase(id);
  await transaction(async (q) => {
    await q(`UPDATE support_cases SET status = $2, updated_at = now() WHERE id = $1`, [id, status]);
    await q(`INSERT INTO support_case_events (case_id, kind, body, actor_id, data) VALUES ($1, 'status', '', $2, $3::jsonb)`, [id, viewer.id, JSON.stringify({ from: row.status, to: status })]);
  });
  if (status === 'closed' || status === 'open') await cancelKey(feedbackKey(id));
  if (status === 'resolved') await queueFeedback(id, row, new Date());
  return json({ case: caseView(await loadCase(id)) });
};

/** POST /admin/cases/:id/fixed { version, note? } — the player hears when that version ships. */
export const markFixed: Route['run'] = async (req, params) => {
  const viewer = await requireRole(req, 'team');
  const id = caseId(params);
  const body = await readJson(req);
  const version = str(body, 'version', { min: 1, max: 20, label: 'Version' });
  if (!/^\d{1,4}(\.\d{1,4}){0,3}$/.test(version)) throw badRequest('invalid', 'A version looks like 5.1 or 5.1.2.', { version: 'format' });
  const note = str(body, 'note', { max: 1000, optional: true });
  await loadCase(id);
  await transaction(async (q) => {
    await q(`UPDATE support_cases SET status = 'fix_pending', fixed_in = $2, fixed_notified_at = NULL, updated_at = now() WHERE id = $1`, [id, version]);
    await q(`INSERT INTO support_case_events (case_id, kind, body, actor_id, data) VALUES ($1, 'fixed_in', $2, $3, $4::jsonb)`, [id, note, viewer.id, JSON.stringify({ version })]);
  });
  await cancelKey(feedbackKey(id));
  return json({ case: caseView(await loadCase(id)) });
};

/** Called by the release bot with the version now on the App Store. Returns how many players were queued. */
export async function notifyFixedCases(version: string, now = new Date()): Promise<number> {
  const rows = await sql`SELECT id::int, ref, email, name, locale, fixed_in FROM support_cases WHERE status = 'fix_pending' AND fixed_notified_at IS NULL AND fixed_in IS NOT NULL`;
  const due = rows.filter((r) => versionAtLeast(version, String(r.fixed_in)));
  let earliest: number | null = null;
  for (const r of due) {
    const id = num(r.id);
    const [noteRow] = await sql`SELECT body FROM support_case_events WHERE case_id = ${id} AND kind = 'fixed_in' ORDER BY id DESC LIMIT 1`;
    const at = await transaction(async (q) => {
      await q(`UPDATE support_cases SET status = 'resolved', fixed_notified_at = now(), updated_at = now() WHERE id = $1`, [id]);
      await q(`INSERT INTO support_case_events (case_id, kind, data) VALUES ($1, 'fixed_notified', $2::jsonb)`, [id, JSON.stringify({ version })]);
      const feedbackAt = new Date(now.getTime() + FEEDBACK_DELAY_DAYS * 86400_000);
      return enqueue(
        [
          { kind: 'support-fixed', to: String(r.email), locale: String(r.locale), payload: { caseId: id, version, note: toText(noteRow?.body) }, dedupeKey: `fixed-${id}-${version}` },
          { kind: 'support-feedback', to: String(r.email), locale: String(r.locale), payload: { caseId: id }, sendAfter: feedbackAt, dedupeKey: feedbackKey(id) },
        ],
        q,
      );
    });
    if (at !== null) earliest = earliest === null ? at : Math.min(earliest, at);
  }
  if (earliest !== null) await signalOutbox(earliest);
  return due.length;
}

// ---------------------------------------------------------------------------------------
// Outbox preparers

export async function prepareFixed(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const id = num(row.payload.caseId);
  const [c] = await sql`SELECT ref, name, locale FROM support_cases WHERE id = ${id}`;
  if (!c) return null;
  const locale = localeOf(c.locale);
  const r = supportFixed({ locale, name: String(c.name), ref: String(c.ref), version: toText(row.payload.version), note: toText(row.payload.note), trackUrl: caseTrackUrl(apiKey, id, locale) });
  return { email: { ...SENDERS.support, to: row.to_email, subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: 'support-fixed' }, { name: 'locale', value: locale }] } };
}

export function feedbackLinks(apiKey: string, id: number) {
  const base = `${SITE}/.netlify/functions/support-feedback`;
  const ttl = FEEDBACK_LINK_DAYS * 86400;
  const mk = (a: string) => signedUrl(base, apiKey, 'feedback', { c: id, a }, ttl);
  return { solved: mk('y'), notSolved: mk('n'), rate: ['1', '3', '5'].map(mk) as [string, string, string] };
}

export async function prepareFeedback(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const id = num(row.payload.caseId);
  const [c] = await sql`SELECT ref, name, locale, status, feedback_at FROM support_cases WHERE id = ${id}`;
  // Ask only while the case is answered and unanswered by the player.
  if (!c || c.feedback_at || !['replied', 'resolved'].includes(String(c.status))) return null;
  const locale = localeOf(c.locale);
  const r = supportFeedback({ locale, name: String(c.name), ref: String(c.ref), links: feedbackLinks(apiKey, id) });
  return {
    email: { ...SENDERS.support, to: row.to_email, subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: 'support-feedback' }, { name: 'locale', value: locale }] },
    after: async () => {
      await sql`INSERT INTO support_case_events (case_id, kind) VALUES (${id}, 'feedback_requested')`;
    },
  };
}

// ---------------------------------------------------------------------------------------
// The feedback links: GET shows the choice (scanner-safe), POST records it.

const pageHeaders = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'same-origin',
  'Content-Security-Policy': "default-src 'none'; img-src 'self' https://www.outbrick.site; style-src 'unsafe-inline'; font-src 'self' https://www.outbrick.site; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
};

export async function handleFeedback(req: Request, env: Record<string, string | undefined>, send: Send = sendEmail): Promise<Response> {
  const url = new URL(req.url);
  if (req.method === 'HEAD') return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
  if (req.method !== 'GET' && req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, POST, HEAD' } });
  const apiKey = env.RESEND_API_KEY ?? '';
  const verified = apiKey ? verifySigned(url.searchParams, apiKey, 'feedback') : ({ ok: false, reason: 'invalid' } as const);
  if (!verified.ok) return new Response(simplePage('en', lifecycleCopy.en.feedbackPage.title, lifecycleCopy.en.feedbackPage.expired, { href: `${SITE}/support`, label: 'OutBrick Support' }), { status: 410, headers: pageHeaders });
  const id = num(verified.payload.c);
  const answer = toText(verified.payload.a);
  const [c] = await sql`SELECT id::int, ref, locale, status FROM support_cases WHERE id = ${id}`;
  if (!c) return new Response('Not found', { status: 404 });
  const locale = localeOf(c.locale);
  const choice = answer === 'y' ? { solved: true } : answer === 'n' ? { solved: false } : /^[1-5]$/.test(answer) ? { rating: Number(answer) } : null;
  if (!choice) return new Response('Bad link', { status: 400 });
  if (req.method === 'GET') return new Response(feedbackPage(locale, String(c.ref), `${url.pathname}${url.search}`, choice), { headers: pageHeaders });

  const origin = req.headers.get('Origin');
  if (origin && origin !== 'null' && origin !== url.origin) return new Response('Forbidden', { status: 403 });
  const form = await req.formData().catch(() => null);
  // Control characters other than line breaks are dropped.
  const comment = Array.from(toText(form?.get('comment')))
    .filter((ch) => ch === '\n' || ch.charCodeAt(0) >= 32)
    .join('')
    .trim()
    .slice(0, 2000);
  const reopen = choice.solved === false && c.status !== 'open';
  await transaction(async (q) => {
    await q(
      `UPDATE support_cases SET feedback_at = now(),
              feedback_solved = COALESCE($2, feedback_solved), feedback_rating = COALESCE($3, feedback_rating),
              feedback_comment = CASE WHEN $4 = '' THEN feedback_comment ELSE $4 END,
              status = CASE WHEN $5 THEN 'open' WHEN $2 IS TRUE AND status = 'replied' THEN 'resolved' ELSE status END,
              reopened = reopened + CASE WHEN $5 THEN 1 ELSE 0 END, updated_at = now()
        WHERE id = $1`,
      [id, choice.solved ?? null, choice.rating ?? null, comment, reopen],
    );
    await q(`INSERT INTO support_case_events (case_id, kind, body, data) VALUES ($1, $2, $3, $4::jsonb)`, [id, reopen ? 'reopened' : 'feedback', comment, JSON.stringify(choice)]);
  });
  // The team hears about every reopen and every comment; a bare rating shows on the dashboard.
  if (apiKey && (reopen || comment)) {
    const r = teamCaseUpdate({ ref: String(c.ref), caseUrl: caseAdminUrl(id), ...choice, comment, reopened: reopen, locale });
    const to = normalizeEmail(env.TEAM_INBOX) || TEAM_INBOX;
    const sent = await send(apiKey, { ...SENDERS.supportTeam, to, subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: 'support-feedback-team' }] }, `case-${id}-feedback-${Date.now()}`);
    if (!sent.ok) console.error(`[support] team copy for case ${id} failed: ${sent.error}`);
  }
  const p = lifecycleCopy[locale].feedbackPage;
  return new Response(simplePage(locale, p.thanksTitle, reopen ? p.reopenedBody : p.thanksBody, { href: `${SITE}${locale === 'en' ? '' : `/${locale}`}/support`, label: 'OutBrick Support' }), { headers: pageHeaders });
}

export const caseRoutes = (base: string): Route[] => [
  { method: 'GET', pattern: `${base}/admin/cases`, run: listCases },
  { method: 'GET', pattern: `${base}/admin/cases/:id`, run: getCase },
  { method: 'POST', pattern: `${base}/admin/cases/:id/reply`, run: replyToCase },
  { method: 'POST', pattern: `${base}/admin/cases/:id/status`, run: setCaseStatus },
  { method: 'POST', pattern: `${base}/admin/cases/:id/fixed`, run: markFixed },
];

export { caseColumns };
