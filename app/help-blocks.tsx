/**
 * The Help Centre's richer blocks (lib/help/model.ts): drawn mini-boards, encyclopedia entries,
 * question lists, the first-week path and the brick friends. Server-rendered, no script needed.
 *
 * A board is drawn with CSS in the game's own colours, each brick stamped with its colour-blind
 * symbol (the game's mapping: red circle, orange triangle, yellow square, green diamond, blue
 * plus, purple star, pink bar, teal hexagon). The drawing is decorative for assistive technology:
 * the block's `alt` is the description a screen reader hears, and it must say everything.
 */

import type { CSSProperties, ReactNode } from 'react';
import type { BoardColour, BoardSpec, EntryBlock, FriendId, FriendPose } from '../lib/help/model';
import { friends } from '../lib/mascots';

type Inline = (text: string) => ReactNode[];

const colours: Record<BoardColour, { fill: string; glyph: string; name: string }> = {
  R: { fill: '#e2372f', glyph: 'circle', name: 'red' },
  O: { fill: '#f5851f', glyph: 'triangle', name: 'orange' },
  Y: { fill: '#f9c823', glyph: 'square', name: 'yellow' },
  G: { fill: '#4cb944', glyph: 'diamond', name: 'green' },
  B: { fill: '#2c7be5', glyph: 'plus', name: 'blue' },
  P: { fill: '#9b5fe0', glyph: 'star', name: 'purple' },
  K: { fill: '#f26ab8', glyph: 'bar', name: 'pink' },
  T: { fill: '#26b9b0', glyph: 'hexagon', name: 'teal' },
};

const glyphPaths: Record<string, ReactNode> = {
  circle: <circle cx="12" cy="12" r="6.2" />,
  triangle: <path d="M12 5.2 19 18H5z" />,
  square: <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="1.5" />,
  diamond: <path d="M12 4.5 19.5 12 12 19.5 4.5 12z" />,
  plus: <path d="M9.6 5h4.8v4.6H19v4.8h-4.6V19H9.6v-4.6H5V9.6h4.6z" />,
  star: <path d="m12 4.4 2.3 4.8 5.2.7-3.8 3.6.9 5.2-4.6-2.5-4.6 2.5.9-5.2L4.5 9.9l5.2-.7z" />,
  bar: <rect x="5" y="9.4" width="14" height="5.2" rx="1.6" />,
  hexagon: <path d="M8.2 5.4h7.6l3.8 6.6-3.8 6.6H8.2L4.4 12z" />,
};

function Glyph({ name }: { name: string }) {
  return (
    <svg className="g" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {glyphPaths[name]}
    </svg>
  );
}

type Cell =
  | { kind: 'floor' }
  | { kind: 'void' }
  | { kind: 'brick'; c: BoardColour; special?: 'line-h' | 'line-v' | 'bomb' | 'dart'; ice?: number; locked?: boolean; focus?: boolean }
  | { kind: 'colour-bomb' }
  | { kind: 'hidden' }
  | { kind: 'crate'; layers: number }
  | { kind: 'statue' }
  | { kind: 'moss' }
  | { kind: 'portal' };

/** One cell token from a BoardSpec row (see lib/help/model.ts). Unknown tokens draw as floor. */
export function parseCell(token: string): Cell {
  if (token === '.') return { kind: 'floor' };
  if (token === '#') return { kind: 'void' };
  if (token === '*') return { kind: 'colour-bomb' };
  if (token === '?') return { kind: 'hidden' };
  if (token === 's') return { kind: 'statue' };
  if (token === 'm') return { kind: 'moss' };
  if (token === 'o') return { kind: 'portal' };
  if (/^x\d?$/.test(token)) return { kind: 'crate', layers: Number(token.slice(1)) || 1 };
  const c = token[0] as BoardColour;
  if (!colours[c]) return { kind: 'floor' };
  const rest = token.slice(1);
  const ice = /~(\d?)/.exec(rest);
  return {
    kind: 'brick',
    c,
    special: rest.includes('-') ? 'line-h' : rest.includes('|') ? 'line-v' : rest.includes('b') ? 'bomb' : rest.includes('d') ? 'dart' : undefined,
    ice: ice ? Number(ice[1]) || 1 : undefined,
    locked: rest.includes('!'),
    focus: rest.includes('+'),
  };
}

