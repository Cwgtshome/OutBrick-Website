import { test } from 'node:test';
import assert from 'node:assert/strict';
import { containsLink, mentionCandidates, plainText, renderMarkdown, safeHref } from './markdown.ts';

const html = (md: string, mentions?: Map<string, { id: number; displayName: string }>) => renderMarkdown(md, { mentions }).html;

/** The only tags and attributes the renderer may ever emit. */
const allowedTag = /^<\/?(p|br|h3|h4|strong|em|code|pre|blockquote|ul|ol|li|hr|a)(\s|>|$)/;
const allowedAttr = /^(href|rel|class|start)$/;

function assertSafe(out: string): void {
  for (const tag of out.match(/<[^>]*>/g) ?? []) {
    assert.match(tag, allowedTag, `unexpected tag ${tag}`);
    for (const [, name] of tag.matchAll(/\s([a-zA-Z-]+)=/g)) assert.match(name, allowedAttr, `unexpected attribute ${name} in ${tag}`);
    const href = /href="([^"]*)"/.exec(tag)?.[1];
    if (href) assert.ok(/^(https?:\/\/|\/(?!\/))/.test(href), `unsafe href ${href}`);
  }
  // Outside the allowed tags, no "<" survives: everything else was escaped.
  assert.ok(!out.replace(/<[^>]*>/g, (tag) => (allowedTag.test(tag) ? '' : tag)).includes('<'), `unescaped markup in ${out}`);
}

void test('escapes raw HTML everywhere', () => {
  const cases = [
    '<script>alert(1)</script>',
    '<img src=x onerror=alert(1)>',
    '**<b>bold</b>**',
    '# <svg onload=alert(1)>',
    '> <iframe src="https://evil.example"></iframe>',
    '- <style>body{}</style>',
    '`<script>`',
    '```\n<script>alert(1)</script>\n```',
    '"quoted" & \'single\'',
  ];
  for (const md of cases) {
    const out = html(md);
    assertSafe(out);
    assert.ok(!out.includes('<script') && !out.includes('<img') && !out.includes('<iframe'), out);
  }
  assert.equal(html('a < b & c > d "e" \'f\''), '<p>a &lt; b &amp; c &gt; d &quot;e&quot; &#39;f&#39;</p>');
});

void test('refuses dangerous link schemes', () => {
  const bad = [
    '[x](javascript:alert(1))',
    '[x](JavaScript:alert(1))',
    '[x](java\tscript:alert(1))',
    '[x](  javascript:alert(1))',
    '[x](data:text/html;base64,PHNjcmlwdD4=)',
    '[x](vbscript:msgbox)',
    '[x](//evil.example/path)',
    '[x](/\\evil.example)',
    '[x](file:///etc/passwd)',
    '[x](mailto:a@b.c)',
    '![x](javascript:alert(1))',
    'javascript:alert(1)',
  ];
  for (const md of bad) {
    const out = html(md);
    assertSafe(out);
    assert.ok(!out.includes('href'), `${md} produced a link: ${out}`);
  }
  for (const href of ['javascript:alert(1)', 'data:text/html,x', '//x.y', ' javascript:x', 'jav&#x09;ascript:x']) assert.equal(safeHref(href), null, href);
  assert.equal(safeHref('https://www.outbrick.site/x'), 'https://www.outbrick.site/x');
  assert.equal(safeHref('/community/faq'), '/community/faq');
});

