'use client';

/**
 * Drafts: what a member is writing (a reply, a new thread with its bug details) is kept in this
 * browser's localStorage, per thread or per category, so a closed tab, a reload or a slip of the
 * Back button does not lose it. It comes back with a small "Draft restored · Discard" notice and
 * is cleared once the post is sent. Leaving the page while there is unsent text asks first
 * (beforeunload), and only then.
 *
 * Storage can be missing, full or blocked (private windows, cleared site data); every access is
 * wrapped, and without it the forms simply work as before.
 */

import { useEffect } from 'react';
import { useApp } from './core';

const prefix = 'cm-draft:';
/** A draft older than this is not offered back. */
const maxAgeMs = 30 * 24 * 3600 * 1000;

export function readDraft<T>(key: string): T | null {
  try {
    const raw = window.localStorage.getItem(prefix + key);
    if (!raw) return null;
    const stored = JSON.parse(raw) as { at: number; value: T };
    if (!stored || typeof stored.at !== 'number' || Date.now() - stored.at > maxAgeMs) {
      window.localStorage.removeItem(prefix + key);
      return null;
    }
    return stored.value;
  } catch {
    return null;
  }
}

export function writeDraft<T>(key: string, value: T | null): void {
  try {
    if (value === null) window.localStorage.removeItem(prefix + key);
    else window.localStorage.setItem(prefix + key, JSON.stringify({ at: Date.now(), value }));
  } catch {
    // No storage: nothing is kept, the form still works.
  }
}

/** Save `value` under `key` a moment after it stops changing; an empty form removes the draft. */
export function useDraftSaver<T>(key: string, value: T, empty: boolean): void {
  useEffect(() => {
    const timer = window.setTimeout(() => writeDraft(key, empty ? null : value), 400);
    return () => window.clearTimeout(timer);
  }, [key, value, empty]);
}

/** Ask before the page is closed or reloaded, only while there is unsent text. */
export function useUnsavedWarning(dirty: boolean): void {
  useEffect(() => {
    if (!dirty) return;
    const onLeave = (event: BeforeUnloadEvent) => {
      // The browser asks in its own words; a page cannot set them.
      event.preventDefault();
    };
    window.addEventListener('beforeunload', onLeave);
    return () => window.removeEventListener('beforeunload', onLeave);
  }, [dirty]);
}

/** "Draft restored · Discard", above a form whose text came back from a draft. */
export function DraftNotice({ onDiscard }: { onDiscard: () => void }) {
  const { fx } = useApp();
  return (
    <p className="cm-draft">
      <span>{fx.ux.draft.restored}</span>
      <span aria-hidden="true"> · </span>
      <button type="button" className="cm-linkbutton" onClick={onDiscard}>
        {fx.ux.draft.discard}
      </button>
    </p>
  );
}
