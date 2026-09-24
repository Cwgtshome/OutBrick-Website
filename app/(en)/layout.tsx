import type { Metadata } from 'next';
import { rootMetadata, SiteDocument } from '../site-document';

/** Root layout for every English route. See app/site-document.tsx for why there are two. */
export const metadata: Metadata = rootMetadata;

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
