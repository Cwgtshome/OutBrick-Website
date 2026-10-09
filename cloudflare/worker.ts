import communityApi from '../netlify/functions/community-api.mts';
import communityAuth, { config as authConfig } from '../netlify/functions/community-auth.mts';
import newsletterConfirm from '../netlify/functions/newsletter-confirm.mts';
import newsletterUnsubscribe from '../netlify/functions/newsletter-unsubscribe.mts';
import newsletterPreferences from '../netlify/functions/newsletter-preferences.mts';
import supportFeedback from '../netlify/functions/support-feedback.mts';
import accountSignout from '../netlify/functions/account-signout.mts';
import accountExport from '../netlify/functions/account-export.mts';
import resendEvents from '../netlify/functions/resend-events.mts';
import communityThread from '../netlify/edge-functions/community-thread.ts';
import editorialContent from '../netlify/edge-functions/community-content.ts';
import notify from '../netlify/functions/community-notify.mts';
import outbox from '../netlify/functions/lifecycle-outbox.mts';
import releases from '../netlify/functions/community-releases.mts';
import digest from '../netlify/functions/community-digest.mts';
import trust from '../netlify/functions/community-trust.mts';
import badges from '../netlify/functions/community-badges.mts';
import { withPlatform } from '../netlify/platform.ts';
import { workerDatabase, r2Store } from './adapters.ts';
import { routeRule } from './routing.ts';
import { submitForm, drainForms } from './forms.ts';
import type { TranslationBudget } from './translation-budget.ts';
import { communityAddress } from '../lib/community/routes.ts';

const legacy: Record<string, (req: Request) => Promise<Response>> = {
  'newsletter-confirm': newsletterConfirm,
  'newsletter-unsubscribe': newsletterUnsubscribe,
  'newsletter-preferences': newsletterPreferences,
  'support-feedback': supportFeedback,
  'account-signout': accountSignout,
  'account-export': accountExport,
  'resend-events': resendEvents,
};
const unavailable = () => new Response(JSON.stringify({ error: { code: 'unavailable', message: 'Community temporarily unavailable.' } }), { status: 503, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Retry-After': '60' } });
async function api(req: Request): Promise<Response> {
  const pathname = new URL(req.url).pathname;
  return authConfig.path.some((pattern) => pattern.endsWith('*') ? pathname.startsWith(pattern.slice(0, -1)) : pathname === pattern)
    ? communityAuth(req) : communityApi(req);
}

async function fetchSite(req: Request, env: CloudflareEnv): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;
  // The public hostname stays canonical. Preview hosts deliberately remain independent.
  if (url.hostname === 'outbrick.site') {
    url.hostname = 'www.outbrick.site';
    return Response.redirect(url.href, 301);
  }
  if (path.startsWith('/api/community/')) return env.DATABASE_URL ? api(req) : unavailable();
  if (path.startsWith('/.netlify/functions/')) {
    const name = path.slice('/.netlify/functions/'.length);
    const handler = legacy[name];
    // Event-triggered and scheduled functions must never become public HTTP endpoints.
    if (!handler) return new Response('Not found', { status: 404 });
    return env.DATABASE_URL ? handler(req) : unavailable();
  }
  const nativeForm = /^\/(?:(?:fr|de|es|ja|pt-BR)\/)?(?:contact|careers|affiliates|newsletter)\/thanks\/?$/.test(path);
  if (req.method === 'POST' && (path === '/' || nativeForm)) {
    if (!env.DATABASE_URL) return unavailable();
    const response = await submitForm(req);
    return nativeForm && response.ok ? Response.redirect(url.href, 303) : response;
  }
  if (!['GET', 'HEAD'].includes(req.method)) return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });

  // Share the forum's accepted address shapes with its client and Netlify edge handler.
  // Read the localized 404 through the asset binding, never through the public origin.
  const address = communityAddress(path);
  if (address && !address.known) {
    const file = new URL(url);
    file.pathname = address.locale === 'en' ? '/404.html' : `/${address.locale}/404.html`;
    const page = await env.ASSETS.fetch(new Request(file, { method: req.method }));
    const headers = new Headers(page.headers);
    headers.set('Cache-Control', 'no-store');
    return new Response(req.method === 'HEAD' ? null : page.body, { status: 404, headers });
  }

  const rule = routeRule(path);
  // Force rules override physical alias files, just as they did on Netlify.
  if (rule?.force && rule.status >= 300 && rule.status < 400) {
    const target = new URL(rule.target, url);
    if (!target.search) target.search = url.search;
    return Response.redirect(target.href, rule.status);
  }
  let asset = await env.ASSETS.fetch(req);
  if (asset.status === 404 && !path.split('/').at(-1)?.includes('.')) {
    const file = new URL(url);
    file.pathname = path === '/' ? '/index.html' : path.replace(/\/$/, '') + '.html';
    asset = await env.ASSETS.fetch(new Request(file, { method: req.method }));
  }
  if (asset.status !== 404 || !rule) return asset;
  if (rule.status >= 300 && rule.status < 400) {
    const target = new URL(rule.target, url);
    if (!target.search) target.search = url.search;
    return Response.redirect(target.href, rule.status);
  }
  const target = new URL(rule.target, url);
  // .html is the exact prerendered file; avoid the asset binding redirecting the browser
  // to the shell URL and losing the original thread/challenge address.
  target.pathname += target.pathname.endsWith('.html') ? '' : '.html';
  const shell = () => env.ASSETS.fetch(new Request(target, { method: 'GET' }));
  const internalFetch: typeof fetch = (input, init) => {
    const request = new Request(input, init);
    if (new URL(request.url).origin !== url.origin) throw new Error('Only internal public API reads are allowed.');
    return env.DATABASE_URL ? api(request) : Promise.resolve(unavailable());
  };
  let response = await communityThread(req, {
    fetch: internalFetch,
    next: () => editorialContent(req, { fetch: internalFetch, next: shell }),
  });
  if (rule.status === 404) response = new Response(response.body, { status: 404, headers: response.headers });
  const headers = new Headers(response.headers);
  if (path.includes('/community/')) headers.set('Cache-Control', 'no-store');
  if (req.method === 'HEAD') return new Response(null, { status: response.status, headers });
  return new Response(response.body, { status: response.status, headers });
}

