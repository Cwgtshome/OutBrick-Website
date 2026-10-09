import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedLocale } from '../../../../../lib/i18n/locales';
import { HelpArticlePage, helpArticleMetadata, helpOrder } from '../../../../help-centre';

/** One Help Centre guide in a translated language. See app/help-centre.tsx. */
export const dynamicParams = false;

// The locales come from app/[locale]/layout.tsx; this adds every guide's slug to each.
export function generateStaticParams() {
  return helpOrder.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  return helpArticleMetadata(isTranslatedLocale(locale) ? locale : 'en', slug);
}

export default async function LocalizedHelpGuidePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale) || !(helpOrder as readonly string[]).includes(slug)) notFound();
  return <HelpArticlePage locale={locale} slug={slug} />;
}
