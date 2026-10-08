import { localeAlternates, localePath, isTranslatedLocale, type Locale } from '../../../../../lib/i18n/locales';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../../../editorial-shell';
import { siteUrl } from '../../../../../lib/site';
import { categoryPath, getIndexedTagPages, getTagPages } from '../../../../../lib/journal';
import { tagPageCopy } from '../../../../../lib/i18n/journal-tags';
import { breadcrumbData, collectionData, FollowJournal, StoryRow } from '../../journal-kit';

/** The translated routes (app/[locale]/blog/tag/[tag]) render this page with `locale` in params. */
type TagPageProps = { params: Promise<{ tag: string; locale?: string }> };

export function generateStaticParams() {
  return getTagPages().map((tag) => ({ tag: tag.slug }));
}

function copyFor(slug: string, locale: Locale = 'en') {
  const copy = tagPageCopy(slug, locale);
  if (!copy) return undefined;
  return { ...copy, path: `/blog/tag/${copy.tag.slug}` };
}

const localeOf = (value?: string): Locale => (value && isTranslatedLocale(value) ? value : 'en');

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const copy = copyFor((await params).tag);
  if (!copy) return {};
  const lead = copy.tag.articles[0]!;
  return {
    title: { absolute: copy.title },
    description: copy.description,
    // Tags with fewer than MIN_INDEXED_TAG stories stay reachable but out of the index (lib/journal.ts).
    ...(copy.indexed ? {} : { robots: { index: false, follow: true } }),
    alternates: localeAlternates('en', copy.path ),
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
  const values = await params;
  const locale = localeOf(values.locale);
  const copy = copyFor(values.tag, locale);
  if (!copy) notFound();
  const { tag, path, description } = copy;
  const here = new Set(tag.articles.map((article) => article.slug));
  // Only indexable topics are offered as navigation; a thin tag stays reachable from its stories.
  const related = getIndexedTagPages()
    .filter((other) => other.slug !== tag.slug)
    .map((other) => ({ ...other, shared: other.articles.filter((article) => here.has(article.slug)).length }))
    .filter((other) => other.shared > 0)
    .sort((a, b) => b.shared - a.shared || b.articles.length - a.articles.length)
    .slice(0, 8);
  const categories = [...new Map(tag.articles.map((article) => [article.category, article.categoryColor]))];
  const tone = tag.articles[0]!.categoryColor;

  return (
    <EditorialPage page={`/blog/tag/${tag.slug}`} current="blog" tone={tone} className="ed-collection">
      <header className="ed-band-ink ed-coll-head">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/blog', label: 'Journal' }, { label: `Tagged “${tag.label}”` }]} />
          <div className="ed-coll-grid">
            <div>
              <p className="ed-label">Tagged</p>
              {copy.indexed ? (
                <>
                  <h1 className="ed-coll-topic">{copy.h1}</h1>
                  <p className="ed-lede">{copy.lede}</p>
                  <p className="ed-lede">
                    {copy.start.before}<a className="ed-link" href={localePath(locale, `/blog/${copy.start.slug}`)}>{copy.start.quote}</a>{copy.start.after} {copy.start.dek}
                  </p>
                </>
              ) : (
                <>
                  <h1><span aria-hidden="true" className="ed-coll-hash">#</span>{tag.label}</h1>
                  <p className="ed-lede">
                    {tag.articles.length} stories from the journal share this topic, across{' '}
                    {categories.length === 1 ? 'one shelf' : `${categories.length} shelves`}.
                  </p>
                </>
              )}
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
