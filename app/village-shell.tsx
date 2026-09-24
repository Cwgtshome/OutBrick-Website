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

import { socialProfiles, type SocialNetwork } from '../lib/site';
import type { CSSProperties, ReactNode } from 'react';
import { chromeCopy } from '../lib/i18n/chrome';
import {
  localeNames,
  localePath,
  locales,
  storefronts,
  type Locale,
  type LocalizedPage,
} from '../lib/i18n/locales';
import { HeaderMotion } from './components/home-header-motion';
import { appStoreUrl } from './store-badge';

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
/**
 * The artwork is Apple's English badge in every language (the localized
 * badges are not in the repo); its name is translated, and a translated page
 * links to its own country's storefront with a `web-<locale>-…` campaign.
 */
export function AppStoreBadge({ campaign = 'badge', locale = 'en' }: { campaign?: string; locale?: Locale }) {
  const copy = chromeCopy[locale];
  return (
    <a className="badge" href={localeStoreUrl(campaign, locale)} aria-label={copy.badgeLabel}>
      <img src="/assets/badge/appstore-black.svg" alt={copy.badgeAlt} width={143} height={48} />
    </a>
  );
}

/**
 * The app icon and the OUTBRICK wordmark, side by side. The wordmark is the one the iOS app
 * ships (Brickout/Assets.xcassets/LaunchLogo, drawn in SF Pro Rounded Black, which may not be
 * embedded on the web), trimmed and exported to public/assets/logo/. Both images are
 * decorative: the link or heading around the mark carries the name.
 */
export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <span className={`brandmark ${className}`} aria-hidden="true">
      <img className="brandmark-icon" src="/assets/icon/logo-96.webp" alt="" width={42} height={42} />
      <img
        className="brandmark-word"
        src="/assets/logo/outbrick-wordmark-96.webp"
        srcSet="/assets/logo/outbrick-wordmark-96.webp 1x, /assets/logo/outbrick-wordmark-192.webp 2x"
        alt=""
        width={489}
        height={96}
      />
    </span>
  );
}

/** App Store link for a placement on a page in `locale`: `web-home-hero`, `web-fr-home-hero` … */
export function localeStoreUrl(campaign: string, locale: Locale = 'en'): string {
  return appStoreUrl(locale === 'en' ? campaign : `${locale}-${campaign}`, storefronts[locale]);
}

/**
 * Brand glyphs for the footer's social links, drawn inline so they cost no request. Simple
 * single-colour marks in `currentColor`, recognisable at 20px.
 */
const socialGlyphs: Record<SocialNetwork, ReactNode> = {
  tiktok: (
    <path
      fill="currentColor"
      d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.38-2.48V9.66a5.73 5.73 0 0 0-.79-.05A5.68 5.68 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48Z"
    />
  ),
  // The play button in a rounded landscape tile, the play triangle cut out.
  youtube: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41A2.51 2.51 0 0 0 2.42 7.2C2 8.76 2 12 2 12s0 3.24.42 4.81a2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81ZM10 15V9l5.2 3L10 15Z"
    />
  ),
  // The camera outline: a rounded square, the lens, and the flash dot.
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" />
    </>
  ),
  // The ghost.
  snapchat: (
    <path
      fill="currentColor"
      d="M12.07 2.5c2.9 0 5.06 2.2 5.06 5.2 0 .83-.07 1.83-.13 2.52.43.2.95.05 1.37-.14.53-.24 1.25.07 1.25.62 0 .5-.5.83-1.4 1.14-.63.21-1.13.43-1.05.93.36 1.94 2.08 3.43 3.6 3.87.4.12.47.5.2.75-.6.52-1.56.64-2.26.82-.2.28-.14.97-.53 1.04-.62.1-1.4-.21-2.46.03-1.25.3-2.02 1.72-4.02 1.72-2 0-2.7-1.4-4-1.72-1.06-.24-1.84.07-2.46-.03-.4-.07-.33-.76-.53-1.04-.7-.18-1.66-.3-2.26-.82-.27-.25-.2-.63.2-.75 1.52-.44 3.24-1.93 3.6-3.87.08-.5-.42-.72-1.05-.93-.9-.31-1.4-.64-1.4-1.14 0-.55.72-.86 1.25-.62.42.19.94.34 1.37.14-.06-.69-.13-1.69-.13-2.52 0-3 2.17-5.2 5.05-5.2Z"
    />
  ),
  // The X: two crossing strokes, one of them hollow.
  x: (
    <path
      fill="currentColor"
      d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"
    />
  ),
};

