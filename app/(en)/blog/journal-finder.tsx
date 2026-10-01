'use client';

/**
 * The journal's one interactive island, used only on /blog:
 *
 * - JournalSearch: an ARIA 1.2 combobox over every story. The index
 *   (/journal-index.json, written by scripts/postbuild.mjs) is fetched the
 *   first time the field is focused, or at once for /blog?q=…. "/" focuses
 *   the field from anywhere on the page.
 * - ShelfControls: category filter and sort for the shelves below. The
 *   shelves are server-rendered in full, so without script every story is
 *   listed and each chip is a plain link to its category page; with script
 *   the chips filter in place and the choice is kept in ?category=.
 */

import { useLocale } from '../../components/locale-context';
import { searchWords } from '../../../lib/i18n/search';
import { localePath, type Locale } from '../../../lib/i18n/locales';
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore, type KeyboardEvent as ReactKeyboardEvent, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';

// --------------------------------------------------------------------------------------------
// Search

type Entry = {
  /** slug */ s: string;
  /** title */ t: string;
  /** dek */ d: string;
  /** category */ c: string;
  /** tone */ n: string;
  /** minutes */ m: number;
  /** tags */ g: string[];
  /** section headings */ h: string[];
  /** every other word of the body, normalised, space-separated */ k: string;
};
type Prepared = Entry & { f: { t: string; g: string; c: string; h: string[]; d: string; k: string } };
type Hit = { entry: Prepared; score: number; heading?: string; mention?: string };

const STOP = new Set('a an and are as at be but by can do does for from how i if in is it its my of on or so the to what when why with you your'.split(' '));

/** The same normalisation scripts/postbuild.mjs applies to the body words. */
function norm(text: string): string {
  const flat = text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/colour/g, 'color')
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, ' ')
    .trim();
  return ` ${flat} `;
}

function termsOf(query: string): string[] {
  const words = norm(query).trim().split(' ').filter(Boolean);
  const kept = words.filter((word) => !STOP.has(word) && (word.length > 1 || /\d/.test(word)));
  return [...new Set(kept.length ? kept : words)];
}

function prepare(entries: Entry[]): Prepared[] {
  return entries.map((entry) => ({
    ...entry,
    f: { t: norm(entry.t), g: norm(entry.g.join(' | ')), c: norm(entry.c), h: entry.h.map(norm), d: norm(entry.d), k: ` ${entry.k} ` },
  }));
}

/** Word-start match scores in full; a match inside a word scores a third. */
const hit = (field: string, term: string, weight: number) => (field.includes(` ${term}`) ? weight : field.includes(term) ? weight / 3 : 0);

function search(index: Prepared[], terms: string[]): Hit[] {
  const hits: Hit[] = [];
  for (const entry of index) {
    const { f } = entry;
    let score = 0;
    let heading: string | undefined;
    let mention: string | undefined;
    let missed = false;
    for (const term of terms) {
      const inHeading = f.h.findIndex((h) => hit(h, term, 1) > 0);
      const best = Math.max(hit(f.t, term, 12), hit(f.g, term, 8), hit(f.c, term, 6), inHeading >= 0 ? 5 : 0, hit(f.d, term, 4), hit(f.k, term, 2));
      if (!best) {
        missed = true;
        break;
      }
      if (inHeading >= 0 && !heading && best === 5) heading = entry.h[inHeading];
      if (best <= 2 && !mention) mention = term;
      score += best;
    }
    if (!missed) hits.push({ entry, score, heading, mention });
  }
  return hits.sort((a, b) => b.score - a.score || a.entry.m - b.entry.m);
}

function highlighter(terms: string[]) {
  if (!terms.length) return (text: string) => text;
  const source = terms
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/color/g, 'colou?r'))
    .sort((a, b) => b.length - a.length)
    .join('|');
  const pattern = new RegExp(`(${source})`, 'gi');
  return (text: string): ReactNode =>
    text.split(pattern).map((part, index) => (index % 2 ? <mark key={index}>{part}</mark> : part));
}

const pending = new Map<Locale, Promise<Prepared[]>>();
function loadIndex(locale: Locale): Promise<Prepared[]> {
  if (!pending.has(locale)) pending.set(locale, fetch(`${locale === 'en' ? '' : `/${locale}`}/journal-index.json`)
    .then(response => { if (!response.ok) throw new Error(String(response.status)); return response.json() as Promise<Entry[]>; })
    .then(prepare).catch((error: unknown) => { pending.delete(locale); throw error; }));
  return pending.get(locale)!;
}

/** Keep one query parameter in the address without adding history entries. */
function setParam(name: string, value: string) {
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(name, value);
  else url.searchParams.delete(name);
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new Event('journal:url'));
}

/** The address's query string as external state: empty on the server, the real one after hydration. */
const subscribeUrl = (onChange: () => void) => {
  window.addEventListener('journal:url', onChange);
  window.addEventListener('popstate', onChange);
  return () => {
    window.removeEventListener('journal:url', onChange);
    window.removeEventListener('popstate', onChange);
  };
};
const useAddressParams = () => new URLSearchParams(useSyncExternalStore(subscribeUrl, () => window.location.search, () => ''));

