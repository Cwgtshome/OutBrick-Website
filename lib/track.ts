/**
 * Report a site event to analytics, if the visitor has accepted analytics.
 *
 * Components call this without knowing whether analytics exists: it only dispatches a DOM event.
 * The consent banner (app/components/consent-banner.tsx) forwards it to Google Analytics when,
 * and only when, a measurement ID is configured and the visitor pressed Accept. Otherwise the
 * event goes nowhere. Parameters must never carry personal data (no email, no message text).
 */
export type TrackParams = Record<string, string | number | boolean | undefined>;

export const TRACK_EVENT = 'ob:track';

export function track(name: string, params: TrackParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(TRACK_EVENT, { detail: { name, params } }));
}
