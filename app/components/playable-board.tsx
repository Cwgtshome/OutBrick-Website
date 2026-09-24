'use client';

import { appStoreUrl } from '../store-badge';
import { boardStrings, type BoardStrings } from '../../lib/i18n/board';
import { storefronts, type Locale } from '../../lib/i18n/locales';
import '../styles/playable-board.css';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { boardLevels, tourBoardCount } from '../../lib/board-levels';
import {
  applyMove,
  initialPlacements,
  isClear,
  slide,
  type BrickColor,
  type Dir,
  type Gate,
  type Level,
  type Placement,
} from '../../lib/board-solver';

const RESULT_URL = 'https://www.outbrick.site/play/result';
const DRAG_THRESHOLD = 10;

const VEC: Record<Dir, [number, number]> = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const KEY_DIR: Record<string, Dir> = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };

/** Colour-blind glyphs, stamped on every stud and every gate. Simple shapes, never emoji. */
function Glyph({ color }: { color: BrickColor }) {
  let shape;
  switch (color) {
    case 'red':
      shape = <path d="M12 20.4 4.3 12.9a4.8 4.8 0 0 1 6.8-6.8l.9.9.9-.9a4.8 4.8 0 0 1 6.8 6.8z" />;
      break;
    case 'yellow':
      shape = <path d="M12 4.2 20.6 19H3.4z" strokeWidth={2.2} strokeLinejoin="round" stroke="currentColor" />;
      break;
    case 'teal':
      shape = <circle cx="12" cy="12" r="7.4" />;
      break;
    case 'violet':
      shape = <path d="M12 2.8 21.2 12 12 21.2 2.8 12z" strokeWidth={1.4} strokeLinejoin="round" stroke="currentColor" />;
      break;
    case 'blue':
      shape = <rect x="5" y="5" width="14" height="14" rx="2" />;
      break;
    case 'green':
      shape = <path d="m12 2.6 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" strokeWidth={1.2} strokeLinejoin="round" stroke="currentColor" />;
      break;
  }
  return (
    <svg className="pb-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      {shape}
    </svg>
  );
}