void test('attribute injection through link addresses is escaped', () => {
  const out = html('[x](https://a.example/"onmouseover="alert(1))');
  assertSafe(out);
  assert.ok(!/"\s*onmouseover=/.test(out), out);
  const out2 = html('[x](https://a.example/?q=\'><script>)');
  assertSafe(out2);
  const out3 = html('https://a.example/"><script>alert(1)</script>');
  assertSafe(out3);
  assert.ok(!out3.includes('<script'), out3);
  const out4 = html('[<b onclick=x>label</b>](https://a.example)');
  assertSafe(out4);
  assert.match(out4, /&lt;b onclick=x&gt;label&lt;\/b&gt;/);
});

void test('links carry rel="ugc nofollow noopener"; images become links labelled with their alt', () => {
  assert.equal(html('[OutBrick](https://www.outbrick.site)'), '<p><a href="https://www.outbrick.site/" rel="ugc nofollow noopener">OutBrick</a></p>');
  assert.equal(html('See https://example.com/a.'), '<p>See <a href="https://example.com/a" rel="ugc nofollow noopener">https://example.com/a</a>.</p>');
  assert.equal(html('(https://example.com/a_(b))'), '<p>(<a href="https://example.com/a_(b)" rel="ugc nofollow noopener">https://example.com/a_(b)</a>)</p>');
  assert.equal(html('![A red brick](https://example.com/b.png)'), '<p><a href="https://example.com/b.png" rel="ugc nofollow noopener">A red brick</a></p>');
  assert.ok(containsLink('see https://a.example'));
  assert.ok(!containsLink('no links here, just text.'));
  assert.ok(!containsLink('[x](javascript:alert(1))'));
});

void test('headings never outrank the page', () => {
  assert.equal(html('# One'), '<h3>One</h3>');
  assert.equal(html('## Two'), '<h3>Two</h3>');
  assert.equal(html('### Three ###'), '<h4>Three</h4>');
  assert.equal(html('###### Six'), '<h4>Six</h4>');
  assert.equal(html('#hashtag'), '<p>#hashtag</p>');
});

void test('emphasis, nesting and unclosed delimiters', () => {
  assert.equal(html('**bold** and *italic* and _also_'), '<p><strong>bold</strong> and <em>italic</em> and <em>also</em></p>');
  assert.equal(html('**bold *nested* bold**'), '<p><strong>bold <em>nested</em> bold</strong></p>');
  assert.equal(html('***both***'), '<p><strong><em>both</em></strong></p>');
  assert.equal(html('**unclosed bold'), '<p>**unclosed bold</p>');
  assert.equal(html('*unclosed'), '<p>*unclosed</p>');
  assert.equal(html('2 * 3 * 4'), '<p>2 * 3 * 4</p>');
  assert.equal(html('snake_case_name'), '<p>snake_case_name</p>');
  assert.equal(html('\\*not italic\\*'), '<p>*not italic*</p>');
  assertSafe(html('*'.repeat(50) + 'x' + '_'.repeat(50)));
});

void test('code spans and fences, including an unclosed fence', () => {
  assert.equal(html('use `a < b` here'), '<p>use <code>a &lt; b</code> here</p>');
  assert.equal(html('``code with ` tick``'), '<p><code>code with ` tick</code></p>');
  assert.equal(html('`unclosed'), '<p>`unclosed</p>');
  assert.equal(html('```js\nconst a = "<b>";\n```'), '<pre><code class="language-js">const a = &quot;&lt;b&gt;&quot;;</code></pre>');
  assert.equal(html('```\nno end\n**not bold**'), '<pre><code>no end\n**not bold**</code></pre>');
  assert.equal(html('```"><script>\nx\n```'), '<pre><code>x</code></pre>');
  assert.equal(html('**`code` inside**'), '<p><strong><code>code</code> inside</strong></p>');
});

void test('paragraphs, line breaks, quotes and lists', () => {
  assert.equal(html('one\ntwo\n\nthree'), '<p>one<br>\ntwo</p>\n<p>three</p>');
  assert.equal(html('> quoted\n> still'), '<blockquote><p>quoted<br>\nstill</p></blockquote>');
  assert.equal(html('> outer\n>> inner'), '<blockquote><p>outer</p>\n<blockquote><p>inner</p></blockquote></blockquote>');
  assert.equal(html('- a\n- b'), '<ul><li>a</li><li>b</li></ul>');
  assert.equal(html('1. one\n2. two'), '<ol><li>one</li><li>two</li></ol>');
  assert.equal(html('3. three\n4. four'), '<ol start="3"><li>three</li><li>four</li></ol>');
  assert.equal(html('- a\n  - nested\n- b'), '<ul><li><p>a</p>\n<ul><li>nested</li></ul></li><li>b</li></ul>');
  assert.equal(html('---'), '<hr>');
  assertSafe(html('>'.repeat(200) + ' deep'));
  assertSafe(html(Array.from({ length: 100 }, (_, i) => `${' '.repeat(i * 2)}- level ${i}`).join('\n')));
});

void test('mentions link to members and report who was mentioned', () => {
  const mentions = new Map([
    ['ada lovelace', { id: 3, displayName: 'Ada Lovelace' }],
    ['ada', { id: 4, displayName: 'Ada' }],
    ['<b>', { id: 5, displayName: '<b>' }],
  ]);
  const r = renderMarkdown('Thanks @Ada Lovelace, and @ada. Not @Adam, not me@ada.example, not `@Ada`.', { mentions });
  assert.equal(
    r.html,
    '<p>Thanks <a class="mention" href="/community/u/3">@Ada Lovelace</a>, and <a class="mention" href="/community/u/4">@Ada</a>. Not @Adam, not me@ada.example, not <code>@Ada</code>.</p>',
  );
  assert.deepEqual(r.mentionedIds.sort(), [3, 4]);
  const evil = renderMarkdown('@<b>', { mentions });
  assert.equal(evil.html, '<p><a class="mention" href="/community/u/5">@&lt;b&gt;</a></p>');
  assert.equal(renderMarkdown('[@Ada](https://x.example)', { mentions }).mentionedIds.length, 0);
  assert.equal(renderMarkdown('@Nobody here', { mentions }).html, '<p>@Nobody here</p>');
  assert.deepEqual(mentionCandidates('hi @Ada Lovelace, bye'), ['ada', 'ada lovelace,', 'ada lovelace', 'ada lovelace, bye']);
  assert.deepEqual(mentionCandidates('email me@example.com'), []);
});

void test('pathological input stays fast', () => {
  const inputs = ['*a'.repeat(10000), '['.repeat(20000), '**a'.repeat(6000), '`'.repeat(20000), '_a '.repeat(6000), '[a](' .repeat(5000), '@a '.repeat(6000), '> '.repeat(10000)];
  for (const md of inputs) {
    const start = performance.now();
    const out = renderMarkdown(md, { mentions: new Map([['a', { id: 1, displayName: 'a' }]]) }).html;
    const ms = performance.now() - start;
    assertSafe(out);
    assert.ok(ms < 1500, `${md.slice(0, 10)}… took ${ms} ms`);
  }
});

void test('plainText strips markup for excerpts', () => {
  assert.equal(plainText('# Title\n\n**Bold** [link](https://x.y) and `code`\n- item'), 'Title Bold link and code item');
});
