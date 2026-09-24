/**
 * The shared furniture of the brick site: the sticky masthead, the running-bond
 * course that divides a band, the App Store badge, the "every page on this
 * domain" index, and the footer.
 *
 * Everything renders inside a `.ob-site` element, because the village stylesheet
 * at the foot of globals.css is scoped to that class — `.card`, `.grid`, `.btn`
 * and `section` already mean something to the editorial routes, and scoping is
 * what lets the new chrome sit above the old body copy without rewriting it.
 */

import type { CSSProperties } from 'react';
import { HeaderMotion } from './components/home-header-motion';
import { APP_STORE_URL } from './store-badge';

/** The six-colour running bond that separates one band from the next. */
export function Course({ offset = false }: { offset?: boolean }) {
  const colours = ['#e2352f', '#ffc53d', '#26b9b0', '#7b5cf0', '#3b8bf0', '#3fc544'];
  return (
    <div className={`course ${offset ? 'offset' : ''}`} aria-hidden="true">
      {colours.map((colour) => (
        <span key={colour} style={{ background: colour }} />
      ))}
    </div>
  );
}

/**
 * Apple's own badge artwork. The clear space and the 48px height are Apple's
 * marketing guidelines, and the stylesheet keeps them: never under 40px tall,
 * and at least a quarter of the badge height of clear space on every side.
 */
export function AppStoreBadge() {
  return (
    <a className="badge" href={APP_STORE_URL} aria-label="Download OutBrick on the App Store">
      <img src="/assets/badge/appstore-black.svg" alt="Download on the App Store" width={143} height={48} />
    </a>
  );
}

export type NavLink = { href: string; label: string };

/** The home page's own section anchors. */
export const homeNav: NavLink[] = [
  { href: '#rule', label: 'The rule' },
  { href: '#journey', label: 'The Journey' },
  { href: '#cast', label: 'The cast' },
  { href: '#fair', label: 'What it costs' },
  { href: '#apple', label: 'Built for Apple' },
];

/** What a legal or support page puts in the masthead. */
export const docNav: NavLink[] = [
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/privacy-choices', label: 'Privacy choices' },
  { href: '/terms', label: 'Terms' },
  { href: '/license-agreement', label: 'License agreement' },
];

/** The journal and the rest of the editorial side of the domain. */
export const editorialNav: NavLink[] = [
  { href: '/', label: 'The game' },
  { href: '/blog', label: 'Journal' },
  { href: '/mascots', label: 'Mascots' },
  { href: '/press-kit', label: 'Press kit' },
  { href: '/about', label: 'About' },
  { href: '/authors', label: 'Authors' },
  { href: '/research', label: 'Research' },
  { href: '/support', label: 'Support' },
];

const menuColours = ['#e2352f', '#ffc53d', '#26b9b0', '#7b5cf0', '#3b8bf0', '#3fc544'];

/**
 * The sticky masthead. Wide screens get the links inline; narrow ones get a
 * <details> menu, which opens and closes without any script. The small client
 * component only adds the niceties: condensing once the page scrolls, and
 * closing the menu after a pick, on Escape or on a click outside it.
 */
export function VillageHeader({
  links = docNav,
  current,
  home = '/',
  label = 'Sections',
}: {
  links?: NavLink[];
  current?: string;
  home?: string;
  label?: string;
}) {
  return (
    <header className={`site ${links.length > 5 ? 'many' : ''}`} data-site-header="">
      <div className="wrap">
        <a className="logo" href={home}>
          <img src="/assets/icon/icon-192.png" alt="" width={42} height={42} />
          <b>OutBrick</b>
          {home.startsWith('#') ? <span className="sr-only"> — back to top</span> : null}
        </a>
        {links.length ? (
          <nav className="main" aria-label={label}>
            {links.map((link) => (
              <a key={link.href} href={link.href} aria-current={current === link.href ? 'page' : undefined}>
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
        <AppStoreBadge />
        {links.length ? (
          <details className="menu">
            <summary aria-label={`${label} menu`}>
              <span className="bars" aria-hidden="true"><i /><i /><i /></span>
              Menu
            </summary>
            <nav className="menu-panel" aria-label={`${label} (menu)`}>
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={current === link.href ? 'page' : undefined}
                  style={{ '--c': menuColours[index % menuColours.length] } as CSSProperties}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        ) : null}
      </div>
      <HeaderMotion />
    </header>
  );
}

/** Every page on this domain, as a brick index. Shown at the foot of a document. */
const documentIndex: { href: string; label: string; note: string }[] = [
  { href: '/support', label: 'Support', note: 'Stuck boards, lives, undos, ads' },
  { href: '/privacy', label: 'Privacy policy', note: 'What the app does and does not collect' },
  { href: '/privacy-choices', label: 'Privacy choices', note: 'Your controls, one page' },
  { href: '/terms', label: 'Terms', note: 'The fair-play ground rules' },
  { href: '/license-agreement', label: 'License agreement', note: 'What you may do with OutBrick' },
  { href: '/eula', label: 'Apple EULA', note: "Apple's standard licensed-application terms" },
  { href: '/age-rating', label: 'Age suitability', note: 'Why OutBrick is rated 4+' },
  { href: '/accessibility', label: 'Accessibility', note: 'Colour-blind glyphs, VoiceOver, Reduce Motion' },
  { href: '/refunds', label: 'Refunds & purchases', note: 'Apple handles billing' },
  { href: '/contact', label: 'Contact', note: 'A real line to the team' },
];

export function AlsoRead({ current }: { current?: string }) {
  return (
    <section className="alsoread band-panel">
      <div className="wrap">
        <Course />
        <p className="eyebrow">Every page on this domain</p>
        <ul>
          {documentIndex.map((entry) => (
            <li key={entry.href}>
              <a href={entry.href} aria-current={current === entry.href ? 'page' : undefined}>
                {entry.label}
                <small>{entry.note}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VillageFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="cols">
          <div>
            <a className="logo" href="/">
              <img src="/assets/icon/icon-192.png" alt="" width={42} height={42} />
              <b>OutBrick</b>
            </a>
            <p className="blurb">
              OutBrick: Block Sort Puzzle. Slide, sort, clear the board. Free on the App Store.
            </p>
          </div>
          <div>
            <h4>The game</h4>
            <ul>
              <li><a href={APP_STORE_URL}>Download on the App Store</a></li>
              <li><a href="/#journey">The Journey</a></li>
              <li><a href="/#cast">The nine friends</a></li>
              <li><a href="/#fair">What it costs</a></li>
              <li><a href="/play">Play guide</a></li>
              <li><a href="/blog">Journal</a></li>
              <li><a href="/press-kit">Press kit</a></li>
            </ul>
          </div>
          <div>
            <h4>Help &amp; legal</h4>
            <ul>
              <li><a href="/support">Support</a></li>
              <li><a href="/privacy">Privacy policy</a></li>
              <li><a href="/privacy-choices">Privacy choices</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/license-agreement">License agreement</a></li>
              <li><a href="/eula">Apple EULA</a></li>
              <li><a href="/age-rating">Age suitability</a></li>
              <li><a href="/accessibility">Accessibility</a></li>
              <li><a href="/refunds">Refunds &amp; purchases</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <p className="legal">
          © 2026 OutBrick. Apple, the Apple logo, iPhone, iPad, Mac, Apple TV, Apple Watch and Apple
          Vision Pro are trademarks of Apple Inc., registered in the U.S. and other countries and
          regions. App Store is a service mark of Apple Inc.
        </p>
      </div>
    </footer>
  );
}
