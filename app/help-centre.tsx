/**
 * The OutBrick Help Centre: /community/help (the hub) and /community/help/<slug> (a guide), in
 * every language. Prerendered pages, outside the community's client app (which leaves
 * /community/help alone; see app/components/community/community-app.tsx).
 *
 * The content is data (lib/help/content/<locale>.ts) written in a tiny inline markup that is
 * parsed here into elements — never into HTML — so a translation cannot inject markup. The
 * screenshots are real captures from the released game (lib/help/shots.json, written by
 * scripts/import-help-shots.py), shown in the reader's language where a capture exists and in
 * English otherwise, with the caption saying so.
 *
 * Styling is app/styles/help.css, scoped under `.ob-site .hc`, built from the site's own brick
 * primitive, buttons, eyebrow, stamp and cream reading band.
 */

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { chromeCopy } from '../lib/i18n/chrome';
import { localeAlternates, localeNames, localePath, localeUrl, locales, ogLocales, type Locale } from '../lib/i18n/locales';
import { siteUrl } from '../lib/site';
import { appNode, breadcrumbNode, graph, ids, ref, webPageNode } from '../lib/structured-data';
import { localizedApplicationNode } from '../lib/i18n/application';
import { communityPath } from '../lib/community/contract';
import { helpCategories, helpCheckpoint, type Block, type HelpArticle } from '../lib/help/model';
import { helpArticle, helpArticles, isTranslated, readingMinutes } from '../lib/help/content';
import { helpUi } from '../lib/help/ui';
import shotsCatalog from '../lib/help/shots.json';
import { JsonLd } from './editorial-shell';
import { Course, editorialNavFor, VillageFooter, VillageHeader } from './village-shell';
import { HelpFinder } from './components/help-finder';
import { GuideFeedback } from './components/support/guide-feedback';
import { FriendFigure, HelpBoard, HelpEntry, HelpFaq, HelpFriend, HelpPath } from './help-blocks';
import type { FriendId, FriendPose, HelpCategory as Category } from '../lib/help/model';
import { supportCopy } from '../lib/support/content';
import './styles/help.css';
import './styles/help-blocks.css';
import './styles/support.css';

type ShotInfo = { w: number; h: number; locales: string[] };
const shots = shotsCatalog as Record<string, ShotInfo>;

export const helpBase = '/community/help';

/** Each shelf of the Help Centre has a brick friend as its host, shown through pose alone. */
export const categoryHosts: Record<Category, { friend: FriendId; pose: FriendPose }> = {
  start: { friend: 'bloo', pose: 'cheer' },
  play: { friend: 'bricko', pose: 'idle' },
  learn: { friend: 'peach', pose: 'think' },
  progress: { friend: 'sprout', pose: 'idle' },
  family: { friend: 'zippy', pose: 'idle' },
  accessibility: { friend: 'flurry', pose: 'idle' },
  apple: { friend: 'poppy', pose: 'idle' },
  account: { friend: 'moss', pose: 'think' },
  community: { friend: 'vio', pose: 'idle' },
};
export const articleHost = (a: HelpArticle) => ({ friend: a.host ?? categoryHosts[a.category].friend, pose: a.hostPose ?? categoryHosts[a.category].pose });
/** The day the Help Centre was first published. */
const helpPublished = '2026-10-08T12:00:00+00:00';

/** A meta description within search engines' length (CJK characters count double). */
export function metaText(text: string, locale: Locale): string {
  const plain = plainText(text);
  const limit = locale === 'ja' ? 78 : 155;
  if (plain.length <= limit) return plain;
  const cut = plain.slice(0, limit - 1);
  const space = locale === 'ja' ? cut.length : cut.lastIndexOf(' ');
  return `${cut.slice(0, space > limit * 0.6 ? space : cut.length).replace(/[\s,;:、。.]+$/, '')}…`;
}
const hubPath = (locale: Locale) => localePath(locale, helpBase);
const guidePath = (locale: Locale, slug: string) => localePath(locale, `${helpBase}/${slug}`);

