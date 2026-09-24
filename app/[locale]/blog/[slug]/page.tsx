import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isTranslatedGuide, localizeArticle, translatedGuideSlugs } from '../../../../lib/i18n/blog';
import { isTranslatedLocale } from '../../../../lib/i18n/locales';
import { ArticleView, articleMetadata } from '../../../components/journal-article';

/**
 * The five cornerstone guides in French, German, Spanish and Japanese:
 * /fr/blog/<slug>, /de/blog/<slug> … Rendered by the same component as the
 * English article; the copy comes from lib/blog-l10n/<locale>.ts.
 */
type GuidePageProps = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

// The locales come from app/[locale]/layout.tsx; this adds the five slugs to each.
export function generateStaticParams() {
  return translatedGuideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale) || !isTranslatedGuide(slug)) return {};
  return articleMetadata(localizeArticle(slug, locale), locale);
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale) || !isTranslatedGuide(slug)) notFound();
  const article = localizeArticle(slug, locale);
  // Everything stays in the reader's language: previous / next walk the translated guides in the
  // order the translated index lists them, and related reading is the next three of them.
  const at = translatedGuideSlugs.indexOf(slug);
  const guide = (i: number) => (i >= 0 && i < translatedGuideSlugs.length ? localizeArticle(translatedGuideSlugs[i]!, locale) : undefined);
  const related = [1, 2, 3].map((step) => localizeArticle(translatedGuideSlugs[(at + step) % translatedGuideSlugs.length]!, locale));
  return <ArticleView article={article} locale={locale} related={related} previous={guide(at - 1)} next={guide(at + 1)} />;
}
