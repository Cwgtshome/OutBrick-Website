/**
 * Unknown community addresses answer 404.
 *
 * netlify.toml serves every /community/... address that is not a file from the community shell
 * with a 200, so /community/nope, /community/c/nonexistent or /community/feed.xml used to come back
 * as a successful copy of the community home: a soft 404 that search engines index under the home's
 * canonical. This function runs on the original path, before that rewrite. An address the
 * community's router can draw (lib/community/routes.ts) passes straight through; anything else gets
 * the localized 404 page (the same file the locale fallbacks in netlify.toml serve) with status 404.
 *
 * Thread pages keep their own edge function (community-thread.ts), which answers a missing thread
 * with 404 after asking the API. The Help Centre (/community/help/...) is prerendered and passes
 * through. Nothing here touches the database.
 */

import { communityAddress } from '../../lib/community/routes.ts';

type EdgeContext = { next: () => Promise<Response> };

const securityHeaders: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self'; media-src 'self'; manifest-src 'self'; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests",
};

/** The 404 page of a language, as the locale fallbacks in netlify.toml name it. */
export const notFoundPath = (locale: string) => (locale === 'en' ? '/404' : `/${locale}/404`);

export default async function communityRoute(req: Request, context: EdgeContext): Promise<Response> {
  if (req.method !== 'GET' && req.method !== 'HEAD') return context.next();
  const url = new URL(req.url);
  const address = communityAddress(url.pathname);
  if (!address || address.known) return context.next();
  try {
    const page = await fetch(new URL(notFoundPath(address.locale), url), { headers: { accept: 'text/html' }, signal: AbortSignal.timeout(4000) });
    if (!(page.headers.get('content-type') ?? '').includes('text/html')) throw new Error('not html');
    const headers = new Headers({ 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=0, must-revalidate' });
    for (const [name, value] of Object.entries(securityHeaders)) headers.set(name, value);
    return new Response(req.method === 'HEAD' ? null : await page.text(), { status: 404, headers });
  } catch {
    // The 404 page could not be read: still say 404, in plain words.
    return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8', ...securityHeaders } });
  }
}

export const config = {
  path: ['/community/*', '/fr/community/*', '/de/community/*', '/es/community/*', '/ja/community/*', '/pt-BR/community/*'],
  excludedPath: ['/community/t/*', '/fr/community/t/*', '/de/community/t/*', '/es/community/t/*', '/ja/community/t/*', '/pt-BR/community/t/*'],
};
