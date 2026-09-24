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
import './styles/fonts.css';
import './globals.css';
import { liveSocialUrls, siteUrl } from '../lib/site';
import { APP_STORE_ID } from './store-badge';

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OutBrick — Slide bricks out.',
    template: '%s — OutBrick',
  },
  description: 'OutBrick is a sliding-brick colour-sort puzzle: 2,000 solver-verified boards across 100 chapters, a Journey of 167 villages built stud by stud out of brick, and nine brick friends. One finger, no clock, and nothing that interrupts a board.',
  applicationName: 'OutBrick',
  authors: [{ name: 'OutBrick' }],
  creator: 'OutBrick',
  publisher: 'OutBrick',
  category: 'games',
  referrer: 'origin-when-cross-origin',
  formatDetection: { telephone: false },
  keywords: [
    'OutBrick',
    'sliding brick puzzle',
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
    title: 'OutBrick — Slide bricks out.',
    description: 'A relaxed sliding-brick colour-sort puzzle with real mascots, widgets, and no ad you did not press a button to see.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'OutBrick mascots and home screen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OutBrick — Slide bricks out.',
    description: 'A one-finger colour-sort puzzle with real mascots and widgets. Nothing interrupts a board, and every board comes with a free undo.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/assets/icon/favicon-64.png', sizes: '64x64' },
      { url: '/assets/icon/icon-192.png', sizes: '192x192' },
    ],
    apple: '/assets/icon/apple-touch-icon.png',
  },
  appleWebApp: { title: 'OutBrick' },
  // Safari on iPhone and iPad shows Apple's Smart App Banner: an Open/Get bar that knows
  // whether OutBrick is already installed. `app-argument` is left out so Open lands on the home screen.
  itunes: { appId: APP_STORE_ID },
  // Google Search Console. The same token is also the DNS TXT value for the outbrick.site domain
  // property; the meta tag verifies the https://www.outbrick.site/ URL-prefix property.
  // Bing Webmaster Tools verifies through public/BingSiteAuth.xml.
  verification: { google: 'yaGNGIBSmMo6k68leHcAutXwGQ4L0S6tdRR_rQH8J68' },
};

export function SiteDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OutBrick',
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: 'A relaxed sliding-brick colour-sort puzzle and an independent game design journal.',
    founder: { '@type': 'Person', name: 'Mourad Hamdi', url: `${siteUrl}/authors/mourad-hamdi` },
    knowsAbout: ['puzzle game design', 'gaming habits', 'accessibility', 'player experience'],
    sameAs: liveSocialUrls(),
  };
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'OutBrick',
    url: siteUrl,
    description: 'A relaxed sliding-brick colour-sort puzzle and an independent game design journal.',
    publisher: { '@type': 'Organization', name: 'OutBrick', url: siteUrl },
  };

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
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d){d.classList.add('js');setTimeout(function(){if(!window.__obMotion)d.classList.remove('js')},4000)})(document.documentElement)",
          }}
        />
        <meta name="theme-color" content="#1a1350" />
      </head>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      </body>
    </html>
  );
}
