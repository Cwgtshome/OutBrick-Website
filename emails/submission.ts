// What happens after a Netlify Forms submission is verified: which email goes to whom.
//
// Two emails per submission: the visitor's own (an acknowledgement, or the newsletter's
// confirm-your-subscription), then the team's copy to support@, or news@ for the newsletter (emails/team.ts), which says
// whether the first one went out.
//
// Called by netlify/functions/submission-created.mts with the event payload. It never throws:
// a bad payload, a missing key or a Resend error is logged (without the visitor's address or
// message) and the function still answers 200, because the submission itself is already safe in
// Netlify. Visitor and team delivery outcomes are logged separately.

import { isEmailLocale, type EmailLocale } from './i18n.ts';
import { addressTag, confirmUrl, normalizeEmail } from './links.ts';
import { SENDERS, sendEmail } from './resend.ts';
import { affiliateAcknowledgement, careersAcknowledgement, contactAcknowledgement, newsletterConfirm, type Rendered } from './templates.ts';
import { SITE, toText } from './core.ts';
import { teamNotification, type TeamForm } from './team.ts';
import { databaseAvailable } from '../netlify/community/db.ts';
import { caseAdminUrl, createCase } from '../netlify/lifecycle/cases.ts';
import { createApplication } from '../netlify/lifecycle/applications.ts';

export type SubmissionPayload = {
  id?: string;
  form_name?: string;
  site_url?: string;
  created_at?: string;
  data?: Record<string, unknown>;
  human_fields?: Record<string, unknown>;
  spam?: boolean;
  state?: string;
  /** False when the address already had its share of visitor emails today (cloudflare/forms.ts). */
  acknowledge?: boolean;
};

/** How much of a contact message the acknowledgement quotes back: enough to recognise it. */
export const ACK_EXCERPT_CHARS = 600;
const excerpt = (text: string, max: number) => (text.length > max ? `${text.slice(0, max).trimEnd()}…` : text);

export type Outcome = {
  id: string;
  form: string;
  status: 'sent' | 'skipped' | 'failed';
  reason?: string;
  locale?: EmailLocale;
  team?: 'sent' | 'skipped' | 'failed';
  /** The stored support case or application, for the team copy's dashboard link. */
  record?: { url: string; ref?: string };
};

/** Where the team's copy goes: newsletter sign-ups to news@, everything else to support@. TEAM_INBOX overrides both (a test inbox, say). */
export const TEAM_INBOX = { support: 'support@outbrick.site', news: 'news@outbrick.site' } as const;

const str = (v: unknown, max = 5000) => toText(v).slice(0, max);

/** The language of the page the form was on: a `locale` field, else the path of the referring page, else English. */
export function submissionLocale(data: Record<string, unknown>, formName: string): EmailLocale {
  const explicit = formName === 'newsletter' ? str(data.language, 5) : str(data.locale, 5);
  if (isEmailLocale(explicit)) return explicit;
  const fallbackField = str(data.locale ?? data.language, 5);
  if (isEmailLocale(fallbackField)) return fallbackField;
  const referrer = str(data.referrer, 2000);
  try {
    const first = new URL(referrer, SITE).pathname.split('/')[1];
    if (isEmailLocale(first)) return first;
  } catch {
    /* not a URL */
  }
  return 'en';
}

