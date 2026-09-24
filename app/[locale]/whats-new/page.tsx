import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../../lib/i18n/locales';
import { WhatsNewPage, whatsNewMetadata } from '../../components/whats-new';

/** The current release's notes in French, German, Spanish and Japanese: /fr/whats-new … /ja/whats-new. */
type LocaleWhatsNewProps = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleWhatsNewProps): Promise<Metadata> {
  const { locale } = await params;
  return isTranslatedLocale(locale) ? whatsNewMetadata(locale) : {};
}

export default async function LocaleWhatsNewPage({ params }: LocaleWhatsNewProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <WhatsNewPage locale={locale} />;
}
