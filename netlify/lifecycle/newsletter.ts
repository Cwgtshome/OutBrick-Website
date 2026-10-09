// The newsletter's lifecycle on top of Resend's list (emails/newsletter.ts keeps the list itself):
//
//   - onConfirmed: a confirmed reader is recorded, with the consent (when, from which page,
//     which wording, which stored submission), before Resend is asked to add the contact, so a
//     Resend outage is retried from the outbox ('resend-sync', and daily while resend_pending)
//     rather than losing the reader; the welcome series' letters 2 and 3 are queued for days 3
//     and 10 (the first goes out with the confirmation, or from the outbox if that send failed);
//   - onUnsubscribed: anything still queued for that address is cancelled;
//   - onSuppressed / onContactUnsubscribed: Resend's webhook (resend-events.mts) reports a hard
//     bounce, a complaint, a suppression or an unsubscribe made in Resend; the reader is marked
//     and everything queued for the address is cancelled. Every news@ email checks `reachable`
//     when it is rendered, so nothing goes to a suppressed or departed reader;
//   - the preferences page (netlify/functions/newsletter-preferences.mts): without a token it asks
//     for the address and emails a signed link; with one it shows the topics and the language;
//     saved topics also reach Resend Topics when RESEND_TOPIC_<RELEASES|TIPS|EVENTS> are set;
//   - "still want these?" (sweepReengagement, daily): only while NEWSLETTER_ENGAGEMENT_TRACKING=on,
//     i.e. once Resend's opened/clicked webhook feeds last_engaged_at. Without it, nobody is
//     asked and nobody is removed, because silence would be indistinguishable from not reading.
//     A reader who doesn't answer in 14 days is unsubscribed (status 'sunset');
//   - release broadcasts (recordReleaseBroadcasts, processReleaseBroadcasts): the release bot
//     records one row per language with that storefront's notes, inside the transaction that
//     claims the version; each row then becomes a Broadcast draft in Resend (retried from the
//     lifecycle tick until it exists). Only with RELEASE_EMAIL_AUTOSEND=on is a draft sent,
//     RELEASE_EMAIL_DELAY_HOURS (default 24) after it was made, so the owner can review the
//     copy and cancel by deleting the draft; without the flag a person sends it in Resend.

import { ipHash, rateAllow, sql, type Query } from '../community/db.ts';
import { SITE } from '../community/http.ts';
import { emailLocales, isEmailLocale, type EmailLocale } from '../../emails/i18n.ts';
import { addressTag, normalizeEmail, signedUrl, unsubscribeUrl, verifySigned } from '../../emails/links.ts';
import { preferencesAskPage, preferencesLink, preferencesPage, reengage, releaseNews, simplePage, topicKeys, welcomeBoards, welcomeFriends, type Topics } from '../../emails/lifecycle.ts';
import { lifecycleCopy } from '../../emails/lifecycle-i18n.ts';
import { tagLinks, toText } from '../../emails/core.ts';

const millis = (v: unknown) => (v instanceof Date ? v.getTime() : Date.parse(toText(v)));
import { listUnsubscribeHeaders } from '../../emails/newsletter.ts';
import { SENDERS, newsletterSegments, resend, sendEmail, subscribeContact, unsubscribeContact, type OutgoingEmail } from '../../emails/resend.ts';
import { newsletterWelcome } from '../../emails/templates.ts';
import { cancelFor, enqueue, signalOutbox, type Prepared, type Row as OutboxRow } from './outbox.ts';
import { recordSiteEvent } from './analytics.ts';

type Env = Record<string, string | undefined>;
const DAY = 86400_000;
export const WELCOME_DAYS = { 'welcome-2': 3, 'welcome-3': 10 } as const;
export const REENGAGE_AFTER_DAYS = 120;
export const SUNSET_AFTER_DAYS = 14;
const PREFS_LINK_DAYS = 30;
const newsKinds = ['welcome-1', 'welcome-2', 'welcome-3', 'reengage', 'sunset', 'resend-sync'] as const;

export const preferencesBase = `${SITE}/.netlify/functions/newsletter-preferences`;
export const preferencesUrl = (apiKey: string, email: string, locale: EmailLocale) => signedUrl(`${preferencesBase}?l=${locale}`, apiKey, 'prefs', { e: email }, PREFS_LINK_DAYS * 86400);
/** For Broadcasts, which can't sign per reader: the page that emails a link. */
export const preferencesAskUrl = (locale: EmailLocale) => `${preferencesBase}?l=${locale}`;

/** What the reader agreed to, read from the stored sign-up at confirmation (emails/newsletter.ts). */
export type Consent = { source?: string | null; textVersion?: string | null; submissionId?: string | null };

/**
 * Record a confirmation. `resendPending` says Resend has not been told yet (the caller asks it
 * next and clears the flag with markResendSynced); a reader who confirms again after leaving or
 * being suppressed gave fresh consent from that same address, so the suppression is lifted.
 */
