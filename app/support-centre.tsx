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
import { helpUi } from '../lib/help/ui';
import { Crumbs, Frame, metaText, renderInline, stampDate } from './help-centre';
import { JsonLd } from './editorial-shell';
import { issuesReviewed, knownIssues, suggestionIndex, supportCopy, troubleshooter, TROUBLESHOOTING } from '../lib/support/content';
import type { KnownIssue } from '../lib/support/model';
import { GuideFeedback } from './components/support/guide-feedback';
import { Troubleshooter } from './components/support/troubleshooter';
import { CaseTracker } from './components/support/case-tracker';
import { LevelHelp } from './components/support/level-help';
import { MeToo } from './components/support/me-too';
import { FriendFigure } from './help-blocks';
import type { FriendId, FriendPose } from '../lib/help/model';
import { ContactForm } from './(en)/contact/contact-form';
import './styles/help.css';
import './styles/help-blocks.css';
import './styles/support.css';

export const supportPaths = {
  support: '/support',
  fix: '/support/troubleshooter',
  issues: '/support/known-issues',
  request: '/support/request',
  levels: '/support/levels',
  involved: '/support/get-involved',
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

function Head({ locale, title, eyebrow, lede, crumb, stamp, host }: { locale: Locale; title: string; eyebrow: string; lede: string; crumb: string; stamp?: string; host?: keyof typeof doorHosts }) {
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
        {host ? <span className="hc-head-host" aria-hidden="true"><FriendFigure id={doorHosts[host].friend} pose={doorHosts[host].pose} size={120} /></span> : null}
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

/** Each door is held by the friend whose character fits the job (pose and movement only). */
const doorHosts: Record<string, { friend: FriendId; pose: FriendPose }> = {
  fix: { friend: 'moss', pose: 'think' },
  issues: { friend: 'peach', pose: 'think' },
  track: { friend: 'bloo', pose: 'idle' },
  levels: { friend: 'sprout', pose: 'think' },
  guides: { friend: 'poppy', pose: 'idle' },
  involved: { friend: 'vio', pose: 'idle' },
};

export function SupportHub({ locale = 'en' }: { locale?: Locale }) {
  const c = supportCopy(locale).hub;
  const open = knownIssues(locale).filter((i) => i.status !== 'fixed').length;
  const doors = [
    { key: 'fix', href: at(locale, supportPaths.fix), title: c.fixTitle, text: c.fixText },
    { key: 'issues', href: at(locale, supportPaths.issues), title: c.issuesTitle, text: c.issuesText, count: open },
    { key: 'track', href: at(locale, supportPaths.request), title: c.trackTitle, text: c.trackText },
    { key: 'levels', href: at(locale, supportPaths.levels), title: c.levelsTitle, text: c.levelsText },
    { key: 'guides', href: at(locale, '/community/help'), title: helpUi[locale].name, text: helpUi[locale].categories.learn.blurb },
    { key: 'involved', href: at(locale, supportPaths.involved), title: c.involvedTitle, text: c.involvedText },
  ];
  return (
    <section className="ss-hub" aria-labelledby="ss-hub-title">
      <h2 id="ss-hub-title">{c.title}</h2>
      <p className="ss-hub-lede">{c.lede}</p>
      <ul>
        {doors.map((d) => (
          <li key={d.key}>
            <a className={`ss-door ${d.key}`} href={d.href}>
              <span className="ss-door-fig" aria-hidden="true"><FriendFigure id={doorHosts[d.key].friend} pose={doorHosts[d.key].pose} size={84} /></span>
              <span className="t">
                {d.title}
                {d.count ? <span className="ss-count">{d.count}</span> : null}
              </span>
              <span className="d">{d.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="ss-promise">{c.promise}</p>
    </section>
  );
}

// ---------------------------------------------------------------------------------------------
// Known issues

export function knownIssuesMetadata(locale: Locale): Metadata {
  const c = supportCopy(locale).issues;
  const meta = pageMetadata(locale, supportPaths.issues, c.metaTitle, c.metaDescription);
  return { ...meta, alternates: { ...meta.alternates, types: { 'application/rss+xml': `${localeUrl(locale, supportPaths.issues)}/feed.xml` } } };
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
      <p className="ss-checked">{c.checked}: <time dateTime={issue.checked}>{stampDate(locale, issue.checked)}</time></p>
      {issue.more ? <p className="ss-more">{renderInline(`[${c.readMore}](${issue.more})`, locale)}</p> : null}
      {issue.status !== 'fixed' ? <MeToo id={issue.id} locale={locale} /> : null}
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
      <Head host="issues" locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} stamp={c.reviewed(stampDate(locale, issuesReviewed()))} />
      <div className="band-cream hc-band">
        <div className="wrap ss-narrow">
          <p className="ss-feed"><a href={`${at(locale, supportPaths.issues)}/feed.xml`} type="application/rss+xml">{c.feed}</a></p>
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
          <p className="ss-apple">{renderInline(c.apple, locale)}</p>
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
      <Head host="fix" locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} />
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
      <Head host="track" locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} />
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

// ---------------------------------------------------------------------------------------------
// Help with a level

export function levelsMetadata(locale: Locale): Metadata {
  const c = supportCopy(locale).levels;
  return pageMetadata(locale, supportPaths.levels, c.metaTitle, c.metaDescription);
}

export function LevelsPage({ locale }: { locale: Locale }) {
  const c = supportCopy(locale).levels;
  return (
    <Frame locale={locale} page={supportPaths.levels} current={at(locale, supportPaths.support)}>
      <Head host="levels" locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} />
      <div className="band-cream hc-band">
        <div className="wrap ss-narrow ss-levels">
          <LevelHelp locale={locale} communityBase={communityPath(locale)} />
          <section className="brick ss-level-tips" aria-labelledby="ss-tips">
            <h2 id="ss-tips">{c.tipsTitle}</h2>
            <ul className="points">
              {c.tips.map((tip, i) => <li key={i}>{renderInline(tip, locale)}</li>)}
            </ul>
            <h3>{c.spoilersTitle}</h3>
            <p>{c.spoilersText}</p>
          </section>
          <GuideFeedback slug="levels" locale={locale} copy={supportCopy(locale).feedback} page {...feedbackLinks(locale)} />
        </div>
      </div>
      <PageGraph locale={locale} path={supportPaths.levels} name={c.title} description={c.metaDescription} crumb={c.title} />
    </Frame>
  );
}

// ---------------------------------------------------------------------------------------------
// Help shape OutBrick

export function involvedMetadata(locale: Locale): Metadata {
  const c = supportCopy(locale).involved;
  return pageMetadata(locale, supportPaths.involved, c.metaTitle, c.metaDescription);
}

export function InvolvedPage({ locale }: { locale: Locale }) {
  const c = supportCopy(locale).involved;
  const card = (key: 'beta' | 'panel', topic: string) => (
    <section className={`brick ss-programme ${key}`} aria-labelledby={`ss-${key}`}>
      <h2 id={`ss-${key}`}>{c[key].title}</h2>
      <p>{c[key].text}</p>
      <ul className="points">
        {c[key].points.map((p, i) => <li key={i}>{renderInline(p, locale)}</li>)}
      </ul>
      <div className="act">
        <a className="btn" href={`${at(locale, '/contact')}?topic=${topic}#form`}>{c[key].action}</a>
      </div>
    </section>
  );
  return (
    <Frame locale={locale} page={supportPaths.involved} current={at(locale, supportPaths.support)}>
      <Head host="involved" locale={locale} title={c.title} eyebrow={c.eyebrow} lede={c.lede} crumb={c.title} />
      <div className="band-cream hc-band">
        <div className="wrap ss-narrow">
          <div className="ss-programmes">
            {card('beta', 'beta')}
            {card('panel', 'accessibility-panel')}
            <section className="brick ss-programme monthly" aria-labelledby="ss-monthly">
              <h2 id="ss-monthly">{c.monthly.title}</h2>
              <p>{c.monthly.text}</p>
              <div className="act">
                <a className="btn" href={communityPath(locale, '/c/announcements')}>{c.monthly.followAction}</a>
                <a className="btn ghost" href={at(locale, '/newsletter')}>{c.monthly.newsAction}</a>
              </div>
            </section>
          </div>
          <p className="ss-honest">{c.honest}</p>
        </div>
      </div>
      <PageGraph locale={locale} path={supportPaths.involved} name={c.title} description={c.metaDescription} crumb={c.title} />
    </Frame>
  );
}
