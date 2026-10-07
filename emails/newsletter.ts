// The two newsletter link handlers, kept out of the function files so the build's preview step
// and scripts can import the same code. See netlify/functions/newsletter-confirm.mts and
// newsletter-unsubscribe.mts for what each URL does.

import { isEmailLocale, type EmailLocale } from './i18n.ts';
import { addressTag, unsubscribeUrl, verifyConfirm, verifyUnsubscribe } from './links.ts';
import { SENDERS, newsletterSegments, sendEmail, subscribeContact, unsubscribeContact } from './resend.ts';
import { newsletterWelcome, unsubscribePage, confirmPage } from './templates.ts';
import { SITE } from './core.ts';

type Env = Record<string, string | undefined>;

const askedLocale = (req: Request): EmailLocale => {
  const l = new URL(req.url).searchParams.get('l');
  return isEmailLocale(l) ? l : 'en';
};

const sitePath = (locale: EmailLocale, path: string) => (locale === 'en' ? path : `/${locale}${path}`);

function redirect(req: Request, locale: EmailLocale, path: string): Response {
  const origin = new URL(req.url).origin;
  // Netlify copies the request's query string onto a function's redirect when the Location has
  // none of its own, which would carry the signed address and token onto the landing page. A
  // query of our own (which the static pages ignore) stops that.
  return new Response(null, {
    status: 303,
    headers: { Location: `${origin}${sitePath(locale, path)}?from=email`, 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' },
  });
}

/** The headers that let a mail client offer its own one-click Unsubscribe button. */
export function listUnsubscribeHeaders(url: string): Record<string, string> {
  return {
    'List-Unsubscribe': `<${url}>, <mailto:news@outbrick.site?subject=unsubscribe>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  };
}

export async function handleConfirm(req: Request, env: Env): Promise<Response> {
  const params = new URL(req.url).searchParams;
  if (req.method === 'HEAD') return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
  if (req.method !== 'GET' && req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, POST, HEAD' } });
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[newsletter] confirm: RESEND_API_KEY is not set');
    return redirect(req, askedLocale(req), '/newsletter/link-expired');
  }
  const verified = verifyConfirm(params, apiKey);
  if (!verified.ok) {
    console.log(`[newsletter] confirm rejected: ${verified.reason}`);
    return redirect(req, verified.locale, '/newsletter/link-expired');
  }
  const { email, locale } = verified;
  if (req.method === 'GET') {
    const url = new URL(req.url);
    return new Response(confirmPage(locale, `${url.pathname}${url.search}`), {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
        // Chrome sends Origin: null on a form POST from a no-referrer page. Keep the
        // same-origin POST verifiable while suppressing the signed URL for external links.
        'Referrer-Policy': 'same-origin',
        'Content-Security-Policy': "default-src 'none'; img-src 'self' https://www.outbrick.site; style-src 'unsafe-inline'; font-src 'self' https://www.outbrick.site; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
      },
    });
  }
  const origin = req.headers.get('Origin');
  if (origin && origin !== new URL(req.url).origin) return new Response('Forbidden', { status: 403 });
  const tag = addressTag(apiKey, email);
  const segments = newsletterSegments(env, locale);
  if (!segments.length) {
    console.error('[newsletter] confirm: RESEND_SEGMENT_ID is not set');
    return redirect(req, locale, '/newsletter/link-expired');
  }
  const added = await subscribeContact(apiKey, email, segments);
  if (!added.ok) {
    console.error(`[newsletter] confirm ${tag}: ${added.error}`);
    return redirect(req, locale, '/newsletter/link-expired');
  }
  const unsub = unsubscribeUrl(SITE, apiKey, email, locale);
  const welcome = newsletterWelcome({ locale, unsubscribeUrl: unsub });
  const sent = await sendEmail(
    apiKey,
    {
      ...SENDERS.news,
      to: email,
      subject: welcome.subject,
      html: welcome.html,
      text: welcome.text,
      headers: listUnsubscribeHeaders(unsub),
      tags: [{ name: 'form', value: 'newsletter-welcome' }, { name: 'locale', value: locale }],
    },
    // A scanner and the reader both opening the link send one welcome, not two.
    `welcome-${tag}-${params.get('x') ?? ''}`,
  );
  if (!sent.ok) console.error(`[newsletter] welcome ${tag}: ${sent.error}`);
  console.log(`[newsletter] confirmed ${tag} [${locale}]`);
  return redirect(req, locale, '/newsletter/confirmed');
}

export async function handleUnsubscribe(req: Request, env: Env): Promise<Response> {
  const url = new URL(req.url);
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[newsletter] unsubscribe: RESEND_API_KEY is not set');
    return req.method === 'POST' ? new Response('Unavailable', { status: 503 }) : redirect(req, askedLocale(req), '/newsletter/link-expired');
  }
  const verified = verifyUnsubscribe(url.searchParams, apiKey);
  if (!verified.ok) {
    console.log('[newsletter] unsubscribe rejected: invalid signature');
    return req.method === 'POST' ? new Response('Invalid link', { status: 400 }) : redirect(req, verified.locale, '/newsletter/link-expired');
  }
  const { email, locale } = verified;
  const tag = addressTag(apiKey, email);

  if (req.method === 'GET' || req.method === 'HEAD') {
    const html = unsubscribePage(locale, `${url.pathname}${url.search}`);
    return new Response(req.method === 'HEAD' ? null : html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
        'Referrer-Policy': 'no-referrer',
        'Content-Security-Policy': "default-src 'none'; img-src 'self' https://www.outbrick.site; style-src 'unsafe-inline'; font-src 'self' https://www.outbrick.site; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
      },
    });
  }
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, POST' } });

  const body = await req.text().catch(() => '');
  const oneClick = /List-Unsubscribe=One-Click/i.test(body);
  const result = await unsubscribeContact(apiKey, email);
  if (!result.ok) {
    console.error(`[newsletter] unsubscribe ${tag}: ${result.error}`);
    return oneClick ? new Response('Could not unsubscribe right now', { status: 502 }) : redirect(req, locale, '/newsletter/link-expired');
  }
  console.log(`[newsletter] unsubscribed ${tag}${oneClick ? ' (one-click)' : ''}`);
  return oneClick ? new Response('Unsubscribed', { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }) : redirect(req, locale, '/newsletter/unsubscribed');
}
