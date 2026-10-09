'use client';

import { useEffect, useState } from 'react';
import { supportCopies } from '../../../lib/support/copy/index';
import { localePath, type Locale } from '../../../lib/i18n/locales';

type SiteStatus = { id: string; level: 'info' | 'warning' | 'outage'; messages: Record<string, string>; link: string | null; expiresAt: string };

const CACHE = 'ob-site-status';
const DISMISSED = 'ob-site-status-dismissed';
const CACHE_MS = 2 * 60 * 1000;

function read<T>(storage: () => Storage, key: string): T | null {
  try {
    const raw = storage().getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
function write(storage: () => Storage, key: string, value: unknown) {
  try {
    storage().setItem(key, JSON.stringify(value));
  } catch {
    /* Storage blocked: the banner is simply fetched again next time. */
  }
}

/**
 * The site-wide notice the team switches on from the admin dashboard (netlify/community/site-status.ts)
 * when something big is broken. Fetched once the page is idle, kept for two minutes in this tab,
 * and dismissible per notice. Nothing is shown, and nothing moves, when there is no notice.
 */
export function StatusBanner({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<SiteStatus | null>(null);
  const t = supportCopies[locale].banner;

  useEffect(() => {
    let live = true;
    const show = (s: SiteStatus | null) => {
      if (!live || !s || new Date(s.expiresAt).getTime() <= Date.now()) return;
      if (read<string[]>(() => localStorage, DISMISSED)?.includes(s.id)) return;
      setStatus(s);
    };
    const cached = read<{ at: number; status: SiteStatus | null }>(() => sessionStorage, CACHE);
    if (cached && Date.now() - cached.at < CACHE_MS) {
      void Promise.resolve().then(() => show(cached.status));
      return () => {
        live = false;
      };
    }
    const run = () =>
      fetch('/api/community/site-status', { headers: { Accept: 'application/json' } })
        .then((r) => (r.ok ? (r.json() as Promise<{ status?: SiteStatus | null }>) : { status: null }))
        .then((body) => {
          write(() => sessionStorage, CACHE, { at: Date.now(), status: body.status ?? null });
          show(body.status ?? null);
        })
        .catch(() => undefined);
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idle) idle.call(window, () => void run());
    else window.setTimeout(() => void run(), 800);
    return () => {
      live = false;
    };
  }, []);

  if (!status) return null;
  const message = status.messages[locale] || status.messages.en;
  const href = status.link ? (status.link.startsWith('/') ? localePath(locale, status.link) : status.link) : null;
  const dismiss = () => {
    const list = read<string[]>(() => localStorage, DISMISSED) ?? [];
    write(() => localStorage, DISMISSED, [...list.slice(-9), status.id]);
    setStatus(null);
  };
  return (
    <aside className={`ss-banner l-${status.level}`} aria-label={t.level[status.level]}>
      <p>
        <b>{t.level[status.level]}:</b> {message}
        {href ? (
          <>
            {' '}
            <a href={href}>{t.more}</a>
          </>
        ) : null}
      </p>
      <button type="button" onClick={dismiss} aria-label={t.dismiss}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
      </button>
    </aside>
  );
}
