import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../editorial-shell';
import { guidePath, guideUrl, journalLanguages, journalPath, journalUi, localizeArticle, translatedGuideSlugs } from '../../../lib/i18n/blog';
import { isTranslatedLocale, localePath, locales, ogLocales, translatedLocales, type TranslatedLocale } from '../../../lib/i18n/locales';
import { siteUrl } from '../../../lib/site';
import { authorByline, breadcrumbNode, graph, ids, isoDateTime, ref, webPageNode } from '../../../lib/structured-data';
import { StoryRow } from '../../(en)/blog/journal-kit';
import { LanguageLinks } from '../../components/journal-article';

/**
 * The journal index in French, German, Spanish and Japanese: /fr/blog …
 * It lists only the five guides that are translated, and says plainly that
 * the rest of the journal is in English.
 */
type JournalIndexProps = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: JournalIndexProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};
  const { title, description } = journalUi[locale].index;
  const url = `${siteUrl}${journalPath(locale)}`;
  const lead = localizeArticle(translatedGuideSlugs[0], locale);
  const image = `${siteUrl}${lead.image}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: journalLanguages() },
    openGraph: {
      type: 'website',
      url,
      siteName: 'OutBrick',
      locale: ogLocales[locale],
      title,
      description,
      images: [{ url: image, width: 1600, height: 900, alt: lead.imageAlt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function JournalIndexPage({ params }: JournalIndexProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <JournalIndex locale={locale} />;
}

function JournalIndex({ locale }: { locale: TranslatedLocale }) {
  const ui = journalUi[locale];
  const guides = translatedGuideSlugs.map((slug) => localizeArticle(slug, locale));
  const path = journalPath(locale);
  const url = `${siteUrl}${path}`;

  const structuredData = graph(
    webPageNode({
      type: 'CollectionPage',
      url,
      name: ui.index.title,
      description: ui.index.description,
      inLanguage: locale,
      mainEntity: ref(`${url}#blog`),
    }),
    {
      '@type': 'Blog',
      '@id': `${url}#blog`,
      name: ui.index.label,
      description: ui.index.description,
      url,
      inLanguage: locale,
      publisher: ref(ids.organization),
      // The English journal, of which this is the translated part.
      isPartOf: { '@type': 'Blog', '@id': ids.blog, name: 'The OutBrick Journal', url: `${siteUrl}/blog`, inLanguage: 'en' },
      blogPost: guides.map((article) => ({
        '@type': 'BlogPosting',
        '@id': `${guideUrl(locale, article.slug)}#article`,
        headline: article.title,
        url: guideUrl(locale, article.slug),
        image: `${siteUrl}${article.image}`,
        inLanguage: locale,
        datePublished: isoDateTime(article.publishedAt),
        dateModified: isoDateTime(article.updatedAt),
        author: authorByline(article.authorId),
        publisher: ref(ids.organization),
      })),
    },
    breadcrumbNode(url, [
      { name: 'OutBrick', path: localePath(locale, '/') },
      { name: ui.journal, path },
    ]),
  );

  return (
    <EditorialPage current="blog" className="ed-journal" locale={locale} languages={Object.fromEntries(locales.map((l) => [l, journalPath(l)]))}>
      <header className="ed-band-ink ed-mast">
        <div className="ed-wrap">
          <div className="ed-mast-top">
            <Crumbs label={ui.breadcrumb} items={[{ href: localePath(locale, '/'), label: 'OutBrick' }, { label: ui.journal }]} />
            <p className="ed-meta">{ui.index.count(guides.length)}</p>
          </div>
          <div className="ed-mast-grid ed-mast-solo">
            <div>
              <p className="ed-label">{ui.index.label}</p>
              <h1 className="ed-display" style={{ marginTop: 18 }}>{ui.index.h1}</h1>
              <p className="ed-lede">{ui.index.lede}</p>
              <LanguageLinks locale={locale} pathFor={journalPath} />
            </div>
          </div>
        </div>
        <Bond />
      </header>

      <section className="ed-band-ink ed-band" aria-labelledby="guides-title">
        <div className="ed-wrap">
          <h2 id="guides-title" className="ed-h2" style={{ marginTop: 14 }}>{ui.index.guides}</h2>
          <div className="ed-shelves" style={{ marginTop: 'clamp(32px, 4vw, 52px)' }}>
            <div>
              <ol className="ed-rows">
                {guides.map((article, index) => (
                  <StoryRow key={article.slug} article={article} n={index + 1} eager={index < 2} href={guidePath(locale, article.slug)} />
                ))}
              </ol>
            </div>
          </div>
          <p className="ed-more-en">
            {ui.index.more}{' '}
            <a className="ed-link" href="/blog" hrefLang="en">{ui.index.moreLink}</a>
          </p>
        </div>
      </section>

      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