function CellView({ cell }: { cell: Cell }) {
  switch (cell.kind) {
    case 'void':
      return <span className="hb-cell void" />;
    case 'floor':
      return <span className="hb-cell floor" />;
    case 'moss':
      return <span className="hb-cell floor moss"><span className="tuft" /></span>;
    case 'portal':
      return <span className="hb-cell floor portal"><span className="ring" /></span>;
    case 'statue':
      return (
        <span className="hb-cell statue">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM7.5 20.5c0-4.6 2-8 4.5-8s4.5 3.4 4.5 8z" /></svg>
        </span>
      );
    case 'crate':
      return (
        <span className="hb-cell crate">
          <span className="planks" />
          {cell.layers > 1 ? <span className="num">{cell.layers}</span> : null}
        </span>
      );
    case 'hidden':
      return <span className="hb-cell hidden"><span className="q">?</span></span>;
    case 'colour-bomb':
      return <span className="hb-cell brick cbomb"><span className="orb" /></span>;
    case 'brick': {
      const col = colours[cell.c];
      return (
        <span className={`hb-cell brick${cell.focus ? ' focus' : ''}`} style={{ '--fill': col.fill } as CSSProperties}>
          <Glyph name={col.glyph} />
          {cell.special === 'line-h' ? <span className="sp line-h" /> : null}
          {cell.special === 'line-v' ? <span className="sp line-v" /> : null}
          {cell.special === 'bomb' ? <span className="sp bomb" /> : null}
          {cell.special === 'dart' ? (
            <svg className="sp dart" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 19 17 7M10 6h8v8" /></svg>
          ) : null}
          {cell.ice ? (
            <span className="ice">
              {cell.ice > 1 ? <span className="num">{cell.ice}</span> : null}
            </span>
          ) : null}
          {cell.locked ? (
            <svg className="lock" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 10V8a5 5 0 0 1 10 0v2h1.5v11h-13V10zm2.5 0h5V8a2.5 2.5 0 0 0-5 0z" /></svg>
          ) : null}
        </span>
      );
    }
  }
}

function Grid({ rows, gates, moves }: { rows: string[]; gates?: BoardSpec['gates']; moves?: BoardSpec['moves'] }) {
  const cells = rows.map((r) => r.trim().split(/\s+/).map(parseCell));
  const cols = Math.max(...cells.map((r) => r.length));
  return (
    <span className="hb-board" style={{ '--cols': cols, '--rows': cells.length } as CSSProperties}>
      <span className="hb-grid">
        {cells.flatMap((row, r) => Array.from({ length: cols }, (_, c) => <CellView key={`${r}-${c}`} cell={row[c] ?? { kind: 'void' }} />))}
      </span>
      {(gates ?? []).map((g, i) => {
        const col = colours[g.colour];
        return (
          <span
            key={`g${i}`}
            className={`hb-gate ${g.side} ${g.kind ?? 'plain'}`}
            style={{ '--fill': col?.fill ?? '#888', '--at': g.at } as CSSProperties}
          >
            {col ? <Glyph name={col.glyph} /> : null}
            {g.kind === 'counted' && g.count ? <span className="num">{g.count}</span> : null}
          </span>
        );
      })}
      {(moves ?? []).map((m, i) => (
        <span key={`m${i}`} className={`hb-move ${m.dir} ${m.kind ?? 'slide'}`} style={{ '--r': m.row, '--c': m.col } as CSSProperties}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h13m-5-6 6 6-6 6" /></svg>
        </span>
      ))}
    </span>
  );
}

/** A drawn board, with an optional "after" board, a caption, and the full description for screen readers. */
export function HelpBoard({ board, inline }: { board: Omit<BoardSpec, 'caption'> & { caption?: string }; inline: Inline }) {
  return (
    <figure className="hb-figure">
      <div className="hb-pair" aria-hidden="true">
        <Grid rows={board.rows} gates={board.gates} moves={board.moves} />
        {board.after ? (
          <>
            <span className="hb-then">
              <svg viewBox="0 0 24 24" focusable="false"><path d="M4 12h13m-5-6 6 6-6 6" /></svg>
            </span>
            <Grid rows={board.after.rows} gates={board.after.gates ?? board.gates} />
          </>
        ) : null}
      </div>
      <p className="sr-only">{board.alt}</p>
      {board.caption ? <figcaption>{inline(board.caption)}</figcaption> : null}
    </figure>
  );
}