export async function onConfirmed(email: string, locale: EmailLocale, opts: { consent?: Consent; resendPending?: boolean; now?: Date } = {}): Promise<void> {
  const now = opts.now ?? new Date();
  const c = opts.consent ?? {};
  await sql`
    INSERT INTO newsletter_subscribers (email, locale, status, confirmed_at, welcome_step, last_engaged_at, reengage_sent_at,
                                        consent_at, consent_source, consent_text_version, submission_id, resend_pending)
    VALUES (${email}, ${locale}, 'subscribed', now(), 1, now(), NULL,
            now(), ${c.source ?? null}, ${c.textVersion ?? null}, ${c.submissionId ?? null}, ${opts.resendPending ?? false})
    ON CONFLICT (email) DO UPDATE SET locale = EXCLUDED.locale, status = 'subscribed', last_engaged_at = now(), reengage_sent_at = NULL, updated_at = now(),
      consent_at = now(), consent_source = EXCLUDED.consent_source, consent_text_version = EXCLUDED.consent_text_version,
      submission_id = EXCLUDED.submission_id, resend_pending = EXCLUDED.resend_pending, suppressed_at = NULL, suppression_reason = NULL`;
  const [row] = await sql`SELECT welcome_step FROM newsletter_subscribers WHERE email = ${email}`;
  // A returning reader who already had the series doesn't get it again.
  if (Number(row?.welcome_step ?? 1) > 1) return;
  const items = (['welcome-2', 'welcome-3'] as const).map((kind) => ({
    kind,
    to: email,
    locale,
    sendAfter: new Date(now.getTime() + WELCOME_DAYS[kind] * DAY),
    dedupeKey: `${kind}-${email}`,
  }));
  const at = await enqueue(items);
  if (at !== null) await signalOutbox(at);
}

/**
 * The consent behind a confirmation, from the stored sign-up: the one named in the signed link,
 * else the address's latest newsletter sign-up in the link's lifetime. Only the page's path is
 * kept (no query, no host) and nothing about the visitor's network.
 */
export async function consentFor(email: string, submissionId?: string): Promise<Consent> {
  const rows = submissionId
    ? await sql`SELECT id, payload FROM web_form_submissions WHERE id = ${submissionId} AND form_name = 'newsletter'`
    : await sql`SELECT id, payload FROM web_form_submissions
                 WHERE form_name = 'newsletter' AND lower(payload->'data'->>'email') = ${email} AND created_at > now() - interval '8 days'
                 ORDER BY created_at DESC LIMIT 1`;
  const row = rows[0];
  const payload = (typeof row?.payload === 'string' ? JSON.parse(row.payload) : row?.payload) as { data?: Record<string, unknown> } | undefined;
  const data = payload?.data ?? {};
  if (!row || normalizeEmail(data.email) !== email) return {};
  let source: string | null = null;
  try {
    const referrer = toText(data.referrer);
    if (referrer) source = new URL(referrer, SITE).pathname.slice(0, 300);
  } catch {
    /* not a URL */
  }
  const version = toText(data['consent-version']);
  return { submissionId: String(row.id), source: source ?? 'form:newsletter', textVersion: /^\d{4}-\d{2}-\d{2}$/.test(version) ? version : null };
}

export async function markResendSynced(email: string): Promise<void> {
  await sql`UPDATE newsletter_subscribers SET resend_pending = false, updated_at = now() WHERE email = ${email}`;
}

/**
 * The confirmation could not finish in Resend (the contact, or the welcome itself): queue what
 * is owed. `key` is unique to the confirm link, so a second press queues nothing new.
 */
export async function queueConfirmRetry(email: string, locale: EmailLocale, segments: string[], key: string, what: { sync: boolean; welcome: boolean }): Promise<void> {
  const items = [
    ...(what.sync ? [{ kind: 'resend-sync' as const, to: email, locale, payload: { segments }, dedupeKey: `resend-sync-${email}-${key}` }] : []),
    ...(what.welcome ? [{ kind: 'welcome-1' as const, to: email, locale, dedupeKey: `welcome-1-${email}-${key}` }] : []),
  ];
  const at = await enqueue(items);
  if (at !== null) await signalOutbox(at);
}

/** Daily: readers whose Resend contact is still owed after the outbox gave up get another try. */
export async function requeueResendSync(env: Env, now = new Date()): Promise<number> {
  const rows = await sql`SELECT email, locale FROM newsletter_subscribers
                          WHERE resend_pending AND status = 'subscribed' AND suppressed_at IS NULL ORDER BY updated_at LIMIT 200`;
  const day = now.toISOString().slice(0, 10);
  const at = await enqueue(
    rows.map((r) => {
      const locale = localeOf(r.locale);
      return { kind: 'resend-sync' as const, to: String(r.email), locale, payload: { segments: newsletterSegments(env, locale) }, dedupeKey: `resend-sync-${toText(r.email)}-${day}` };
    }),
  );
  if (at !== null) await signalOutbox(at);
  return rows.length;
}

