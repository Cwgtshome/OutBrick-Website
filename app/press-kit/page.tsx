import type { Metadata } from 'next';
import { Badge, Bond, Crumbs, EditorialPage, JsonLd } from '../editorial-shell';
import { friends } from '../../lib/mascots';
import { siteUrl } from '../../lib/site';
import { APP_STORE_URL } from '../store-badge';

const description =
  'The OutBrick press kit: fact sheet, current game captures, the app icon, all nine brick friends, the words to use, and a direct press contact.';

export const metadata: Metadata = {
  title: 'OutBrick press kit: logos, art and fact sheet',
  description,
  keywords: ['OutBrick press kit', 'OutBrick screenshots', 'OutBrick app icon', 'sliding-brick puzzle'],
  alternates: { canonical: '/press-kit' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/press-kit`,
    siteName: 'OutBrick',
    title: 'OutBrick press kit',
    description,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'The OutBrick Journey map in Garden City, with Bloo, Peach and Sprout' }],
  },
  twitter: { card: 'summary_large_image', title: 'OutBrick press kit', description, images: [`${siteUrl}/og.png`] },
};

const factSheet: [string, string][] = [
  ['Title', 'OutBrick (App Store listing: OutBrick: Block Sort Puzzle)'],
  ['Genre', 'Sliding-brick colour-sort puzzle'],
  ['Developer', 'Mourad Hamdi, independent'],
  ['Platforms', 'iPhone, iPad, Mac, Apple TV, Apple Vision Pro, and a standalone Apple Watch game'],
  ['Price', 'Free. Optional coins, boosters, Remove Ads and the Brick Pass. No subscription.'],
  ['Content', '2,000 solver-verified boards across 100 chapters; a Journey of 167 brick-built villages; nine brick friends'],
  ['Lives', 'Five (eight with the Brick Pass), one back every thirty minutes. A life is spent only when an attempt ends without a clear.'],
  ['Ads', 'Rewarded video only, in six opt-in placements, each capped daily. No banners, no interstitials, nothing interrupts a board.'],
  ['Pressure', 'A move limit per board. No clock, timer or countdown anywhere.'],
  ['Accessibility', 'Colour-blind glyphs on by default; every brick a VoiceOver element; Larger Text; Reduce Motion honoured'],
  ['Apple features', 'Live Activities, widgets, Game Center (57 achievements), iMessage stickers and challenges, Siri and Shortcuts, iCloud sync'],
];

const captures = [
  { src: '/assets/shots/b-early.jpg', name: 'A packed board', note: 'Start of a level' },
  { src: '/assets/shots/b-mid.jpg', name: 'Keys, locks and gates', note: 'Mid-board' },
  { src: '/assets/shots/b-clear.jpg', name: 'The clear card', note: 'Stars and coins' },
  { src: '/assets/villages/garden-city.jpg', name: 'Garden City', note: 'The Journey map' },
  { src: '/assets/villages/pirate-harbor.jpg', name: 'Pirate Harbor', note: 'The Journey map' },
  { src: '/assets/shots/s-shop.jpg', name: 'The shop', note: 'Optional bundles' },
];

export default function PressKitPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/press-kit#page`,
    url: `${siteUrl}/press-kit`,
    name: 'OutBrick press kit',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: {
      '@type': 'MobileApplication',
      name: 'OutBrick: Block Sort Puzzle',
      applicationCategory: 'GameApplication',
      operatingSystem: 'iOS, iPadOS, macOS, tvOS, visionOS, watchOS',
      installUrl: APP_STORE_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Press kit', item: `${siteUrl}/press-kit` },
    ],
  };

  return (
    <EditorialPage current="press-kit">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Press kit' }]} />
          <div className="ed-hero-grid">
            <div>
              <p className="ed-label">Press kit</p>
              <h1 className="ed-display">Everything you need to write about <em>OutBrick.</em></h1>
              <p className="ed-lede">
                A one-finger puzzle about sliding bricks out through the gate that matches their colour,
                set on a boulevard of 167 villages built entirely from brick. Here is the short version,
                the facts, and the art, all current.
              </p>
              <div className="ed-actions">
                <a className="ed-btn" href="mailto:mourad.hamdi@me.com?subject=OutBrick%20press">Email the developer</a>
                <a className="ed-link" href="#assets">Go to the downloads</a>
              </div>
            </div>
            <div aria-hidden="true" style={{ display: 'grid', justifyItems: 'center', gap: 18 }}>
              <img src="/assets/icon/icon-512.png" alt="" width={200} height={200} style={{ width: 'min(200px, 50vw)', borderRadius: '22%', boxShadow: '0 8px 0 #0b0730' }} />
            </div>
          </div>
        </div>
      </header>
      <Bond />

      <section className="ed-band-paper ed-band" aria-labelledby="short-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">The short version</p>
            <h2 id="short-title" className="ed-h2" style={{ marginTop: 14 }}>A board looks impossible, and isn’t.</h2>
            <div className="ed-prose" style={{ marginTop: 20 }}>
              <p>
                Slide a brick and it glides until something stops it. Get every brick out through the
                gate that matches its colour and the board is clear. A solver cleared all 2,000 boards
                before any of them shipped, so nothing a player meets is a dead end.
              </p>
              <p>
                OutBrick has lives and it has advertising, and it says exactly how both work: a life is
                spent only when an attempt ends without a clear, the first undo on every board is free,
                and every video is one the player pressed a button to see.
              </p>
            </div>
          </div>
          <dl className="ed-ledger">
            {factSheet.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
        </div>
      </section>

      <section id="assets" className="ed-band-ink ed-band" aria-labelledby="captures-title" style={{ scrollMarginTop: 70 }}>
        <div className="ed-wrap">
          <p className="ed-label">Current captures</p>
          <h2 id="captures-title" className="ed-h2" style={{ marginTop: 14 }}>The game as it ships.</h2>
          <p className="ed-lede" style={{ marginTop: 16 }}>Boards and Journey villages captured from the current build. Select one to open the file.</p>
          <div className="ed-captures">
            {captures.map((capture) => (
              <a key={capture.src} href={capture.src} download aria-label={`Download capture: ${capture.name}`}>
                <figure>
                  <div className="ed-capture">
                    <img src={capture.src} alt={`${capture.name}: ${capture.note}, OutBrick.`} width={239} height={520} loading="lazy" decoding="async" />
                  </div>
                  <figcaption>{capture.name}<span>{capture.note}</span></figcaption>
                </figure>
              </a>
            ))}
          </div>
          <p className="ed-meta" style={{ marginTop: 28, maxWidth: '64ch' }}>
            These are web-sized. For full-resolution captures of any screen, email the developer and say
            which device you need them for.
          </p>
        </div>
      </section>

      <section id="friends" className="ed-band-cream ed-band" aria-labelledby="friends-title" style={{ scrollMarginTop: 70 }}>
        <div className="ed-wrap">
          <p className="ed-label">Icon and cast</p>
          <h2 id="friends-title" className="ed-h2" style={{ marginTop: 14 }}>The app icon and all nine friends.</h2>
          <p className="ed-lede" style={{ marginTop: 16 }}>Transparent PNGs of the current brick-shaped cast. Please don’t recolour them or give them voices: in the game they speak in text bubbles.</p>
          <div className="ed-downloads">
            <a className="ed-download" href="/icon.png" download="outbrick-app-icon.png">
              <span className="plinth icon"><img src="/assets/icon/icon-512.png" alt="" width={512} height={512} loading="lazy" decoding="async" /></span>
              <b>App icon</b>
              <span>PNG, 1024 × 1024</span>
            </a>
            {friends.map((friend) => (
              <a
                className="ed-download"
                key={friend.id}
                href={friend.image.replace(/\.webp$/, ".png")}
                download={`outbrick-${friend.id}.png`}
                style={{ ['--c' as string]: friend.colour, ['--c-foot' as string]: friend.foot }}
              >
                <span className="plinth"><img src={friend.image} alt={friend.imageAlt} width={360} height={360} loading="lazy" decoding="async" /></span>
                <b>{friend.name}</b>
                <span>PNG, 360 × 360</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-band-paper ed-band" aria-labelledby="words-title">
        <div className="ed-wrap">
          <p className="ed-label">House style</p>
          <h2 id="words-title" className="ed-h2" style={{ marginTop: 14 }}>The right words.</h2>
          <div className="ed-words">
            <div data-tone="green">
              <h3 className="ed-h3">Please write</h3>
              <ul>
                <li>OutBrick, one word, capital O and B</li>
                <li>Sliding-brick colour-sort puzzle</li>
                <li>Nine brick friends (Bloo, Peach, Sprout, Bricko, Flurry, Moss, Poppy, Vio, Zippy)</li>
                <li>167 brick-built villages on the Journey</li>
                <li>A move limit, not a clock</li>
                <li>Opt-in rewarded videos; nothing interrupts a board</li>
              </ul>
            </div>
            <div data-tone="red">
              <h3 className="ed-h3">Please don’t write</h3>
              <ul>
                <li>“No ads” or “no lives”: both were true once and are not now</li>
                <li>That the friends talk or have voices</li>
                <li>That there is a timer, a Rush mode or a countdown</li>
                <li>That OutBrick has a subscription</li>
                <li>Brain-training or health claims of any kind</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="contact-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">Contact</p>
            <h2 id="contact-title" className="ed-h2" style={{ marginTop: 14 }}>Questions go to a person.</h2>
          </div>
          <div className="ed-prose">
            <p>For interviews, review access, asset requests or accessibility questions, write to Mourad directly. Replies come from the same address.</p>
            <p><a className="ed-link" style={{ fontSize: '1.2rem', marginTop: 0 }} href="mailto:mourad.hamdi@me.com?subject=OutBrick%20press">mourad.hamdi@me.com</a></p>
            <div className="ed-actions" style={{ marginTop: 28 }}>
              <Badge />
              <a className="ed-link" href="/contact">Or use the contact form</a>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
