// A player's own view of their support case, at /support/request (app/components/support/case-tracker.tsx).
//
// There is no account: the case's emails carry a signed link (purpose 'case', one year), the
// same signing scheme as the feedback links (emails/links.ts). Holding the link is what lets a
// player see the case, so the API answers only to a valid signature and never to a bare
// reference. A player who lost the link asks for it again with the reference and their email;
// it is only ever sent to the address already on the case, and the answer is the same whether
// or not the two matched, so the form cannot be used to discover cases.
//
//   GET  /api/community/support/case?p&x&t        the case, its public history and feedback links
//   POST /api/community/support/case/note         { p, x, t, message }  the player adds details
//   POST /api/community/support/case/link         { ref, email, locale } email the link again
//
// What a player sees: their message and details, staff replies (with the first name of the staff
// member), "fixed in" versions and notices, status changes, reopenings, their feedback and their
// own added details. Never staff-only notes, actor ids or the feedback request bookkeeping.

import { sql, transaction, ipHash, rateAllow } from '../community/db.ts';
import { iso, num } from '../community/forum.ts';
import { badRequest, json, notFound, readJson, str, SITE, tooMany, type Route } from '../community/http.ts';
import { isEmailLocale, type EmailLocale } from '../../emails/i18n.ts';
import { normalizeEmail, signedUrl, verifySigned } from '../../emails/links.ts';
import { SENDERS, sendEmail, type OutgoingEmail } from '../../emails/resend.ts';
import { caseLinkEmail, teamPlayerNote } from '../../emails/support-centre.ts';
import { caseAdminUrl, feedbackLinks } from './cases.ts';
import { cancelKey } from './outbox.ts';

export const CASE_LINK_DAYS = 365;
const TEAM_INBOX = 'support@outbrick.site';

/** The player's private link to their case, on the page in their language. */
export function caseTrackUrl(apiKey: string, id: number, locale: string, nowMs = Date.now()): string {
  const prefix = isEmailLocale(locale) && locale !== 'en' ? `/${locale}` : '';
  return signedUrl(`${SITE}${prefix}/support/request`, apiKey, 'case', { c: id }, CASE_LINK_DAYS * 86400, nowMs);
}

type Send = (apiKey: string, email: OutgoingEmail, key?: string) => ReturnType<typeof sendEmail>;
let sender: Send = sendEmail;
export function setPlayerCaseSenderForTests(send: Send | null): void {
  sender = send ?? sendEmail;
}

function apiKeyOrFail(): string {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw badRequest('unavailable', 'Request tracking is not available right now. Please reply to our email instead.');
  return key;
}

/** The case id a signed link names, or a 404 that does not say whether the link was wrong or old. */
function signedCaseId(params: URLSearchParams, apiKey: string): number {
  const verified = verifySigned(params, apiKey, 'case');
  if (!verified.ok) throw verified.reason === 'expired' ? badRequest('expired', 'This link has expired.') : notFound('This link is not valid.');
  const id = num(verified.payload.c);
  if (!Number.isInteger(id) || id < 1) throw notFound('This link is not valid.');
  return id;
}

const playerKinds = new Set(['created', 'reply', 'status', 'fixed_in', 'fixed_notified', 'feedback', 'reopened', 'note']);

export type PlayerEvent =
  | { kind: 'created'; at: string }
  | { kind: 'reply'; at: string; body: string; staff: string }
  | { kind: 'status'; at: string; to: string }
  | { kind: 'fixed_in'; at: string; version: string; note: string }
  | { kind: 'fixed_notified'; at: string; version: string }
  | { kind: 'feedback'; at: string; solved: boolean | null; rating: number | null; comment: string }
  | { kind: 'reopened'; at: string; comment: string }
  | { kind: 'player_note'; at: string; body: string };