export async function prepareResendSync(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const s = await subscriber(row.to_email);
  if (!reachable(s) || !s?.resend_pending) return null;
  const segments = Array.isArray(row.payload?.segments) ? row.payload.segments.map(String).filter(Boolean) : [];
  if (!segments.length) return null;
  return {
    action: async () => {
      // A throw is a failed attempt: the outbox backs off and tries again.
      const result = await subscribeContact(apiKey, row.to_email, segments);
      if (!result.ok) throw new Error(result.error);
      await markResendSynced(row.to_email);
    },
  };
}

export async function onUnsubscribed(email: string, status: 'unsubscribed' | 'sunset' = 'unsubscribed'): Promise<void> {
  await sql`UPDATE newsletter_subscribers SET status = ${status}, updated_at = now() WHERE email = ${email}`;
  await cancelFor(email, [...newsKinds]);
}

/**
 * Resend says the contact unsubscribed (its own unsubscribe page, the dashboard, or our own
 * PATCH echoing back). An event older than the reader's latest confirmation is stale and ignored.
 */
export async function onContactUnsubscribed(email: string, eventAt?: Date | null): Promise<boolean> {
  const at = eventAt && Number.isFinite(eventAt.getTime()) ? eventAt.toISOString() : null;
  const rows = await sql`UPDATE newsletter_subscribers SET status = 'unsubscribed', updated_at = now()
                          WHERE email = ${email} AND status = 'subscribed'
                            AND (${at}::timestamptz IS NULL OR COALESCE(consent_at, confirmed_at) < ${at}::timestamptz)
                          RETURNING email`;
  if (rows.length) await cancelFor(email, [...newsKinds]);
  return rows.length > 0;
}

/**
 * A hard bounce, a spam complaint or a Resend suppression: the address is not mailed again.
 * The reader's row (if any) keeps its consent record and gains the suppression, and every
 * unsent email to the address is cancelled, newsletter or not.
 */
export async function onSuppressed(email: string, reason: string, eventAt?: Date | null): Promise<void> {
  const at = eventAt && Number.isFinite(eventAt.getTime()) ? eventAt.toISOString() : null;
  await sql`UPDATE newsletter_subscribers SET suppressed_at = COALESCE(suppressed_at, now()), suppression_reason = ${reason.slice(0, 200)}, updated_at = now()
             WHERE email = ${email} AND (${at}::timestamptz IS NULL OR COALESCE(consent_at, confirmed_at) < ${at}::timestamptz)`;
  await cancelFor(email);
}

/** A click or open (from the webhook), a "keep me" tap, or saved preferences. */
export async function markEngaged(email: string): Promise<void> {
  await sql`UPDATE newsletter_subscribers SET last_engaged_at = now(), reengage_sent_at = NULL, updated_at = now() WHERE email = ${email} AND status = 'subscribed'`;
  await cancelFor(email, ['sunset']);
}

async function subscriber(email: string) {
  const [row] = await sql`SELECT email, locale, status, topics, welcome_step, suppressed_at, resend_pending FROM newsletter_subscribers WHERE email = ${email}`;
  return row ?? null;
}

/** Whether a news@ email may go to this reader now: still subscribed and not suppressed. */
export const reachable = (s: Record<string, unknown> | null | undefined): boolean => Boolean(s && s.status === 'subscribed' && !s.suppressed_at);

const localeOf = (v: unknown): EmailLocale => (isEmailLocale(v) ? v : 'en');

function newsEmail(apiKey: string, to: string, locale: EmailLocale, r: { subject: string; html: string; text: string }, form: string): OutgoingEmail {
  const unsub = unsubscribeUrl(SITE, apiKey, to, locale);
  return { ...SENDERS.news, to, subject: r.subject, html: r.html, text: r.text, headers: listUnsubscribeHeaders(unsub), tags: [{ name: 'form', value: form }, { name: 'locale', value: locale }] };
}

export async function prepareWelcome(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const s = await subscriber(row.to_email);
  if (!s || !reachable(s)) return null;
  const locale = localeOf(s.locale);
  const links = { locale, unsubscribeUrl: unsubscribeUrl(SITE, apiKey, row.to_email, locale), preferencesUrl: preferencesUrl(apiKey, row.to_email, locale) };
  // Letter 1 only comes from the outbox when the confirmation could not send it.
  if (row.kind === 'welcome-1') return { email: newsEmail(apiKey, row.to_email, locale, newsletterWelcome(links), 'newsletter-welcome') };
  const step = row.kind === 'welcome-2' ? 2 : 3;
  const r = step === 2 ? welcomeBoards(links) : welcomeFriends(links);
  return {
    email: newsEmail(apiKey, row.to_email, locale, r, `newsletter-${row.kind}`),
    after: async () => {
      await sql`UPDATE newsletter_subscribers SET welcome_step = GREATEST(welcome_step, ${step}), updated_at = now() WHERE email = ${row.to_email}`;
    },
  };
}

