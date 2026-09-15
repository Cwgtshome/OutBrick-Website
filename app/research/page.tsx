import type { Metadata } from 'next';
import { ArrowUpRight, BookOpen, ExternalLink, FlaskConical, Link2, Scale } from 'lucide-react';
import { EditorialFooter, EditorialHeader } from '../editorial-shell';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'OutBrick research method',
  description: 'How the OutBrick journal uses peer-reviewed game research, MIT and Harvard sources, accessibility standards, and first-party game histories with APA 7 citations.',
  keywords: ['gaming habits research', 'APA 7 gaming citations', 'game design research', 'accessible game design', 'OutBrick research'],
  alternates: { canonical: '/research' },
  openGraph: {
    type: 'website',
    url: '/research',
    title: 'How OutBrick reads game research',
    description: 'Our source, citation, and limitation guide for research-aware game design writing.',
    images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and home screen' }],
  },
};

const selectedSources = [
  { label: 'World Health Organization — gaming disorder', kind: 'Clinical boundary', text: 'We use the WHO definition to distinguish impaired control and meaningful life impact from a simple hour count.', url: 'https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder' },
  { label: 'Pew Research Center — teens and video games today', kind: 'Population snapshot', text: 'A U.S. survey helps us describe how common play and social reasons for play are in one clearly labelled sample.', url: 'https://www.pewresearch.org/internet/2024/05/09/teens-and-video-games-today/' },
  { label: 'Martinez, Froehlich, & Fogarty — Playing on Hard Mode', kind: 'Peer-reviewed HCI', text: 'CHI research keeps our accessibility writing grounded in adoption, adaptation, community knowledge, and unconventional play.', url: 'https://doi.org/10.1145/3613904.3642804' },
  { label: 'Ryan, Rigby, & Przybylski — The motivational pull of video games', kind: 'Peer-reviewed psychology', text: 'Self-determination theory gives us language for autonomy, competence, relatedness, and enjoyment without reducing a player to retention.', url: 'https://doi.org/10.1007/s11031-006-9051-8' },
  { label: 'Keogh & Richardson — Waiting to play', kind: 'Peer-reviewed mobile play', text: 'Qualitative mobile-game research informs our writing about fragmented attention, ambient play, and the value of resumable sessions.', url: 'https://doi.org/10.1177/1367549417705603' },
  { label: 'W3C — Web Content Accessibility Guidelines 2.2', kind: 'Normative standard', text: 'WCAG is a practical reference for non-drag alternatives, timing, interruption tolerance, motion, and pointer targets on the web.', url: 'https://www.w3.org/TR/2024/REC-WCAG22-20241212/' },
  { label: 'MIT News — teaching maker skills through gaming', kind: 'University research news', text: 'MIT’s account helps us discuss learning through making, testing, and sharing while keeping the distinction between a news story and a controlled study.', url: 'https://news.mit.edu/2022/3-questions-dishita-turakhia-teaching-computational-maker-skills-through-gaming-0714' },
  { label: 'Harvard Health Publishing — brain-training claims', kind: 'University health explainer', text: 'Harvard’s explainer is a useful guardrail against promising broad cognitive benefits from a small puzzle or app.', url: 'https://www.health.harvard.edu/mind-and-mood/can-brain-training-smartphone-apps-and-computer-games-really-help-you-stay-sharp' },
];

