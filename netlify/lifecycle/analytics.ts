// Email analytics: what happened to the email we send, and to the newsletter's sign-ups.
//
//   - capture: netlify/functions/resend-events.mts hands every Resend webhook event here
//     (recordWebhookEvent): each email.* event, with the send's `form` and `locale` tags, the
//     Resend email id and, for a Broadcast, its id; and a contact.updated that unsubscribed.
//     The site's own newsletter milestones (signup, confirmed, unsubscribed_site, prefs_saved)
//     are written by the handlers where they happen (recordSiteEvent). A 'confirmed' row that
//     started the welcome series carries the reader's group (cohort: treatment or holdout), and
//     a 'prefs_saved' row the choices saved (detail: topics, frequency, pause), never the reader;
//   - privacy: no address is stored. address_hash is an HMAC (emails/links.ts analyticsHash)
//     that only counts unique readers; a clicked link keeps its host, path and utm_* tags and
//     drops everything else, so signed-link parameters never reach the table. Rows go after
//     400 days (pruneEmailEvents, from the daily sweep);
//   - report: GET /api/community/admin/email?days=7|30|90, admins only, returns aggregates
//     computed in SQL (emailReport) for the "Email" panel of /community/admin, including the
//     welcome-series hold-back comparison (holdbackReport), followed by address hash only.
//
// Opens are approximate: Apple Mail Privacy Protection and some security scanners fetch
// images for every message, so the report leads with clicks.

import type { EmailReport, EmailReportWindow } from '../../lib/community/admin-contract.ts';
import { sql } from '../community/db.ts';
import { json, type Route } from '../community/http.ts';
import { requireRole } from '../community/session.ts';
import { toText } from '../../emails/core.ts';
import { analyticsHash, normalizeEmail } from '../../emails/links.ts';

export const EMAIL_EVENT_TYPES = ['sent', 'delivered', 'delivery_delayed', 'opened', 'clicked', 'bounced', 'complained', 'suppressed', 'failed', 'unsubscribed'] as const;
export type SiteEventType = 'signup' | 'confirmed' | 'unsubscribed_site' | 'prefs_saved';
export const RETENTION_DAYS = 400;
export const REPORT_WINDOWS: EmailReportWindow[] = [7, 30, 90];

/**
 * The share of new newsletter readers held back from welcome letters 2 and 3 (newsletter.ts
 * onConfirmed), and shown beside the report's comparison: 10 unless NEWSLETTER_HOLDOUT_PERCENT
 * says otherwise (0 to 50; 0 switches the hold-back off).
 */
export function holdoutPercent(env: Record<string, string | undefined>): number {
  const raw = env.NEWSLETTER_HOLDOUT_PERCENT;
  const n = Number(raw);
  return raw !== undefined && raw !== '' && Number.isFinite(n) && n >= 0 && n <= 50 ? n : 10;
}

const clip = (v: unknown, max: number): string | null => {
  const s = toText(v).trim();
  return s ? s.slice(0, max) : null;
};

/** A link as analytics keeps it: scheme, host and path, plus utm_* tags; anything else is dropped. */
export function cleanLink(raw: unknown): string | null {
  const text = toText(raw).trim();
  if (!text) return null;
  try {
    const url = new URL(text);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
    const kept = new URLSearchParams();
    for (const [key, value] of url.searchParams) if (/^utm_[a-z]{1,20}$/.test(key)) kept.append(key, value.slice(0, 100));
    const query = kept.toString();
    return `${url.origin}${url.pathname}${query ? `?${query}` : ''}`.slice(0, 500);
  } catch {
    return null;
  }
}

/** A tag from a webhook payload: Resend sends them as { name: value }, the API takes [{ name, value }]. */
export function tagOf(tags: unknown, name: string): string | null {
  if (Array.isArray(tags)) {
    const found = tags.find((t) => t && typeof t === 'object' && (t as Record<string, unknown>).name === name) as Record<string, unknown> | undefined;
    return clip(found?.value, 80);
  }
  if (tags && typeof tags === 'object') return clip((tags as Record<string, unknown>)[name], 80);
  return null;
}

