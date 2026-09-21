import type { Metadata } from 'next';
import { EditorialFooter, EditorialHeader } from '../../editorial-shell';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, BookOpen, ChevronRight, Clock3, ExternalLink, Sparkles } from 'lucide-react';
import { articles, getArticle, getAuthor, getRelatedArticles, type BlogArticle, type BlogReference } from '../../../lib/blog';
import { siteUrl } from '../../../lib/site';

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.dek,
    keywords: article.tags,
    authors: [{ name: getAuthor(article.authorId).name }],
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      url: `/blog/${article.slug}`,
      title: article.title,
      description: article.dek,
      publishedTime: '2026-09-04',
      modifiedTime: '2026-09-04',
      authors: [getAuthor(article.authorId).name],
      section: article.category,
      tags: article.tags,
      images: [{ url: article.image, width: 1672, height: 941, alt: article.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.dek,
      images: [article.image],
    },
  };
}



function SourceMarkers({ sourceIds, references }: { sourceIds?: string[]; references: BlogReference[] }) {
  if (!sourceIds?.length) return null;
  const sourceRefs = sourceIds.map((id) => references.find((reference) => reference.id === id)).filter((reference): reference is BlogReference => Boolean(reference));
  if (!sourceRefs.length) return null;

  return (
    <p className="article-source-note"><span>Research trail</span>{sourceRefs.map((reference) => {
      const referenceNumber = references.findIndex((item) => item.id === reference.id) + 1;
      return <a key={reference.id} href={`#reference-${reference.id}`} aria-label={`Jump to source: ${reference.label}`}>[{referenceNumber}]</a>;
    })}</p>
  );
}

function RelatedCard({ article }: { article: BlogArticle }) {
  return (
    <article className={`blog-card blog-card-${article.categoryColor} blog-card-related`}>
      <a className="blog-card-image" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}><img src={article.image} alt={article.imageAlt} title={article.title} loading="lazy" /><span className="blog-card-image-label"><BookOpen size={14} /> {article.category}</span></a>
      <div className="blog-card-body"><div className="blog-card-meta"><span>{article.category}</span><span><Clock3 size={13} /> {article.readingTime}</span></div><h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3><p>{article.dek}</p><a className="blog-read-link" href={`/blog/${article.slug}`}>Read story <ChevronRight size={16} /></a></div>
    </article>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const author = getAuthor(article.authorId);
  const relatedArticles = getRelatedArticles(article);
  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}/#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    headline: article.title,
    description: article.dek,
    image: [`${siteUrl}${article.image}`],
    datePublished: '2026-09-04',
    dateModified: '2026-09-04',
    author: { '@type': 'Person', name: author.name, description: author.bio },
    publisher: { '@type': 'Organization', name: 'OutBrick', url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/icon.png` } },
    articleSection: article.category,
    keywords: article.tags.join(', '),
    citation: article.references.map((reference) => reference.url),
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  };
  const faqData = article.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  } : null;

  return (
    <div className="blog-site article-site">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="blog" />
      <main className="article-main">
        <div className="article-breadcrumbs"><a href="/">OutBrick</a><ChevronRight size={14} /><a href="/blog">Journal</a><ChevronRight size={14} /><span>{article.category}</span></div>
        <header className="article-header">
          <div className={`blog-category-pill blog-category-${article.categoryColor}`}>{article.category}</div>
          <h1>{article.title}</h1>
          <p className="article-dek">{article.dek}</p>
          <div className="article-meta">
            <a className="article-byline" href={`/authors/${author.id}`}><span className="blog-avatar" title={`${author.name} avatar`}>{author.initials}</span><span><strong>{author.name}</strong><small>{author.role}</small></span></a>
            <span><Clock3 size={15} /> {article.readingTime}</span><span>Published {article.publishedAt}</span><span>Updated {article.updatedAt}</span>
          </div>
          <div className="article-tags">{article.tags.map((tag) => <span key={tag}>#{tag.replaceAll(' ', '-')}</span>)}</div>
        </header>

        <figure className="article-hero-image"><img src={article.image} alt={article.imageAlt} title={article.title} /><figcaption>{article.imageAlt}. Original OutBrick journal artwork.</figcaption></figure>

        <div className="article-layout">
          <aside className="article-aside">
            <div className="article-toc">
              <div className="blog-kicker"><BookOpen size={14} /> In this story</div>
              <nav aria-label="On this page"><ol>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}{article.faqs?.length ? <li><a href="#faq">Questions, answered</a></li> : null}<li><a href="#references">References</a></li></ol></nav>
            </div>
            <div className="article-author-card"><span className="blog-avatar" title={`${author.name} avatar`}>{author.initials}</span><span className="blog-kicker">Written by</span><h2>{author.name}</h2><p>{author.bio}</p><a className="blog-text-link" href={`/authors/${author.id}`}>View author page <ArrowUpRight size={14} /></a></div>
            <a className="article-back-link" href="/blog"><ArrowLeft size={15} /> All journal stories</a>
          </aside>

          <article className="article-copy">
            <p className="article-intro">{article.intro}</p>
            <aside className="article-takeaways"><div className="blog-kicker"><Sparkles size={14} /> Keep this bit</div><h2>Three ideas to carry forward</h2><ul>{article.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul></aside>
            <div className="article-body">{article.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul className="article-bullets">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}{section.note ? <aside className="article-inline-note">{section.note}</aside> : null}<SourceMarkers sourceIds={section.sourceIds} references={article.references} /></section>)}</div>

            {article.faqs?.length ? <section id="faq" className="article-faq"><div className="blog-kicker">Questions, answered</div><h2>A few useful answers</h2>{article.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section> : null}

            <section id="references" className="article-references"><div className="blog-kicker"><ExternalLink size={14} /> APA 7 reference trail</div><h2>References</h2><p className="article-reference-intro">The claims in this story are grounded in the sources below. External links open the source in a new tab; first-party histories and editorial explainers are labelled by context in the article.</p><ol>{article.references.map((reference) => <li id={`reference-${reference.id}`} key={reference.id}><span>{reference.citation}</span> <a href={reference.url} target="_blank" rel="noreferrer">Read source <ExternalLink size={13} /></a></li>)}</ol></section>
          </article>
        </div>

        <section className="article-related" aria-labelledby="related-title"><div className="blog-section-heading section-heading-split"><div><div className="eyebrow"><span className="eyebrow-dot" /> Keep exploring</div><h2 id="related-title">Another good <span>thread.</span></h2></div><p>Follow the idea into another corner of OutBrick: a success story, a design question, or a player habit worth noticing.</p></div><div className="blog-grid">{relatedArticles.map((relatedArticle) => <RelatedCard article={relatedArticle} key={relatedArticle.slug} />)}</div></section>
      </main>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      {faqData ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /> : null}
    </div>
  );
}
