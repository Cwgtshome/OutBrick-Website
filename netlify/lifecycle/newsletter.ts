// The newsletter's lifecycle on top of Resend's list (emails/newsletter.ts keeps the list itself):
//
//   - onConfirmed: a confirmed reader is recorded and the welcome series' letters 2 and 3 are
//     queued for days 3 and 10 (the first goes out with the confirmation);
//   - onUnsubscribed: anything still queued for that address is cancelled;
//   - the preferences page (netlify/functions/newsletter-preferences.mts): without a token it asks
//     for the address and emails a signed link; with one it shows the topics and the language;
//     saved topics also reach Resend Topics when RESEND_TOPIC_<RELEASES|TIPS|EVENTS> are set;
//   - "still want these?" (sweepReengagement, daily): only while NEWSLETTER_ENGAGEMENT_TRACKING=on,
//     i.e. once Resend's opened/clicked webhook feeds last_engaged_at. Without it, nobody is
//     asked and nobody is removed, because silence would be indistinguishable from not reading.
//     A reader who doesn't answer in 14 days is unsubscribed (status 'sunset');
//   - release drafts (createReleaseDrafts): the release bot calls it with each storefront's notes
//     and it creates one Broadcast draft per language in Resend, for a person to review and send.

import { ipHash, rateAllow, sql } from '../community/db.ts';
import { SITE } from '../community/http.ts';
import { emailLocales, isEmailLocale, type EmailLocale } from '../../emails/i18n.ts';
import { addressTag, normalizeEmail, signedUrl, unsubscribeUrl, verifySigned } from '../../emails/links.ts';
import { preferencesAskPage, preferencesLink, preferencesPage, reengage, releaseNews, simplePage, topicKeys, welcomeBoards, welcomeFriends, type Topics } from '../../emails/lifecycle.ts';
import { lifecycleCopy } from '../../emails/lifecycle-i18n.ts';
import { toText } from '../../emails/core.ts';

const millis = (v: unknown) => (v instanceof Date ? v.getTime() : Date.parse(toText(v)));
import { listUnsubscribeHeaders } from '../../emails/newsletter.ts';
import { SENDERS, newsletterSegments, resend, sendEmail, unsubscribeContact, type OutgoingEmail } from '../../emails/resend.ts';
import { cancelFor, enqueue, signalOutbox, type Prepared, type Row as OutboxRow } from './outbox.ts';

type Env = Record<string, string | undefined>;
const DAY = 86400_000;
export const WELCOME_DAYS = { 'welcome-2': 3, 'welcome-3': 10 } as const;
export const REENGAGE_AFTER_DAYS = 120;
export const SUNSET_AFTER_DAYS = 14;
const PREFS_LINK_DAYS = 30;
const newsKinds = ['welcome-2', 'welcome-3', 'reengage', 'sunset'] as const;

export const preferencesBase = `${SITE}/.netlify/functions/newsletter-preferences`;
export const preferencesUrl = (apiKey: string, email: string, locale: EmailLocale) => signedUrl(`${preferencesBase}?l=${locale}`, apiKey, 'prefs', { e: email }, PREFS_LINK_DAYS * 86400);
/** For Broadcasts, which can't sign per reader: the page that emails a link. */
export const preferencesAskUrl = (locale: EmailLocale) => `${preferencesBase}?l=${locale}`;

