import type { Metadata } from 'next';
import { Fragment } from 'react';
import { notFound } from 'next/navigation';
import { Badge, Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../../../editorial-shell';
import { articles, getArticle, getAuthor, getRelatedArticles, type BlogReference } from '../../../../lib/blog';
import { siteUrl } from '../../../../lib/site';
import { authorByline, graph, breadcrumbNode, ids, isoDateTime, ref, webPageNode } from '../../../../lib/structured-data';
import { isoDate, plain, Rich, StoryCard } from '../journal-kit';
import { ReadingAids } from './reading-aids';
import { BrandMark } from '../../../village-shell';

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const author = getAuthor(article.authorId);
  const url = `${siteUrl}/blog/${article.slug}`;
  const image = `${siteUrl}${article.image}`;

  return {
    title: article.title.length > 54 ? { absolute: article.title } : article.title,
    description: article.dek,
    keywords: article.tags,
    authors: [{ name: author.name, url: `${siteUrl}/authors/${author.id}` }],
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      url,
      siteName: 'OutBrick',
      title: article.title,
      description: article.dek,
      publishedTime: isoDateTime(article.publishedAt),
      modifiedTime: isoDateTime(article.updatedAt),
      authors: [`${siteUrl}/authors/${author.id}`],
      section: article.category,
      tags: article.tags,
      images: [{ url: image, width: 1600, height: 900, alt: article.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.dek,
      images: [{ url: image, alt: article.imageAlt }],
    },
  };
}

function SourceMarkers({ sourceIds, references }: { sourceIds?: string[]; references: BlogReference[] }) {
  const found = (sourceIds ?? [])
    .map((id) => ({ id, n: references.findIndex((reference) => reference.id === id) + 1 }))
    .filter((entry) => entry.n > 0);
  if (!found.length) return null;
  return (
    <p className="ed-sources">
      <span>Sources</span>
      {found.map(({ id, n }) => (
        <a key={id} href={`#reference-${id}`} aria-label={`Source ${n}: ${references[n - 1]!.label}`}>{n}</a>
      ))}
    </p>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const author = getAuthor(article.authorId);
  const related = getRelatedArticles(article);
  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const faqs = article.faqs ?? [];
  const words = [article.intro, ...article.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.bullets ?? [])])].map(plain).join(' ');

  const structuredData = graph(
    webPageNode({
      url: articleUrl,
      name: article.title,
      description: article.dek,
      datePublished: isoDateTime(article.publishedAt),
      dateModified: isoDateTime(article.updatedAt),
      primaryImageOfPage: ref(`${articleUrl}#primaryimage`),
      mainEntity: ref(`${articleUrl}#article`),
    }),
    {
      '@type': 'BlogPosting',
      '@id': `${articleUrl}#article`,
      mainEntityOfPage: ref(`${articleUrl}#webpage`),
      url: articleUrl,
      headline: article.title,
      description: article.dek,
      // The one cover each article has: 1600 × 900 (16:9), at least 1200 px wide as Google asks.
      image: [{ '@type': 'ImageObject', '@id': `${articleUrl}#primaryimage`, url: `${siteUrl}${article.image}`, width: 1600, height: 900, caption: article.imageAlt }],
      thumbnailUrl: `${siteUrl}${article.image}`,
      datePublished: isoDateTime(article.publishedAt),
      dateModified: isoDateTime(article.updatedAt),
      inLanguage: 'en',
      wordCount: words.split(/\s+/).filter(Boolean).length,
      timeRequired: `PT${Number.parseInt(article.readingTime, 10) || 1}M`,
      author: authorByline(author.id),
      publisher: ref(ids.organization),
      isPartOf: { '@type': 'Blog', '@id': ids.blog, name: 'The OutBrick Journal', url: `${siteUrl}/blog` },
      articleSection: article.category,
      keywords: article.tags,
      citation: article.references.map((reference) => reference.citation),
    },
    breadcrumbNode(articleUrl, [
      { name: 'OutBrick', path: '/' },
      { name: 'Journal', path: '/blog' },
      { name: article.title, path: `/blog/${article.slug}` },
    ]),
    ...(faqs.length
      ? [
          {
            '@type': 'FAQPage',
            '@id': `${articleUrl}#faq`,
            url: articleUrl,
            isPartOf: ref(`${articleUrl}#webpage`),
            mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: plain(faq.answer) } })),
          },
        ]
      : []),
  );

  const pullAfter = Math.min(1, article.sections.length - 1);

  return (
    <EditorialPage
      current="blog"
      tone={article.categoryColor}
      className="ed-article"
      before={<div className="ed-progress" aria-hidden="true"><i /></div>}
    >
      <article>
        {/* ---------------- header ---------------- */}
        <header className="ed-band-ink ed-ahead">
          <div className="ed-wrap">
            <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/blog', label: 'Journal' }, { label: article.title }]} />
            <div className="ed-ahead-grid">
              <div>
                <a className="ed-chip" href={`/blog#category-${article.category.toLowerCase().replaceAll(' ', '-')}`}>{article.category}</a>
                <h1>{article.title}</h1>
                <p className="ed-lede">{article.dek}</p>
                <div className="ed-ahead-meta">
                  <div className="ed-byline">
                    <a className="ed-avatar" href={`/authors/${author.id}`} aria-hidden="true" tabIndex={-1}>{author.initials}</a>
                    <span className="ed-byline-text">
                      <b><a href={`/authors/${author.id}`}>{author.name}</a></b>
                      <span>{author.role}</span>
                    </span>
                  </div>
                  <ul className="ed-facts">
                    <li>{article.readingTime}</li>
                    <li><span>Published <time dateTime={isoDate(article.publishedAt)}>{article.publishedAt}</time></span></li>
                    {article.updatedAt !== article.publishedAt ? (
                      <li><span>Updated <time dateTime={isoDate(article.updatedAt)}>{article.updatedAt}</time></span></li>
                    ) : null}
                  </ul>
                </div>
              </div>
              <figure className="ed-frame">
                <img src={article.image} alt={article.imageAlt} width={1600} height={900} decoding="async" fetchPriority="high" />
                <figcaption>Journal illustration</figcaption>
              </figure>
            </div>
          </div>
        </header>
        <Bond />

        {/* ---------------- the reading surface ---------------- */}
        <div className="ed-paper ed-band-paper">
          <div className="ed-wrap ed-read">
            <aside className="ed-toc" aria-label="In this story">
              <p className="ed-label no-mark">In this story</p>
              <nav aria-label="Table of contents">
                <ol>
                  {article.sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                  ))}
                  {faqs.length ? <li><a href="#faq">Questions, answered</a></li> : null}
                  <li><a href="#references">References</a></li>
                </ol>
              </nav>
              <a className="ed-link ed-toc-back" href="/blog">All journal stories</a>
            </aside>

            <div className="ed-col">
              <p className="ed-intro">{article.intro}</p>

              <aside className="ed-takeaways" aria-labelledby="takeaways-title">
                <Studs count={3} />
                <h2 id="takeaways-title">If you only read this</h2>
                <ol>{article.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ol>
              </aside>

              <div className="ed-body">
                {article.sections.map((section, index) => (
                  <Fragment key={section.id}>
                    <section id={section.id} aria-labelledby={`${section.id}-title`}>
                      <h2 id={`${section.id}-title`}>{section.title}</h2>
                      {section.paragraphs.map((paragraph) => <p key={paragraph}><Rich text={paragraph} /></p>)}
                      {section.bullets ? (
                        <ul className="ed-bullets">{section.bullets.map((bullet) => <li key={bullet}><Rich text={bullet} /></li>)}</ul>
                      ) : null}
                      {section.note ? <p className="ed-note"><Rich text={section.note} /></p> : null}
                      <SourceMarkers sourceIds={section.sourceIds} references={article.references} />
                    </section>
                    {article.pullQuote && index === pullAfter ? (
                      <figure className="ed-pull" aria-hidden="true">
                        <p>{article.pullQuote}</p>
                      </figure>
                    ) : null}
                  </Fragment>
                ))}
              </div>

              {faqs.length ? (
                <section id="faq" className="ed-faq" aria-labelledby="faq-title" style={{ scrollMarginTop: 90 }}>
                  <p className="ed-label">Questions, answered</p>
                  <h2 id="faq-title">A few useful answers</h2>
                  {faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p><Rich text={faq.answer} /></p>
                    </details>
                  ))}
                </section>
              ) : null}

              <section id="references" className="ed-refs" aria-labelledby="references-title" style={{ scrollMarginTop: 90 }}>
                <p className="ed-label">APA 7</p>
                <h2 id="references-title">References</h2>
                <p>
                  Where a source is a studio’s own history or a news account rather than a study, the
                  article says so beside the claim.
                </p>
                <ol>
                  {article.references.map((reference) => (
                    <li id={`reference-${reference.id}`} key={reference.id}>
                      <span>
                        {reference.citation}{' '}
                        <a href={reference.url} target="_blank" rel="noreferrer">
                          {reference.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="ed-end">
                <div className="ed-authorcard">
                  <a className="ed-avatar big" href={`/authors/${author.id}`} aria-hidden="true" tabIndex={-1}>{author.initials}</a>
                  <div>
                    <p className="ed-label no-mark">Written by</p>
                    <h2>{author.name}</h2>
                    <p>{author.bio}</p>
                    <a className="ed-link" href={`/authors/${author.id}`}>More from {author.name.split(' ')[0] === 'OutBrick' ? 'the desk' : author.name.split(' ')[0]}</a>
                  </div>
                </div>
                <aside className="ed-gamenote" aria-labelledby="game-note-title">
                  <BrandMark className="gamenote-mark" />
                  <h2 id="game-note-title">The game this journal sits beside</h2>
                  <p>
                    OutBrick is a sliding-brick colour-sort puzzle: 2,000 solver-verified boards, 167
                    brick-built villages and nine brick friends. Free on the App Store, with lives and
                    opt-in rewarded videos, and no clock anywhere.
                  </p>
                  <div className="ed-actions">
                    <Badge />
                    <a className="ed-link" href="/#fair">What it costs you</a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ---------------- related ---------------- */}
      {related.length ? (
        <section className="ed-band-ink2 ed-band" aria-labelledby="related-title">
          <div className="ed-wrap">
            <p className="ed-label">Keep reading</p>
            <h2 id="related-title" className="ed-h2" style={{ marginTop: 14 }}>Three more from the shelves.</h2>
            <div className="ed-related">
              {related.map((item) => <div className="ed-reveal" key={item.slug}><StoryCard article={item} /></div>)}
            </div>
          </div>
        </section>
      ) : null}

      <ReadingAids />
      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
