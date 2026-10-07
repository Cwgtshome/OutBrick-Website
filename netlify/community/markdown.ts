// Markdown to HTML for community posts, with no dependency and an allow-list by construction.
//
// Nothing a member types ever reaches the page as markup. The renderer walks the text itself
// and emits only the elements below; every other character is escaped. That is a stronger
// promise than "render with a library, then sanitise": there is no sanitiser to get wrong,
// because no member-supplied tag or attribute is ever copied into the output.
//
//   Blocks:  paragraphs (a single newline is a <br>), # headings (rendered as <h3>, and ###
//            or deeper as <h4>, so a post never outranks the page's own h1 and h2), > quotes,
//            - / * / + and 1. lists (nesting by indentation), ``` fenced code, --- rules.
//   Inline:  **bold**, *italic* (and the _underscore_ forms), `code`, [text](https://…),
//            bare https:// addresses, @mentions, and backslash escapes.
//   Links:   http and https only, or a path on this site ("/community/…"); anything else
//            (javascript:, data:, vbscript:, protocol-relative //host) is shown as plain text.
//            Every link carries rel="ugc nofollow noopener".
//   Images:  only the community's own uploads (phase 2): ![alt text](upload:<id>) becomes
//            <img src="/api/community/uploads/<id>" alt="…" loading="lazy" width height>, and
//            only when the caller passes that upload in (it exists and may be used) and the alt
//            text is not empty. An empty alt is counted in `imagesWithoutAlt` and renders
//            nothing (posting refuses it with fields.body = 'image_needs_alt'); an unknown upload
//            renders its alt text. Any other ![alt](url) becomes a link labelled with its alt
//            text, so the address is still reachable and the alt text still reads.
//   Mentions: "@Display Name" becomes a link to /community/u/<id> when a member by that name
//            exists. The caller looks the names up (see mentionCandidates) and passes them in;
//            the renderer returns the ids it linked so notifications can be created.
//
// Kept free of enums, namespaces and runtime imports so it runs under strip-types and can be
// shared with the client's preview if that ever moves to the browser.

export type MentionTarget = { id: number; displayName: string };

export type UploadTarget = { width: number; height: number };

export type RenderOptions = {
  /** Members by lower-cased display name. */
  mentions?: Map<string, MentionTarget>;
  /** Uploads this body may show, by id (see uploadCandidates). */
  uploads?: Map<string, UploadTarget>;
};

export type RenderResult = {
  html: string;
  mentionedIds: number[];
  hasLink: boolean;
  /** Upload ids rendered as images. */
  uploadIds: string[];
  /** ![](upload:…) images with empty alt text: a post with any is refused. */
  imagesWithoutAlt: number;
  /** ![alt](upload:…) images whose upload was not passed in (unknown, deleted, or someone else's). */
  unknownUploads: number;
};

const uploadRef = /^upload:([A-Za-z0-9_-]{22})$/;

/** Every upload id a body refers to as an image, for the caller to look up. */
export function uploadCandidates(md: string): string[] {
  const out = new Set<string>();
  const re = /!\[[^\]\n]{0,1000}\]\(\s*<?upload:([A-Za-z0-9_-]{22})>?/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md)) && out.size < 50) out.add(m[1]);
  return [...out];
}

const MAX_BLOCK_DEPTH = 8;
const MAX_INLINE_DEPTH = 12;

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => (c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;'));
}

/** The address if it is one we will link to, normalised; otherwise null. */
export function safeHref(raw: string): string | null {
  const url = raw.trim();
  if (!url || url.length > 2000) return null;
  // Control characters and whitespace inside an address are how "java\tscript:" tricks work.
  for (let i = 0; i < url.length; i++) {
    const code = url.charCodeAt(i);
    if (code <= 0x20 || (code >= 0x7f && code <= 0x9f)) return null;
  }
  if (url.startsWith('/') && !url.startsWith('//') && !url.startsWith('/\\')) return url;
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null;
  if (!parsed.hostname) return null;
  return parsed.href;
}

const linkAttrs = 'rel="ugc nofollow noopener"';

/**
 * Every string a mention in `md` could be naming, lower-cased: for "@Ada Lovelace, hi" that is
 * "ada", "ada lovelace", "ada lovelace, hi" … up to five words or 40 characters, with trailing
 * punctuation trimmed. The caller looks these up in one query and passes the hits back in.
 */
