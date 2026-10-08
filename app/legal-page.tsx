import { localePath, type Locale } from '../lib/i18n/locales';
import type { ReactNode } from 'react';
import { siteUrl } from '../lib/site';
import { breadcrumbNode, graph, isoDay, ref, ids, webPageNode } from '../lib/structured-data';
import { JsonLd } from './editorial-shell';
import { journalUi } from '../lib/i18n/blog';
import { AlsoRead, Course, docNav, VillageFooter, VillageHeader } from './village-shell';

/** The breadcrumb name of each document, and the schema.org page type where it is not a plain WebPage. */
const documents: Record<string, { crumb: string; type?: string }> = {
  '/support': { crumb: 'Support' },
  '/contact': { crumb: 'Contact', type: 'ContactPage' },
  '/privacy': { crumb: 'Privacy policy' },
  '/privacy-choices': { crumb: 'Privacy choices' },
  '/terms': { crumb: 'Terms' },
  '/license-agreement': { crumb: 'License agreement' },
  '/eula': { crumb: 'Apple EULA' },
  '/refunds': { crumb: 'Refunds' },
  '/age-rating': { crumb: 'Age rating' },
  '/accessibility': { crumb: 'Accessibility' },
};

/**
 * A document page: support, privacy, terms, and the rest of the legal shelf.
 *
 * The masthead is the hero's quieter cousin — a running-bond course, the title,
 * the revision stamp and a short paved strip instead of the boulevard — and the
 * reading column below it is a stack of white brick slabs on cream, each with
 * its own depth and foot seam. Children are written with the document classes
 * the village stylesheet defines: `.brick.headline` for the one sentence a page
 * is really about, `<section className="brick">` for a heading and its prose,
 * `ul.points` for a checklist, `ul.pills` for the closing assurance strip, and
 * `.brick.handoff` for the call-out at the foot.
 */
type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  /** The route's own path, so the masthead and the index below can mark it. */
  current?: string;
  children: ReactNode;
  locale?: Locale;
};

export function LegalPage({ eyebrow, title, summary, updated, current, children, locale = 'en' }: LegalPageProps) {
  const url = current ? `${siteUrl}${localePath(locale, current)}` : undefined;
  const ui = { en: ['Skip to content', 'Help and legal', 'Back to OutBrick', 'Updated'], fr: ['Aller au contenu', 'Aide et informations juridiques', 'Retour à OutBrick', 'Mis à jour le'], de: ['Zum Inhalt springen', 'Hilfe und Rechtliches', 'Zurück zu OutBrick', 'Aktualisiert am'], es: ['Ir al contenido', 'Ayuda e información legal', 'Volver a OutBrick', 'Actualizado el'], ja: ['本文へ移動', 'ヘルプと法的情報', 'OutBrickに戻る', '更新日'], 'pt-BR': ['Pular para o conteúdo', 'Ajuda e informações legais', 'Voltar ao OutBrick', 'Atualizado em'] }[locale];
  const day = isoDay(updated);
  const stamp = locale === 'en' ? updated : new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(day + 'T12:00:00Z'));
  const doc = current ? documents[current] : undefined;
  const structuredData = url
    ? graph(
        webPageNode({
          type: doc?.type ?? 'WebPage',
          url,
          name: eyebrow,
          description: summary,
          dateModified: isoDay(updated),
          about: ref(ids.organization),
        }),
        breadcrumbNode(url, [
          { name: 'OutBrick', path: localePath(locale, '/') },
          { name: doc?.crumb ?? eyebrow, path: localePath(locale, current!) },
        ]),
      )
    : null;
  return (
    <div className="ob-site">
      <a className="skip" href="#main">{ui[0]}</a>
      <VillageHeader links={docNav} current={current} label={ui[1]} locale={locale} />

      <main id="main">
        <div className="doc-head">
          <div className="wrap">
            {current ? (
              // The visible trail the BreadcrumbList below describes: home, then this document.
              <nav className="doc-crumbs" aria-label={locale === 'en' ? 'Breadcrumb' : journalUi[locale].breadcrumb}>
                <ol>
                  <li><a href={localePath(locale, '/')}>OutBrick</a></li>
                  <li aria-current="page">{doc?.crumb ?? eyebrow}</li>
                </ol>
              </nav>
            ) : (
              <a className="backlink" href={localePath(locale, '/')}>{ui[2]}</a>
            )}
            <Course />
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="lede">{summary}</p>
            <p className="stamp">{ui[3]} {stamp}</p>
          </div>
          <div className="road" aria-hidden="true" />
        </div>

        <div className="doc band-cream">
          <div className="wrap">
            <div className="column">{children}</div>
          </div>
        </div>

        <AlsoRead current={current} locale={locale} />
      </main>

      <VillageFooter locale={locale} page={current} />
      {structuredData ? <JsonLd data={structuredData} /> : null}
    </div>
  );
}

/**
 * A link to a page the localized page tree does not prefix by itself (the community lives outside
 * the public-page roots). `locale` is supplied when the page is rendered in another language.
 */
export function SiteLink({ path, children, locale = 'en' }: { path: string; children: ReactNode; locale?: Locale }) {
  return <a href={localePath(locale, path)}>{children}</a>;
}

/** The assurance strip a document closes a section with. */
export function Pills({ items }: { items: string[] }) {
  return (
    <ul className="pills">
      {items.map((item) => (
        <li key={item}><span className="chip" aria-hidden="true" />{item}</li>
      ))}
    </ul>
  );
}

/** The two-line call-out card at the foot of a page. */
export function Handoff({ title, note, action, href }: { title: string; note: string; action: string; href: string }) {
  return (
    <div className="brick handoff">
      <div>
        <b>{title}</b>
        <span>{note}</span>
      </div>
      <a className="btn" href={href}>{action}</a>
    </div>
  );
}