function playerEvent(e: Record<string, unknown>): PlayerEvent | null {
  const kind = String(e.kind);
  if (!playerKinds.has(kind)) return null;
  const data = (e.data && typeof e.data === 'object' ? e.data : {}) as Record<string, unknown>;
  const at = iso(e.created_at);
  const text = (v: unknown) => (typeof v === 'string' ? v : typeof v === 'number' ? String(v) : '');
  const body = text(e.body);
  switch (kind) {
    case 'created':
      return { kind, at };
    case 'reply':
      // Only the first name, as the email signs it.
      return { kind, at, body, staff: text(e.actor).trim().split(/\s+/)[0] || 'OutBrick' };
    case 'status':
      return ['resolved', 'closed', 'open'].includes(String(data.to)) ? { kind, at, to: String(data.to) } : null;
    case 'fixed_in':
      return { kind, at, version: text(data.version), note: body };
    case 'fixed_notified':
      return { kind, at, version: text(data.version) };
    case 'feedback':
      return { kind, at, solved: typeof data.solved === 'boolean' ? data.solved : null, rating: typeof data.rating === 'number' ? data.rating : null, comment: body };
    case 'reopened':
      return { kind, at, comment: body };
    case 'note':
      // Staff notes stay private; only what the player added is shown back to them.
      return data.from === 'player' ? { kind: 'player_note', at, body } : null;
    default:
      return null;
  }
}

async function playerCase(id: number, apiKey: string) {
  const [c] = await sql`SELECT id::int, ref, locale, topic, message, device, app_version, ios_version, status, fixed_in, feedback_at, created_at, updated_at
                          FROM support_cases WHERE id = ${id}`;
  if (!c) throw notFound('This link is not valid.');
  const rows = await sql`SELECT e.kind, e.body, e.data, e.created_at, m.display_name AS actor
                           FROM support_case_events e LEFT JOIN members m ON m.id = e.actor_id
                          WHERE e.case_id = ${id} ORDER BY e.id`;
  const created = rows.find((r) => r.kind === 'created');
  const createdData = (created?.data && typeof created.data === 'object' ? created.data : {}) as Record<string, unknown>;
  const details = (createdData.details && typeof createdData.details === 'object' ? createdData.details : {}) as Record<string, string>;
  const status = String(c.status);
  const canRate = !c.feedback_at && ['replied', 'resolved'].includes(status);
  return {
    ref: String(c.ref),
    locale: String(c.locale),
    topic: String(c.topic),
    message: String(c.message),
    device: String(c.device),
    appVersion: String(c.app_version),
    iosVersion: String(c.ios_version),
    details,
    status,
    fixedIn: (c.fixed_in as string | null) ?? null,
    createdAt: iso(c.created_at),
    updatedAt: iso(c.updated_at),
    answered: Boolean(c.feedback_at),
    feedback: canRate ? feedbackLinks(apiKey, id) : null,
    events: rows.map(playerEvent).filter((e): e is PlayerEvent => e !== null),
  };
}
export type PlayerCase = Awaited<ReturnType<typeof playerCase>>;

export const getPlayerCase: Route['run'] = async (req, _params, url) => {
  const apiKey = apiKeyOrFail();
  if (!(await rateAllow(`case-view:${ipHash(req)}`, 120, 3600))) throw tooMany();
  const id = signedCaseId(url.searchParams, apiKey);
  return json({ case: await playerCase(id, apiKey) });
};

function signedParams(body: Record<string, unknown>): URLSearchParams {
  const params = new URLSearchParams();
  for (const k of ['p', 'x', 't']) params.set(k, typeof body[k] === 'string' ? (body[k] as string) : '');
  return params;
}

