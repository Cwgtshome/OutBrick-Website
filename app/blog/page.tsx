import type { Metadata } from 'next';
import { ArrowUpRight, BookOpen, ChevronRight, Clock3, Sparkles } from 'lucide-react';
import { StoreBadge } from '../store-badge';
import { articles, authors, getAuthor, type BlogArticle } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'The OutBrick Journal',
  description: 'Thoughtful notes on OutBrick, puzzle design, gaming habits, accessibility, and the success stories that keep small games moving.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'The OutBrick Journal',
    description: 'Thoughtful notes on OutBrick, puzzle design, gaming habits, accessibility, and the success stories that keep small games moving.',
    images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and home screen' }],
  },
};

function OutBrickLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark-compact' : ''}`} aria-label="OutBrick">
      {'OUTBRICK'.split('').map((letter, index) => (
        <span className={`wordmark-letter letter-${index}`} aria-hidden="true" key={`${letter}-${index}`}>
          {letter}
        </span>
      ))}
    </span>
  );
}

function SiteHeader() {
  return (
    <header className="site-nav blog-site-nav">
      <a className="nav-brand" href="/" aria-label="OutBrick home">
        <span className="nav-app-icon"><img src="/icon.png" alt="OutBrick app icon" title="OutBrick app icon" /></span>
        <span><OutBrickLogo compact /><small>the sliding-brick puzzle</small></span>
      </a>
      <nav className="nav-links blog-nav-links" aria-label="Primary navigation">
        <a href="/">The game</a>
        <a href="/blog" aria-current="page">Journal</a>
        <a href="/mascots">Mascots</a>
        <a href="/about">About</a>
        <a href="/authors">Authors</a>
        <a href="/support">Support</a>
      </nav>
      <div className="nav-side-actions blog-nav-actions"><StoreBadge compact /></div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer blog-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <OutBrickLogo />
          <p>A sliding-brick colour-sort puzzle, with a journal for the curious bits around it.</p>
          <StoreBadge />
        </div>
        <div className="footer-links">
          <div><span className="footer-label">Explore</span><a href="/">The game</a><a href="/blog">Journal</a><a href="/mascots">Mascots</a><a href="/#widgets">Widgets</a><a href="/about">About OutBrick</a></div>
          <div><span className="footer-label">Read about</span><a href="/blog#category-player-habits">Player habits</a><a href="/blog#category-success-stories">Success stories</a><a href="/blog#category-game-craft">Game craft</a><a href="/blog#category-inclusive-design">Inclusive design</a><a href="/research">Research method</a></div>
          <div><span className="footer-label">Contact</span><a href="/support">Support</a><a href="/contact">Contact OutBrick <ArrowUpRight size={14} /></a><a href="/accessibility">Accessibility <ArrowUpRight size={14} /></a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 OutBrick</span><span>Research is cited. Claims stay modest.</span><span>Made with bricks and patience.</span></div>
    </footer>
  );
}

