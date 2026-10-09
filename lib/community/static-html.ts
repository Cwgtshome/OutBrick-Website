/**
 * The community's server-rendered HTML, as strings: the part of each page that is readable
 * before (and without) script.
 *
 * Two places render it. The prerendered shells (app/community-shell.tsx) put the home, FAQ or
 * guidelines version inside `<div data-cm-static>` with dangerouslySetInnerHTML, and the edge
 * function (netlify/edge-functions/community-thread.ts) swaps a thread into the same slot, between
 * the two marker comments. React never hydrates inside dangerouslySetInnerHTML, which is what lets
 * the edge change it without a hydration mismatch. Once the client app has drawn its own view of
 * the page it hides this slot.
 *
 * The markup and class names are the client views' own (app/components/community/*), so the
 * page does not jump when script takes over. No imports beyond .ts files with no dependencies:
 * the Deno edge runtime loads this file as it is.
 */

import type {
  ThreadDetail,
  Post,
  PublicMember,
  MemberRole,
} from './contract.ts';
import { communityPath, threadPath, pageSize } from './contract.ts';
import {
  categorySlugs,
  categoryColours,
  categoryWords,
  communityCopy,
  type CommunityCopy,
} from '../i18n/community.ts';
import type { Locale } from '../i18n/locales.ts';
import { escapeHtml as e, fullDate, number } from './format.ts';
import { guideWords } from './player-guides.ts';
import { communityFx } from '../i18n/community-fx.ts';

export const STATIC_START = '<!--cm-static-start-->';
export const STATIC_END = '<!--cm-static-end-->';

const courseColours = [
  '#e2352f',
  '#ffc53d',
  '#26b9b0',
  '#7b5cf0',
  '#3b8bf0',
  '#3fc544',
];
const course = `<div class="course" aria-hidden="true">${courseColours.map((c) => `<span style="background:${c}"></span>`).join('')}</div>`;

const home = (locale: Locale) => (locale === 'en' ? '/' : `/${locale}`);

type Crumb = { href?: string; label: string; lang?: string };

function crumbs(copy: CommunityCopy, items: Crumb[]): string {
  return `<nav class="cm-crumbs" aria-label="${e(copy.breadcrumb)}"><ol>${items
    .map((item) =>
      item.href
        ? `<li><a href="${e(item.href)}"${item.lang ? ` lang="${item.lang}"` : ''}>${e(item.label)}</a></li>`
        : `<li><span aria-current="page"${item.lang ? ` lang="${item.lang}"` : ''}>${e(item.label)}</span></li>`,
    )
    .join('')}</ol></nav>`;
}

function head(
  copy: CommunityCopy,
  opts: {
    crumbs: Crumb[];
    title: string;
    lede?: string;
    titleLang?: string;
    extra?: string;
  },
): string {
  return `<div class="cm-head"><div class="wrap">${crumbs(copy, opts.crumbs)}${course}<p class="eyebrow">${e(copy.eyebrow)}</p><h1 class="cm-title" tabindex="-1"${opts.titleLang ? ` lang="${opts.titleLang}"` : ''}>${e(opts.title)}</h1>${opts.lede ? `<p class="lede">${e(opts.lede)}</p>` : ''}${opts.extra ?? ''}</div><div class="road" aria-hidden="true"></div></div>`;
}

const body = (inner: string) =>
  `<div class="cm-body"><div class="wrap">${inner}</div></div>`;
const wrap = (inner: string) => `${STATIC_START}${inner}${STATIC_END}`;

/** The home page before script: the welcome, every category, and where to go next. */
export function homeStaticHtml(locale: Locale): string {
  const copy = communityCopy[locale];
  const cats = categorySlugs
    .map((slug) => {
      const words = copy.categories[slug];
      return `<li class="cm-cat" style="--cat:${categoryColours[slug]}"><h3><a href="${communityPath(locale, `/c/${slug}`)}">${e(words.name)}</a></h3><p>${e(words.description)}</p></li>`;
    })
    .join('');
  return wrap(
    head(copy, {
      crumbs: [
        { href: home(locale), label: 'OutBrick' },
        { label: copy.nav.label },
      ],
      title: copy.home.title,
      lede: copy.home.lede,
    }) +
      body(
        `<ul class="cm-points">${copy.home.points.map((p) => `<li>${e(p)}</li>`).join('')}</ul>` +
          helpCentreHtml(locale) +
          `<noscript><p class="cm-note">${e(copy.home.noScript)}</p></noscript>` +
          `<section class="cm-section" aria-labelledby="cm-cats-h"><h2 id="cm-cats-h">${e(copy.home.categoriesHeading)}</h2><ul class="cm-cats">${cats}</ul></section>` +
          `<p class="cm-links"><a href="${communityPath(locale, '/faq')}">${e(copy.faq.title)}</a> <a href="${communityPath(locale, '/guidelines')}">${e(copy.home.readGuidelines)}</a></p>`,
      ),
  );
}

