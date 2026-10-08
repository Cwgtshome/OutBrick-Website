'use client';

/**
 * The analytics consent banner, and the only code that ever talks to Google Analytics.
 *
 * Rendered by app/site-document.tsx only when lib/analytics.ts has a valid measurement ID. The
 * head already holds Consent Mode v2 defaults with every storage type denied. Until the visitor
 * presses Accept, nothing is requested from Google: gtag.js is injected only after a "granted"
 * answer, and only then are the page view and site events sent.
 *
 * The answer is kept in localStorage under `ob-consent` as {analytics, at, v} and asked for again
 * after twelve months. Decline is stored too, so the banner does not ask on every page. Escape
 * closes the banner for this page without answering, which grants nothing.
 *
 * Any element with `data-ob-consent-open` (the privacy policy and Privacy choices pages) reopens
 * the banner, as does `window.obConsent.open()` or a `ob-consent:open` event on the document.
 * Not on the 404 page, the community's admin screens or the email previews: there the banner
 * does not ask by itself and no page view is sent.
 */

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { CONSENT_KEY, CONSENT_MAX_AGE_MS, CONSENT_VERSION, gaConfig } from '../../lib/analytics';
import { consentWords } from '../../lib/i18n/consent';
import { localePath, type Locale } from '../../lib/i18n/locales';
import { socialProfiles } from '../../lib/site';
import { TRACK_EVENT, type TrackParams } from '../../lib/track';

type Choice = 'granted' | 'denied';
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
    obConsent?: { open: () => void; get: () => Choice | null };
  }
}

export function readChoice(): Choice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const record = JSON.parse(raw) as { analytics?: unknown; at?: unknown; v?: unknown };
    if (record.v !== CONSENT_VERSION || (record.analytics !== 'granted' && record.analytics !== 'denied')) return null;
    const at = typeof record.at === 'string' ? Date.parse(record.at) : Number.NaN;
    if (!Number.isFinite(at) || Date.now() - at > CONSENT_MAX_AGE_MS) return null;
    return record.analytics;
  } catch {
    return null;
  }
}

function writeChoice(choice: Choice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: choice, at: new Date().toISOString(), v: CONSENT_VERSION }));
  } catch {
    /* private mode or storage blocked: the answer holds for this page only */
  }
}

/** Pages that never send a page view or ask by themselves. */
function excludedPage(): boolean {
  const path = window.location.pathname;
  return (
    /^\/(?:(?:fr|de|es|ja|pt-BR)\/)?(?:404|community\/admin)(?:\/|\.html|$)/.test(path) ||
    path.startsWith('/email-previews') ||
    document.querySelector('.nf-page') !== null
  );
}

/** The address as Google sees it: no query string except campaign tags, no fragment. */
function cleanLocation(): string {
  const { origin, pathname, search } = window.location;
  const kept = new URLSearchParams();
  for (const [key, value] of new URLSearchParams(search)) if (/^utm_(source|medium|campaign|term|content)$/.test(key)) kept.set(key, value);
  const query = kept.toString();
  return `${origin}${pathname}${query ? `?${query}` : ''}`;
}

