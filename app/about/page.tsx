import type { Metadata } from 'next';
import { Badge, Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../editorial-shell';
import { authors } from '../../lib/blog';
import { siteUrl } from '../../lib/site';

const description =
  'Who makes OutBrick, the sliding-brick colour-sort puzzle, what the game is built to respect, and why it publishes a cited journal alongside it.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/about`,
    siteName: 'OutBrick',
    title: 'About OutBrick',
    description,
    images: [{ url: `${siteUrl}/assets/icon/icon-512.png`, width: 512, height: 512, alt: 'The OutBrick app icon' }],
  },
  twitter: { card: 'summary', title: 'About OutBrick', description, images: [`${siteUrl}/assets/icon/icon-512.png`] },
};

const facts: [string, string][] = [
  ['The rule', 'Slide a brick and it glides until something stops it. Get every brick out through the gate that matches its colour and the board is clear.'],
  ['The boards', '2,000, across 100 chapters of twenty. A solver cleared every one before it shipped.'],
  ['The Journey', '167 villages built stud by stud out of brick, twelve levels each, carried by twenty-eight distinct places.'],
  ['The cast', 'Nine brick friends. Three share your Home screen at a time; they animate and speak in text bubbles.'],
  ['The pressure', 'A move limit on every board. No clock, timer or countdown anywhere in the game.'],
  ['What it costs', 'Free, with lives and six opt-in rewarded video placements. No banners, no interstitials, no subscription.'],
  ['Where it runs', 'iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch, offline, with progress in your own iCloud.'],
];

const principles = [
  { tone: 'green', kicker: 'Time', title: 'Respect the pause', body: 'Sessions have natural edges. Being interrupted costs nothing, the clear card is a real ending, and nothing interrupts a board.' },
  { tone: 'blue', kicker: 'Clarity', title: 'Make the rule readable', body: 'Challenge should come from the puzzle’s idea, not from unclear controls. Every board prints its target and its limit from the first tap.' },
  { tone: 'teal', kicker: 'Access', title: 'Build access in', body: 'Colour-blind glyphs are on by default, every brick is a VoiceOver element, and Reduce Motion is honoured everywhere.' },
  { tone: 'gold', kicker: 'Honesty', title: 'Say what it costs', body: 'Lives and rewarded videos exist, and the home page says exactly how both work, with nothing rounded in our favour.' },
];

export default function AboutPage() {
  const founder = authors[0]!;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteUrl}/about#page`,
    url: `${siteUrl}/about`,
    name: 'About OutBrick',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: {
      '@type': 'Organization',
      name: 'OutBrick',
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      founder: { '@type': 'Person', name: founder.name, url: `${siteUrl}/authors/${founder.id}` },
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about` },
    ],
  };

  return (
    <EditorialPage current="about">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'About' }]} />
          <div className="ed-hero-grid">
            <div>
              <p className="ed-label">About OutBrick</p>
              <h1 className="ed-display">A small game, built <em>brick by brick.</em></h1>
              <p className="ed-lede">
                OutBrick is a sliding-brick colour-sort puzzle for the moments between things. It is an
                independent project by {founder.name}, and this site is where the game, the thinking
                behind it and the journal live side by side.
              </p>
              <div className="ed-actions">
                <Badge />
                <a className="ed-link" href="/play">Read the play guide</a>
              </div>
            </div>
            <figure className="ed-capture" style={{ width: 'min(100%, 250px)', justifySelf: 'center', transform: 'rotate(2deg)' }}>
              <img src="/assets/villages/garden-city.jpg" alt="Garden City on the OutBrick Journey map: a brick road winding between toy-brick houses." width={239} height={520} decoding="async" />
            </figure>
          </div>
        </div>
      </header>
      <Bond />

      <section className="ed-band-paper ed-band" aria-labelledby="facts-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">The game, plainly</p>
            <h2 id="facts-title" className="ed-h2">Seven things that are true today.</h2>
            <div className="ed-prose" style={{ marginTop: 18 }}>
              <p>Everything on this list matches the home page, which is where the game is described in full.</p>
              <a className="ed-link" href="/">See the game</a>
            </div>
          </div>
          <dl className="ed-ledger">
            {facts.map(([term, detail]) => (
              <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="principles-title">
        <div className="ed-wrap">
          <p className="ed-label">Working principles</p>
          <h2 id="principles-title" className="ed-h2" style={{ marginTop: 14, maxWidth: '16ch' }}>Four things we try not to break.</h2>
          <div className="ed-wall">
            {principles.map((item) => (
              <article className="ed-brickcard ed-reveal" data-tone={item.tone} key={item.title}>
                <Studs count={3} />
                <span className="ed-kicker">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-band-cream ed-band" aria-labelledby="workshop-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">The workshop</p>
            <h2 id="workshop-title" className="ed-h2">Why a puzzle game keeps a journal.</h2>
          </div>
          <div className="ed-prose">
            <p>
              The game and the writing grow together. A new board can prompt a design note, and a
              research paper can change the question we ask of a feature. Publishing both keeps us
              honest about why the game works the way it does.
            </p>
            <p>
              When a story makes a research claim, it cites the source in APA 7 and says whether that
              source is a study, a standard, a news account or a studio’s own history. Conclusions stay
              the size the evidence supports.
            </p>
            <div className="ed-actions" style={{ marginTop: 24 }}>
              <a className="ed-btn ghost" href="/blog">Read the journal</a>
              <a className="ed-link" href="/research">The research method</a>
              <a className="ed-link" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
