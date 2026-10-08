/**
 * JSON-LD for the pages published in every language: the home page and the play guide.
 * Rendered by their route files (app/(en)/page.tsx, app/[locale]/page.tsx and the two play
 * routes), next to the page component, so the page components stay about the page.
 */

import { homeCopy } from '../lib/i18n/home';
import { localizedAsset } from '../lib/i18n/assets';
import { localizedApplicationNode } from '../lib/i18n/application';
import { playCopy } from '../lib/i18n/play';
import { chromeCopy } from '../lib/i18n/chrome';
import { localeUrl, type Locale } from '../lib/i18n/locales';
import { appNode, breadcrumbNode, graph, ids, ref, webPageNode } from '../lib/structured-data';
import { JsonLd } from './json-ld';

/** The home hero's phone screen, named as the page's primary image (the <img> serves its WebP twin). */
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
    primaryImageOfPage: { '@type': 'ImageObject', url: `https://www.outbrick.site${localizedAsset(HOME_HERO_IMAGE, locale)}`, width: 520, height: 1131, caption: t.hero.phoneAlt },
  });
  return (
    <>
      {/*
        No high-priority preload for the hero image: Lighthouse (8 October 2026) measured the
        hero headline, not the phone, as the largest paint, and on a phone the phone sits below
        the fold, so a preload only competed with the stylesheet and the fonts the headline needs.
      */}
      <JsonLd data={graph(page, localizedApplicationNode(appNode({ description: t.appDescription, url: localeUrl('en', '/') }), locale))} />
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
  return <JsonLd data={graph(page, crumbs, localizedApplicationNode(appNode({ description: homeCopy[locale].appDescription, url: localeUrl('en', '/') }), locale))} />;
}
