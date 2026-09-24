import { boardLevels } from './board-levels';

/**
 * The daily board (/daily): everyone gets the same board on the same UTC day.
 *
 * Pure date arithmetic, no clock: the day number is whole days since
 * `dailyEpoch`, and the board is that number modulo the pool. The pool is every
 * board except the first, which is the tutorial and too easy to be anyone's
 * board of the day. Appending boards to lib/board-levels.ts grows the pool.
 */

/** Daily board #1: Thursday 24 September 2026, UTC. */
export const dailyEpoch = Date.UTC(2026, 8, 24);

const DAY_MS = 86_400_000;

/** Indexes into `boardLevels` that the daily board rotates through, in order. */
export const dailyPool: readonly number[] = boardLevels.map((_, i) => i).slice(1);

export interface DailyBoard {
  /** 1-based: "Daily board #N". */
  number: number;
  /** Index into `boardLevels`. */
  levelIndex: number;
  /** The UTC day, as YYYY-MM-DD. */
  isoDate: string;
  /** Midnight UTC at the start of the day, in ms. */
  start: number;
}

/** Whole UTC days since the epoch for a moment in time (never negative). */
export function dailyDay(now: number): number {
  return Math.max(0, Math.floor((now - dailyEpoch) / DAY_MS));
}

/** The board for day `day` (0 = the epoch). */
export function dailyBoardForDay(day: number): DailyBoard {
  const d = Math.max(0, Math.trunc(day));
  const start = dailyEpoch + d * DAY_MS;
  return {
    number: d + 1,
    levelIndex: dailyPool[d % dailyPool.length],
    isoDate: new Date(start).toISOString().slice(0, 10),
    start,
  };
}

/** "Thursday 24 September 2026", read in UTC so it names the same day everywhere. */
export function formatDailyDate(board: DailyBoard): string {
  // Assembled from parts: some ICU versions put a comma after the weekday, the site's dates never do.
  const parts = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(board.start);
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)?.value ?? '';
  return `${part('weekday')} ${part('day')} ${part('month')} ${part('year')}`;
}
