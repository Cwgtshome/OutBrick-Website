'use client';

import { useEffect, useId, useState, type SubmitEvent } from 'react';
import { supportCopies } from '../../../lib/support/copy/index';
import type { Locale } from '../../../lib/i18n/locales';
import { useSearchParam } from '../netlify-form';

type LevelThread = { id: number; slug: string; title: string; category: string; language: string; status: string | null; solved: boolean; replies: number; lastPostAt: string };
type Load = { state: 'idle' } | { state: 'loading'; level: number } | { state: 'ready'; level: number; threads: LevelThread[] } | { state: 'failed'; level: number };

/**
 * Help with one level (/support/levels?level=512): the community threads about that board, a
 * button that starts a help thread already titled with the level, and a bug report for the level.
 * The tips and the spoiler note are server-rendered around it (app/support-centre.tsx).
 */
export function LevelHelp({ locale, communityBase }: { locale: Locale; communityBase: string }) {
  const t = supportCopies[locale].levels;
  const id = useId();
  const wanted = Number(useSearchParam('level'));
  const initial = Number.isInteger(wanted) && wanted >= 1 && wanted <= 100000 ? wanted : null;
  const [typed, setTyped] = useState<string | null>(null);
  const [asked, setAsked] = useState<number | null>(null);
  const level = asked ?? initial;
  const [load, setLoad] = useState<Load>({ state: 'idle' });
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    if (!level) return;
    let live = true;
    fetch(`/api/community/levels/${level}/threads`, { headers: { Accept: 'application/json' } })
      .then((r) => (r.ok ? (r.json() as Promise<{ threads: LevelThread[] }>) : Promise.reject(new Error(String(r.status)))))
      .then((body) => {
        if (live) setLoad({ state: 'ready', level, threads: body.threads });
      })
      .catch(() => {
        if (live) setLoad({ state: 'failed', level });
      });
    return () => {
      live = false;
    };
  }, [level]);

  function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const n = Number((typed ?? '').trim());
    if (!Number.isInteger(n) || n < 1 || n > 100000) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setLoad({ state: 'loading', level: n });
    setAsked(n);
    const url = new URL(window.location.href);
    url.searchParams.set('level', String(n));
    window.history.replaceState(null, '', url);
  }

  const shown = load.state === 'idle' && level ? ({ state: 'loading', level } as Load) : load;
  const threadHref = (th: LevelThread) => `${communityBase}/t/${th.id}/${encodeURIComponent(th.slug)}`;
  const askHref = (n: number) => `${communityBase}/new?category=help&title=${encodeURIComponent(t.askThreadTitle(n))}`;
  const bugHref = (n: number) => `${communityBase}/new?category=bugs&level=${n}`;

  return (
    <div className="ss-levels">
      <form className="brick ss-level-form" onSubmit={submit} noValidate>
        <label htmlFor={`${id}-n`}>{t.label}</label>
        <div className="ss-level-row">
          <input
            id={`${id}-n`}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
            placeholder="512"
            value={typed ?? (initial ? String(initial) : '')}
            onChange={(e) => setTyped(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
            aria-describedby={`${id}-hint${invalid ? ` ${id}-err` : ''}`}
            aria-invalid={invalid || undefined}
          />
          <button type="submit" className="btn">{t.action}</button>
        </div>
        <p id={`${id}-hint`} className="ss-hint">{t.hint}</p>
        {invalid ? <p id={`${id}-err`} className="ss-error" role="alert">{t.invalid}</p> : null}
      </form>

      {shown.state !== 'idle' ? (
        <section className="brick ss-level-results" aria-labelledby={`${id}-results`} aria-busy={shown.state === 'loading' || undefined}>
          <h2 id={`${id}-results`}>{t.resultsTitle(shown.level)}</h2>
          {shown.state === 'loading' ? <output className="ss-loading">{t.loading}</output> : null}
          {shown.state === 'failed' ? <p className="ss-error" role="alert">{t.failed}</p> : null}
          {shown.state === 'ready' && !shown.threads.length ? <p>{t.none(shown.level)}</p> : null}
          {shown.state === 'ready' && shown.threads.length ? (
            <ul className="ss-level-threads">
              {shown.threads.map((th) => (
                <li key={th.id}>
                  <a href={threadHref(th)} lang={th.language}>{th.title}</a>
                  <span className="meta">
                    {th.solved ? <span className="ss-pill st-fixed">{t.solved}</span> : null} {t.replies(th.replies)}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="ss-level-ask">
            <h3>{t.askTitle}</h3>
            <p>{t.askText}</p>
            <div className="act">
              <a className="btn" href={askHref(shown.level)}>{t.askAction}</a>
              <a className="btn ghost" href={bugHref(shown.level)}>{t.bugAction}</a>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
