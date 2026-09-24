/**
 * JSON-LD for the pages published in every language: the home page and the play guide.
 * Rendered by their route files (app/(en)/page.tsx, app/[locale]/page.tsx and the two play
 * routes), next to the page component, so the page components stay about the page.
 */

import { homeCopy } from '../lib/i18n/home';
import { playCopy } from '../lib/i18n/play';
import { chromeCopy } from '../lib/i18n/chrome';
import { localeUrl, type Locale } from '../lib/i18n/locales';
import { appNode, breadcrumbNode, graph, ids, ref, webPageNode } from '../lib/structured-data';
import { JsonLd } from './editorial-shell';

/** The home hero's phone screen: the largest thing in the first viewport, so the LCP image. */
export const HOME_HERO_IMAGE = '/assets/villages/garden-city.jpg';

export function HomeStructuredData({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  const url = localeUrl(locale, '/');
  const page = webPageNode({
    url,
    name: t.meta.title,
    description: t.meta.description,
    inLanguage: locale,
    breadcrumb: false,
    about: ref(ids.app),
    mainEntity: ref(ids.app),
    primaryImageOfPage: { '@type': 'ImageObject', url: `https://www.outbrick.site${HOME_HERO_IMAGE}`, width: 520, height: 1131, caption: t.hero.phoneAlt },
  });
  return (
    <>
      {/*
        Ask for the hero image from the <head>, before the stylesheet has been parsed. React
        hoists a <link> rendered anywhere into the head. The <img> itself already carries
        fetchpriority="high", but React's own automatic image preloads do not include it.
      */}
      <link rel="preload" as="image" href={HOME_HERO_IMAGE} fetchPriority="high" />
      <JsonLd data={graph(page, appNode({ description: t.appDescription, url: localeUrl('en', '/') }))} />
    </>
  );
}

export function PlayStructuredData({ locale }: { locale: Locale }) {
  const t = playCopy[locale];
  const url = localeUrl(locale, '/play');
  const page = webPageNode({
    url,
    name: t.meta.title,
    description: t.meta.description,
    inLanguage: locale,
    about: ref(ids.app),
  });
  const crumbs = breadcrumbNode(url, [
    { name: 'OutBrick', path: localeUrl(locale, '/') },
    { name: chromeCopy[locale].footer.playGuide, path: url },
  ]);
  return <JsonLd data={graph(page, crumbs, appNode({ description: homeCopy[locale].appDescription, url: localeUrl('en', '/') }))} />;
}
