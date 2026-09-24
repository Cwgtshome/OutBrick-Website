/**
 * The rules engine for the home-page OutBrick board, plus a breadth-first
 * solver that proves each level can be cleared and finds its optimal move
 * count (the target shown on the board).
 *
 * Rules, faithful to the game:
 *  - Any brick can slide in any of the four directions.
 *  - It glides until something stops it: the wall, another brick, or a gate
 *    of a different colour (a gate that refuses it is just wall).
 *  - If its leading face reaches a gate of its own colour and fits entirely
 *    inside that gate's span, it leaves the board.
 *  - The board is clear when every brick is out.
 *
 * Pure and dependency-free so it runs in the browser, on the server, and in
 * `node --experimental-strip-types` for the verification script.
 */

export type Dir = 'up' | 'down' | 'left' | 'right';
export type Side = 'top' | 'bottom' | 'left' | 'right';
export type BrickColor = 'red' | 'yellow' | 'teal' | 'violet' | 'blue' | 'green';

export interface Brick {
  id: string;
  color: BrickColor;
  /** Column of the top-left cell (0-based). */
  x: number;
  /** Row of the top-left cell (0-based). */
  y: number;
  /** Width in cells. */
  w: number;
  /** Height in cells. */
  h: number;
}

export interface Gate {
  color: BrickColor;
  side: Side;
  /** First cell along the edge covered by the gate (column for top/bottom, row for left/right). */
  start: number;
  /** Number of cells the gate spans. */
  span: number;
}

export interface Level {
  id: string;
  name: string;
  cols: number;
  rows: number;
  bricks: Brick[];
  gates: Gate[];
  /** Solver-verified optimal move count. */
  target: number;
}

export interface Placement {
  x: number;
  y: number;
  out: boolean;
}

export interface SlideResult {
  /** Cells travelled inside the board (0 = blocked). */
  distance: number;
  /** True when the brick left through a matching gate. */
  exited: boolean;
  /** Final placement (for an exit, the last in-board position before it leaves). */
  x: number;
  y: number;
  /** The gate it left through, if any. */
  gate?: Gate;
}

export const DIRS: readonly Dir[] = ['up', 'down', 'left', 'right'];

const STEP: Record<Dir, [number, number]> = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
};

const EXIT_SIDE: Record<Dir, Side> = { up: 'top', down: 'bottom', left: 'left', right: 'right' };

/** Build an occupancy grid of brick indices (-1 = empty) for the bricks still on the board. */
function occupancy(level: Level, placements: Placement[], skip: number): Int16Array {
  const grid = new Int16Array(level.cols * level.rows).fill(-1);
  placements.forEach((p, i) => {
    if (p.out || i === skip) return;
    const b = level.bricks[i];
    for (let dy = 0; dy < b.h; dy++) {
      for (let dx = 0; dx < b.w; dx++) grid[(p.y + dy) * level.cols + p.x + dx] = i;
    }
  });
  return grid;
}

function gateFor(level: Level, brick: Brick, x: number, y: number, dir: Dir): Gate | undefined {
  const side = EXIT_SIDE[dir];
  const horizontalEdge = side === 'top' || side === 'bottom';
  const from = horizontalEdge ? x : y;
  const len = horizontalEdge ? brick.w : brick.h;
  return level.gates.find(
    (g) => g.side === side && g.color === brick.color && g.start <= from && from + len <= g.start + g.span,
  );
}

/** Slide brick `index` in `dir` from the given placements. Does not mutate. */
export function slide(level: Level, placements: Placement[], index: number, dir: Dir): SlideResult {
  const brick = level.bricks[index];
  const start = placements[index];
  if (start.out) return { distance: 0, exited: false, x: start.x, y: start.y };
  const grid = occupancy(level, placements, index);
  const [sx, sy] = STEP[dir];
  let { x, y } = start;
  let distance = 0;
  for (;;) {
    const nx = x + sx;
    const ny = y + sy;
    if (nx < 0 || ny < 0 || nx + brick.w > level.cols || ny + brick.h > level.rows) {
      const gate = gateFor(level, brick, x, y, dir);
      return gate ? { distance, exited: true, x, y, gate } : { distance, exited: false, x, y };
    }
    let blocked = false;
    for (let dy = 0; dy < brick.h && !blocked; dy++) {
      for (let dx = 0; dx < brick.w; dx++) {
        if (grid[(ny + dy) * level.cols + nx + dx] !== -1) {
          blocked = true;
          break;
        }
      }
    }
    if (blocked) return { distance, exited: false, x, y };
    x = nx;
    y = ny;
    distance++;
  }
}