const firstAddress = (value: unknown): string | null => {
  const first: unknown = Array.isArray(value) ? value[0] : value;
  return normalizeEmail(toText(first).replace(/^.*<([^>]+)>.*$/, '$1'));
};

const hashOf = (apiKey: string | undefined, email: string | null | undefined) => (apiKey && email ? analyticsHash(apiKey, email) : null);

function when(v: unknown): string {
  const at = new Date(toText(v));
  return Number.isFinite(at.getTime()) ? at.toISOString() : new Date().toISOString();
}

/**
 * Record one Resend webhook event. Returns whether a row was written. A redelivery (same
 * svix-id) writes nothing; events that are not about our sent email (inbound mail, contact
 * changes other than an unsubscribe) are skipped.
 */
export async function recordWebhookEvent(event: { type?: unknown; created_at?: unknown; data?: Record<string, unknown> }, svixId: string, apiKey?: string): Promise<boolean> {
  const name = toText(event.type);
  const data = event.data && typeof event.data === 'object' ? event.data : {};
  let type: string | null = null;
  let email: string | null = null;
  if (name.startsWith('email.') && (EMAIL_EVENT_TYPES as readonly string[]).includes(name.slice(6)) && name !== 'email.unsubscribed') {
    type = name.slice(6);
    email = firstAddress(data.to);
  } else if (name === 'contact.updated' && data.unsubscribed === true) {
    type = 'unsubscribed';
    email = normalizeEmail(data.email);
  }
  if (!type) return false;
  const click = data.click && typeof data.click === 'object' ? (data.click as Record<string, unknown>) : {};
  const rows = await sql`
    INSERT INTO email_events (type, resend_email_id, broadcast_id, form, locale, link_url, address_hash, occurred_at, svix_id)
    VALUES (${type}, ${clip(data.email_id, 100)}, ${clip(data.broadcast_id, 100)},
            ${tagOf(data.tags, 'form') ?? (type === 'unsubscribed' ? 'newsletter' : null)}, ${tagOf(data.tags, 'locale')?.slice(0, 10) ?? null},
            ${type === 'clicked' ? cleanLink(click.link) : null}, ${hashOf(apiKey, email)},
            ${when(event.created_at ?? data.created_at)}::timestamptz, ${svixId ? svixId.slice(0, 200) : null})
    ON CONFLICT (svix_id) DO NOTHING RETURNING id`;
  return rows.length > 0;
}

/**
 * A newsletter milestone that happens on our side. Best effort: analytics never fails the
 * handler that called it.
 */