function gtag(...args: unknown[]) {
  if (!window.gtag) {
    // The head script defines it; this is only a fallback. gtag.js reads the `arguments`
    // object itself, never an array, so the shape of Google's snippet is kept.
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  window.gtag(...args);
}

const ga = { id: '', loaded: false, granted: false, lastLocation: '' };

function setDisabled() {
  // GA4 drops hits while this flag is set: on excluded pages and after a withdrawal.
  (window as unknown as Record<string, boolean>)[`ga-disable-${ga.id}`] = !ga.granted || excludedPage();
}

function pageView() {
  setDisabled();
  if (!ga.granted || excludedPage()) return;
  const location = cleanLocation();
  if (location === ga.lastLocation) return;
  ga.lastLocation = location;
  gtag('event', 'page_view', { page_location: location, page_title: document.title });
}

function grant() {
  ga.granted = true;
  setDisabled();
  gtag('consent', 'update', { analytics_storage: 'granted' });
  if (!ga.loaded) {
    ga.loaded = true;
    gtag('js', new Date());
    gtag('config', ga.id, { ...gaConfig, page_location: cleanLocation() });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga.id)}`;
    document.head.appendChild(script);
    // The community moves between screens without loading a page; count each screen once.
    const notify = () => window.setTimeout(pageView, 60);
    for (const method of ['pushState', 'replaceState'] as const) {
      const original = history[method];
      history[method] = function (this: History, ...args: Parameters<History['pushState']>) {
        const result = original.apply(this, args);
        notify();
        return result;
      };
    }
    window.addEventListener('popstate', notify);
  }
  pageView();
}

function deny() {
  const wasGranted = ga.granted;
  ga.granted = false;
  setDisabled();
  if (!wasGranted) return;
  gtag('consent', 'update', { analytics_storage: 'denied' });
  // Withdrawal: remove the cookies Google Analytics set on this site.
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0]?.trim();
    if (!name || !/^_ga(_|$)/.test(name)) continue;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
  }
}

const socialHosts = new Map(socialProfiles.map((profile) => [new URL(profile.url).hostname.replace(/^www\./, ''), profile.network]));

export function ConsentBanner({ measurementId, locale }: { measurementId: string; locale: Locale }) {
  const t = consentWords[locale];
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const regionRef = useRef<HTMLElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const bodyId = useId();

  const show = useCallback((opener?: HTMLElement | null) => {
    openerRef.current = opener ?? null;
    setStatus('');
    setOpen(true);
    // Asked for: take focus so a keyboard or screen reader user lands on the choice.
    if (opener) window.requestAnimationFrame(() => regionRef.current?.focus());
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    const opener = openerRef.current;
    openerRef.current = null;
    if (opener && document.contains(opener)) opener.focus();
  }, []);

  const answer = useCallback(
    (choice: Choice) => {
      writeChoice(choice);
      if (choice === 'granted') grant();
      else deny();
      setStatus(t.saved[choice]);
      close();
    },
    [close, t],
  );

  useEffect(() => {
    ga.id = measurementId;
    const stored = readChoice();
    if (stored === 'granted') grant();
    else {
      setDisabled();
      // After the first paint: the page's own content renders first, the question after it.
      if (stored === null && !excludedPage()) window.requestAnimationFrame(() => setOpen(true));
    }

    window.obConsent = { open: () => show(document.activeElement instanceof HTMLElement ? document.activeElement : null), get: readChoice };

    const forward = (name: string, params: TrackParams) => {
      if (ga.granted && !excludedPage()) gtag('event', name, params);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const opener = target.closest<HTMLElement>('[data-ob-consent-open]');
      if (opener) {
        event.preventDefault();
        show(opener);
        return;
      }
      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link || !ga.granted) return;
      let url: URL;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      const host = url.hostname.replace(/^www\./, '');
      if (host === 'apps.apple.com') {
        const campaign = url.searchParams.get('ct')?.replace(/^web-/, '') || 'unknown';
        forward('click_app_store', { location: campaign });
      } else if (socialHosts.has(host)) {
        forward('click_social', { network: socialHosts.get(host), link_url: `${url.origin}${url.pathname}` });
      }
    };
    const onTrack = (event: Event) => {
      const detail = (event as CustomEvent<{ name?: unknown; params?: TrackParams }>).detail;
      if (detail && typeof detail.name === 'string') forward(detail.name, detail.params ?? {});
    };
    const onOpen = () => show(null);
    // Escape inside the banner closes it for this page without answering (grants nothing).
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const region = regionRef.current;
      if (region && event.target instanceof Node && region.contains(event.target)) close();
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('ob-consent:open', onOpen);
    document.addEventListener('keydown', onKey);
    window.addEventListener(TRACK_EVENT, onTrack);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('ob-consent:open', onOpen);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener(TRACK_EVENT, onTrack);
    };
  }, [measurementId, show, close]);

  return (
    <>
      {open ? (
        <section
          ref={regionRef}
          className="ob-consent"
          aria-labelledby={titleId}
          aria-describedby={bodyId}
          tabIndex={-1}
        >
          <p className="ob-consent-title" id={titleId}>{t.title}</p>
          <p className="ob-consent-body" id={bodyId}>
            {t.body}{' '}
            <a href={`${localePath(locale, '/privacy')}#analytics`}>{t.policy}</a>
          </p>
          <div className="ob-consent-actions">
            <button type="button" className="ob-consent-btn" onClick={() => answer('denied')}>{t.decline}</button>
            <button type="button" className="ob-consent-btn" onClick={() => answer('granted')}>{t.accept}</button>
          </div>
        </section>
      ) : null}
      <output className="ob-consent-status" aria-live="polite">{status}</output>
    </>
  );
}
