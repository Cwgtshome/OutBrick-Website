/**
 * /whats-new and its translations (/fr/whats-new, /de/whats-new, /es/whats-new,
 * /ja/whats-new): OutBrick's release notes as a timeline, newest first.
 *
 * The notes are the App Store's own "What's New" text, copied into
 * lib/releases.ts. The English page carries every release the site has notes
 * for, the "earlier releases" stop and the newsletter; a translated page
 * carries the current release in its language and points to the English page
 * for the rest.
 */

import type { Metadata } from 'next';
import { chromeCopy } from '../../lib/i18n/chrome';
import { localeAlternates, localePath, localeUrl, ogLocales, type Locale } from '../../lib/i18n/locales';
import { formatReleaseDate, whatsNewCopy } from '../../lib/i18n/whats-new';
import { currentReleaseIn, firstRelease, releaseAnchor, releases, type Release } from '../../lib/releases.ts';
import { siteUrl } from '../../lib/site';
import { Bond, Crumbs, JsonLd, Studs } from '../editorial-shell';
import { editorialNavFor, localeStoreUrl, VillageFooter, VillageHeader } from '../village-shell';
import { GetAppQr } from './get-app-qr';
import { NewsletterSignup } from './newsletter-signup';
import '../styles/growth.css';

/** Section tones, in the order the brick colours run on the boulevard. */
const tones = ['gold', 'teal', 'purple', 'blue', 'red', 'green', 'orange', 'pink', 'yellow'];

