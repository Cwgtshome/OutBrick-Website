/**
 * The <html> document every page on the site is rendered into.
 *
 * The site has two root layouts, because a root layout is the only place that
 * can write <html lang>: `app/(en)/layout.tsx` wraps every English route
 * (`/`, `/play`, the journal, the legal pages …) with `lang="en"`, and
 * `app/[locale]/layout.tsx` wraps the translated home page and play guide
 * (`/fr`, `/de`, `/es`, `/ja` and their `/play`) with that locale's code. Both
 * render this one component, so the head, the fonts, the motion switch and
 * the site-wide structured data can never drift apart between them.
 */

import type { Metadata } from 'next';
import { LocaleProvider } from './components/locale-context';
import { isTranslatedLocale, localePath, type Locale } from '../lib/i18n/locales';
import { homeCopy } from '../lib/i18n/home';
import { journalUi } from '../lib/i18n/blog';
import { siteWords } from '../lib/i18n/site';
import './styles/fonts.css';
import './globals.css';
import './styles/consent.css';
import './styles/status-banner.css';
import { consentDefaultsScript, gaMeasurementId } from '../lib/analytics';
import { ConsentBanner } from './components/consent-banner';
import { StatusBanner } from './components/support/status-banner';
import { siteUrl } from '../lib/site';
import { siteGraph } from '../lib/structured-data';
import { APP_STORE_ID } from './store-badge';

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OutBrick — Slide, match, send them home',
    template: '%s — OutBrick',
  },
  description: 'OutBrick is a calm slide-and-match brick puzzle: 2,000 solver-proven boards across 100 chapters, a Journey of 167 villages built stud by stud out of brick, and nine brick friends. No timer, ever, and nothing that interrupts a board.',
  applicationName: 'OutBrick',
  authors: [{ name: 'Mourad Hamdi', url: `${siteUrl}/authors/mourad-hamdi` }],
  creator: 'Mourad Hamdi',
  publisher: 'OutBrick',
  category: 'games',
  referrer: 'origin-when-cross-origin',
  formatDetection: { telephone: false },
  keywords: [
    'OutBrick',
    'slide and match puzzle',
    'brick puzzle game',
    'colour sort puzzle',
    'offline puzzle game',
    'calm mobile games',
    'game design journal',
    'gaming habits research',
    'brick village map',
  ],
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': [{ url: '/feed.xml', title: 'The OutBrick Journal' }] },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'OutBrick',
    title: 'OutBrick — Slide, match, send them home',
    description: 'A calm slide-and-match brick puzzle with real mascots, widgets, and no ad you did not press a button to see.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'OutBrick mascots and home screen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OutBrick — Slide, match, send them home',
    description: 'A calm slide-and-match brick puzzle: slide bricks home through the gate of their colour and line up three to clear them. No timer, ever.',
    images: [{ url: '/og.png', alt: 'OutBrick mascots and home screen' }],
  },
  icons: {
    icon: [
      { url: '/assets/icon/favicon-64.png', sizes: '64x64' },
      { url: '/assets/icon/icon-192.png', sizes: '192x192' },
    ],
    apple: '/assets/icon/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: { title: 'OutBrick' },
  // Safari on iPhone and iPad shows Apple's Smart App Banner: an Open/Get bar that knows
  // whether OutBrick is already installed. `app-argument` is left out so Open lands on the home screen.
  itunes: { appId: APP_STORE_ID },
  // Google Search Console. The same token is also the DNS TXT value for the outbrick.site domain
  // property; the meta tag verifies the https://www.outbrick.site/ URL-prefix property.
  // Bing Webmaster Tools verifies through public/BingSiteAuth.xml.
  verification: { google: 'yaGNGIBSmMo6k68leHcAutXwGQ4L0S6tdRR_rQH8J68' },
};

