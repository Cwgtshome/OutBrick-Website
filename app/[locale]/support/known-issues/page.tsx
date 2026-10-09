import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../../../lib/i18n/locales';
import { KnownIssuesPage, knownIssuesMetadata } from '../../../support-centre';

/** /support/known-issues in French, German, Spanish, Japanese and Brazilian Portuguese. See app/support-centre.tsx. */
export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return knownIssuesMetadata(isTranslatedLocale(locale) ? locale : 'en');
}

export default async function LocalizedSupportKnownIssuesPage({ params }: Props) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <KnownIssuesPage locale={locale} />;
}
