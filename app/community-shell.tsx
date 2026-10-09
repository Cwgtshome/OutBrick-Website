/**
 * The prerendered page every /community address is served from (netlify.toml rewrites the
 * ones that are not files to `/community` or `/<locale>/community`): the site's masthead and
 * footer in the page's language, a `<main>` holding the server-rendered version of the page in
 * `[data-cm-static]`, and the client app (app/components/community/community-app.tsx) that takes
 * over once script runs.
 *
 * Three views are real prerendered pages, for readers without script and for search engines:
 * the community home, the FAQ and the guidelines. Threads are filled in at the edge
 * (netlify/edge-functions/community-thread.ts), into the same slot.
 */

import type { Metadata } from 'next';
import type { CommunityLocale } from '../lib/community/contract';
import { communityPath } from '../lib/community/contract';
import { communityCopy } from '../lib/i18n/community';
import { faqStaticHtml, guidelinesStaticHtml, homeStaticHtml } from '../lib/community/static-html';
import { localeAlternates, localePath, ogLocales, type Locale } from '../lib/i18n/locales';
import { siteUrl } from '../lib/site';
import { supportFaqs } from '../lib/support-faqs';
import { breadcrumbNode, graph, webPageNode } from '../lib/structured-data';
import { JsonLd } from './json-ld';
import { translatedText } from './localized-public-page';
import { editorialNavFor, VillageFooter, VillageHeader } from './village-shell';
import { chromeCopy } from '../lib/i18n/chrome';
import { CommunityApp } from './components/community/community-app';
import './styles/community.css';
import './styles/help-blocks.css';

export type CommunityShellView = 'home' | 'faq' | 'guidelines';

const pagePath: Record<CommunityShellView, string> = { home: '/community', faq: '/community/faq', guidelines: '/community/guidelines' };

function words(locale: Locale, view: CommunityShellView) {
  const meta = communityCopy[locale].meta;
  if (view === 'faq') return { title: meta.faqTitle, description: meta.faqDescription, name: communityCopy[locale].faq.title };
  if (view === 'guidelines') return { title: meta.guidelinesTitle, description: meta.guidelinesDescription, name: communityCopy[locale].guidelines.title };
  return { title: meta.homeTitle, description: meta.homeDescription, name: communityCopy[locale].name };
}

/** The support page's answers in `locale`, through the support page's own dictionaries. */
export function localizedSupportFaqs(locale: Locale) {
  if (locale === 'en') return supportFaqs;
  return supportFaqs.map((f) => ({ question: translatedText(f.question, locale), answer: translatedText(f.answer, locale) }));
}

export function communityMetadata(locale: Locale, view: CommunityShellView): Metadata {
  const { title, description } = words(locale, view);
  const path = pagePath[view];
  const url = `${siteUrl}${localePath(locale, path)}`;
  const image = locale === 'en' ? `${siteUrl}/og.png` : `${siteUrl}/og/${locale}.png`;
  const alt = communityCopy[locale].name;
  return {
    title: { absolute: title },
    description,
    alternates: localeAlternates(locale, path),
    robots: { index: true, follow: true },
    openGraph: { type: 'website', siteName: 'OutBrick', url, title, description, locale: ogLocales[locale], images: [{ url: image, width: 1200, height: 630, alt }] },
    twitter: { card: 'summary_large_image', title, description, images: [{ url: image, alt }] },
  };
}

export function CommunityShell({ locale, view }: { locale: CommunityLocale; view: CommunityShellView }) {
  const copy = communityCopy[locale];
  const faqs = localizedSupportFaqs(locale);
  const html = view === 'faq' ? faqStaticHtml(locale, faqs) : view === 'guidelines' ? guidelinesStaticHtml(locale) : homeStaticHtml(locale);
  const path = pagePath[view];
  const url = `${siteUrl}${localePath(locale, path)}`;
  const { name, description } = words(locale, view);
  const crumbs = [
    { name: 'OutBrick', path: localePath(locale, '/') },
    { name: copy.nav.label, path: communityPath(locale) },
    ...(view === 'home' ? [] : [{ name, path: localePath(locale, path) }]),
  ];
  return (
    <div className="ob-site cm-site">
      <a className="skip" href="#main">
        {copy.skip}
      </a>
      <VillageHeader links={editorialNavFor(locale)} current={communityPath(locale)} home={localePath(locale, '/')} label={locale === 'en' ? 'Primary navigation' : chromeCopy[locale].primaryNav} locale={locale} />
      <main id="main" className="cm">
        <div className="cm-static" data-cm-static="" dangerouslySetInnerHTML={{ __html: html }} />
        <CommunityApp locale={locale} supportFaqs={faqs} />
      </main>
      <VillageFooter locale={locale} page={path} />
      <JsonLd
        data={graph(
          webPageNode({ type: view === 'home' ? 'CollectionPage' : 'WebPage', url, name, description, inLanguage: locale }),
          breadcrumbNode(url, crumbs),
        )}
      />
    </div>
  );
}