/** The player adds details. An answered or closed case goes back to the team as open. */
export const addPlayerNote: Route['run'] = async (req) => {
  const apiKey = apiKeyOrFail();
  const body = await readJson(req, 16 * 1024);
  const id = signedCaseId(signedParams(body), apiKey);
  const message = str(body, 'message', { min: 2, max: 5000, label: 'Your message' });
  if (!(await rateAllow(`case-note:${ipHash(req)}`, 20, 3600)) || !(await rateAllow(`case-note-case:${id}`, 10, 86400))) throw tooMany();
  const [c] = await sql`SELECT id::int, ref, locale, status FROM support_cases WHERE id = ${id}`;
  if (!c) throw notFound('This link is not valid.');
  const reopen = ['replied', 'resolved', 'closed'].includes(String(c.status));
  await transaction(async (q) => {
    await q(`INSERT INTO support_case_events (case_id, kind, body, data) VALUES ($1, 'note', $2, '{"from":"player"}'::jsonb)`, [id, message]);
    if (reopen) {
      await q(`UPDATE support_cases SET status = 'open', reopened = reopened + 1, updated_at = now() WHERE id = $1`, [id]);
      await q(`INSERT INTO support_case_events (case_id, kind, body, data) VALUES ($1, 'reopened', '', '{"by":"player-note"}'::jsonb)`, [id]);
    } else {
      await q(`UPDATE support_cases SET updated_at = now() WHERE id = $1`, [id]);
    }
  });
  // A reopened case is no longer waiting for "did we solve it?".
  if (reopen) await cancelKey(`feedback-${id}`);
  const locale: EmailLocale = isEmailLocale(c.locale) ? c.locale : 'en';
  const team = teamPlayerNote({ ref: String(c.ref), caseUrl: caseAdminUrl(id), message, reopened: reopen, locale });
  const to = normalizeEmail(process.env.TEAM_INBOX) || TEAM_INBOX;
  const sent = await sender(apiKey, { ...SENDERS.supportTeam, to, subject: team.subject, html: team.html, text: team.text, tags: [{ name: 'form', value: 'support-player-note' }] }, `case-${id}-note-${Date.now()}`);
  if (!sent.ok) console.error(`[support] team copy of a player note on case ${id} failed: ${sent.error}`);
  return json({ case: await playerCase(id, apiKey) });
};

/**
 * Email the case link again. The reply is identical whether or not the reference and address
 * matched a case, and the email only ever goes to the address already on the case.
 */
export const resendCaseLink: Route['run'] = async (req) => {
  const apiKey = apiKeyOrFail();
  const body = await readJson(req, 4 * 1024);
  const ref = str(body, 'ref', { min: 6, max: 20, label: 'Reference' }).toUpperCase().replace(/\s+/g, '');
  const normalizedRef = /^OB-?[0-9A-Z]{6}$/.test(ref) ? (ref.startsWith('OB-') ? ref : `OB-${ref.slice(2)}`) : null;
  const email = normalizeEmail(body.email);
  if (!normalizedRef) throw badRequest('invalid', 'A reference looks like OB-7K2QXM.', { ref: 'format' });
  if (!email) throw badRequest('invalid', 'Enter the email address you wrote from.', { email: 'format' });
  if (!(await rateAllow(`case-link:${ipHash(req)}`, 6, 3600))) throw tooMany();
  const [c] = await sql`SELECT id::int, ref, email, locale FROM support_cases WHERE ref = ${normalizedRef}`;
  if (c && normalizeEmail(c.email) === email && (await rateAllow(`case-link-case:${num(c.id)}`, 3, 86400))) {
    const id = num(c.id);
    const locale: EmailLocale = isEmailLocale(c.locale) ? c.locale : 'en';
    const r = caseLinkEmail({ locale, ref: String(c.ref), url: caseTrackUrl(apiKey, id, locale) });
    const sent = await sender(apiKey, { ...SENDERS.support, to: String(c.email), subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: 'support-case-link' }, { name: 'locale', value: locale }] }, `case-${id}-link-${Math.floor(Date.now() / 60000)}`);
    if (!sent.ok) console.error(`[support] case link for case ${id} failed: ${sent.error}`);
  }
  return json({ ok: true });
};

export const playerCaseRoutes = (base: string): Route[] => [
  { method: 'GET', pattern: `${base}/support/case`, run: getPlayerCase },
  { method: 'POST', pattern: `${base}/support/case/note`, run: addPlayerNote },
  { method: 'POST', pattern: `${base}/support/case/link`, run: resendCaseLink },
];

