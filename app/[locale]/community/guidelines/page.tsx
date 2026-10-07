import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale, translatedLocales } from '../../../../lib/i18n/locales';
import { CommunityShell, communityMetadata } from '../../../community-shell';

/** OutBrick Community in French, German, Spanish and Japanese, written natively (lib/i18n/community.ts), not through the page-tree translator. */
export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return communityMetadata(isTranslatedLocale(locale) ? locale : 'en', 'guidelines');
}

export default async function LocalizedCommunityPage({ params }: Props) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <CommunityShell locale={locale} view="guidelines" />;
}
