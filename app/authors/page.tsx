import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../editorial-shell';
import { articles, authors } from '../../lib/blog';
import { siteUrl } from '../../lib/site';
import { StoryRow } from '../blog/journal-kit';

const description =
  'Who writes the OutBrick Journal: design notes from founder Mourad Hamdi, and research-led essays from the OutBrick Editorial Desk.';

export const metadata: Metadata = {
  title: 'Authors of the OutBrick Journal',
  description,
  alternates: { canonical: '/authors' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/authors`,
    siteName: 'OutBrick',
    title: 'Authors of the OutBrick Journal',
    description,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'The OutBrick Journey map in Garden City, with Bloo, Peach and Sprout' }],
  },
  twitter: { card: 'summary_large_image', title: 'Authors of the OutBrick Journal', description, images: [`${siteUrl}/og.png`] },
};

export default function AuthorsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/authors#page`,
    name: 'Authors of the OutBrick Journal',
    description,
    url: `${siteUrl}/authors`,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: authors.map((author, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/authors/${author.id}`,
        name: author.name,
      })),
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Authors', item: `${siteUrl}/authors` },
    ],
  };

  return (
    <EditorialPage current="authors">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Authors' }]} />
          <p className="ed-label" style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>Authors</p>
          <h1 className="ed-display" style={{ marginTop: 18, maxWidth: '13ch' }}>Two bylines, <em>one bench.</em></h1>
          <p className="ed-lede" style={{ marginTop: 24 }}>
            OutBrick is a small studio, so the journal is written close to the work: design notes from
            the person making the game, and research essays edited by a desk that reads the sources
            first.
          </p>
        </div>
      </header>
      <Bond />

      {authors.map((author, index) => {
        const theirs = articles.filter((article) => article.authorId === author.id);
        return (
          <section key={author.id} className={`${index % 2 ? 'ed-band-cream' : 'ed-band-paper'} ed-band`} aria-labelledby={`${author.id}-name`}>
            <div className="ed-wrap ed-split">
              <div>
                <a className="ed-avatar big" href={`/authors/${author.id}`} aria-hidden="true" tabIndex={-1}>{author.initials}</a>
                <h2 id={`${author.id}-name`} className="ed-h2" style={{ marginTop: 24 }}>
                  <a href={`/authors/${author.id}`} style={{ textDecoration: 'none' }}>{author.name}</a>
                </h2>
                <p className="ed-meta" style={{ marginTop: 8 }}>{author.role}</p>
                <div className="ed-prose" style={{ marginTop: 18 }}>
                  <p>{author.bio}</p>
                  <a className="ed-link" href={`/authors/${author.id}`}>All {theirs.length} stories</a>
                </div>
              </div>
              <ol className="ed-rows">
                {theirs.slice(0, 4).map((article, i) => <StoryRow key={article.slug} article={article} n={i + 1} />)}
              </ol>
            </div>
          </section>
        );
      })}

      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
