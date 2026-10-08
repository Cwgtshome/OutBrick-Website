/**
 * Google Analytics 4 for the website, behind a consent banner. The one place the measurement ID
 * is read and checked.
 *
 * The ID comes from the build-time environment variable `GA_MEASUREMENT_ID` (G-XXXXXXXXXX).
 * scripts/prebuild.mjs copies it into lib/generated/analytics.json, because pages are prerendered
 * in the Workers runtime, where the build's `process.env` is not visible. When it is unset or
 * malformed, `gaMeasurementId` is null and the site renders no analytics code at all: no consent
 * defaults, no banner, and scripts/postbuild.mjs takes Google's origins back out of the CSP.
 *
 * With an ID, the page head sets Google Consent Mode v2 defaults (everything denied) into the
 * dataLayer. That is a local array: nothing is requested from Google. gtag.js is fetched only
 * after the visitor presses Accept in the banner (app/components/consent-banner.tsx).
 */

import generated from './generated/analytics.json';

/** A GA4 web stream's measurement ID: "G-" and its upper-case letters and digits. */
const MEASUREMENT_ID = /^G-[A-Z0-9]{6,16}$/;

export function validMeasurementId(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const id = raw.trim().toUpperCase();
  return MEASUREMENT_ID.test(id) ? id : null;
}

export const gaMeasurementId: string | null = validMeasurementId((generated as { measurementId?: unknown }).measurementId);

/** The localStorage key and record version of the visitor's answer. */
export const CONSENT_KEY = 'ob-consent';
export const CONSENT_VERSION = 1;
/** An answer is asked for again after twelve months. */
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

/**
 * The gtag `config` for the stream. GA4 never logs IP addresses, so there is no anonymize_ip.
 * The page view is sent by the banner script itself, with a cleaned address (see `cleanLocation`
 * in the banner), so `send_page_view` is off; turn off "Page changes based on browser history
 * events" in the stream's enhanced measurement settings so the community's in-page navigation
 * is not counted twice.
 */
export const gaConfig = {
  send_page_view: false,
  allow_google_signals: false,
  allow_ad_personalization_signals: false,
  cookie_expires: 34190000,
  cookie_flags: 'SameSite=Lax;Secure',
} as const;

/**
 * The inline head script: Consent Mode v2 defaults, before anything else can call gtag.
 * `wait_for_update` gives the banner half a second to apply a stored "granted".
 */
export function consentDefaultsScript(): string {
  return (
    'window.dataLayer=window.dataLayer||[];' +
    'function gtag(){window.dataLayer.push(arguments)}window.gtag=window.gtag||gtag;' +
    "gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});"
  );
}
