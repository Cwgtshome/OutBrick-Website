'use client';

import { useState } from 'react';
import { useHydrated } from '../../components/netlify-form';

/**
 * Copies a feed address. A feed is an XML file, and a browser opening one shows code or
 * downloads it, which reads as a broken link; what a reader actually needs is the address, to
 * paste into their feed app. Before hydration (or without script) this renders a plain link to
 * the feed, so the address is always reachable.
 */
export function FeedCopy({ url, label, compact = false }: { url: string; label: string; compact?: boolean }) {
  const ready = useHydrated();
  const [copied, setCopied] = useState(false);

  if (!ready) {
    return (
      <a className={compact ? 'ed-feed-copy compact' : 'ed-btn'} href={url} type="application/rss+xml">
        {compact ? <span className="ed-sr">{label}</span> : label}
        {compact ? <FeedGlyph /> : null}
      </a>
    );
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = url;
    }
  }

  return (
    <>
      <button
        type="button"
        className={compact ? 'ed-feed-copy compact' : 'ed-btn'}
        onClick={copy}
        aria-label={compact ? label : undefined}
        title={compact ? label : undefined}
        data-copied={copied || undefined}
      >
        {compact ? <FeedGlyph copied={copied} /> : copied ? 'Feed address copied' : label}
      </button>
      <span className="ed-sr" aria-live="polite">{copied ? 'Feed address copied to the clipboard.' : ''}</span>
    </>
  );
}

function FeedGlyph({ copied = false }: { copied?: boolean }) {
  return copied ? (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="6" cy="18" r="2.4" fill="currentColor" /><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" /></svg>
  );
}
