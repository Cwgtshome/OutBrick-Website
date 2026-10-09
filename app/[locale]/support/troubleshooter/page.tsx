import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../../../lib/i18n/locales';
import { TroubleshooterPage, troubleshooterMetadata } from '../../../support-centre';

/** /support/troubleshooter in French, German, Spanish, Japanese and Brazilian Portuguese. See app/support-centre.tsx. */
export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return troubleshooterMetadata(isTranslatedLocale(locale) ? locale : 'en');
}

export default async function LocalizedSupportTroubleshooterPage({ params }: Props) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <TroubleshooterPage locale={locale} />;
}
