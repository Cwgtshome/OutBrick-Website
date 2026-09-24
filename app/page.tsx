import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { cast, levelRange, passes, villages } from '../lib/villages';
import { siteUrl } from '../lib/site';
import { APP_STORE_URL } from './store-badge';
import { AppStoreBadge, Course, homeNav, VillageFooter, VillageHeader } from './village-shell';
import { VillageMotion } from './village-motion';
import { HomeCast } from './components/home-cast';
import { PlayableBoard } from './components/playable-board';
import './styles/home.css';

export const metadata: Metadata = {
  title: 'OutBrick — a boulevard built out of brick',
  description:
    'A sliding-brick colour-sort puzzle: 2,000 solver-verified boards, 167 brick-built villages, nine brick friends. No clock, plays offline. Free on the App Store.',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'OutBrick',
    title: 'OutBrick — a boulevard built out of brick',
    description:
      '2,000 solver-verified boards, 167 brick-built villages, nine brick friends. One finger, no clock, nothing that interrupts a board.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'The OutBrick Journey map in Garden City, with Bloo, Peach and Sprout' }],
  },
};

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** The hero headline, word by word. Each word lands like a dropped brick. */
const headline: { word: string; line: number; slab?: boolean }[] = [
  { word: 'A', line: 0 },
  { word: 'boulevard', line: 0 },
  { word: 'built', line: 1 },
  { word: 'out', line: 1 },
  { word: 'of', line: 1 },
  { word: 'brick', line: 2, slab: true },
];

const heroFacts = [
  { text: '2,000 solver-verified boards', colour: '#e2352f' },
  { text: '167 brick-built villages', colour: '#ffc53d' },
  { text: 'No clock, anywhere', colour: '#26b9b0' },
  { text: 'Plays offline', colour: '#3b8bf0' },
];

const steps = [
  {
    n: 1,
    title: 'Drag a brick',
    body: 'It travels as far as you drag it, up to whatever stops it — a wall, a neighbour, a gate that refuses its colour.',
    src: '/assets/shots/b-early.jpg',
    alt: 'A packed OutBrick board at the start of a level, bricks filling the frame.',
  },
  {
    n: 2,
    title: 'Find the gate',
    body: 'Colour gates, keys and locks, frozen bricks that take three slides to thaw, generators, conveyors, crates, and arenas shaped like an H, an L or a cross.',
    src: '/assets/shots/b-mid.jpg',
    alt: 'An OutBrick board part-way through, with keys, locks, crates and coloured gates around the edge.',
  },
  {
    n: 3,
    title: 'Beat the target',
    body: 'A clear earns one star. Clearing inside the solver’s own move target earns two. Doing that without a single undo earns three.',
    src: '/assets/shots/b-clear.jpg',
    alt: 'The clear card after finishing an OutBrick board, with stars and coins.',
  },
];

const plaques = [
  { value: 2000, shown: '2,000', label: 'boards, each one proven solvable', b: '#e2352f', foot: '#8e1c18', ink: '#fff', studs: 4 },
  { value: 100, shown: '100', label: 'chapters of twenty levels', b: '#ffc53d', foot: '#b8780a', ink: '#1a1350', studs: 3 },
  { value: 0, shown: '0', label: 'clocks, timers or countdowns', b: '#26b9b0', foot: '#087e84', ink: '#0d2b3a', studs: 2 },
  { value: 8, shown: '8', label: 'board nouns: gates, keys, ice, crates and more', b: '#7b5cf0', foot: '#4a35b0', ink: '#fff', studs: 3 },
];

/** The six passes, each a different hour of the day. */
const passTints = ['#ffd98a', '#8ed1f3', '#6cc24a', '#26b9b0', '#f5851f', '#7b5cf0'];

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

const devices = [
  // Red and purple carry white lettering: the ink falls short of 4.5:1 on
  // both, and on red only the deeper journal red (#d42f29) clears it in white.
  { name: 'iPhone', b: '#d42f29', ink: '#fff' },
  { name: 'iPad', b: '#ffc53d' },
  { name: 'Mac', b: '#26b9b0' },
  { name: 'Apple TV', b: '#7b5cf0', ink: '#fff' },
  { name: 'Apple Vision Pro', b: '#3b8bf0' },
  { name: 'Apple Watch', b: '#3fc544' },
];

