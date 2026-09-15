'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  Accessibility,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  Cloud,
  Gamepad2,
  HeartHandshake,
  LayoutGrid,
  Map,
  Menu,
  MessageCircle,
  Mic,
  Palette,
  Play,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Ticket,
  Trophy,
  Watch,
  WifiOff,
  X,
} from 'lucide-react';
import { getMascotOfTheDay } from '../lib/mascots';
import { StoreBadge } from './store-badge';

type ViewId = 'home' | 'play' | 'journey' | 'shop' | 'pass' | 'wedged';

const viewData: Array<{
  id: ViewId;
  label: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
  accent: string;
}> = [
  {
    id: 'home',
    label: 'Home',
    kicker: 'The village',
    title: 'A little stage for every clear.',
    description: 'Three real-time mascots, a streak that pays a hundred coins for your first board of the day, and one inviting Level button. Home keeps the ritual warm without getting in the way.',
    image: '/assets/home-screen.png',
    accent: 'var(--yellow)',
  },
  {
    id: 'play',
    label: 'Play',
    kicker: 'The board',
    title: 'Slide. Match. Out.',
    description: 'One finger moves a brick until it meets something. Match the edge gate, clear the board, and take the free undo every board comes with when a move lands wrong.',
    image: '/assets/play-screen.png',
    accent: 'var(--blue)',
  },
  {
    id: 'journey',
    label: 'Journey',
    kicker: 'The path',
    title: 'A chapter path that keeps climbing.',
    description: 'Twenty worlds, 2,000 solver-verified boards, three stars a board, and a reward rhythm that makes the next small step feel worth taking.',
    image: '/assets/journey-screen.png',
    accent: 'var(--pink)',
  },
  {
    id: 'shop',
    label: 'Shop',
    kicker: 'The shelf',
    title: 'Boosters when you want them.',
    description: 'Coins arrive through play. Every item on the shelf is one named thing at one price, with its contents on the label—no crates, no mystery packs, no subscription.',
    image: '/assets/shop-screen.png',
    accent: 'var(--orange)',
  },
  {
    id: 'pass',
    label: 'Pass',
    kicker: 'The season',
    title: 'Thirty tiers, two tracks.',
    description: 'The free track progresses with every clear. Brick Pass adds a premium lane, but the core journey never locks the player out.',
    image: '/assets/pass-screen.png',
    accent: 'var(--gold)',
  },
  {
    id: 'wedged',
    label: 'Wedged',
    kicker: 'The safety net',
    title: 'A wedged board is our fault.',
    description: 'When the solver proves no clear is left, Peach thinks it through. The undo on this card is free and never comes out of your tank—getting out of a board the game wedged is never charged for.',
    image: '/assets/wedged-screen.png',
    accent: 'var(--green)',
  },
];

const mascots = [
  {
    id: 'bloo',
    name: 'Bloo',
    role: 'The blue hero',
    copy: 'Round, bright, and ready to celebrate the next clean exit.',
    image: '/assets/bloo-idle.png',
    cheer: '/assets/bloo-cheer.png',
    color: 'var(--blue)',
  },
  {
    id: 'peach',
    name: 'Peach',
    role: 'The gentle worrier',
    copy: 'Pear-shaped, thoughtful, and secretly proud when a hard board opens up.',
    image: '/assets/peach-idle.png',
    cheer: '/assets/peach-think.png',
    color: 'var(--orange)',
  },
  {
    id: 'sprout',
    name: 'Sprout',
    role: 'The curious kid',
    copy: 'Tall, green, and always looking for the clever route through the pile.',
    image: '/assets/sprout-idle.png',
    cheer: '/assets/sprout-cheer.png',
    color: 'var(--green)',
  },
];

const featureTabs = [
  { id: 'relaxed', label: 'Relaxed by default', icon: HeartHandshake },
  { id: 'colour', label: 'Colour-blind ready', icon: Palette },
  { id: 'offline', label: 'Offline-first', icon: WifiOff },
];

function OutBrickLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark-compact' : ''}`} aria-label="OutBrick">
      {'OUTBRICK'.split('').map((letter, index) => (
        <span key={`${letter}-${index}`} className={`wordmark-letter letter-${index}`}>
          {letter}
        </span>
      ))}
    </span>
  );
}