export const engagementTracking = (env: Env) => (env.NEWSLETTER_ENGAGEMENT_TRACKING ?? '').toLowerCase() === 'on';

/** Daily: queue "still want these?" for long-silent readers. Returns how many were queued. */
export async function sweepReengagement(env: Env, now = new Date()): Promise<number> {
  if (!engagementTracking(env)) return 0;
  const cutoff = new Date(now.getTime() - REENGAGE_AFTER_DAYS * DAY).toISOString();
  const rows = await sql`SELECT email, locale FROM newsletter_subscribers
                          WHERE status = 'subscribed' AND suppressed_at IS NULL AND reengage_sent_at IS NULL AND last_engaged_at < ${cutoff}::timestamptz AND confirmed_at < ${cutoff}::timestamptz
                          ORDER BY last_engaged_at LIMIT 200`;
  const stamp = now.toISOString().slice(0, 10);
  const at = await enqueue(rows.map((r) => ({ kind: 'reengage' as const, to: String(r.email), locale: String(r.locale), dedupeKey: `reengage-${toText(r.email)}-${stamp}` })));
  if (at !== null) await signalOutbox(at);
  return rows.length;
}

export async function prepareReengage(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const s = await subscriber(row.to_email);
  if (!s || !reachable(s)) return null;
  const locale = localeOf(s.locale);
  const keepUrl = signedUrl(`${SITE}/.netlify/functions/newsletter-preferences?l=${locale}&keep=1`, apiKey, 'keep', { e: row.to_email }, (SUNSET_AFTER_DAYS + 30) * 86400);
  const r = reengage({ locale, keepUrl, unsubscribeUrl: unsubscribeUrl(SITE, apiKey, row.to_email, locale), preferencesUrl: preferencesUrl(apiKey, row.to_email, locale) });
  return {
    email: newsEmail(apiKey, row.to_email, locale, r, 'newsletter-reengage'),
    after: async () => {
      await sql`UPDATE newsletter_subscribers SET reengage_sent_at = now(), updated_at = now() WHERE email = ${row.to_email}`;
      const sunsetAt = new Date(Date.now() + SUNSET_AFTER_DAYS * DAY);
      const at = await enqueue([{ kind: 'sunset', to: row.to_email, locale, sendAfter: sunsetAt, dedupeKey: `sunset-${row.dedupe_key}` }]);
      if (at !== null) await signalOutbox(at);
    },
  };
}

/** Fourteen days after "still want these?" with no answer: off the list, quietly. */
export async function prepareSunset(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const [s] = await sql`SELECT status, last_engaged_at, reengage_sent_at FROM newsletter_subscribers WHERE email = ${row.to_email}`;
  if (!s || s.status !== 'subscribed' || !s.reengage_sent_at) return null;
  if (millis(s.last_engaged_at) > millis(s.reengage_sent_at)) return null;
  return {
    action: async () => {
      const result = await unsubscribeContact(apiKey, row.to_email);
      if (!result.ok) throw new Error(result.error);
      await onUnsubscribed(row.to_email, 'sunset');
      await recordSiteEvent('unsubscribed_site', { email: row.to_email, locale: row.locale, source: 'sunset', apiKey });
      console.log(`[newsletter] sunset ${addressTag(apiKey, row.to_email)}`);
    },
  };
}

// ---------------------------------------------------------------------------------------
// Topics: our table, mirrored to Resend Topics when their ids are configured.

export function topicsOf(raw: unknown): Topics {
  const t = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  return { releases: t.releases !== false, tips: t.tips !== false, events: t.events !== false };
}

async function syncResendTopics(apiKey: string, env: Env, email: string, topics: Topics): Promise<void> {
  const updates = topicKeys
    .map((k) => ({ id: env[`RESEND_TOPIC_${k.toUpperCase()}`] ?? '', subscription: topics[k] ? 'opt_in' : 'opt_out' }))
    .filter((u) => u.id);
  if (!updates.length) return;
  const result = await resend(apiKey, `/contacts/${encodeURIComponent(email)}/topics`, { method: 'PATCH', body: updates });
  if (!result.ok) console.error(`[newsletter] topics ${addressTag(apiKey, email)}: ${result.error}`);
}

async function moveLanguage(apiKey: string, env: Env, email: string, from: EmailLocale, to: EmailLocale): Promise<void> {
  if (from === to) return;
  const [oldSeg] = newsletterSegments(env, from).filter((id) => id !== (env.RESEND_SEGMENT_ID ?? env.RESEND_AUDIENCE_ID ?? ''));
  const [newSeg] = newsletterSegments(env, to).filter((id) => id !== (env.RESEND_SEGMENT_ID ?? env.RESEND_AUDIENCE_ID ?? ''));
  const contact = `/contacts/${encodeURIComponent(email)}`;
  if (newSeg) await resend(apiKey, `${contact}/segments/${encodeURIComponent(newSeg)}`, { method: 'POST' });
  if (oldSeg) await resend(apiKey, `${contact}/segments/${encodeURIComponent(oldSeg)}`, { method: 'DELETE' });
}

