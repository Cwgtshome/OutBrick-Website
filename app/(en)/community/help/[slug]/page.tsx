import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HelpArticlePage, helpArticleMetadata, helpOrder } from '../../../../help-centre';

/** One Help Centre guide (English). See app/help-centre.tsx. */
export const dynamicParams = false;

export function generateStaticParams() {
  return helpOrder.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return helpArticleMetadata('en', slug);
}

export default async function HelpGuidePage({ params }: Props) {
  const { slug } = await params;
  if (!(helpOrder as readonly string[]).includes(slug)) notFound();
  return <HelpArticlePage locale="en" slug={slug} />;
}
