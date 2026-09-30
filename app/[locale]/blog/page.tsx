import type { Metadata } from 'next';
import BlogPage from '../../(en)/blog/page';
import { localizePageTree } from '../../localized-public-page';
import { notFound } from 'next/navigation';
import { journalLanguages, journalPath, journalUi, localizeArticle, translatedGuideSlugs } from '../../../lib/i18n/blog';
import { isTranslatedLocale, ogLocales, translatedLocales } from '../../../lib/i18n/locales';
import { siteUrl } from '../../../lib/site';

/**
 * The journal index in French, German, Spanish and Japanese: /fr/blog …
 * It lists only the five guides that are translated, and says plainly that
 * the rest of the journal is in English.
 */
type JournalIndexProps = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: JournalIndexProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};
  const { title, description } = journalUi[locale].index;
  const url = `${siteUrl}${journalPath(locale)}`;
  const lead = localizeArticle(translatedGuideSlugs[0], locale);
  const image = `${siteUrl}${lead.image}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: journalLanguages() },
    openGraph: {
      type: 'website',
      url,
      siteName: 'OutBrick',
      locale: ogLocales[locale],
      title,
      description,
      images: [{ url: image, width: 1600, height: 900, alt: lead.imageAlt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function JournalIndexPage({ params }: JournalIndexProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return localizePageTree(BlogPage({ locale }), locale);
}
