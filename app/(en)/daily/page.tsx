import type { Metadata } from 'next';
import { dailyPool } from '../../../lib/daily-board';
import { pageMetadata, siteUrl } from '../../../lib/site';
import { DailyPlay, DailyStamp } from '../../components/daily-board';
import { APP_STORE_URL } from '../../store-badge';
import { AppStoreBadge, Course, editorialNav, VillageFooter, VillageHeader } from '../../village-shell';
import '../../styles/play.css';

/**
 * The daily board: one OutBrick board a day, the same for everyone, picked
 * from the UTC date by lib/daily-board.ts. The page is one static file; which
 * board it shows is decided on the client (app/components/daily-board.tsx).
 * Sharing a clear goes through the existing result pages, /play/result/<board>-<stars>.
 */
const title = 'OutBrick daily board: one free puzzle a day, the same for all';
const description =
  'Play today’s OutBrick board free in your browser: the same solver-checked sliding-brick puzzle for everyone, new every day at midnight UTC.';

export const metadata: Metadata = pageMetadata({ path: '/daily', title, description });

const rows = [
  {
    title: 'The same board for everyone',
    body: 'The board is picked from the date in UTC, so a friend on the other side of the world plays exactly the one you did.',
    colour: '#ffc53d',
    foot: '#b8780a',
  },
  {
    title: 'A new one every day at midnight UTC',
    body: `The daily boards take turns, ${dailyPool.length} of them from a gentle warm-up to a proper gridlock, and every one was cleared by a solver before it went up.`,
    colour: '#26b9b0',
    foot: '#087e84',
  },
  {
    title: 'Three stars, said plainly',
    body: 'A clear earns one star. Clearing inside the solver’s own move target earns two. Doing that without a single undo earns three.',
    colour: '#3b8bf0',
    foot: '#1d4fa6',
  },
  {
    title: 'Share the stars, not the answer',
    body: 'Share from the clear card and your friends get a link to the same board with your stars on it. The moves you made stay yours.',
    colour: '#e2352f',
    foot: '#8e1c18',
  },
  {
    title: 'Take as long as you like',
    body: 'There is no clock here, and none in the game. Undo as often as you want; only the third star asks you not to.',
    colour: '#7b5cf0',
    foot: '#4a35b0',
  },
];

export default function DailyPage() {
  const pageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/daily#page`,
    url: `${siteUrl}/daily`,
    name: 'OutBrick daily board',
    description,
    inLanguage: 'en',
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
      { '@type': 'ListItem', position: 2, name: 'Play guide', item: `${siteUrl}/play` },
      { '@type': 'ListItem', position: 3, name: 'Daily board', item: `${siteUrl}/daily` },
    ],
  };

  return (
    <div className="ob-site">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={editorialNav} label="Primary navigation" />

      <main id="main">
        <section className="band-ink play-hero daily-hero">
          <div className="wrap play-hero-grid daily-grid">
            <div className="daily-intro">
              <Course />
              <DailyStamp />
              <h1>
                One board a day, <span className="gold">the same for everyone.</span>
              </h1>
            </div>
            <div className="daily-more">
              <p className="lede">
                Everyone who opens this page today gets the same OutBrick board. Slide every brick out through the
                gate of its own colour; a brick glides until something stops it. Clear it in the target number of
                moves without an undo for three stars, then share your result and see who can match it.
              </p>
              <p className="daily-note">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
                  <path d="M3.5 10h17M8 3v4M16 3v4" />
                </svg>
                A new board every day at midnight UTC.
              </p>
              <ul className="play-keys">
                <li><b>Drag</b> a brick in any direction.</li>
                <li><b>Keyboard:</b> Tab to a brick, then Shift + an arrow key.</li>
                <li><b>Share</b> your stars from the clear card.</li>
              </ul>
            </div>
            <div className="play-board-wrap daily-board">
              {/* Keeps the outline in order: the clear card's "Board clear" is an h3. */}
              <h2 className="sr-only">Today’s board</h2>
              <DailyPlay />
            </div>
          </div>
        </section>

        <section className="band-cream">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How the daily board works</p>
              <h2>Five small rules, and no clock.</h2>
              <p className="lede">
                It is the same puzzle as the game, one board at a time: no lives, no limit, nothing to sign up for.
              </p>
            </div>
            <ul className="ledger">
              {rows.map((row) => (
                <li key={row.title}>
                  <span className="mark" style={{ background: row.colour, boxShadow: `0 4px 0 ${row.foot}` }} aria-hidden="true" />
                  <div>
                    <b>{row.title}</b>
                    <p>{row.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band-panel tight">
          <div className="wrap centred-block">
            <h2>Cleared today’s? There are 2,000 more.</h2>
            <p className="lede">
              OutBrick on the App Store has 2,000 solver-verified boards across 100 chapters, with keys, locks and
              frozen bricks. Or learn the rest of the loop in the <a className="daily-link" href="/play">play guide</a>.
            </p>
            <div className="cta-row centred"><AppStoreBadge campaign="daily" /></div>
          </div>
        </section>
      </main>

      <VillageFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, '\\u003c') }} />
    </div>
  );
}