const pageHeaders = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'same-origin',
  'Content-Security-Policy': "default-src 'none'; img-src 'self' https://www.outbrick.site; style-src 'unsafe-inline'; font-src 'self' https://www.outbrick.site; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
};
const page = (html: string, status = 200) => new Response(html, { status, headers: pageHeaders });

type Send = (apiKey: string, email: OutgoingEmail, key?: string) => ReturnType<typeof sendEmail>;

/** GET/POST /.netlify/functions/newsletter-preferences — see the header comment. */
export async function handlePreferences(req: Request, env: Env, send: Send = sendEmail): Promise<Response> {
  const url = new URL(req.url);
  const asked = url.searchParams.get('l');
  let locale: EmailLocale = isEmailLocale(asked) ? asked : 'en';
  if (req.method === 'HEAD') return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
  if (req.method !== 'GET' && req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, POST, HEAD' } });
  const apiKey = env.RESEND_API_KEY ?? '';
  if (!apiKey) return new Response('Unavailable', { status: 503 });
  if (req.method === 'POST') {
    const origin = req.headers.get('Origin');
    if (origin && origin !== 'null' && origin !== url.origin) return new Response('Forbidden', { status: 403 });
  }
  const self = `${url.pathname}${url.search}`;
  const c = lifecycleCopy[locale].preferences;

  // "Keep me on the list" from the re-engagement email.
  if (url.searchParams.has('keep')) {
    const v = verifySigned(url.searchParams, apiKey, 'keep');
    if (!v.ok) return page(simplePage(locale, c.askTitle, lifecycleCopy[locale].feedbackPage.expired), 410);
    // The tap itself is the answer, so GET records it too: a link scanner "keeping" someone
    // subscribed harms nobody, and asking for a second tap would lose real readers.
    const email = normalizeEmail(v.payload.e);
    if (email) await markEngaged(email);
    return page(simplePage(locale, c.kept, c.keptBody));
  }

  if (!url.searchParams.has('t')) {
    if (req.method === 'GET') return page(preferencesAskPage(locale, self));
    const form = await req.formData().catch(() => null);
    if (toText(form?.get('website'))) return page(preferencesAskPage(locale, self, true)); // honeypot
    const email = normalizeEmail(form?.get('email'));
    if (email && (await rateAllow(`prefs:ip:${ipHash(req)}`, 5, 3600)) && (await rateAllow(`prefs:to:${addressTag(apiKey, email)}`, 3, 86400))) {
      const s = await subscriber(email);
      if (s && reachable(s)) {
        const l = localeOf(s.locale);
        const r = preferencesLink({ locale: l, url: signedUrl(`${preferencesBase}?l=${l}`, apiKey, 'prefs', { e: email }, 7 * 86400) });
        const sent = await send(apiKey, { ...SENDERS.news, to: email, subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: 'newsletter-preferences-link' }, { name: 'locale', value: l }] });
        if (!sent.ok) console.error(`[newsletter] preferences link ${addressTag(apiKey, email)}: ${sent.error}`);
      }
    }
    // The same answer whether or not the address is on the list.
    return page(preferencesAskPage(locale, self, true));
  }

  const v = verifySigned(url.searchParams, apiKey, 'prefs');
  if (!v.ok) return page(simplePage(locale, c.askTitle, lifecycleCopy[locale].feedbackPage.expired, { href: preferencesAskUrl(locale), label: c.askSend }), 410);
  const email = normalizeEmail(v.payload.e);
  if (!email) return page(simplePage(locale, c.askTitle, lifecycleCopy[locale].feedbackPage.expired), 410);
  const s = await subscriber(email);
  const unsub = unsubscribeUrl(SITE, apiKey, email, s ? localeOf(s.locale) : locale);
  if (!s || s.status !== 'subscribed') return page(simplePage(locale, c.pageTitle, emailLocalesNote(locale), { href: `${SITE}/newsletter`, label: 'outbrick.site/newsletter' }));
  if (req.method === 'GET') return page(preferencesPage(localeOf(s.locale), self, topicsOf(s.topics), unsub));

  const form = await req.formData().catch(() => null);
  const topics: Topics = { releases: form?.get('releases') === 'yes', tips: form?.get('tips') === 'yes', events: form?.get('events') === 'yes' };
  const chosen = toText(form?.get('locale'));
  const newLocale: EmailLocale = isEmailLocale(chosen) ? chosen : localeOf(s.locale);
  await sql`UPDATE newsletter_subscribers SET topics = ${JSON.stringify(topics)}::jsonb, locale = ${newLocale}, last_engaged_at = now(), reengage_sent_at = NULL, updated_at = now() WHERE email = ${email}`;
  await cancelFor(email, ['sunset']);
  await recordSiteEvent('prefs_saved', { email, locale: newLocale, source: 'preferences', apiKey });
  await syncResendTopics(apiKey, env, email, topics);
  await moveLanguage(apiKey, env, email, localeOf(s.locale), newLocale);
  locale = newLocale;
  return page(preferencesPage(locale, self, topics, unsubscribeUrl(SITE, apiKey, email, locale), true));
}