/** The bricks that leave through the gate at the foot of the page. */
const leavers = [
  { b: '#e2352f', foot: '#8e1c18', w: 3 },
  { b: '#ffc53d', foot: '#b8780a', w: 2 },
  { b: '#26b9b0', foot: '#087e84', w: 2 },
  { b: '#7b5cf0', foot: '#4a35b0', w: 3 },
  { b: '#3b8bf0', foot: '#1d4fa6', w: 2 },
  { b: '#3fc544', foot: '#1f7f2a', w: 2 },
];

function Studs({ count }: { count: number }) {
  return (
    <span className="studs-top" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

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
    <div className="ob-site ob-home">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={homeNav} home="#top" label="Sections" />

      <main id="main">
        {/* ============================ HERO ============================ */}
        <div id="top" className="hero" data-hero="">
          <div className="sky" aria-hidden="true">
            <div className="cloud" data-drift="22" style={{ '--w': '190px', '--t': '64s', left: '-3%', top: '9%' } as Vars}><div className="cloud-body"><i /></div></div>
            <div className="cloud" data-drift="-14" style={{ '--w': '120px', '--t': '48s', '--dx': '-40px', right: '4%', top: '6%' } as Vars}><div className="cloud-body"><i /></div></div>
            <div className="cloud hide-sm" data-drift="10" style={{ '--w': '84px', '--t': '40s', left: '41%', top: '3%' } as Vars}><div className="cloud-body"><i /></div></div>
            <div className="cloud hide-sm" data-drift="-26" style={{ '--w': '140px', '--t': '72s', left: '52%', top: '58%' } as Vars}><div className="cloud-body"><i /></div></div>
          </div>

          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Free on the App Store</p>
              <h1 className="hero-title">
                {[0, 1, 2].map((line) => (
                  <span className="line" key={line}>
                    {headline
                      .map((entry, index) => ({ ...entry, index }))
                      .filter((entry) => entry.line === line)
                      .map((entry, i, row) => (
                        <span key={entry.word}>
                          <span
                            className={`w ${entry.slab ? 'slab' : ''}`}
                            style={{ '--i': entry.index } as Vars}
                          >
                            {entry.slab ? (
                              <>
                                <span className="slab-studs" aria-hidden="true"><i /><i /><i /></span>
                                {entry.word}
                              </>
                            ) : (
                              entry.word
                            )}
                          </span>
                          {i < row.length - 1 ? ' ' : null}
                        </span>
                      ))}
                    {line < 2 ? ' ' : <span className="w dot" style={{ '--i': 6 } as Vars}>.</span>}
                  </span>
                ))}
              </h1>
              <p className="lede hero-lede">
                Slide a brick and it glides until something stops it. Get every brick out through the
                gate that matches its colour, and the board is clear. That is the whole rule, and it
                takes about five seconds to learn.
              </p>
              <div className="cta-row hero-cta">
                <AppStoreBadge campaign="home-hero" />
                <a className="btn brick-btn" href="#journey">
                  Walk a village
                  <span className="arrow" aria-hidden="true" />
                </a>
              </div>
              <ul className="hero-facts">
                {heroFacts.map((fact) => (
                  <li key={fact.text} style={{ '--c': fact.colour } as Vars}>{fact.text}</li>
                ))}
              </ul>
            </div>

            <div className="hero-stage" data-tilt="">
              <div className="stage-inner">
                <img className="peek peek-sprout" src="/assets/friends/sprout.webp" alt="" width={180} height={180} />
                <div className="phone">
                  <img
                    src="/assets/villages/garden-city.jpg"
                    width={520}
                    height={1131}
                    fetchPriority="high"
                    alt="The Journey map in Garden City: a brick-paved road winding between toy-brick houses and trees, with numbered level markers along it."
                  />
                </div>
                <img className="peek peek-bloo" src="/assets/friends/bloo.webp" alt="" width={200} height={200} />
                <img className="peek peek-peach" src="/assets/friends/peach.webp" alt="" width={180} height={180} />
                <div className="stage-plinth" aria-hidden="true"><i /><i /><i /></div>
              </div>
            </div>
          </div>

          <div className="hero-ground" aria-hidden="true">
            <div className="kerb" />
            <div className="road"><div className="paving" /></div>
          </div>
        </div>

        {/* ============================ THE RULE ============================ */}
        <section id="rule" className="band-ink rule">
          <div className="wrap">
            <Course />
            <div className="rule-top">
              <div className="section-head">
                <p className="eyebrow"><span className="idx">01</span>One rule to learn</p>
                <h2>A board looks impossible, and isn&rsquo;t.</h2>
                <p className="lede">
                  Every board is packed to the edges. One right move opens a pocket of space and the pile
                  unlocks section by section. A solver cleared all 2,000 of them before any of them
                  shipped, so nothing you meet is a dead end.
                </p>
              </div>

              <div className="rule-board" data-slot="playable-board">
                <PlayableBoard label="Try an OutBrick board: slide every brick out through its gate" />
              </div>
            </div>

            <ol className="steps">
              {steps.map((step) => (
                <li className="step" key={step.n} data-reveal="slide" style={{ '--d': `${(step.n - 1) * 110}ms` } as Vars}>
                  <figure className="step-shot">
                    <img loading="lazy" decoding="async" src={step.src} width={560} height={1217} alt={step.alt} />
                  </figure>
                  <div className="step-copy">
                    <span className="step-n" aria-hidden="true">{step.n}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="wall" aria-label="OutBrick in numbers">
              {plaques.map((plaque, index) => (
                <li
                  key={plaque.label}
                  data-reveal="drop"
                  style={{ '--b': plaque.b, '--foot': plaque.foot, '--ink': plaque.ink, '--d': `${index * 90}ms` } as Vars}
                >
                  <span className="plaque-brick">
                    <Studs count={plaque.studs} />
                    <b>
                      <span className="sr-only">{plaque.shown}</span>
                      <span aria-hidden="true" data-count={plaque.value}>{plaque.shown}</span>
                    </b>
                  </span>
                  <span className="plaque-label">{plaque.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================ THE JOURNEY ============================ */}
        <section id="journey" className="band-panel journey" data-journey="">
          <div className="journey-pin">
            <div className="journey-sticky">
              <div className="wrap journey-head">
                <div>
                  <p className="eyebrow"><span className="idx">02</span>The Journey</p>
                  <h2>Nothing on this road is a painted picture.</h2>
                </div>
                <p className="lede">
                  All 167 villages along the boulevard are built stud by stud out of brick — the ground,
                  the road, the trees, the lamps, the landmarks. Twenty-eight places carry it, each with
                  its own palette, paving, level markers and motion, and a variation layer keeps every
                  repeat reading as a different place.
                </p>
              </div>

              {/* A named <section> is a region landmark. It takes focus because it
                  scrolls sideways: without a tab stop, keyboard users could not
                  reach the villages past the first screen (WCAG 2.1.1). */}
              <section
                className="journey-window"
                // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- scrollable region must be keyboard-focusable
                tabIndex={0}
                aria-label="The 28 village themes of the OutBrick Journey. Scroll or drag sideways to walk the road."
              >
                <ol className="journey-track">
                  {villages.map((village, index) => (
                    <li className="village" key={village.slug} style={{ '--y': `${Math.round(Math.sin(index * 0.9) * 22)}px` } as Vars}>
                      <div className="frame">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={`/assets/villages/${village.slug}.jpg`}
                          width={520}
                          height={1131}
                          alt={`${village.name}, a brick-built village on the OutBrick Journey map.`}
                        />
                      </div>
                      <b>{village.name}</b>
                      <span>{levelRange(index)}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="wrap journey-meter" aria-hidden="true">
                <span className="meter-label">Garden City</span>
                <span className="meter"><i /></span>
                <span className="meter-label">Celebration Square</span>
              </div>
            </div>
          </div>

          <div className="wrap journey-after">
            <div className="passes-block">
              <p className="lede">
                The road comes round six times on the way to level 2,000, and every pass is a different
                hour of the day.
              </p>
              <ol className="passes">
                {passes.map((pass, index) => (
                  <li key={pass} data-reveal="drop" style={{ '--c': passTints[index], '--d': `${index * 70}ms` } as Vars}>
                    <span className="pass-n" aria-hidden="true">{index + 1}</span>
                    {pass}
                  </li>
                ))}
              </ol>
            </div>

            <div className="journey-notes">
              <article data-reveal="rise">
                <span className="tag">Twelve levels</span>
                <h3>A village is a place, not a chapter</h3>
                <p>Each village holds twelve levels and is worth thirty-six stars. Chapters are a separate count — still a hundred of them, twenty levels each.</p>
              </article>
              <article data-reveal="rise" style={{ '--d': '90ms' } as Vars}>
                <span className="tag">Built, not painted</span>
                <h3>One brick vocabulary</h3>
                <p>Every slab has its own depth under it, a rounded face, a lit strip on top and a seam at the foot — with studs only where the top is exposed. That is why twenty-eight different places still read as one world.</p>
              </article>
              <article data-reveal="rise" style={{ '--d': '180ms' } as Vars}>
                <span className="tag">Beyond 2,000</span>
                <h3>The road keeps going</h3>
                <p>Past the two-thousandth board the same curve keeps generating addresses, solved on your own device before you ever see them.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================ THE CAST ============================ */}
        <section id="cast" className="band-ink cast-band">
          <div className="wrap">
            <Course offset />
            <HomeCast friends={cast} />
            <p className="note">
              The friends animate and speak in text bubbles. They have no voices — character
              vocalisations were removed on 21 September 2026. VoiceOver announcements are untouched.
            </p>
          </div>
        </section>

        {/* ============================ WHAT IT COSTS ============================ */}
        <section id="fair" className="band-cream fair">
          <div className="wrap fair-grid">
            <div className="fair-head">
              <p className="eyebrow"><span className="idx">04</span>What it costs you</p>
              <h2>Said plainly, because most games don&rsquo;t.</h2>
              <p className="lede">
                OutBrick has lives and it has advertising. Here is exactly how both work, with nothing
                rounded in our favour.
              </p>
              <blockquote className="fair-quote">
                <p>
                  Two sentences we are not allowed to write, because they were true once and are not
                  now: <s>&ldquo;no ads&rdquo;</s> and <s>&ldquo;no lives&rdquo;</s>.
                </p>
                <p>
                  OutBrick shipped on both promises and both changed. The generosity is dialled up
                  rather than the mechanic absent — and this page is where we say so.
                </p>
              </blockquote>
            </div>

            <ol className="ledger">
              {ledger.map((row, index) => (
                <li key={row.title} data-reveal="slide" style={{ '--d': `${index * 80}ms` } as Vars}>
                  <span className="mark" aria-hidden="true" style={{ background: row.background, boxShadow: `0 4px 0 ${row.foot}`, color: row.ink }}>
                    {row.glyph}
                  </span>
                  <div>
                    <b>{row.title}</b>
                    <p>{row.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================ BUILT FOR APPLE ============================ */}
        <section id="apple" className="band-ink apple">
          <div className="wrap">
            <div className="apple-head">
              <div>
                <p className="eyebrow"><span className="idx">05</span>Built for Apple</p>
                <h2>One purchase. One progress. Six places to play it.</h2>
              </div>
              <p className="lede">
                iPhone, iPad, Mac, Apple TV, Apple Vision Pro and a standalone Apple Watch game. Signed
                in to iCloud, a new device picks up exactly where the old one stopped — level, coins,
                streak, Collection and all. It lives in your iCloud, not ours.
              </p>
            </div>

            <ul className="devices" aria-label="Platforms">
              {devices.map((device, index) => (
                <li key={device.name} data-reveal="drop" style={{ '--b': device.b, '--fg': device.ink, '--d': `${index * 60}ms` } as Vars}>{device.name}</li>
              ))}
            </ul>

            <div className="bento">
              <article className="tile tile-widgets" data-reveal="rise">
                <div className="tile-copy">
                  <span className="tag">Lock Screen</span>
                  <h3>Live Activities &amp; widgets</h3>
                  <p>Live Activities on the Lock Screen and in the Dynamic Island, Home Screen widgets and Lock Screen accessories, all reading the same shared snapshot.</p>
                </div>
                <figure className="tile-media" data-reveal="unmask">
                  <img loading="lazy" decoding="async" src="/assets/widgets-montage.webp" width={1400} height={710} alt="A montage of OutBrick Home Screen widgets: current level, the daily brick, a streak, the mascot of the day, the chapter and the endless board." />
                </figure>
              </article>

              <article className="tile tile-gc" data-reveal="rise" style={{ '--d': '80ms' } as Vars}>
                <span className="tag">Game Center</span>
                <span className="big-num" aria-hidden="true" data-n="57" />
                <h3>Leaderboards and 57 achievements</h3>
                <p>Lifetime leaderboards, fifty-seven achievements, and challenges you can send to someone you actually know.</p>
              </article>

              <article className="tile tile-msg" data-reveal="rise" style={{ '--d': '160ms' } as Vars}>
                <span className="tag">Messages</span>
                <h3>Stickers and challenges</h3>
                <p>An iMessage app with stickers and challenges you can drop straight into a thread, without anybody leaving Messages to do it.</p>
              </article>

              <article className="tile tile-cb" data-reveal="rise">
                <figure className="tile-media" data-reveal="unmask">
                  <img loading="lazy" decoding="async" src="/assets/home/colorblind-board.jpg" width={540} height={910} alt="An OutBrick board in colour-blind mode: each colour of brick carries its own glyph — diamonds, squares, crosses, stars — and each gate carries the matching one." />
                </figure>
                <div className="tile-copy">
                  <span className="tag">Colour-blind</span>
                  <h3>Three readability channels</h3>
                  <p>Colour-blind mode is on by default and stamps a distinct glyph on every brick and every gate, so colour is never the only sort key. Hue, shape and studs all carry it.</p>
                </div>
              </article>

              <article className="tile tile-a11y" data-reveal="rise" style={{ '--d': '80ms' } as Vars}>
                <span className="tag">Accessibility</span>
                <h3>Playable without seeing it</h3>
                <p>Every brick is a VoiceOver element that says its colour, shape and position, with an action for each way it can slide. Larger Text scales throughout and Reduce Motion is honoured everywhere — including on this page.</p>
              </article>

              <article className="tile tile-siri" data-reveal="rise" style={{ '--d': '160ms' } as Vars}>
                <span className="tag">System</span>
                <h3>Siri, Shortcuts, Spotlight</h3>
                <p>Ask Siri for a board, find one in Spotlight, and pick a session up on another device exactly where the bricks were.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================ CLOSE ============================ */}
        <section className="close" data-gate="">
          <div className="gate-lane" aria-hidden="true">
            <div className="lane-bricks">
              {leavers.map((brick, index) => (
                <i key={brick.b} style={{ '--b': brick.b, '--foot': brick.foot, '--w': brick.w, '--k': index } as Vars} />
              ))}
            </div>
            <span className="lane-clear">Board clear</span>
            <div className="gate" />
          </div>
          <div className="wrap close-inner">
            <div>
              <img className="close-icon" src="/assets/icon/logo-96.webp" alt="" width={96} height={96} loading="lazy" />
              <h2>Clear a board. Walk a little further.</h2>
            </div>
            <div>
              <p className="lede">
                Offline, one-handed, about two minutes a board, and happy to wait in the corner until
                you feel like moving one more brick.
              </p>
              <div className="cta-row"><AppStoreBadge campaign="home-close" /></div>
            </div>
          </div>
        </section>
      </main>

      <VillageFooter />
      <VillageMotion />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appData) }} />
    </div>
  );
}