export function mentionCandidates(md: string): string[] {
  const out = new Set<string>();
  const re = /(?<![\p{L}\p{N}_@])@([^\s@][^\n@]{0,60})/gu;
  let m: RegExpExecArray | null;
  let guard = 0;
  while ((m = re.exec(md)) && guard++ < 200) {
    const words = m[1].split(' ');
    let acc = '';
    for (let i = 0; i < Math.min(words.length, 5); i++) {
      if (!words[i]) break;
      acc = i === 0 ? words[i] : `${acc} ${words[i]}`;
      if (acc.length > 40) break;
      const lower = acc.toLowerCase();
      if (lower.length >= 2) out.add(lower);
      const trimmed = lower.replace(/[\p{P}\p{S}]+$/u, '');
      if (trimmed.length >= 2) out.add(trimmed);
    }
  }
  return [...out].slice(0, 400);
}

/** True when the Markdown contains something that will render as a link (for the review queue). */
export function containsLink(md: string): boolean {
  return renderMarkdown(md).hasLink;
}

export function renderMarkdown(md: string, options: RenderOptions = {}): RenderResult {
  const state: State = { mentions: options.mentions ?? new Map(), mentioned: new Set(), hasLink: false, uploads: options.uploads ?? new Map(), images: new Set(), missingAlt: 0, unknownUploads: 0 };
  const lines = md.replace(/\r\n?/g, '\n').replace(/\t/g, '    ').replaceAll(String.fromCharCode(0), '\uFFFD').split('\n');
  const html = renderBlocks(lines, state, 0);
  return { html, mentionedIds: [...state.mentioned], hasLink: state.hasLink, uploadIds: [...state.images], imagesWithoutAlt: state.missingAlt, unknownUploads: state.unknownUploads };
}

type State = {
  mentions: Map<string, MentionTarget>;
  mentioned: Set<number>;
  hasLink: boolean;
  uploads: Map<string, UploadTarget>;
  images: Set<string>;
  missingAlt: number;
  unknownUploads: number;
};

// Blocks --------------------------------------------------------------------------------------

