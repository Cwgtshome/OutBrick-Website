import type { Level } from './board-solver';

/**
 * Three hand-made boards for the home-page toy, easiest first. Every `target`
 * is the optimal move count found by the breadth-first solver in
 * `lib/board-solver.ts`; `scripts/verify-board-levels.mjs` re-proves it.
 *
 * Coordinates: x = column, y = row, both 0-based from the top-left cell.
 */
export const boardLevels: Level[] = [
  {
    id: 'first-light',
    name: 'First light',
    cols: 5,
    rows: 5,
    target: 3,
    bricks: [
      { id: 'red', color: 'red', x: 0, y: 1, w: 2, h: 1 },
      { id: 'blue', color: 'blue', x: 3, y: 0, w: 1, h: 2 },
      { id: 'yellow', color: 'yellow', x: 3, y: 4, w: 1, h: 1 },
    ],
    gates: [
      { color: 'red', side: 'right', start: 1, span: 1 },
      { color: 'blue', side: 'bottom', start: 3, span: 1 },
      { color: 'yellow', side: 'left', start: 4, span: 1 },
    ],
  },
  {
    id: 'side-step',
    name: 'Side step',
    cols: 5,
    rows: 5,
    target: 5,
    bricks: [
      { id: 'blue', color: 'blue', x: 1, y: 1, w: 2, h: 1 },
      { id: 'teal', color: 'teal', x: 1, y: 3, w: 2, h: 1 },
      { id: 'red', color: 'red', x: 0, y: 3, w: 1, h: 1 },
      { id: 'yellow', color: 'yellow', x: 4, y: 4, w: 1, h: 1 },
    ],
    gates: [
      { color: 'teal', side: 'top', start: 1, span: 2 },
      { color: 'blue', side: 'bottom', start: 3, span: 2 },
      { color: 'red', side: 'right', start: 3, span: 1 },
      { color: 'yellow', side: 'left', start: 4, span: 1 },
    ],
  },
  {
    id: 'knot',
    name: 'The knot',
    cols: 6,
    rows: 6,
    target: 8,
    bricks: [
      { id: 'red', color: 'red', x: 1, y: 2, w: 1, h: 2 },
      { id: 'blue', color: 'blue', x: 3, y: 3, w: 2, h: 1 },
      { id: 'yellow', color: 'yellow', x: 4, y: 2, w: 1, h: 1 },
      { id: 'teal', color: 'teal', x: 3, y: 0, w: 2, h: 1 },
      { id: 'green', color: 'green', x: 0, y: 0, w: 1, h: 2 },
      { id: 'violet', color: 'violet', x: 4, y: 5, w: 1, h: 1 },
    ],
    gates: [
      { color: 'green', side: 'top', start: 2, span: 1 },
      { color: 'yellow', side: 'top', start: 4, span: 1 },
      { color: 'teal', side: 'left', start: 0, span: 1 },
      { color: 'violet', side: 'left', start: 4, span: 1 },
      { color: 'red', side: 'right', start: 2, span: 2 },
      { color: 'blue', side: 'bottom', start: 3, span: 2 },
    ],
  },
];
