import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../../../lib/i18n/locales';
import { LevelsPage, levelsMetadata } from '../../../support-centre';

/** /support/levels in French, German, Spanish, Japanese and Brazilian Portuguese. See app/support-centre.tsx. */
export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return levelsMetadata(isTranslatedLocale(locale) ? locale : 'en');
}

export default async function LocalizedSupportLevelsPage({ params }: Props) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <LevelsPage locale={locale} />;
}
