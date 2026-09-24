import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../../../editorial-shell';
import { siteUrl } from '../../../../../lib/site';
import { categoryPath, getTagPages } from '../../../../../lib/journal';
import { breadcrumbData, collectionData, FollowJournal, StoryRow } from '../../journal-kit';

type TagPageProps = { params: Promise<{ tag: string }> };

export function generateStaticParams() {
  return getTagPages().map((tag) => ({ tag: tag.slug }));
}

/** Cut at a word boundary so the description fits a search result. */
function fit(text: string, max = 158): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/[\s,;:–—-]+\S*$/, '')}…`;
}

function copyFor(slug: string) {
  const tag = getTagPages().find((entry) => entry.slug === slug);
  if (!tag) return undefined;
  const [first, second] = tag.articles;
  const titles = second ? `“${first!.title}” and “${second.title}”` : `“${first!.title}”`;
  return {
    tag,
    title: `Stories tagged “${tag.label}” — The OutBrick Journal`,
    description: fit(`${tag.articles.length} OutBrick Journal stories on ${tag.label}, including ${titles}. Every research claim is cited.`),
    path: `/blog/tag/${tag.slug}`,
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const copy = copyFor((await params).tag);
  if (!copy) return {};
  const lead = copy.tag.articles[0]!;
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: { canonical: copy.path },
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

export default async function TagPage({ params }: TagPageProps) {
  const copy = copyFor((await params).tag);
  if (!copy) notFound();
  const { tag, path, description } = copy;
  const here = new Set(tag.articles.map((article) => article.slug));
  const related = getTagPages()
    .filter((other) => other.slug !== tag.slug)
    .map((other) => ({ ...other, shared: other.articles.filter((article) => here.has(article.slug)).length }))
    .filter((other) => other.shared > 0)
    .sort((a, b) => b.shared - a.shared || b.articles.length - a.articles.length)
    .slice(0, 8);
  const categories = [...new Map(tag.articles.map((article) => [article.category, article.categoryColor]))];
  const tone = tag.articles[0]!.categoryColor;

  return (
    <EditorialPage current="blog" tone={tone} className="ed-collection">
      <header className="ed-band-ink ed-coll-head">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/blog', label: 'Journal' }, { label: `Tagged “${tag.label}”` }]} />
          <div className="ed-coll-grid">
            <div>
              <p className="ed-label">Tagged</p>
              <h1><span aria-hidden="true" className="ed-coll-hash">#</span>{tag.label}</h1>
              <p className="ed-lede">
                {tag.articles.length} stories from the journal share this topic, across{' '}
                {categories.length === 1 ? 'one shelf' : `${categories.length} shelves`}.
              </p>
            </div>
          </div>
          <ul className="ed-rail ed-coll-meta" aria-label="Shelves these stories sit on">
            {categories.map(([category, color]) => (
              <li key={category}><a className="ed-chip" data-tone={color} href={categoryPath(category)}>{category}</a></li>
            ))}
          </ul>
        </div>
        <Bond />
      </header>

      <section className="ed-band-paper ed-band-tight" aria-labelledby="tag-list-title">
        <div className="ed-wrap">
          <h2 id="tag-list-title" className="ed-sr">Stories tagged {tag.label}</h2>
          <ol className="ed-rows ed-coll-rows">
            {tag.articles.map((article, index) => <StoryRow key={article.slug} article={article} n={index + 1} eager={index < 2} />)}
          </ol>

          {related.length ? (
            <div className="ed-coll-more">
              <h2 className="ed-label no-mark">Related topics</h2>
              <ul className="ed-tags">
                {related.map((other) => (
                  <li key={other.slug}><a href={`/blog/tag/${other.slug}`}>{other.label} <b>{other.articles.length}</b></a></li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="ed-coll-more">
            <a className="ed-link" href={`/blog?q=${encodeURIComponent(tag.label)}`}>Search the journal for “{tag.label}”</a>
          </p>
        </div>
      </section>

      <FollowJournal />

      <JsonLd data={collectionData({ path, name: `Stories tagged “${tag.label}”`, description, stories: tag.articles })} />
      <JsonLd
        data={breadcrumbData([
          { name: 'OutBrick', path: '' },
          { name: 'Journal', path: '/blog' },
          { name: `Tagged “${tag.label}”`, path },
        ])}
      />
    </EditorialPage>
  );
}
