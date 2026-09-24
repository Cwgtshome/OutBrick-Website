// Runs before `vinext build`. Fetches OutBrick's public App Store record (Apple's iTunes Lookup
// API, no key needed) and writes lib/generated/app-store.json, which the rating line on the
// home page reads. The line only renders once there are enough real ratings to be worth
// showing (see MIN_RATINGS in app/components/app-store-rating.tsx), so the site never shows a
// number that is not Apple's. A failed request writes an empty record rather than failing the
// build: the rating line then simply stays hidden.

import { mkdir, writeFile } from 'node:fs/promises';

const out = new URL('../lib/generated/app-store.json', import.meta.url);
// Every key is always written (null when unknown), so the file's shape — and the types the
// lint reads from it — is the same whether or not the lookup succeeded. lib/structured-data.ts
// falls back to the last known values for the fields the game's JSON-LD needs.
let record = {
  averageUserRating: 0,
  userRatingCount: 0,
  version: null,
  releaseDate: null,
  currentVersionReleaseDate: null,
  minimumOsVersion: null,
  languages: null,
  genres: null,
  contentRating: null,
  fetchedAt: new Date().toISOString(),
};

try {
  const response = await fetch('https://itunes.apple.com/lookup?id=6807997465&country=us', { signal: AbortSignal.timeout(8000) });
  const { results = [] } = await response.json();
  const app = results[0];
  if (app) {
    record = {
      averageUserRating: Number(app.averageUserRating) || 0,
      userRatingCount: Number(app.userRatingCount) || 0,
      version: app.version ?? null,
      releaseDate: app.releaseDate ?? null,
      currentVersionReleaseDate: app.currentVersionReleaseDate ?? null,
      minimumOsVersion: app.minimumOsVersion ?? null,
      // ISO 639-1, lower-cased: ["en", "fr", …]
      languages: Array.isArray(app.languageCodesISO2A) ? app.languageCodesISO2A.map((code) => String(code).toLowerCase()) : null,
      genres: Array.isArray(app.genres) ? app.genres.filter((genre) => genre !== 'Games') : null,
      contentRating: app.trackContentRating ?? app.contentAdvisoryRating ?? null,
      fetchedAt: record.fetchedAt,
    };
  }
} catch (error) {
  console.warn(`[prebuild] App Store lookup failed, rating line stays hidden: ${error.message}`);
}

await mkdir(new URL('.', out), { recursive: true });
await writeFile(out, `${JSON.stringify(record, null, 2)}\n`);
console.log(`[prebuild] App Store: ${record.userRatingCount} ratings, average ${record.averageUserRating}`);
