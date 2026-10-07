/**
 * Thread pages for search engines and for readers without script.
 *
 * Every /community/t/<id>/<slug> (and its /fr, /de, /es, /ja forms) is served from the
 * prerendered community shell, which knows nothing about the thread. This edge function runs
 * on the original address, asks the forum for the thread (GET /api/community/threads/:id, the
 * public view: no cookie is forwarded, so the page is the same for everyone and safe to cache),
 * and rewrites the shell:
 *
 *   - <title>, meta description, canonical, Open Graph and Twitter tags for the thread;
 *   - one hreflang, for the thread's own language (a thread is written in one language; the
 *     other interface languages are not translations of it);
 *   - DiscussionForumPosting JSON-LD (headline, author, dates, text, counts, the replies);
 *   - the thread's posts as plain HTML in the shell's `[data-cm-static]` slot, so the page reads
 *     without script and the client app (app/components/community) takes over from it.
 *
 * An old or shortened slug answers 301 to the current address. A thread that does not exist
 * answers the shell with 404 and noindex. Any other failure — the API down, a timeout, HTML that
 * does not look like the shell — passes the shell through unchanged.
 *
 * Plain string edits, not HTMLRewriter: the Deno runtime has none built in, and the shell is
 * our own markup. The JSON-LD is an inline data block, which the site CSP (public/_headers)
 * already allows exactly as the site's other JSON-LD.
 */

import type { ThreadDetail, CommunityLocale } from '../../lib/community/contract.ts';
import { communityPath, threadPath } from '../../lib/community/contract.ts';
import { STATIC_END, STATIC_START, memberName, threadStaticHtml } from '../../lib/community/static-html.ts';
import { categoryWords, communityCopy } from '../../lib/i18n/community.ts';
import { escapeHtml, excerpt, htmlToText } from '../../lib/community/format.ts';

const SITE = 'https://www.outbrick.site';

type EdgeContext = { next: () => Promise<Response> };

const ogLocales: Record<CommunityLocale, string> = { en: 'en_US', fr: 'fr_FR', de: 'de_DE', es: 'es_ES', ja: 'ja_JP' };

/** The security headers public/_headers gives every page, for the case where a custom header set does not reach an edge response. */
const securityHeaders: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self'; media-src 'self'; manifest-src 'self'; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests",
};

export function parseThreadPath(pathname: string): { locale: CommunityLocale; id: number; slug: string } | null {
  const match = pathname.match(/^(?:\/(fr|de|es|ja))?\/community\/t\/(\d{1,12})(?:\/([^/]*))?\/?$/);
  if (!match) return null;
  return { locale: (match[1] as CommunityLocale | undefined) ?? 'en', id: Number(match[2]), slug: decodeURIComponent(match[3] ?? '') };
}

const attr = (value: string) => escapeHtml(value);

function setMeta(html: string, key: 'name' | 'property', name: string, content: string): string {
  const pattern = new RegExp(`<meta ${key}="${name.replace(/[.:]/g, '\\$&')}" content="[^"]*"\\s*/?>`, 'i');
  const tag = `<meta ${key}="${name}" content="${attr(content)}"/>`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `${tag}</head>`);
}

