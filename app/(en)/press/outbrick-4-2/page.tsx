import type { Metadata } from 'next';
import { Badge, Bond, Crumbs, EditorialPage, JsonLd } from '../../../editorial-shell';
import { founderQuote, pressBoilerplate } from '../../../../lib/business';
import { CONTACT_EMAIL, pageMetadata, siteUrl } from '../../../../lib/site';
import { APP_STORE_URL } from '../../../store-badge';
import { breadcrumbNode, graph, ids, ref, webPageNode } from '../../../../lib/structured-data';
import { pressReleases } from '../releases';

const release = pressReleases.find((r) => r.slug === 'outbrick-4-2')!;
const path = `/press/${release.slug}`;
const title = 'OutBrick 4.2 arrives on the App Store — press release';
const description =
  'OutBrick 4.2 is on the App Store: 2,000 solver-verified boards, 167 brick villages and nine brick friends, on iPhone, iPad, Mac, Apple TV, Vision Pro and Watch.';

export const metadata: Metadata = {
  ...pageMetadata({ path, title, description }),
  other: { 'article:published_time': release.published, 'article:modified_time': release.published },
};

const facts: [string, string][] = [
  ['Version', '4.2, released on the App Store on 22 September 2026'],
  ['Platforms', 'iPhone, iPad, Mac, Apple TV, Apple Vision Pro, and a standalone Apple Watch game'],
  ['Price', 'Free, with optional in-app purchases: coins, boosters, Remove Ads and the Brick Pass. No subscription.'],
  ['Content', '2,000 solver-verified boards across 100 chapters, a Journey of 167 brick-built villages, nine brick friends'],
  ['Age rating', '4+'],
  ['Developer', 'OutBrick, founded by Mourad Hamdi'],
];

export default function PressReleasePage() {
  const article = {
    '@type': 'NewsArticle',
    '@id': `${siteUrl}${path}#article`,
    mainEntityOfPage: ref(`${siteUrl}${path}#webpage`),
    headline: release.headline.length > 110 ? release.short : release.headline,
    alternativeHeadline: release.short,
    description,
    datePublished: `${release.published}T09:00:00+00:00`,
    dateModified: `${release.published}T09:00:00+00:00`,
    image: [`${siteUrl}/og.png`],
    author: ref(ids.organization),
    publisher: ref(ids.organization),
    about: {
      '@type': 'MobileApplication',
      name: 'OutBrick: Block Sort Puzzle',
      softwareVersion: '4.2',
      applicationCategory: 'GameApplication',
      operatingSystem: 'iOS, iPadOS, macOS, tvOS, visionOS, watchOS',
      installUrl: APP_STORE_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  };
  const structuredData = graph(
    webPageNode({ url: `${siteUrl}${path}`, name: release.headline, description, mainEntity: ref(`${siteUrl}${path}#article`) }),
    article,
    breadcrumbNode(`${siteUrl}${path}`, [
      { name: 'OutBrick', path: '/' },
      { name: 'Press room', path: '/press' },
      { name: release.short, path },
    ]),
  );

  return (
    <EditorialPage current="press" className="bz">
      <header className="ed-band-ink ed-hero bz-releasehead">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/press', label: 'Press room' }, { label: 'OutBrick 4.2' }]} />
          <p className="ed-label" style={{ marginTop: 32 }}>Press release · For immediate release</p>
          <h1 className="bz-release-h1">{release.headline}</h1>
          <p className="ed-lede">{release.dek}</p>
          <p className="ed-meta" style={{ marginTop: 20 }}>
            <time dateTime={release.published}>{release.dateline}</time> · OutBrick
          </p>
        </div>
      </header>
      <Bond />

      <article className="ed-band-paper ed-band" aria-label="Press release text">
        <div className="ed-wrap bz-release">
          <div className="bz-release-body ed-prose">
            <p>
              <b>{release.dateline}</b> — OutBrick 4.2, the current version of <b>OutBrick: Block Sort Puzzle</b>,
              is available now on the App Store. It was released on 22 September 2026 for iPhone, iPad, Mac,
              Apple TV and Apple Vision Pro, with a standalone game for Apple Watch.
            </p>
            <p>
              OutBrick is a sliding-brick colour-sort puzzle. Slide a brick and it glides until something stops
              it; get every brick out through the gate that matches its colour and the board is clear. There
              are 2,000 boards across 100 chapters, and a solver cleared every one of them before it shipped,
              so no board a player meets is a dead end.
            </p>
            <p>
              Between boards, the Journey is a boulevard of 167 villages built entirely from brick, and nine
              brick friends — Bloo, Peach, Sprout, Bricko, Flurry, Moss, Poppy, Vio and Zippy — take turns on the
              home screen, each with a victory move of their own.
            </p>
            <h2>Pressure without a clock</h2>
            <p>
              Every board shows a move target and a move limit from the first tap; there is no timer or
              countdown anywhere in the game. The first undo on every board is free. Players hold five lives,
              eight with the Brick Pass, and a life is spent only when an attempt ends without a clear.
            </p>
            <p>
              OutBrick is free. Advertising is rewarded video only, in six opt-in placements, each capped daily;
              there are no banners or interstitials and nothing interrupts a board. Remove Ads switches
              advertising off for good, and the Brick Pass turns it off while it is held. There is no subscription.
            </p>
            <h2>Built for Apple, built for everyone</h2>
            <p>
              Colour-blind glyphs are on by default, every brick is a VoiceOver element, and Larger Text and
              Reduce Motion are honoured. OutBrick supports Live Activities, widgets, Game Center with 57
              achievements, iMessage stickers and challenges, Siri and Shortcuts, and iCloud sync, so progress
              follows a player from one device to the next.
            </p>
            <figure className="bz-quote bz-quote-inline">
              <blockquote><p>{founderQuote}</p></blockquote>
              <figcaption><span><b>Mourad Hamdi</b>Founder &amp; CEO, OutBrick</span></figcaption>
            </figure>
            <h2>Availability</h2>
            <p>
              OutBrick: Block Sort Puzzle is available now, free, on the <a href={APP_STORE_URL}>App Store</a>.
              More at <a href="/">www.outbrick.site</a>.
            </p>
            <h2>About OutBrick</h2>
            <p>{pressBoilerplate}</p>
            <p className="bz-endmark" aria-hidden="true">###</p>
          </div>

          <aside className="bz-release-side" aria-label="Release facts and contacts">
            <div className="bz-sidecard">
              <h2 className="ed-label">Fact sheet</h2>
              <dl>
                {facts.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
              </dl>
            </div>
            <div className="bz-sidecard">
              <h2 className="ed-label">Media contact</h2>
              <p>Mourad Hamdi, Founder &amp; CEO</p>
              <p><a href={`mailto:${CONTACT_EMAIL}?subject=OutBrick%204.2`}>{CONTACT_EMAIL}</a></p>
              <p><a href="/contact?topic=press#form">Contact form (Press &amp; media)</a></p>
            </div>
            <div className="bz-sidecard">
              <h2 className="ed-label">Assets</h2>
              <p>App icon, wordmark, the nine friends and current captures are in the <a href="/press-kit">press kit</a>.</p>
              <Badge />
            </div>
          </aside>
        </div>
      </article>

      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
