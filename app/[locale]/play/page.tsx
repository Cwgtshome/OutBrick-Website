import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../../lib/i18n/locales';
import { PlayGuide, playMetadata } from '../../components/play-guide';

/** The play guide in French, German, Spanish and Japanese: /fr/play, /de/play, /es/play, /ja/play. */
type LocalePlayProps = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePlayProps): Promise<Metadata> {
  const { locale } = await params;
  return isTranslatedLocale(locale) ? playMetadata(locale) : {};
}

export default async function LocalePlayPage({ params }: LocalePlayProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <PlayGuide locale={locale} />;
}