export function localizedRootMetadata(locale: Locale): Metadata {
  const copy = homeCopy[locale].meta;
  const { alternates: _alternates, ...shared } = rootMetadata;
  return { ...shared, title: { default: copy.title, template: '%s — OutBrick' }, description: copy.description,
    authors: [{ name: 'Mourad Hamdi', url: localePath(locale, '/authors/mourad-hamdi') }],
    keywords: undefined, manifest: locale === 'en' ? '/site.webmanifest' : `/${locale}/site.webmanifest`,
    category: {en:'games',fr:'jeux',de:'Spiele',es:'juegos',ja:'ゲーム','pt-BR':'jogos'}[locale],
    openGraph: { ...rootMetadata.openGraph, title: copy.ogTitle, description: copy.ogDescription, images: [{ url: locale === 'en' ? '/og.png' : `/og/${locale}.png`, width: 1200, height: 630, alt: copy.ogImageAlt }] },
    twitter: { card: 'summary_large_image', title: copy.ogTitle, description: copy.ogDescription, images: [{ url: locale === 'en' ? '/og.png' : `/og/${locale}.png`, alt: copy.ogImageAlt }] },
  };
}
function localizedSiteGraph(locale: Locale) {
  if (locale === 'en') return siteGraph();
  const source = JSON.parse(JSON.stringify(siteGraph())) as { '@graph': Record<string, unknown>[] };
  const t = siteWords[locale];
  for (const node of source['@graph']) {
    if (node['@type'] === 'Organization') {
      node.description = t.organization;
      node.knowsAbout = {
        fr:['conception de jeux de puzzle','habitudes de jeu','accessibilité des jeux','expérience des joueurs'],
        de:['Puzzle-Spieldesign','Spielgewohnheiten','Barrierefreiheit in Spielen','Spielerlebnis'],
        es:['diseño de juegos de puzles','hábitos de juego','accesibilidad de los juegos','experiencia de quienes juegan'],
        ja:['パズルゲームの設計','プレイ習慣','ゲームのアクセシビリティ','プレイヤー体験'],
        'pt-BR':['design de quebra-cabeças','hábitos de jogo','acessibilidade em jogos','experiência de quem joga'],
      }[locale];
      const logo = node.logo as Record<string, unknown> | undefined;
      if (logo) logo.caption = t.icon;
      const contact = node.contactPoint as Record<string, unknown>;
      contact.contactType = t.support; contact.url = `${siteUrl}${localePath(locale, '/contact')}`;
    } else if (node['@type'] === 'Person') {
      node.jobTitle = journalUi[locale].authors['mourad-hamdi'].role;
      node.description = journalUi[locale].authors['mourad-hamdi'].bio;
      node.url = `${siteUrl}${localePath(locale, '/authors/mourad-hamdi')}`;
    } else if (node['@type'] === 'WebSite') {
      node.description = t.website; node.inLanguage = locale; node.url = `${siteUrl}/${locale}`;
      const action = node.potentialAction as { target: { urlTemplate: string } };
      action.target.urlTemplate = `${siteUrl}/${locale}/blog?q={search_term_string}`;
    }
  }
  return source;
}

export function SiteDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds `js` to <html>
    // before React hydrates, which is the whole point of it.
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/*
          Self-hosted type (app/styles/fonts.css): Fredoka for display — the
          nearest web equivalent of the rounded type the game sets its titles
          in — and Figtree for running text. Nothing is requested from a third
          party. The two faces the first screen needs are preloaded.
        */}
        <link rel="preload" href="/fonts/fredoka-latin-wght.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/figtree-latin-wght.woff2" as="font" type="font/woff2" crossOrigin="" />
        {/*
          Scroll reveals only hide content once we know script is running, so
          crawlers and no-JS readers never meet a blank section. If the motion
          script has not checked in after four seconds (blocked, errored), the
          class comes off again and everything shows.
        */}
        {/*
          The same script marks the season from the visitor's own date, so the home sky can snow
          in winter and drop leaves in autumn (app/styles/seasons.css). `?season=` overrides it
          for checking a season out of time; nothing else depends on it.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d){d.classList.add('js');setTimeout(function(){if(!window.__obMotion)d.classList.remove('js')},4000);try{var n=new Date(),v=(n.getMonth()+1)*100+n.getDate(),o=new URLSearchParams(location.search).get('season'),s=v>=1201||v<=106?'winter':v>=1010&&v<=1102?'autumn':'';if(o==='winter'||o==='autumn'||o==='none')s=o==='none'?'':o;if(s)d.dataset.season=s}catch(e){}})(document.documentElement)",
          }}
        />
        {/*
          Google Analytics, only when GA_MEASUREMENT_ID is configured (lib/analytics.ts): Consent
          Mode v2 defaults, everything denied. This writes to a local array and requests nothing;
          gtag.js loads only after the visitor accepts in the banner below. Without an ID, none of
          this is rendered. `ob-analytics` tells scripts/postbuild.mjs to keep Google in the CSP.
        */}
        {gaMeasurementId ? (
          <>
            <meta name="ob-analytics" content="ga4-consent" />
            <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript() }} />
          </>
        ) : null}
        <meta name="theme-color" content="#1a1350" />
        <link rel="author" href="/humans.txt" />
      </head>
      <body className="antialiased">
        <LocaleProvider locale={lang as Locale}>{children}</LocaleProvider>
        <StatusBanner locale={(isTranslatedLocale(lang) ? lang : 'en') as Locale} />
        {gaMeasurementId ? <ConsentBanner measurementId={gaMeasurementId} locale={(isTranslatedLocale(lang) ? lang : 'en') as Locale} /> : null}
        {/* The organisation, its founder and the website: the graph every page's own JSON-LD points into. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localizedSiteGraph(isTranslatedLocale(lang) ? lang : 'en')).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  );
}
