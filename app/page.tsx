import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { cast, levelRange, passes, villages } from '../lib/villages';
import { siteUrl } from '../lib/site';
import { APP_STORE_URL } from './store-badge';
import { AppStoreBadge, Course, homeNav, VillageFooter, VillageHeader } from './village-shell';
import { VillageMotion } from './village-motion';

export const metadata: Metadata = {
  title: 'OutBrick — a boulevard built out of brick',
  description:
    'OutBrick is a sliding-brick colour-sort puzzle. 2,000 solver-verified boards across 100 chapters, a Journey of 167 villages built stud by stud out of brick, and nine brick friends. Free on the App Store for iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch.',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'OutBrick',
    title: 'OutBrick — a boulevard built out of brick',
    description:
      '2,000 solver-verified boards, 167 brick-built villages, nine brick friends. One finger, no clock, nothing that interrupts a board.',
    images: [{ url: '/assets/icon/icon-512.png', width: 512, height: 512, alt: 'The OutBrick app icon' }],
  },
};

/**
 * One lane of the boulevard: fourteen villages, printed twice so the -50%
 * keyframe loops seamlessly. Rendered on the server, so the road is still a
 * road with JavaScript switched off.
 */
function Lane({ from, back = false }: { from: number; back?: boolean }) {
  const slice = Array.from({ length: 14 }, (_, i) => (i + from) % villages.length);
  const doubled = [...slice, ...slice];
  return (
    <div className={`lane ${back ? 'back' : ''}`}>
      {doubled.map((index, position) => {
        const village = villages[index];
        return (
          <div className="village" key={`${village.slug}-${position}`}>
            <div className="frame">
              <img
                loading="lazy"
                decoding="async"
                src={`/assets/villages/${village.slug}.jpg`}
                width={178}
                height={387}
                alt={`${village.name}, a brick-built village on the OutBrick Journey map.`}
              />
            </div>
            <b>{village.name}</b>
            <span>{levelRange(index)}</span>
          </div>
        );
      })}
    </div>
  );
}

const ledger = [
  {
    glyph: '♥',
    background: '#e2352f',
    foot: '#8e1c18',
    ink: '#fff',
    title: 'A life is the price of losing a board — never of playing or clearing one.',
    body: 'Opening a board needs a life and spends none. Clearing one costs nothing at all. A life goes only when an attempt ends without a clear. You hold five, eight with the Brick Pass, and one comes back every thirty minutes.',
  },
  {
    glyph: '↺',
    background: '#3b8bf0',
    foot: '#1d4fa6',
    ink: '#fff',
    title: 'The first undo on every board is free and cannot run out.',
    body: 'Beyond that, undos come from a tank of five that refills one every twenty-five minutes. The undo offered when a board wedges is free too, and sits outside the tank.',
  },
  {
    glyph: '◉',
    background: '#ffc53d',
    foot: '#b8780a',
    ink: '#1a1350',
    title: 'The rope is a move limit, not a clock.',
    body: 'Every board prints its target and its limit from the first tap. There is no countdown anywhere in the game. Run low and you are offered five more moves before anything else — 300 coins, then 500, then 900 inside one attempt.',
  },
  {
    glyph: '▶',
    background: '#7b5cf0',
    foot: '#4a35b0',
    ink: '#fff',
    title: 'Six rewarded video placements, every one opt-in and capped.',
    body: 'A life, five more moves, two undos, a booster armed before the first move, the clear card’s coins paid again, and a second spin of the Brick Wheel. Each carries its own daily cap. There are no banners and no interstitials, nothing plays that you did not press a button to see, and nothing interrupts a board. Saying no costs you nothing.',
  },
  {
    glyph: '●',
    background: '#26b9b0',
    foot: '#087e84',
    ink: '#fff',
    title: 'Coins and boosters are optional. There is no subscription.',
    body: 'Remove Ads switches advertising off for good and still pays you what the videos would have. The Brick Pass raises the lives cap from five to eight and turns advertising off for as long as it is held.',
  },
];