function emailLocalesNote(locale: EmailLocale): string {
  return lifecycleCopy[locale].preferences.askSent;
}

// ---------------------------------------------------------------------------------------
// Release broadcasts: one Broadcast per language, recorded in `release_broadcasts` so that a
// Resend failure is retried rather than lost with the version already claimed. A draft is sent
// only with RELEASE_EMAIL_AUTOSEND=on, and only once its review window has passed.

export type StoreNotes = { locale: EmailLocale; version: string; releaseNotes: string };
export type ReleaseSummary = { created: string[]; sent: number; cancelled: number; failed: number; nextDue: number | null };

const RELEASE_MAX_ATTEMPTS = 6;
const RELEASE_CLAIM_MINUTES = 5;
const segmentVar = (l: EmailLocale) => `RESEND_SEGMENT_ID_${l === 'pt-BR' ? 'PT_BR' : l.toUpperCase()}`;

export const releaseAutosend = (env: Env) => (env.RELEASE_EMAIL_AUTOSEND ?? '').toLowerCase() === 'on';

/** Hours between a draft being made and it being sent automatically: 24 unless set (1 to 336). */
export function releaseDelayHours(env: Env): number {
  const n = Number(env.RELEASE_EMAIL_DELAY_HOURS);
  return env.RELEASE_EMAIL_DELAY_HOURS && Number.isFinite(n) && n >= 1 && n <= 336 ? n : 24;
}

function releaseTargets(env: Env): { locale: EmailLocale; segment: string }[] {
  const perLanguage = emailLocales.filter((l) => env[segmentVar(l)]);
  // Without per-language segments, one English draft goes to the whole list.
  return perLanguage.length
    ? perLanguage.map((l) => ({ locale: l, segment: env[segmentVar(l)] as string }))
    : [{ locale: 'en', segment: env.RESEND_SEGMENT_ID ?? env.RESEND_AUDIENCE_ID ?? '' }];
}

/**
 * Record what each language's draft should say (that storefront's own notes when it already
 * shows the version, else the English). Called inside the release bot's transaction, so the
 * version is never claimed without its email being owed. Returns the rows added.
 */
export async function recordReleaseBroadcasts(env: Env, version: string, notes: StoreNotes[], q?: Query): Promise<number> {
  const byLocale = new Map(notes.map((n) => [n.locale, n]));
  const english = byLocale.get('en');
  let added = 0;
  for (const { locale, segment } of releaseTargets(env)) {
    if (!segment) continue;
    const own = byLocale.get(locale);
    const n = own?.version === version && own.releaseNotes ? own : english;
    if (!n) continue;
    const text = `INSERT INTO release_broadcasts (version, locale, segment_id, notes) VALUES ($1, $2, $3, $4) ON CONFLICT (version, locale) DO NOTHING RETURNING version`;
    const params = [version, locale, segment, n.releaseNotes.slice(0, 8000)];
    const rows = q ? await q(text, params) : await sql`INSERT INTO release_broadcasts (version, locale, segment_id, notes) VALUES (${params[0]}, ${params[1]}, ${params[2]}, ${params[3]}) ON CONFLICT (version, locale) DO NOTHING RETURNING version`;
    added += rows.length;
  }
  return added;
}

/** Record and make the drafts at once (the release bot's path when it has no transaction to share). */
export async function createReleaseDrafts(apiKey: string, env: Env, version: string, notes: StoreNotes[], now = new Date()): Promise<string[]> {
  await recordReleaseBroadcasts(env, version, notes);
  const summary = await processReleaseBroadcasts(apiKey, env, now);
  if (summary.nextDue !== null) await signalOutbox(summary.nextDue);
  return summary.created;
}

type ReleaseRow = { version: string; locale: string; segment_id: string; notes: string; broadcast_id: string | null; attempts: number };

/** Claim due rows by pushing send_after past a lapse, so overlapping ticks never act twice. */
async function claimReleases(now: Date, drafted: boolean): Promise<ReleaseRow[]> {
  const at = now.toISOString();
  const lapse = new Date(now.getTime() + RELEASE_CLAIM_MINUTES * 60_000).toISOString();
  const rows = drafted
    ? await sql`UPDATE release_broadcasts SET send_after = ${lapse}::timestamptz
                 WHERE broadcast_id IS NOT NULL AND sent_at IS NULL AND cancelled_at IS NULL AND attempts < ${RELEASE_MAX_ATTEMPTS} AND send_after <= ${at}::timestamptz
                 RETURNING version, locale, segment_id, notes, broadcast_id, attempts::int`
    : await sql`UPDATE release_broadcasts SET send_after = ${lapse}::timestamptz
                 WHERE broadcast_id IS NULL AND sent_at IS NULL AND cancelled_at IS NULL AND attempts < ${RELEASE_MAX_ATTEMPTS} AND send_after <= ${at}::timestamptz
                 RETURNING version, locale, segment_id, notes, broadcast_id, attempts::int`;
  return rows as unknown as ReleaseRow[];
}