/** The shell, rewritten for one thread. Exported for the dev mock (scripts/community-mock.mjs). */
export function renderThreadPage(shell: string, locale: CommunityLocale, detail: ThreadDetail): string | null {
  const slot = shell.indexOf('data-cm-static');
  const start = slot < 0 ? -1 : shell.indexOf(STATIC_START, slot);
  const end = start < 0 ? -1 : shell.indexOf(STATIC_END, start);
  if (start < 0 || end < 0 || !shell.includes('</head>')) return null;

  const copy = communityCopy[locale];
  const { thread } = detail;
  const pageSuffix = detail.page > 1 ? `?page=${detail.page}` : '';
  const canonical = `${SITE}${threadPath(thread.language, thread)}${pageSuffix}`;
  const firstPost = detail.posts.find((p) => !p.hidden && !p.pending);
  const text = firstPost ? excerpt(htmlToText(firstPost.html), 500) : thread.title;
  const description = excerpt(`${thread.title}: ${firstPost ? htmlToText(firstPost.html) : categoryWords(locale, thread.category.slug).description}`, 155);
  const title = copy.meta.threadTitle(thread.title);

  let html = shell;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = setMeta(html, 'name', 'description', description);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${attr(canonical)}"/>`);
  html = html.replace(/<link rel="alternate" hrefLang="[^"]*" href="[^"]*"\s*\/?>/gi, '');
  html = html.replace('</head>', `<link rel="alternate" hrefLang="${thread.language}" href="${attr(canonical)}"/></head>`);
  html = setMeta(html, 'property', 'og:title', thread.title);
  html = setMeta(html, 'property', 'og:description', description);
  html = setMeta(html, 'property', 'og:url', canonical);
  html = setMeta(html, 'property', 'og:type', 'article');
  html = setMeta(html, 'property', 'og:locale', ogLocales[thread.language]);
  html = setMeta(html, 'name', 'twitter:title', thread.title);
  html = setMeta(html, 'name', 'twitter:description', description);
  if (thread.hidden) html = setMeta(html, 'name', 'robots', 'noindex, follow');


  const person = (member: ThreadDetail['thread']['author'] | null) =>
    member ? { '@type': 'Person', name: memberName(copy, member), url: `${SITE}${communityPath(thread.language, `/u/${member.id}`)}` } : { '@type': 'Person', name: copy.formerMember };
  const comments = detail.posts
    .filter((p) => !p.hidden && !p.pending && p !== firstPost)
    .map((p) => ({
      '@type': 'Comment',
      '@id': `${canonical}#post-${p.number}`,
      url: `${canonical}#post-${p.number}`,
      author: person(p.author),
      datePublished: p.createdAt,
      text: excerpt(htmlToText(p.html), 1000),
    }));
  const data = {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    '@id': `${canonical}#thread`,
    mainEntityOfPage: canonical,
    url: canonical,
    headline: Array.from(thread.title).length > 110 ? `${Array.from(thread.title).slice(0, 109).join('')}…` : thread.title,
    inLanguage: thread.language,
    author: person(thread.author),
    datePublished: thread.createdAt,
    dateModified: thread.lastPostAt,
    text,
    articleSection: categoryWords(thread.language, thread.category.slug).name,
    interactionStatistic: [
      { '@type': 'InteractionCounter', interactionType: 'https://schema.org/CommentAction', userInteractionCount: thread.replyCount },
      { '@type': 'InteractionCounter', interactionType: 'https://schema.org/ViewAction', userInteractionCount: thread.viewCount },
      ...(thread.category.kind === 'ideas' ? [{ '@type': 'InteractionCounter', interactionType: 'https://schema.org/LikeAction', userInteractionCount: thread.voteCount }] : []),
    ],
    ...(comments.length ? { comment: comments } : {}),
  };
  const jsonLd = JSON.stringify(data).replace(/</g, '\\u003c');

  // The shell's own JSON-LD describes /community, not this thread. Its <script> element stays
  // (React hydrates the element; removing it is a hydration mismatch) and only its text changes.
  const shellId = `${SITE}${communityPath(locale)}#webpage`;
  let replaced = false;
  html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (block, open: string, json: string, close: string) => {
    if (replaced || !json.includes(shellId)) return block;
    replaced = true;
    return open + jsonLd + close;
  });
  if (!replaced) return null;

  const s = html.indexOf(STATIC_START, html.indexOf('data-cm-static'));
  const e = html.indexOf(STATIC_END, s);
  return html.slice(0, s) + threadStaticHtml(locale, detail) + html.slice(e + STATIC_END.length);
}

function withSecurity(headers: Headers): Headers {
  for (const [name, value] of Object.entries(securityHeaders)) if (!headers.has(name)) headers.set(name, value);
  headers.delete('content-length');
  return headers;
}

export default async function communityThread(req: Request, context: EdgeContext): Promise<Response> {
  const url = new URL(req.url);
  const parsed = req.method === 'GET' ? parseThreadPath(url.pathname) : null;
  if (!parsed) return context.next();
  const page = Number(url.searchParams.get('page') ?? '1');
  const api = new URL(`/api/community/threads/${parsed.id}`, url);
  if (Number.isInteger(page) && page > 1) api.searchParams.set('page', String(page));

  const shellPromise = context.next();
  let detail: ThreadDetail | null = null;
  let redirect: { id: number; slug: string } | null = null;
  let missing = false;
  try {
    const signal = AbortSignal.timeout(4000);
    const res = await fetch(api, { headers: { accept: 'application/json' }, signal });
    if (res.status === 404) missing = true;
    else if (res.ok) {
      const data = (await res.json()) as ThreadDetail | { redirect: { id: number; slug: string } };
      if ('redirect' in data) redirect = data.redirect;
      else detail = data;
    }
  } catch {
    detail = null;
  }
  const shell = await shellPromise;
  if (!shell.ok || !(shell.headers.get('content-type') ?? '').includes('text/html')) return shell;

  const source = await shell.text();
  const headers = withSecurity(new Headers(shell.headers));
  try {
    // A thread merged into another: send readers and search engines to where it went.
    if (redirect) return new Response(null, { status: 301, headers: withSecurity(new Headers({ location: threadPath(parsed.locale, redirect) })) });
    if (missing) return new Response(setMeta(source, 'name', 'robots', 'noindex, follow'), { status: 404, headers });
    if (!detail?.thread) return new Response(source, { status: shell.status, headers });
    const wanted = threadPath(parsed.locale, detail.thread);
    if (url.pathname !== wanted) {
      const target = new URL(wanted, url);
      target.search = url.search;
      return new Response(null, { status: 301, headers: withSecurity(new Headers({ location: target.pathname + target.search })) });
    }
    const html = renderThreadPage(source, parsed.locale, detail);
    return new Response(html ?? source, { status: shell.status, headers });
  } catch {
    return new Response(source, { status: shell.status, headers });
  }
}

export const config = {
  path: ['/community/t/*', '/fr/community/t/*', '/de/community/t/*', '/es/community/t/*', '/ja/community/t/*'],
};
