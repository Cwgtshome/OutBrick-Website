import type { Metadata } from 'next';
import { ArrowUpRight, BookOpen, ChevronRight } from 'lucide-react';
import { EditorialFooter, EditorialHeader } from '../editorial-shell';
import { authors, articles, getAuthor } from '../../lib/blog';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'OutBrick authors',
  description: 'Meet the people behind the OutBrick journal: game-making notes from Mourad Hamdi and research-led editorial work from the OutBrick Editorial Desk.',
  keywords: ['OutBrick authors', 'Mourad Hamdi', 'game design writing', 'gaming research writers'],
  alternates: { canonical: '/authors' },
  openGraph: {
    type: 'website',
    url: '/authors',
    title: 'OutBrick authors',
    description: 'Meet the voices behind the OutBrick journal.',
    images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and home screen' }],
  },
};

export default function AuthorsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/authors#page`,
    name: 'OutBrick authors',
    description: metadata.description,
    url: `${siteUrl}/authors`,
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

  return (
    <div className="blog-site info-site">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="authors" />
      <main className="info-main" aria-labelledby="authors-title">
        <header className="info-hero info-hero-compact">
          <div className="eyebrow"><span className="eyebrow-dot" /> The people behind the bricks</div>
          <h1 id="authors-title">Meet the <span>voices.</span></h1>
          <p className="info-lede">OutBrick is a small project, so the journal stays close to the work. Read design notes from the maker and research-led stories edited for clarity, context, and care.</p>
        </header>

        <section className="author-directory" aria-label="OutBrick authors">
          {authors.map((author) => {
            const authorArticles = articles.filter((article) => article.authorId === author.id);
            return (
              <article className="author-directory-card" key={author.id}>
                <div className="author-directory-header"><span className="blog-avatar" title={`${author.name} avatar`}>{author.initials}</span><div><div className="blog-kicker">OutBrick contributor</div><h2><a href={`/authors/${author.id}`}>{author.name}</a></h2><p className="author-role">{author.role}</p></div></div>
                <p className="author-directory-bio">{author.bio}</p>
                <div className="author-directory-footer"><span>{authorArticles.length} journal {authorArticles.length === 1 ? 'story' : 'stories'}</span><a className="blog-text-link" href={`/authors/${author.id}`}>View profile <ArrowUpRight size={14} /></a></div>
                <ul className="author-story-list">{authorArticles.slice(0, 4).map((article) => <li key={article.slug}><BookOpen size={14} /><a href={`/blog/${article.slug}`}>{article.title}</a><ChevronRight size={14} /></li>)}</ul>
              </article>
            );
          })}
        </section>

        <section className="info-cta" aria-labelledby="authors-cta-title">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> Keep exploring</div><h2 id="authors-cta-title">Read the whole <span>journal.</span></h2><p>Twenty stories on game design, player habits, accessibility, and the success stories that keep small games moving.</p></div>
          <a className="nav-cta" href="/blog">Browse all stories <ArrowUpRight size={15} /></a>
        </section>
      </main>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
