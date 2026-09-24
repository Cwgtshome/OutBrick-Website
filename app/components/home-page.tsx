import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { cast, passes, villages } from '../../lib/villages';
import { chromeCopy } from '../../lib/i18n/chrome';
import { homeCopy } from '../../lib/i18n/home';
import { localeAlternates, localeUrl, ogLocales, type Locale } from '../../lib/i18n/locales';
import { AppStoreBadge, Course, homeNavFor, VillageFooter, VillageHeader, BrandMark } from '../village-shell';
import { VillageMotion } from '../village-motion';
import { HomeCast } from './home-cast';
import { PlayableBoard } from './playable-board';
import '../styles/home.css';

/**
 * The home page, in any of its languages. `app/(en)/page.tsx` renders it in
 * English at `/`; `app/[locale]/page.tsx` renders it at `/fr`, `/de`, `/es`
 * and `/ja`. Every word comes from lib/i18n/home.ts; the markup, classes and
 * motion hooks are the same in every language.
 */
export function homeMetadata(locale: Locale): Metadata {
  const copy = homeCopy[locale].meta;
  const url = localeUrl(locale, '/');
  return {
    title: locale === 'en' ? copy.title : { absolute: copy.title },
    description: copy.description,
    alternates: localeAlternates(locale, '/'),
    openGraph: {
      type: 'website',
      url,
      siteName: 'OutBrick',
      locale: ogLocales[locale],
      title: copy.ogTitle,
      description: copy.ogDescription,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: copy.ogImageAlt }],
    },
  };
}

type Vars = CSSProperties & Record<`--${string}`, string | number>;

const heroFactColours = ['#e2352f', '#ffc53d', '#26b9b0', '#3b8bf0'];

const stickers = ['cleared', 'bloo-cheer', 'beat-the-target', 'peach-think', 'one-more', 'sprout-cheer'];

const stepShots = [
  // Steps 1 and 2 are cut from the current store frames at full resolution (public/assets/screens).
  // The clear card in the store set still shows the withdrawn Rush bonus, so step 3 keeps the
  // older, smaller capture until a new one is shot (docs/CAPTURES.md).
  { n: 1, src: '/assets/screens/iphone-board-360.webp', srcSet: '/assets/screens/iphone-board-360.webp 360w, /assets/screens/iphone-board-720.webp 720w', w: 737, h: 1564 },
  { n: 2, src: '/assets/screens/iphone-board-shaped-360.webp', srcSet: '/assets/screens/iphone-board-shaped-360.webp 360w, /assets/screens/iphone-board-shaped-720.webp 720w', w: 737, h: 1564 },
  { n: 3, src: '/assets/shots/b-clear.jpg', srcSet: undefined, w: 560, h: 1217 },
];

const plaqueStyle = [
  { value: 2000, b: '#e2352f', foot: '#8e1c18', ink: '#fff', studs: 4 },
  { value: 100, b: '#ffc53d', foot: '#b8780a', ink: '#1a1350', studs: 3 },
  { value: 0, b: '#26b9b0', foot: '#087e84', ink: '#0d2b3a', studs: 2 },
  { value: 8, b: '#7b5cf0', foot: '#4a35b0', ink: '#fff', studs: 3 },
];

/** The six passes, each a different hour of the day. */
const passTints = ['#ffd98a', '#8ed1f3', '#6cc24a', '#26b9b0', '#f5851f', '#7b5cf0'];

