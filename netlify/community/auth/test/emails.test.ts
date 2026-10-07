import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { emailLocales, type EmailLocale } from '../../../../emails/i18n.ts';
import {
  communityConfirmEmail,
  communityDigest,
  communityKinds,
  communityNotification,
  communityPage,
  communitySignIn,
  communityWelcome,
  plainExcerpt,
  DIGEST_LIMIT,
  type NotificationItem,
} from '../../../../emails/community.ts';
import { communityCopy } from '../../../../emails/community-i18n.ts';
import { communityTemplateNames, renderSample } from '../../../../emails/index.ts';

const evil = '<script>alert(1)</script> & "quotes"';
const item = (kind: NotificationItem['kind'], extra: Partial<NotificationItem> = {}): NotificationItem => ({
  kind,
  actorName: `Mallory ${evil}`,
  threadTitle: `Title ${evil}`,
  url: 'https://www.outbrick.site/community/t/1/title#post-2',
  excerpt: `Body ${evil}`,
  status: 'fixed',
  statusNote: `Note ${evil}`,
  version: '5.1',
  reason: `Reason ${evil}`,
  ...extra,
});
const links = { manageUrl: 'https://www.outbrick.site/community/settings', unsubscribeUrl: 'https://www.outbrick.site/api/community/email/unsubscribe?token=1.reply.x', unsubscribeKind: 'reply' as const };

function checkShell(html: string, locale: EmailLocale) {
  assert.match(html, new RegExp(`<html lang="${locale}"`));
  assert.match(html, /<meta name="color-scheme" content="light dark">/);
  assert.doesNotMatch(html, /<script>/);
  assert.doesNotMatch(html, /undefined|\[object Object\]/);
  assert.ok(Buffer.byteLength(html) < 100_000);
}

describe('community emails', () => {
  for (const locale of emailLocales) {
    test(`every template renders in ${locale}, with escaping`, () => {
      const rendered = [
        communitySignIn({ locale, url: 'https://www.outbrick.site/api/community/auth/email/verify?token=abc' }),
        communityConfirmEmail({ locale, url: 'https://www.outbrick.site/api/community/auth/email/confirm?token=abc', reason: 'provider' }),
        communityConfirmEmail({ locale, url: 'https://www.outbrick.site/api/community/auth/email/confirm?token=abc', reason: 'change' }),
        communityWelcome({ locale, name: `Ada ${evil}` }),
        ...communityKinds.map((kind) => communityNotification({ locale, item: item(kind), ...links })),
        communityDigest({ locale, items: communityKinds.map((kind) => item(kind)), notificationsUrl: 'https://www.outbrick.site/community/notifications', ...links, unsubscribeKind: 'all' }),
      ];
      for (const email of rendered) {
        checkShell(email.html, locale);
        assert.ok(email.subject.trim());
        assert.ok(email.text.length > 120);
        assert.doesNotMatch(email.subject, /undefined/);
      }
      // Member-supplied text is escaped in HTML and raw in text.
      const reply = rendered[4];
      assert.match(reply.html, /&lt;script&gt;alert\(1\)&lt;\/script&gt; &amp; &quot;quotes&quot;/);
      assert.match(reply.text, /<script>alert\(1\)<\/script>/);
      // The footer carries settings and the one-click unsubscribe for that kind.
      assert.match(reply.html, /community\/settings/);
      assert.match(reply.html, /email\/unsubscribe\?token=1\.reply\.x/);
      assert.ok(reply.html.includes(communityCopy[locale].footer.unsubscribe('reply').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)));
    });

    test(`copy for ${locale} is translated, not English`, () => {
      if (locale === 'en') return;
      const en = communityCopy.en;
      const c = communityCopy[locale];
      assert.notEqual(c.signin.subject, en.signin.subject);
      assert.notEqual(c.welcome.intro, en.welcome.intro);
      assert.notEqual(c.kinds.moderation.appeal, en.kinds.moderation.appeal);
      assert.notEqual(c.digest.cta, en.digest.cta);
      for (const status of Object.keys(en.statuses)) assert.ok(c.statuses[status], `${locale} status ${status}`);
    });
  }

  test('the welcome names every category and links the guidelines', () => {
    const w = communityWelcome({ locale: 'en', name: 'Ada' });
    for (const title of ['Announcements', 'Help & support', 'Bug reports', 'Ideas & feedback', 'Accessibility', 'Show & tell', 'General']) assert.ok(w.text.includes(title), title);
    assert.match(w.html, /\/community\/guidelines/);
    assert.match(w.text, /VoiceOver/);
  });

  test('status email shows the status in words and the team’s note', () => {
    const e = communityNotification({ locale: 'en', item: item('status', { statusNote: 'Fixed in 5.1' }), ...links });
    assert.match(e.subject, /is now Fixed$/);
    assert.match(e.html, /Fixed in 5\.1/);
  });

  test('moderation email gives the reason and how to appeal', () => {
    const e = communityNotification({ locale: 'en', item: item('moderation'), ...links });
    assert.match(e.html, /Reason/);
    assert.match(e.text, /reply to this email/);
  });

  test('digest lists at most ten and says how many more', () => {
    const items = Array.from({ length: DIGEST_LIMIT + 3 }, () => item('watched'));
    const e = communityDigest({ locale: 'en', items, notificationsUrl: 'https://www.outbrick.site/community/notifications', ...links });
    assert.match(e.subject, /^13 new things/);
    assert.match(e.text, /and 3 more/);
  });

  test('plainExcerpt: Markdown to text, at most 400 characters, cut at a word', () => {
    assert.equal(plainExcerpt('# Title\n\n**Bold** and _it_ [link](https://x.example) `code`\n> quote'), 'Title Bold and it link code quote');
    const long = plainExcerpt('word '.repeat(200));
    assert.ok(long.length <= 400);
    assert.ok(long.endsWith('…'));
    assert.doesNotMatch(long, /wor…$/);
  });

  test('link pages are noindex, have a main landmark and a POST button', () => {
    const html = communityPage({ locale: 'es', title: 'T <b>', body: 'B', form: { action: '/api/x?token=a"b', button: 'Go' } });
    assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
    assert.match(html, /<div role="main"/);
    assert.match(html, /<form method="post" action="\/api\/x\?token=a&quot;b"/);
    assert.match(html, /T &lt;b&gt;/);
  });

  test('every sample registered for the preview build renders in five languages', () => {
    const issue = { id: 'x', name: 'x', locales: {} };
    for (const name of communityTemplateNames) for (const locale of emailLocales) checkShell(renderSample(name, locale, issue).html, locale);
  });
});