function GlossButton({
  children,
  color = 'green',
  href,
  onClick,
  type = 'button',
}: {
  children: ReactNode;
  color?: 'green' | 'blue' | 'gold' | 'purple';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const content = <span className="gloss-button-inner">{children}</span>;
  if (href) {
    return (
      <a className={`gloss-button gloss-${color}`} href={href}>
        {content}
      </a>
    );
  }
  return (
    <button className={`gloss-button gloss-${color}`} onClick={onClick} type={type}>
      {content}
    </button>
  );
}

function IphoneFrame({
  image,
  alt,
  className = '',
  priority = false,
}: {
  image: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`iphone-frame ${className}`}>
      <div className="iphone-rim">
        <div className="iphone-button iphone-button-silent" />
        <div className="iphone-button iphone-button-volume iphone-volume-one" />
        <div className="iphone-button iphone-button-volume iphone-volume-two" />
        <div className="iphone-button iphone-button-power" />
        <div className="iphone-screen">
          <div className="iphone-screen-glare" />
          <img src={image} alt={alt} title={alt} loading={priority ? 'eager' : 'lazy'} />
        </div>
      </div>
    </div>
  );
}

function CoinPill({ value = '870' }: { value?: string }) {
  return (
    <span className="coin-pill">
      <span className="coin-dot" />
      <span>{value}</span>
      <span className="coin-plus">+</span>
    </span>
  );
}

function BrickRow({ colors }: { colors: string[] }) {
  return (
    <span className="brick-row" aria-hidden="true">
      {colors.map((color, index) => (
        <span key={`${color}-${index}`} className="mini-brick" style={{ background: color }}>
          <span className="mini-stud" />
          <span className="mini-stud mini-stud-two" />
        </span>
      ))}
    </span>
  );
}

function WidgetCard({
  eyebrow,
  title,
  children,
  mascot,
  mascotLabel,
  color = 'blue',
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  mascot?: string;
  mascotLabel?: string;
  color?: 'blue' | 'green' | 'orange' | 'purple';
}) {
  return (
    <article className={`widget-card widget-${color}`}>
      <div className="widget-topline">
        <span>{eyebrow}</span>
        {mascot ? <img src={mascot} alt={mascotLabel ?? 'OutBrick mascot illustration'} title={mascotLabel ?? 'OutBrick mascot illustration'} /> : <span className="widget-corner-dot" />}
      </div>
      <h3>{title}</h3>
      <div className="widget-content">{children}</div>
    </article>
  );
}