async function releaseFailed(row: ReleaseRow, now: Date, error: string): Promise<void> {
  const attempts = Number(row.attempts) + 1;
  const retry = new Date(now.getTime() + 15 * 60_000 * 2 ** (attempts - 1));
  await sql`UPDATE release_broadcasts SET attempts = ${attempts}, last_error = ${error.slice(0, 300)}, send_after = ${retry.toISOString()}::timestamptz
             WHERE version = ${row.version} AND locale = ${row.locale}`;
  console.error(`[newsletter] release ${row.version}/${row.locale} failed (attempt ${attempts}${attempts >= RELEASE_MAX_ATTEMPTS ? ', giving up' : ''}): ${error}`);
}

/** When the lifecycle tick next has release work: a draft to retry, or (autosend only) one to send. */
export async function releaseNextDue(env: Env): Promise<number | null> {
  const [row] = await sql`SELECT min(send_after) AS at FROM release_broadcasts
                           WHERE sent_at IS NULL AND cancelled_at IS NULL AND attempts < ${RELEASE_MAX_ATTEMPTS}
                             AND (broadcast_id IS NULL OR ${releaseAutosend(env)}::boolean)`;
  return row?.at ? millis(row.at) : null;
}

/**
 * The release step of the lifecycle tick: make the drafts still owed, tell the team, and with
 * RELEASE_EMAIL_AUTOSEND=on send the drafts whose review window has passed. A draft deleted in
 * Resend is cancelled; one a person already sent or scheduled there is recorded as sent.
 */
export async function processReleaseBroadcasts(apiKey: string, env: Env, now = new Date()): Promise<ReleaseSummary> {
  const summary: ReleaseSummary = { created: [], sent: 0, cancelled: 0, failed: 0, nextDue: null };
  const topic = env.RESEND_TOPIC_RELEASES ?? '';
  const autosend = releaseAutosend(env);
  const sendAt = new Date(now.getTime() + releaseDelayHours(env) * 3600_000);
  const made = new Map<string, string[]>();
  for (const row of await claimReleases(now, false)) {
    const locale = localeOf(row.locale);
    const r = releaseNews({ locale, version: row.version, notes: row.notes, unsubscribeUrl: '{{{RESEND_UNSUBSCRIBE_URL}}}', preferencesUrl: preferencesAskUrl(locale) });
    const result = await resend(apiKey, '/broadcasts', {
      idempotencyKey: `release-${row.version}-${locale}`,
      body: { segment_id: row.segment_id, ...(topic ? { topic_id: topic } : {}), from: SENDERS.news.from, reply_to: SENDERS.news.replyTo, subject: r.subject, html: tagLinks(r.html, `release-${row.version}`), text: r.text, name: `OutBrick ${row.version} · ${locale}`, send: false },
    });
    const id = toText(result.data?.id);
    if (!result.ok || !id) {
      await releaseFailed(row, now, result.error ?? 'Resend returned no broadcast id');
      summary.failed++;
      continue;
    }
    // The review window starts now that there is something to review.
    await sql`UPDATE release_broadcasts SET broadcast_id = ${id}, attempts = 0, last_error = NULL, send_after = ${sendAt.toISOString()}::timestamptz
               WHERE version = ${row.version} AND locale = ${row.locale}`;
    summary.created.push(`${locale}:${id}`);
    made.set(row.version, [...(made.get(row.version) ?? []), `${locale}:${id}`]);
  }
  for (const [version, created] of made) await releaseTeamEmail(apiKey, env, version, created, autosend ? sendAt : null);

  if (autosend) {
    for (const row of await claimReleases(now, true)) {
      const path = `/broadcasts/${encodeURIComponent(String(row.broadcast_id))}`;
      const current = await resend(apiKey, path, { method: 'GET' });
      if (current.status === 404) {
        // Deleting the draft in Resend is how the owner says "not this one".
        await sql`UPDATE release_broadcasts SET cancelled_at = now(), last_error = 'draft deleted in Resend' WHERE version = ${row.version} AND locale = ${row.locale}`;
        summary.cancelled++;
        continue;
      }
      if (!current.ok) {
        await releaseFailed(row, now, current.error ?? String(current.status));
        summary.failed++;
        continue;
      }
      const status = toText(current.data?.status) || 'draft';
      if (status !== 'draft') {
        await sql`UPDATE release_broadcasts SET sent_at = now(), last_error = ${`already ${status} in Resend`} WHERE version = ${row.version} AND locale = ${row.locale}`;
        continue;
      }
      const sent = await resend(apiKey, `${path}/send`, { idempotencyKey: `release-send-${row.version}-${row.locale}` });
      if (!sent.ok) {
        await releaseFailed(row, now, sent.error ?? String(sent.status));
        summary.failed++;
        continue;
      }
      await sql`UPDATE release_broadcasts SET sent_at = now(), last_error = NULL WHERE version = ${row.version} AND locale = ${row.locale}`;
      console.log(`[newsletter] release ${row.version}/${row.locale} sent automatically`);
      summary.sent++;
    }
  }
  summary.nextDue = await releaseNextDue(env);
  return summary;
}

