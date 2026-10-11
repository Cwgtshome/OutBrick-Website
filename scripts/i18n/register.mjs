// Lets Node's TypeScript stripping load the site's modules, which import siblings without an
// extension (the bundler resolves them). Used by the i18n scripts:
//   node --experimental-strip-types --import ./scripts/i18n/register.mjs scripts/i18n/extract.mts
import { register } from 'node:module';

register(
  'data:text/javascript,' +
    encodeURIComponent(`
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
export async function resolve(specifier, context, next) {
  if ((specifier.startsWith('.') || specifier.startsWith('/')) && !/\\.[cm]?[jt]sx?$|\\.json$/.test(specifier) && context.parentURL?.startsWith('file:')) {
    for (const ext of ['.ts', '.tsx', '/index.ts']) {
      const url = new URL(specifier + ext, context.parentURL);
      if (existsSync(fileURLToPath(url))) return next(url.href, context);
    }
  }
  return next(specifier, context);
}
`),
  import.meta.url,
);