export default function ResearchPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/research#page`,
    name: 'How OutBrick reads game research',
    description: metadata.description,
    url: `${siteUrl}/research`,
    isPartOf: { '@type': 'WebSite', name: 'OutBrick', url: siteUrl },
    about: { '@type': 'Thing', name: 'Game design, gaming habits, accessibility, and player experience research' },
  };

  return (
    <div className="blog-site info-site research-site">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="research" />
      <main className="info-main" aria-labelledby="research-title">
        <header className="info-hero">
          <div className="eyebrow"><span className="eyebrow-dot" /> Research + game craft</div>
          <h1 id="research-title">Curious, careful, <span>cited.</span></h1>
          <p className="info-lede">The OutBrick journal looks at games through three lenses: what players do, what designers make, and what the evidence can responsibly support. Every research-led story includes an APA 7 reference trail and a link to the source.</p>
          <div className="info-hero-actions"><a className="nav-cta" href="/blog">Read the journal <ArrowUpRight size={15} /></a><a className="blog-text-link" href="#sources">Browse selected sources <ArrowUpRight size={15} /></a></div>
        </header>

        <section className="research-principles" aria-labelledby="principles-title">
          <div className="section-heading-split info-section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> The method</div><h2 id="principles-title">Evidence with <span>edges.</span></h2></div><p>Good citations do more than make a page look authoritative. They show where a claim ends.</p></div>
          <div className="research-principle-grid">
            <article className="research-principle-card"><span className="info-card-icon"><FlaskConical size={20} /></span><h3>Start with the source</h3><p>We prefer primary sources, peer-reviewed papers, university research pages, recognized standards, and first-party histories for success-story details.</p></article>
            <article className="research-principle-card"><span className="info-card-icon"><Scale size={20} /></span><h3>Match claim to evidence</h3><p>Associations stay associations. Company-reported numbers stay labelled. A small sample does not become a universal rule because the sentence sounds better that way.</p></article>
            <article className="research-principle-card"><span className="info-card-icon"><Link2 size={20} /></span><h3>Make the trail usable</h3><p>Source markers sit beside the relevant section, and the full APA 7 citation includes a stable DOI or direct external URL whenever one is available.</p></article>
          </div>
        </section>

        <section className="research-scope" aria-labelledby="scope-title">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> What we research</div><h2 id="scope-title">The questions around the <span>board.</span></h2></div>
          <div className="research-scope-list">
            <div><strong>Player habits</strong><p>How do context, sleep, perceived value, boundaries, and social reasons for play change what a session means?</p></div>
            <div><strong>Game success stories</strong><p>What do Stardew Valley, Hades, Celeste, The Sims, Pokémon GO, Minecraft, Tetris, Wordle, and Monument Valley reveal—and what can they not prove?</p></div>
            <div><strong>Inclusive design</strong><p>How can a game preserve challenge while widening input, timing, sensory, and cognitive routes into the experience?</p></div>
            <div><strong>Short-session craft</strong><p>What makes a two-minute interaction feel complete, interruptible, and worth returning to without turning return into obligation?</p></div>
          </div>
        </section>

        <section id="sources" className="research-source-section" aria-labelledby="sources-title">
          <div className="section-heading-split info-section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> A starting shelf</div><h2 id="sources-title">Selected <span>sources.</span></h2></div><p>These are not endorsements or a complete bibliography. They are the source families we return to when a story needs more than intuition.</p></div>
          <div className="research-source-grid">{selectedSources.map((source) => <article className="research-source-card" key={source.url}><div className="research-source-topline"><span>{source.kind}</span><ExternalLink size={14} /></div><h3><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></h3><p>{source.text}</p><a className="blog-text-link" href={source.url} target="_blank" rel="noreferrer">Open source <ArrowUpRight size={14} /></a></article>)}</div>
        </section>

        <section className="research-apa" aria-labelledby="apa-title">
          <div className="research-apa-mark"><BookOpen size={28} /></div>
          <div><div className="eyebrow"><span className="eyebrow-dot" /> Citation promise</div><h2 id="apa-title">APA 7, with context.</h2><p>Each article keeps a readable source marker near the claim, then lists the full reference below the story. We include author or organization, date, title, publication details where available, DOI or stable URL, and a note in the prose when the source is first-party, observational, qualitative, theoretical, or otherwise limited.</p><a className="blog-text-link" href="/blog/why-two-minute-puzzles-feel-good#references">See a complete reference trail <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="info-cta" aria-labelledby="research-cta-title">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> Read with us</div><h2 id="research-cta-title">Follow a claim to its <span>source.</span></h2><p>Start with gaming habits, browse success stories, or read how we think about accessibility in a tiny puzzle.</p></div>
          <div className="info-cta-actions"><a className="nav-cta" href="/blog">Browse all stories <ArrowUpRight size={15} /></a><a className="blog-text-link" href="/about">About OutBrick <ArrowUpRight size={15} /></a></div>
        </section>
      </main>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
