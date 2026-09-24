/**
 * One journal article, in any language it is published in: `/blog/<slug>`
 * (app/(en)/blog/[slug]/page.tsx) and the translated guides at
 * `/<locale>/blog/<slug>` (app/[locale]/blog/[slug]/page.tsx).
 *
 * English renders exactly as the article page always has: every English word
 * of the chrome comes from `journalUi.en` in lib/i18n/blog.ts, which is the
 * page's original wording, and dates and reading time are the strings in
 * lib/blog.ts. A translated guide passes the localized article (see
 * `localizeArticle`) and gets translated chrome, locale-formatted dates,
 * `hreflang="en"` on links that lead to English-only pages (the category and
 * tag pages, the author pages), a language switcher, and related reading and
 * previous / next that stay inside its own language.
 */

import type { Metadata } from 'next';
import { Fragment } from 'react';
import { Badge, Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../editorial-shell';
import { getArticle, getAuthor, type BlogArticle, type BlogReference } from '../../lib/blog';
import { guideLanguages, guidePath, guideUrl, isTranslatedGuide, journalPath, journalUi, type JournalUi } from '../../lib/i18n/blog';
import { localeNames, localePath, locales, ogLocales, type Locale, type TranslatedLocale } from '../../lib/i18n/locales';
import { categoryPath, tagHref } from '../../lib/journal';
import { siteUrl } from '../../lib/site';
import { authorByline, breadcrumbNode, graph, ids, isoDateTime, ref, webPageNode } from '../../lib/structured-data';
import { isoDate, plain, Rich, StoryCard } from '../(en)/blog/journal-kit';
import { ReadingAids } from '../(en)/blog/[slug]/reading-aids';
import { BrandMark } from '../village-shell';

const CJK = /[ᄀ-ᇿ⺀-鿿가-힯豈-﫿︰-﹏＀-｠￠-￦]/u;
/** Length as a search result shows it: a CJK character is about twice as wide as a Latin one. */
function displayLength(text: string): number {
  let n = 0;
  for (const ch of text) n += CJK.test(ch) ? 2 : 1;
  return n;
}

/** "September 24, 2026" in the reader's language: "24 septembre 2026", "2026年9月24日" … */
function localDate(human: string, locale: Locale): string {
  if (locale === 'en') return human;
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${isoDate(human)}T12:00:00Z`));
}

export function articleMetadata(article: BlogArticle, locale: Locale): Metadata {
  const author = getAuthor(article.authorId);
  const image = `${siteUrl}${article.image}`;
  const translated = isTranslatedGuide(article.slug);
  // A translated guide and its English original name each other (and x-default, the English).
  const languages = translated ? guideLanguages(article.slug as Parameters<typeof guideLanguages>[0]) : undefined;

  if (locale === 'en') {
    const url = `${siteUrl}/blog/${article.slug}`;
    return {
      title: article.title.length > 54 ? { absolute: article.title } : article.title,
      description: article.dek,
      keywords: article.tags,
      authors: [{ name: author.name, url: `${siteUrl}/authors/${author.id}` }],
      alternates: languages ? { canonical: `/blog/${article.slug}`, languages } : { canonical: `/blog/${article.slug}` },
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

  const url = guideUrl(locale, article.slug);
  return {
    title: displayLength(article.title) > 54 ? { absolute: article.title } : article.title,
    description: article.dek,
    keywords: article.tags,
    authors: [{ name: author.name, url: `${siteUrl}/authors/${author.id}` }],
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'article',
      url,
      siteName: 'OutBrick',
      locale: ogLocales[locale],
      title: article.title,
      description: article.dek,
      publishedTime: isoDateTime(article.publishedAt),
      modifiedTime: isoDateTime(article.updatedAt),
      authors: [`${siteUrl}/authors/${author.id}`],
      section: journalUi[locale].categories[article.category] ?? article.category,
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

/**
 * The numbered source markers under a section. Each carries its citation in a
 * small card that shows on hover or keyboard focus (CSS only; Escape hides it,
 * see reading-aids.tsx) and is also its accessible description. Citations stay
 * in their original language (English), and say so on a translated page.
 */
function SourceMarkers({ sectionId, sourceIds, references, ui, tr }: { sectionId: string; sourceIds?: string[]; references: BlogReference[]; ui: JournalUi; tr?: TranslatedLocale }) {
  const found = (sourceIds ?? [])
    .map((id) => ({ id, n: references.findIndex((reference) => reference.id === id) + 1 }))
    .filter((entry) => entry.n > 0);
  if (!found.length) return null;
  return (
    <p className="ed-sources">
      <span>{ui.sources}</span>
      {found.map(({ id, n }) => {
        const reference = references[n - 1]!;
        const cardId = `cite-${sectionId}-${id}`;
        return (
          <span className="ed-cite" key={id}>
            <a href={`#reference-${id}`} aria-label={ui.source(n, reference.label)} aria-describedby={cardId}>{n}</a>
            <span className="ed-cite-card" id={cardId} role="tooltip">
              <span className="ed-cite-n" aria-hidden="true">{ui.sourceCard(n)}</span>
              {tr ? <span lang="en">{reference.citation}</span> : reference.citation}
            </span>
          </span>
        );
      })}
    </p>
  );
}

