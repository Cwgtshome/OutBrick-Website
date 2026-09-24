import { boardLevels } from '../../../lib/board-levels';

/**
 * The nine share pages, one per board and star count. A result link carries
 * only `<board>-<stars>` (the exact move count is in the share text, not the
 * URL), so every page is a plain static file and nothing is read at runtime.
 * The same wording feeds the page, its metadata and scripts/generate-share-images.mjs.
 */
export type ResultId = `${number}-${number}`;

export interface BoardResult {
  id: ResultId;
  /** 1-based board number, as a player reads it. */
  board: number;
  /** 0-based index into boardLevels, for PlayableBoard's startLevel. */
  levelIndex: number;
  stars: 1 | 2 | 3;
  name: string;
  target: number;
  title: string;
  description: string;
  /** The warm line at the top of the page. */
  line: string;
  image: string;
  imageAlt: string;
}

const STAR_WORD = ['', 'one star', 'two stars', 'three stars'];

function describe(board: number, stars: 1 | 2 | 3): BoardResult {
  const level = boardLevels[board - 1];
  const { name, target } = level;
  const how =
    stars === 3
      ? `in ${target} moves without an undo`
      : stars === 2
        ? `in ${target} moves, right on target`
        : `a few moves over its target of ${target}`;
  const line =
    stars === 3
      ? `Someone cleared ${name} in ${target} moves, no undo. Your turn.`
      : stars === 2
        ? `Someone cleared ${name} in ${target} moves. Can you do it without an undo?`
        : `Someone cleared ${name}. Now try it in ${target} moves.`;
  return {
    id: `${board}-${stars}`,
    board,
    levelIndex: board - 1,
    stars,
    name,
    target,
    title: `I cleared OutBrick board ${board} with ${stars} ${stars === 1 ? 'star' : 'stars'}`,
    description: `Board ${board}, ${name}, cleared ${how}: ${STAR_WORD[stars]}. Play the same board free in your browser, then find 2,000 more in OutBrick on the App Store.`,
    line,
    image: `/share/board-${board}-${stars}.png`,
    imageAlt: `OutBrick board ${board}, ${name}, cleared with ${stars} of 3 stars. Target ${target} moves.`,
  };
}

export const boardResults: BoardResult[] = boardLevels.flatMap((_, i) =>
  ([1, 2, 3] as const).map((stars) => describe(i + 1, stars)),
);

export function getBoardResult(id: string): BoardResult | undefined {
  return boardResults.find((r) => r.id === id);
}
