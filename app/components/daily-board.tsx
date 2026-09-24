'use client';

import { useSyncExternalStore } from 'react';
import { boardLevels } from '../../lib/board-levels';
import { dailyBoardForDay, dailyDay, formatDailyDate, type DailyBoard } from '../../lib/daily-board';
import { PlayableBoard, type ShareWords } from './playable-board';

/**
 * The two parts of /daily that depend on today's date. The page is a static
 * file, so the date is read on the client: the server snapshot is "no date
 * yet", which is what the prerendered HTML shows (a generic heading and the
 * first board in the rotation), and the client snapshot swaps in today's board
 * straight after hydration. Same pattern as app/components/play-board.tsx.
 *
 * The day is read once. A page left open past midnight UTC keeps its board
 * until it is reloaded: there is no clock on this page.
 */
const subscribeToNothing = () => () => {};
const readDay = () => dailyDay(Date.now());
const readServerDay = () => -1;

function useDailyBoard(): DailyBoard | null {
  const day = useSyncExternalStore(subscribeToNothing, readDay, readServerDay);
  return day < 0 ? null : dailyBoardForDay(day);
}

/** Before hydration: the first board of the rotation, so the static page still has a real board. */
const fallback = dailyBoardForDay(0);

/** "Daily board #12" and the date, above the page heading. */
export function DailyStamp() {
  const daily = useDailyBoard();
  const level = boardLevels[(daily ?? fallback).levelIndex];
  return (
    <div className="daily-stamp">
      <p className="eyebrow">{daily ? `Daily board #${daily.number}` : 'Daily board'}</p>
      <p className="daily-date">
        {daily ? (
          <>
            <time dateTime={daily.isoDate}>{formatDailyDate(daily)}</time>
            <span className="daily-sep" aria-hidden="true">·</span>
            <span className="daily-level">
              {level.name}, target {level.target}
            </span>
          </>
        ) : (
          'Today’s board'
        )}
      </p>
    </div>
  );
}

/** Today's board, played on its own, with a share line that names the day. */
export function DailyPlay() {
  const daily = useDailyBoard() ?? fallback;
  const level = boardLevels[daily.levelIndex];
  const n = daily.number;
  const shareWords: ShareWords = (moves, stars, starLine) => ({
    title: `I cleared OutBrick daily board #${n} with ${stars} ${stars === 1 ? 'star' : 'stars'}`,
    text: `OutBrick daily board #${n}, ${level.name}: cleared in ${moves} ${moves === 1 ? 'move' : 'moves'} (target ${level.target}) ${starLine}`,
  });
  return (
    <PlayableBoard
      // Keyed so today's board mounts fresh rather than inheriting the fallback's state.
      key={`${n}-${daily.levelIndex}`}
      startLevel={daily.levelIndex}
      single
      kicker={`Daily board #${n}`}
      shareWords={shareWords}
      label={`Play OutBrick daily board #${n}, ${level.name}`}
    />
  );
}
