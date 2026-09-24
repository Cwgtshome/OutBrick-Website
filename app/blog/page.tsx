import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../editorial-shell';
import { articles, authors, getAuthor } from '../../lib/blog';
import { siteUrl } from '../../lib/site';
import { categorySlug, StoryCard, StoryRow } from './journal-kit';

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

/** Shelf order and a one-line description of each category. */
const shelves: { category: string; note: string }[] = [
  { category: 'Player habits', note: 'How play fits a real day: sleep, attention, rituals and the decision to stop.' },
  { category: 'Success stories', note: 'Games that made the medium feel larger, read from their own records.' },
  { category: 'Game craft', note: 'Rules, friction and difficulty, from the bench.' },
  { category: 'Inclusive design', note: 'Widening the route into a challenge without shrinking the challenge.' },
  { category: 'Learning through play', note: 'Curiosity before explanation.' },
  { category: 'Social play', note: 'Shared time, even when players are apart.' },
  { category: 'OutBrick practice', note: 'Notes on how the game itself is made.' },
];

export default function BlogPage() {
  const [featured, second, third] = articles as [typeof articles[0], typeof articles[0], typeof articles[0]];
  const pinned = new Set([featured.slug, second.slug, third.slug]);
  const featuredAuthor = getAuthor(featured.authorId);
  const counts = new Map(shelves.map(({ category }) => [category, articles.filter((a) => a.category === category).length]));

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteUrl}/blog#blog`,
    name: title,
    description,
    url: `${siteUrl}/blog`,
    inLanguage: 'en',
    isPartOf: { '@id': `${siteUrl}/#website` },
    publisher: { '@type': 'Organization', name: 'OutBrick', url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/icon.png`, width: 1024, height: 1024 } },
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${siteUrl}/blog/${article.slug}`,
      image: `${siteUrl}${article.image}`,
      author: { '@type': getAuthor(article.authorId).id === 'mourad-hamdi' ? 'Person' : 'Organization', name: getAuthor(article.authorId).name },
    })),
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${siteUrl}/blog` },
    ],
  };

  // Stories are numbered continuously down the shelves.
  const shelved = shelves.flatMap(({ category }) => articles.filter((a) => a.category === category && !pinned.has(a.slug)));
  const numberOf = new Map(shelved.map((article, index) => [article.slug, index + 1]));

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
            </div>
            <div className="ed-postcards" aria-hidden="true">
              <figure className="ed-capture"><img src="/assets/villages/autumn-orchard.jpg" alt="" width={239} height={520} decoding="async" /></figure>
              <figure className="ed-capture"><img src="/assets/villages/garden-city.jpg" alt="" width={239} height={520} decoding="async" /></figure>
              <figure className="ed-capture"><img src="/assets/villages/snowflake-village.jpg" alt="" width={239} height={520} decoding="async" /></figure>
              <img className="ed-friend" src="/assets/friends/sprout.webp" alt="" width={360} height={360} decoding="async" />
            </div>
          </div>
          <nav className="ed-rail" aria-label="Journal categories">
            {shelves.map(({ category }) => {
              const tone = articles.find((a) => a.category === category)?.categoryColor;
              return (
                <a key={category} className="ed-chip" data-tone={tone} href={`#${categorySlug(category)}`}>
                  {category} <b>{counts.get(category)}</b>
                </a>
              );
            })}
          </nav>
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

      {/* ---------------- the shelves ---------------- */}
      <section className="ed-band-ink ed-band" aria-labelledby="shelves-title">
        <div className="ed-wrap">
          <p className="ed-label">The shelves</p>
          <h2 id="shelves-title" className="ed-h2" style={{ marginTop: 14, maxWidth: '18ch' }}>Everything else, sorted by colour.</h2>
          <div className="ed-shelves" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
            {shelves.map(({ category, note }) => {
              const onShelf = articles.filter((a) => a.category === category && !pinned.has(a.slug));
              const tone = articles.find((a) => a.category === category)?.categoryColor;
              if (!onShelf.length) return null;
              return (
                <section key={category} id={categorySlug(category)} data-tone={tone} aria-labelledby={`${categorySlug(category)}-title`} style={{ scrollMarginTop: 90 }}>
                  <div className="ed-shelf-head">
                    <span className="ed-slab" aria-hidden="true"><Studs count={2} /></span>
                    <h2 id={`${categorySlug(category)}-title`}>{category}</h2>
                    <p>{note}</p>
                  </div>
                  <div className="ed-shelf-rule" aria-hidden="true" />
                  <ol className="ed-rows">
                    {onShelf.map((article) => <StoryRow key={article.slug} article={article} n={numberOf.get(article.slug)!} />)}
                  </ol>
                </section>
              );
            })}
          </div>
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

      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
