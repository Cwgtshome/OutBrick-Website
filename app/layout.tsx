import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '../lib/site';

export const metadata: Metadata = {
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
  alternates: { canonical: siteUrl },
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
    images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and home screen' }],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OutBrick',
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: 'A relaxed sliding-brick colour-sort puzzle and an independent game design journal.',
    founder: { '@type': 'Person', name: 'Mourad Hamdi', url: `${siteUrl}/authors/mourad-hamdi` },
    knowsAbout: ['puzzle game design', 'gaming habits', 'accessibility', 'player experience'],
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
    <html lang="en">
      <head>
        {/*
          Fredoka is the display face of the brick site — the nearest web
          equivalent of the rounded type the game sets its titles in. React 19
          hoists these into <head>; the stack in the stylesheet falls back to
          SF Pro Rounded, so an Apple device still reads right if the font never
          arrives.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&display=swap"
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
