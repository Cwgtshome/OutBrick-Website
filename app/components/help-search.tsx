'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useHydrated } from './netlify-form';

/**
 * Filters the help page in place. Every answer on the page is already in the markup (and in the
 * FAQPage JSON-LD), so the search only hides what does not match: without script, nothing is
 * rendered and the whole page stays readable. Items are the elements marked `data-help-item`
 * inside the nearest `[data-help-root]`; a `data-help-group` hides itself when none of its items
 * match. `?q=` in the URL pre-fills the box, so a search can be linked to.
 */
export function HelpSearch() {
  const ready = useHydrated();
  const id = useId();
  const box = useRef<HTMLElement>(null);
  // Nothing renders before hydration, so reading the URL here cannot cause a mismatch.
  const [query, setQuery] = useState(() =>
    typeof window === 'undefined' ? '' : (new URLSearchParams(window.location.search).get('q') ?? ''),
  );
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const root = box.current?.closest('[data-help-root]');
    if (!root) return;
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    const items = [...root.querySelectorAll<HTMLElement>('[data-help-item]')];
    let shown = 0;
    for (const item of items) {
      const text = (item.textContent ?? '').toLowerCase();
      const match = words.every((word) => text.includes(word));
      item.hidden = !match;
      if (match) shown += 1;
    }
    for (const group of root.querySelectorAll<HTMLElement>('[data-help-group]')) {
      group.hidden = words.length > 0 && !group.querySelector('[data-help-item]:not([hidden])');
    }
    setCount(words.length ? shown : null);
  }, [query, ready]);

  if (!ready) return null;

  return (
    <search className="help-search" ref={box}>
      <label htmlFor={id}>Search help</label>
      <div className="field">
        <input
          id={id}
          type="search"
          value={query}
          placeholder="Lives, undo, ads, restore…"
          autoComplete="off"
          enterKeyHint="search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <p className="count" aria-live="polite">
        {count === null
          ? ''
          : count === 0
            ? 'No answer matches that yet. The contact form at the foot of the page reaches a person.'
            : `${count} ${count === 1 ? 'answer matches' : 'answers match'}.`}
      </p>
    </search>
  );
}
