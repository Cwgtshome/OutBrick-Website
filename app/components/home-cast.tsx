'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import type { Friend } from '../../lib/villages';

type Vars = CSSProperties & Record<`--${string}`, string | number>;

const plinthColours = ['#e2352f', '#ffc53d', '#26b9b0', '#7b5cf0', '#3b8bf0', '#3fc544', '#f5851f', '#f26ab8', '#26b9b0'];
const plinthHeights = [18, 34, 24, 46, 16, 30, 40, 22, 28];
const plinthFeet = ['#8e1c18', '#b8780a', '#087e84', '#4a35b0', '#1d4fa6', '#1f7f2a', '#b85a10', '#b0367e', '#087e84'];

/**
 * The nine friends on a brick shelf. Pointing at one (hover, focus or a tap)
 * makes it hop and puts its line in the speech bubble, whose tail slides over
 * to whoever is talking. The whole shelf leans a little toward the pointer.
 *
 * Without script every line is printed in the bubble as a list, so nothing
 * here is only reachable by interacting. Each button is described by its own
 * line for assistive tech. Under Reduce Motion nothing hops or leans; the
 * bubble still changes.
 */
export function HomeCast({ friends }: { friends: Friend[] }) {
  const [active, setActive] = useState(0);
  const [hopping, setHopping] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [place, setPlace] = useState<{ x: string; tail: string }>({ x: '0px', tail: '48px' });
  const reduced = useRef(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced.current = query.matches;
    const onChange = () => {
      reduced.current = query.matches;
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  /* The bubble slides along above the shelf to whoever is talking, and its
     tail points at them — the same slide-and-stop a brick makes. */
  const placeTail = useCallback(() => {
    const stage = stageRef.current;
    const bubble = bubbleRef.current;
    const button = buttonRefs.current[active];
    if (!stage || !bubble || !button) return;
    const s = stage.getBoundingClientRect();
    const b = button.getBoundingClientRect();
    const centre = b.left + b.width / 2 - s.left;
    const room = Math.max(0, s.width - bubble.offsetWidth);
    const x = Math.max(0, Math.min(room, centre - 72));
    const tail = Math.max(30, Math.min(bubble.offsetWidth - 30, centre - x));
    setPlace({ x: `${x.toFixed(0)}px`, tail: `${tail.toFixed(0)}px` });
  }, [active]);

  useEffect(() => {
    placeTail();
    window.addEventListener('resize', placeTail);
    return () => window.removeEventListener('resize', placeTail);
  }, [placeTail]);

  const pick = (index: number, hop = true) => {
    setActive(index);
    if (hop && !reduced.current) {
      setHopping(null);
      window.requestAnimationFrame(() => setHopping(index));
    }
  };

  const lean = (event: ReactPointerEvent<HTMLUListElement>) => {
    if (reduced.current || event.pointerType !== 'mouse') return;
    for (const button of buttonRefs.current) {
      if (!button) continue;
      const r = button.getBoundingClientRect();
      const dx = (event.clientX - (r.left + r.width / 2)) / 260;
      const clamped = Math.max(-1, Math.min(1, dx));
      button.style.setProperty('--lean', `${(clamped * 7).toFixed(2)}deg`);
    }
  };
  const unlean = () => {
    for (const button of buttonRefs.current) button?.style.setProperty('--lean', '0deg');
  };

  return (
    <div className="cast-layout">
      <div className="cast-head">
        <div>
          <p className="eyebrow"><span className="idx">03</span>Nine brick friends</p>
          <h2>They live in the same material world you do.</h2>
        </div>
        <div>
        <p className="lede">
          Real 3D characters, not stickers pasted over a puzzle. Three share your home screen at a
          time and the cast turns over as you play — one waves goodbye and walks off, another walks
          on and says hello. They react when you poke them, follow you with their eyes as you tilt
          the phone, and each one has a victory move of its own.
        </p>
        <a className="btn brick-btn cast-link" href="/mascots">
          Meet the friends
          <span className="arrow" aria-hidden="true" />
        </a>
        </div>
      </div>

      <div className="cast-stage" ref={stageRef}>
        <div className="bubble" ref={bubbleRef} style={{ '--tail': place.tail, '--bx': place.x } as Vars}>
          {friends.map((friend, index) => (
            <p key={friend.slug} id={`line-${friend.slug}`} className="bubble-line" data-active={index === active ? '' : undefined}>
              <b>{friend.name}</b>
              <span>{friend.line}</span>
            </p>
          ))}
        </div>

        <ul className="shelf" onPointerMove={lean} onPointerLeave={unlean}>
          {friends.map((friend, index) => (
            <li
              key={friend.slug}
              style={{ '--i': index, '--b': plinthColours[index], '--foot': plinthFeet[index], '--h': `${plinthHeights[index]}px` } as Vars}
            >
              <button
                type="button"
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                className={`friend-btn ${hopping === index ? 'hop' : ''}`}
                aria-pressed={index === active}
                aria-describedby={`line-${friend.slug}`}
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse' && index !== active) pick(index);
                }}
                onFocus={() => pick(index, false)}
                onClick={() => pick(index)}
                onAnimationEnd={() => setHopping(null)}
              >
                <span className="friend-body">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`/assets/friends/${friend.slug}.png`}
                    width={180}
                    height={180}
                    alt=""
                  />
                </span>
                <span className="friend-name">{friend.name}</span>
              </button>
              <span className="plinth" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
