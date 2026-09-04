'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  Gamepad2,
  HeartHandshake,
  Map,
  Menu,
  Palette,
  Play,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Ticket,
  WifiOff,
  X,
} from 'lucide-react';
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
    description: 'Three real-time mascots, a daily brick, and one inviting Level button. Home keeps the ritual warm without getting in the way.',
    image: '/assets/home-screen.png',
    accent: 'var(--yellow)',
  },
  {
    id: 'play',
    label: 'Play',
    kicker: 'The board',
    title: 'Slide. Match. Out.',
    description: 'One finger moves a brick until it meets something. Match the edge gate, clear the board, and keep your undo forever.',
    image: '/assets/play-screen.png',
    accent: 'var(--blue)',
  },
  {
    id: 'journey',
    label: 'Journey',
    kicker: 'The path',
    title: 'A chapter path that keeps climbing.',
    description: 'Fifteen chapters, 1,000 solver-verified boards, and a reward rhythm that makes the next small step feel worth taking.',
    image: '/assets/journey-screen.png',
    accent: 'var(--pink)',
  },
  {
    id: 'shop',
    label: 'Shop',
    kicker: 'The shelf',
    title: 'Boosters when you want them.',
    description: 'No ad gates and no lives. Coins arrive through play, while optional packs make the hint, rocket, and UFO feel like toys—not tolls.',
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
    title: 'Never a loss screen.',
    description: 'When the solver proves a board is stuck, Peach thinks it through. Undo is free, restart is clear, and a rocket is always optional.',
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
  const [feature, setFeature] = useState('relaxed');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState('');

  const currentView = viewData.find((view) => view.id === activeView) ?? viewData[0];

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (viewData.some((view) => view.id === hash)) {
      setActiveView(hash as ViewId);
    }
    if (hash === 'widgets' || hash === 'characters') {
      document.getElementById(hash)?.scrollIntoView();
    }
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
              <span><Check size={15} /> 1,000 solver-verified boards</span>
              <span><Check size={15} /> no ads, no lives</span>
              <span><Check size={15} /> undo is always free</span>
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
          <div><span className="promise-icon promise-green"><HeartHandshake size={21} /></span><strong>No pressure</strong><small>Relaxed is the default.</small></div>
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
                  <span>{activeView === 'play' ? 'Every move is permanent only when you want it to be.' : 'Built from the same in-game design tokens.'}</span>
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
            <p>Level, streak, daily brick, mascot, chapters, events, and Endless are all visible before the first tap. The widgets use the same shared state and the same brick material.</p>
          </div>

          <div className="widgets-layout">
            <div className="widget-montage-card">
              <div className="montage-header"><span>Home Screen widgets</span><span className="montage-chip">iOS</span></div>
              <img src="/assets/widgets-montage.jpg" alt="OutBrick Home Screen widget montage showing level, daily brick, streak, mascot, chapter, event, and Endless widgets" title="OutBrick Home Screen widget montage" />
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
              <WidgetCard eyebrow="MASCOT OF THE DAY" title="Sprout" color="purple" mascot="/assets/sprout-cheer.png" mascotLabel="Sprout OutBrick mascot illustration">
                <p className="widget-speech">Brick Pass tiers are claimed for you on clear.</p>
              </WidgetCard>
            </div>
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
                  <div className="principle-showcase-copy"><span className="showcase-number">01</span><h3>Time is feedback, never a loss.</h3><p>Relaxed mode shows moves against par. Rush is an opt-in bonus, not a countdown hanging over the board.</p><div className="principle-points"><span><Check size={15} /> No lives</span><span><Check size={15} /> Permanent undo</span><span><Check size={15} /> Wedge recovery</span></div></div>
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
                  <div className="principle-showcase-copy"><span className="showcase-number">03</span><h3>The dead-time session, made well.</h3><p>Progress, coins, settings, and the full board live on the device. Game Center and purchases are optional Apple-managed edges.</p><div className="principle-points"><span><Check size={15} /> On-device progress</span><span><Check size={15} /> No analytics SDK</span><span><Check size={15} /> No third-party tracking</span></div></div>
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
              <p>OutBrick is built for iPhone and iPad, tuned for one hand, and happy to wait in the corner until you feel like moving one more brick.</p>
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
            <div><span className="footer-label">Explore</span><a href="#experience">The game</a><a href="#characters">Mascots</a><a href="#widgets">Widgets</a><a href="/blog">Journal</a><a href="/about">About OutBrick</a><a href="/authors">Authors</a><a href="/research">Research method</a></div>
            <div><span className="footer-label">Apple fields</span><a href="/support">Support</a><a href="/terms">Terms</a><a href="/privacy">Privacy policy</a><a href="/privacy-choices">Privacy choices</a><a href="/license-agreement">License agreement</a><a href="/eula">Apple EULA</a><a href="/age-rating">Age suitability</a><a href="/accessibility">Accessibility</a><a href="/refunds">Refunds & purchases</a></div>
            <div><span className="footer-label">Contact</span><a href="/contact">Contact OutBrick <ArrowUpRight size={14} /></a><a href="/accessibility">Accessibility support <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 OutBrick</span><span><ShieldCheck size={14} /> No ads. No accounts. No tracking.</span><span>Made with bricks and patience.</span></div>
      </footer>

      {toast && <div className="site-toast" role="status"><Check size={17} /> {toast}</div>}

      <div className="floating-quick-actions" aria-label="Quick actions">
        <button type="button" onClick={() => { jumpTo('experience'); showToast('The game is waiting above.'); }}><Gamepad2 size={17} /> <span>Play the tour</span></button>
        <a href="/support"><HeartHandshake size={17} /> <span>Need help?</span></a>
      </div>
    </div>
  );
}