export function initialPlacements(level: Level): Placement[] {
  return level.bricks.map((b) => ({ x: b.x, y: b.y, out: false }));
}

/** Apply a slide, returning new placements, or null when the brick cannot move. */
export function applyMove(level: Level, placements: Placement[], index: number, dir: Dir): Placement[] | null {
  const r = slide(level, placements, index, dir);
  if (!r.exited && r.distance === 0) return null;
  return placements.map((p, i) => (i === index ? { x: r.x, y: r.y, out: r.exited } : p));
}

export function isClear(placements: Placement[]): boolean {
  return placements.every((p) => p.out);
}

export interface Solution {
  moves: number;
  path: { brick: string; dir: Dir }[];
  statesExplored: number;
}

function key(placements: Placement[]): string {
  return placements.map((p) => (p.out ? '*' : `${p.x},${p.y}`)).join('|');
}

/**
 * Lower bound on the moves still needed: every brick on the board needs at
 * least one slide, and a brick that is not lined up with a gate of its own
 * colour (ignoring obstacles) needs at least two. The bound drops by at most
 * one per move, so it is consistent and the search stays optimal.
 */
function lowerBound(level: Level, placements: Placement[]): number {
  let h = 0;
  placements.forEach((p, i) => {
    if (p.out) return;
    const b = level.bricks[i];
    const lined = DIRS.some((dir) => gateFor(level, b, p.x, p.y, dir));
    h += lined ? 1 : 2;
  });
  return h;
}

export interface SolveOptions {
  /** Stop and give up after this many distinct states (default 2,000,000). */
  limit?: number;
  /**
   * Guide the breadth-first search with the admissible lower bound above
   * (A*). Off, it is a plain level-by-level BFS. Both return the optimum.
   */
  guided?: boolean;
}

/**
 * Shortest-path search over board states, expanded in order of
 * moves-so-far + lower bound (a bucket queue, so with `guided: false` it is
 * exactly breadth-first). Returns an optimal solution, or null.
 */
export function solve(level: Level, options: SolveOptions = {}): Solution | null {
  const { limit = 2_000_000, guided = true } = options;
  const startState = initialPlacements(level);
  const seen = new Map<string, { prev: string | null; move: { brick: string; dir: Dir } | null; g: number }>();
  const startKey = key(startState);
  seen.set(startKey, { prev: null, move: null, g: 0 });
  const buckets: [Placement[], number][][] = [];
  const push = (state: Placement[], g: number) => {
    const f = g + (guided ? lowerBound(level, state) : 0);
    (buckets[f] ??= []).push([state, g]);
  };
  push(startState, 0);
  for (let f = 0; f < buckets.length; f++) {
    const bucket = buckets[f];
    if (!bucket) continue;
    // A bucket can grow while it is being drained (moves that keep f level).
    for (let n = 0; n < bucket.length; n++) {
      const [state, g] = bucket[n];
      const k = key(state);
      if (seen.get(k)!.g !== g) continue; // stale entry
      if (isClear(state)) {
        const path: { brick: string; dir: Dir }[] = [];
        let cur: string | null = k;
        while (cur) {
          const node: { prev: string | null; move: { brick: string; dir: Dir } | null } = seen.get(cur)!;
          if (node.move) path.unshift(node.move);
          cur = node.prev;
        }
        return { moves: g, path, statesExplored: seen.size };
      }
      for (let i = 0; i < level.bricks.length; i++) {
        for (const dir of DIRS) {
          const after = applyMove(level, state, i, dir);
          if (!after) continue;
          const nk = key(after);
          const known = seen.get(nk);
          if (known && known.g <= g + 1) continue;
          seen.set(nk, { prev: k, move: { brick: level.bricks[i].id, dir }, g: g + 1 });
          push(after, g + 1);
          if (seen.size >= limit) return null;
        }
      }
    }
  }
  return null;
}
