#!/usr/bin/env node
/**
 * Proves every home-page board is solvable and that its displayed target is
 * the true optimum found by breadth-first search.
 *
 *   node --experimental-strip-types scripts/verify-board-levels.mjs
 *
 * Exits non-zero if a board is unsolvable or its target is wrong.
 */
import { applyMove, initialPlacements, isClear, solve } from '../lib/board-solver.ts';
import { boardLevels } from '../lib/board-levels.ts';

let failed = false;

for (const [n, level] of boardLevels.entries()) {
  const started = performance.now();
  const solution = solve(level);
  const ms = (performance.now() - started).toFixed(1);
  if (!solution) {
    console.error(`✗ ${n + 1}. ${level.name}: no solution found`);
    failed = true;
    continue;
  }

  // Replay the solution through the same rules the component uses.
  let state = initialPlacements(level);
  for (const step of solution.path) {
    const index = level.bricks.findIndex((b) => b.id === step.brick);
    const next = applyMove(level, state, index, step.dir);
    if (!next) throw new Error(`Replay failed on ${level.id}: ${step.brick} ${step.dir}`);
    state = next;
  }
  if (!isClear(state)) throw new Error(`Replay of ${level.id} does not clear the board`);

  // Sanity: gates only span real cells, bricks start in bounds and never overlap.
  const cells = new Set();
  for (const b of level.bricks) {
    if (b.x < 0 || b.y < 0 || b.x + b.w > level.cols || b.y + b.h > level.rows) {
      throw new Error(`${level.id}: ${b.id} starts out of bounds`);
    }
    for (let y = b.y; y < b.y + b.h; y++) {
      for (let x = b.x; x < b.x + b.w; x++) {
        const k = `${x},${y}`;
        if (cells.has(k)) throw new Error(`${level.id}: ${b.id} overlaps another brick at ${k}`);
        cells.add(k);
      }
    }
  }
  for (const g of level.gates) {
    const len = g.side === 'top' || g.side === 'bottom' ? level.cols : level.rows;
    if (g.start < 0 || g.start + g.span > len) throw new Error(`${level.id}: ${g.color} gate off the edge`);
  }

  // Cross-check the guided search against plain, unguided BFS where the
  // state space is small enough to exhaust quickly.
  if (level.bricks.length <= 4) {
    const plain = solve(level, { guided: false });
    if (!plain || plain.moves !== solution.moves) {
      console.error(`✗ ${level.id}: plain BFS found ${plain?.moves} moves, guided found ${solution.moves}`);
      failed = true;
    }
  }

  const ok = solution.moves === level.target;
  if (!ok) failed = true;
  const path = solution.path.map((s) => `${s.brick} ${s.dir}`).join(', ');
  console.log(
    `${ok ? '✓' : '✗'} ${n + 1}. ${level.name} (${level.cols}×${level.rows}, ${level.bricks.length} bricks): ` +
      `optimal ${solution.moves} moves, target ${level.target} — ${solution.statesExplored} states, ${ms} ms`,
  );
  console.log(`    ${path}`);
}

if (failed) {
  console.error('\nBoard verification failed.');
  process.exit(1);
}
console.log('\nAll boards solvable; targets match the solver.');
