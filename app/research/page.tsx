import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../editorial-shell';
import { siteUrl } from '../../lib/site';

const description =
  'How the OutBrick Journal reads game research: which sources we use, how claims are matched to evidence, and how every story cites its sources in APA 7.';

export const metadata: Metadata = {
  title: 'Research method',
  description,
  alternates: { canonical: '/research' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/research`,
    siteName: 'OutBrick',
    title: 'How the OutBrick Journal reads research',
    description,
    images: [{ url: `${siteUrl}/assets/icon/icon-512.png`, width: 512, height: 512, alt: 'The OutBrick app icon' }],
  },
  twitter: { card: 'summary', title: 'How the OutBrick Journal reads research', description, images: [`${siteUrl}/assets/icon/icon-512.png`] },
};

const selectedSources = [
  { label: 'World Health Organization — Gaming disorder', kind: 'Clinical definition', text: 'Separates impaired control and meaningful harm from a simple count of hours.', url: 'https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder' },
  { label: 'Pew Research Center — Teens and video games today', kind: 'Survey', text: 'One clearly labelled U.S. sample of how common play is, and why teens play.', url: 'https://www.pewresearch.org/internet/2024/05/09/teens-and-video-games-today/' },
  { label: 'Martinez, Froehlich & Fogarty — Playing on Hard Mode', kind: 'Peer-reviewed HCI', text: 'Grounds our accessibility writing in how disabled players find, judge and adapt games.', url: 'https://doi.org/10.1145/3613904.3642804' },
  { label: 'Ryan, Rigby & Przybylski — The motivational pull of video games', kind: 'Peer-reviewed psychology', text: 'Autonomy, competence and relatedness: a vocabulary for enjoyment that is not about retention.', url: 'https://doi.org/10.1007/s11031-006-9051-8' },
  { label: 'Keogh & Richardson — Waiting to play', kind: 'Peer-reviewed, qualitative', text: 'Informs how we write about fragmented attention and sessions that can be put down.', url: 'https://doi.org/10.1177/1367549417705603' },
  { label: 'W3C — WCAG 2.2', kind: 'Standard', text: 'Timing, interruption, motion, pointer targets and the use of colour, on the web.', url: 'https://www.w3.org/TR/2024/REC-WCAG22-20241212/' },
  { label: 'MIT News — Teaching maker skills through gaming', kind: 'University news', text: 'Useful on learning by making; read as a news account, not a controlled study.', url: 'https://news.mit.edu/2022/3-questions-dishita-turakhia-teaching-computational-maker-skills-through-gaming-0714' },
  { label: 'Harvard Health Publishing — Brain-training claims', kind: 'University explainer', text: 'A guardrail against promising broad cognitive benefits from a puzzle.', url: 'https://www.health.harvard.edu/mind-and-mood/can-brain-training-smartphone-apps-and-computer-games-really-help-you-stay-sharp' },
];

const questions: [string, string][] = [
  ['Player habits', 'How do context, sleep, perceived value and social reasons for play change what a session means?'],
  ['Success stories', 'What do Stardew Valley, Hades, Celeste, The Sims, Pokémon GO, Minecraft, Tetris, Wordle and Monument Valley show, and what can they not prove?'],
  ['Inclusive design', 'How can a game keep its challenge while widening the input, timing, sensory and cognitive routes into it?'],
  ['Short sessions', 'What makes two minutes feel complete, interruptible and worth coming back to, without making the return an obligation?'],
];

export default function ResearchPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/research#page`,
    name: 'How the OutBrick Journal reads research',
    description,
    url: `${siteUrl}/research`,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@type': 'Thing', name: 'Game design, gaming habits, accessibility and player experience research' },
    citation: selectedSources.map((source) => source.url),
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Research method', item: `${siteUrl}/research` },
    ],
  };

  return (
    <EditorialPage current="research">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Research method' }]} />
          <p className="ed-label" style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>Research method</p>
          <h1 className="ed-display" style={{ marginTop: 18, maxWidth: '14ch' }}>Curious, careful, <em>cited.</em></h1>
          <p className="ed-lede" style={{ marginTop: 24 }}>
            The journal reads games through three lenses: what players do, what designers make, and what
            the evidence can responsibly support. Every research-led story ends with an APA 7 reference
            list and a link to each source.
          </p>
          <div className="ed-actions" style={{ marginTop: 32 }}>
            <a className="ed-btn" href="/blog">Read the journal</a>
            <a className="ed-link" href="#sources">Jump to the sources</a>
          </div>
        </div>
      </header>
      <Bond />

      <section className="ed-band-paper ed-band" aria-labelledby="method-title">
        <div className="ed-wrap">
          <p className="ed-label">The method</p>
          <h2 id="method-title" className="ed-h2" style={{ marginTop: 14, maxWidth: '18ch' }}>A citation should show where a claim ends.</h2>
          <ol className="ed-steps">
            <li data-tone="blue"><h3 className="ed-h3">Start with the source</h3><p>Primary sources first: peer-reviewed papers, university research, recognised standards, and a studio’s own history for the details of its own success.</p></li>
            <li data-tone="purple"><h3 className="ed-h3">Match claim to evidence</h3><p>Associations stay associations. Company-reported numbers stay labelled. A small sample does not become a rule because the sentence reads better.</p></li>
            <li data-tone="teal"><h3 className="ed-h3">Make the trail usable</h3><p>Numbered markers sit under the section they support and jump to the full reference, with a DOI or a direct link wherever one exists.</p></li>
          </ol>
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="questions-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">What we read about</p>
            <h2 id="questions-title" className="ed-h2" style={{ marginTop: 14 }}>The questions around the board.</h2>
          </div>
          <dl className="ed-ledger">
            {questions.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
        </div>
      </section>

      <section id="sources" className="ed-band-cream ed-band" aria-labelledby="sources-title" style={{ scrollMarginTop: 70 }}>
        <div className="ed-wrap">
          <p className="ed-label">A starting shelf</p>
          <h2 id="sources-title" className="ed-h2" style={{ marginTop: 14 }}>Selected sources.</h2>
          <p className="ed-lede" style={{ marginTop: 16 }}>Not endorsements and not a full bibliography: the families of source we return to when a story needs more than intuition.</p>
          <ul className="ed-sourcelist">
            {selectedSources.map((source) => (
              <li key={source.url}>
                <p className="ed-meta" style={{ margin: 0, fontFamily: 'var(--ed-display)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.8rem' }}>{source.kind}</p>
                <div>
                  <h3><a href={source.url} target="_blank" rel="noreferrer">{source.label}<span className="sr-only"> (opens in a new tab)</span></a></h3>
                  <p>{source.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="ed-actions" style={{ marginTop: 36 }}>
            <a className="ed-link" href="/blog/why-two-minute-puzzles-feel-good#references">See a full reference list in context</a>
            <a className="ed-link" href="/about">About OutBrick</a>
          </div>
        </div>
      </section>

      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
