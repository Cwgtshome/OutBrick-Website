/**
 * Each of the nine friends has a signature move (see styles/friend-moves.css
 * for the choreography and the reasons). This is the small amount of script
 * the moves need: it starts a move on a host element and scatters that
 * friend's particles — stars, notes, snowflakes, dust — around it, then
 * removes them again.
 *
 * Markup contract, the same everywhere a friend appears:
 *   <… data-friend-move="poppy">      the host: a positioned box
 *     <… class="fm-actor">            what moves (the image or a wrapper)
 * The particle layer (`.fm-fx`) is added to the host on first use. It is
 * absolutely positioned and pointer-transparent, so nothing reflows.
 *
 * Nothing happens under Reduce Motion: no class, no particles.
 */

export type FriendSlug = 'bloo' | 'peach' | 'sprout' | 'bricko' | 'zippy' | 'vio' | 'moss' | 'flurry' | 'poppy';

/**
 * A burst: `n` particles of one kind from an origin (in % of the host),
 * starting at `at` ms (and `every` ms apart, if set). `fan` spreads them
 * across `spread` px and up by about `rise`; `radial` throws them all round
 * in a ring `spread` px across; `scatter` places them anywhere in a
 * `spread` × `rise` box around the origin.
 */
type Burst = {
  kind: string;
  n: number;
  at: number;
  ox: number;
  oy: number;
  spread: number;
  rise: number;
  every?: number;
  /** Added to every particle's sideways travel. */
  dx?: number;
  mode?: 'fan' | 'radial' | 'scatter';
};

/* One beat at 112 bpm, which is the tempo Vio grooves to in the game. */
const BEAT = 60000 / 112;

/** Move length in ms. The stylesheet reads it back as --fm-dur. */
export const moveDuration: Record<FriendSlug, number> = {
  bloo: 1050,
  peach: 1400,
  sprout: 1250,
  bricko: 1200,
  zippy: 1500,
  vio: Math.round(BEAT * 4),
  moss: 1900,
  flurry: 2100,
  poppy: 1600,
};

const bursts: Record<FriendSlug, Burst[]> = {
  // a glint off the watch when he lands facing front again
  bloo: [{ kind: 'glint', n: 4, at: 740, every: 60, ox: 60, oy: 48, spread: 60, rise: 50, mode: 'scatter' }],
  // a worried "!" first, then confetti when the pile opens
  peach: [
    { kind: 'bang', n: 1, at: 60, ox: 50, oy: 2, spread: 0, rise: 26 },
    { kind: 'confetti', n: 14, at: 1000, ox: 50, oy: 34, spread: 170, rise: 46 },
  ],
  // the question nobody else asked, then leaves shaken loose by the flip
  sprout: [
    { kind: 'ask', n: 1, at: 40, ox: 64, oy: 0, spread: 0, rise: 24 },
    { kind: 'leaf', n: 4, at: 800, ox: 50, oy: 12, spread: 90, rise: 30 },
  ],
  // the landing throws up dust both ways
  bricko: [{ kind: 'dust', n: 8, at: 670, ox: 50, oy: 96, spread: 150, rise: 18 }],
  // dizzy stars circle his head once the third hop lands
  zippy: [{ kind: 'dizzy', n: 3, at: 780, ox: 50, oy: 6, spread: 0, rise: 0 }],
  // a note on every beat
  vio: [
    { kind: 'note', n: 2, at: 60, every: BEAT * 2, ox: 22, oy: 22, spread: 20, dx: -34, rise: 70 },
    { kind: 'note', n: 2, at: 60 + BEAT, every: BEAT * 2, ox: 78, oy: 22, spread: 20, dx: 34, rise: 70 },
  ],
  // a clap mark over his head on each slow clap
  moss: [{ kind: 'clap', n: 3, at: 475, every: 515, ox: 50, oy: 0, spread: 0, rise: 0 }],
  // snow falls round her while she floats
  flurry: [{ kind: 'flake', n: 8, at: 0, every: 170, ox: 50, oy: -6, spread: 150, rise: -80 }],
  // sparkles twinkle round her while she twirls, then the wand bursts into stars
  poppy: [
    { kind: 'sparkle', n: 10, at: 200, every: 80, ox: 50, oy: 45, spread: 180, rise: 150, mode: 'scatter' },
    { kind: 'star', n: 12, at: 1150, ox: 80, oy: 28, spread: 190, rise: 20, mode: 'radial' },
  ],
};

const palette: Partial<Record<string, string[]>> = {
  confetti: ['#ffc53d', '#e2352f', '#26b9b0', '#7b5cf0', '#f26ab8', '#3b8bf0'],
  star: ['#ffd84d', '#ffc53d', '#ff9ad5', '#fff3b0'],
  sparkle: ['#fff7d1', '#ffe27a', '#ffb3e1'],
  note: ['#c7b8ff', '#ffffff', '#ffc53d'],
  leaf: ['#6cc24a', '#3fc544', '#9be07a'],
  glint: ['#ffffff', '#fff3b0'],
};