async function releaseTeamEmail(apiKey: string, env: Env, version: string, created: string[], sendAt: Date | null): Promise<void> {
  const to = normalizeEmail(env.TEAM_INBOX) || 'news@outbrick.site';
  const list = created.join(', ');
  const when = sendAt
    ? `They will be sent automatically at ${sendAt.toISOString().replace('T', ' ').slice(0, 16)} UTC (RELEASE_EMAIL_AUTOSEND=on). To stop one, delete that draft in Resend before then; sending it yourself earlier is fine too.`
    : 'Nothing is sent automatically: review and send each one yourself.';
  const result = await sendEmail(
    apiKey,
    {
      ...SENDERS.newsTeam,
      to,
      subject: `Release email drafts ready: OutBrick ${version}`,
      html: `<p>The release bot saw OutBrick ${version.replace(/</g, '&lt;')} on the App Store and created ${created.length} Broadcast draft(s) in Resend: ${list.replace(/</g, '&lt;')}.</p><p>Review them at <a href="https://resend.com/broadcasts">resend.com/broadcasts</a>. ${when}</p>`,
      text: `The release bot saw OutBrick ${version} on the App Store and created ${created.length} Broadcast draft(s) in Resend: ${list}.\nReview them at https://resend.com/broadcasts. ${when}\n`,
      tags: [{ name: 'form', value: 'release-drafts-team' }],
    },
    `release-drafts-${version}-${created.map((c) => c.split(':')[0]).join('-')}`.slice(0, 256),
  );
  if (!result.ok) console.error(`[newsletter] release team email ${version}: ${result.error}`);
}

// ---------------------------------------------------------------------------------------
// Readers who confirmed before this table existed live only in Resend. Once, they are copied in
// (welcome series already done, engagement clock starting at the import), so "still want
// these?" can include them 120 days later. Idempotent: existing rows are left alone.

type ContactPage = { data?: { id: string; email: string; unsubscribed?: boolean }[]; has_more?: boolean };

async function listSegment(apiKey: string, segmentId: string): Promise<{ email: string; unsubscribed: boolean }[]> {
  const out: { email: string; unsubscribed: boolean }[] = [];
  let after = '';
  for (let page = 0; page < 200; page++) {
    const q = new URLSearchParams({ segment_id: segmentId, limit: '100', ...(after ? { after } : {}) });
    const r = await resend(apiKey, `/contacts?${q.toString()}`, { method: 'GET' });
    if (!r.ok) throw new Error(r.error);
    const body = r.data as ContactPage | null;
    const rows = body?.data ?? [];
    for (const c of rows) out.push({ email: c.email.toLowerCase(), unsubscribed: Boolean(c.unsubscribed) });
    if (!body?.has_more || !rows.length) break;
    after = rows[rows.length - 1].id;
  }
  return out;
}

export async function backfillSubscribers(apiKey: string, env: Env): Promise<number> {
  const main = env.RESEND_SEGMENT_ID ?? env.RESEND_AUDIENCE_ID ?? '';
  if (!main) return 0;
  const localeOfEmail = new Map<string, EmailLocale>();
  for (const l of emailLocales) {
    const seg = env[`RESEND_SEGMENT_ID_${l === 'pt-BR' ? 'PT_BR' : l.toUpperCase()}`];
    if (seg && seg !== main) for (const c of await listSegment(apiKey, seg)) localeOfEmail.set(c.email, l);
  }
  let added = 0;
  for (const c of await listSegment(apiKey, main)) {
    const email = normalizeEmail(c.email);
    if (!email) continue;
    const rows = await sql`
      INSERT INTO newsletter_subscribers (email, locale, status, welcome_step, last_engaged_at)
      VALUES (${email}, ${localeOfEmail.get(email) ?? 'en'}, ${c.unsubscribed ? 'unsubscribed' : 'subscribed'}, 3, now())
      ON CONFLICT (email) DO NOTHING RETURNING email`;
    added += rows.length;
  }
  return added;
}

/** Daily retention, as the privacy policy states it. */
export async function applyRetention(): Promise<void> {
  await sql`DELETE FROM support_cases WHERE status IN ('resolved','closed') AND updated_at < now() - interval '24 months'`;
  await sql`DELETE FROM applications WHERE status IN ('approved','next_step','declined') AND COALESCE(decided_at, updated_at) < now() - interval '24 months'`;
  await sql`DELETE FROM newsletter_subscribers WHERE status <> 'subscribed' AND updated_at < now() - interval '30 days'`;
}