function Star({ on, index }: { on: boolean; index: number }) {
  return (
    <svg
      className={`pb-star${on ? ' is-on' : ''}`}
      style={{ '--i': index } as CSSProperties}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m12 2.4 2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.1l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ state */

type Motion =
  | { kind: 'slide'; index: number; dir: Dir; distance: number }
  | { kind: 'exit'; index: number; dir: Dir; distance: number; gate: number }
  | { kind: 'blocked'; index: number; dir: Dir }
  | { kind: 'rewind' }
  | { kind: 'enter' };

interface Fx {
  kind: 'impact' | 'nudge';
  dir: Dir;
  seq: number;
  dur: number;
}

interface GameState {
  level: number;
  placements: Placement[];
  history: Placement[][];
  moves: number;
  usedUndo: boolean;
  /** Direction each brick left the board by, so an undo can bring it back through its gate. */
  exitDirs: (Dir | null)[];
  motion: Motion;
  /** Last one-shot effect per brick (impact squash or blocked nudge), keyed by `seq`. */
  fx: (Fx | null)[];
  /** Bumped on every action; keys the one-shot animations. */
  seq: number;
  message: string;
}

type Action =
  | { type: 'move'; index: number; dir: Dir }
  | { type: 'undo' }
  | { type: 'reset' }
  | { type: 'level'; level: number };

function freshState(levelIndex: number, seq = 0, message = ''): GameState {
  const level = boardLevels[levelIndex];
  return {
    level: levelIndex,
    placements: initialPlacements(level),
    history: [],
    moves: 0,
    usedUndo: false,
    exitDirs: level.bricks.map(() => null),
    fx: level.bricks.map(() => null),
    motion: { kind: 'enter' },
    seq,
    message,
  };
}

function starsFor(state: GameState, level: Level): number {
  if (!isClear(state.placements)) return 0;
  if (state.moves > level.target) return 1;
  return state.usedUndo ? 2 : 3;
}

/** The reducer, speaking one language: every announcement it writes comes from `t`. */
const makeReducer = (t: BoardStrings) => function reducer(state: GameState, action: Action): GameState {
  const level = boardLevels[state.level];
  const seq = state.seq + 1;
  switch (action.type) {
    case 'move': {
      if (isClear(state.placements)) return state;
      const brick = level.bricks[action.index];
      const name = t.brick(brick.color);
      const result = slide(level, state.placements, action.index, action.dir);
      const next = applyMove(level, state.placements, action.index, action.dir);
      if (!next) {
        return {
          ...state,
          seq,
          fx: state.fx.map((f, i) => (i === action.index ? { kind: 'nudge', dir: action.dir, seq, dur: 240 } : f)),
          motion: { kind: 'blocked', index: action.index, dir: action.dir },
          message: t.cantMove(name, action.dir),
        };
      }
      const moves = state.moves + 1;
      const base = { ...state, placements: next, history: [...state.history, state.placements], moves, seq };
      if (result.exited) {
        const exitDirs = state.exitDirs.map((d, i) => (i === action.index ? action.dir : d));
        const remaining = next.filter((p) => !p.out).length;
        const done = { ...base, exitDirs };
        let message = t.leftBoard(name, remaining);
        if (remaining === 0) {
          const stars = starsFor(done, level);
          message = t.leftAndClear(name, moves, level.target, stars);
        }
        return {
          ...done,
          motion: {
            kind: 'exit',
            index: action.index,
            dir: action.dir,
            distance: result.distance,
            gate: result.gate ? level.gates.indexOf(result.gate) : -1,
          },
          message,
        };
      }
      return {
        ...base,
        fx: state.fx.map((f, i) =>
          i === action.index ? { kind: 'impact', dir: action.dir, seq, dur: slideMs(result.distance) } : f,
        ),
        motion: { kind: 'slide', index: action.index, dir: action.dir, distance: result.distance },
        message: t.slid(name, action.dir, result.distance, result.y + 1, result.x + 1),
      };
    }
    case 'undo': {
      const prev = state.history[state.history.length - 1];
      if (!prev) return state;
      return {
        ...state,
        placements: prev,
        history: state.history.slice(0, -1),
        moves: Math.max(0, state.moves - 1),
        usedUndo: true,
        fx: state.fx.map(() => null),
        motion: { kind: 'rewind' },
        seq,
        message: t.undid(state.moves - 1),
      };
    }
    case 'reset':
      return {
        ...freshState(state.level, seq, t.reset),
        exitDirs: state.exitDirs,
        motion: { kind: 'rewind' },
      };
    case 'level': {
      const lv = boardLevels[action.level];
      return freshState(
        action.level,
        seq,
        t.levelChange(action.level + 1, tourBoardCount, t.levelName[lv.id] ?? lv.name, lv.target),
      );
    }
  }
};

/* ------------------------------------------------------------- helpers */

function describeBrick(t: BoardStrings, level: Level, index: number, p: Placement): string {
  const b = level.bricks[index];
  return t.describeBrick(b.color, b.w, b.h, p.y + 1, p.x + 1);
}

function describeGates(t: BoardStrings, level: Level): string {
  return level.gates
    .map((g: Gate) => t.describeGate({ colour: g.color, side: g.side, start: g.start, span: g.span }))
    .join(t.gatesJoin);
}

/** Duration of a brick's slide: a quick base plus a little per cell travelled. */
function slideMs(cells: number) {
  return Math.min(520, 180 + 42 * cells);
}

/** The nearest on-board brick in a direction, for arrow-key focus movement. */
function neighbour(level: Level, placements: Placement[], from: number, dir: Dir): number {
  const [vx, vy] = VEC[dir];
  const a = placements[from];
  const ab = level.bricks[from];
  const ax = a.x + ab.w / 2;
  const ay = a.y + ab.h / 2;
  let best = -1;
  let bestScore = Infinity;
  placements.forEach((p, i) => {
    if (i === from || p.out) return;
    const b = level.bricks[i];
    const dx = p.x + b.w / 2 - ax;
    const dy = p.y + b.h / 2 - ay;
    const along = dx * vx + dy * vy;
    if (along <= 0.01) return;
    const across = Math.abs(dx * vy) + Math.abs(dy * vx);
    const score = along + across * 2;
    if (score < bestScore) {
      bestScore = score;
      best = i;
    }
  });
  return best;
}

/** Deterministic confetti: mini bricks and loose studs, spread in a fan. */
const CONFETTI = Array.from({ length: 30 }, (_, i) => {
  const t = (i * 0.61803398875) % 1;
  const colors: BrickColor[] = ['red', 'yellow', 'teal', 'violet', 'blue', 'green'];
  return {
    color: colors[i % colors.length],
    stud: i % 3 === 0,
    x: Math.round((t - 0.5) * 360),
    peak: -Math.round(90 + ((i * 37) % 110)),
    fall: Math.round(120 + ((i * 53) % 160)),
    rot: Math.round(((i * 97) % 540) - 270),
    delay: (i % 6) * 22,
  };
});

/** What "Share result" sends: a static result page (app/play/result) and a line of text. */
function shareFor(t: BoardStrings, levelIndex: number, moves: number, stars: number, words?: ShareWords) {
  const level = boardLevels[levelIndex];
  const board = levelIndex + 1;
  const url = `${RESULT_URL}/${board}-${stars}`;
  const starLine = `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}`;
  if (words) return { url, ...words(moves, stars, starLine) };
  const title = t.shareTitle(board, stars);
  const text = t.shareText(board, t.levelName[level.id] ?? level.name, moves, level.target, starLine);
  return { url, title, text };
}

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------ component */

/** Replacement title and text for "Share result" (the link stays the board's result page). */
export type ShareWords = (moves: number, stars: number, starLine: string) => { title: string; text: string };

export interface PlayableBoardProps {
  /** Extra class on the outer wrapper. */
  className?: string;
  /** Which board to open on (0-based). Defaults to the first. */
  startLevel?: number;
  /** Accessible name for the whole toy. */
  label?: string;
  /**
   * Language of every string the board shows or announces (lib/i18n/board.ts).
   * English by default. Behaviour is the same in every language.
   */
  locale?: Locale;
  /**
   * Play this one board on its own: no board pips, and the clear card offers
   * a replay instead of the next board. Boards past the tour always play this way.
   */
  single?: boolean;
  /** Line above "Board clear" on the clear card, instead of "Board 2 of 3". */
  kicker?: string;
  /** Title and text for "Share result", instead of the board-number wording. */
  shareWords?: ShareWords;
}

export function PlayableBoard({
  className,
  startLevel = 0,
  label,
  locale = 'en',
  single = false,
  kicker,
  shareWords,
}: PlayableBoardProps) {
  const t = boardStrings[locale];
  const reducer = useMemo(() => makeReducer(t), [t]);
  const appStore = appStoreUrl(locale === 'en' ? 'board-clear' : `${locale}-board-clear`, storefronts[locale]);
  const initialLevel = Math.min(Math.max(0, Math.trunc(startLevel)), boardLevels.length - 1);
  const [state, dispatch] = useReducer(reducer, initialLevel, (lv: number) => freshState(lv));
  const [focused, setFocused] = useState<string | null>(null);
  const [grabbed, setGrabbed] = useState<string | null>(null);
  const [pressed, setPressed] = useState<string | null>(null);
  const drag = useRef<{ index: number; x: number; y: number; pointer: number } | null>(null);
  const brickEls = useRef(new Map<string, HTMLButtonElement>());
  const nextBtn = useRef<HTMLButtonElement>(null);
  const uid = useId();
  const [note, setNote] = useState<{ text: string; seq: number } | null>(null);

  // A note belongs to the clear it was made on (keyed by seq), and fades on its own.
  const shareNote = note && note.seq === state.seq ? note.text : '';
  useEffect(() => {
    if (!note) return;
    const t = setTimeout(() => setNote(null), 3200);
    return () => clearTimeout(t);
  }, [note]);

  const level = boardLevels[state.level];
  const clear = isClear(state.placements);
  const stars = starsFor(state, level);
  const remaining = state.placements.filter((p) => !p.out).length;
  const firstOnBoard = level.bricks.find((_, i) => !state.placements[i].out)?.id ?? null;
  const rovingId = focused && state.placements[level.bricks.findIndex((b) => b.id === focused)]?.out === false ? focused : firstOnBoard;

  const focusBrick = useCallback((id: string | null) => {
    if (!id) return;
    setFocused(id);
    brickEls.current.get(id)?.focus({ preventScroll: true });
  }, []);

  /** Slide a brick; returns true when the move changed the board. */
  const move = useCallback(
    (index: number, dir: Dir, fromKeyboard: boolean) => {
      if (clear) return false;
      const result = slide(level, state.placements, index, dir);
      dispatch({ type: 'move', index, dir });
      if (result.exited) {
        const left = state.placements.filter((p, i) => i !== index && !p.out).length;
        if (left === 0) {
          if (fromKeyboard) setTimeout(() => nextBtn.current?.focus({ preventScroll: true }), 80);
        } else if (fromKeyboard) {
          const after = state.placements.map((p, i) => (i === index ? { ...p, out: true } : p));
          let n = neighbour(level, after, index, dir);
          if (n < 0) n = after.findIndex((p) => !p.out);
          focusBrick(level.bricks[n].id);
        }
      }
      return result.exited || result.distance > 0;
    },
    [clear, level, state.placements, focusBrick],
  );

  const onPointerDown = (e: ReactPointerEvent<HTMLButtonElement>, index: number) => {
    if (clear || (e.pointerType === 'mouse' && e.button !== 0)) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { index, x: e.clientX, y: e.clientY, pointer: e.pointerId };
    setPressed(level.bricks[index].id);
    setGrabbed(null);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d || d.pointer !== e.pointerId) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
    const dir: Dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : dy > 0 ? 'down' : 'up';
    drag.current = null;
    setPressed(null);
    move(d.index, dir, false);
  };

  const endPointer = () => {
    drag.current = null;
    setPressed(null);
  };

  const onBrickKey = (e: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    const id = level.bricks[index].id;
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      setGrabbed(null);
      dispatch({ type: 'undo' });
      return;
    }
    const dir = KEY_DIR[e.key];
    if (dir) {
      e.preventDefault();
      if (e.shiftKey || grabbed === id) {
        setGrabbed(null);
        move(index, dir, true);
      } else {
        const n = neighbour(level, state.placements, index, dir);
        if (n >= 0) focusBrick(level.bricks[n].id);
      }
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const lifting = grabbed !== id;
      setGrabbed(lifting ? id : null);
      return;
    }
    if (e.key === 'Escape' && grabbed) {
      e.preventDefault();
      setGrabbed(null);
    }
  };

  const goLevel = (n: number) => {
    setGrabbed(null);
    setFocused(null);
    dispatch({ type: 'level', level: n });
  };

  const shareResult = async () => {
    const data = shareFor(t, state.level, state.moves, stars, shareWords);
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(data);
        return;
      } catch (err) {
        // Closing the share sheet is a choice, not a failure.
        if (err instanceof DOMException && err.name === 'AbortError') return;
      }
    }
    const seq = state.seq;
    setNote({ text: (await copyText(data.url)) ? t.copied : t.copyFailed, seq });
  };

  // The tour (the first boards) is walked with pips and "Next board"; any other board stands alone.
  const onTour = !single && state.level < tourBoardCount;
  const isLast = state.level === tourBoardCount - 1;
  const motion = state.motion;
  let clearDelay = 0;
  if (motion.kind === 'exit') {
    const b = level.bricks[motion.index];
    const len = motion.dir === 'left' || motion.dir === 'right' ? b.w : b.h;
    clearDelay = slideMs(motion.distance + len + 1) * 0.8;
  }
  const over = state.moves > level.target;
  const grabbedColour = grabbed ? (level.bricks.find((b) => b.id === grabbed)?.color ?? 'red') : null;
  const levelName = t.levelName[level.id] ?? level.name;

  return (
    <section
      className={`pb${className ? ` ${className}` : ''}`}
      data-single={onTour ? undefined : true}
      aria-label={label ?? t.label}
      style={{ '--cols': level.cols, '--rows': level.rows } as CSSProperties}
    >
      <div className="pb-hud">
        <div className="pb-boards">
          {onTour && <span className="pb-sr">{t.boards}</span>}
          {onTour && boardLevels.slice(0, tourBoardCount).map((lv, i) => (
            <button
              key={lv.id}
              type="button"
              className="pb-pip"
              data-current={i === state.level || undefined}
              aria-current={i === state.level ? 'step' : undefined}
              aria-label={t.pip(i + 1, t.levelName[lv.id] ?? lv.name)}
              onClick={() => goLevel(i)}
            >
              {i + 1}
            </button>
          ))}
          <span className="pb-name">{levelName}</span>
        </div>
        <p className="pb-count" aria-live="off">
          <span>
            {t.target}<b>{level.target}</b>
          </span>
          <span className="pb-dot" aria-hidden="true">
            ·
          </span>
          <span data-over={over || undefined}>
            {t.moves}<b>{state.moves}</b>
          </span>
        </p>
      </div>

      <div className="pb-stage">
        <div className="pb-tray">
          <fieldset
            key={`${level.id}`}
            className="pb-field"
            data-enter={motion.kind === 'enter' || undefined}
            aria-describedby={`${uid}-hint ${uid}-gates`}
          >
            <legend className="pb-sr">
              {t.legend(levelName, level.cols, level.rows, remaining)}
            </legend>
            {level.gates.map((g, i) => {
              const flash = motion.kind === 'exit' && motion.gate === i;
              return (
                <span
                  key={flash ? `${i}-${state.seq}` : i}
                  className={`pb-gate pb-c-${g.color}`}
                  data-side={g.side}
                  data-flash={flash || undefined}
                  style={{ '--start': g.start, '--span': g.span } as CSSProperties}
                  aria-hidden="true"
                >
                  <Glyph color={g.color} />
                </span>
              );
            })}

            {level.bricks.map((b, i) => {
              const p = state.placements[i];
              let x = p.x;
              let y = p.y;
              const exitDir = state.exitDirs[i];
              if (p.out && exitDir) {
                const [vx, vy] = VEC[exitDir];
                const len = vx ? b.w : b.h;
                x += vx * (len + 1.4);
                y += vy * (len + 1.4);
              }
              let dur = 260;
              let exiting = false;
              const fx = state.fx[i];
              if (motion.kind === 'slide' && motion.index === i) {
                dur = slideMs(motion.distance);
              } else if (motion.kind === 'exit' && motion.index === i) {
                const len = motion.dir === 'left' || motion.dir === 'right' ? b.w : b.h;
                dur = slideMs(motion.distance + len + 1);
                exiting = true;
              } else if (motion.kind === 'rewind') {
                dur = 300;
              }
              const id = b.id;
              const style = {
                '--x': x,
                '--y': y,
                '--w': b.w,
                '--h': b.h,
                '--dur': `${dur}ms`,
                '--i': i,
              } as CSSProperties;
              return (
                <button
                  key={id}
                  ref={(el) => {
                    if (el) brickEls.current.set(id, el);
                    else brickEls.current.delete(id);
                  }}
                  type="button"
                  className={`pb-brick pb-c-${b.color}`}
                  style={style}
                  data-out={p.out || undefined}
                  data-exiting={(exiting && p.out) || undefined}
                  data-dir={exiting ? motion.kind === 'exit' && motion.dir : undefined}
                  data-pressed={pressed === id || undefined}
                  data-grabbed={grabbed === id || undefined}
                  tabIndex={!p.out && rovingId === id ? 0 : -1}
                  inert={p.out || undefined}
                  aria-hidden={p.out || undefined}
                  aria-label={describeBrick(t, level, i, p)}
                  aria-pressed={grabbed === id}
                  onFocus={() => setFocused(id)}
                  onBlur={() => setGrabbed((g) => (g === id ? null : g))}
                  onPointerDown={(e) => onPointerDown(e, i)}
                  onPointerMove={onPointerMove}
                  onPointerUp={endPointer}
                  onPointerCancel={endPointer}
                  onLostPointerCapture={endPointer}
                  onKeyDown={(e) => onBrickKey(e, i)}
                >
                  {exiting && p.out && <span key={`trail-${state.seq}`} className="pb-trail" aria-hidden="true" />}
                  <span
                    key={fx ? `${id}-${fx.seq}` : id}
                    className="pb-body"
                    data-impact={fx?.kind === 'impact' ? fx.dir : undefined}
                    data-nudge={fx?.kind === 'nudge' ? fx.dir : undefined}
                    style={fx ? ({ '--fxdur': `${fx.dur}ms` } as CSSProperties) : undefined}
                    aria-hidden="true"
                  >
                    <span className="pb-studs">
                      {Array.from({ length: b.w * b.h }, (_, s) => (
                        <span className="pb-stud" key={s}>
                          <Glyph color={b.color} />
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="pb-arrows" aria-hidden="true">
                    <i data-a="up" />
                    <i data-a="down" />
                    <i data-a="left" />
                    <i data-a="right" />
                  </span>
                </button>
              );
            })}
          </fieldset>
        </div>

        {clear && (
          <>
            <div className="pb-confetti" aria-hidden="true" style={{ '--delay': `${clearDelay}ms` } as CSSProperties}>
              {CONFETTI.map((c, i) => (
                <span
                  key={`${state.seq}-${i}`}
                  className={`pb-bit pb-c-${c.color}${c.stud ? ' is-stud' : ''}`}
                  style={
                    {
                      '--tx': `${c.x}px`,
                      '--peak': `${c.peak}px`,
                      '--fall': `${c.fall}px`,
                      '--rot': `${c.rot}deg`,
                      '--d': `${c.delay}ms`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
            <div className="pb-card" style={{ '--delay': `${clearDelay}ms` } as CSSProperties}>
              <section className="pb-card-panel" aria-labelledby={`${uid}-clear`}>
                <p className="pb-card-kicker">
                  {kicker ?? (onTour ? t.kicker(state.level + 1, tourBoardCount) : t.pip(state.level + 1, levelName))}
                </p>
                <h3 className="pb-card-title" id={`${uid}-clear`}>
                  {t.clear}
                </h3>
                <p className="pb-stars">
                  <span className="pb-sr">{t.starsOf(stars)}</span>
                  {[0, 1, 2].map((s) => (
                    <Star key={s} index={s} on={s < stars} />
                  ))}
                </p>
                <p className="pb-card-line">
                  {t.cardLine(state.moves)}{level.target}
                  {stars < 3 && (
                    <>
                      <br />
                      <span className="pb-card-hint">
                        {stars === 1 ? t.secondStar(level.target) : t.thirdStar}
                      </span>
                    </>
                  )}
                </p>
                <div className="pb-card-actions">
                  {onTour ? (
                    <button
                      ref={nextBtn}
                      type="button"
                      className="pb-btn pb-btn-go"
                      onClick={() => goLevel(isLast ? 0 : state.level + 1)}
                    >
                      {isLast ? t.again : t.next}
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M5 12h13m-5-6 6 6-6 6" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      ref={nextBtn}
                      type="button"
                      className="pb-btn pb-btn-go"
                      onClick={() => {
                        setGrabbed(null);
                        dispatch({ type: 'reset' });
                      }}
                    >
                      {t.replay}
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
                        <path d="M3 4v5h5" />
                      </svg>
                    </button>
                  )}
                  <button
                    type="button"
                    className="pb-btn pb-btn-quiet pb-btn-share"
                    aria-label={t.shareLabel}
                    onClick={shareResult}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 15V3.5m-4.5 4L12 3l4.5 4.5" />
                      <path d="M8 10.5H6.5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2H16" />
                    </svg>
                    {t.share}
                  </button>
                  {onTour && (
                    <button
                      type="button"
                      className="pb-btn pb-btn-quiet pb-btn-icon"
                      aria-label={t.replay}
                      title={t.replay}
                      onClick={() => dispatch({ type: 'reset' })}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
                        <path d="M3 4v5h5" />
                      </svg>
                    </button>
                  )}
                  <output className="pb-share-note" aria-live="polite" data-show={shareNote ? true : undefined}>
                    {shareNote}
                  </output>
                </div>
                <a className="pb-store" href={appStore} target="_blank" rel="noopener noreferrer">
                  {t.store[0]}<span>
                  {t.store[1]}
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 16 16 8m-6 0h6v6" />
                  </svg>
                  </span>
                </a>
              </section>
            </div>
          </>
        )}
      </div>

      <div className="pb-controls">
        <button
          type="button"
          className="pb-tool"
          onClick={() => dispatch({ type: 'undo' })}
          disabled={state.history.length === 0}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
          </svg>
          {t.undo}
        </button>
        <button
          type="button"
          className="pb-tool"
          onClick={() => {
            setGrabbed(null);
            dispatch({ type: 'reset' });
          }}
          disabled={state.moves === 0 && state.history.length === 0}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
            <path d="M3 4v5h5" />
          </svg>
          {t.resetButton}
        </button>
        <p className="pb-tip" aria-hidden="true">
          {grabbedColour ? (
            t.lifted(grabbedColour)
          ) : (
            <>
              <span className="pb-tip-long">{t.tipLong}</span>
              <span className="pb-tip-short">{t.tipShort}</span>
            </>
          )}
        </p>
      </div>

      <p className="pb-sr" id={`${uid}-hint`}>
        {t.hint}
      </p>
      <p className="pb-sr" id={`${uid}-gates`}>
        {t.gatesPrefix}{describeGates(t, level)}.
      </p>
      <output className="pb-sr" aria-live="polite" aria-atomic="true">
        {state.message}
        {state.seq % 2 ? '\u00a0' : ''}
      </output>
    </section>
  );
}

export default PlayableBoard;
