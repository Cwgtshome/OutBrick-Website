// Compare actual rendered copy, independently of the translation-key inventory.
import { decodeEntities } from './pages.mjs';

export const normalizeCopy = (value = '') => decodeEntities(value).replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const copyAttributes = new Set(['alt', 'title', 'aria-label', 'aria-description', 'placeholder']);

/** Quote-aware tokenizer for generated HTML; tags inside scripts never become text. */
export function extractRenderedCopy(html, { localized = false } = {}) {
  const entries = [];
  const stack = [];
  const tokens = html.match(/<!--[\s\S]*?-->|<![^>]*>|<\/?[A-Za-z][^>"']*(?:"[^"]*"|'[^']*'|[^>"']*)*>|[^<]+/g) ?? [];
  for (const token of tokens) {
    if (token.startsWith('<!--') || token.startsWith('<!')) continue;
    if (token.startsWith('</')) {
      const tag = token.match(/^<\/([\w:-]+)/)?.[1].toLowerCase();
      const index = stack.map((item) => item.tag).lastIndexOf(tag);
      if (index >= 0) stack.splice(index);
      continue;
    }
    if (token.startsWith('<')) {
      const tag = token.match(/^<([\w:-]+)/)?.[1].toLowerCase();
      if (!tag) continue;
      const attrs = Object.fromEntries([...token.matchAll(/\s([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)].map((m) => [m[1].toLowerCase(), decodeEntities(m[2] ?? m[3] ?? m[4] ?? '')]));
      const parentSkip = stack.some((item) => item.skip);
      // lang=en is only exempt inside a localized document, never at its root.
      const skip = parentSkip || ['script', 'style', 'template', 'head'].includes(tag) || attrs['aria-hidden'] === 'true' || attrs.translate === 'no' || (localized && attrs.lang === 'en' && !['html', 'body'].includes(tag));
      const context = { tag, attrs, skip };
      const sectionId = [...stack].reverse().find((item) => item.tag === 'section')?.attrs.id ?? ''; 
      if (!skip) {
        for (const name of copyAttributes) if (attrs[name]) entries.push({ text: normalizeCopy(attrs[name]), kind: name, tag, id: attrs.id ?? '', href: attrs.href ?? '', sectionId });
        if (['input', 'button'].includes(tag) && ['submit', 'button'].includes(attrs.type) && attrs.value) entries.push({ text: normalizeCopy(attrs.value), kind: 'value', tag });
      }
      if (!voidTags.has(tag) && !token.endsWith('/>')) stack.push(context);
      continue;
    }
    if (stack.some((item) => item.skip)) continue;
    const text = normalizeCopy(token);
    if (!text) continue;
    const parent = stack.at(-1);
    const anchor = [...stack].reverse().find((item) => item.tag === 'a');
    entries.push({ text, kind: 'text', tag: parent?.tag ?? '', id: parent?.attrs.id ?? '', href: anchor?.attrs.href ?? '', sectionId: [...stack].reverse().find((item) => item.tag === 'section')?.attrs.id ?? '' });
  }
  return entries;
}

// Whole-value exceptions only: names never exempt the prose around them.
const identities = new Set([
  'OutBrick', '· OutBrick', 'OutBrick.', 'OutBrick 4.2', 'OutBrick: Block Sort Puzzle', 'OutBrick Editorial Desk', 'Mourad Hamdi', 'MH', 'OB',
  'App Store', 'Apple EULA', 'Game Center', 'Messages', 'iPhone', 'iPad', 'Mac', 'Apple TV', 'Apple Watch', 'Apple Vision Pro', 'VoiceOver', 'watchOS', 'visionOS',
  'Bloo', 'Peach', 'Sprout', 'Bricko', 'Zippy', 'Vio', 'Moss', 'Flurry', 'Poppy',
  'Garden City', 'Celebration Square', 'Bamboo Springs', 'Waterwheel Woods', 'Desert Oasis', 'Windmill Walk', 'Rainbow Canal', 'Dinosaur Grove', 'Crystal Valley', 'Firefly Wetlands', 'Market Day', 'Hidden Courtyards', 'Lavender Hills', 'Button Factory', 'Cherry Blossom Town', 'First Light', 'Cloud Carnival', 'Autumn Orchard', 'Sunflower Railway', 'Coral Cove', 'Pirate Harbor', 'Royal Rose Court', 'Mushroom Forest', 'Unicorn Meadow', 'Festival Gardens', 'Seashell Beach', 'Clover Farm', 'Ember Volcano', 'Peppermint Plaza', 'Grand Promenade', 'Moonlit Meadow', 'Honeybee Hollow', 'Spaceport Gardens', 'Snowflake Village',
  'Celeste', 'Hades', 'Pokémon GO', 'Tetris', 'Wordle', 'Stardew Valley', 'Monument Valley', 'Papers, Please', 'Angry Birds', 'Minecraft', 'Animal Crossing', 'The Sims', 'Klotski', 'Block Out! - Color Sort Puzzle', 'Block Buster - No Timer', 'Color Block Jam',
  'Deutsch', 'Français', 'Español', '日本語', 'English', 'Português (Brasil)', 'APA 7', 'MIT', 'UX', '#OutBrick', '#BlockSortPuzzle',
  // Help Centre (lib/help): keys, Apple feature names, product and game names, Markdown samples,
  // and game labels the game itself leaves in English in some languages.
  'Esc', '(Escape)', 'H', 'Tab', 'Return', 'Space', 'Google', 'Zoom', 'Widget', 'Spotlight:', 'Handoff:', '@name', '- item', 'Off | On',
  'Brick Pass', 'Brick Royale', 'Slide & Match', 'UFO', 'Premium', 'Pass', 'Passes', 'Shop', 'Shop.', 'Avatar', 'Boss', 'Normal', 'Booster', 'Roadmap', 'Combos', 'Journey', 'Play next level',
]);
// Same spelling is legitimate only in these specific target languages.
const nativeShared = {
  fr: new Set(['Obstacle', 'Obstacles', 'Combo', 'combo', 'Cascade', 'cascade', 'Cascades', 'Village', 'Rotor', 'Points', 'score', 'BOSS', 'Action', 'actions', 'Collection', 'Collection.', 'Important', 'Missions', 'Notifications', 'Orange', 'Pause', 'Plus', 'Secrets', 'Statue', 'Triangle', 'rotors', 'village', 'France', 'Canada', 'Sources', 'Marketing', 'Design', 'Type', 'Journal', 'Contact', 'Menu', 'Commission', 'Questions', 'Support', 'Newsletter', 'Version', 'Standard', 'Genre', 'Clip', 'Stickers', 'boulevard', 'motivation', 'parents', 'gamification', 'insight', 'flow', 'progression', 'expertise', 'nature', 'attention', 'routines', 'stress', 'smartphones']),
  de: new Set(['Portal', 'Rotor', 'Events', 'Videos', 'BOSS', 'In', 'in', 'Orange', 'Pause', 'Pink', 'Plus', 'Statue', 'optional', '(optional)', 'System', 'Name', 'Website', 'Level', 'Newsletter:', 'Widgets:', 'Journal', 'Support', 'Newsletter', 'Version', 'Standard', 'Design', 'Marketing', 'Community', 'Team', 'Genre', 'Clip', 'Stickers', 'Early Access', 'Gamification', 'gamification', 'flow', 'stress', 'smartphones']),
  es: new Set(['Portal', 'Combo', 'combo', 'Rotor', 'Calm Glow', 'Calm Outline', 'No', 'nostalgia', 'Widgets:', 'Marketing', 'Clip', 'Stickers']),
  'pt-BR': new Set(['Portal', 'Combo', 'combo', 'Rotor', 'Item', 'Use', 'A', 'Português (Brasil)', 'nostalgia', 'Marketing', 'Design', 'Cookies', 'Menu', 'No']),
  ja: new Set(),
};
// Original bibliographic titles preserve source identities, not surrounding explanations.
const citationTitles = new Set([
  'Apple. (2026, August 11). Apple Arcade’s lineup of hit puzzle games gets even bigger with the addition of Block Blast!+ and Art of Fauna: Cozy Puzzles+. Apple Newsroom.',
  'Apple. (2026, September 9). Apple unveils iPhone Duo. Apple Newsroom.',
  'World Wide Web Consortium. (2025, September 16). Understanding Success Criterion 1.4.1: Use of color.',
  'OutBrick. (2026, September 24). OutBrick privacy policy: Data, ads and choices.',
  'OutBrick. (2026, September 24). Your OutBrick privacy choices and controls.',
  'Sokoban.jp. (n.d.). Rules.',
  'World Health Organization — Gaming disorder', 'Pew Research Center — Teens and video games today', 'Martinez, Froehlich & Fogarty — Playing on Hard Mode', 'Ryan, Rigby & Przybylski — The motivational pull of video games', 'Keogh & Richardson — Waiting to play', 'W3C — WCAG 2.2', 'MIT News — Teaching maker skills through gaming', 'Harvard Health Publishing — Brain-training claims',
]);
export function carryoverException(entry, locale) {
  const text = normalizeCopy(entry.text);
  if (!/[A-Za-z]/.test(text)) return 'numbers-or-non-Latin';
  // French counts that read the same as English ("2 guides", "167 villages", "25 minutes").
  if (locale === 'fr' && /^\d[\d\s]* (?:guides?|villages|minutes)$/.test(text)) return 'native-shared-spelling';
  if (locale === 'de' && /^Level \d+\.?$/.test(text)) return 'native-shared-spelling';
  if (locale === 'fr' && /^\d[\d\s]* points$/.test(text)) return 'native-shared-spelling';
  // An iOS settings path segment ("Settings › Apple Account › iCloud"): the product name is the same everywhere.
  if (/^› iCloud$/.test(text)) return 'proper-name-or-technical-identity';
  if (identities.has(text)) return 'proper-name-or-technical-identity';
  if (nativeShared[locale]?.has(text)) return 'native-shared-spelling';
  if (/^(?:https?:\/\/\S*|(?:www\.)?[\w.-]+\.(?:com|site)(?:\/\S*)?|YOURCODE\d+)$/.test(text)) return 'URL-or-example-identifier';
  if (/^(?:PNG|SVG|WEBP|JPG|JPEG|PDF)(?:,?\s+\d+\s*[×x]\s*\d+)?$/.test(text)) return 'file-format-and-dimensions';
  // Storage keys and cookie names the privacy policy lists in <code>: the same in every language.
  if (/^(?:ob-consent|_ga(?:_<container-id>)?)$/.test(text)) return 'storage-key-or-cookie-name';
  if (citationTitles.has(text) && (/source|reference/.test(entry.sectionId ?? '') || (entry.href ?? '').startsWith('https://'))) return 'original-citation-title';
  return null;
}

export function findCarryovers(englishEntries, localizedEntries, locale) {
  const source = new Set(englishEntries.map((entry) => normalizeCopy(entry.text)));
  const fragments = [...source].filter((text) => text.length >= 25 && (text.match(/[A-Za-z]+/g)?.length ?? 0) >= 4 && !carryoverException({ text }, locale));
  const results = [];
  for (const entry of localizedEntries) {
    const text = normalizeCopy(entry.text);
    if (source.has(text) && !carryoverException(entry, locale)) results.push(entry);
    else if (!carryoverException(entry, locale)) {
      for (const fragment of fragments) if (text.includes(fragment) && !carryoverException({ ...entry, text: fragment }, locale)) results.push({ ...entry, text: fragment, containingText: text });
    }
  }
  return results;
}

/** Human-facing head and structured-data copy, excluding explicit source identities. */
export function extractMetadataCopy(html) {
  const entries = [];
  const attributes = (tag) => Object.fromEntries([...tag.matchAll(/\s([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)].map((m) => [m[1].toLowerCase(), decodeEntities(m[2] ?? m[3] ?? m[4] ?? '')]));
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (title) entries.push({ text: normalizeCopy(title), kind: 'metadata:title' });
  const keys = new Set(['description', 'og:title', 'og:description', 'og:image:alt', 'twitter:title', 'twitter:description', 'twitter:image:alt']);
  for (const match of html.matchAll(/<meta\b[^>"']*(?:"[^"]*"|'[^']*'|[^>"']*)*>/gi)) {
    const attrs = attributes(match[0]);
    const key = attrs.name ?? attrs.property;
    if (keys.has(key) && attrs.content) entries.push({ text: normalizeCopy(attrs.content), kind: `metadata:${key}` });
  }
  const humanFields = new Set(['headline', 'description', 'caption', 'jobTitle', 'knowsAbout', 'alternativeHeadline', 'name', 'text', 'articleSection', 'keywords', 'contactType']);
  const sourceRelations = new Set(['citation', 'translationOfWork', 'isBasedOn']);
  const sourceTypes = new Set(['CreativeWork', 'ScholarlyArticle', 'Book', 'Article']);
  const walk = (value, field = '', location = '$') => {
    if (sourceRelations.has(field)) return;
    if (typeof value === 'string') {
      if (humanFields.has(field) && normalizeCopy(value)) entries.push({ text: normalizeCopy(value), kind: `jsonld:${field}`, location });
      return;
    }
    if (Array.isArray(value)) { value.forEach((item, index) => walk(item, field, `${location}[${index}]`)); return; }
    if (!value || typeof value !== 'object') return;
    const types = Array.isArray(value['@type']) ? value['@type'] : [value['@type']];
    // Only explicitly English, off-site bibliographic works retain their source copy.
    if (types.some((type) => sourceTypes.has(type)) && value.inLanguage === 'en' && /^https?:\/\//.test(value.url ?? '') && !/^https?:\/\/(?:www\.)?outbrick\.site(?:\/|$)/.test(value.url)) return;
    for (const [key, child] of Object.entries(value)) walk(child, key, `${location}.${key}`);
  };
  let scriptIndex = 0;
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attributes(`<script ${match[1]}>`).type !== 'application/ld+json') continue;
    let value;
    try { value = JSON.parse(match[2]); } catch (error) { throw new Error(`Invalid JSON-LD script ${scriptIndex}: ${error.message}`); }
    walk(value, '', `$script[${scriptIndex++}]`);
  }
  return entries;
}
