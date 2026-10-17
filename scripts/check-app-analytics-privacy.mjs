// Verify the actual prerendered policy/control/help output, not only dictionary keys.
// node --experimental-strip-types scripts/check-app-analytics-privacy.mjs
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { appAnalyticsPrivacy } from '../lib/i18n/app-analytics-privacy.ts';
import { extractRenderedCopy, normalizeCopy } from './lib/rendered-copy.mjs';
const locales = ['en', 'fr', 'de', 'es', 'ja', 'pt-BR'];
const canonical = Object.keys(appAnalyticsPrivacy.en).sort();
let checked = 0;
for (const locale of locales) {
  const copy = appAnalyticsPrivacy[locale],
    prefix = locale === 'en' ? '' : `${locale}/`;
  assert.deepEqual(
    Object.keys(copy).sort(),
    canonical,
    `${locale}: full disclosure fields`,
  );
  for (const route of ['privacy', 'privacy-choices']) {
    const html = await readFile(
      new URL(`../dist/client/${prefix}${route}.html`, import.meta.url),
      'utf8',
    );
    const entries = extractRenderedCopy(html);
    const visibleText = entries.map((x) => x.text);
    for (const key of route === 'privacy'
      ? ['intro', 'headline', 'change', 'changeTitle', 'storage']
      : ['choicesSummary', 'storage'])
      assert.ok(
        visibleText.includes(normalizeCopy(copy[key])),
        `${locale}/${route}: rendered ${key}`,
      );

    const app = entries
      .filter((x) => x.sectionId === 'app-analytics')
      .map((x) => x.text);
    const required =
      route === 'privacy'
        ? [
            'consent',
            'data',
            'identifier',
            'exclusions',
            'withdrawal',
            'provider',
            'retention',
          ]
        : ['consent', 'withdrawal'];
    for (const key of required)
      assert.ok(
        app.includes(normalizeCopy(copy[key])),
        `${locale}/${route}: rendered ${key} disclosure`,
      );
    assert.ok(
      entries.some(
        (x) =>
          x.sectionId === 'diagnostics' &&
          x.text === normalizeCopy(copy.diagnostics),
      ),
      `${locale}/${route}: separate MetricKit diagnostics`,
    );
    assert.ok(
      entries.some(
        (x) =>
          x.sectionId === 'analytics' &&
          x.text === normalizeCopy(copy.websiteScope),
      ),
      `${locale}/${route}: separate website scope`,
    );
    assert.ok(
      html.includes('data-ob-consent-open'),
      `${locale}/${route}: website cookie control preserved`,
    );
    if (locale !== 'en')
      for (const key of required)
        assert.ok(
          !app.includes(normalizeCopy(appAnalyticsPrivacy.en[key])),
          `${locale}/${route}: no English fallback for ${key}`,
        );
    if (locale === 'en')
      assert.ok(
        !entries.some((x) =>
          /no analytics (SDK )?in (the app|OutBrick)|app contains no analytics|it has no analytics/i.test(
            x.text,
          ),
        ),
        `${route}: stale blanket claim removed`,
      );
    if (route === 'privacy') {
      const rendered = entries.map((x) => x.text);
      for (const key of [
        'children',
        'partners',
        'formsProvider',
        'formTechnical',
        'formRetention',
        'formDeletion',
        'databaseProvider',
        'communityProvider',
        'hostingLogs',
        'uploadsProvider',
        'translationProvider',
      ])
        assert.ok(
          rendered.includes(normalizeCopy(copy[key])),
          `${locale}: rendered current ${key}`,
        );
      assert.ok(
        entries.some(
          (x) =>
            x.sectionId === 'analytics' &&
            x.text === normalizeCopy(copy.retention),
        ),
        `${locale}: shared-property retention accurate for website too`,
      );
    }
    checked++;
  }
  const guide = extractRenderedCopy(
    await readFile(
      new URL(
        `../dist/client/${prefix}community/help/progress-privacy-and-account.html`,
        import.meta.url,
      ),
      'utf8',
    ),
  );
  assert.ok(
    guide.some((x) => x.href === `/${prefix}privacy#app-analytics`),
    `${locale}: help links to new app disclosure`,
  );
  checked++;
}
console.log(
  `App analytics privacy acceptance: ${checked} built policy/control/help pages across 6 languages passed.`,
);
