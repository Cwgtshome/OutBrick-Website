/**
 * The Support Centre: the pages that help a player *do* something about a problem.
 *
 *   /support/troubleshooter   step-by-step fixes, built from the Help Centre's troubleshooting guide
 *   /support/known-issues     what is broken, what to do meanwhile, and which update fixes it
 *   /support/request          a player's own support request, opened from the link in our emails
 *
 * plus the three-way hub shown on /support and /contact (`SupportHub`) and the contact form's
 * help (`ContactFormWithHelp`). Every page exists in all six languages: the words are in
 * lib/support/copy/<locale>.ts and lib/support/issues/<locale>.ts, the troubleshooting steps in
 * the Help Centre's own translations. Styles: app/styles/support.css, on top of help.css.
 */

import type { Metadata } from 'next';
import { communityPath } from '../lib/community/contract';
import { localeAlternates, localePath, localeUrl, ogLocales, type Locale } from '../lib/i18n/locales';
import { siteUrl } from '../lib/site';
import { breadcrumbNode, graph, webPageNode } from '../lib/structured-data';
import { helpBase } from './help-centre';
import { Crumbs, Frame, metaText, renderInline, stampDate } from './help-centre';
import { JsonLd } from './editorial-shell';
import { issuesReviewed, knownIssues, suggestionIndex, supportCopy, troubleshooter, TROUBLESHOOTING } from '../lib/support/content';
import type { KnownIssue } from '../lib/support/model';
import { GuideFeedback } from './components/support/guide-feedback';
import { Troubleshooter } from './components/support/troubleshooter';
import { CaseTracker } from './components/support/case-tracker';
import { ContactForm } from './(en)/contact/contact-form';
import './styles/help.css';
import './styles/support.css';

export const supportPaths = {
  support: '/support',
  fix: '/support/troubleshooter',
  issues: '/support/known-issues',
  request: '/support/request',
} as const;

const at = (locale: Locale, path: string) => localePath(locale, path);

