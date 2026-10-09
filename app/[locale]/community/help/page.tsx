import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../../../lib/i18n/locales';
import { HelpHub, helpHubMetadata } from '../../../help-centre';

/** The OutBrick Help Centre in French, German, Spanish, Japanese and Brazilian Portuguese. */
export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return helpHubMetadata(isTranslatedLocale(locale) ? locale : 'en');
}

export default async function LocalizedHelpCentrePage({ params }: Props) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <HelpHub locale={locale} />;
}
