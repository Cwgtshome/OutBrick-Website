import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../../editorial-shell';
import { articles, authors, getAuthor } from '../../../lib/blog';
import { siteUrl } from '../../../lib/site';
import { byNewest, categoryPath, getShelves, startHere } from '../../../lib/journal';
import { categorySlug, FollowJournal, StoryCard, StoryRow } from './journal-kit';
import { JournalSearch, ShelfControls } from './journal-finder';
import { authorByline, breadcrumbNode, graph, ids, isoDateTime, ref, webPageNode } from '../../../lib/structured-data';
import { NewsletterSignup } from '../../components/newsletter-signup';

const title = 'The OutBrick Journal';
const description =
  'Essays from the makers of OutBrick on puzzle design, player habits, accessibility and the games that shaped the genre, with every research claim cited.';

export const metadata: Metadata = {
  title: { absolute: 'The OutBrick Journal — notes from around the board' },
  description,
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/blog`,
    siteName: 'OutBrick',
    title,
    description,
    images: [{ url: `${siteUrl}${articles[0]!.image}`, width: 1600, height: 900, alt: articles[0]!.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}${articles[0]!.image}`],
  },
};

export default function BlogPage() {
  const [featured, second, third] = articles as [typeof articles[0], typeof articles[0], typeof articles[0]];
  const pinned = new Set([featured.slug, second.slug, third.slug]);
  const featuredAuthor = getAuthor(featured.authorId);
  const shelves = getShelves();
  const chips = shelves.map((shelf) => ({ slug: shelf.slug, label: shelf.category, count: shelf.articles.length, tone: shelf.tone, href: categoryPath(shelf.category) }));

  const url = `${siteUrl}/blog`;
  const structuredData = graph(
    webPageNode({ type: 'CollectionPage', url, name: title, description, mainEntity: ref(ids.blog) }),
    {
      '@type': 'Blog',
      '@id': ids.blog,
      name: title,
      description,
      url,
      inLanguage: 'en',
      isPartOf: ref(ids.website),
      publisher: ref(ids.organization),
      blogPost: [...articles].sort(byNewest).map((article) => ({
        '@type': 'BlogPosting',
        '@id': `${siteUrl}/blog/${article.slug}#article`,
        headline: article.title,
        description: article.dek,
        articleSection: article.category,
        url: `${siteUrl}/blog/${article.slug}`,
        image: `${siteUrl}${article.image}`,
        datePublished: isoDateTime(article.publishedAt),
        dateModified: isoDateTime(article.updatedAt),
        author: authorByline(article.authorId),
        publisher: ref(ids.organization),
      })),
    },
    breadcrumbNode(url, [
      { name: 'OutBrick', path: '/' },
      { name: 'Journal', path: '/blog' },
    ]),
  );

  // Stories are numbered continuously down the shelves (the island renumbers after a filter).
  const shelved = shelves.flatMap((shelf) => shelf.articles.filter((a) => !pinned.has(a.slug)));
  const numberOf = new Map(shelved.map((article, index) => [article.slug, index + 1]));
  const orderOf = new Map(shelves.flatMap((shelf) => shelf.articles).map((article, index) => [article.slug, index]));

  return (
    <EditorialPage current="blog" className="ed-journal">
      {/* ---------------- masthead ---------------- */}
      <header className="ed-band-ink ed-mast">
        <div className="ed-wrap">
          <div className="ed-mast-top">
            <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Journal' }]} />
            <p className="ed-meta">{articles.length} stories · Updated {featured.updatedAt.replace(/ \d+,/, '')}</p>
          </div>
          <div className="ed-mast-grid">
            <div>
              <p className="ed-label">The OutBrick Journal</p>
              <h1 className="ed-display" style={{ marginTop: 18 }}>Notes from around the <em>board.</em></h1>
              <p className="ed-lede">
                How games fit into real lives, why a tiny rule can carry a whole world, and what we are
                learning while we build a puzzle out of brick. Every research claim links to its source.
              </p>
              <div className="ed-finder">
                <JournalSearch shelves={chips} />
              </div>
            </div>
            <div className="ed-postcards" aria-hidden="true">
              <figure className="ed-capture"><img src="/assets/villages/autumn-orchard.jpg" alt="" width={239} height={520} decoding="async" /></figure>
              <figure className="ed-capture"><img src="/assets/villages/garden-city.jpg" alt="" width={239} height={520} decoding="async" /></figure>
              <figure className="ed-capture"><img src="/assets/villages/snowflake-village.jpg" alt="" width={239} height={520} decoding="async" /></figure>
              <img className="ed-friend" src="/assets/friends/sprout.webp" alt="" width={360} height={360} decoding="async" />
            </div>
          </div>
        </div>
        <Bond />
      </header>

      {/* ---------------- this issue ---------------- */}
      <section className="ed-band-paper ed-band" aria-labelledby="lead-title">
        <div className="ed-wrap">
          <p className="ed-label">Lead story</p>
          <div className="ed-feature" data-tone={featured.categoryColor} style={{ marginTop: 26 }}>
            <div className="ed-feature-copy ed-reveal">
              <span className="ed-chip">{featured.category}</span>
              <h2 id="lead-title"><a href={`/blog/${featured.slug}`}>{featured.title}</a></h2>
              <p className="ed-lede">{featured.dek}</p>
              <div className="ed-byline">
                <a className="ed-avatar" href={`/authors/${featuredAuthor.id}`} aria-hidden="true" tabIndex={-1}>{featuredAuthor.initials}</a>
                <span className="ed-byline-text">
                  <b><a href={`/authors/${featuredAuthor.id}`}>{featuredAuthor.name}</a></b>
                  <span>{featured.readingTime} · {featured.publishedAt}</span>
                </span>
              </div>
              <div className="ed-actions" style={{ marginTop: 30 }}>
                <a className="ed-btn" href={`/blog/${featured.slug}`}>Read the story</a>
              </div>
            </div>
            <div className="ed-feature-art ed-reveal">
              <figure className="ed-frame">
                <img src={featured.image} alt={featured.imageAlt} width={1600} height={900} decoding="async" fetchPriority="high" />
                <figcaption>Journal illustration</figcaption>
              </figure>
              <img className="ed-friend" src="/assets/friends/bloo.webp" alt="" width={360} height={360} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="ed-pair">
            <div className="ed-reveal"><StoryCard article={second} /></div>
            <div className="ed-reveal"><StoryCard article={third} /></div>
          </div>
        </div>
      </section>

      {/* ---------------- start here ---------------- */}
      <section className="ed-band-cream ed-band-tight" aria-labelledby="start-title">
        <div className="ed-wrap">
          <div className="ed-start-head">
            <p className="ed-label">New here?</p>
            <h2 id="start-title" className="ed-h2" style={{ marginTop: 14 }}>Start with these four.</h2>
          </div>
          <ol className="ed-start">
            {startHere.map((article, index) => (
              <li key={article.slug} data-tone={article.categoryColor} className="ed-lift">
                <span className="ed-start-n" aria-hidden="true">{index + 1}</span>
                <h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3>
                <p className="ed-meta">{article.category} · {article.readingTime}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- the shelves ---------------- */}
      <section className="ed-band-ink ed-band" aria-labelledby="shelves-title">
        <div className="ed-wrap">
          <p className="ed-label">The shelves</p>
          <h2 id="shelves-title" className="ed-h2" style={{ marginTop: 14, maxWidth: '18ch' }}>Everything else, sorted by colour.</h2>
          <ShelfControls shelves={chips} total={articles.length} />
          <div className="ed-shelves" data-archive="" style={{ marginTop: 'clamp(36px, 4vw, 56px)' }}>
            {shelves.map((shelf) => {
              const anchor = categorySlug(shelf.category);
              return (
                <section key={shelf.slug} id={anchor} data-shelf={shelf.slug} data-tone={shelf.tone} aria-labelledby={`${anchor}-title`} style={{ scrollMarginTop: 90 }}>
                  <div className="ed-shelf-head">
                    <span className="ed-slab" aria-hidden="true"><Studs count={2} /></span>
                    <h2 id={`${anchor}-title`}><a href={categoryPath(shelf.category)}>{shelf.category}</a></h2>
                    <p>{shelf.note}</p>
                  </div>
                  <div className="ed-shelf-rule" aria-hidden="true" />
                  <ol className="ed-rows">
                    {shelf.articles.map((article) => (
                      <StoryRow key={article.slug} article={article} n={numberOf.get(article.slug) ?? 0} order={orderOf.get(article.slug)} pinned={pinned.has(article.slug)} />
                    ))}
                  </ol>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- the newsletter (RSS has its own block below) ---------------- */}
      <section id="newsletter" className="ed-band-ink2 ed-band-tight" aria-labelledby="newsletter-title">
        <div className="ed-wrap wn-news-grid">
          <div>
            <p className="ed-label">The newsletter</p>
            <h2 id="newsletter-title" className="ed-h2" style={{ marginTop: 14 }}>New villages and big updates, by email.</h2>
            <p className="ed-lede" style={{ marginTop: 16 }}>
              About once a month, never more, and you can leave any time.
            </p>
          </div>
          <NewsletterSignup showHeading={false} />
        </div>
      </section>

      {/* ---------------- colophon ---------------- */}
      <section className="ed-band-cream ed-band" aria-labelledby="colophon-title">
        <div className="ed-wrap ed-colophon">
          <div>
            <p className="ed-label">How we write</p>
            <h2 id="colophon-title" className="ed-h2" style={{ marginTop: 14 }}>Cited, and honest about the limits.</h2>
            <div className="ed-prose" style={{ marginTop: 22 }}>
              <p>
                We link to peer-reviewed papers, university research, accessibility standards and each
                studio’s own history. A company’s account stays labelled as a company’s account, and a
                small sample stays a small sample.
              </p>
              <p>
                When a story mentions OutBrick, it describes the game as it ships today: lives and
                opt-in rewarded videos included, clocks not.
              </p>
              <a className="ed-link" href="/research">Read the research method</a>
            </div>
          </div>
          <div>
            <p className="ed-label">Who writes it</p>
            <div className="ed-people">
              {authors.map((author) => (
                <a className="ed-person ed-lift" href={`/authors/${author.id}`} key={author.id}>
                  <span className="ed-avatar" aria-hidden="true">{author.initials}</span>
                  <div>
                    <h3>{author.name}</h3>
                    <p className="ed-meta">{author.role}</p>
                    <p>{author.bio}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FollowJournal />

      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