function pageMetadata(locale: Locale, path: string, title: string, description: string, index = true): Metadata {
  const url = localeUrl(locale, path);
  const image = `${siteUrl}/og.png`;
  return {
    title: { absolute: title },
    description: metaText(description, locale),
    alternates: localeAlternates(locale, path),
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
    ...(index ? {} : { referrer: 'same-origin' as const }),
    openGraph: { type: 'website', siteName: 'OutBrick', url, title, description: metaText(description, locale), locale: ogLocales[locale], images: [{ url: image, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description: metaText(description, locale), images: [{ url: image, alt: title }] },
  };
}

function Head({ locale, title, eyebrow, lede, crumb, stamp }: { locale: Locale; title: string; eyebrow: string; lede: string; crumb: string; stamp?: string }) {
  const c = supportCopy(locale);
  return (
    <div className="doc-head hc-head ss-head">
      <div className="wrap">
        <Crumbs
          locale={locale}
          items={[
            { href: at(locale, '/'), label: 'OutBrick' },
            { href: at(locale, supportPaths.support), label: c.supportCrumb },
            { label: crumb },
          ]}
        />
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="ss-title">{title}</h1>
        <p className="lede">{lede}</p>
        {stamp ? <p className="hc-meta"><span className="stamp">{stamp}</span></p> : null}
      </div>
      <div className="road" aria-hidden="true" />
    </div>
  );
}

function PageGraph({ locale, path, name, description, crumb }: { locale: Locale; path: string; name: string; description: string; crumb: string }) {
  const url = localeUrl(locale, path);
  return (
    <JsonLd
      data={graph(
        webPageNode({ url, name, description, inLanguage: locale }),
        breadcrumbNode(url, [
          { name: 'OutBrick', path: at(locale, '/') },
          { name: supportCopy(locale).supportCrumb, path: at(locale, supportPaths.support) },
          { name: crumb, path: at(locale, path) },
        ]),
      )}
    />
  );
}

function feedbackLinks(locale: Locale) {
  return { contactHref: at(locale, '/contact'), askHref: communityPath(locale, '/new?category=help') };
}

// ---------------------------------------------------------------------------------------------
// The hub: three doors, on /support and /contact.

const hubIcons = {
  fix: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  issues: <path d="M12 3 2 20h20L12 3Zm0 6v5m0 3v.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  track: <path d="M4 5h16v10H8l-4 4V5Zm4 4h8m-8 3h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
};

export function SupportHub({ locale = 'en' }: { locale?: Locale }) {
  const c = supportCopy(locale).hub;
  const open = knownIssues(locale).filter((i) => i.status !== 'fixed').length;
  const doors = [
    { key: 'fix' as const, href: at(locale, supportPaths.fix), title: c.fixTitle, text: c.fixText },
    { key: 'issues' as const, href: at(locale, supportPaths.issues), title: c.issuesTitle, text: c.issuesText, count: open },
    { key: 'track' as const, href: at(locale, supportPaths.request), title: c.trackTitle, text: c.trackText },
  ];
  return (
    <section className="ss-hub" aria-labelledby="ss-hub-title" translate="yes">
      <h2 id="ss-hub-title">{c.title}</h2>
      <p className="ss-hub-lede">{c.lede}</p>
      <ul>
        {doors.map((d) => (
          <li key={d.key}>
            <a className={`ss-door ${d.key}`} href={d.href}>
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">{hubIcons[d.key]}</svg>
              <span className="t">
                {d.title}
                {d.count ? <span className="ss-count">{d.count}</span> : null}
              </span>
              <span className="d">{d.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------------------------------------------------------------------------------------------
// Known issues

export function knownIssuesMetadata(locale: Locale): Metadata {
  const c = supportCopy(locale).issues;
  return pageMetadata(locale, supportPaths.issues, c.metaTitle, c.metaDescription);
}

function IssueCard({ issue, locale }: { issue: KnownIssue; locale: Locale }) {
  const c = supportCopy(locale).issues;
  return (
    <article id={issue.id} className={`brick ss-issue st-${issue.status}`} aria-labelledby={`${issue.id}-h`}>
      <p className={`ss-pill st-${issue.status}`}>{c.status[issue.status]}</p>
      <h3 id={`${issue.id}-h`}>{renderInline(issue.title, locale)}</h3>
      <dl className="ss-issue-facts">
        <div><dt>{c.affects}</dt><dd>{renderInline(issue.affects, locale)}</dd></div>
        <div><dt>{c.whatHappens}</dt><dd>{renderInline(issue.what, locale)}</dd></div>
        {issue.workaround.length ? (
          <div>
            <dt>{c.workaround}</dt>
            <dd>
              <ul className="points">
                {issue.workaround.map((w, i) => <li key={i}>{renderInline(w, locale)}</li>)}
              </ul>
            </dd>
          </div>
        ) : null}
        <div className="fix"><dt>{c.fix}</dt><dd>{renderInline(issue.fix, locale)}</dd></div>
      </dl>
      {issue.more ? <p className="ss-more">{renderInline(`[${c.readMore}](${issue.more})`, locale)}</p> : null}
    </article>
  );
}

export function KnownIssuesPage({ locale }: { locale: Locale }) {
  const c = supportCopy(locale).issues;
  const all = knownIssues(locale);
  const open = all.filter((i) => i.status !== 'fixed');
  const fixed = all.filter((i) => i.status === 'fixed');
  return (
    <Frame locale={locale} page={supportPaths.issues} current={at(locale, supportPaths.support)}>
      <Head locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} stamp={c.reviewed(stampDate(locale, issuesReviewed()))} />
      <div className="band-cream hc-band">
        <div className="wrap ss-narrow">
          <section aria-labelledby="ss-open" className="ss-issues">
            <h2 id="ss-open">{c.openTitle}</h2>
            {open.length ? open.map((i) => <IssueCard key={i.id} issue={i} locale={locale} />) : <p className="brick ss-none">{c.noneOpen}</p>}
          </section>
          {fixed.length ? (
            <section aria-labelledby="ss-fixed" className="ss-issues">
              <h2 id="ss-fixed">{c.resolvedTitle}</h2>
              {fixed.map((i) => <IssueCard key={i.id} issue={i} locale={locale} />)}
            </section>
          ) : null}
          <section className="hc-desk ss-desk-2" aria-label={c.notListedTitle}>
            <div className="brick ask">
              <h3>{c.notListedTitle}</h3>
              <p>{c.notListedText}</p>
              <div className="act">
                <a className="btn" href={communityPath(locale, '/new?category=bugs')}>{c.reportAction}</a>
                <a className="btn ghost" href={`${at(locale, '/contact')}?topic=bug`}>{c.contactAction}</a>
              </div>
            </div>
            <div className="brick mail">
              <h3>{c.stayTitle}</h3>
              <p>{c.stayText}</p>
              <a className="btn ghost" href={communityPath(locale, '/c/announcements')}>{c.stayAction}</a>
            </div>
          </section>
          <GuideFeedback slug="known-issues" locale={locale} copy={supportCopy(locale).feedback} page {...feedbackLinks(locale)} />
        </div>
      </div>
      <PageGraph locale={locale} path={supportPaths.issues} name={c.title} description={c.metaDescription} crumb={c.title} />
    </Frame>
  );
}

// ---------------------------------------------------------------------------------------------
// Troubleshooter

export function troubleshooterMetadata(locale: Locale): Metadata {
  const c = supportCopy(locale).fix;
  return pageMetadata(locale, supportPaths.fix, c.metaTitle, c.metaDescription);
}

export function TroubleshooterPage({ locale }: { locale: Locale }) {
  const c = supportCopy(locale).fix;
  const { problems, quickChecks } = troubleshooter(locale);
  const issues = knownIssues(locale);
  return (
    <Frame locale={locale} page={supportPaths.fix} current={at(locale, supportPaths.support)}>
      <Head locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} />
      <div className="band-cream hc-band">
        <div className="wrap ss-narrow">
          <Troubleshooter
            locale={locale}
            problems={problems.map((p) => {
              const issue = p.issue ? issues.find((i) => i.id === p.issue && i.status !== 'fixed') : undefined;
              return {
                id: p.id,
                title: p.title,
                topic: p.topic,
                intro: p.intro.map((s, i) => <span key={i}>{renderInline(s, locale)}</span>),
                steps: p.steps.map((s, i) => <span key={i}>{renderInline(s, locale)}</span>),
                issue: issue ? { title: issue.title, href: `${at(locale, supportPaths.issues)}#${issue.id}` } : undefined,
              };
            })}
            quickChecks={quickChecks.map((s, i) => <span key={i}>{renderInline(s, locale)}</span>)}
            links={{
              contact: at(locale, '/contact'),
              ask: communityPath(locale, '/new?category=help'),
              bug: communityPath(locale, '/new?category=bugs'),
              guide: at(locale, `${helpBase}/${TROUBLESHOOTING}`),
            }}
          />
          <GuideFeedback slug="troubleshooter" locale={locale} copy={supportCopy(locale).feedback} page {...feedbackLinks(locale)} />
        </div>
      </div>
      <PageGraph locale={locale} path={supportPaths.fix} name={c.title} description={c.metaDescription} crumb={c.title} />
    </Frame>
  );
}

// ---------------------------------------------------------------------------------------------
// A player's request

export function requestMetadata(locale: Locale): Metadata {
  const c = supportCopy(locale).request;
  // Private by nature: the page shows nothing without a signed link, so it is not indexed.
  return pageMetadata(locale, supportPaths.request, c.metaTitle, c.metaDescription, false);
}

export function RequestPage({ locale }: { locale: Locale }) {
  const c = supportCopy(locale).request;
  return (
    <Frame locale={locale} page={supportPaths.request} current={at(locale, supportPaths.support)}>
      <Head locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} />
      <div className="band-cream hc-band">
        <div className="wrap ss-narrow">
          <CaseTracker locale={locale} contactHref={at(locale, '/contact')} />
        </div>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------------------------
// The contact form, with suggestions from the guides, the troubleshooter and known issues.

export function ContactFormWithHelp({ locale = 'en' }: { locale?: Locale }) {
  const index = suggestionIndex(locale, {
    guide: (slug) => at(locale, `${helpBase}/${slug}`),
    fix: (id) => `${at(locale, supportPaths.fix)}?problem=${id}`,
    issue: (id) => `${at(locale, supportPaths.issues)}#${id}`,
  });
  return <ContactForm locale={locale} suggestions={index} trackHref={at(locale, supportPaths.request)} />;
}
