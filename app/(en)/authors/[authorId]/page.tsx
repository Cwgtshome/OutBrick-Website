import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../../editorial-shell';
import { articles, authors } from '../../../../lib/blog';
import { siteUrl } from '../../../../lib/site';
import { isoDate, StoryRow } from '../../blog/journal-kit';
import { authorNode, breadcrumbNode, graph, webPageNode } from '../../../../lib/structured-data';

type AuthorPageProps = { params: Promise<{ authorId: string }> };

export function generateStaticParams() {
  return authors.map((author) => ({ authorId: author.id }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { authorId } = await params;
  const author = authors.find((item) => item.id === authorId);
  if (!author) return {};
  const count = articles.filter((article) => article.authorId === author.id).length;
  // A bio can run long; trim at a word so the description stays a whole sentence under 160.
  const lead = author.bio.length > 120 ? `${author.bio.slice(0, author.bio.lastIndexOf(' ', 117))}…` : author.bio;
  const description = `${lead} ${count} stories in the OutBrick Journal.`;

  return {
    title: { absolute: `${author.name}, author at the OutBrick Journal` },
    description,
    alternates: { canonical: `/authors/${author.id}` },
    openGraph: {
      type: 'profile',
      url: `${siteUrl}/authors/${author.id}`,
      siteName: 'OutBrick',
      title: `${author.name} — OutBrick Journal`,
      description,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'The OutBrick Journey map in Garden City, with Bloo, Peach and Sprout' }],
    },
    twitter: { card: 'summary_large_image', title: `${author.name} — OutBrick Journal`, description, images: [`${siteUrl}/og.png`] },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { authorId } = await params;
  const author = authors.find((item) => item.id === authorId);
  if (!author) notFound();

  const theirs = articles.filter((article) => article.authorId === author.id);
  const profileUrl = `${siteUrl}/authors/${author.id}`;
  const structuredData = graph(
    webPageNode({
      type: 'ProfilePage',
      url: profileUrl,
      name: `${author.name}, author at the OutBrick Journal`,
      description: author.bio,
      dateModified: theirs.map((article) => isoDate(article.updatedAt)).sort().at(-1),
      mainEntity: {
        ...authorNode(author.id),
        agentInteractionStatistic: { '@type': 'InteractionCounter', interactionType: 'https://schema.org/WriteAction', userInteractionCount: theirs.length },
      },
      hasPart: theirs.map((article) => ({ '@type': 'BlogPosting', '@id': `${siteUrl}/blog/${article.slug}#article`, headline: article.title, url: `${siteUrl}/blog/${article.slug}` })),
    }),
    breadcrumbNode(profileUrl, [
      { name: 'OutBrick', path: '/' },
      { name: 'Authors', path: '/authors' },
      { name: author.name, path: `/authors/${author.id}` },
    ]),
  );

  return (
    <EditorialPage current="authors">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/authors', label: 'Authors' }, { label: author.name }]} />
          <div className="ed-hero-grid">
            <div>
              <p className="ed-label">{author.role}</p>
              <h1 className="ed-display">{author.name}</h1>
              <p className="ed-lede">{author.bio}</p>
            </div>
            <div aria-hidden="true" style={{ justifySelf: 'center' }}>
              <span className="ed-avatar big" style={{ width: 180, height: 180, fontSize: '4rem', borderRadius: 34, boxShadow: '0 9px 0 #2f2696' }}>{author.initials}</span>
            </div>
          </div>
        </div>
      </header>
      <Bond />
      <section className="ed-band-paper ed-band" aria-labelledby="stories-title">
        <div className="ed-wrap">
          <p className="ed-label">In the journal</p>
          <h2 id="stories-title" className="ed-h2" style={{ marginTop: 14 }}>{theirs.length} stories so far.</h2>
          <ol className="ed-rows" style={{ marginTop: 24 }}>
            {theirs.map((article, index) => <StoryRow key={article.slug} article={article} n={index + 1} />)}
          </ol>
          <div className="ed-actions" style={{ marginTop: 36 }}>
            <a className="ed-link" href="/blog">The whole journal</a>
            <a className="ed-link" href="/authors">Both authors</a>
          </div>
        </div>
      </section>
      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