async function visitorEmail(payload: SubmissionPayload | undefined, env: Record<string, string | undefined>): Promise<Outcome> {
  const id = str(payload?.id, 80) || 'unknown';
  const form = str(payload?.form_name, 40) || 'unknown';
  let record: Outcome['record'];
  const done = (status: Outcome['status'], reason?: string, locale?: EmailLocale): Outcome => {
    const outcome = { id, form, status, reason, locale, record };
    return outcome;
  };

  if (!payload || typeof payload !== 'object') return done('skipped', 'no payload');
  const data = payload.data && typeof payload.data === 'object' ? payload.data : {};
  // Netlify only runs this for verified submissions, but check the honeypot and the spam flag
  // anyway: a filled honeypot is a bot by definition.
  if (str(data['bot-field']).trim()) return done('skipped', 'honeypot');
  if (payload.spam === true || payload.state === 'spam') return done('skipped', 'spam');
  if (!['contact', 'careers', 'affiliate', 'newsletter'].includes(form)) return done('skipped', 'no email for this form');

  const to = normalizeEmail(data.email);
  if (!to) return done('skipped', 'no usable email address');
  const limited = payload.acknowledge === false;
  const locale0 = submissionLocale(data, form);
  // Contact messages become support cases and applications are stored, so the team can answer
  // and decide from the dashboard. Optional: without a database the emails still go out.
  let caseRef: string | undefined;
  if (form !== 'newsletter' && databaseAvailable(env)) {
    try {
      if (form === 'contact') {
        const c = await createCase({ submissionId: id, email: to, name: str(data.name, 120), locale: locale0, topic: str(data.topic, 40), message: str(data.message), device: str(data.device, 80), appVersion: str(data['app-version'], 20), iosVersion: str(data['ios-version'], 20) });
        caseRef = c.ref;
        record = { url: caseAdminUrl(c.id), ref: c.ref };
      } else {
        const details: Record<string, string> = {};
        for (const k of ['handle', 'channels', 'audience', 'country', 'plan', 'location', 'portfolio', 'cover-note']) if (data[k] !== undefined) details[k] = str(Array.isArray(data[k]) ? (data[k] as unknown[]).join(', ') : data[k], 2000);
        const appId = await createApplication({ kind: form as 'affiliate' | 'careers', submissionId: id, email: to, name: str(data.name, 120), locale: locale0, role: str(data.role, 160), code: str(data.code, 20), details });
        record = { url: `${SITE}/community/admin?applications=${form}${appId ? `&application=${appId}` : ''}` };
      }
    } catch (error) {
      console.error(`[email] submission ${id}: could not store the ${form} record: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return done('skipped', 'RESEND_API_KEY is not set');

  const locale = submissionLocale(data, form);
  // The submission is kept and the team still gets its copy; the address just isn't emailed
  // again, so the form can't be used to flood someone else's inbox.
  if (limited) return done('skipped', 'address rate limit', locale);
  const name = str(data.name, 120);
  let rendered: Rendered | null = null;
  let sender: { from: string; replyTo: string } = SENDERS.support;
  let headers: Record<string, string> | undefined;

  try {
    if (form === 'contact') {
      rendered = contactAcknowledgement({
        locale,
        name,
        topic: str(data.topic, 40),
        // Only an excerpt is echoed back: the acknowledgement must not relay arbitrary text.
        message: excerpt(str(data.message), ACK_EXCERPT_CHARS),
        device: str(data.device, 80),
        iosVersion: str(data['ios-version'], 20),
        appVersion: str(data['app-version'], 20),
        caseRef,
      });
    } else if (form === 'careers') {
      rendered = careersAcknowledgement({ locale, name, role: str(data.role, 160) });
    } else if (form === 'affiliate') {
      rendered = affiliateAcknowledgement({ locale, name, code: str(data.code, 20) });
    } else {
      // Double opt-in: this only asks. The address reaches the segment when the link is used.
      if (str(data.consent, 10) !== 'yes') return done('skipped', 'no consent tick', locale);
      // Always the canonical host: the link must outlive whichever deploy took the submission.
      // The stored submission's id rides in the signed link, so the confirmation records its consent.
      rendered = newsletterConfirm({ locale, confirmUrl: confirmUrl(SITE, apiKey, to, locale, Date.now(), id === 'unknown' ? undefined : id) });
      sender = SENDERS.news;
      headers = { 'X-Entity-Ref-ID': `confirm-${id}` };
    }
  } catch (error) {
    return done('failed', `template: ${error instanceof Error ? error.message : String(error)}`, locale);
  }

  if (!rendered) return done('failed', 'nothing rendered', locale);
  const result = await sendEmail(
    apiKey,
    { from: sender.from, replyTo: sender.replyTo, to, subject: rendered.subject, html: rendered.html, text: rendered.text, headers, tags: [{ name: 'form', value: form }, { name: 'locale', value: locale }] },
    // One email per submission, even if Netlify delivers the event twice (Resend keeps keys 24 h).
    `submission-${id}-${addressTag(apiKey, to)}`,
  );
  if (!result.ok) return done('failed', result.error, locale);
  return done('sent', `resend id ${toText(result.data?.id) || '?'}`, locale);
}

const forms: TeamForm[] = ['contact', 'careers', 'affiliate', 'newsletter'];

/** The visitor's email, then the team's copy. Logs one line per submission, without the visitor's details. */
export async function handleSubmission(payload: SubmissionPayload | undefined, env: Record<string, string | undefined>): Promise<Outcome> {
  const outcome = await visitorEmail(payload, env);
  const log = (o: Outcome) => {
    console.log(`[email] submission ${o.id} (${o.form}) ${o.status}${o.reason ? `: ${o.reason}` : ''}${o.locale ? ` [${o.locale}]` : ''}${o.team ? `; team copy ${o.team}` : ''}`);
    return o;
  };
  // No team copy for bots, spam, unknown forms or a missing key: the same gates as the visitor's.
  const form = outcome.form as TeamForm;
  const apiKey = env.RESEND_API_KEY;
  if (!payload || !forms.includes(form) || !apiKey || ['honeypot', 'spam', 'no payload'].includes(outcome.reason ?? '')) return log(outcome);

  const data = payload.data && typeof payload.data === 'object' ? payload.data : {};
  const locale = outcome.locale ?? submissionLocale(data, form);
  const acknowledgement = outcome.status === 'sent' ? 'sent' : (outcome.reason ?? outcome.status).replace(/^POST \/emails -> /, 'Resend refused it, ');
  const visitor = normalizeEmail(data.email);
  const team = form === 'newsletter' ? SENDERS.newsTeam : SENDERS.supportTeam;
  const inbox = form === 'newsletter' ? TEAM_INBOX.news : TEAM_INBOX.support;
  try {
    const rendered = teamNotification({ form, data, locale, submissionId: outcome.id, createdAt: str(payload.created_at, 40), acknowledgement, dashboard: outcome.record });
    const result = await sendEmail(
      apiKey,
      {
        from: team.from,
        replyTo: visitor || team.replyTo,
        to: normalizeEmail(env.TEAM_INBOX) || inbox,
        subject: rendered.subject,
        html: rendered.html,
        text: rendered.text,
        tags: [{ name: 'form', value: `${form}-team` }, { name: 'locale', value: locale }],
      },
      `team-${outcome.id}`,
    );
    return log({ ...outcome, team: result.ok ? 'sent' : 'failed' });
  } catch (error) {
    console.error(`[email] team copy of ${outcome.id} failed: ${error instanceof Error ? error.message : String(error)}`);
    return log({ ...outcome, team: 'failed' });
  }
}
