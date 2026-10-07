// The routes behind netlify/functions/community-auth.mts.
//
// Everything goes through handle() (JSON errors, the same-origin rule on writes) except the POSTs
// that by design come from somewhere else: Apple's form_post callback (a cross-site POST from
// appleid.apple.com), a mail client's RFC 8058 one-click unsubscribe (no Origin at all) and, in
// phase 2, Resend's inbound-email webhook. Each is protected by what it carries instead: a
// single-use state plus a verified ID token, a signed token, and a Svix signature.

import { ApiError, handle, json, notFound, type Route } from '../http.ts';
import { deleteMe, exportMe, getSession, signOut, updateMe } from './account.ts';
import { confirmEmailPage, confirmEmailWithLink, requestEmailSignIn, signInPage, signInWithLink } from './email-link.ts';
import { listNotifications, markRead, unsubscribe, unsubscribePage } from './inbox.ts';
import { oauthCallback, oauthProviders, startOAuth, type OAuthProvider } from './oauth.ts';
// Phase 2 (community-p2)
import { deletePasskey, listPasskeys, login as passkeyLogin, loginOptions as passkeyLoginOptions, register as passkeyRegister, registerOptions as passkeyRegisterOptions } from './passkeys.ts';
import { inboundEmail } from '../reply-email.ts';

const provider = (name: string): OAuthProvider => {
  if (!(oauthProviders as readonly string[]).includes(name)) throw notFound();
  return name as OAuthProvider;
};

export const routes: Route[] = [
  // Phase 2 (community-p2): passkeys, before the /auth/:provider/* patterns.
  { method: 'POST', pattern: '/api/community/auth/passkey/register/options', run: (req) => passkeyRegisterOptions(req) },
  { method: 'POST', pattern: '/api/community/auth/passkey/register', run: (req) => passkeyRegister(req) },
  { method: 'POST', pattern: '/api/community/auth/passkey/login/options', run: (req) => passkeyLoginOptions(req) },
  { method: 'POST', pattern: '/api/community/auth/passkey/login', run: (req) => passkeyLogin(req) },
  { method: 'GET', pattern: '/api/community/me/passkeys', run: (req) => listPasskeys(req) },
  { method: 'DELETE', pattern: '/api/community/me/passkeys/:id', run: (req, p) => deletePasskey(req, p.id) },
  { method: 'GET', pattern: '/api/community/session', run: (req) => getSession(req) },
  { method: 'POST', pattern: '/api/community/auth/signout', run: (req) => signOut(req) },
  { method: 'POST', pattern: '/api/community/auth/email', run: (req) => requestEmailSignIn(req) },
  { method: 'GET', pattern: '/api/community/auth/email/verify', run: (req, _p, url) => signInPage(req, url) },
  { method: 'POST', pattern: '/api/community/auth/email/verify', run: (req, _p, url) => signInWithLink(req, url) },
  { method: 'GET', pattern: '/api/community/auth/email/confirm', run: (req, _p, url) => confirmEmailPage(req, url) },
  { method: 'POST', pattern: '/api/community/auth/email/confirm', run: (req, _p, url) => confirmEmailWithLink(req, url) },
  { method: 'GET', pattern: '/api/community/auth/:provider/start', run: (req, p, url) => startOAuth(req, provider(p.provider), url) },
  { method: 'GET', pattern: '/api/community/auth/:provider/callback', run: (req, p, url) => oauthCallback(req, provider(p.provider), url) },
  { method: 'PATCH', pattern: '/api/community/me', run: (req) => updateMe(req) },
  { method: 'DELETE', pattern: '/api/community/me', run: (req) => deleteMe(req) },
  { method: 'GET', pattern: '/api/community/me/export', run: (req) => exportMe(req) },
  { method: 'GET', pattern: '/api/community/notifications', run: (req, _p, url) => listNotifications(req, url) },
  { method: 'POST', pattern: '/api/community/notifications/read', run: (req) => markRead(req) },
  { method: 'GET', pattern: '/api/community/email/unsubscribe', run: (req, _p, url) => unsubscribePage(req, url) },
];

/** The two cross-site POSTs, answered outside handle()'s same-origin rule. */
const crossSite: Route[] = [
  { method: 'POST', pattern: '/api/community/auth/apple/callback', run: (req, _p, url) => oauthCallback(req, 'apple', url) },
  { method: 'POST', pattern: '/api/community/email/unsubscribe', run: (req, _p, url) => unsubscribe(req, url) },
  // Phase 2 (community-p2): Resend's inbound webhook, protected by its Svix signature.
  { method: 'POST', pattern: '/api/community/email/inbound', run: (req) => inboundEmail(req) },
];

export async function communityAuth(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname.replace(/\/+$/, '');
  const special = crossSite.find((r) => r.method === req.method && r.pattern === path);
  if (special) {
    try {
      return await special.run(req, {}, url);
    } catch (error) {
      if (error instanceof ApiError) return json({ error: { code: error.code, message: error.message, fields: error.fields } }, { status: error.status });
      console.error(`[community] ${req.method} ${path} failed:`, error instanceof Error ? error.message : String(error));
      return json({ error: { code: 'server_error', message: 'Something went wrong on our side. Please try again.' } }, { status: 500 });
    }
  }
  return handle(req, routes);
}
