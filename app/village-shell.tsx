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

/** `hrefLang` marks a link on a translated page that leads to a page only published in English. */
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
  { href: '/press-kit', label: 'Press kit' },
  { href: '/about', label: 'About' },
  { href: '/authors', label: 'Authors' },
  { href: '/research', label: 'Research' },
  { href: '/support', label: 'Support' },
];

/**
 * The editorial masthead in `locale`. "The game" leads to that language's
 * home page; everything else is only published in English, so on a
 * translated page those links carry `hreflang="en"`.
 */
export function editorialNavFor(locale: Locale): NavLink[] {
  if (locale === 'en') return editorialNav;
  const labels = chromeCopy[locale].editorialNav;
  return editorialNav.map((link, i) =>
    link.href === '/'
      ? { href: localePath(locale, '/'), label: labels[i] }
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
              {copy.menu}
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
              <li><a href="/blog" hrefLang={en}>{copy.journal}</a></li>
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
