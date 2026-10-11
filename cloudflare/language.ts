// The first visit's language. A reader who opens an English address (/, /play, /support …)
// without having chosen a language, and whose browser prefers one the site is published in, is
// sent to that language's page with a temporary redirect. The language picker remembers a choice
// in the `ob_lang` cookie (app/components/langs-closer.tsx), English included, and a remembered
// choice always wins, so nobody is ever held in a language they did not pick: the picker is on
// every page and switching back sticks. Crawlers, challenge links, the community, APIs, machine
// files and anything with a file extension are never redirected.
import { hasLocalePage, locales, type Locale } from '../lib/i18n/locales.ts';

/** English page roots that have a translated twin worth sending a first visit to. */
const roots = new Set(['', 'about', 'accessibility', 'age-rating', 'contact', 'daily', 'eula', 'license-agreement', 'mascots', 'newsletter', 'play', 'privacy', 'privacy-choices', 'refunds', 'support', 'terms', 'whats-new', 'press', 'press-kit', 'creators', 'affiliates', 'careers', 'research']);
const latinAmerica = new Set(['419', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'US']);
const bot = /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|headless/i;

/** The site language for one Accept-Language tag, or null. */
export function siteLanguageFor(tag: string): Locale | null {
  const [language = '', ...rest] = tag.trim().split(/[-_]/);
  const lang = language.toLowerCase();
  const script = rest.find((p) => p.length === 4)?.toLowerCase();
  const region = rest.find((p) => p.length === 2 || /^\d{3}$/.test(p))?.toUpperCase();
  const live = (code: string): Locale | null => ((locales as readonly string[]).includes(code) ? (code as Locale) : null);
  switch (lang) {
    case 'zh':
      return live(script === 'hant' || ['TW', 'HK', 'MO'].includes(region ?? '') ? 'zh-Hant' : 'zh-Hans');
    case 'pt':
      return region === 'BR' || !region ? live('pt-BR') : live('pt-PT') ?? live('pt-BR');
    case 'es':
      return region && latinAmerica.has(region) ? live('es-419') ?? live('es') : live('es');
    case 'fr':
      return region === 'CA' ? live('fr-CA') ?? live('fr') : live('fr');
    case 'no': case 'nn': case 'nb':
      return live('nb');
    case 'iw':
      return live('he');
    case 'in':
      return live('id');
    case 'en':
      return 'en';
    default:
      return live(lang);
  }
}

/** The reader's best published language from an Accept-Language header (q-values honoured). */
export function preferredLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const ranked = header.split(',').map((part, index) => {
    const [tag, ...params] = part.trim().split(';');
    const q = Number(params.find((p) => p.trim().startsWith('q='))?.trim().slice(2) ?? '1');
    return { tag: tag.trim(), q: Number.isFinite(q) ? q : 0, index };
  }).filter((entry) => entry.tag && entry.tag !== '*' && entry.q > 0).sort((a, b) => b.q - a.q || a.index - b.index);
  for (const { tag } of ranked) {
    const language = siteLanguageFor(tag);
    if (language) return language;
  }
  return null;
}

function cookie(req: Request, name: string): string | undefined {
  for (const part of (req.headers.get('Cookie') ?? '').split(';')) {
    const [key, ...value] = part.trim().split('=');
    if (key === name) return value.join('=');
  }
  return undefined;
}

/** A redirect to the reader's language for a first visit to an English page, or null. */
export function languageRedirect(req: Request, url: URL): Response | null {
  if (req.method !== 'GET' && req.method !== 'HEAD') return null;
  const path = url.pathname;
  const root = path.split('/')[1] ?? '';
  if (!roots.has(root) || /\.[a-z0-9]+$/i.test(path)) return null;
  if (bot.test(req.headers.get('User-Agent') ?? '')) return null;
  // A remembered choice wins, English included; an unknown or unpublished one is ignored.
  const chosen = cookie(req, 'ob_lang');
  const target = chosen && (locales as readonly string[]).includes(chosen) ? (chosen as Locale) : chosen ? null : preferredLanguage(req.headers.get('Accept-Language'));
  if (!target || target === 'en' || !hasLocalePage(target, path)) return null;
  const next = new URL(url);
  next.pathname = path === '/' ? `/${target}` : `/${target}${path.replace(/\/$/, '')}`;
  return new Response(null, {
    status: 302,
    headers: { Location: next.href, Vary: 'Accept-Language, Cookie', 'Cache-Control': 'private, no-store' },
  });
}
