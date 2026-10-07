// The small HTTP toolkit every /api/community/* function uses: JSON in and out, typed errors,
// the same-origin rule for anything that changes state, and a tiny router.
//
// Handlers throw `ApiError` for anything the client did wrong; `handle()` turns it into a JSON
// `{ error: { code, message, fields? } }` with the right status. Anything else is logged
// (without the request body) and answered as a 500 with no detail.

export const SITE = 'https://www.outbrick.site';

export class ApiError extends Error {
  status: number;
  code: string;
  fields?: Record<string, string>;
  constructor(status: number, code: string, message: string, fields?: Record<string, string>) {
    super(message);
    this.status = status;
    this.code = code;
    this.fields = fields;
  }
}

export const badRequest = (code: string, message: string, fields?: Record<string, string>) => new ApiError(400, code, message, fields);
export const unauthorized = () => new ApiError(401, 'signin_required', 'Sign in to do that.');
export const forbidden = (message = 'You cannot do that.') => new ApiError(403, 'forbidden', message);
export const notFound = (message = 'Not found.') => new ApiError(404, 'not_found', message);
export const tooMany = (message = 'Slow down a little and try again in a minute.') => new ApiError(429, 'rate_limited', message);

export function json(data: unknown, init: ResponseInit & { headers?: Record<string, string> } = {}): Response {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...init.headers },
  });
}

/** Origins allowed to change state: the site, its Netlify deploys, and local development. */
export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  try {
    const u = new URL(origin);
    if (u.origin === SITE || u.origin === 'https://outbrick.site') return true;
    if (u.protocol === 'https:' && /^(?:[a-z0-9-]+--)?outbrick\.netlify\.app$/.test(u.host)) return true;
    if (process.env.CONTEXT === 'dev' || process.env.NETLIFY_DEV === 'true') return u.hostname === 'localhost' || u.hostname === '127.0.0.1';
    return false;
  } catch {
    return false;
  }
}

/** Every POST/PATCH/PUT/DELETE must come from our own pages (CSRF defence alongside SameSite=Lax). */
export function requireSameOrigin(req: Request): void {
  if (req.method === 'GET' || req.method === 'HEAD') return;
  if (!isAllowedOrigin(req.headers.get('origin'))) throw forbidden('This request did not come from outbrick.site.');
}

/** The request's own origin, for building links back to the deploy that served it. */
export function requestOrigin(req: Request): string {
  try {
    const u = new URL(req.url);
    return isAllowedOrigin(u.origin) ? u.origin : SITE;
  } catch {
    return SITE;
  }
}

/** Parse a JSON body of at most `limit` bytes into an object. */
export async function readJson(req: Request, limit = 64 * 1024): Promise<Record<string, unknown>> {
  const text = await req.text();
  if (text.length > limit) throw new ApiError(413, 'too_large', 'That is too long to send in one go.');
  if (!text) return {};
  try {
    const value = JSON.parse(text) as unknown;
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('not an object');
    return value as Record<string, unknown>;
  } catch {
    throw badRequest('bad_json', 'The request was not valid JSON.');
  }
}

// Field readers: each returns a clean value or throws a field error the form can show.

export function str(body: Record<string, unknown>, key: string, opts: { min?: number; max: number; optional?: boolean; label?: string }): string {
  const raw = body[key];
  const value = typeof raw === 'string' ? raw.replace(/\r\n?/g, '\n').trim() : raw == null ? '' : String(raw).trim();
  const label = opts.label ?? key;
  if (!value && opts.optional) return '';
  if (value.length < (opts.min ?? 1)) throw badRequest('invalid', `${label} is too short.`, { [key]: 'too_short' });
  if (value.length > opts.max) throw badRequest('invalid', `${label} is too long.`, { [key]: 'too_long' });
  return value;
}

export function int(value: unknown, fallback: number, min: number, max: number): number {
  const n = typeof value === 'number' ? value : Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(n)));
}

export function oneOf<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return (allowed as readonly string[]).includes(String(value)) ? (value as T) : fallback;
}

// Routing -----------------------------------------------------------------------------------

export type Route = {
  method: string;
  /** e.g. '/api/community/threads/:id' */
  pattern: string;
  run: (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;
};

function match(pattern: string, path: string): Record<string, string> | null {
  const p = pattern.split('/').filter(Boolean);
  const s = path.split('/').filter(Boolean);
  if (p.length !== s.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < p.length; i++) {
    if (p[i].startsWith(':')) params[p[i].slice(1)] = decodeURIComponent(s[i]);
    else if (p[i] !== s[i]) return null;
  }
  return params;
}

/** Find the route, enforce same-origin on writes, and turn errors into JSON. */
export async function handle(req: Request, routes: Route[]): Promise<Response> {
  const url = new URL(req.url);
  try {
    let methodMismatch = false;
    for (const route of routes) {
      const params = match(route.pattern, url.pathname.replace(/\/+$/, ''));
      if (!params) continue;
      if (route.method !== req.method && !(req.method === 'HEAD' && route.method === 'GET')) {
        methodMismatch = true;
        continue;
      }
      requireSameOrigin(req);
      return await route.run(req, params, url);
    }
    if (methodMismatch) throw new ApiError(405, 'method_not_allowed', 'Method not allowed.');
    throw notFound();
  } catch (error) {
    if (error instanceof ApiError) {
      return json({ error: { code: error.code, message: error.message, fields: error.fields } }, { status: error.status });
    }
    console.error(`[community] ${req.method} ${url.pathname} failed:`, error instanceof Error ? error.message : String(error));
    return json({ error: { code: 'server_error', message: 'Something went wrong on our side. Please try again.' } }, { status: 500 });
  }
}
