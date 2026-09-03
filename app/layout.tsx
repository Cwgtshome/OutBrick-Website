import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OutBrick — Slide bricks out.',
    template: '%s — OutBrick',
  },
  description: 'OutBrick is a relaxed sliding-brick colour-sort puzzle with real mascots, useful widgets, and no ads or lives.',
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
    description: 'A relaxed sliding-brick colour-sort puzzle with real mascots, widgets, and no ads or lives.',
    images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and home screen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OutBrick — Slide bricks out.',
    description: 'A relaxed sliding-brick colour-sort puzzle with real mascots, widgets, and no ads or lives.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
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
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      </body>
    </html>
  );
}
