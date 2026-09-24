import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/site';
import { AppStoreBadge, Course, editorialNav, VillageFooter, VillageHeader } from '../village-shell';
import { PlayBoard } from './play-board';
import '../styles/play.css';

export const metadata: Metadata = pageMetadata({
  path: '/play',
  title: 'How to play OutBrick: moves, stars, lives and undos',
  description:
    'Play an OutBrick board right here, then learn the rest of the loop: targets, move limits, stars, boosters, and what a life and an undo actually cost.',
});

/**
 * The play guide. It opens on a board you can actually play, because the rule
 * takes five seconds to learn and five paragraphs to describe; the loop around
 * the board — stars, the rope, lives, undos — follows underneath, in the same
 * words the home page's ledger uses, so the two never drift apart.
 */
const loop = [
  {
    colour: '#ffc53d',
    foot: '#b8780a',
    title: 'The rope is a move limit, not a clock',
    body: 'Every board prints its target and its limit from the first tap. There is no countdown anywhere in the game. Run low and you are offered five more moves before anything else.',
  },
  {
    colour: '#26b9b0',
    foot: '#087e84',
    title: 'Three stars, said plainly',
    body: 'A clear earns one star. Clearing inside the solver’s own move target earns two. Doing that without a single undo earns three.',
  },
  {
    colour: '#3b8bf0',
    foot: '#1d4fa6',
    title: 'The first undo on every board is free',
    body: 'Beyond that, undos come from a tank of five that refills one every twenty-five minutes. The undo offered when a board wedges is free too, and sits outside the tank.',
  },
  {
    colour: '#e2352f',
    foot: '#8e1c18',
    title: 'A life goes only when an attempt fails',
    body: 'Opening a board needs a life and spends none, and clearing one costs nothing. You hold five, eight with the Brick Pass, and one comes back every thirty minutes.',
  },
  {
    colour: '#7b5cf0',
    foot: '#4a35b0',
    title: 'Boosters and videos are optional',
    body: 'Coins buy boosters; rewarded videos are opt-in, capped, and never interrupt a board. Saying no costs you nothing.',
  },
];

const nouns = [
  ['Colour gates', 'A brick leaves only through the gate that matches its colour.'],
  ['Keys and locks', 'Pairs that open part of the board once the right move is made.'],
  ['Frozen bricks', 'Take three slides to thaw.'],
  ['Generators', 'Bring more bricks onto the board.'],
  ['Conveyors', 'Move what sits on them.'],
  ['Crates', 'Obstacles that shape which lanes are open.'],
  ['Shaped arenas', 'Boards shaped like an H, an L or a cross.'],
];

export default function PlayPage() {
  return (
    <div className="ob-site">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={editorialNav} label="Primary navigation" />

      <main id="main">
        <section className="band-ink play-hero">
          <div className="wrap play-hero-grid">
            <div>
              <Course />
              <p className="eyebrow">The play guide</p>
              <h1>Slide bricks <span className="gold">out.</span></h1>
              <p className="lede">
                Slide a brick and it glides until something stops it. Get every brick out through the
                gate that matches its colour, and the board is clear. That is the whole rule — try it on
                the board here, three boards from easy to a proper knot.
              </p>
              <ul className="play-keys">
                <li><b>Drag</b> a brick in any direction.</li>
                <li><b>Keyboard:</b> Tab to a brick, then Shift + an arrow key.</li>
                <li><b>Undo</b> is unlimited here; in the game the first one per board is free.</li>
              </ul>
            </div>
            <div className="play-board-wrap">
              <PlayBoard label="Play an OutBrick board" />
            </div>
          </div>
        </section>

        <section className="band-cream">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Around the board</p>
              <h2>The loop, with nothing rounded in our favour.</h2>
              <p className="lede">
                The full game adds a move limit, stars, lives and undos. Here is exactly how each one
                works.
              </p>
            </div>
            <ul className="ledger">
              {loop.map((row) => (
                <li key={row.title}>
                  <span className="mark" style={{ background: row.colour, boxShadow: `0 4px 0 ${row.foot}` }} aria-hidden="true" />
                  <div>
                    <b>{row.title}</b>
                    <p>{row.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band-ink">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What you will meet</p>
              <h2>What 2,000 boards are built from.</h2>
              <p className="lede">
                A solver cleared every one of the 2,000 boards before any of them shipped, so nothing you
                meet is a dead end. These are the pieces they are built from.
              </p>
            </div>
            <dl className="play-nouns">
              {nouns.map(([term, text]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="band-panel tight">
          <div className="wrap centred-block">
            <h2>Liked that? The game has 2,000 more.</h2>
            <p className="lede">
              A Journey of 167 brick-built villages and nine brick friends. Free on the App Store, and it
              plays offline.
            </p>
            <div className="cta-row centred"><AppStoreBadge /></div>
          </div>
        </section>
      </main>

      <VillageFooter />
    </div>
  );
}
