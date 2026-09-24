// Prints an affiliate's links and checks the code, for the team approving an application.
//
//   node scripts/affiliate-link.mjs MOURAD27
//
// Prints the short link (what the affiliate shares), the App Store address it redirects to (the
// campaign App Analytics reports under), and whether the code has the right shape. Exit code 1
// when it does not. Nothing is stored anywhere: an approved code is simply one the team has told
// someone to use, and App Store Connect → App Analytics → Sources → Campaigns shows its results
// under the campaign `aff-<code>`.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { affiliateLink, affiliateStoreUrl, AFFILIATE_CODE_PATTERN, isValidCode } from '../lib/affiliate-code.mjs';
import { readNetlifyRedirects } from './lib/pages.mjs';

const input = process.argv[2];
if (!input || input === '--help' || input === '-h') {
  console.log('Usage: node scripts/affiliate-link.mjs <code>   e.g. MOURAD27');
  process.exit(input ? 0 : 1);
}

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const code = input.trim().toUpperCase();

// The provider token lives in app/store-badge.tsx; read it rather than repeat it.
const badge = fs.readFileSync(path.join(repoRoot, 'app/store-badge.tsx'), 'utf8');
const providerToken = badge.match(/APP_STORE_PROVIDER_TOKEN\s*=\s*'([^']*)'/)?.[1] ?? '';

const rule = readNetlifyRedirects().find((r) => r.from === '/r/:code');

const checks = [];
const ok = (pass, message) => checks.push({ pass, message });

ok(isValidCode(code), `code shape ${AFFILIATE_CODE_PATTERN} (3–12 letters or digits, then two digits)`);
ok(`aff-${code.toLowerCase()}`.length <= 40, 'campaign token fits App Store Connect’s 40-character limit');
ok(Boolean(rule), 'netlify.toml has the /r/:code redirect');
if (rule) {
  ok(rule.status === 302, `the redirect is a 302 (found ${rule.status})`);
  ok(rule.to.includes('ct=aff-:code'), 'the redirect carries ct=aff-<code>');
  if (providerToken) ok(rule.to.includes(`pt=${providerToken}`), 'the redirect carries the provider token (pt)');
}

const valid = checks.every((c) => c.pass);
console.log(`\nAffiliate code   ${code}`);
console.log(`Share link       ${affiliateLink(code)}`);
console.log(`Redirects to     ${affiliateStoreUrl(code, providerToken)}`);
console.log(`Campaign         aff-${code.toLowerCase()}  (App Analytics → Sources → Campaigns)`);
if (!providerToken) {
  console.log('\nNote: APP_STORE_PROVIDER_TOKEN is empty in app/store-badge.tsx. Until it is set (and');
  console.log('`&pt=<token>` added to the /r/:code rule in netlify.toml), App Analytics does not attribute campaigns.');
}
console.log('');
for (const c of checks) console.log(`${c.pass ? '✓' : '✗'} ${c.message}`);
console.log(valid ? '\nValid.' : '\nNot valid — do not hand this code out.');
process.exit(valid ? 0 : 1);