async function scoped<T>(env: CloudflareEnv, work: () => Promise<T>): Promise<T> {
  if (!env.DATABASE_URL) return work();
  const database = workerDatabase(env.DATABASE_URL);
  try {
    return await withPlatform({
      db: database.db,
      translate: env.CLOUDFLARE_TRANSLATION_ENABLED === 'true' ? (markdown, system) => {
        const budget = env.TRANSLATION_BUDGET.getByName('outbrick-free-ai-v1') as DurableObjectStub & Pick<TranslationBudget, 'translate'>;
        return budget.translate(markdown, system);
      } : undefined,
      store: (name) => {
        if (name === 'community-uploads') return r2Store(env.UPLOADS);
        if (name === 'community-signals') return r2Store(env.SIGNALS);
        throw new Error('Unmapped store; migration must declare every store.');
      },
    }, work);
  } finally {
    await database.close();
  }
}

export default {
  async fetch(req, env) {
    try {
      const staging = env.CONTEXT === 'production' && new URL(req.url).hostname.endsWith('.workers.dev');
      // A production database must never accept customer writes through its staging hostname.
      // Auth GET routes can also write state, so keep every backend route unavailable there.
      if (staging && (!['GET', 'HEAD'].includes(req.method) || /^\/(?:api\/|\.netlify\/functions\/)/.test(new URL(req.url).pathname))) return unavailable();
      const response = await scoped(env, () => fetchSite(req, env));
      if (env.CONTEXT !== 'preview' && !new URL(req.url).hostname.endsWith('.workers.dev')) return response;
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex, nofollow');
      return new Response(response.body, { status: response.status, headers });
    }
    catch {
      // Requests and provider errors may carry private tokens; never log them.
      console.error(JSON.stringify({ event: 'outbrick-request-failed' }));
      return unavailable();
    }
  },
  async scheduled(controller, env) {
    // Enabled only after old schedules stop and production parity passes.
    if (process.env.JOBS_ENABLED !== 'true' || !env.DATABASE_URL) return;
    await scoped(env, async () => {
      const now = new Date(controller.scheduledTime);
      // Each job is isolated: one that throws is logged and the rest of the tick still runs.
      const job = async (name: string, work: () => Promise<unknown>) => {
        try { await work(); }
        catch { console.error(JSON.stringify({ event: 'outbrick-job-failed', job: name })); }
      };
      await job('notify', notify);
      if (now.getUTCMinutes() % 10 === 0) { await job('outbox', outbox); await job('forms', drainForms); }
      if (now.getUTCMinutes() === 0) await job('releases', releases);
      if (now.getUTCDay() === 1 && now.getUTCHours() >= 8 && now.getUTCHours() <= 10 && now.getUTCMinutes() % 10 === 0) await job('digest', digest);
      if (now.getUTCHours() === 8 && now.getUTCMinutes() === 0) { await job('trust', trust); await job('badges', badges); }
    });
  },
} satisfies ExportedHandler<CloudflareEnv>;
