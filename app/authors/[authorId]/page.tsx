import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, BookOpen, ChevronRight, Clock3 } from 'lucide-react';
import { EditorialFooter, EditorialHeader } from '../../editorial-shell';
import { authors, articles, getAuthor } from '../../../lib/blog';
import { siteUrl } from '../../../lib/site';

type AuthorPageProps = { params: Promise<{ authorId: string }> };

export function generateStaticParams() {
  return authors.map((author) => ({ authorId: author.id }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { authorId } = await params;
  const author = authors.find((item) => item.id === authorId);
  if (!author) return {};

  return {
    title: `${author.name} — OutBrick author`,
    description: author.bio,
    keywords: ['OutBrick author', author.name, 'game design journal', 'gaming research'],
    alternates: { canonical: `/authors/${author.id}` },
    openGraph: {
      type: 'profile',
      url: `/authors/${author.id}`,
      title: `${author.name} — OutBrick author`,
      description: author.bio,
      images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and home screen' }],
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { authorId } = await params;
  const author = getAuthor(authorId);
  if (author.id !== authorId) notFound();

  const authorArticles = articles.filter((article) => article.authorId === author.id);
  const profileUrl = `${siteUrl}/authors/${author.id}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${profileUrl}#page`,
    url: profileUrl,
    name: `${author.name} — OutBrick author`,
    description: author.bio,
    mainEntity: {
      '@type': 'Person',
      '@id': `${profileUrl}#person`,
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      url: profileUrl,
      worksFor: { '@type': 'Organization', name: 'OutBrick', url: siteUrl },
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Authors', item: `${siteUrl}/authors` },
      { '@type': 'ListItem', position: 3, name: author.name, item: profileUrl },
    ],
  };

  return (
    <div className="blog-site info-site">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="authors" />
      <main className="info-main author-main" aria-labelledby="author-title">
        <a className="article-back-link" href="/authors"><ArrowLeft size={15} /> All authors</a>
        <header className="author-profile-hero">
          <span className="blog-avatar author-profile-avatar" title={`${author.name} avatar`}>{author.initials}</span>
          <div><div className="eyebrow"><span className="eyebrow-dot" /> OutBrick author</div><h1 id="author-title">{author.name}</h1><p className="author-profile-role">{author.role}</p><p className="info-lede">{author.bio}</p></div>
        </header>

        <section className="author-article-section" aria-labelledby="author-stories-title">
          <div className="section-heading-split info-section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> From this voice</div><h2 id="author-stories-title">{authorArticles.length} stories, <span>so far.</span></h2></div><p>Follow this author’s thread through the OutBrick journal.</p></div>
          <div className="author-article-grid">
            {authorArticles.map((article) => (
              <article className={`author-article-card blog-card-${article.categoryColor}`} key={article.slug}>
                <a className="author-article-image" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}><img src={article.image} alt={article.imageAlt} title={article.title} loading="lazy" /></a>
                <div className="author-article-body"><div className="blog-card-meta"><span>{article.category}</span><span><Clock3 size={13} /> {article.readingTime}</span></div><h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3><p>{article.dek}</p><a className="blog-read-link" href={`/blog/${article.slug}`}>Read story <ChevronRight size={16} /></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="info-cta" aria-labelledby="author-cta-title">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> More from OutBrick</div><h2 id="author-cta-title">Read the <span>journal.</span></h2><p>Explore the complete shelf of design notes, success stories, and research-aware player experience essays.</p></div>
          <div className="info-cta-actions"><a className="nav-cta" href="/blog">Browse journal <ArrowUpRight size={15} /></a><a className="blog-text-link" href="/research">Read the method <ArrowUpRight size={15} /></a></div>
        </section>
      </main>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </div>
  );
}