/** The Help Centre card on the community home, before and after script (HomeView draws the same). */
export function helpCentreHtml(locale: Locale): string {
  const h = communityFx[locale].ux.helpCentre;
  return `<section class="cm-section cm-helpcentre" aria-labelledby="cm-help-centre-h"><h2 id="cm-help-centre-h">${e(h.heading)}</h2><p>${e(h.text)}</p><p class="cm-row"><a class="btn" href="${communityPath(locale, '/help')}">${e(h.link)}</a><a class="cm-textlink" href="${communityPath(locale, '/c/help')}">${e(guideWords[locale].hub)}</a></p></section>`;
}

/** The FAQ before script: the support page's answers. The client adds the community's. */
export function faqStaticHtml(
  locale: Locale,
  supportFaqs: { question: string; answer: string }[],
): string {
  const copy = communityCopy[locale];
  const support = locale === 'en' ? '/support' : `/${locale}/support`;
  return wrap(
    head(copy, {
      crumbs: [
        { href: home(locale), label: 'OutBrick' },
        { href: communityPath(locale), label: copy.nav.label },
        { label: copy.faq.title },
      ],
      title: copy.faq.title,
      lede: copy.faq.lede,
    }) +
      body(
        `<section class="cm-section cm-faq" aria-labelledby="cm-faq-support"><h2 id="cm-faq-support">${e(copy.faq.support)}</h2>${supportFaqs
          .map(
            (f) =>
              `<div class="cm-faq-item"><h3>${e(f.question)}</h3><p>${e(f.answer)}</p></div>`,
          )
          .join(
            '',
          )}<p><a href="${support}">${e(copy.faq.supportLink)}</a></p></section>`,
      ),
  );
}

/** The guidelines: the whole page, before and after script. */
export function guidelinesStaticHtml(locale: Locale): string {
  const copy = communityCopy[locale];
  const g = copy.guidelines;
  return wrap(
    head(copy, {
      crumbs: [
        { href: home(locale), label: 'OutBrick' },
        { href: communityPath(locale), label: copy.nav.label },
        { label: g.title },
      ],
      title: g.title,
      lede: g.lede,
      extra: `<p class="stamp">${e(g.updated)}</p>`,
    }) + body(guidelinesSections(locale)),
  );
}

export function guidelinesSections(locale: Locale): string {
  const copy = communityCopy[locale];
  const privacy = locale === 'en' ? '/privacy' : `/${locale}/privacy`;
  const contact = locale === 'en' ? '/contact' : `/${locale}/contact`;
  return (
    copy.guidelines.sections
      .map(
        (s, i) =>
          `<section class="cm-section cm-guide" aria-labelledby="cm-guide-${i}"><h2 id="cm-guide-${i}">${e(s.heading)}</h2>${s.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}${
            s.points
              ? `<ul class="cm-points">${s.points.map((p) => `<li>${e(p)}</li>`).join('')}</ul>`
              : ''
          }</section>`,
      )
      .join('') +
    `<p class="cm-links"><a href="${privacy}">${e(copy.guidelines.privacy)}</a> <a href="${contact}">${e(copy.guidelines.contact)}</a></p>`
  );
}

// ---------------------------------------------------------------------------------------
// Threads (the edge function)

export function roleBadge(
  copy: CommunityCopy,
  role: MemberRole,
): string | null {
  if (role === 'team' || role === 'admin') return copy.roles.team;
  if (role === 'moderator') return copy.roles.moderator;
  return null;
}

export function memberName(
  copy: CommunityCopy,
  member: PublicMember | null,
): string {
  return member?.displayName || copy.formerMember;
}

export function statusText(
  copy: CommunityCopy,
  status: string | null,
  note: string | null,
): string | null {
  if (!status) return null;
  const label = copy.status[status] ?? status;
  if (!note) return label;
  return note.toLowerCase().startsWith(label.toLowerCase())
    ? note
    : `${label}: ${note}`;
}

export function pageOfPost(postNumber: number): number {
  return Math.max(1, Math.ceil(postNumber / pageSize.posts));
}