const ledgerMarks = [
  { glyph: '♥', background: '#e2352f', foot: '#8e1c18', ink: '#fff' },
  { glyph: '↺', background: '#3b8bf0', foot: '#1d4fa6', ink: '#fff' },
  { glyph: '◉', background: '#ffc53d', foot: '#b8780a', ink: '#1a1350' },
  { glyph: '▶', background: '#7b5cf0', foot: '#4a35b0', ink: '#fff' },
  { glyph: '●', background: '#26b9b0', foot: '#087e84', ink: '#fff' },
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

export function HomePage({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  const chrome = chromeCopy[locale];
  const headline = t.headline;
  const friends = cast.map((friend) => ({ ...friend, line: t.cast.lines[friend.slug] ?? friend.line }));

  return (
    <div className="ob-site ob-home">
      <a className="skip" href="#main">{chrome.skip}</a>
      <VillageHeader links={homeNavFor(locale)} home="#top" label={chrome.sections} locale={locale} />

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
              <p className="eyebrow hero-eyebrow">{t.hero.eyebrow}</p>
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
                    {line < 2 ? ' ' : <span className="w dot" style={{ '--i': headline.length } as Vars}>{t.stop}</span>}
                  </span>
                ))}
              </h1>
              <p className="lede hero-lede">
                {t.hero.lede}
              </p>
              <div className="cta-row hero-cta">
                <AppStoreBadge campaign="home-hero" locale={locale} />
                <a className="btn brick-btn" href="#journey">
                  {t.hero.walk}
                  <span className="arrow" aria-hidden="true" />
                </a>
              </div>
              <ul className="hero-facts">
                {t.hero.facts.map((fact, index) => (
                  <li key={fact} style={{ '--c': heroFactColours[index] } as Vars}>{fact}</li>
                ))}
              </ul>
            </div>

            <div className="hero-stage" data-tilt="">
              <div className="stage-inner">
                {/* The friends peeking round the phone lean toward the pointer, and play their
                    move when it comes close (village-motion.tsx; moves in styles/friend-moves.css). */}
                <span className="peek peek-sprout" data-friend-move="sprout" data-peek="">
                  <img className="fm-actor" src="/assets/friends/sprout.webp" alt="" width={180} height={180} fetchPriority="low" decoding="async" />
                </span>
                <div className="phone">
                  <img
                    src="/assets/villages/garden-city.jpg"
                    width={520}
                    height={1131}
                    fetchPriority="high"
                    alt={t.hero.phoneAlt}
                  />
                </div>
                <span className="peek peek-bloo" data-friend-move="bloo" data-peek="">
                  <img className="fm-actor" src="/assets/friends/bloo.webp" alt="" width={200} height={200} fetchPriority="low" decoding="async" />
                </span>
                <span className="peek peek-peach" data-friend-move="peach" data-peek="">
                  <img className="fm-actor" src="/assets/friends/peach.webp" alt="" width={180} height={180} fetchPriority="low" decoding="async" />
                </span>
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
                <p className="eyebrow"><span className="idx">01</span>{t.rule.eyebrow}</p>
                <h2 data-reveal="mask"><span className="mask-line">{t.rule.title}</span></h2>
                <p className="lede">
                  {t.rule.lede}
                </p>
              </div>

              <div className="rule-board" data-slot="playable-board">
                <PlayableBoard label={t.rule.boardLabel} locale={locale} />
              </div>
            </div>

            <ol className="steps">
              {stepShots.map((shot, index) => {
                const step = t.rule.steps[index];
                return (
                  <li className="step" key={shot.n} data-reveal="slide" style={{ '--d': `${(shot.n - 1) * 110}ms` } as Vars}>
                    <figure className="step-shot">
                      <img loading="lazy" decoding="async" src={shot.src} srcSet={shot.srcSet} sizes="(max-width: 760px) 80vw, 320px" width={shot.w} height={shot.h} alt={step.alt} />
                    </figure>
                    <div className="step-copy">
                      <span className="step-n" aria-hidden="true">{shot.n}</span>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <ul className="wall" aria-label={t.rule.wallLabel}>
              {plaqueStyle.map((plaque, index) => {
                const copy = t.rule.plaques[index];
                return (
                  <li
                    key={copy.label}
                    data-reveal="drop"
                    style={{ '--b': plaque.b, '--foot': plaque.foot, '--ink': plaque.ink, '--d': `${index * 90}ms` } as Vars}
                  >
                    <span className="plaque-brick">
                      <Studs count={plaque.studs} />
                      <b>
                        <span className="sr-only">{copy.shown}</span>
                        <span aria-hidden="true" data-count={plaque.value}>{copy.shown}</span>
                      </b>
                    </span>
                    <span className="plaque-label">{copy.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ============================ THE JOURNEY ============================ */}
        <section id="journey" className="band-panel journey" data-journey="">
          <div className="journey-pin">
            <div className="journey-sticky">
              <div className="wrap journey-head">
                <div>
                  <p className="eyebrow"><span className="idx">02</span>{t.journey.eyebrow}</p>
                  <h2 data-reveal="mask"><span className="mask-line">{t.journey.title}</span></h2>
                </div>
                <p className="lede">
                  {t.journey.lede}
                </p>
              </div>

              {/* A named <section> is a region landmark. It takes focus because it
                  scrolls sideways: without a tab stop, keyboard users could not
                  reach the villages past the first screen (WCAG 2.1.1). */}
              <section
                className="journey-window"
                // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- scrollable region must be keyboard-focusable
                tabIndex={0}
                aria-label={t.journey.windowLabel}
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
                          alt={t.journey.villageAlt(village.name)}
                        />
                      </div>
                      <b>{village.name}</b>
                      <span>{t.journey.levelRange(index * 12 + 1, index * 12 + 12)}</span>
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
                {t.journey.passesLede}
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
              {t.journey.notes.map((note, index) => (
                <article key={note.title} data-reveal="rise" style={index ? ({ '--d': `${index * 90}ms` } as Vars) : undefined}>
                  <span className="tag">{note.tag}</span>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ THE CAST ============================ */}
        <section id="cast" className="band-ink cast-band">
          <div className="wrap">
            <Course offset />
            <HomeCast
              friends={friends}
              copy={{ eyebrow: t.cast.eyebrow, title: t.cast.title, lede: t.cast.lede, meet: t.cast.meet }}
              meetHrefLang={locale === 'en' ? undefined : 'en'}
            />
            <p className="note">
              {t.cast.note}
            </p>
          </div>
        </section>

        {/* ============================ WHAT IT COSTS ============================ */}
        <section id="fair" className="band-cream fair">
          <div className="wrap fair-grid">
            <div className="fair-head">
              <p className="eyebrow"><span className="idx">04</span>{t.fair.eyebrow}</p>
              <h2 data-reveal="mask"><span className="mask-line">{t.fair.title}</span></h2>
              <p className="lede">
                {t.fair.lede}
              </p>
              <blockquote className="fair-quote">
                <p>
                  {t.fair.struck.lead}<s>{t.fair.struck.ads}</s>{t.fair.struck.and}<s>{t.fair.struck.lives}</s>{t.fair.struck.end}
                </p>
                <p>
                  {t.fair.quote}
                </p>
              </blockquote>
            </div>

            <ol className="ledger">
              {t.fair.ledger.map((row, index) => {
                const mark = ledgerMarks[index];
                return (
                  <li key={row.title} data-reveal="slide" style={{ '--d': `${index * 80}ms` } as Vars}>
                    <span className="mark" aria-hidden="true" style={{ background: mark.background, boxShadow: `0 4px 0 ${mark.foot}`, color: mark.ink }}>
                      {mark.glyph}
                    </span>
                    <div>
                      <b>{row.title}</b>
                      <p>{row.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ============================ BUILT FOR APPLE ============================ */}
        <section id="apple" className="band-ink apple">
          <div className="wrap">
            <div className="apple-head">
              <div>
                <p className="eyebrow"><span className="idx">05</span>{t.apple.eyebrow}</p>
                <h2 data-reveal="mask"><span className="mask-line">{t.apple.title}</span></h2>
              </div>
              <p className="lede">
                {t.apple.lede}
              </p>
            </div>

            <ul className="devices" aria-label={t.apple.platforms}>
              {devices.map((device, index) => (
                <li key={device.name} data-reveal="drop" style={{ '--b': device.b, '--fg': device.ink, '--d': `${index * 60}ms` } as Vars}>{device.name}</li>
              ))}
            </ul>

            {/* Current iPad and iPhone screens, cut from the store frames (public/assets/screens). */}
            <figure className="device-stage" aria-label={t.apple.showcase.label} data-reveal="rise">
              <div className="dev dev-ipad">
                <img loading="lazy" decoding="async" src="/assets/screens/ipad-home-520.webp" srcSet="/assets/screens/ipad-home-520.webp 520w, /assets/screens/ipad-home-1040.webp 1040w" sizes="(max-width: 760px) 86vw, 560px" width={990} height={1296} alt={t.apple.showcase.ipad} />
              </div>
              <div className="dev dev-phone dev-phone-a">
                <img loading="lazy" decoding="async" src="/assets/screens/iphone-board-360.webp" srcSet="/assets/screens/iphone-board-360.webp 360w, /assets/screens/iphone-board-720.webp 720w" sizes="(max-width: 760px) 40vw, 250px" width={737} height={1564} alt={t.apple.showcase.iphone} />
              </div>
              <div className="dev dev-phone dev-phone-b">
                <img loading="lazy" decoding="async" src="/assets/screens/iphone-collection-360.webp" srcSet="/assets/screens/iphone-collection-360.webp 360w, /assets/screens/iphone-collection-720.webp 720w" sizes="(max-width: 760px) 40vw, 250px" width={737} height={1564} alt={t.apple.showcase.iphone2} />
              </div>
            </figure>

            <div className="bento">
              {/* The widgets montage was retired: it showed the old round mascots. The tile keeps
                  its words until a current widget capture exists (docs/CAPTURES.md). */}
              <article className="tile tile-widgets" data-reveal="rise">
                <div className="tile-copy">
                  <span className="tag">{t.apple.widgets.tag}</span>
                  <h3>{t.apple.widgets.title}</h3>
                  <p>{t.apple.widgets.body}</p>
                </div>
              </article>

              <article className="tile tile-gc" data-reveal="rise" style={{ '--d': '80ms' } as Vars}>
                <span className="tag">{t.apple.gameCenter.tag}</span>
                <span className="big-num" aria-hidden="true" data-n="57" />
                <h3>{t.apple.gameCenter.title}</h3>
                <p>{t.apple.gameCenter.body}</p>
              </article>

              <article className="tile tile-msg" data-reveal="rise" style={{ '--d': '160ms' } as Vars}>
                <span className="tag">{t.apple.messages.tag}</span>
                <h3>{t.apple.messages.title}</h3>
                <p>{t.apple.messages.body}</p>
                {/* The app's own iMessage stickers (BrickoutMessages/Stickers). */}
                <ul className="stickers" aria-hidden="true">
                  {stickers.map((name, index) => (
                    <li key={name} style={{ '--k': index } as Vars}>
                      <img loading="lazy" decoding="async" src={`/assets/stickers/${name}-160.webp`} srcSet={`/assets/stickers/${name}-160.webp 1x, /assets/stickers/${name}-320.webp 2x`} width={160} height={160} alt="" />
                    </li>
                  ))}
                </ul>
              </article>

              <article className="tile tile-cb" data-reveal="rise">
                <figure className="tile-media" data-reveal="unmask">
                  <img loading="lazy" decoding="async" src="/assets/home/colorblind-board.jpg" width={540} height={910} alt={t.apple.colourBlind.alt} />
                </figure>
                <div className="tile-copy">
                  <span className="tag">{t.apple.colourBlind.tag}</span>
                  <h3>{t.apple.colourBlind.title}</h3>
                  <p>{t.apple.colourBlind.body}</p>
                </div>
              </article>

              <article className="tile tile-a11y" data-reveal="rise" style={{ '--d': '80ms' } as Vars}>
                <span className="tag">{t.apple.accessibility.tag}</span>
                <h3>{t.apple.accessibility.title}</h3>
                <p>{t.apple.accessibility.body}</p>
              </article>

              <article className="tile tile-siri" data-reveal="rise" style={{ '--d': '160ms' } as Vars}>
                <span className="tag">{t.apple.system.tag}</span>
                <h3>{t.apple.system.title}</h3>
                <p>{t.apple.system.body}</p>
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
            <span className="lane-clear">{t.close.laneClear}</span>
            <div className="gate" />
          </div>
          <div className="wrap close-inner">
            <div>
              <BrandMark className="brandmark-lg close-mark" />
              <h2 data-reveal="mask"><span className="mask-line">{t.close.title}</span></h2>
            </div>
            <div>
              <p className="lede">
                {t.close.lede}
              </p>
              <div className="cta-row"><AppStoreBadge campaign="home-close" locale={locale} /></div>
            </div>
          </div>
        </section>
      </main>

      <VillageFooter locale={locale} page="/" />
      <VillageMotion />
    </div>
  );
}
