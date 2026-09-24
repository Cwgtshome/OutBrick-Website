import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../../../../editorial-shell';
import { siteUrl } from '../../../../../lib/site';
import { categoryPath, getShelf, getShelves, getTagPages } from '../../../../../lib/journal';
import { breadcrumbData, collectionData, FollowJournal, StoryRow } from '../../journal-kit';

type CategoryPageProps = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return getShelves().map((shelf) => ({ category: shelf.slug }));
}

function copyFor(slug: string) {
  const shelf = getShelf(slug);
  if (!shelf) return undefined;
  const count = shelf.articles.length;
  return {
    shelf,
    title: `${shelf.category} — The OutBrick Journal`,
    description: `${shelf.note} ${count} ${count === 1 ? 'story' : 'stories'} from the OutBrick Journal, every research claim cited.`,
    path: categoryPath(shelf.category),
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const copy = copyFor((await params).category);
  if (!copy) return {};
  const lead = copy.shelf.articles[0]!;
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical: copy.path,
      types: { 'application/rss+xml': `${copy.path}/feed.xml` },
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}${copy.path}`,
      siteName: 'OutBrick',
      title: copy.title,
      description: copy.description,
      images: [{ url: `${siteUrl}${lead.image}`, width: 1600, height: 900, alt: lead.imageAlt }],
    },
    twitter: { card: 'summary_large_image', title: copy.title, description: copy.description, images: [`${siteUrl}${lead.image}`] },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const copy = copyFor((await params).category);
  if (!copy) notFound();
  const { shelf, path, description } = copy;
  const others = getShelves().filter((other) => other.slug !== shelf.slug);
  const onShelf = new Set(shelf.articles.map((article) => article.slug));
  const tags = getTagPages()
    .map((tag) => ({ ...tag, here: tag.articles.filter((article) => onShelf.has(article.slug)).length }))
    .filter((tag) => tag.here > 0)
    .sort((a, b) => b.here - a.here || a.label.localeCompare(b.label))
    .slice(0, 8);

  return (
    <EditorialPage current="blog" tone={shelf.tone} className="ed-collection">
      <header className="ed-band-ink ed-coll-head">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/blog', label: 'Journal' }, { label: shelf.category }]} />
          <div className="ed-coll-grid">
            <div>
              <p className="ed-label">A shelf of the journal</p>
              <h1>{shelf.category}</h1>
              <p className="ed-lede">{shelf.note}</p>
            </div>
            <div className="ed-coll-slab ed-slab lit" aria-hidden="true">
              <Studs count={3} />
              <b>{shelf.articles.length}</b>
              <span>{shelf.articles.length === 1 ? 'story' : 'stories'}</span>
            </div>
          </div>
          <div className="ed-coll-meta">
            <p className="ed-meta">
              {shelf.articles.length} {shelf.articles.length === 1 ? 'story' : 'stories'}, newest first ·{' '}
              <a className="ed-link" href={`${path}/feed.xml`} type="application/rss+xml">RSS feed for this shelf</a>
            </p>
          </div>
        </div>
        <Bond />
      </header>

      <section className="ed-band-paper ed-band-tight" aria-labelledby="shelf-list-title">
        <div className="ed-wrap">
          <h2 id="shelf-list-title" className="ed-sr">Stories on this shelf</h2>
          <ol className="ed-rows ed-coll-rows">
            {shelf.articles.map((article, index) => <StoryRow key={article.slug} article={article} n={index + 1} eager={index < 2} />)}
          </ol>

          {tags.length ? (
            <div className="ed-coll-more">
              <h2 className="ed-label no-mark">Topics on this shelf</h2>
              <ul className="ed-tags">
                {tags.map((tag) => (
                  <li key={tag.slug}><a href={`/blog/tag/${tag.slug}`}>{tag.label} <b>{tag.articles.length}</b></a></li>
                ))}
              </ul>
            </div>
          ) : null}

          <nav className="ed-coll-more" aria-labelledby="other-shelves-title">
            <h2 id="other-shelves-title" className="ed-label no-mark">Other shelves</h2>
            <ul className="ed-rail">
              {others.map((other) => (
                <li key={other.slug}>
                  <a className="ed-chip" data-tone={other.tone} href={categoryPath(other.category)}>{other.category} <b>{other.articles.length}</b></a>
                </li>
              ))}
              <li><a className="ed-chip all" href="/blog">Whole journal</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <FollowJournal current={shelf.slug} />

      <JsonLd data={collectionData({ path, name: `${shelf.category}: the OutBrick Journal`, description, stories: shelf.articles })} />
      <JsonLd
        data={breadcrumbData([
          { name: 'OutBrick', path: '' },
          { name: 'Journal', path: '/blog' },
          { name: shelf.category, path },
        ])}
      />
    </EditorialPage>
  );
}
