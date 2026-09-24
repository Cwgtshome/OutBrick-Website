// Serves dist/client the way Netlify does for this site: `/about` answers from `about.html`,
// `/c/<n>` is rewritten to `/c` (see netlify.toml), and anything else missing is the 404 page.
// Used by CI and scripts/audit-a11y.mjs; not part of the deployed site.
//
//   node scripts/serve-dist.mjs [port]      (default 4321)
//
// `/r/<code>` answers with the same 302 as netlify.toml's affiliate rule.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

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
};

async function file(path) {
  try {
    return (await stat(path)).isFile() ? path : null;
  } catch {
    return null;
  }
}

async function resolve(pathname) {
  if (pathname.startsWith('/c/')) return join(root, 'c.html');
  const clean = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  const base = join(root, clean).replace(/\/$/, '');
  return (await file(`${base}.html`)) ?? (await file(join(base, 'index.html'))) ?? (await file(base));
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  // Affiliate links, as netlify.toml's `/r/:code` rule answers them.
  const affiliate = pathname.match(/^\/r\/([^/]+)\/?$/);
  if (affiliate) {
    res.writeHead(302, { location: `https://apps.apple.com/us/app/outbrick/id6807997465?mt=8&ct=aff-${affiliate[1]}` });
    res.end();
    return;
  }
  const found = await resolve(pathname);
  const path = found ?? join(root, '404.html');
  res.writeHead(found ? 200 : 404, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
  res.end(await readFile(path));
}).listen(port, '127.0.0.1', () => console.log(`dist/client on http://127.0.0.1:${port}`));