const fenceRe = /^ {0,3}(`{3,}|~{3,})\s*([^`\s]*)[^`]*$/;
const headingRe = /^ {0,3}(#{1,6})(?:[ \t]+(.*?))?(?:[ \t]+#+)?[ \t]*$/;
const quoteRe = /^ {0,3}> ?(.*)$/;
const bulletRe = /^( {0,3})([-*+])[ \t]+(.*)$/;
const orderedRe = /^( {0,3})(\d{1,9})[.)][ \t]+(.*)$/;
const ruleRe = /^ {0,3}(?:(?:-[ \t]*){3,}|(?:\*[ \t]*){3,}|(?:_[ \t]*){3,})$/;
const blank = (line: string) => line.trim() === '';

function startsBlock(line: string): boolean {
  return fenceRe.test(line) || headingRe.test(line) || quoteRe.test(line) || bulletRe.test(line) || orderedRe.test(line) || ruleRe.test(line);
}

function renderBlocks(lines: string[], state: State, depth: number): string {
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (blank(line)) {
      i++;
      continue;
    }

    const fence = depth < MAX_BLOCK_DEPTH ? fenceRe.exec(line) : null;
    if (fence) {
      const marker = fence[1];
      const lang = /^[A-Za-z0-9_+-]{1,20}$/.test(fence[2]) ? fence[2].toLowerCase() : '';
      const body: string[] = [];
      i++;
      // An unclosed fence runs to the end of the post, as in CommonMark: the rest is code.
      while (i < lines.length) {
        const close = new RegExp(`^ {0,3}${marker[0] === '`' ? '`' : '~'}{${marker.length},}\\s*$`).test(lines[i]);
        if (close) {
          i++;
          break;
        }
        body.push(lines[i]);
        i++;
      }
      const cls = lang ? ` class="language-${lang}"` : '';
      out.push(`<pre><code${cls}>${escapeHtml(body.join('\n'))}</code></pre>`);
      continue;
    }

    const heading = headingRe.exec(line);
    if (heading) {
      const tag = heading[1].length <= 2 ? 'h3' : 'h4';
      const text = (heading[2] ?? '').trim();
      if (text) out.push(`<${tag}>${inline(text, state)}</${tag}>`);
      i++;
      continue;
    }

    if (ruleRe.test(line)) {
      out.push('<hr>');
      i++;
      continue;
    }

    if (quoteRe.test(line)) {
      const inner: string[] = [];
      while (i < lines.length && !blank(lines[i])) {
        const q = quoteRe.exec(lines[i]);
        if (q) inner.push(q[1]);
        else if (startsBlock(lines[i])) break;
        else inner.push(lines[i]); // lazy continuation
        i++;
      }
      const content = depth < MAX_BLOCK_DEPTH ? renderBlocks(inner, state, depth + 1) : `<p>${inline(inner.join('\n'), state)}</p>`;
      out.push(`<blockquote>${content}</blockquote>`);
      continue;
    }

    const bullet = bulletRe.exec(line);
    const ordered = bullet ? null : orderedRe.exec(line);
    if (bullet || ordered) {
      const isOrdered = Boolean(ordered);
      const items: string[][] = [];
      const baseIndent = (bullet ?? ordered)![1].length;
      let start = 1;
      if (ordered) start = Math.min(Number.parseInt(ordered[2], 10), 999999999);
      while (i < lines.length) {
        const b = bulletRe.exec(lines[i]);
        const o = b ? null : orderedRe.exec(lines[i]);
        const m = isOrdered ? o : b;
        if (m && m[1].length <= baseIndent + 1) {
          items.push([m[3]]);
          i++;
          continue;
        }
        if (items.length === 0) break;
        const current = items[items.length - 1];
        if (blank(lines[i])) {
          // A blank line continues the item only when the next line is indented under it.
          const next = lines[i + 1];
          if (next !== undefined && /^ {2,}\S/.test(next)) {
            current.push('');
            i++;
            continue;
          }
          break;
        }
        if (/^ {2,}\S/.test(lines[i])) {
          current.push(lines[i].replace(/^ {2,4}/, ''));
          i++;
          continue;
        }
        // Lazy continuation of the item's paragraph, unless the line opens another block.
        if (startsBlock(lines[i]) || (isOrdered ? bulletRe.test(lines[i]) : orderedRe.test(lines[i]))) break;
        current.push(lines[i]);
        i++;
      }
      const rendered = items.map((item) => {
        let content = depth < MAX_BLOCK_DEPTH ? renderBlocks(item, state, depth + 1) : `<p>${inline(item.join('\n'), state)}</p>`;
        // A one-paragraph item is "tight": no <p> inside the <li>.
        const tight = /^<p>([\s\S]*)<\/p>$/.exec(content);
        if (tight && !tight[1].includes('<p>')) content = tight[1];
        return `<li>${content}</li>`;
      });
      const open = isOrdered ? (start !== 1 ? `<ol start="${start}">` : '<ol>') : '<ul>';
      out.push(`${open}${rendered.join('')}${isOrdered ? '</ol>' : '</ul>'}`);
      continue;
    }

    // A paragraph: everything up to a blank line or the start of another block.
    const para: string[] = [line];
    i++;
    while (i < lines.length && !blank(lines[i]) && !startsBlock(lines[i])) {
      para.push(lines[i]);
      i++;
    }
    out.push(`<p>${inline(para.map((l) => l.trim()).join('\n'), state)}</p>`);
  }
  return out.join('\n');
}

// Inline --------------------------------------------------------------------------------------

type InlineFlags = { links: boolean; mentions: boolean };

function inline(text: string, state: State): string {
  return parseInline(text, state, 0, { links: true, mentions: true });
}

const punct = /[!-/:-@[-`{-~]/;
const isSpace = (c: string | undefined) => c === undefined || /\s/.test(c);
const isWordChar = (c: string | undefined) => c !== undefined && /[\p{L}\p{N}_]/u.test(c);

function parseInline(s: string, state: State, depth: number, flags: InlineFlags): string {
  let out = '';
  let i = 0;
  // Delimiters that were looked for and not found from some position: any later opener of the
  // same kind cannot find one either, so the search is skipped. This keeps "*a*a*a…" and
  // "[[[[…" linear instead of quadratic.
  const missing = new Set<string>();

  while (i < s.length) {
    const c = s[i];

    if (c === '\\' && i + 1 < s.length && punct.test(s[i + 1])) {
      out += escapeHtml(s[i + 1]);
      i += 2;
      continue;
    }

    if (c === '\n') {
      out += '<br>\n';
      i++;
      continue;
    }

    if (c === '`') {
      let n = 1;
      while (s[i + n] === '`') n++;
      const key = `code${n}`;
      if (!missing.has(key)) {
        const close = findBacktickRun(s, i + n, n);
        if (close >= 0) {
          let code = s.slice(i + n, close).replace(/\n/g, ' ');
          if (code.length > 2 && code.startsWith(' ') && code.endsWith(' ') && code.trim()) code = code.slice(1, -1);
          out += `<code>${escapeHtml(code)}</code>`;
          i = close + n;
          continue;
        }
        missing.add(key);
      }
      out += escapeHtml(s.slice(i, i + n));
      i += n;
      continue;
    }

    if (c === '!' && s[i + 1] === '[' && flags.links && !missing.has('link')) {
      const link = parseLink(s, i + 1);
      const upload = link ? uploadRef.exec(link.url.trim()) : null;
      if (link && upload) {
        const alt = link.text.replace(/\\([!-/:-@[-`{-~])/g, '$1').replace(/\s+/g, ' ').trim();
        const target = state.uploads.get(upload[1]);
        if (!alt) state.missingAlt++;
        else if (target) {
          state.images.add(upload[1]);
          out += `<img src="/api/community/uploads/${upload[1]}" alt="${escapeHtml(alt)}" loading="lazy" width="${Math.trunc(target.width)}" height="${Math.trunc(target.height)}">`;
        } else {
          state.unknownUploads++;
          out += escapeHtml(alt);
        }
        i = link.end;
        continue;
      }
      if (link) {
        const href = safeHref(link.url);
        const label = escapeHtml(link.text.trim() || link.url);
        if (href) {
          state.hasLink = true;
          out += `<a href="${escapeHtml(href)}" ${linkAttrs}>${label}</a>`;
        } else out += label;
        i = link.end;
        continue;
      }
      if (link === null) missing.add('link');
    }

    if (c === '[' && flags.links && !missing.has('link')) {
      const link = parseLink(s, i);
      if (link) {
        const href = safeHref(link.url);
        const label = depth < MAX_INLINE_DEPTH ? parseInline(link.text, state, depth + 1, { links: false, mentions: false }) : escapeHtml(link.text);
        if (href) {
          state.hasLink = true;
          out += `<a href="${escapeHtml(href)}" ${linkAttrs}>${label || escapeHtml(href)}</a>`;
        } else out += label;
        i = link.end;
        continue;
      }
      if (link === null) missing.add('link');
    }

    if (flags.links && (c === 'h' || c === 'H') && !isWordChar(s[i - 1]) && /^https?:\/\//i.test(s.slice(i, i + 8))) {
      const m = /^https?:\/\/[^\s<>"'`]+/i.exec(s.slice(i));
      if (m) {
        let url = m[0];
        // Trailing punctuation belongs to the sentence, and an unbalanced ")" to the prose.
        while (/[.,;:!?*_~]$/.test(url)) url = url.slice(0, -1);
        while (url.endsWith(')') && (url.match(/\(/g)?.length ?? 0) < (url.match(/\)/g)?.length ?? 0)) url = url.slice(0, -1);
        const href = safeHref(url);
        if (href && url.length > 8) {
          state.hasLink = true;
          out += `<a href="${escapeHtml(href)}" ${linkAttrs}>${escapeHtml(url)}</a>`;
          i += url.length;
          continue;
        }
      }
    }

    if (c === '@' && flags.mentions && !isWordChar(s[i - 1]) && s[i - 1] !== '@') {
      const target = longestMention(s, i + 1, state.mentions);
      if (target) {
        state.mentioned.add(target.member.id);
        out += `<a class="mention" href="/community/u/${target.member.id}">@${escapeHtml(target.member.displayName)}</a>`;
        i += 1 + target.length;
        continue;
      }
    }

    if ((c === '*' || c === '_') && depth < MAX_INLINE_DEPTH) {
      let n = 1;
      while (s[i + n] === c) n++;
      const leftFlanking = !isSpace(s[i + n]) && !(c === '_' && isWordChar(s[i - 1]));
      if (leftFlanking) {
        // Try the strongest form the run allows first: *** is bold italic, ** bold, * italic.
        const tried = tryEmphasis(s, i, n, c, state, depth, flags, missing);
        if (tried) {
          out += tried.html;
          i = tried.end;
          continue;
        }
      }
      out += escapeHtml(s.slice(i, i + n));
      i += n;
      continue;
    }

    out += escapeHtml(c);
    i++;
  }
  return out;
}

function findBacktickRun(s: string, from: number, n: number): number {
  let j = s.indexOf('`', from);
  while (j >= 0) {
    let k = 0;
    while (s[j + k] === '`') k++;
    if (k === n) return j;
    j = s.indexOf('`', j + k);
  }
  return -1;
}

function tryEmphasis(
  s: string,
  i: number,
  n: number,
  c: string,
  state: State,
  depth: number,
  flags: InlineFlags,
  missing: Set<string>,
): { html: string; end: number } | null {
  for (const width of n >= 3 ? [3, 2, 1] : n === 2 ? [2, 1] : [1]) {
    const key = `${c}${width}`;
    if (missing.has(key)) continue;
    const start = i + width;
    const close = findCloser(s, start + (n - width), c, width);
    if (close < 0) {
      missing.add(key);
      continue;
    }
    const inner = s.slice(start, close);
    if (!inner.trim()) continue;
    const body = parseInline(inner, state, depth + 1, flags);
    const html = width === 3 ? `<strong><em>${body}</em></strong>` : width === 2 ? `<strong>${body}</strong>` : `<em>${body}</em>`;
    return { html, end: close + width };
  }
  return null;
}

/** The index of a run of exactly `width` delimiters that can close emphasis, or -1. */
function findCloser(s: string, from: number, c: string, width: number): number {
  let j = s.indexOf(c, from);
  while (j >= 0) {
    let k = 0;
    while (s[j + k] === c) k++;
    const rightFlanking = !isSpace(s[j - 1]) && !(c === '_' && isWordChar(s[j + k]));
    // A longer run closes from its start: "**bold***" is bold followed by a literal "*".
    if (rightFlanking && k >= width) return j;
    j = s.indexOf(c, j + k);
  }
  return -1;
}

/** [text](url) starting at `i` (which must be "["); undefined when this "[" is not a link, null when no "]" follows at all. */
function parseLink(s: string, i: number): { text: string; url: string; end: number } | null | undefined {
  if (s.indexOf(']', i) < 0) return null;
  let depthB = 0;
  let j = i;
  // Link text is capped, which also keeps "[[[[…" from costing a scan to the end per bracket.
  const limit = Math.min(s.length, i + 1000);
  for (; j < limit; j++) {
    const ch = s[j];
    if (ch === '\\') {
      j++;
      continue;
    }
    if (ch === '[') depthB++;
    else if (ch === ']') {
      depthB--;
      if (depthB === 0) break;
    } else if (ch === '\n' && s[j + 1] === '\n') return undefined;
  }
  if (j >= limit) return undefined;
  const text = s.slice(i + 1, j);
  if (s[j + 1] !== '(') return undefined;
  let k = j + 2;
  while (s[k] === ' ') k++;
  let url = '';
  let parens = 0;
  if (s[k] === '<') {
    const close = s.indexOf('>', k);
    if (close < 0 || close - k > 2001 || s.slice(k, close).includes('\n')) return undefined;
    url = s.slice(k + 1, close);
    k = close + 1;
  } else {
    const from = k;
    // Addresses are capped too (safeHref refuses longer ones anyway).
    const urlLimit = Math.min(s.length, k + 2001);
    for (; k < urlLimit; k++) {
      const ch = s[k];
      if (/\s/.test(ch)) break;
      if (ch === '(') parens++;
      else if (ch === ')') {
        if (parens === 0) break;
        parens--;
      }
    }
    if (k >= urlLimit && urlLimit < s.length) return undefined;
    url = s.slice(from, k);
  }
  // An optional "title" is accepted and ignored.
  while (s[k] === ' ') k++;
  if (s[k] === '"' || s[k] === "'") {
    const q = s[k];
    const close = s.indexOf(q, k + 1);
    if (close < 0) return undefined;
    k = close + 1;
    while (s[k] === ' ') k++;
  }
  if (s[k] !== ')') return undefined;
  return { text, url, end: k + 1 };
}

function longestMention(s: string, from: number, mentions: Map<string, MentionTarget>): { member: MentionTarget; length: number } | null {
  if (mentions.size === 0) return null;
  const rest = s.slice(from, from + 41);
  let best: { member: MentionTarget; length: number } | null = null;
  for (let len = 1; len <= rest.length; len++) {
    const piece = rest.slice(0, len);
    if (piece.includes('\n')) break;
    const member = mentions.get(piece.toLowerCase());
    // The name must end at a word boundary: "@Ada" must not match inside "@Adam".
    if (member && !(isWordChar(piece[piece.length - 1]) && isWordChar(rest[len]))) best = { member, length: len };
  }
  return best;
}

/** Plain text of a Markdown body, for excerpts and email previews: no markup, not escaped. */
export function plainText(md: string): string {
  return md
    .replace(/\r\n?/g, '\n')
    .replace(/^ {0,3}(`{3,}|~{3,}).*$/gm, '')
    .replace(/!?\[([^\]\n]*)\]\([^)\n]*\)/g, '$1')
    .replace(/^ {0,3}#{1,6}\s+/gm, '')
    .replace(/^ {0,3}>\s?/gm, '')
    .replace(/^ {0,3}(?:[-*+]|\d{1,9}[.)])\s+/gm, '')
    .replace(/(\*\*|__|\*|_|`)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