export function stampDate(locale: Locale, day: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${day}T12:00:00Z`));
}

// ---------------------------------------------------------------------------------------------
// Screenshots

/** The best capture of `id` for `locale`: its own language if one was captured, else English. */
function shotSource(id: string, locale: Locale) {
  const info = shots[id];
  if (!info) throw new Error(`[help] unknown screenshot "${id}" — add it with scripts/import-help-shots.py`);
  const lang = info.locales.includes(locale) ? locale : 'en';
  const base = `/assets/help/${lang}/${id}`;
  return { info, lang, small: `${base}-480.webp`, large: `${base}-960.webp` };
}

function Shot({ id, alt, caption, locale, eager = false }: { id: string; alt: string; caption: string; locale: Locale; eager?: boolean }) {
  const src = shotSource(id, locale);
  const ui = helpUi[locale];
  const landscape = src.info.w > src.info.h;
  return (
    <figure className={`hc-shot ${landscape ? 'wide' : 'tall'}`}>
      <a className="frame" href={src.large} aria-label={`${ui.enlarge}: ${alt}`}>
        <img
          src={src.small}
          srcSet={`${src.small} 480w, ${src.large} 960w`}
          sizes={landscape ? '(max-width: 700px) 92vw, 640px' : '(max-width: 560px) 72vw, 300px'}
          width={src.info.w}
          height={src.info.h}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </a>
      <figcaption>
        {renderInline(caption, locale)}
        {src.lang !== locale ? <span className="lang-note"> {ui.englishShot}</span> : null}
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------------------------
// Inline markup: **bold**, [text](href), {{Key}}

const token = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|\{\{[^}]+\}\})/g;

export function resolveHref(href: string, locale: Locale): string {
  if (href.startsWith('help:')) {
    const [slug, hash] = href.slice(5).split('#');
    return (slug ? guidePath(locale, slug) : hubPath(locale)) + (hash ? `#${hash}` : '');
  }
  // A path already in a language (/pt-BR/community) is left as written.
  if (/^\/(?:fr|de|es|ja|pt-BR)(?:[/?#]|$)/.test(href)) return href;
  if (href.startsWith('/')) {
    // Community addresses are prefixed the same way; anchors survive.
    const [path, hash] = href.split('#');
    return localePath(locale, path) + (hash ? `#${hash}` : '');
  }
  return href;
}

/** French puts a space before : ; ! ? and inside « »: keep those spaces from breaking a line. */
export function typeset(text: string, locale: Locale): string {
  if (locale !== 'fr') return text;
  return text.replace(/ ([:;!?»])/g, '\u00a0$1').replace(/« /g, '«\u00a0');
}

export function renderInline(text: string, locale: Locale): ReactNode[] {
  text = typeset(text, locale);
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(token)) {
    const at = match.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    const raw = match[0];
    if (raw.startsWith('`')) out.push(<code key={key++}>{raw.slice(1, -1)}</code>);
    else if (raw.startsWith('**')) out.push(<strong key={key++}>{raw.slice(2, -2)}</strong>);
    else if (raw.startsWith('{{')) out.push(<kbd key={key++}>{raw.slice(2, -2)}</kbd>);
    else {
      const close = raw.indexOf('](');
      const words = raw.slice(1, close);
      const href = raw.slice(close + 2, -1);
      const external = /^https?:/.test(href);
      out.push(
        <a key={key++} href={resolveHref(href, locale)} {...(external ? { rel: 'noopener', target: '_blank' } : {})}>
          {words}
        </a>,
      );
    }
    last = at + raw.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** The text of an inline string with the markup removed (for meta descriptions and search). */
export function plainText(text: string): string {
  return text.replace(/`([^`]+)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\{\{([^}]+)\}\}/g, '$1');
}

// ---------------------------------------------------------------------------------------------
// Blocks

