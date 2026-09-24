import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles, getArticle, getRelatedArticles } from '../../../../lib/blog';
import { getNeighbours } from '../../../../lib/journal';
import { ArticleView, articleMetadata } from '../../../components/journal-article';

/**
 * A journal article in English: /blog/<slug>. The page itself is
 * app/components/journal-article.tsx, which also renders the translated
 * guides at /<locale>/blog/<slug>.
 */
type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return articleMetadata(article, 'en');
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const { previous, next } = getNeighbours(article.slug);
  return <ArticleView article={article} locale="en" related={getRelatedArticles(article)} previous={previous} next={next} />;
}
