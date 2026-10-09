'use client';

import { useEffect, useState } from 'react';
import { supportCopies } from '../../../lib/support/copy/index';
import type { Locale } from '../../../lib/i18n/locales';

const SEEN = 'ob-me-too';
const readSeen = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(SEEN) ?? '[]') as string[];
  } catch {
    return [];
  }
};

let shared: Promise<Record<string, number>> | null = null;
async function load(): Promise<Record<string, number>> {
  try {
    const r = await fetch('/api/community/known-issues/me-too');
    const body = (r.ok ? await r.json() : {}) as { counts?: Record<string, number> };
    return body.counts ?? {};
  } catch {
    return {};
  }
}
const counts = () => (shared ??= load());

/** "This affects me too" for one open known issue: one anonymous tap, remembered on this device. */
export function MeToo({ id, locale }: { id: string; locale: Locale }) {
  const t = supportCopies[locale].issues;
  const [count, setCount] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let live = true;
    void counts().then((all) => {
      if (!live) return;
      setCount(all[id] ?? 0);
      setDone(readSeen().includes(id));
    });
    return () => {
      live = false;
    };
  }, [id]);

  async function press() {
    if (done || busy) return;
    setBusy(true);
    try {
      const r = await fetch(`/api/community/known-issues/${encodeURIComponent(id)}/me-too`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
      const body = (await r.json().catch(() => ({}))) as { count?: number };
      if (r.ok && typeof body.count === 'number') setCount(body.count);
      if (r.ok || r.status === 429) {
        setDone(true);
        try {
          localStorage.setItem(SEEN, JSON.stringify([...readSeen(), id].slice(-30)));
        } catch {
          /* not remembered on this device */
        }
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="ss-metoo">
      <button type="button" className={`ss-metoo-btn${done ? ' done' : ''}`} onClick={() => void press()} aria-pressed={done} disabled={busy}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M12 21s-7.5-4.6-9.3-9.2C1.3 8.3 3.6 5 7 5c2 0 3.3 1.1 5 3 1.7-1.9 3-3 5-3 3.4 0 5.7 3.3 4.3 6.8C19.5 16.4 12 21 12 21Z" /></svg>
        {done ? t.meTooDone : t.meToo}
      </button>
      {count ? <span className="ss-metoo-count" aria-live="polite">{t.meTooCount(count)}</span> : null}
    </div>
  );
}