/** The link icon beside a section heading: a real anchor, which reading-aids.tsx also copies. */
function SectionLink({ id, title, ui }: { id: string; title: string; ui: JournalUi }) {
  return (
    <a className="ed-anchor" href={`#${id}`} data-copy-link="" aria-label={ui.copySectionLink(title)}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
        <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

/** The same page in every language it is published in. Only on translated pages. */
export function LanguageLinks({ locale, pathFor }: { locale: TranslatedLocale; pathFor: (locale: Locale) => string }) {
  return (
    <nav className="ed-langs" aria-label={journalUi[locale].languages}>
      <span aria-hidden="true">{journalUi[locale].languages}</span>
      <ul>
        {locales.map((l) => (
          <li key={l}>
            <a href={pathFor(l)} lang={l} hrefLang={l} aria-current={l === locale ? 'page' : undefined}>
              {localeNames[l]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ArticleView({
  article,
  locale,
  related,
  previous,
  next,
}: {
  article: BlogArticle;
  locale: Locale;
  related: BlogArticle[];
  previous?: BlogArticle;
  next?: BlogArticle;
}) {
  const ui = journalUi[locale];
  const tr = locale === 'en' ? undefined : locale;
  // Links to pages only published in English say so on a translated page.
  const en = tr ? 'en' : undefined;
  const english = tr ? getArticle(article.slug)! : article;
  const author = getAuthor(article.authorId);
  const authorCopy = ui.authors[author.id] ?? { role: author.role, bio: author.bio };
  const category = ui.categories[article.category] ?? article.category;
  const articleUrl = guideUrl(locale, article.slug);
  const englishUrl = guideUrl('en', article.slug);
  const journal = journalPath(locale);
  const faqs = article.faqs ?? [];
  const words = [article.intro, ...article.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.bullets ?? [])])].map(plain).join(' ');

  const structuredData = graph(
    webPageNode({
      url: articleUrl,
      name: article.title,
      description: article.dek,
      ...(tr ? { inLanguage: tr } : {}),
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
      inLanguage: locale,
      // Japanese sets no spaces between words, so a whitespace word count means nothing there.
      ...(locale === 'ja' ? {} : { wordCount: words.split(/\s+/).filter(Boolean).length }),
      timeRequired: `PT${Number.parseInt(english.readingTime, 10) || 1}M`,
      author: authorByline(author.id),
      publisher: ref(ids.organization),
      isPartOf: tr
        ? { '@type': 'Blog', '@id': `${siteUrl}${journal}#blog`, name: ui.index.label, url: `${siteUrl}${journal}`, inLanguage: tr }
        : { '@type': 'Blog', '@id': ids.blog, name: 'The OutBrick Journal', url: `${siteUrl}/blog` },
      // A translation names the English article it was translated from.
      ...(tr
        ? {
            translationOfWork: { '@type': 'BlogPosting', '@id': `${englishUrl}#article`, url: englishUrl, headline: english.title, inLanguage: 'en' },
            isBasedOn: ref(`${englishUrl}#article`),
          }
        : {}),
      articleSection: category,
      keywords: article.tags,
      citation: article.references.map((reference) => reference.citation),
    },
    breadcrumbNode(articleUrl, [
      { name: 'OutBrick', path: tr ? localePath(tr, '/') : '/' },
      { name: ui.journal, path: journal },
      { name: article.title, path: guidePath(locale, article.slug) },
    ]),
    ...(faqs.length
      ? [
          {
            '@type': 'FAQPage',
            '@id': `${articleUrl}#faq`,
            url: articleUrl,
            ...(tr ? { inLanguage: tr } : {}),
            isPartOf: ref(`${articleUrl}#webpage`),
            mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: plain(faq.answer) } })),
          },
        ]
      : []),
  );

  const pullAfter = Math.min(1, article.sections.length - 1);
  // The category and tag pages are English only: a translated page shows the category in its
  // own language and the tags as the English pages name them, all marked as leading to English.
  const tags = english.tags.filter((tag) => tag.toLowerCase() !== english.category.toLowerCase());

  return (
    <EditorialPage
      current="blog"
      tone={article.categoryColor}
      className="ed-article"
      before={<div className="ed-progress" aria-hidden="true"><i /></div>}
      locale={tr}
    >
      <article>
        {/* ---------------- header ---------------- */}
        <header className="ed-band-ink ed-ahead">
          <div className="ed-wrap">
            {tr ? (
              <Crumbs label={ui.breadcrumb} items={[{ href: localePath(tr, '/'), label: 'OutBrick' }, { href: journal, label: ui.journal }, { label: article.title }]} />
            ) : (
              <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/blog', label: 'Journal' }, { label: article.title }]} />
            )}
            <div className="ed-ahead-grid">
              <div>
                <a className="ed-chip" href={categoryPath(article.category)} hrefLang={en}>{category}</a>
                <h1>{article.title}</h1>
                <p className="ed-lede">{article.dek}</p>
                <div className="ed-ahead-meta">
                  <div className="ed-byline">
                    <a className="ed-avatar" href={`/authors/${author.id}`} hrefLang={en} aria-hidden="true" tabIndex={-1}>{author.initials}</a>
                    <span className="ed-byline-text">
                      <b><a href={`/authors/${author.id}`} hrefLang={en}>{author.name}</a></b>
                      <span>{authorCopy.role}</span>
                    </span>
                  </div>
                  <ul className="ed-facts">
                    <li>{article.readingTime}</li>
                    <li><span>{ui.published} <time dateTime={isoDate(article.publishedAt)}>{localDate(article.publishedAt, locale)}</time></span></li>
                    {article.updatedAt !== article.publishedAt ? (
                      <li><span className="ed-updated"><b>{ui.updated}</b> <time dateTime={isoDate(article.updatedAt)}>{localDate(article.updatedAt, locale)}</time></span></li>
                    ) : null}
                  </ul>
                  <button type="button" className="ed-share" data-share="" data-share-title={article.title} data-share-text={article.dek}>
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M12 15V3.5M7.5 8 12 3.5 16.5 8M5 12.5V19a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-6.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {ui.share}
                  </button>
                </div>
                {tr ? <LanguageLinks locale={tr} pathFor={(l) => guidePath(l, article.slug)} /> : null}
              </div>
              <figure className="ed-frame">
                <img src={article.image} alt={article.imageAlt} width={1600} height={900} decoding="async" fetchPriority="high" />
                <figcaption>{ui.figcaption}</figcaption>
              </figure>
            </div>
          </div>
        </header>
        <Bond />

        {/* ---------------- the reading surface ---------------- */}
        <div className="ed-paper ed-band-paper">
          <div className="ed-wrap ed-read">
            <aside className="ed-toc" aria-label={ui.inThisStory}>
              <p className="ed-label no-mark">{ui.inThisStory}</p>
              <nav aria-label={ui.toc}>
                <ol>
                  {article.sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                  ))}
                  {faqs.length ? <li><a href="#faq">{ui.faqLabel}</a></li> : null}
                  <li><a href="#references">{ui.references}</a></li>
                </ol>
              </nav>
              <a className="ed-link ed-toc-back" href={journal}>{ui.allStories}</a>
            </aside>

            <div className="ed-col">
              <p className="ed-intro">{article.intro}</p>

              <aside className="ed-takeaways" aria-labelledby="takeaways-title">
                <Studs count={3} />
                <h2 id="takeaways-title">{ui.takeaways}</h2>
                <ol>{article.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ol>
              </aside>

              <div className="ed-body">
                {article.sections.map((section, index) => (
                  <Fragment key={section.id}>
                    <section id={section.id} aria-labelledby={`${section.id}-title`}>
                      <div className="ed-h2row">
                        <h2 id={`${section.id}-title`}>{section.title}</h2>
                        <SectionLink id={section.id} title={section.title} ui={ui} />
                      </div>
                      {section.paragraphs.map((paragraph) => <p key={paragraph}><Rich text={paragraph} locale={tr} /></p>)}
                      {section.bullets ? (
                        <ul className="ed-bullets">{section.bullets.map((bullet) => <li key={bullet}><Rich text={bullet} locale={tr} /></li>)}</ul>
                      ) : null}
                      {section.note ? <p className="ed-note"><Rich text={section.note} locale={tr} /></p> : null}
                      <SourceMarkers sectionId={section.id} sourceIds={section.sourceIds} references={article.references} ui={ui} tr={tr} />
                    </section>
                    {article.pullQuote && index === pullAfter ? (
                      <figure className="ed-pull" aria-hidden="true">
                        <p>{article.pullQuote}</p>
                      </figure>
                    ) : null}
                  </Fragment>
                ))}
              </div>

              <div className="ed-filed">
                <h2 className="ed-label no-mark">{ui.filedUnder}</h2>
                <ul className="ed-tags">
                  <li data-tone={article.categoryColor}><a className="shelf" href={categoryPath(article.category)} hrefLang={en}>{category}</a></li>
                  {tags.map((tag) => <li key={tag}><a href={tagHref(tag)} hrefLang={en} lang={en}>{tag}</a></li>)}
                </ul>
              </div>

              {faqs.length ? (
                <section id="faq" className="ed-faq" aria-labelledby="faq-title" style={{ scrollMarginTop: 90 }}>
                  <p className="ed-label">{ui.faqLabel}</p>
                  <h2 id="faq-title">{ui.faqTitle}</h2>
                  {faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p><Rich text={faq.answer} locale={tr} /></p>
                    </details>
                  ))}
                </section>
              ) : null}

              <section id="references" className="ed-refs" aria-labelledby="references-title" style={{ scrollMarginTop: 90 }}>
                <p className="ed-label">APA 7</p>
                <h2 id="references-title">{ui.references}</h2>
                <p>
                  {ui.referencesNote}
                </p>
                <ol>
                  {article.references.map((reference) => (
                    <li id={`reference-${reference.id}`} key={reference.id}>
                      <span lang={en}>
                        {reference.citation}{' '}
                        <a href={reference.url} target="_blank" rel="noreferrer">
                          {reference.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          <span className="sr-only" lang={tr}>{ui.newTab}</span>
                        </a>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="ed-end">
                <div className="ed-authorcard">
                  <a className="ed-avatar big" href={`/authors/${author.id}`} hrefLang={en} aria-hidden="true" tabIndex={-1}>{author.initials}</a>
                  <div>
                    <p className="ed-label no-mark">{ui.writtenBy}</p>
                    <h2>{author.name}</h2>
                    <p>{authorCopy.bio}</p>
                    <a className="ed-link" href={`/authors/${author.id}`} hrefLang={en}>{ui.moreFrom(author.name)}</a>
                  </div>
                </div>
                <aside className="ed-gamenote" aria-labelledby="game-note-title">
                  <BrandMark className="gamenote-mark" />
                  <h2 id="game-note-title">{ui.gameNoteTitle}</h2>
                  <p>
                    {ui.gameNoteBody}
                  </p>
                  <div className="ed-actions">
                    <Badge locale={tr} />
                    <a className="ed-link" href={tr ? `${localePath(tr, '/')}#fair` : '/#fair'}>{ui.costsLink}</a>
                  </div>
                </aside>
              </div>

              {previous || next ? (
                <nav className="ed-storynav" aria-label={ui.storyNav}>
                  {previous ? (
                    <a className="prev" href={guidePath(locale, previous.slug)} rel="prev" data-tone={previous.categoryColor}>
                      <small>{ui.previousStory}</small>
                      <b>{previous.title}</b>
                    </a>
                  ) : <span />}
                  {next ? (
                    <a className="next" href={guidePath(locale, next.slug)} rel="next" data-tone={next.categoryColor}>
                      <small>{ui.nextStory}</small>
                      <b>{next.title}</b>
                    </a>
                  ) : <span />}
                </nav>
              ) : null}
            </div>
          </div>
        </div>
      </article>

      {/* ---------------- related ---------------- */}
      {related.length ? (
        <section className="ed-band-ink2 ed-band ed-related-band" aria-labelledby="related-title">
          <div className="ed-wrap">
            <p className="ed-label">{ui.keepReading}</p>
            <h2 id="related-title" className="ed-h2" style={{ marginTop: 14 }}>{ui.moreTitle}</h2>
            <div className="ed-related">
              {related.map((item) => (
                <div className="ed-reveal" key={item.slug}>
                  {tr ? (
                    <StoryCard article={item} href={guidePath(tr, item.slug)} category={ui.categories[item.category] ?? item.category} by={ui.by} />
                  ) : (
                    <StoryCard article={item} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <output className="ed-toast" aria-live="polite" aria-atomic="true" data-toast="" />
      {tr ? <ReadingAids messages={{ copied: ui.linkCopied, copyFailedLink: ui.copyFailedLink, copyFailedShare: ui.copyFailedShare }} /> : <ReadingAids />}
      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