export default function Home() {
  const [activeView, setActiveView] = useState<ViewId>('home');
  const [selectedMascot, setSelectedMascot] = useState('bloo');
  const [mascotOfTheDay, setMascotOfTheDay] = useState(() => getMascotOfTheDay());
  const [feature, setFeature] = useState('relaxed');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState('');

  const currentView = viewData.find((view) => view.id === activeView) ?? viewData[0];

  useEffect(() => {
    const refreshMascotOfTheDay = () => setMascotOfTheDay(getMascotOfTheDay());
    const dailyRefresh = window.setInterval(refreshMascotOfTheDay, 60_000);
    const hash = window.location.hash.replace('#', '');
    if (viewData.some((view) => view.id === hash)) {
      setActiveView(hash as ViewId);
    }
    if (hash === 'widgets' || hash === 'characters') {
      document.getElementById(hash)?.scrollIntoView();
    }
    return () => window.clearInterval(dailyRefresh);
  }, []);

  function jumpTo(id: string) {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function selectView(id: ViewId) {
    setActiveView(id);
    window.history.replaceState(null, '', `#${id}`);
  }

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2600);
  }

  return (
    <div className="site-shell">
      <div className="site-grain" aria-hidden="true" />
      <header className="site-nav">
        <a className="nav-brand" href="#top" aria-label="OutBrick home">
          <span className="nav-app-icon">
            <img src="/icon.png" alt="OutBrick app icon" title="OutBrick app icon" />
          </span>
          <span>
            <OutBrickLogo compact />
            <small>the sliding-brick puzzle</small>
          </span>
        </a>
        <div className="nav-side-actions">
          <StoreBadge compact />
          <button className="nav-menu" type="button" aria-label="Toggle navigation" onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav className={`nav-links ${mobileOpen ? 'nav-links-open' : ''}`} aria-label="Primary navigation">
          <a href="#experience" onClick={() => setMobileOpen(false)}>The game</a>
          <a href="#characters" onClick={() => setMobileOpen(false)}>Mascots</a>
          <a href="#widgets" onClick={() => setMobileOpen(false)}>Widgets</a>
          <a href="/blog" onClick={() => setMobileOpen(false)}>Journal</a>
          <a href="/about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="/authors" onClick={() => setMobileOpen(false)}>Authors</a>
          <a href="/research" onClick={() => setMobileOpen(false)}>Research</a>
          <a href="/support" onClick={() => setMobileOpen(false)}>Support</a>
          <a className="nav-cta" href="#experience" onClick={() => setMobileOpen(false)}>Explore OutBrick <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> A puzzle with room to breathe</div>
            <h1>
              <span>Slide bricks</span>
              <span className="hero-title-accent">out.</span>
            </h1>
            <p className="hero-lede">
              OutBrick is the one-finger colour-sort puzzle that makes a tiny space feel like a whole toy box. Match every brick to its gate, keep the good bits, and come back tomorrow.
            </p>
            <div className="hero-actions">
              <GlossButton href="#experience">See the game <ArrowUpRight size={18} /></GlossButton>
              <a className="quiet-link" href="#widgets"><span className="quiet-link-icon"><Sparkles size={16} /></span> Put it on your Home Screen</a>
            </div>
            <div className="hero-proof">
              <span><Check size={15} /> 2,000 solver-verified boards</span>
              <span><Check size={15} /> nothing interrupts a board</span>
              <span><Check size={15} /> a free undo on every board</span>
            </div>
          </div>

          <div className="hero-stage" aria-label="OutBrick Home screen preview">
            <div className="stage-glow" />
            <div className="stage-sunburst" />
            <div className="stage-cloud cloud-one" />
            <div className="stage-cloud cloud-two" />
            <div className="stage-bricks stage-bricks-left"><BrickRow colors={['#E2372F', '#F9C823', '#2C7BE5']} /></div>
            <div className="stage-bricks stage-bricks-right"><BrickRow colors={['#4CB944', '#F26AB8']} /></div>
            <img className="hero-mascots" src="/assets/mascots-group.png" alt="Bloo, Peach, and Sprout OutBrick mascot group" title="Bloo, Peach, and Sprout OutBrick mascot group" />
            <IphoneFrame image="/assets/home-screen.png" alt="OutBrick Home screen with Bloo, Peach, and Sprout" priority />
            <div className="hero-stage-label"><span>Home</span><span>Level 32</span><span><CoinPill /></span></div>
          </div>
        </section>

        <section className="promise-strip" aria-label="OutBrick principles">
          <div><span className="promise-icon promise-green"><HeartHandshake size={21} /></span><strong>You choose the ads</strong><small>Rewarded video, nothing more.</small></div>
          <div><span className="promise-icon promise-blue"><Palette size={21} /></span><strong>Readable by design</strong><small>Colour, shape, and studs.</small></div>
          <div><span className="promise-icon promise-gold"><CircleDollarSign size={21} /></span><strong>Play pays</strong><small>Clear boards. Earn coins.</small></div>
          <div><span className="promise-icon promise-pink"><Sparkles size={21} /></span><strong>Always a little alive</strong><small>Mascots, motion, haptics.</small></div>
        </section>

        <section id="experience" className="section-block experience-section">
          <div className="section-heading section-heading-split">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-purple" /> Inside the shell</div>
              <h2>Every screen speaks<br /><span>the same toy language.</span></h2>
            </div>
            <p>OutBrick keeps the chrome familiar from Home to the last brick: rounded SF Pro, deep indigo, glossy moulded controls, and just enough motion to make a clear land.</p>
          </div>

          <div className="experience-layout">
            <div className="view-selector" role="tablist" aria-label="OutBrick screens">
              {viewData.map((view) => (
                <button
                  key={view.id}
                  className={`view-tab ${activeView === view.id ? 'view-tab-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeView === view.id}
                  onClick={() => selectView(view.id)}
                >
                  <span className="view-tab-icon" style={{ color: view.accent }}>
                    {view.id === 'home' && <Gamepad2 size={19} />}
                    {view.id === 'play' && <Play size={19} />}
                    {view.id === 'journey' && <Map size={19} />}
                    {view.id === 'shop' && <ShoppingBag size={19} />}
                    {view.id === 'pass' && <Ticket size={19} />}
                    {view.id === 'wedged' && <RotateCcw size={19} />}
                  </span>
                  <span>{view.label}</span>
                  {activeView === view.id && <ChevronRight className="view-tab-chevron" size={17} />}
                </button>
              ))}
            </div>

            <div className="experience-preview">
              <div className="preview-copy">
                <span className="preview-kicker" style={{ color: currentView.accent }}>{currentView.kicker}</span>
                <h3>{currentView.title}</h3>
                <p>{currentView.description}</p>
                <div className="preview-fact">
                  <span className="preview-fact-dot" style={{ background: currentView.accent }} />
                  <span>{activeView === 'play' ? 'Every board opens with a free undo, and that one can never run out.' : 'Built from the same in-game design tokens.'}</span>
                </div>
                <a className="inline-link" href="#characters" onClick={() => jumpTo('characters')}>Meet the characters behind it <ArrowUpRight size={16} /></a>
              </div>
              <div className="showcase-device-wrap">
                <IphoneFrame image={currentView.image} alt={`OutBrick ${currentView.label} screen`} />
                <span className="device-caption">OutBrick · {currentView.label}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="characters" className="section-block characters-section">
          <div className="character-backdrop" aria-hidden="true" />
          <div className="section-heading section-heading-center">
            <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-pink" /> The cast</div>
            <h2>Three bricks.<br /><span>Three different kinds of brave.</span></h2>
            <p>They are not stickers pasted over a puzzle. They live in the same material world: PBR highlights, contact shadows, big faces, and a reason to pop up when your board turns.</p>
          </div>

          <div className="characters-layout">
            <div className="character-stage">
              <div className="character-stage-topline"><span>Today in the village</span><span><span className="live-dot" /> real-time 3D</span></div>
              <img className="character-group-cheer" src="/assets/mascots-group-cheer.png" alt="The OutBrick mascots cheering" title="The OutBrick mascots cheering" />
              <div className="character-speech">{selectedMascot === 'bloo' ? 'That was gorgeous. Do it again!' : selectedMascot === 'peach' ? 'No clear from here? We can step back.' : 'There is definitely a clever way through.'}</div>
              <div className="character-stage-floor" />
            </div>
            <div className="character-list">
              {mascots.map((mascot) => (
                <button
                  className={`character-card ${selectedMascot === mascot.id ? 'character-card-active' : ''}`}
                  key={mascot.id}
                  type="button"
                  onClick={() => setSelectedMascot(mascot.id)}
                >
                  <span className="character-card-image" style={{ background: `linear-gradient(145deg, ${mascot.color}33, #1A1350)` }}>
                    <img src={selectedMascot === mascot.id ? mascot.cheer : mascot.image} alt={`OutBrick ${mascot.name} ${selectedMascot === mascot.id ? 'cheering' : 'resting'} mascot illustration`} title={`OutBrick ${mascot.name} mascot illustration`} />
                  </span>
                  <span className="character-card-copy">
                    <span className="character-card-name">{mascot.name}</span>
                    <span className="character-card-role">{mascot.role}</span>
                    <span className="character-card-description">{mascot.copy}</span>
                  </span>
                  <ArrowUpRight size={18} className="character-card-arrow" />
                </button>
              ))}
              <div className="character-note"><Sparkles size={17} /><span>Idle, cheer, think, blink. The cast keeps the tone soft when the solver gets serious.</span></div>
              <div className="character-story-links" aria-label="Mascot stories">
                {mascots.map((mascot) => <a key={mascot.id} href={`/mascots/${mascot.id}`}>Read {mascot.name}’s story <ArrowUpRight size={14} /></a>)}
              </div>
            </div>
          </div>
        </section>

        <section id="widgets" className="section-block widgets-section">
          <div className="section-heading section-heading-split widgets-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-gold" /> At a glance</div>
              <h2>OutBrick belongs<br /><span>on your Home Screen.</span></h2>
            </div>
            <p>Level, streak, daily brick, mascot, chapters, events, and a random board you have already reached are all visible before the first tap. The widgets use the same shared state and the same brick material.</p>
          </div>

          <div className="widgets-layout">
            <div className="widget-montage-card">
              <div className="montage-header"><span>Home Screen widgets</span><span className="montage-chip">iOS</span></div>
              <img src="/assets/widgets-montage.jpg" alt="OutBrick Home Screen widget montage showing level, daily brick, streak, mascot, chapter, event, and play-random widgets" title="OutBrick Home Screen widget montage" />
              <div className="montage-footer"><span>One shared snapshot</span><span>Eight widget surfaces</span><span>Updated after every clear</span></div>
            </div>
            <div className="widget-grid">
              <WidgetCard eyebrow="LEVEL" title="Keep your place" color="blue" mascot="/assets/bloo-idle.png" mascotLabel="Bloo OutBrick mascot illustration">
                <div className="widget-level-row"><strong>32</strong><span>Village Run</span></div>
                <GlossButton color="green"><Play size={13} /> Play</GlossButton>
              </WidgetCard>
              <WidgetCard eyebrow="DAILY BRICK" title="Claimed" color="green">
                <div className="widget-claim"><BrickRow colors={['#4CB944', '#4CB944', '#4CB944', '#4CB944']} /><Check size={23} /></div>
                <small>Back tomorrow</small>
              </WidgetCard>
              <WidgetCard eyebrow="STREAK" title="1 day" color="orange" mascot="/assets/peach-idle.png" mascotLabel="Peach OutBrick mascot illustration">
                <div className="widget-streak"><span className="streak-flame">✦</span><span>Claimed today</span></div>
                <small>Next reward · Lv 5</small>
              </WidgetCard>
              <WidgetCard eyebrow="MASCOT OF THE DAY" title={mascotOfTheDay.name} color="purple" mascot={mascotOfTheDay.heroImage} mascotLabel={mascotOfTheDay.imageAlt}>
                <p className="widget-speech">{mascotOfTheDay.widgetLine}</p>
                <a className="widget-story-link" href={`/mascots/${mascotOfTheDay.id}`}>Read the story <ArrowUpRight size={13} /></a>
              </WidgetCard>
            </div>
          </div>

          <div className="mascot-day-module" aria-labelledby="mascot-day-title">
            <div className="mascot-day-copy">
              <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-pink" /> Today’s companion</div>
              <h3 id="mascot-day-title">A little company for today’s board.</h3>
              <p>On the Home Screen, {mascotOfTheDay.name} is a small hello between clears: the same friendly cast from the game, ready with a line, a look, or a very good idea.</p>
              <div className="mascot-day-meta"><span><strong>{mascotOfTheDay.name}</strong> · {mascotOfTheDay.role}</span><span>Changes with the calendar</span></div>
              <a className="inline-link" href={`/mascots/${mascotOfTheDay.id}`}>Read {mascotOfTheDay.name}’s story <ArrowUpRight size={16} /></a>
            </div>
            <a className="mascot-day-art" href={`/mascots/${mascotOfTheDay.id}`} aria-label={`Read ${mascotOfTheDay.name}'s mascot story`}>
              <span className="mascot-day-art-label">Mascot of the day</span>
              <img src={mascotOfTheDay.heroImage} alt={mascotOfTheDay.imageAlt} title={`${mascotOfTheDay.name} OutBrick mascot`} />
              <span className="mascot-day-quote">{mascotOfTheDay.quote}</span>
            </a>
          </div>
        </section>

        {/* The capability map. Everything here is a shipping capability of the current
            build, phrased the way the App Store listing phrases it, because a marketing page
            that promises more than the listing is a rejection waiting to happen and one that
            promises less is just a worse page. */}
        <section id="capabilities" className="section-block">
          <div className="section-heading section-heading-center">
            <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-gold" /> Everything in the box</div>
            <h2>One rule to learn.<br /><span>Rather a lot that comes with it.</span></h2>
            <p>The board is the whole game, and it is three seconds of teaching. The rest of this is what the game does while you are not looking at it.</p>
          </div>
          <div className="info-card-grid">
            <article className="info-card info-card-yellow"><span className="info-card-icon"><Sparkles size={20} /></span><h3>Three stars, one target</h3><p>Clearing a board earns a star. Clearing it at or under the solver&rsquo;s own move target earns two. Doing that without a single undo earns three &mdash; and the third is a thing you come back for.</p></article>
            <article className="info-card info-card-blue"><span className="info-card-icon"><Trophy size={20} /></span><h3>Game Center, built in</h3><p>Three leaderboards, 57 achievements, a Daily Brick that is the same seeded board for everybody, and challenges you can send to someone you actually know.</p></article>
            <article className="info-card info-card-teal"><span className="info-card-icon"><Watch size={20} /></span><h3>On your wrist</h3><p>A standalone Apple Watch game with complications, so a board is one wrist-turn away and never needs the phone out of your pocket.</p></article>
            <article className="info-card info-card-green"><span className="info-card-icon"><MessageCircle size={20} /></span><h3>In the conversation</h3><p>An iMessage app with stickers and challenges you can drop straight into a thread, without anyone leaving Messages to do it.</p></article>
            <article className="info-card info-card-yellow"><span className="info-card-icon"><LayoutGrid size={20} /></span><h3>On the Lock Screen</h3><p>Live Activities on the Lock Screen and in the Dynamic Island, Home Screen widgets, and Lock Screen accessories &mdash; all reading the same shared snapshot.</p></article>
            <article className="info-card info-card-blue"><span className="info-card-icon"><Mic size={20} /></span><h3>Siri, Spotlight, Handoff</h3><p>Ask Siri for a board. Find one in Spotlight. Start on iPhone, pick it up on iPad exactly where the bricks were.</p></article>
            <article className="info-card info-card-teal"><span className="info-card-icon"><Accessibility size={20} /></span><h3>Playable without seeing it</h3><p>Every brick is a VoiceOver element that reads its colour, shape and position, with a custom action for each direction it can slide. Larger Text scales all the way up, colour-blind mode stamps a glyph on every brick and gate, and Reduce Motion is honoured throughout.</p></article>
            <article className="info-card info-card-green"><span className="info-card-icon"><Cloud size={20} /></span><h3>Your progress follows you</h3><p>Signed in to iCloud, a new device picks up exactly where the old one stopped &mdash; level, coins, streak, Collection and all. It lives in your iCloud, not ours.</p></article>
            <article className="info-card info-card-yellow"><span className="info-card-icon"><Sparkles size={20} /></span><h3>Lines they write themselves</h3><p>On iPhones with Apple Intelligence, Bloo, Peach and Sprout write their own dialogue using Apple&rsquo;s on-device model. Nothing leaves the phone to do it, and the game is the same game without it.</p></article>
            <article className="info-card info-card-blue"><span className="info-card-icon"><Ticket size={20} /></span><h3>Events, not banners</h3><p>Launch Week, Rush Hour Weekend, Night Boards, Pumpkin Bricks, Bloo&rsquo;s Birthday, Frost Bricks, the Brick Olympics &mdash; a calendar that changes what a clear pays out.</p></article>
            <article className="info-card info-card-teal"><span className="info-card-icon"><HeartHandshake size={20} /></span><h3>Ads you asked for</h3><p>Rewarded video only. No banners, no interstitials, nothing between you and a board. Declining costs you nothing, and Remove Ads or the Brick Pass switches it off for good.</p></article>
            <article className="info-card info-card-green"><span className="info-card-icon"><Gamepad2 size={20} /></span><h3>Five places to play it</h3><p>iPhone, iPad, Mac, Apple Vision Pro and Apple Watch. One purchase, one progress, and the boards come with you.</p></article>
          </div>
        </section>

        <section id="principles" className="section-block principles-section">
          <div className="section-heading section-heading-center">
            <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-blue" /> The small decisions</div>
            <h2>More signal.<br /><span>Less friction.</span></h2>
            <p>The game is tuned around what a two-minute session actually needs: readable boards, forgiving recovery, and a reward loop that never has to shout.</p>
          </div>
          <div className="principles-layout">
            <div className="principle-menu" role="tablist" aria-label="OutBrick principles">
              {featureTabs.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.id} type="button" className={`principle-tab ${feature === item.id ? 'principle-tab-active' : ''}`} onClick={() => setFeature(item.id)} role="tab" aria-selected={feature === item.id}>
                    <span className="principle-icon"><Icon size={20} /></span>
                    <span>{item.label}</span>
                    <ChevronRight size={16} />
                  </button>
                );
              })}
              <div className="principle-badge"><span>DESIGN BIBLE</span><strong>same DNA, every surface</strong></div>
            </div>
            <div className="principle-showcase">
              {feature === 'relaxed' && (
                <>
                  <div className="principle-showcase-copy"><span className="showcase-number">01</span><h3>Pressure you can see coming.</h3><p>Every board counts your moves against its target and its limit, both printed on the board from the first tap. Nothing is hidden, nothing is a clock, and running low offers you five more moves before it offers anything else. Rush is an opt-in bonus, not a countdown hanging over the board.</p><div className="principle-points"><span><Check size={15} /> No forced timer</span><span><Check size={15} /> One free undo a board</span><span><Check size={15} /> Wedge recovery</span></div></div>
                  <IphoneFrame image="/assets/wedged-screen.png" alt="OutBrick Wedged recovery screen" className="principle-phone" />
                </>
              )}
              {feature === 'colour' && (
                <>
                  <div className="principle-showcase-copy"><span className="showcase-number">02</span><h3>Colour is not the only key.</h3><p>Every stud can carry a glyph: circle, triangle, square, diamond, plus, star, bar, or hex. Hue and shape do the same job together.</p><div className="principle-points"><span><Check size={15} /> Redundant signals</span><span><Check size={15} /> Built into gates</span><span><Check size={15} /> No colour guessing</span></div></div>
                  <IphoneFrame image="/assets/colorblind-screen.png" alt="OutBrick colour-blind mode board with stud glyphs" className="principle-phone" />
                </>
              )}
              {feature === 'offline' && (
                <>
                  <div className="principle-showcase-copy"><span className="showcase-number">03</span><h3>The dead-time session, made well.</h3><p>Progress, coins, settings, and the full board live on the device, and every board plays with the aeroplane mode on. Game Center and purchases are optional Apple-managed edges. There is one third party in the app &mdash; Google&rsquo;s ad SDK &mdash; and it wakes up only when you press a button asking for a video. <a className="inline-link" href="/privacy">The privacy policy</a> says exactly what it collects.</p><div className="principle-points"><span><Check size={15} /> Boards play offline</span><span><Check size={15} /> No analytics SDK of ours</span><span><Check size={15} /> One ad partner, on request</span></div></div>
                  <IphoneFrame image="/assets/play-screen.png" alt="OutBrick offline play board" className="principle-phone" />
                </>
              )}
            </div>
          </div>
        </section>

        <section className="section-block close-section">
          <div className="close-card">
            <div className="close-sparkle"><Sparkles size={22} /></div>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-green" /> A softer kind of replayability</div>
              <h2>Clear a board.<br /><span>Leave with a little more.</span></h2>
              <p>OutBrick is built for iPhone, iPad, Mac, Apple Vision Pro and Apple Watch, tuned for one hand, and happy to wait in the corner until you feel like moving one more brick. You hold five lives and one comes back every half hour; every board hands you a free undo that cannot run out; and a video only ever plays because you pressed a button asking for one. Say no to all of it and the game is exactly the same game.</p>
              <div className="close-actions">
                <GlossButton href="#experience">Explore the game <ArrowUpRight size={18} /></GlossButton>
                <a className="inline-link" href="/support">Read support & privacy <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="close-mascots"><img src="/assets/mascots-group.png" alt="OutBrick mascots" title="OutBrick mascots" /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><OutBrickLogo /><p>A sliding-brick colour-sort puzzle by OutBrick.</p><StoreBadge /></div>
          <div className="footer-links">
            <div><span className="footer-label">Explore</span><a href="#experience">The game</a><a href="#characters">Mascots</a><a href="#widgets">Widgets</a><a href="#capabilities">Everything in the box</a><a href="/mascots">Mascot stories</a><a href="/press-kit">Press kit</a><a href="/blog">Journal</a><a href="/about">About OutBrick</a><a href="/authors">Authors</a><a href="/research">Research method</a></div>
            <div><span className="footer-label">Apple fields</span><a href="/support">Support</a><a href="/terms">Terms</a><a href="/privacy">Privacy policy</a><a href="/privacy-choices">Privacy choices</a><a href="/license-agreement">License agreement</a><a href="/eula">Apple EULA</a><a href="/age-rating">Age suitability</a><a href="/accessibility">Accessibility</a><a href="/refunds">Refunds & purchases</a></div>
            <div><span className="footer-label">Contact</span><a href="/contact">Contact OutBrick <ArrowUpRight size={14} /></a><a href="/accessibility">Accessibility support <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 OutBrick</span><span><ShieldCheck size={14} /> No accounts. Progress stays on your device. Ads only when you ask.</span><span>Made with bricks and patience.</span></div>
      </footer>

      {toast && <div className="site-toast" role="status"><Check size={17} /> {toast}</div>}

      <div className="floating-quick-actions" aria-label="Quick actions">
        <button type="button" onClick={() => { jumpTo('experience'); showToast('The game is waiting above.'); }}><Gamepad2 size={17} /> <span>Play the tour</span></button>
        <a href="/support"><HeartHandshake size={17} /> <span>Need help?</span></a>
      </div>
    </div>
  );
}
