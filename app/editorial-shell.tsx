/**
 * The furniture of the editorial side of the domain — the journal, its
 * articles, the mascots, the press kit, about, authors and research.
 *
 * The masthead and footer are the village site's own (`VillageHeader`,
 * `VillageFooter`), so every page on the domain wears one chrome. Everything
 * between them is styled by app/styles/editorial.css under the `.ed` scope;
 * the small pieces every editorial page shares live here.
 */

import type { ReactNode } from 'react';
import { chromeCopy } from '../lib/i18n/chrome';
import { localePath, type Locale, type TranslatedLocale } from '../lib/i18n/locales';
import { editorialNav, editorialNavFor, localeStoreUrl, VillageFooter, VillageHeader } from './village-shell';
import { appStoreUrl } from './store-badge';

const currentHref: Record<string, string> = {
  about: '/about',
  authors: '/authors',
  research: '/research',
  blog: '/blog',
  mascots: '/mascots',
  // The press kit and the press room share the masthead's one Press link.
  'press-kit': '/press',
  press: '/press',
};

/** The masthead link a page lights up. Careers, affiliates and creators live in the footer only. */
type Section = 'about' | 'authors' | 'research' | 'blog' | 'mascots' | 'press-kit' | 'press';

export function EditorialHeader({ current }: { current?: Section }) {
  return (
    <div className="ob-site ed-chrome">
      <VillageHeader links={editorialNav} current={current ? currentHref[current] : undefined} label="Primary navigation" />
    </div>
  );
}

/**
 * The masthead of a translated journal page (/fr/blog …): the editorial nav in
 * that language, whose "Journal" is that language's journal index.
 */
function TranslatedEditorialHeader({ locale, current }: { locale: TranslatedLocale; current?: Section }) {
  return (
    <div className="ob-site ed-chrome">
      <VillageHeader
        links={editorialNavFor(locale)}
        current={current === 'blog' ? `/${locale}/blog` : undefined}
        home={localePath(locale, '/')}
        label={chromeCopy[locale].primaryNav}
        locale={locale}
      />
    </div>
  );
}

export function EditorialFooter({ languages }: { languages?: Partial<Record<Locale, string>> } = {}) {
  return (
    <div className="ob-site ed-chrome">
      <VillageFooter languages={languages} />
    </div>
  );
}

/** The page frame every editorial route renders: skip link, masthead, main, footer. */
export function EditorialPage({
  current,
  tone,
  className = '',
  children,
  before,
  locale,
  languages,
}: {
  current?: Section;
  tone?: string;
  className?: string;
  children: ReactNode;
  /** Rendered before the masthead — the reading-progress bar. */
  before?: ReactNode;
  /** Set on the translated journal pages: skip link, masthead and footer in that language. */
  locale?: TranslatedLocale;
  /** The page's own versions in other languages, for the footer's language picker. */
  languages?: Partial<Record<Locale, string>>;
}) {
  if (locale) {
    return (
      <div className={`ed ${className}`} data-tone={tone}>
        <a className="ed-skip" href="#main">{chromeCopy[locale].skip}</a>
        {before}
        <TranslatedEditorialHeader locale={locale} current={current} />
        <main id="main">{children}</main>
        <div className="ob-site ed-chrome">
          <VillageFooter locale={locale} languages={languages} />
        </div>
      </div>
    );
  }
  return (
    <div className={`ed ${className}`} data-tone={tone}>
      <a className="ed-skip" href="#main">Skip to content</a>
      {before}
      <EditorialHeader current={current} />
      <main id="main">{children}</main>
      <EditorialFooter languages={languages} />
    </div>
  );
}

export type Crumb = { href?: string; label: string };

export function Crumbs({ items, label = 'Breadcrumb' }: { items: Crumb[]; label?: string }) {
  return (
    <nav className="ed-crumbs" aria-label={label}>
      <ol>
        {items.map((item, index) =>
          item.href && index < items.length - 1 ? (
            <li key={item.label}><a href={item.href}>{item.label}</a></li>
          ) : (
            <li key={item.label} aria-current="page">{item.label}</li>
          ),
        )}
      </ol>
    </nav>
  );
}

/** A running-bond course: the divider between two bands. */
export function Bond({ thin = false }: { thin?: boolean }) {
  return <div className={`ed-bond ${thin ? 'thin' : ''}`} aria-hidden="true" />;
}

/** Studs along the exposed top of a slab. */
export function Studs({ count = 3 }: { count?: number }) {
  return (
    <span className="ed-studs" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => <i key={index} />)}
    </span>
  );
}

/** Apple's own badge artwork, at a size the guidelines allow. A translated page links to its own storefront. */
export function Badge({ locale }: { locale?: TranslatedLocale } = {}) {
  if (locale) {
    const copy = chromeCopy[locale];
    return (
      <a className="ed-badge" href={localeStoreUrl('journal', locale)} aria-label={copy.badgeLabel}>
        <img src="/assets/badge/appstore-black.svg" alt={copy.badgeAlt} width={132} height={44} />
      </a>
    );
  }
  return (
    <a className="ed-badge" href={appStoreUrl('journal')} aria-label="Download OutBrick on the App Store">
      <img src="/assets/badge/appstore-black.svg" alt="Download on the App Store" width={132} height={44} />
    </a>
  );
}

/** Serialise JSON-LD. `<` is escaped so a string can never close the script. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