const calloutGlyph: Record<string, ReactNode> = {
  tip: <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V17h5.2v-1.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Zm-2.6 16h5.2v1a2 2 0 0 1-2 2h-1.2a2 2 0 0 1-2-2v-1Z" fill="currentColor" />,
  note: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1.3 15h-2.6v-6.5h2.6V17Zm-1.3-8.2a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Z" fill="currentColor" />,
  important: <path d="M12 2.5 1.5 20.5h21L12 2.5Zm1.3 15h-2.6v-2.6h2.6v2.6Zm0-4.2h-2.6V8.6h2.6v4.7Z" fill="currentColor" />,
  a11y: <path d="M12 2.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM4 7.6l.6-1.9 7.4 1.8 7.4-1.8.6 1.9-5.4 1.7v4.1l2.5 7.7-1.9.6-2.6-7.3h-1.2l-2.6 7.3-1.9-.6 2.5-7.7V9.3L4 7.6Z" fill="currentColor" />,
};

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  const ui = helpUi[locale];
  const inline = (text: string) => renderInline(text, locale);
  switch (block.t) {
    case 'board':
      return <HelpBoard board={block.board} inline={inline} />;
    case 'entry':
      return <HelpEntry entry={block} inline={inline} />;
    case 'faq':
      return <HelpFaq items={block.items} inline={inline} />;
    case 'path':
      return <HelpPath items={block.items} inline={inline} />;
    case 'friend':
      return <HelpFriend friend={block.friend} pose={block.pose} title={block.title} text={block.text} inline={inline} />;
    case 'p':
      return <p>{renderInline(block.text, locale)}</p>;
    case 'h3':
      return <h3>{renderInline(block.text, locale)}</h3>;
    case 'steps':
      return (
        <ol className="hc-steps">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="n" aria-hidden="true">{i + 1}</span>
              <span>{renderInline(item, locale)}</span>
            </li>
          ))}
        </ol>
      );
    case 'list':
      return (
        <ul className="points">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item, locale)}</li>
          ))}
        </ul>
      );
    case 'shot':
      return <Shot id={block.id} alt={block.alt} caption={block.caption} locale={locale} />;
    case 'shots':
      return (
        <div className={`hc-gallery n${Math.min(block.items.length, 3)}`}>
          {block.items.map((item) => (
            <Shot key={item.id} id={item.id} alt={item.alt} caption={item.caption} locale={locale} />
          ))}
        </div>
      );
    case 'callout':
      return (
        <div className={`hc-callout ${block.kind}`} role="note">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
            {calloutGlyph[block.kind]}
          </svg>
          <div>
            <p className="label">{block.title ? renderInline(block.title, locale) : ui.callout[block.kind]}</p>
            <p>{renderInline(block.text, locale)}</p>
          </div>
        </div>
      );
    case 'table':
      return (
        <div className="hc-table">
          <table>
            {block.caption ? <caption>{renderInline(block.caption, locale)}</caption> : null}
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i} scope="col">{renderInline(cell, locale)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row">{renderInline(cell, locale)}</th>
                    ) : (
                      <td key={c}>{renderInline(cell, locale)}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'defs':
      return (
        <dl className="hc-defs">
          {block.items.map((item, i) => (
            <div key={i}>
              <dt>{renderInline(item.term, locale)}</dt>
              <dd>{renderInline(item.text, locale)}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

// ---------------------------------------------------------------------------------------------
// Shared furniture

export function Frame({ locale, page, current, children }: { locale: Locale; page: string; current?: string; children: ReactNode }) {
  return (
    <div className="ob-site hc-site">
      <a className="skip" href="#main">{chromeCopy[locale].skip}</a>
      <VillageHeader
        links={editorialNavFor(locale)}
        current={current ?? communityPath(locale)}
        home={localePath(locale, '/')}
        label={locale === 'en' ? 'Primary navigation' : chromeCopy[locale].primaryNav}
        locale={locale}
      />
      <main id="main" className="hc">{children}</main>
      <VillageFooter locale={locale} page={page} />
    </div>
  );
}

export function Crumbs({ locale, items }: { locale: Locale; items: { href?: string; label: string }[] }) {
  return (
    <nav className="hc-crumbs" aria-label={helpUi[locale].breadcrumb}>
      <ol>
        {items.map((item, i) =>
          item.href && i < items.length - 1 ? (
            <li key={i}><a href={item.href}>{item.label}</a></li>
          ) : (
            <li key={i} aria-current="page">{item.label}</li>
          ),
        )}
      </ol>
    </nav>
  );
}

function bugHref(locale: Locale) {
  return communityPath(locale, '/new?category=bugs');
}

function HelpDesk({ locale }: { locale: Locale }) {
  const ui = helpUi[locale];
  return (
    <section className="hc-desk" aria-labelledby="hc-desk-title">
      <h2 id="hc-desk-title" className="sr-only">{ui.askTitle}</h2>
      <div className="brick ask">
        <h3>{ui.askTitle}</h3>
        <p>{ui.askText}</p>
        <a className="btn" href={communityPath(locale, '/new?category=help')}>{ui.askAction}</a>
      </div>
      <div className="brick bug">
        <h3>{ui.bugTitle}</h3>
        <p>{ui.bugText}</p>
        <a className="btn ghost" href={bugHref(locale)}>{ui.bugAction}</a>
      </div>
      <div className="brick mail">
        <h3>{ui.contactTitle}</h3>
        <p>{ui.contactText}</p>
        <a className="btn ghost" href={localePath(locale, '/contact')}>{ui.contactAction}</a>
      </div>
    </section>
  );
}

function GuideCard({ article, locale, headingLevel = 3 }: { article: HelpArticle; locale: Locale; headingLevel?: 2 | 3 }) {
  const ui = helpUi[locale];
  const H = headingLevel === 2 ? 'h2' : 'h3';
  const cover = article.cover ? shotSource(article.cover, locale) : null;
  return (
    <li className="hc-card brick" data-help-item="">
      {cover ? (
        <span className={`thumb${cover.info.w > cover.info.h ? ' wide' : ''}`} aria-hidden="true" style={{ ['--ar' as string]: `${cover.info.w} / ${cover.info.h}` }}>
          <img src={cover.small} width={cover.info.w} height={cover.info.h} alt="" loading="lazy" decoding="async" />
        </span>
      ) : null}
      <span className="body">
        <H>
          <a href={guidePath(locale, article.slug)}>{article.title}</a>
        </H>
        <span className="sum">{plainText(article.summary)}</span>
        <span className="meta">{ui.minutes(readingMinutes(article, locale))}</span>
        {/* Search data for the hub's finder (titles of sections, synonyms in two languages): never shown or read aloud. */}
        <span hidden aria-hidden="true">
          {article.sections.map((s) => s.title).join(' · ')} {article.keywords ?? ''}
        </span>
      </span>
    </li>
  );
}

// ---------------------------------------------------------------------------------------------
// The hub

export function helpHubMetadata(locale: Locale): Metadata {
  const ui = helpUi[locale];
  const url = `${siteUrl}${hubPath(locale)}`;
  const image = `${siteUrl}${shotSource('home', locale).large}`;
  return {
    title: { absolute: ui.metaTitle },
    description: metaText(ui.metaDescription, locale),
    alternates: localeAlternates(locale, helpBase),
    robots: { index: true, follow: true },
    openGraph: { type: 'website', siteName: 'OutBrick', url, title: ui.metaTitle, description: metaText(ui.metaDescription, locale), locale: ogLocales[locale], images: [{ url: image, alt: ui.name }] },
    twitter: { card: 'summary_large_image', title: ui.metaTitle, description: metaText(ui.metaDescription, locale), images: [{ url: image, alt: ui.name }] },
  };
}

const crew: FriendId[] = ['bloo', 'peach', 'sprout', 'bricko', 'flurry', 'moss', 'poppy', 'vio', 'zippy'];

/** Three doors for the three reasons people arrive: new, stuck, or something is wrong. */
function QuickStart({ locale }: { locale: Locale }) {
  const ui = helpUi[locale];
  const doors = [
    { key: 'new', friend: 'sprout' as FriendId, href: guidePath(locale, 'first-week'), ...ui.quick.new },
    { key: 'stuck', friend: 'peach' as FriendId, href: localePath(locale, '/support/levels'), ...ui.quick.stuck },
    { key: 'wrong', friend: 'moss' as FriendId, href: localePath(locale, '/support/troubleshooter'), ...ui.quick.wrong },
  ];
  return (
    <nav className="hc-quick" aria-label={ui.quick.label}>
      <ul>
        {doors.map((d) => (
          <li key={d.key}>
            <a className={`hc-quick-door q-${d.key}`} href={d.href}>
              <span className="fig" aria-hidden="true"><FriendFigure id={d.friend} pose={d.key === 'wrong' ? 'think' : 'idle'} size={80} /></span>
              <span className="t">{d.title}</span>
              <span className="d">{d.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function HelpHub({ locale }: { locale: Locale }) {
  const ui = helpUi[locale];
  const articles = helpArticles(locale);
  const url = `${siteUrl}${hubPath(locale)}`;
  return (
    <Frame locale={locale} page={helpBase}>
      <div className="doc-head hc-head hub">
        <div className="wrap">
          <Crumbs
            locale={locale}
            items={[
              { href: localePath(locale, '/'), label: 'OutBrick' },
              { href: communityPath(locale), label: ui.communityCrumb },
              { label: ui.name },
            ]}
          />
          <Course />
          <p className="eyebrow">{ui.eyebrow}</p>
          <h1>{ui.hubTitle}</h1>
          <p className="lede">{ui.hubLede}</p>
          <p className="stamp">{ui.checked(helpCheckpoint.version, stampDate(locale, helpCheckpoint.day))}</p>
        </div>
        <div className="hc-crew" aria-hidden="true">
          {crew.map((id, i) => (
            <span key={id} className="hc-crew-spot" style={{ ['--i' as string]: i }}>
              <FriendFigure id={id} pose={i % 3 === 1 ? 'think' : 'idle'} size={84} />
            </span>
          ))}
        </div>
        <div className="road" aria-hidden="true" />
      </div>

      <div className="band-cream hc-band" data-help-root="">
        <div className="wrap">
          <div className="hc-search-row">
            <HelpFinder label={ui.searchHint} placeholder={ui.searchPlaceholder} empty={ui.searchEmpty} one={ui.searchOne} many={ui.searchMany} />
            <nav className="hc-popular" aria-labelledby="hc-popular">
              <p id="hc-popular" className="label">{ui.popular}</p>
              <ul>
                {ui.popularLinks.map((link) => (
                  <li key={link.label}>
                    <a href={guidePath(locale, link.slug) + (link.section ? `#${link.section}` : '')}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <QuickStart locale={locale} />

          {helpCategories.map((category) => {
            const inCategory = articles.filter((a) => a.category === category);
            if (!inCategory.length) return null;
            const host = categoryHosts[category];
            return (
              <section key={category} className={`hc-cat cat-${category}`} data-help-group="" aria-labelledby={`cat-${category}`}>
                <div className="hc-cat-head">
                  <span className="hc-cat-host" aria-hidden="true"><FriendFigure id={host.friend} pose={host.pose} size={72} /></span>
                  <h2 id={`cat-${category}`}>{ui.categories[category].title}</h2>
                  <p>
                    {ui.categories[category].blurb} <span className="count">{ui.guides(inCategory.length)}</span>
                  </p>
                </div>
                <ul className="hc-cards">
                  {inCategory.map((article) => (
                    <GuideCard key={article.slug} article={article} locale={locale} />
                  ))}
                </ul>
              </section>
            );
          })}

          <HelpDesk locale={locale} />
        </div>
      </div>

      <JsonLd
        data={graph(
          webPageNode({
            type: 'CollectionPage',
            url,
            name: ui.name,
            description: ui.metaDescription,
            inLanguage: locale,
            hasPart: articles.map((a) => ({ '@type': 'TechArticle', headline: a.title, url: `${siteUrl}${guidePath(locale, a.slug)}` })),
          }),
          breadcrumbNode(url, [
            { name: 'OutBrick', path: localePath(locale, '/') },
            { name: ui.communityCrumb, path: communityPath(locale) },
            { name: ui.name, path: hubPath(locale) },
          ]),
        )}
      />
    </Frame>
  );
}

// ---------------------------------------------------------------------------------------------
// A guide

export function helpArticleMetadata(locale: Locale, slug: string): Metadata {
  const article = helpArticle(locale, slug);
  if (!article) return {};
  const url = `${siteUrl}${guidePath(locale, slug)}`;
  // A short guide title gets the Help Centre's name too, so the page title says what it is.
  const plainTitle = `${article.title} · OutBrick`;
  const weight = plainTitle.length + (plainTitle.match(/[\u3000-\u9fff\uff00-\uffef]/g)?.length ?? 0);
  // …and a long one drops the suffix, so search results show it whole.
  const title = weight < 34 ? `${article.title} · OutBrick ${helpUi[locale].name}` : weight > 65 ? article.title : plainTitle;
  const description = metaText(article.summary, locale);
  const image = `${siteUrl}${shotSource(article.cover ?? 'home', locale).large}`;
  // Only languages with their own translation are offered as alternates.
  const alternates = localeAlternates(locale, `${helpBase}/${slug}`);
  if (alternates.languages) {
    for (const l of locales) if (l !== 'en' && !isTranslated(l, slug)) delete (alternates.languages as Record<string, string>)[l];
  }
  return {
    title: { absolute: title },
    description,
    alternates,
    robots: { index: isTranslated(locale, slug), follow: true },
    openGraph: { type: 'article', siteName: 'OutBrick', url, title: article.title, description, locale: ogLocales[locale], images: [{ url: image, alt: article.title }] },
    twitter: { card: 'summary_large_image', title: article.title, description, images: [{ url: image, alt: article.title }] },
  };
}

export function HelpArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const ui = helpUi[locale];
  const all = helpArticles(locale);
  const index = all.findIndex((a) => a.slug === slug);
  const article = all[index];
  if (!article) throw new Error(`[help] no guide "${slug}"`);
  const previous = index > 0 ? all[index - 1] : undefined;
  const next = index < all.length - 1 ? all[index + 1] : undefined;
  const related = article.related.map((s) => all.find((a) => a.slug === s)).filter((a): a is HelpArticle => Boolean(a));
  const url = `${siteUrl}${guidePath(locale, slug)}`;
  const minutes = readingMinutes(article, locale);
  const otherLanguages = locales.filter((l) => l !== locale && isTranslated(l, slug));
  const host = articleHost(article);

  return (
    <Frame locale={locale} page={`${helpBase}/${slug}`}>
      <div className="doc-head hc-head">
        <div className="wrap">
          <Crumbs
            locale={locale}
            items={[
              { href: localePath(locale, '/'), label: 'OutBrick' },
              { href: communityPath(locale), label: ui.communityCrumb },
              { href: hubPath(locale), label: ui.name },
              { label: article.title },
            ]}
          />
          <span className="hc-head-host" aria-hidden="true"><FriendFigure id={host.friend} pose={host.pose} size={120} /></span>
          <p className="eyebrow">{ui.categories[article.category].title}</p>
          <h1 id="hc-title">{typeset(article.title, locale)}</h1>
          <p className="lede">{renderInline(article.summary, locale)}</p>
          <p className="hc-meta">
            <span className="stamp">{ui.checked(helpCheckpoint.version, stampDate(locale, helpCheckpoint.day))}</span>
            <span className="mins">{ui.minutes(minutes)}</span>
          </p>
        </div>
        <div className="road" aria-hidden="true" />
      </div>

      <div className="band-cream hc-band">
        <div className="wrap hc-layout">
          <nav className="hc-toc" aria-labelledby="hc-toc-title">
            <details open>
              <summary id="hc-toc-title">{ui.onThisPage}</summary>
              <ol>
                {article.sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`}>{plainText(section.title)}</a></li>
                ))}
              </ol>
            </details>
            <a className="hc-all" href={hubPath(locale)}>{ui.allGuides}</a>
          </nav>

          <article className="hc-article" aria-labelledby="hc-title">
            {article.sections.map((section, i) => (
              <section key={section.id} id={section.id} className="brick hc-sec" aria-labelledby={`${section.id}-h`}>
                <h2 id={`${section.id}-h`}>
                  <a className="anchor" href={`#${section.id}`} aria-hidden="true" tabIndex={-1}>#</a>
                  {renderInline(section.title, locale)}
                </h2>
                {section.blocks.map((block, b) =>
                  block.t === 'shot' && i === 0 && b < 3 ? (
                    <Shot key={b} id={block.id} alt={block.alt} caption={block.caption} locale={locale} eager />
                  ) : (
                    <BlockView key={b} block={block} locale={locale} />
                  ),
                )}
              </section>
            ))}

            <nav className="hc-pager" aria-label={`${ui.previous} / ${ui.next}`}>
              {previous ? (
                <a className="prev" href={guidePath(locale, previous.slug)} rel="prev">
                  <span className="dir">{ui.previous}</span>
                  <span className="t">{previous.title}</span>
                </a>
              ) : <span />}
              {next ? (
                <a className="next" href={guidePath(locale, next.slug)} rel="next">
                  <span className="dir">{ui.next}</span>
                  <span className="t">{next.title}</span>
                </a>
              ) : null}
            </nav>

            <GuideFeedback
              slug={slug}
              locale={locale}
              copy={supportCopy(locale).feedback}
              contactHref={`${localePath(locale, '/contact')}?topic=support&guide=${slug}`}
              askHref={communityPath(locale, '/new?category=help')}
            />

            {related.length ? (
              <section className="hc-related" aria-labelledby="hc-related">
                <h2 id="hc-related">{ui.related}</h2>
                <ul className="hc-cards compact">
                  {related.map((r) => (
                    <GuideCard key={r.slug} article={r} locale={locale} />
                  ))}
                </ul>
              </section>
            ) : null}

            <p className="hc-promise">{supportCopy(locale).hub.promise}</p>
            <HelpDesk locale={locale} />

            {otherLanguages.length ? (
              <nav className="hc-langs" aria-labelledby="hc-langs">
                <p id="hc-langs" className="label">{ui.alsoIn}</p>
                <ul>
                  {otherLanguages.map((l) => (
                    <li key={l}>
                      <a href={guidePath(l, slug)} hrefLang={l} lang={l}>{localeNames[l]}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </article>
        </div>
      </div>

      <JsonLd
        data={graph(
          webPageNode({
            url,
            name: article.title,
            description: plainText(article.summary),
            inLanguage: locale,
            mainEntity: {
              '@type': 'TechArticle',
              headline: article.title,
              description: plainText(article.summary),
              inLanguage: locale,
              datePublished: helpPublished,
              dateModified: `${helpCheckpoint.day}T12:00:00+00:00`,
              proficiencyLevel: 'Beginner',
              author: ref(ids.organization),
              publisher: ref(ids.organization),
              about: ref(ids.app),
              ...(article.cover ? { image: `${siteUrl}${shotSource(article.cover, locale).large}` } : {}),
            },
          }),
          breadcrumbNode(url, [
            { name: 'OutBrick', path: localePath(locale, '/') },
            { name: ui.communityCrumb, path: communityPath(locale) },
            { name: ui.name, path: hubPath(locale) },
            { name: article.title, path: guidePath(locale, slug) },
          ]),
          localizedApplicationNode(appNode({ url: localeUrl('en', '/') }), locale),
        )}
      />
    </Frame>
  );
}

export { helpOrder } from '../lib/help/model';
/** The guides that exist (in English, the source): a planned slug without content gets no page. */
export const publishedSlugs = (): string[] => helpArticles('en').map((a) => a.slug);
