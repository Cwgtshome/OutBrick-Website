'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useHydrated } from './netlify-form';

/**
 * Filters the Help Centre's guide cards in place. Every card is already in the prerendered page,
 * so without script nothing is drawn here and every guide stays listed. Cards are the elements
 * marked `data-help-item` inside the nearest `[data-help-root]` (their text includes a hidden
 * list of section titles and search words); a `data-help-group` hides itself when none of its
 * cards match. `?q=` pre-fills the box, so a search can be linked to, and "/" focuses it.
 */
export function HelpFinder({
  label,
  placeholder,
  empty,
  one,
  many,
}: {
  label: string;
  placeholder: string;
  empty: string;
  one: string;
  many: string;
}) {
  const ready = useHydrated();
  const id = useId();
  const box = useRef<HTMLElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(() =>
    typeof window === 'undefined' ? '' : (new URLSearchParams(window.location.search).get('q') ?? ''),
  );
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const root = box.current?.closest('[data-help-root]');
    if (!root) return;
    const fold = (text: string) => text.toLocaleLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const words = fold(query).split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const item of root.querySelectorAll<HTMLElement>('[data-help-item]')) {
      const text = fold(item.textContent ?? '');
      const match = words.every((word) => text.includes(word));
      item.hidden = !match;
      if (match) shown += 1;
    }
    for (const group of root.querySelectorAll<HTMLElement>('[data-help-group]')) {
      group.hidden = words.length > 0 && !group.querySelector('[data-help-item]:not([hidden])');
    }
    setCount(words.length ? shown : null);
  }, [query, ready]);

  useEffect(() => {
    if (!ready) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.isContentEditable || /^(input|textarea|select)$/i.test(target.tagName))) return;
      event.preventDefault();
      input.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [ready]);

  if (!ready) return null;

  return (
    <search className="hc-finder" ref={box}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.6" />
          <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
        <input
          ref={input}
          id={id}
          type="search"
          value={query}
          placeholder={placeholder}
          autoComplete="off"
          enterKeyHint="search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <p className="count" aria-live="polite">
        {count === null ? '' : count === 0 ? empty : count === 1 ? one : many.replace('{n}', String(count))}
      </p>
    </search>
  );
}
