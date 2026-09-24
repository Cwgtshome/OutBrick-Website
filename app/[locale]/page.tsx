import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../lib/i18n/locales';
import { HomePage, homeMetadata } from '../components/home-page';
import { HomeStructuredData } from '../page-structured-data';

/** The home page in French, German, Spanish and Japanese: /fr, /de, /es, /ja. */
type LocalePageProps = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  return isTranslatedLocale(locale) ? homeMetadata(locale) : {};
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return (
    <>
      <HomePage locale={locale} />
      <HomeStructuredData locale={locale} />
    </>
  );
}