function ArticleCard({ article, featured = false, anchorId }: { article: BlogArticle; featured?: boolean; anchorId?: string }) {
  const author = getAuthor(article.authorId);
  return (
    <article id={anchorId} className={`blog-card blog-card-${article.categoryColor} ${featured ? 'blog-card-featured' : ''}`}>
      <a className="blog-card-image" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
        <img src={article.image} alt={article.imageAlt} title={article.title} loading={featured ? 'eager' : 'lazy'} />
        <span className="blog-card-image-label"><BookOpen size={14} /> {article.category}</span>
      </a>
      <div className="blog-card-body">
        <div className="blog-card-meta"><span>{article.category}</span><span><Clock3 size={13} /> {article.readingTime}</span></div>
        <h2><a href={`/blog/${article.slug}`}>{article.title}</a></h2>
        <p>{article.dek}</p>
        <div className="blog-card-bottom"><span className="blog-author-mini"><span className="blog-avatar blog-avatar-small">{author.initials}</span>{author.name}</span><a className="blog-read-link" href={`/blog/${article.slug}`}>Read story <ChevronRight size={16} /></a></div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const featured = articles[0]!;
  const remaining = articles.slice(1);
  const categories = Array.from(new Set(articles.map((article) => article.category)));
  const categoryAnchor = (category: string) => `category-${category.toLowerCase().replaceAll(' ', '-')}`;
  const firstArticleByCategory = new Map(categories.map((category) => [category, articles.find((article) => article.category === category)?.slug]));

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The OutBrick Journal',
    description: metadata.description,
    url: 'https://outbrick.mourad-hamdi.chatgpt.site/blog',
    isPartOf: { '@type': 'WebSite', name: 'OutBrick', url: 'https://outbrick.mourad-hamdi.chatgpt.site' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://outbrick.mourad-hamdi.chatgpt.site/blog/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <div className="blog-site">
      <div className="site-grain" aria-hidden="true" />
      <SiteHeader />
      <main>
        <section className="blog-landing-hero" aria-labelledby="journal-title">
          <div className="blog-hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> The OutBrick journal</div>
            <h1 id="journal-title">Play has more <span>than one shape.</span></h1>
            <p>Notes from the space around the board: how games fit into real lives, why tiny rules can carry a whole world, and what we are learning while we make OutBrick.</p>
            <div className="blog-hero-actions"><a className="nav-cta" href="#stories">Read the latest <ArrowUpRight size={15} /></a><a className="blog-text-link" href="/#experience">Back to the game <ArrowUpRight size={15} /></a></div>
            <div className="blog-hero-proof"><span><Sparkles size={15} /> 20 original essays</span><span><BookOpen size={15} /> Research + craft</span><span>Updated September 2026</span></div>
          </div>
          <div className="blog-hero-card">
            <div className="blog-hero-card-topline"><span>FEATURED NOTE</span><span>01 / 20</span></div>
            <img src={featured.image} alt={featured.imageAlt} title={featured.title} />
            <div className="blog-hero-card-caption"><span className="blog-kicker">{featured.category}</span><strong>{featured.title}</strong><span>{featured.readingTime} · {getAuthor(featured.authorId).name}</span></div>
          </div>
        </section>

        <section className="blog-filter-row" aria-label="Journal categories">
          <span className="blog-filter-label">Browse by</span>
          {categories.map((category) => <a key={category} href={`#${categoryAnchor(category)}`}>{category}</a>)}
        </section>

        <section id="stories" className="blog-stories section-block" aria-labelledby="stories-title">
          <div className="blog-section-heading section-heading-split">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> The reading shelf</div><h2 id="stories-title">Small games.<br /><span>Big questions.</span></h2></div>
            <p>Every story starts with OutBrick, then follows the thread somewhere useful: a player habit, a design decision, or a game that made the medium feel larger.</p>
          </div>
          <div className="blog-feature-wrap"><ArticleCard article={featured} featured anchorId={firstArticleByCategory.get(featured.category) === featured.slug ? categoryAnchor(featured.category) : undefined} /></div>
          <div className="blog-grid">
            {remaining.map((article) => <ArticleCard key={article.slug} article={article} anchorId={firstArticleByCategory.get(article.category) === article.slug ? categoryAnchor(article.category) : undefined} />)}
          </div>
        </section>

        <section className="blog-research-strip" aria-labelledby="research-title">
          <div className="blog-research-mark"><span>R</span><span>+</span><span>G</span></div>
          <div><div className="eyebrow"><span className="eyebrow-dot" /> The editorial promise</div><h2 id="research-title">Research-backed, readable, and honest about the limits.</h2></div>
          <p>We link out to peer-reviewed work, MIT, Harvard, accessibility guidance, and first-party game histories. The point is not to decorate a claim with a citation; it is to show what the evidence can—and cannot—say.</p>
          <a className="blog-text-link" href="/blog/why-two-minute-puzzles-feel-good#references">See the reference trail <ArrowUpRight size={15} /></a>
        </section>

        <section className="blog-authors section-block" aria-labelledby="authors-title">
          <div className="blog-section-heading section-heading-split"><div><div className="eyebrow"><span className="eyebrow-dot" /> By the people behind the bricks</div><h2 id="authors-title">Meet the <span>voices.</span></h2></div><p>OutBrick is a small studio, so the journal stays close to the work. Design notes come from the maker; research notes are edited for clarity and care.</p></div>
          <div className="blog-author-grid">{authors.map((author) => <a className="blog-author-card" href={`/authors/${author.id}`} key={author.id}><span className="blog-avatar" title={`${author.name} avatar`}>{author.initials}</span><div><h3>{author.name}</h3><span>{author.role}</span><p>{author.bio}</p><span className="blog-text-link">View author page <ArrowUpRight size={14} /></span></div></a>)}</div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
