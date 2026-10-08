// Affiliate and careers applications, so the team can send a decision instead of leaving people
// at "received". Stored by the forms (emails/submission.ts → createApplication); decided from
// /community/admin through POST /api/community/admin/applications/:id/decision:
//
//   affiliate: approved (affiliateApproved: the code as a ticket, the link, a first-week list)
//              or declined (affiliateDeclined, with an optional reason);
//   careers:   in_review (careersInReview), next_step (careersNextStep, with the team's message)
//              or declined (careersDeclined, with an optional note).
//
// A decision email is sent straight away; if Resend refuses it the decision is not recorded,
// so the dashboard never shows a decision the applicant didn't hear about.

import { sql } from '../community/db.ts';
import { iso, isoOrNull, num } from '../community/forum.ts';
import { badRequest, json, notFound, readJson, str, type Route } from '../community/http.ts';
import { requireRole } from '../community/session.ts';
import { isEmailLocale, type EmailLocale } from '../../emails/i18n.ts';
import { affiliateApproved, affiliateDeclined, careersDeclined, careersInReview, careersNextStep } from '../../emails/lifecycle.ts';
import { SENDERS, sendEmail, type OutgoingEmail } from '../../emails/resend.ts';
import type { Rendered } from '../../emails/templates.ts';
import { toText } from '../../emails/core.ts';

export type NewApplication = { kind: 'affiliate' | 'careers'; submissionId: string; email: string; name: string; locale: EmailLocale; role?: string; code?: string; details?: Record<string, string> };

export async function createApplication(input: NewApplication): Promise<number | null> {
  const rows = await sql`
    INSERT INTO applications (kind, submission_id, email, name, locale, role, code, details)
    VALUES (${input.kind}, ${input.submissionId}, ${input.email}, ${input.name.slice(0, 120)}, ${input.locale}, ${(input.role ?? '').slice(0, 160)},
            ${(input.code ?? '').slice(0, 20).toUpperCase()}, ${JSON.stringify(input.details ?? {})}::jsonb)
    ON CONFLICT (submission_id) DO NOTHING RETURNING id::int`;
  return rows[0] ? num(rows[0].id) : null;
}

const view = (r: Record<string, unknown>) => ({
  id: num(r.id),
  kind: String(r.kind) as 'affiliate' | 'careers',
  email: String(r.email),
  name: String(r.name),
  locale: String(r.locale),
  role: String(r.role),
  code: String(r.code),
  details: (r.details ?? {}) as Record<string, string>,
  status: String(r.status),
  decidedAt: isoOrNull(r.decided_at),
  createdAt: iso(r.created_at),
});
export type ApplicationView = ReturnType<typeof view>;

export const listApplications: Route['run'] = async (req) => {
  await requireRole(req, 'team');
  const url = new URL(req.url);
  const kind = url.searchParams.get('kind') === 'careers' ? 'careers' : url.searchParams.get('kind') === 'affiliate' ? 'affiliate' : 'all';
  const pending = url.searchParams.get('status') !== 'all';
  const rows = await sql`
    SELECT id::int, kind, email, name, locale, role, code, details, status, decided_at, created_at FROM applications
     WHERE (${kind} = 'all' OR kind = ${kind}) AND (NOT ${pending} OR status IN ('received','in_review'))
     ORDER BY created_at DESC LIMIT 100`;
  return json({ applications: rows.map(view) });
};

type Send = (apiKey: string, email: OutgoingEmail, key?: string) => ReturnType<typeof sendEmail>;
let sender: Send = sendEmail;
export function setApplicationSenderForTests(send: Send | null): void {
  sender = send ?? sendEmail;
}

const allowed: Record<'affiliate' | 'careers', string[]> = { affiliate: ['approved', 'declined'], careers: ['in_review', 'next_step', 'declined'] };

/** POST /admin/applications/:id/decision { decision, message?, code? } */
export const decideApplication: Route['run'] = async (req, params) => {
  const viewer = await requireRole(req, 'team');
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) throw notFound('No such application.');
  const body = await readJson(req, 32 * 1024);
  const decision = toText(body.decision);
  const message = str(body, 'message', { max: 4000, optional: true, label: 'Message' });
  const [row] = await sql`SELECT id::int, kind, email, name, locale, role, code, status FROM applications WHERE id = ${id}`;
  if (!row) throw notFound('No such application.');
  const kind = String(row.kind) as 'affiliate' | 'careers';
  if (!allowed[kind].includes(decision)) throw badRequest('invalid', `A ${kind} application can be: ${allowed[kind].join(', ')}.`);
  let code = String(row.code);
  if (kind === 'affiliate' && decision === 'approved') {
    code = str(body, 'code', { max: 20, optional: true }).toUpperCase() || code;
    if (!/^[A-Z0-9]{3,20}$/.test(code)) throw badRequest('invalid', 'An affiliate code is 3 to 20 letters or digits.', { code: 'format' });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw badRequest('unavailable', 'Email is not configured (RESEND_API_KEY).');
  const locale: EmailLocale = isEmailLocale(row.locale) ? row.locale : 'en';
  const base = { locale, name: String(row.name), message };
  const role = String(row.role) || 'OutBrick';
  const rendered: Rendered =
    kind === 'affiliate'
      ? decision === 'approved'
        ? affiliateApproved({ locale, name: String(row.name), code })
        : affiliateDeclined(base)
      : decision === 'in_review'
        ? careersInReview({ ...base, role })
        : decision === 'next_step'
          ? careersNextStep({ ...base, role })
          : careersDeclined({ ...base, role });
  const result = await sender(
    apiKey,
    { ...SENDERS.support, to: String(row.email), subject: rendered.subject, html: rendered.html, text: rendered.text, tags: [{ name: 'form', value: `${kind}-${decision}` }, { name: 'locale', value: locale }] },
    `application-${id}-${decision}`,
  );
  if (!result.ok) throw badRequest('send_failed', `The email was not sent: ${result.error ?? result.status}`);
  const final = decision === 'in_review' ? null : new Date().toISOString();
  const [updated] = await sql`
    UPDATE applications SET status = ${decision}, code = ${code}, decided_at = ${final}::timestamptz, decided_by = ${viewer.id}, updated_at = now()
     WHERE id = ${id} RETURNING id::int, kind, email, name, locale, role, code, details, status, decided_at, created_at`;
  return json({ application: view(updated) });
};

export const applicationRoutes = (base: string): Route[] => [
  { method: 'GET', pattern: `${base}/admin/applications`, run: listApplications },
  { method: 'POST', pattern: `${base}/admin/applications/:id/decision`, run: decideApplication },
];