function postHtml(
  locale: Locale,
  copy: CommunityCopy,
  detail: ThreadDetail,
  post: Post,
): string {
  const name = memberName(copy, post.author);
  const badge = post.author ? roleBadge(copy, post.author.role) : null;
  const date = fullDate(locale, post.createdAt, 'UTC');
  const lang = detail.thread.language;
  // The separators are real text for screen readers ("Mourad, OutBrick team, 7 October…"):
  // the heading is a flex row, which drops plain spaces between its items.
  return `<article class="cm-post${post.isSolution ? ' is-solution' : ''}" id="post-${post.number}" aria-labelledby="post-${post.number}-h"><h2 class="cm-post-h" id="post-${post.number}-h"><span class="cm-author">${e(name)}</span>${
    badge ? `<span class="sr-only">, </span><span class="cm-role">${e(badge)}</span>` : ''
  }<span class="cm-sep" aria-hidden="true">,</span><span class="sr-only">, </span><time datetime="${e(post.createdAt)}">${e(date)}</time></h2>${
    post.isSolution
      ? `<p class="cm-badge cm-badge-solution">${e(copy.thread.solution)}</p>`
      : ''
  }${post.hidden ? `<p class="cm-note">${e(copy.thread.hiddenPost)}</p>` : `<div class="cm-post-body" lang="${lang}">${post.html}</div>`}</article>`;
}

/** A thread, readable without script, for the edge function to put into the shell. */
export function threadStaticHtml(locale: Locale, detail: ThreadDetail): string {
  const copy = communityCopy[locale];
  const { thread } = detail;
  const cat = categoryWords(locale, thread.category.slug);
  const status = statusText(copy, thread.status, thread.statusNote);
  const meta = `<p class="cm-meta">${e(copy.thread.startedBy(memberName(copy, thread.author), fullDate(locale, thread.createdAt, 'UTC')))} · ${e(
    copy.stats.replies(thread.replyCount, number(locale, thread.replyCount)),
  )}</p>`;
  const badges = [
    status
      ? `<span class="cm-badge cm-status cm-status-${e(thread.status ?? '')}"><span class="sr-only">${e(copy.statusLabel)}: </span>${e(status)}</span>`
      : '',
    thread.solved
      ? `<span class="cm-badge cm-badge-solution">${e(copy.list.solved)}</span>`
      : '',
    thread.locked ? `<span class="cm-badge">${e(copy.list.locked)}</span>` : '',
  ]
    .filter(Boolean)
    .join(' ');
  let bug = '';
  if (detail.bug) {
    const b = detail.bug;
    const at = b.assistive
      .map((a) => communityCopy[locale].newThread.at[a] ?? a)
      .join(', ');
    const rows: [string, string][] = [
      [copy.thread.bug.device, b.device],
      [copy.thread.bug.osVersion, b.osVersion],
      [copy.thread.bug.appVersion, b.appVersion],
      [copy.thread.bug.assistive, at],
      [copy.thread.bug.steps, b.steps],
      [copy.thread.bug.expected, b.expected],
      [copy.thread.bug.actual, b.actual],
    ];
    bug = `<section class="cm-section cm-bug" aria-labelledby="cm-bug-h"><h2 id="cm-bug-h">${e(copy.thread.bugHeading)}</h2><dl lang="${thread.language}">${rows
      .map(([k, v]) => `<div><dt>${e(k)}</dt><dd>${e(v || '—')}</dd></div>`)
      .join('')}</dl></section>`;
  }
  const pages =
    detail.pages > 1
      ? `<nav class="cm-pages" aria-label="${e(copy.thread.pages)}"><ul>${Array.from(
          { length: detail.pages },
          (_, i) => i + 1,
        )
          .map((p) => {
            const href =
              threadPath(locale, thread) + (p > 1 ? `?page=${p}` : '');
            return `<li><a href="${e(href)}" aria-label="${e(copy.thread.page(number(locale, p)))}"${p === detail.page ? ' aria-current="page"' : ''}>${number(locale, p)}</a></li>`;
          })
          .join('')}</ul></nav>`
      : '';
  return wrap(
    head(copy, {
      crumbs: [
        { href: home(locale), label: 'OutBrick' },
        { href: communityPath(locale), label: copy.nav.label },
        {
          href: communityPath(locale, `/c/${thread.category.slug}`),
          label: cat.name,
        },
        { label: thread.title, lang: thread.language },
      ],
      title: thread.title,
      titleLang: thread.language,
      extra: (badges ? `<p class="cm-badges">${badges}</p>` : '') + meta,
    }) +
      body(
        bug +
          `<section class="cm-posts" aria-labelledby="cm-posts-h"><h2 class="sr-only" id="cm-posts-h">${e(copy.thread.postsHeading)}</h2>${detail.posts
            .filter((p) => !p.pending)
            .map((p) => postHtml(locale, copy, detail, p))
            .join('')}</section>` +
          pages +
          `<noscript><p class="cm-note">${e(copy.home.noScript)}</p></noscript>`,
      ),
  );
}