export function HelpEntry({ entry, inline }: { entry: EntryBlock; inline: Inline }) {
  return (
    <section className="hb-entry" id={entry.id} aria-labelledby={`${entry.id}-t`}>
      {entry.board ? (
        <div className="hb-entry-art">
          <HelpBoard board={entry.board} inline={inline} />
        </div>
      ) : null}
      <div className="hb-entry-body">
        <h3 id={`${entry.id}-t`}>
          <a className="anchor" href={`#${entry.id}`} aria-hidden="true" tabIndex={-1}>#</a>
          {inline(entry.title)}
        </h3>
        <p>{inline(entry.what)}</p>
        <p className="how">{inline(entry.how)}</p>
        {entry.facts?.length ? (
          <dl className="hb-facts">
            {entry.facts.map((f) => (
              <div key={f.label}>
                <dt>{inline(f.label)}</dt>
                <dd>{inline(f.text)}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {entry.tip ? <p className="hb-tip">{inline(entry.tip)}</p> : null}
      </div>
    </section>
  );
}

export function HelpFaq({ items, inline }: { items: { q: string; a: string }[]; inline: Inline }) {
  return (
    <div className="hb-faq">
      {items.map((item, i) => (
        <details key={i}>
          <summary>
            <span className="q">{inline(item.q)}</span>
            <svg className="chev" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
          </summary>
          <div className="a">
            {item.a.split(/\n\n+/).map((para, j) => <p key={j}>{inline(para)}</p>)}
          </div>
        </details>
      ))}
    </div>
  );
}

export function HelpPath({ items, inline }: { items: { day: string; title: string; text: string }[]; inline: Inline }) {
  return (
    <ol className="hb-path">
      {items.map((item, i) => (
        <li key={i} style={{ '--i': i } as CSSProperties}>
          <span className="day">{inline(item.day)}</span>
          <span className="card">
            <span className="t">{inline(item.title)}</span>
            <span className="d">{inline(item.text)}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

const profile = (id: FriendId) => friends.find((f) => f.id === id);

/** The friend's picture in a pose. 192px captures shown at up to 96 CSS pixels. */
export function friendImage(id: FriendId, pose: FriendPose): string {
  return `/assets/friends/poses/${id}-${pose}.webp`;
}

/** A friend standing on a little studded plinth, moving in their own way (still when Reduce Motion is on). */
export function FriendFigure({ id, pose, size = 96, alt = '', cheerOnHover = true }: { id: FriendId; pose: FriendPose; size?: number; alt?: string; cheerOnHover?: boolean }) {
  const p = profile(id);
  return (
    <span className={`ff ff-${id}`} style={{ '--ff-size': `${size}px`, '--ff-colour': p?.colour ?? '#4b3fc9', '--ff-foot': p?.foot ?? '#2f2696' } as CSSProperties}>
      <span className="ff-body">
        <img className="ff-pose" src={friendImage(id, pose)} width={size} height={size} alt={alt} loading="lazy" decoding="async" />
        {cheerOnHover && pose !== 'cheer' ? <img className="ff-cheer" src={friendImage(id, 'cheer')} width={size} height={size} alt="" loading="lazy" decoding="async" /> : null}
      </span>
      <span className="ff-plinth" aria-hidden="true"><span /><span /><span /></span>
    </span>
  );
}

export function HelpFriend({ friend, pose, title, text, inline }: { friend: FriendId; pose: FriendPose; title: string; text: string; inline: Inline }) {
  const p = profile(friend);
  return (
    <div className="hb-friend" style={{ '--ff-colour': p?.colour ?? '#4b3fc9', '--ff-foot': p?.foot ?? '#2f2696', '--ff-ink': p?.ink ?? '#1a1350' } as CSSProperties}>
      <FriendFigure id={friend} pose={pose} size={92} />
      <div>
        <p className="name">{p?.name ?? friend}</p>
        <p className="t">{inline(title)}</p>
        <p>{inline(text)}</p>
      </div>
    </div>
  );
}