function SocialIcon({ network }: { network: SocialNetwork }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      {socialGlyphs[network]}
    </svg>
  );
}

export type NavLink = { href: string; label: string; hrefLang?: string };

/** The home page's own section anchors. */
export const homeNav: NavLink[] = [
  { href: '#rule', label: 'The rule' },
  { href: '#journey', label: 'The Journey' },
  { href: '#cast', label: 'The cast' },
  { href: '#fair', label: 'What it costs' },
  { href: '#apple', label: 'Built for Apple' },
];

/** The home page's section anchors in `locale`. */
export function homeNavFor(locale: Locale): NavLink[] {
  const labels = chromeCopy[locale].homeNav;
  return homeNav.map((link, i) => ({ href: link.href, label: labels[i] }));
}

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
  { href: '/press', label: 'Press' },
  { href: '/about', label: 'About' },
  { href: '/authors', label: 'Authors' },
  { href: '/research', label: 'Research' },
  { href: '/support', label: 'Support' },
];

/**
 * The editorial masthead in `locale`. "The game" and "Journal" lead to that
 * language's home page and journal index; everything else is only published
 * in English, so on a translated page those links carry `hreflang="en"`.
 */
export function editorialNavFor(locale: Locale): NavLink[] {
  if (locale === 'en') return editorialNav;
  const labels = chromeCopy[locale].editorialNav;
  return editorialNav.map((link, i) =>
    link.href === '/'
      ? { href: localePath(locale, '/'), label: labels[i] }
      : link.href === '/blog'
        ? { href: `/${locale}/blog`, label: labels[i] }
        : { href: link.href, label: labels[i], hrefLang: 'en' },
  );
}

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
  locale = 'en',
}: {
  links?: NavLink[];
  current?: string;
  home?: string;
  label?: string;
  /** Language of the masthead's own words (badge, menu, "back to top"). English by default. */
  locale?: Locale;
}) {
  const copy = chromeCopy[locale];
  return (
    <header className={`site ${links.length > 5 ? 'many' : ''}`} data-site-header="">
      <div className="wrap">
        <a className="logo" href={home}>
          <BrandMark />
          <span className="sr-only">OutBrick</span>
          {home.startsWith('#') ? <span className="sr-only">{copy.backToTop}</span> : null}
        </a>
        {links.length ? (
          <nav className="main" aria-label={label}>
            {links.map((link) => (
              <a key={link.href} href={link.href} hrefLang={link.hrefLang} aria-current={current === link.href ? 'page' : undefined}>
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
        <AppStoreBadge campaign="header" locale={locale} />
        {links.length ? (
          <details className="menu">
            <summary aria-label={copy.menuLabel(label)}>
              <span className="bars" aria-hidden="true"><i /><i /><i /></span>
              <span className="menu-word">{copy.menu}</span>
            </summary>
            <nav className="menu-panel" aria-label={copy.menuPanelLabel(label)}>
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  hrefLang={link.hrefLang}
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

/**
 * The language switcher: the same page in every language it is published in.
 * Plain links, so it works without script; each names its language in that
 * language, with `lang` and `hreflang` to match.
 */
export function LanguageSwitcher({ locale, page }: { locale: Locale; page: LocalizedPage }) {
  return (
    <nav className="langs" aria-label={chromeCopy[locale].language}>
      <ul>
        {locales.map((l) => (
          <li key={l}>
            <a href={localePath(l, page)} lang={l} hrefLang={l} aria-current={l === locale ? 'page' : undefined}>
              {localeNames[l]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * The footer. `locale` sets its language (English by default). `page` is set
 * only on the pages published in every language (the home page and the play
 * guide), and adds the language switcher. Links to pages only published in
 * English carry `hreflang="en"` on a translated page.
 */
export function VillageFooter({ locale = 'en', page }: { locale?: Locale; page?: LocalizedPage }) {
  const copy = chromeCopy[locale].footer;
  const home = localePath(locale, '/');
  // Pages only published in English: say so to the browser on translated pages.
  const en = locale === 'en' ? undefined : 'en';
  return (
    <footer className="site">
      <div className="wrap">
        <div className="cols">
          <div>
            <a className="logo" href={home}>
              <BrandMark />
              <span className="sr-only">OutBrick</span>
            </a>
            <p className="blurb">
              {copy.blurb}
            </p>
            <ul className="social" aria-label="OutBrick on social media">
              {/* Icons only: the network's name is in the link for screen readers and on hover. */}
              {socialProfiles.map((profile) => (
                <li key={profile.network} className={profile.live ? 'live' : 'soon'}>
                  <a href={profile.url} rel={profile.live ? 'me noopener' : 'noopener'} target="_blank" title={`OutBrick on ${profile.label}`}>
                    <SocialIcon network={profile.network} />
                    <span className="sr-only">OutBrick on {profile.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            {page ? <LanguageSwitcher locale={locale} page={page} /> : null}
          </div>
          <div>
            <h2>{copy.game}</h2>
            <ul>
              <li><a href={localeStoreUrl('footer', locale)}>{copy.download}</a></li>
              <li><a href={`${home}#journey`}>{copy.journey}</a></li>
              <li><a href={`${home}#cast`}>{copy.friends}</a></li>
              <li><a href={`${home}#fair`}>{copy.costs}</a></li>
              <li><a href={localePath(locale, '/play')}>{copy.playGuide}</a></li>
              <li><a href={localePath(locale, '/whats-new')}>{copy.whatsNew}</a></li>
              <li><a href="/daily" hrefLang={en}>{copy.daily}</a></li>
              {/* The journal has an index in every language (its translated guides). */}
              <li><a href={locale === 'en' ? '/blog' : `/${locale}/blog`}>{copy.journal}</a></li>
              <li><a href="/press-kit" hrefLang={en}>{copy.pressKit}</a></li>
            </ul>
          </div>
          <div>
            <h2>{copy.help}</h2>
            <ul>
              <li><a href="/support" hrefLang={en}>{copy.support}</a></li>
              <li><a href="/privacy" hrefLang={en}>{copy.privacy}</a></li>
              <li><a href="/privacy-choices" hrefLang={en}>{copy.privacyChoices}</a></li>
              <li><a href="/terms" hrefLang={en}>{copy.terms}</a></li>
              <li><a href="/license-agreement" hrefLang={en}>{copy.license}</a></li>
              <li><a href="/eula" hrefLang={en}>{copy.eula}</a></li>
              <li><a href="/age-rating" hrefLang={en}>{copy.age}</a></li>
              <li><a href="/accessibility" hrefLang={en}>{copy.accessibility}</a></li>
              <li><a href="/refunds" hrefLang={en}>{copy.refunds}</a></li>
            </ul>
          </div>
          <div>
            <h2>{copy.company}</h2>
            <ul>
              <li><a href="/press" hrefLang={en}>{copy.pressRoom}</a></li>
              <li><a href="/creators" hrefLang={en}>{copy.creators}</a></li>
              <li><a href="/affiliates" hrefLang={en}>{copy.affiliates}</a></li>
              <li><a href="/careers" hrefLang={en}>{copy.careers}</a></li>
              <li><a href="/contact" hrefLang={en}>{copy.contact}</a></li>
            </ul>
          </div>
        </div>
        <p className="legal">
          {copy.legal}
        </p>
      </div>
    </footer>
  );
}
