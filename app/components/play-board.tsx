'use client';

import { useSyncExternalStore } from 'react';
import { boardLevels } from '../../lib/board-levels';
import type { Locale } from '../../lib/i18n/locales';
import { PlayableBoard } from './playable-board';

/**
 * The play guide's board (/play, /fr/play …), which also honours `?board=N` (1-based). The page is a
 * static file, so the query is read on the client: the server snapshot is
 * board 1, which is what the prerendered HTML shows and what hydration
 * matches, and the client snapshot swaps in the asked-for board straight after.
 * Same pattern as app/c/challenge-landing.tsx.
 */
const subscribeToNothing = () => () => {};
const readBoard = () => {
  const n = Number.parseInt(new URLSearchParams(window.location.search).get('board') ?? '', 10);
  return Number.isInteger(n) && n >= 1 && n <= boardLevels.length ? n - 1 : 0;
};
const readServerBoard = () => 0;

export function PlayBoard({ label, locale = 'en' }: { label: string; locale?: Locale }) {
  const level = useSyncExternalStore(subscribeToNothing, readBoard, readServerBoard);
  // Keyed so a query-picked board mounts fresh rather than inheriting board 1's state.
  return <PlayableBoard key={level} startLevel={level} label={label} locale={locale} />;
}