type Shelf = { slug: string; label: string; count: number; tone: string; href: string };

export function JournalSearch({ shelves }: { shelves: Shelf[] }) {
  const locale = useLocale();
  const t = searchWords[locale];
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<Prepared[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [announcement, setAnnouncement] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const box = useRef<HTMLDivElement>(null);

  const ensureIndex = useCallback(() => {
    if (index) return;
    loadIndex(locale).then(setIndex, () => setFailed(true));
  }, [index, locale]);

  const terms = useMemo(() => termsOf(query), [query]);
  const hits = useMemo(() => (index && terms.length ? search(index, terms) : []), [index, terms]);
  const mark = useMemo(() => highlighter(terms), [terms]);
  const searching = terms.length > 0;
  /** A normalised term as the reader typed it ("colour", not "color"). */
  const spelled = (term: string) => query.split(/[^\p{L}\p{N}’']+/u).find((word) => norm(word).trim() === term) ?? term;
  const expanded = open && searching;

  // /blog?q=… opens with the results showing.
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get('q');
    if (!initial) return;
    const show = () => {
      setQuery(initial);
      setOpen(true);
    };
    loadIndex(locale).then(
      (loaded) => {
        setIndex(loaded);
        show();
      },
      () => {
        setFailed(true);
        show();
      },
    );
  }, [locale]);

  // "/" focuses the field from anywhere that is not itself a text field.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey || event.defaultPrevented) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]')) return;
      event.preventDefault();
      input.current?.focus();
      input.current?.select();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (active >= 0) document.getElementById(`journal-option-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  // Results open below the field: when it sits low in the window, bring it up so they fit.
  useEffect(() => {
    if (!expanded || !box.current) return;
    const top = box.current.getBoundingClientRect().top;
    if (top > window.innerHeight * 0.4 || top < 0) {
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollBy({ top: top - 96, behavior: smooth ? 'smooth' : 'auto' });
    }
  }, [expanded]);

  // Counts are announced once typing settles, not on every keystroke.
  useEffect(() => {
    if (!expanded) return;
    const timer = window.setTimeout(() => {
      if (failed) setAnnouncement(t.failed);
      else if (!index) setAnnouncement(t.loading);
      else setAnnouncement(hits.length ? t.results(hits.length) : t.empty);
    }, 450);
    return () => window.clearTimeout(timer);
  }, [expanded, failed, index, hits.length, t]);

  const openStory = (entry: Entry, newTab = false) => {
    const href = localePath(locale, `/blog/${entry.s}`);
    if (newTab) window.open(href, '_blank', 'noopener');
    else window.location.assign(href);
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    const count = hits.length;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (!searching) return;
      event.preventDefault();
      setOpen(true);
      if (!count) return;
      const step = event.key === 'ArrowDown' ? 1 : -1;
      setActive((current) => (current < 0 ? (step > 0 ? 0 : count - 1) : (current + step + count) % count));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const chosen = hits[active >= 0 ? active : 0];
      if (expanded && chosen) openStory(chosen.entry, event.metaKey || event.ctrlKey);
    } else if (event.key === 'Escape') {
      if (expanded) {
        event.preventDefault();
        setOpen(false);
        setActive(-1);
      } else if (query) {
        event.preventDefault();
        setQuery('');
        setActive(-1);
        setParam('q', '');
      }
    }
  };

  return (
    <div
      className="ed-search"
      ref={box}
      onBlur={(event) => {
        if (!box.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <search>
      <form action={localePath(locale, '/blog')} method="get" onSubmit={(event) => event.preventDefault()}>
        <label className="ed-search-label" htmlFor="journal-q">{t.label}</label>
        <div className="ed-search-field">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.6" /><path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
          <input
            ref={input}
            id="journal-q"
            name="q"
            type="search"
            role="combobox"
            aria-expanded={expanded}
            aria-controls="journal-results"
            aria-autocomplete="list"
            aria-activedescendant={expanded && active >= 0 ? `journal-option-${active}` : undefined}
            aria-describedby="journal-q-hint"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="go"
            placeholder={t.placeholder}
            value={query}
            onFocus={() => {
              ensureIndex();
              setOpen(true);
            }}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(-1);
              setOpen(true);
              ensureIndex();
              setParam('q', event.target.value.trim());
            }}
            onKeyDown={onKeyDown}
          />
          <kbd aria-hidden="true">/</kbd>
        </div>
        <span id="journal-q-hint" className="ed-sr">{t.hint}</span>
      </form>
      </search>

      {/* tabIndex -1: a click on a result focuses the panel, which is inside the search, so it stays open for the click.
          The panel grows with its results rather than scrolling inside itself; the page scrolls instead. */}
      <div className="ed-search-panel" hidden={!expanded} tabIndex={-1}>
        {failed ? (
          <p className="ed-search-empty">{t.failureDetail}</p>
        ) : !index ? (
          <p className="ed-search-empty">{t.loading}</p>
        ) : (
          <p className="ed-search-count" aria-hidden="true">
            {t.query(hits.length, query.trim())}
          </p>
        )}
        {/* A native <select>/<datalist> cannot carry a headline, shelf and dek per option: this is the ARIA 1.2 combobox + listbox pattern. */}
        {/* oxlint-disable-next-line jsx-a11y/prefer-tag-over-role */}
        <div id="journal-results" role="listbox" aria-label={t.stories} hidden={!hits.length}>
          {hits.map(({ entry, heading, mention }, i) => (
            // Options are never focused: focus stays on the input, which owns the keys (arrows, Enter)
            // and points at the current option with aria-activedescendant, as the pattern requires.
            // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role, jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
            <div key={entry.s} id={`journal-option-${i}`} role="option" aria-selected={i === active}
              data-tone={entry.n}
              onMouseMove={() => active !== i && setActive(i)}
              onClick={(event) => openStory(entry, event.metaKey || event.ctrlKey)}
            >
              <span className="ed-search-title">{mark(entry.t)}</span>
              <span className="ed-search-meta">
                <span className="ed-chip">{entry.c}</span>
                <span>{t.readingTime(entry.m)}</span>
              </span>
              <span className="ed-search-dek">{mark(entry.d)}</span>
              {heading ? <span className="ed-search-where">{t.section} {mark(heading)}</span> : mention ? <span className="ed-search-where">{t.mention(spelled(mention))}</span> : null}
            </div>
          ))}
        </div>
        {index && !hits.length ? (
          <div className="ed-search-none">
            <p>{t.try}</p>
            <ul>
              {shelves.map((shelf) => (
                <li key={shelf.slug}>
                  <a className="ed-chip" data-tone={shelf.tone} href={shelf.href}>{shelf.label} <b>{shelf.count}</b></a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <output className="ed-sr" aria-live="polite" aria-atomic="true">{expanded ? announcement : ''}</output>
    </div>
  );
}

// --------------------------------------------------------------------------------------------
// Shelf filter and sort

type Sort = 'newest' | 'shortest';

export function ShelfControls({ shelves, total }: { shelves: Shelf[]; total: number }) {
  const locale = useLocale();
  const t = searchWords[locale];
  const params = useAddressParams();
  const wanted = params.get('category') ?? '';
  const category = shelves.some((shelf) => shelf.slug === wanted) ? wanted : '';
  const sort: Sort = params.get('sort') === 'shortest' ? 'shortest' : 'newest';
  const [status, setStatus] = useState('');

  // The shelves are server-rendered; the filter shows, hides and reorders their rows in place.
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-archive]');
    if (!root) return;
    root.toggleAttribute('data-filtered', Boolean(category));
    for (const shelf of root.querySelectorAll<HTMLElement>('[data-shelf]')) {
      shelf.hidden = Boolean(category) && shelf.dataset.shelf !== category;
      const list = shelf.querySelector('ol');
      if (!list) continue;
      const rows = Array.from(list.children) as HTMLElement[];
      const order = (row: HTMLElement) => Number(row.dataset.order);
      rows.sort((a, b) => (sort === 'shortest' ? Number(a.dataset.min) - Number(b.dataset.min) : 0) || order(a) - order(b));
      for (const row of rows) list.appendChild(row);
    }
    let n = 0;
    for (const row of root.querySelectorAll<HTMLElement>('.ed-row')) {
      if (!row.offsetParent) continue;
      n += 1;
      const number = row.querySelector('.ed-row-n');
      if (number) number.textContent = String(n).padStart(2, '0');
    }
  }, [category, sort]);

  const describe = (nextCategory: string, nextSort: Sort) => {
    const shelf = shelves.find((entry) => entry.slug === nextCategory);
    setStatus(shelf ? t.showing(shelf.count, shelf.label, nextSort === 'shortest') : t.showingAll(nextSort === 'shortest'));
  };
  const choose = (slug: string) => {
    setParam('category', slug);
    describe(slug, sort);
  };
  const follow = (event: ReactMouseEvent<HTMLAnchorElement>, slug: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    choose(slug);
  };

  return (
    <div className="ed-controls">
      <nav aria-label={t.filter}>
        <ul className="ed-rail">
          <li>
            <a className="ed-chip all" href={localePath(locale, '/blog')} aria-current={category === '' ? 'true' : undefined} onClick={(event) => follow(event, '')}>
              {t.all} <b>{total}</b>
            </a>
          </li>
          {shelves.map((shelf) => (
            <li key={shelf.slug}>
              <a
                className="ed-chip"
                data-tone={shelf.tone}
                href={shelf.href}
                aria-current={category === shelf.slug ? 'true' : undefined}
                onClick={(event) => follow(event, category === shelf.slug ? '' : shelf.slug)}
              >
                {shelf.label} <b>{shelf.count}</b>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <fieldset className="ed-sort">
        <legend>{t.sort}</legend>
        {(['newest', 'shortest'] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={sort === value}
            onClick={() => {
              setParam('sort', value === 'shortest' ? value : '');
              describe(category, value);
            }}
          >
            {value === 'newest' ? t.newest : t.shortest}
          </button>
        ))}
      </fieldset>
      <output className="ed-sr" aria-live="polite" aria-atomic="true">{status}</output>
    </div>
  );
}