const reduced = () =>
  typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isSlug = (value: string | undefined): value is FriendSlug => !!value && value in moveDuration;

/* A small deterministic jitter so a burst looks scattered but never lumpy. */
const jitter = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

function spawn(host: HTMLElement, slug: FriendSlug) {
  let layer = host.querySelector<HTMLElement>(':scope > .fm-fx');
  if (!layer) {
    layer = document.createElement('span');
    layer.className = 'fm-fx';
    layer.setAttribute('aria-hidden', 'true');
    host.appendChild(layer);
  }
  const made: HTMLElement[] = [];
  let last = 0;
  const salt = Math.random() * 10;
  for (const burst of bursts[slug]) {
    const colours = palette[burst.kind];
    for (let i = 0; i < burst.n; i++) {
      const p = document.createElement('i');
      p.className = `fm-p fm-${burst.kind}`;
      const r1 = jitter(i, salt);
      const r2 = jitter(i + 7, salt);
      const t = burst.n === 1 ? 0.5 : i / (burst.n - 1);
      let x: number;
      let y: number;
      if (burst.mode === 'radial') {
        const a = (i / burst.n) * Math.PI * 2 + r1 * 0.4;
        const reach = (burst.spread / 2) * (0.65 + r2 * 0.45);
        x = Math.cos(a) * reach;
        y = Math.sin(a) * reach * 0.85 - burst.rise;
      } else if (burst.mode === 'scatter') {
        // alternate sides so the scatter is even, then jitter within each side
        x = (i % 2 ? 1 : -1) * (0.3 + r1 * 0.7) * (burst.spread / 2);
        y = (r2 - 0.5) * burst.rise;
      } else {
        // fan evenly across the spread, with a little jitter
        x = (t - 0.5) * burst.spread + (r1 - 0.5) * 18;
        y = -burst.rise * (0.6 + r2 * 0.6);
      }
      x += burst.dx ?? 0;
      const delay = burst.at + (burst.every ? i * burst.every : r2 * 90);
      last = Math.max(last, delay);
      p.style.cssText =
        `left:${burst.ox}%;top:${burst.oy}%;--x:${x.toFixed(1)}px;--y:${y.toFixed(1)}px;` +
        `--r:${Math.round((r1 - 0.5) * 540)}deg;--s:${(0.7 + r2 * 0.6).toFixed(2)};--d:${Math.round(delay)}ms;--k:${i}` +
        (colours ? `;--c:${colours[i % colours.length]}` : '');
      made.push(p);
    }
  }
  for (const node of made) layer.appendChild(node);
  // a particle runs for at most 1.4s after it starts
  window.setTimeout(() => made.forEach((n) => n.remove()), last + 1500);
}

/**
 * Play a host's move once. A move already running is left to finish, so
 * hover, focus and a tap arriving together play it a single time.
 */
export function playFriendMove(host: HTMLElement | null | undefined) {
  if (!host || reduced()) return;
  const slug = host.dataset.friendMove;
  if (!isSlug(slug) || host.classList.contains('is-moving')) return;
  const duration = moveDuration[slug];
  host.style.setProperty('--fm-dur', `${duration}ms`);
  host.classList.add('is-moving');
  spawn(host, slug);
  window.setTimeout(() => host.classList.remove('is-moving'), duration + 40);
}

/**
 * For pages rendered on the server with no component of their own (the
 * mascots pages): one set of delegated listeners plays the move of whichever
 * friend is pointed at, focused or tapped. Returns a cleanup.
 */
export function bindFriendMoves(root: Document | HTMLElement = document) {
  const hostFrom = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return null;
    const direct = target.closest<HTMLElement>('[data-friend-move]');
    if (direct) return direct;
    const holder = target.closest<HTMLElement>('[data-friend-moves]');
    return holder?.querySelector<HTMLElement>('[data-friend-move]') ?? null;
  };
  const over = (event: Event) => {
    const e = event as PointerEvent;
    if (e.pointerType !== 'mouse') return;
    const host = hostFrom(e.target);
    const scope = host?.closest('[data-friend-moves]') ?? host;
    if (!host || (e.relatedTarget instanceof Node && scope?.contains(e.relatedTarget))) return;
    playFriendMove(host);
  };
  const down = (event: Event) => {
    const e = event as PointerEvent;
    if (e.pointerType === 'mouse') return;
    playFriendMove(hostFrom(e.target));
  };
  const focus = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.matches?.(':focus-visible')) playFriendMove(hostFrom(target));
  };
  root.addEventListener('pointerover', over);
  root.addEventListener('pointerdown', down);
  root.addEventListener('focusin', focus);
  return () => {
    root.removeEventListener('pointerover', over);
    root.removeEventListener('pointerdown', down);
    root.removeEventListener('focusin', focus);
  };
}
