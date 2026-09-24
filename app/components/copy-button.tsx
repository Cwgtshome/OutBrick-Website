'use client';

import { useState } from 'react';
import { useHydrated } from './netlify-form';

/**
 * Copies a short text (a hashtag set, a boilerplate paragraph) to the clipboard. The text it
 * copies is always visible on the page beside it, so without script — or where the clipboard is
 * refused — nothing is lost: the button simply is not rendered until hydration.
 */
export function CopyButton({ text, label, className = '' }: { text: string; label: string; className?: string }) {
  const ready = useHydrated();
  const [copied, setCopied] = useState(false);

  if (!ready) return null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className="bz-copy">
      <button type="button" className={`ed-btn ghost ${className}`} onClick={copy}>
        {copied ? 'Copied' : label}
      </button>
      <span className="bz-sr" aria-live="polite">{copied ? 'Copied to the clipboard.' : ''}</span>
    </span>
  );
}