export default function HomePage() {
  const appData = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'OutBrick: Block Sort Puzzle',
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS, iPadOS, macOS, tvOS, visionOS, watchOS',
    url: siteUrl,
    installUrl: APP_STORE_URL,
    description:
      'A sliding-brick colour-sort puzzle: 2,000 solver-verified boards across 100 chapters, a Journey of 167 brick-built villages, and nine brick friends.',
  };

  return (
    <div className="ob-site">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={homeNav} home="#top" label="Sections" />

      <main id="main">
        {/* ============================ HERO ============================ */}
        <div id="top" className="hero">
          <div className="cloud" data-drift="26" style={{ '--w': '150px', left: '1%', top: '3%' } as CSSProperties}><i /></div>
          <div className="cloud" data-drift="-18" style={{ '--w': '104px', right: '5%', top: '11%' } as CSSProperties}><i /></div>
          <div className="cloud hide-sm" data-drift="14" style={{ '--w': '76px', left: '44%', top: '4%' } as CSSProperties}><i /></div>
          <div className="cloud hide-sm" data-drift="-30" style={{ '--w': '120px', left: '6%', top: '74%' } as CSSProperties}><i /></div>
          <div className="leaf hide-sm" data-drift="-40" style={{ left: '17%', top: '44%' }} />
          <div className="leaf hide-sm" data-drift="34" style={{ right: '22%', top: '56%' }} />
          <div className="leaf hide-sm" data-drift="-22" style={{ left: '40%', top: '66%' }} />

          <div className="wrap">
            <div className="hero-grid">
              <div>
                <p className="eyebrow">Free on the App Store</p>
                <h1>A boulevard<br />built out of <span className="gold">brick</span>.</h1>
                <p className="lede">
                  Slide a brick and it glides until something stops it. Get every brick out through the
                  gate that matches its colour, and the board is clear. That is the whole rule, and it
                  takes about five seconds to learn.
                </p>
                <div className="cta-row">
                  <AppStoreBadge />
                  <a className="btn ghost" href="#journey">Walk a village</a>
                </div>
                <ul className="facts">
                  <li>2,000 solver-verified boards</li>
                  <li>167 brick-built villages</li>
                  <li>No clock, anywhere</li>
                  <li>Plays offline</li>
                </ul>
              </div>
              <div className="phone">
                <img
                  src="/assets/villages/garden-city.jpg"
                  width={520}
                  height={1131}
                  alt="The Journey map in Garden City: a brick-paved road winding between toy-brick houses and trees, with numbered level markers along it."
                />
              </div>
            </div>
          </div>
          <div className="road" aria-hidden="true"><div className="paving" /></div>
        </div>

        {/* ============================ THE RULE ============================ */}
        <section id="rule" className="band-ink">
          <div className="wrap">
            <Course />
            <div className="section-head">
              <p className="eyebrow">One rule to learn</p>
              <h2>A board looks impossible, and isn&rsquo;t.</h2>
              <p className="lede">
                Every board is packed to the edges. One right move opens a pocket of space and the pile
                unlocks section by section. A solver cleared all 2,000 of them before any of them
                shipped, so nothing you meet is a dead end.
              </p>
            </div>

            <div className="grid g3 steps">
              <div className="reveal">
                <div className="step-shot">
                  <img src="/assets/shots/b-early.jpg" width={560} height={1217} alt="A packed OutBrick board at the start of a level, bricks filling the frame." />
                </div>
                <div className="step-copy">
                  <span className="step-n">1</span>
                  <h3>Drag a brick</h3>
                  <p>It travels as far as you drag it, up to whatever stops it — a wall, a neighbour, a gate that refuses its colour.</p>
                </div>
              </div>
              <div className="reveal">
                <div className="step-shot">
                  <img src="/assets/shots/b-mid.jpg" width={560} height={1217} alt="An OutBrick board part-way through, with keys, locks, crates and coloured gates around the edge." />
                </div>
                <div className="step-copy">
                  <span className="step-n">2</span>
                  <h3>Find the gate</h3>
                  <p>Colour gates, keys and locks, frozen bricks that take three slides to thaw, generators, conveyors, crates, and arenas shaped like an H, an L or a cross.</p>
                </div>
              </div>
              <div className="reveal">
                <div className="step-shot">
                  <img src="/assets/shots/b-clear.jpg" width={560} height={1217} alt="The clear card after finishing an OutBrick board, with stars and coins." />
                </div>
                <div className="step-copy">
                  <span className="step-n">3</span>
                  <h3>Beat the target</h3>
                  <p>A clear earns one star. Clearing inside the solver&rsquo;s own move target earns two. Doing that without a single undo earns three.</p>
                </div>
              </div>
            </div>

            <div className="grid g4" style={{ marginTop: 40 }}>
              <div className="brick plaque reveal"><b>2,000</b><span>boards, each one proven solvable</span></div>
              <div className="brick plaque reveal"><b>100</b><span>chapters of twenty levels</span></div>
              <div className="brick plaque reveal"><b>0</b><span>clocks, timers or countdowns</span></div>
              <div className="brick plaque reveal"><b>8</b><span>board nouns: gates, keys, ice, crates and more</span></div>
            </div>
          </div>
        </section>

        {/* ============================ THE JOURNEY ============================ */}
        <section id="journey" className="band-panel">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">The Journey</p>
              <h2>Nothing on this road is a painted picture.</h2>
              <p className="lede">
                All 167 villages along the boulevard are built stud by stud out of brick — the ground,
                the road, the trees, the lamps, the landmarks. Twenty-eight places carry it, each with
                its own palette, paving, level markers and motion, and a variation layer keeps every
                repeat reading as a different place.
              </p>
            </div>
          </div>

          <div className="boulevard" tabIndex={0} role="region" aria-label="The 28 village themes of the OutBrick Journey">
            <Lane from={0} />
          </div>
          <div className="boulevard" aria-hidden="true" style={{ marginTop: 6 }}>
            <Lane from={14} back />
          </div>

          <div className="wrap">
            <p className="lede" style={{ marginTop: 34 }}>
              The road comes round six times on the way to level 2,000, and every pass is a different
              hour of the day.
            </p>
            <ul className="passes">
              {passes.map((pass) => (
                <li key={pass}><span className="chip" aria-hidden="true" />{pass}</li>
              ))}
            </ul>

            <div className="grid g3" style={{ marginTop: 44 }}>
              <div className="brick card reveal">
                <span className="tag">Twelve levels</span>
                <h3>A village is a place, not a chapter</h3>
                <p>Each village holds twelve levels and is worth thirty-six stars. Chapters are a separate count — still a hundred of them, twenty levels each.</p>
              </div>
              <div className="brick card reveal">
                <span className="tag">Built, not painted</span>
                <h3>One brick vocabulary</h3>
                <p>Every slab has its own depth under it, a rounded face, a lit strip on top and a seam at the foot — with studs only where the top is exposed. That is why twenty-eight different places still read as one world.</p>
              </div>
              <div className="brick card reveal">
                <span className="tag">Beyond 2,000</span>
                <h3>The road keeps going</h3>
                <p>Past the two-thousandth board the same curve keeps generating addresses, solved on your own device before you ever see them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ THE CAST ============================ */}
        <section id="cast" className="band-ink">
          <div className="wrap">
            <Course offset />
            <div className="section-head">
              <p className="eyebrow">Nine brick friends</p>
              <h2>They live in the same material world you do.</h2>
              <p className="lede">
                Real 3D characters, not stickers pasted over a puzzle. Three share your home screen at a
                time and the cast turns over as you play — one waves goodbye and walks off, another
                walks on and says hello. They react when you poke them, follow you with their eyes as
                you tilt the phone, and each one has a victory move of its own.
              </p>
            </div>
            <div className="grid cast">
              {cast.map((friend, index) => (
                <div className="brick friend reveal" key={friend.slug}>
                  <div className="plinth">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={`/assets/friends/${friend.slug}.png`}
                      width={150}
                      height={150}
                      alt={`${friend.name}, a brick-shaped OutBrick character.`}
                      style={{ animationDelay: `${(index * 0.23).toFixed(2)}s` }}
                    />
                  </div>
                  <b>{friend.name}</b>
                  <span>{friend.line}</span>
                </div>
              ))}
            </div>
            <p className="note">
              The friends animate and speak in text bubbles. They have no voices — character
              vocalisations were removed on 21 September 2026. VoiceOver announcements are untouched.
            </p>
          </div>
        </section>

        {/* ============================ WHAT IT COSTS ============================ */}
        <section id="fair" className="band-cream">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What it costs you</p>
              <h2>Said plainly, because most games don&rsquo;t.</h2>
              <p className="lede">
                OutBrick has lives and it has advertising. Here is exactly how both work, with nothing
                rounded in our favour.
              </p>
            </div>

            <ul className="ledger">
              {ledger.map((row) => (
                <li key={row.title}>
                  <span className="mark" style={{ background: row.background, boxShadow: `0 4px 0 ${row.foot}`, color: row.ink }}>
                    {row.glyph}
                  </span>
                  <div>
                    <b>{row.title}</b>
                    <p>{row.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="note">
              Two sentences we are not allowed to write, because they were true once and are not now:
              &ldquo;no ads&rdquo; and &ldquo;no lives&rdquo;. OutBrick shipped on both promises and both
              changed. The generosity is dialled up rather than the mechanic absent — and this page is
              where we say so.
            </p>
          </div>
        </section>

        {/* ============================ BUILT FOR APPLE ============================ */}
        <section id="apple" className="band-ink">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Built for Apple</p>
              <h2>One purchase. One progress. Six places to play it.</h2>
              <p className="lede">
                iPhone, iPad, Mac, Apple TV, Apple Vision Pro and a standalone Apple Watch game. Signed
                in to iCloud, a new device picks up exactly where the old one stopped — level, coins,
                streak, Collection and all. It lives in your iCloud, not ours.
              </p>
            </div>

            <div className="grid g3">
              <div className="brick card reveal">
                <span className="tag">Lock Screen</span>
                <h3>Live Activities &amp; widgets</h3>
                <p>Live Activities on the Lock Screen and in the Dynamic Island, Home Screen widgets and Lock Screen accessories, all reading the same shared snapshot.</p>
              </div>
              <div className="brick card reveal">
                <span className="tag">Game Center</span>
                <h3>Leaderboards and 57 achievements</h3>
                <p>Lifetime leaderboards, fifty-seven achievements, and challenges you can send to someone you actually know.</p>
              </div>
              <div className="brick card reveal">
                <span className="tag">Messages</span>
                <h3>Stickers and challenges</h3>
                <p>An iMessage app with stickers and challenges you can drop straight into a thread, without anybody leaving Messages to do it.</p>
              </div>
              <div className="brick card reveal">
                <span className="tag">System</span>
                <h3>Siri, Shortcuts, Spotlight</h3>
                <p>Ask Siri for a board, find one in Spotlight, and pick a session up on another device exactly where the bricks were.</p>
              </div>
              <div className="brick card reveal">
                <span className="tag">Accessibility</span>
                <h3>Playable without seeing it</h3>
                <p>Every brick is a VoiceOver element that says its colour, shape and position, with an action for each way it can slide. Larger Text scales throughout and Reduce Motion is honoured everywhere — including on this page.</p>
              </div>
              <div className="brick card reveal">
                <span className="tag">Colour-blind</span>
                <h3>Three readability channels</h3>
                <p>Colour-blind mode is on by default and stamps a distinct glyph on every brick and every gate, so colour is never the only sort key. Hue, shape and studs all carry it.</p>
              </div>
            </div>

            <div className="shots">
              <figure className="reveal">
                <img src="/assets/shots/b-packed.jpg" width={560} height={1217} alt="A fully packed OutBrick board with no empty space." />
                <figcaption>Packed to the edges</figcaption>
              </figure>
              <figure className="reveal">
                <img src="/assets/villages/pirate-harbor.jpg" width={520} height={1131} alt="Pirate Harbor: a brick-built harbour village along the Journey road." />
                <figcaption>Pirate Harbor</figcaption>
              </figure>
              <figure className="reveal">
                <img src="/assets/villages/snowflake-village.jpg" width={520} height={1131} alt="Snowflake Village: a brick-built winter village along the Journey road." />
                <figcaption>Snowflake Village</figcaption>
              </figure>
              <figure className="reveal">
                <img src="/assets/shots/s-shop.jpg" width={560} height={1217} alt="The OutBrick shop, showing coin and booster bundles." />
                <figcaption>Optional, always</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ============================ CLOSE ============================ */}
        <section className="band-panel tight">
          <div className="wrap centred-block">
            <img className="close-icon" src="/assets/icon/icon-192.png" alt="" width={96} height={96} />
            <h2>Clear a board. Walk a little further.</h2>
            <p className="lede">
              Offline, one-handed, about two minutes a board, and happy to wait in the corner until you
              feel like moving one more brick.
            </p>
            <div className="cta-row centred"><AppStoreBadge /></div>
          </div>
        </section>
      </main>

      <VillageFooter />
      <VillageMotion />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appData) }} />
    </div>
  );
}
