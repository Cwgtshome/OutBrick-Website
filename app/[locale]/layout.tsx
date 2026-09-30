import type { Metadata } from 'next';
import { isTranslatedLocale, translatedLocales } from '../../lib/i18n/locales';
import { localizedRootMetadata, SiteDocument } from '../site-document';

/**
 * Root layout for the translated pages: /fr, /de, /es, /ja and their /play.
 * It exists so each one is served with its own <html lang>; see
 * app/site-document.tsx. Only the four codes are prerendered, and
 * `dynamicParams = false` makes any other first segment a 404 rather than a
 * page in a made-up language.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

// Every page under here names its own canonical and hreflang set. The layout
// leaves `alternates` out: the RSS `types` entry is for the English journal.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return localizedRootMetadata(isTranslatedLocale(locale) ? locale : 'en');
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // An unknown code never becomes a page (dynamicParams above); if the
  // framework renders its 404 through this layout, it is an English page.
  return <SiteDocument lang={isTranslatedLocale(locale) ? locale : 'en'}>{children}</SiteDocument>;
}