export function whatsNewMetadata(locale: Locale): Metadata {
  const { title, description } = whatsNewCopy[locale].meta;
  const url = localeUrl(locale, '/whats-new');
  return {
    title: { absolute: title },
    description,
    alternates: {
      ...localeAlternates(locale, '/whats-new'),
      // The plain string form on purpose: vinext 1.0.0-beta.5 fails to prerender the translated
      // pages when `types` takes the `[{ url, title }]` form next to `languages`.
      types: { 'application/rss+xml': '/whats-new/feed.xml' },
    },
    openGraph: {
      type: 'website',
      siteName: 'OutBrick',
      url,
      locale: ogLocales[locale],
      title,
      description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'OutBrick mascots and home screen' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  };
}

function ReleaseEntry({ release, locale }: { release: Release; locale: Locale }) {
  const copy = whatsNewCopy[locale];
  const anchor = releaseAnchor(release.version);
  const titleId = `release-${anchor}-title`;
  return (
    <li>
      <article id={anchor} className="wn-release" aria-labelledby={titleId}>
        <div className="wn-rail">
          <a className="wn-chip ed-slab lit" data-tone="gold" href={`#${anchor}`}>
            <Studs count={2} />
            <small>{copy.version}</small>
            <b>{release.version}</b>
          </a>
          <p className="wn-date">
            <span className="obx-sr">{copy.released} </span>
            <time dateTime={release.date}>{formatReleaseDate(release.date, locale)}</time>
          </p>
        </div>
        <div className="wn-body">
          <h2 id={titleId} className="ed-h2">{release.headline}</h2>
          <div className="wn-groups">
            {release.sections.map((section, index) => (
              <section key={section.title} className="wn-group" data-tone={tones[index % tones.length]} aria-labelledby={`${titleId}-${index}`}>
                <h3 id={`${titleId}-${index}`}>{section.title}</h3>
                {section.intro ? <p>{section.intro}</p> : null}
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
}

export function WhatsNewPage({ locale }: { locale: Locale }) {
  const copy = whatsNewCopy[locale];
  const chrome = chromeCopy[locale];
  const current = currentReleaseIn(locale);
  const shown: Release[] = locale === 'en' ? releases : [current];
  const pageUrl = localeUrl(locale, '/whats-new');
  const home = localePath(locale, '/');
  const storeUrl = localeStoreUrl('whats-new', locale);
  const en = locale === 'en' ? undefined : 'en';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#page`,
    url: pageUrl,
    name: copy.meta.title,
    description: copy.meta.description,
    inLanguage: locale,
    isPartOf: { '@id': `${siteUrl}/#website` },
    dateModified: current.date,
    mainEntity: {
      '@type': 'ItemList',
      name: 'OutBrick release notes',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: shown.length,
      itemListElement: shown.map((release, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${pageUrl}#${releaseAnchor(release.version)}`,
        name: `OutBrick ${release.version}: ${release.headline}`,
      })),
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: localeUrl(locale, '/') },
      { '@type': 'ListItem', position: 2, name: copy.crumb, item: pageUrl },
    ],
  };

  return (
    <div className="ed wn">
      <a className="ed-skip" href="#main">{chrome.skip}</a>
      <div className="ob-site ed-chrome">
        <VillageHeader links={editorialNavFor(locale)} home={home} label={chrome.primaryNav} locale={locale} />
      </div>
      <main id="main">
        <header className="ed-band-ink ed-hero">
          <div className="ed-wrap">
            <Crumbs items={[{ href: home, label: 'OutBrick' }, { label: copy.crumb }]} />
            <div className="ed-hero-grid">
              <div>
                <p className="ed-label">{copy.label}</p>
                <h1 className="ed-display">{copy.title[0]}<em>{copy.title[1]}</em></h1>
                <p className="ed-lede">{copy.lede(current.version, formatReleaseDate(current.date, locale))}</p>
                <div className="ed-actions">
                  <a className="ed-btn" href={storeUrl}>{copy.getUpdate}</a>
                  <a className="ed-link" href="/whats-new/feed.xml" hrefLang={en} type="application/rss+xml">{copy.rss}</a>
                </div>
              </div>
              <a className="wn-hero-brick ed-slab lit" href={`#${releaseAnchor(current.version)}`}>
                <Studs count={2} />
                <small>{copy.current}</small>
                <strong>{current.version}</strong>
                <span>{formatReleaseDate(current.date, locale)}</span>
              </a>
            </div>
          </div>
        </header>
        <Bond />

        <section className="ed-band-paper ed-band" aria-label={copy.label}>
          <div className="ed-wrap">
            <ol className="wn-list">
              {shown.map((release) => (
                <ReleaseEntry key={release.version} release={release} locale={locale} />
              ))}
              {locale === 'en' ? (
                <li>
                  <article id="earlier" className="wn-release wn-earlier" aria-labelledby="earlier-title">
                    <div className="wn-rail">
                      <span className="wn-chip ed-slab lit" data-tone="teal">
                        <Studs count={2} />
                        <small>Version</small>
                        <b>{firstRelease.version}</b>
                      </span>
                      <p className="wn-date">
                        <span className="obx-sr">Released </span>
                        <time dateTime={firstRelease.date}>{formatReleaseDate(firstRelease.date, 'en')}</time>
                      </p>
                    </div>
                    <div className="wn-body">
                      <h2 id="earlier-title" className="ed-h2">Earlier releases</h2>
                      <div className="ed-prose">
                        <p>
                          OutBrick first went on sale on the App Store on {formatReleaseDate(firstRelease.date, 'en')},
                          as version {firstRelease.version}. The notes for the updates between then and 4.2 aren’t
                          reproduced here; this page starts with 4.2.
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              ) : null}
            </ol>
            {copy.olderInEnglish ? (
              <p className="ed-meta" style={{ marginTop: 40 }}>
                {copy.olderInEnglish.note}{' '}
                <a className="ed-link" href="/whats-new#earlier" hrefLang="en">{copy.olderInEnglish.link}</a>
              </p>
            ) : null}
          </div>
        </section>
        <Bond thin />

        <section className="ed-band-ink ed-band" aria-labelledby="wn-cta-title">
          <div className="ed-wrap wn-cta-grid">
            <div>
              <h2 id="wn-cta-title" className="ed-h2">{copy.cta.title}</h2>
              <p className="ed-lede" style={{ marginTop: 16 }}>{copy.cta.lede}</p>
              <div className="ed-actions" style={{ marginTop: 28 }}>
                <a className="ed-btn" href={storeUrl}>{copy.getUpdate}</a>
              </div>
            </div>
            <GetAppQr locale={locale} />
          </div>
        </section>

        {locale === 'en' ? (
          <section id="newsletter" className="ed-band-cream ed-band" aria-labelledby="wn-news-title" style={{ scrollMarginTop: 90 }}>
            <div className="ed-wrap wn-news-grid">
              <div>
                <p className="ed-label">Newsletter</p>
                <h2 id="wn-news-title" className="ed-h2" style={{ marginTop: 14 }}>Hear about the next one first.</h2>
                <p className="ed-lede" style={{ marginTop: 16 }}>
                  One short email when a new village opens or a big update lands. About once a month,
                  never more. <a className="ed-link" href="/newsletter">What you’ll get</a>
                </p>
              </div>
              <NewsletterSignup showHeading={false} />
            </div>
          </section>
        ) : null}

        <JsonLd data={structuredData} />
        <JsonLd data={breadcrumbData} />
      </main>
      <div className="ob-site ed-chrome">
        <VillageFooter locale={locale} page="/whats-new" />
      </div>
    </div>
  );
}
