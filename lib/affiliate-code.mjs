// Affiliate codes and links: one source for the application form on /affiliates (which
// proposes a code as the applicant types) and scripts/affiliate-link.mjs (which the team runs
// to check a code and print its links). Plain JavaScript so the script runs on any Node the
// site builds with; the TypeScript pages import it as is (tsconfig has allowJs).
//
// A code is 3–12 letters or digits followed by a two-digit suffix: MOURAD27. It is shown in
// capitals, and used in lower case in the link, outbrick.site/r/mourad27, which netlify.toml
// 302-redirects to the App Store with the campaign token `ct=aff-mourad27`.

/** The whole code: a 3–12 character stem, then exactly two digits. Case-insensitive. */
export const AFFILIATE_CODE_PATTERN = /^[A-Za-z0-9]{3,12}[0-9]{2}$/;

/** Where the short links live. */
export const AFFILIATE_LINK_BASE = 'https://www.outbrick.site/r/';

/** The App Store listing the redirect lands on (kept in step with app/store-badge.tsx). */
export const AFFILIATE_STORE_URL = 'https://apps.apple.com/us/app/outbrick/id6807997465';

/**
 * The stem of a code from free text: accents folded ("Zoë" -> "ZOE"), everything that is not a
 * letter or digit dropped, upper-cased, cut to 12. When `firstWordOnly` is set (the stem comes
 * from a person's full name rather than a chosen handle), the first word is used if it is long
 * enough on its own: "Mourad Hamdi" -> "MOURAD".
 *
 * @param {string} text
 * @param {{ firstWordOnly?: boolean }} [options]
 * @returns {string} the stem, or "" when fewer than three usable characters remain
 */
export function codeStem(text, { firstWordOnly = false } = {}) {
  const clean = (value) =>
    value
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^A-Za-z0-9]/g, '')
      .toUpperCase();
  let stem = clean(text);
  if (firstWordOnly) {
    const first = clean(text.trim().split(/\s+/)[0] ?? '');
    if (first.length >= 3) stem = first;
  }
  stem = stem.slice(0, 12);
  return stem.length >= 3 ? stem : '';
}

/**
 * A proposed code: the stem plus a two-digit suffix (10–99).
 *
 * @param {string} stem from {@link codeStem}
 * @param {number} suffix 10–99
 * @returns {string} e.g. "MOURAD27", or "" when there is no stem
 */
export function proposeCode(stem, suffix) {
  if (!stem) return '';
  const two = String(Math.min(99, Math.max(10, Math.round(suffix))));
  return `${stem}${two}`;
}

/**
 * @param {string} code
 * @returns {boolean} whether `code` has the shape of an affiliate code
 */
export function isValidCode(code) {
  return AFFILIATE_CODE_PATTERN.test(code);
}

/**
 * @param {string} code
 * @returns {string} the short link, lower case: https://www.outbrick.site/r/mourad27
 */
export function affiliateLink(code) {
  return `${AFFILIATE_LINK_BASE}${code.toLowerCase()}`;
}

/**
 * The App Store address the short link redirects to. App Analytics only attributes a campaign
 * when the link also carries the provider token (`pt`), so pass it once it is configured.
 *
 * @param {string} code
 * @param {string} [providerToken]
 * @returns {string}
 */
export function affiliateStoreUrl(code, providerToken = '') {
  const params = new URLSearchParams({ mt: '8', ct: `aff-${code.toLowerCase()}` });
  if (providerToken) params.set('pt', providerToken);
  return `${AFFILIATE_STORE_URL}?${params.toString()}`;
}