export async function recordSiteEvent(
  type: SiteEventType,
  opts: { email?: string | null; locale?: string | null; source?: string | null; apiKey?: string; form?: string; cohort?: 'treatment' | 'holdout' | null; detail?: Record<string, unknown> | null } = {},
): Promise<void> {
  try {
    const cohort = type === 'confirmed' && opts.cohort ? opts.cohort : null;
    const detail = type === 'prefs_saved' && opts.detail ? JSON.stringify(opts.detail).slice(0, 500) : null;
    await sql`INSERT INTO email_events (type, form, locale, source, address_hash, cohort, detail)
              VALUES (${type}, ${opts.form ?? 'newsletter'}, ${clip(opts.locale, 10)}, ${clip(opts.source, 300)}, ${hashOf(opts.apiKey ?? process.env.RESEND_API_KEY, opts.email)},
                      ${cohort}, ${detail}::jsonb)`;
  } catch (error) {
    console.error(`[analytics] ${type}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function pruneEmailEvents(): Promise<void> {
  await sql`DELETE FROM email_events WHERE occurred_at < now() - make_interval(days => ${RETENTION_DAYS})`;
}

// ---------------------------------------------------------------------------------------
// The report. Every number is an aggregate; nothing identifying leaves the database.

// Readers are counted once by address hash (else email id); messages once by email id. Clicks
// on an unsubscribe link are reported apart from engagement clicks.
const n = (v: unknown) => Number(v ?? 0) || 0;
const s = (v: unknown) => toText(v);
const isoOrNull = (v: unknown) => (v instanceof Date ? v.toISOString() : v ? new Date(toText(v)).toISOString() : null);

// Emails that are not "a later letter" for the hold-back comparison: the welcome series itself
// (which is what differs between the groups), the confirmation request, the preferences link
// and "still want these?". Everything else from news@, and every Broadcast, counts.
const NOT_LATER_LETTERS = ['newsletter-welcome', 'newsletter-welcome-2', 'newsletter-welcome-3', 'newsletter-confirm', 'newsletter-preferences-link', 'newsletter-reengage'];

/**
 * The welcome series against its hold-back group, over every reader whose confirmation carried a
 * group (since the hold-back began; the period selector does not apply). A reader "left" at
 * their first unsubscribe, complaint, bounce or suppression on newsletter mail after joining;
 * "still subscribed at 30 days" is counted only over readers who joined at least 30 days ago
 * (likewise 60). Clicks are on later letters and Broadcasts, unsubscribe links excluded, over
 * the readers those letters reached.
 */
export async function holdbackReport(percent: number, now = new Date()): Promise<EmailReport['holdback']> {
  const at = now.toISOString();
  const later = NOT_LATER_LETTERS.join(',');
  const rows = await sql`
    WITH members AS (
      SELECT DISTINCT ON (address_hash) address_hash, cohort, occurred_at AS joined
        FROM email_events WHERE type = 'confirmed' AND cohort IS NOT NULL AND address_hash IS NOT NULL
       ORDER BY address_hash, occurred_at
    ), departures AS (
      SELECT m.address_hash, min(e.occurred_at) AS left_at
        FROM members m JOIN email_events e ON e.address_hash = m.address_hash AND e.occurred_at >= m.joined
       WHERE e.type IN ('unsubscribed','unsubscribed_site')
          OR (e.type IN ('bounced','complained','suppressed') AND (e.form LIKE 'newsletter%' OR e.broadcast_id IS NOT NULL))
       GROUP BY 1
    ), letters AS (
      SELECT m.address_hash,
             bool_or(e.type = 'delivered') AS reached,
             bool_or(e.type = 'clicked' AND NOT (COALESCE(e.link_url, '') ILIKE '%unsubscribe%')) AS clicked
        FROM members m JOIN email_events e ON e.address_hash = m.address_hash AND e.occurred_at > m.joined
       WHERE e.type IN ('delivered','clicked')
         AND (e.broadcast_id IS NOT NULL OR (e.form LIKE 'newsletter%' AND NOT (e.form = ANY(string_to_array(${later}::text, ',')))))
       GROUP BY 1
    )
    SELECT m.cohort,
           count(*) AS readers,
           count(*) FILTER (WHERE m.joined <= ${at}::timestamptz - interval '30 days') AS due30,
           count(*) FILTER (WHERE m.joined <= ${at}::timestamptz - interval '30 days' AND (d.left_at IS NULL OR d.left_at > m.joined + interval '30 days')) AS kept30,
           count(*) FILTER (WHERE m.joined <= ${at}::timestamptz - interval '60 days') AS due60,
           count(*) FILTER (WHERE m.joined <= ${at}::timestamptz - interval '60 days' AND (d.left_at IS NULL OR d.left_at > m.joined + interval '60 days')) AS kept60,
           count(d.left_at) AS left_list,
           count(*) FILTER (WHERE l.reached) AS reached,
           count(*) FILTER (WHERE l.clicked) AS clicked
      FROM members m LEFT JOIN departures d USING (address_hash) LEFT JOIN letters l USING (address_hash)
     GROUP BY m.cohort`;
  const group = (name: 'treatment' | 'holdout') => {
    const r = rows.find((x) => x.cohort === name);
    return {
      group: name,
      readers: n(r?.readers),
      at30: { eligible: n(r?.due30), stillSubscribed: n(r?.kept30) },
      at60: { eligible: n(r?.due60), stillSubscribed: n(r?.kept60) },
      left: n(r?.left_list),
      reachedByLaterLetters: n(r?.reached),
      clickedLaterLetters: n(r?.clicked),
    };
  };
  return { percent, groups: [group('treatment'), group('holdout')] };
}

export async function emailReport(days: EmailReportWindow, now = new Date(), opts: { holdoutPercent?: number } = {}): Promise<EmailReport> {
  const since = new Date(now.getTime() - days * 86400_000).toISOString();
  const [funnel] = await sql`
    SELECT count(DISTINCT COALESCE(address_hash, id::text)) FILTER (WHERE type = 'signup') AS signups,
           count(DISTINCT COALESCE(address_hash, id::text)) FILTER (WHERE type = 'confirmed') AS confirmed,
           count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'delivered' AND form = 'newsletter-welcome-2') AS welcome2,
           count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'delivered' AND form = 'newsletter-welcome-3') AS welcome3,
           count(DISTINCT COALESCE(address_hash, resend_email_id, id::text)) FILTER (
             WHERE type IN ('unsubscribed','unsubscribed_site')
                OR (type IN ('bounced','complained','suppressed') AND (form LIKE 'newsletter%' OR broadcast_id IS NOT NULL))) AS left_list
      FROM email_events WHERE occurred_at >= ${since}::timestamptz`;
  const [list] = await sql`
    SELECT count(*) FILTER (WHERE status = 'subscribed' AND suppressed_at IS NULL) AS size,
           count(*) FILTER (WHERE status = 'subscribed' AND suppressed_at IS NULL AND COALESCE(consent_at, confirmed_at) >= ${since}::timestamptz) AS still
      FROM newsletter_subscribers`;
  const templates = await sql`
    SELECT COALESCE(form, CASE WHEN broadcast_id IS NOT NULL THEN 'broadcast' ELSE 'untagged' END) AS template,
           count(*) FILTER (WHERE type = 'sent') AS sent,
           count(*) FILTER (WHERE type = 'delivered') AS delivered,
           count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'opened') AS opens,
           count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'clicked' AND NOT (link_url ILIKE '%unsubscribe%')) AS clicks,
           count(*) FILTER (WHERE type = 'bounced') AS bounced,
           count(*) FILTER (WHERE type = 'complained') AS complained,
           count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'clicked' AND link_url ILIKE '%unsubscribe%') AS unsub_clicks
      FROM email_events
     WHERE occurred_at >= ${since}::timestamptz
       AND type IN ('sent','delivered','delivery_delayed','opened','clicked','bounced','complained','suppressed','failed')
     GROUP BY 1 ORDER BY count(*) FILTER (WHERE type = 'sent') DESC, 1 LIMIT 60`;
  const locales = await sql`
    SELECT COALESCE(locale, 'unknown') AS locale,
           count(*) FILTER (WHERE type = 'sent') AS sent,
           count(*) FILTER (WHERE type = 'delivered') AS delivered,
           count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'opened') AS opens,
           count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'clicked' AND NOT (link_url ILIKE '%unsubscribe%')) AS clicks,
           count(DISTINCT COALESCE(address_hash, id::text)) FILTER (WHERE type = 'signup') AS signups,
           count(DISTINCT COALESCE(address_hash, id::text)) FILTER (WHERE type = 'confirmed') AS confirmed
      FROM email_events WHERE occurred_at >= ${since}::timestamptz
     GROUP BY 1 ORDER BY 2 DESC, 1`;
  const links = await sql`
    SELECT split_part(link_url, '?', 1) AS path,
           COALESCE(substring(link_url from '[?&]utm_campaign=([^&]*)'), '') AS campaign,
           count(*) AS clicks,
           count(DISTINCT COALESCE(address_hash, resend_email_id, id::text)) AS clickers
      FROM email_events
     WHERE type = 'clicked' AND link_url IS NOT NULL AND occurred_at >= ${since}::timestamptz
     GROUP BY 1, 2 ORDER BY 3 DESC, 1 LIMIT 20`;
  const releases = await sql`
    SELECT r.version, r.locale, r.broadcast_id, r.created_at, r.send_after, r.sent_at, r.cancelled_at,
           e.delivered, e.opens, e.clicks, e.bounced, e.complained
      FROM release_broadcasts r
      LEFT JOIN LATERAL (
        SELECT count(*) FILTER (WHERE type = 'delivered') AS delivered,
               count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'opened') AS opens,
               count(DISTINCT COALESCE(resend_email_id, address_hash, id::text)) FILTER (WHERE type = 'clicked' AND NOT (link_url ILIKE '%unsubscribe%')) AS clicks,
               count(*) FILTER (WHERE type = 'bounced') AS bounced,
               count(*) FILTER (WHERE type = 'complained') AS complained
          FROM email_events WHERE r.broadcast_id IS NOT NULL AND broadcast_id = r.broadcast_id) e ON true
     ORDER BY r.created_at DESC, r.locale LIMIT 30`;
  const joined = n(funnel?.confirmed);
  const left = n(funnel?.left_list);
  const holdback = await holdbackReport(opts.holdoutPercent ?? holdoutPercent(process.env), now);
  return {
    days,
    since,
    generatedAt: now.toISOString(),
    funnel: { signups: n(funnel?.signups), confirmed: joined, welcome2: n(funnel?.welcome2), welcome3: n(funnel?.welcome3), stillSubscribed: n(list?.still) },
    list: { size: n(list?.size), joined, left, net: joined - left },
    templates: templates.map((r) => ({
      template: s(r.template),
      sent: n(r.sent),
      delivered: n(r.delivered),
      uniqueOpens: n(r.opens),
      uniqueClicks: n(r.clicks),
      bounced: n(r.bounced),
      complained: n(r.complained),
      unsubscribeClicks: n(r.unsub_clicks),
    })),
    locales: locales.map((r) => ({ locale: s(r.locale), sent: n(r.sent), delivered: n(r.delivered), uniqueOpens: n(r.opens), uniqueClicks: n(r.clicks), signups: n(r.signups), confirmed: n(r.confirmed) })),
    links: links.map((r) => ({ path: s(r.path), campaign: s(r.campaign), clicks: n(r.clicks), uniqueClickers: n(r.clickers) })),
    releases: releases.map((r) => ({
      version: s(r.version),
      locale: s(r.locale),
      state: r.cancelled_at ? 'cancelled' : r.sent_at ? 'sent' : r.broadcast_id ? 'draft' : 'pending',
      createdAt: isoOrNull(r.created_at) ?? '',
      sendAfter: r.broadcast_id && !r.sent_at && !r.cancelled_at ? isoOrNull(r.send_after) : null,
      sentAt: isoOrNull(r.sent_at),
      delivered: n(r.delivered),
      uniqueOpens: n(r.opens),
      uniqueClicks: n(r.clicks),
      bounced: n(r.bounced),
      complained: n(r.complained),
    })),
    holdback,
  };
}

export const getEmailReport: Route['run'] = async (req) => {
  await requireRole(req, 'admin');
  const asked = Number(new URL(req.url).searchParams.get('days'));
  const days = (REPORT_WINDOWS as number[]).includes(asked) ? (asked as EmailReportWindow) : 30;
  return json(await emailReport(days));
};

export const analyticsRoutes = (base: string): Route[] => [{ method: 'GET', pattern: `${base}/admin/email`, run: getEmailReport }];
