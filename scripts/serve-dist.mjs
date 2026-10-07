// Serves dist/client the way Netlify does for this site: `/about` answers from `about.html`,
// `/c/<n>` is rewritten to `/c` (see netlify.toml), and anything else missing is the 404 page.
// Used by CI and scripts/audit-a11y.mjs; not part of the deployed site.
//
//   node scripts/serve-dist.mjs [port]      (default 4321)
//
// `/r/<code>` answers with the same 302 as netlify.toml's affiliate rule. `/community/<anything>`
// is served from its language's community shell, as netlify.toml rewrites it, and /api/community/*
// gets the read-only stand-in in scripts/lib/community-stub.mjs.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { communityStub } from './lib/community-stub.mjs';

const root = new URL('../dist/client/', import.meta.url).pathname;
const port = Number(process.argv[2] ?? process.env.PORT ?? 4321);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.rsc': 'text/x-component',
  '.webmanifest': 'application/manifest+json',
};

async function file(path) {
  try {
    return (await stat(path)).isFile() ? path : null;
  } catch {
    return null;
  }
}

async function resolve(pathname) {
  const challenge = pathname.match(/^(?:\/(fr|de|es|ja|pt-BR))?\/c\//);
  if (challenge) return join(root, challenge[1] ? `${challenge[1]}/c.html` : 'c.html');
  const clean = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  const base = join(root, clean).replace(/\/$/, '');
  const found = (await file(`${base}.html`)) ?? (await file(join(base, 'index.html'))) ?? (await file(base));
  if (found) return found;
  const community = pathname.match(/^(?:\/(fr|de|es|ja|pt-BR))?\/community\//);
  return community ? join(root, community[1] ? `${community[1]}/community.html` : 'community.html') : null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  if (communityStub(pathname, res)) return;
  // Affiliate links, as netlify.toml's `/r/:code` rule answers them.
  const affiliate = pathname.match(/^\/r\/([^/]+)\/?$/);
  if (affiliate) {
    res.writeHead(302, { location: `https://apps.apple.com/us/app/outbrick/id6807997465?mt=8&ct=aff-${affiliate[1]}` });
    res.end();
    return;
  }
  const alias = pathname.match(/^(?:\/(fr|de|es|ja|pt-BR))?\/(accessibility-support|age-suitability|eula-apple|license|privacy-policy|refund)\/?$/);
  if (alias) {
    const destinations = { 'accessibility-support': 'accessibility', 'age-suitability': 'age-rating', 'eula-apple': 'eula', license: 'license-agreement', 'privacy-policy': 'privacy', refund: 'refunds' };
    res.writeHead(301, { location: `${alias[1] ? `/${alias[1]}` : ''}/${destinations[alias[2]]}` }); res.end(); return;
  }
  const found = await resolve(pathname);
  const locale = pathname.match(/^\/(fr|de|es|ja|pt-BR)(?:\/|$)/)?.[1];
  const path = found ?? join(root, locale ? `${locale}/404.html` : '404.html');
  res.writeHead(found ? 200 : 404, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
  res.end(await readFile(path));
}).listen(port, '127.0.0.1', () => console.log(`dist/client on http://127.0.0.1:${port}`));
