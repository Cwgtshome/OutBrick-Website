import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://outbrick.mourad-hamdi.chatgpt.site';

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
  keywords: ['OutBrick', 'sliding brick puzzle', 'colour sort', 'offline puzzle'],
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
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