export async function onConfirmed(email: string, locale: EmailLocale, now = new Date()): Promise<void> {
  await sql`
    INSERT INTO newsletter_subscribers (email, locale, status, confirmed_at, welcome_step, last_engaged_at, reengage_sent_at)
    VALUES (${email}, ${locale}, 'subscribed', now(), 1, now(), NULL)
    ON CONFLICT (email) DO UPDATE SET locale = EXCLUDED.locale, status = 'subscribed', last_engaged_at = now(), reengage_sent_at = NULL, updated_at = now()`;
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

export async function onUnsubscribed(email: string, status: 'unsubscribed' | 'sunset' = 'unsubscribed'): Promise<void> {
  await sql`UPDATE newsletter_subscribers SET status = ${status}, updated_at = now() WHERE email = ${email}`;
  await cancelFor(email, [...newsKinds]);
}

/** A click or open (from the webhook), a "keep me" tap, or saved preferences. */
export async function markEngaged(email: string): Promise<void> {
  await sql`UPDATE newsletter_subscribers SET last_engaged_at = now(), reengage_sent_at = NULL, updated_at = now() WHERE email = ${email} AND status = 'subscribed'`;
  await cancelFor(email, ['sunset']);
}

async function subscriber(email: string) {
  const [row] = await sql`SELECT email, locale, status, topics, welcome_step FROM newsletter_subscribers WHERE email = ${email}`;
  return row ?? null;
}

const localeOf = (v: unknown): EmailLocale => (isEmailLocale(v) ? v : 'en');

function newsEmail(apiKey: string, to: string, locale: EmailLocale, r: { subject: string; html: string; text: string }, form: string): OutgoingEmail {
  const unsub = unsubscribeUrl(SITE, apiKey, to, locale);
  return { ...SENDERS.news, to, subject: r.subject, html: r.html, text: r.text, headers: listUnsubscribeHeaders(unsub), tags: [{ name: 'form', value: form }, { name: 'locale', value: locale }] };
}

export async function prepareWelcome(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const s = await subscriber(row.to_email);
  if (!s || s.status !== 'subscribed') return null;
  const locale = localeOf(s.locale);
  const step = row.kind === 'welcome-2' ? 2 : 3;
  const links = { locale, unsubscribeUrl: unsubscribeUrl(SITE, apiKey, row.to_email, locale), preferencesUrl: preferencesUrl(apiKey, row.to_email, locale) };
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
                          WHERE status = 'subscribed' AND reengage_sent_at IS NULL AND last_engaged_at < ${cutoff}::timestamptz AND confirmed_at < ${cutoff}::timestamptz
                          ORDER BY last_engaged_at LIMIT 200`;
  const stamp = now.toISOString().slice(0, 10);
  const at = await enqueue(rows.map((r) => ({ kind: 'reengage' as const, to: String(r.email), locale: String(r.locale), dedupeKey: `reengage-${toText(r.email)}-${stamp}` })));
  if (at !== null) await signalOutbox(at);
  return rows.length;
}

export async function prepareReengage(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const s = await subscriber(row.to_email);
  if (!s || s.status !== 'subscribed') return null;
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
      if (s && s.status === 'subscribed') {
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
  await syncResendTopics(apiKey, env, email, topics);
  await moveLanguage(apiKey, env, email, localeOf(s.locale), newLocale);
  locale = newLocale;
  return page(preferencesPage(locale, self, topics, unsubscribeUrl(SITE, apiKey, email, locale), true));
}

function emailLocalesNote(locale: EmailLocale): string {
  return lifecycleCopy[locale].preferences.askSent;
}

// ---------------------------------------------------------------------------------------
// Release drafts: one Broadcast per language, never sent automatically.

export type StoreNotes = { locale: EmailLocale; version: string; releaseNotes: string };

export async function createReleaseDrafts(apiKey: string, env: Env, version: string, notes: StoreNotes[]): Promise<string[]> {
  const created: string[] = [];
  const topic = env.RESEND_TOPIC_RELEASES ?? '';
  const byLocale = new Map(notes.map((n) => [n.locale, n]));
  const english = byLocale.get('en');
  const perLanguage = emailLocales.filter((l) => env[`RESEND_SEGMENT_ID_${l === 'pt-BR' ? 'PT_BR' : l.toUpperCase()}`]);
  // Without per-language segments, one English draft goes to the whole list.
  const targets: { locale: EmailLocale; segment: string }[] = perLanguage.length
    ? perLanguage.map((l) => ({ locale: l, segment: env[`RESEND_SEGMENT_ID_${l === 'pt-BR' ? 'PT_BR' : l.toUpperCase()}`] as string }))
    : [{ locale: 'en', segment: env.RESEND_SEGMENT_ID ?? env.RESEND_AUDIENCE_ID ?? '' }];
  for (const { locale, segment } of targets) {
    if (!segment) continue;
    const n = byLocale.get(locale)?.version === version ? byLocale.get(locale)! : english;
    if (!n) continue;
    const r = releaseNews({ locale, version, notes: n.releaseNotes, unsubscribeUrl: '{{{RESEND_UNSUBSCRIBE_URL}}}', preferencesUrl: preferencesAskUrl(locale) });
    const result = await resend(apiKey, '/broadcasts', {
      idempotencyKey: `release-${version}-${locale}`,
      body: { segment_id: segment, ...(topic ? { topic_id: topic } : {}), from: SENDERS.news.from, reply_to: SENDERS.news.replyTo, subject: r.subject, html: r.html, text: r.text, name: `OutBrick ${version} · ${locale}`, send: false },
    });
    if (result.ok) created.push(`${locale}:${toText(result.data?.id) || '?'}`);
    else console.error(`[newsletter] release draft ${version}/${locale}: ${result.error}`);
  }
  if (created.length) {
    const to = normalizeEmail(env.TEAM_INBOX) || 'news@outbrick.site';
    await sendEmail(
      apiKey,
      {
        ...SENDERS.newsTeam,
        to,
        subject: `Release email drafts ready: OutBrick ${version}`,
        html: `<p>The release bot saw OutBrick ${version} on the App Store and created ${created.length} Broadcast draft(s) in Resend: ${created.map((c) => c.replace(/</g, '&lt;')).join(', ')}.</p><p>Review and send them at <a href="https://resend.com/broadcasts">resend.com/broadcasts</a>. Nothing is sent automatically.</p>`,
        text: `The release bot saw OutBrick ${version} on the App Store and created ${created.length} Broadcast draft(s) in Resend: ${created.join(', ')}.\nReview and send them at https://resend.com/broadcasts. Nothing is sent automatically.\n`,
        tags: [{ name: 'form', value: 'release-drafts-team' }],
      },
      `release-drafts-${version}`,
    );
  }
  return created;
}
