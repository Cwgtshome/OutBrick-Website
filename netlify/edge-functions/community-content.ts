// Public editorial content is readable without JavaScript. Drafts never reach this renderer.
import type { EditorialContent } from '../../lib/community/admin-contract.ts';
import { editorialPath } from '../../lib/community/admin-contract.ts';
import type { CommunityLocale } from '../../lib/community/contract.ts';
import { communityPath } from '../../lib/community/contract.ts';
import { escapeHtml } from '../../lib/community/format.ts';
import { STATIC_START, STATIC_END } from '../../lib/community/static-html.ts';
import { adminWords } from '../../lib/i18n/admin.ts';

export function contentPage(
  shell: string,
  locale: CommunityLocale,
  content: EditorialContent[] | EditorialContent | null,
): string {
  const w = adminWords[locale],
    list = Array.isArray(content),
    title = content && !list ? content.title : w.library;
  const titleHtml = `<h1 class="cm-title" tabindex="-1">${escapeHtml(title)}</h1>`;
  const body = content
    ? list
      ? `<ul class="cm-threads">${content.map((c) => `<li class="cm-thread"><h2><a href="${editorialPath(locale, c)}">${escapeHtml(c.title)}</a></h2><p>${escapeHtml(c.summary)}</p></li>`).join('')}</ul>${!content.length ? `<p>${escapeHtml(w.empty)}</p>` : ''}`
      : `<p>${escapeHtml(content.summary)}</p><article class="cm-prose">${content.html}</article>`
    : `<p>404</p>`;
  const inner = `${STATIC_START}<div class="cm-head"><div class="wrap"><nav class="cm-crumbs"><a href="${communityPath(locale)}">OutBrick Community</a> · <a href="${communityPath(locale, '/library')}">${escapeHtml(w.library)}</a></nav>${titleHtml}</div></div><div class="cm-body"><div class="wrap">${body}</div></div>${STATIC_END}`;
  const start = shell.indexOf(STATIC_START),
    end = shell.indexOf(STATIC_END);
  if (start < 0 || end < start) throw new Error('Missing editorial shell');
  let html =
    shell.slice(0, start) + inner + shell.slice(end + STATIC_END.length);
  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)} — OutBrick</title>`,
  );
  const path =
    content && !list
      ? editorialPath(locale, content)
      : communityPath(locale, '/library');
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="https://www.outbrick.site${path}"/>`,
  );
  html = html.replace(
    /<link rel="alternate" hrefLang="[^"]*" href="[^"]*"\s*\/?>/gi,
    '',
  );
  const description = content && !list ? content.summary : w.library;
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(description)}"/>`,
  );
  for (const [property, value] of [
    ['og:title', `${title} — OutBrick`],
    ['og:description', description],
    ['og:url', `https://www.outbrick.site${path}`],
    ['twitter:title', `${title} — OutBrick`],
    ['twitter:description', description],
  ]) {
    html = html.replace(
      new RegExp(
        `<meta (?:property|name)="${property}" content="[^"]*"\\s*\\/?>`,
        'i',
      ),
      `<meta property="${property}" content="${escapeHtml(value)}"/>`,
    );
  }
  if (!content)
    html = html.replace(
      '</head>',
      '<meta name="robots" content="noindex"/></head>',
    );
  // Preserve the shell's script element: React hydrates it outside the static-content slot.
  const ld = content && !list ? {
    '@context': 'https://schema.org',
    '@type': content.kind === 'blog' ? 'BlogPosting' : 'WebPage',
    headline: content.title,
    description: content.summary,
    inLanguage: locale,
    datePublished: content.publishedAt,
    dateModified: content.updatedAt,
    url: `https://www.outbrick.site${path}`,
    author: { '@type': 'Organization', name: 'OutBrick' },
  } : {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: w.library, inLanguage: locale, url: `https://www.outbrick.site${path}`,
  };
  const payload = JSON.stringify(ld).replaceAll('<', '\\u003c');
  const shellId = `https://www.outbrick.site${communityPath(locale)}#webpage`;
  let replaced = false;
  html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g,
    (block, open: string, data: string, close: string) => {
      if (replaced || !data.includes(shellId)) return block;
      replaced = true;
      return open + payload + close;
    });
  if (!replaced) html = html.replace('</head>', `<script type="application/ld+json">${payload}</script></head>`);
  return html;
}
export default async function editorialContent(
  req: Request,
  context: { next: () => Promise<Response>; fetch?: typeof fetch },
) {
  const url = new URL(req.url),
    match = url.pathname.match(
      /^\/(?:(fr|de|es|ja|pt-BR)\/)?community\/(library|content\/(page|blog)\/([a-z0-9][a-z0-9-]{1,79}))\/?$/,
    );
  if (!match) return context.next();
  const locale = (match[1] || 'en') as CommunityLocale;
  const api = match[3]
    ? `/api/community/content/${locale}/${match[3]}/${match[4]}`
    : `/api/community/content?locale=${locale}`;
  let content: EditorialContent | EditorialContent[] | null = null,
    status = 200;
  try {
    const result = await (context.fetch ?? fetch)(new URL(api, url), {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (result.status === 404) status = 404;
    else if (!result.ok) status = 503;
    else
      content = (
        (await result.json()) as {
          content: EditorialContent | EditorialContent[];
        }
      ).content;
  } catch {
    status = 503;
  }
  const shell = await context.next();
  if (!shell.ok) return shell;
  const headers = new Headers(shell.headers);
  headers.delete('content-length');
  headers.set('cache-control', 'no-store');
  headers.set('content-type', 'text/html; charset=utf-8');
  headers.set('x-content-type-options', 'nosniff');
  try {
    return new Response(contentPage(await shell.text(), locale, content), {
      status,
      headers,
    });
  } catch {
    return new Response('Content temporarily unavailable', {
      status: 503,
      headers,
    });
  }
}
export const config = {
  path: [
    '/community/content/*',
    '/fr/community/content/*',
    '/de/community/content/*',
    '/es/community/content/*',
    '/ja/community/content/*',
    '/community/library',
    '/fr/community/library',
    '/de/community/library',
    '/es/community/library',
    '/ja/community/library',
  ],
};
