#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { listHtmlFiles, fileToRoute, distDir, repoRoot } from './lib/pages.mjs';
import { extractRenderedCopy, extractMetadataCopy, findCarryovers, carryoverException } from './lib/rendered-copy.mjs';

const builtRoot = path.resolve(process.argv[2] ?? distDir);
const locales = ['fr', 'de', 'es', 'ja'];
const files = listHtmlFiles(builtRoot);
const fileByRoute = new Map(files.map((file) => [fileToRoute(file), file]));
const englishFiles = files.filter((file) => !/^(fr|de|es|ja)(?:\/|\.html)/.test(file) && !/^google[^/]*\.html$/.test(file));
const issues = new Map();
const exceptions = new Map();
const missing = [];
let pairs = 0;
for (const file of englishFiles) {
  const route = fileToRoute(file);
  const englishHtml = fs.readFileSync(path.join(builtRoot, file), 'utf8');
  const english = [...extractRenderedCopy(englishHtml), ...extractMetadataCopy(englishHtml)];
  for (const locale of locales) {
    const counterpart = `/${locale}${route === '/' ? '' : route}`;
    const localizedFile = fileByRoute.get(counterpart);
    if (!localizedFile) { missing.push(counterpart); continue; }
    pairs++;
    const localizedHtml = fs.readFileSync(path.join(builtRoot, localizedFile), 'utf8');
    const translated = [...extractRenderedCopy(localizedHtml, { localized: true }), ...extractMetadataCopy(localizedHtml)];
    const source = new Set(english.map((entry) => entry.text));
    for (const entry of translated) {
      const reason = source.has(entry.text) && carryoverException(entry, locale);
      if (reason) exceptions.set(`${locale}:${reason}:${entry.text}`, { locale, reason, text: entry.text });
    }
    for (const entry of findCarryovers(english, translated, locale)) {
      const key = `${locale}:${entry.kind}:${entry.text}`;
      const issue = issues.get(key) ?? { locale, kind: entry.kind, text: entry.text, locations: [], routes: [] };
      if (entry.location && !issue.locations.includes(entry.location)) issue.locations.push(entry.location);
      if (!issue.routes.includes(counterpart)) issue.routes.push(counterpart);
      issues.set(key, issue);
    }
  }
}
const report = { builtRoot, englishDocuments: englishFiles.length, comparedPairs: pairs, missing, issues: [...issues.values()], exceptions: [...exceptions.values()] };
fs.mkdirSync(path.join(repoRoot, 'outputs'), { recursive: true });
fs.writeFileSync(path.join(repoRoot, 'outputs/rendered-copy-qa.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ englishDocuments: report.englishDocuments, comparedPairs: pairs, missing: missing.length, carryovers: issues.size }));
for (const issue of issues.values()) console.log(`${issue.locale} ${issue.kind}: ${issue.text} [${issue.routes.slice(0, 3).join(', ')}${issue.routes.length > 3 ? `; ${issue.routes.length} routes` : ''}]`);
if (missing.length || issues.size) process.exitCode = 1;
