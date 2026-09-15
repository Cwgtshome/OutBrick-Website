import type { Metadata } from 'next';
import { ArrowUpRight, Heart, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';
import { EditorialFooter, EditorialHeader } from '../editorial-shell';
import { authors } from '../../lib/blog';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'About OutBrick',
  description: 'Learn how OutBrick makes calm, accessible sliding-brick puzzles and publishes thoughtful notes about games, habits, and player experience.',
  keywords: ['about OutBrick', 'calm puzzle game', 'accessible game design', 'independent game studio'],
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: '/about',
    title: 'About OutBrick',
    description: 'A small puzzle game and a thoughtful journal about the design choices around it.',
    images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and home screen' }],
  },
};

export default function AboutPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteUrl}/about#page`,
    url: `${siteUrl}/about`,
    name: 'About OutBrick',
    description: metadata.description,
    isPartOf: { '@type': 'WebSite', name: 'OutBrick', url: siteUrl },
    about: {
      '@type': 'Organization',
      name: 'OutBrick',
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      founder: { '@type': 'Person', name: authors[0]!.name },
    },
  };

  return (
    <div className="blog-site info-site">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="about" />
      <main className="info-main" aria-labelledby="about-title">
        <header className="info-hero">
          <div className="eyebrow"><span className="eyebrow-dot" /> About OutBrick</div>
          <h1 id="about-title">A small game with <span>room to breathe.</span></h1>
          <p className="info-lede">OutBrick is a sliding-brick colour-sort puzzle for the moments between things. We make the board readable, the challenge satisfying, and the decision to stop feel as welcome as the decision to play.</p>
          <div className="info-hero-actions"><a className="nav-cta" href="/play">Play the web demo <ArrowUpRight size={15} /></a><a className="blog-text-link" href="/blog">Read the journal <ArrowUpRight size={15} /></a></div>
        </header>

        <section className="info-story-grid" aria-labelledby="story-title">
          <div className="info-story-mark" aria-hidden="true"><span>O</span><span>+</span><span>B</span></div>
          <div><div className="eyebrow"><span className="eyebrow-dot" /> The idea</div><h2 id="story-title">Play can be <span>small</span> and still matter.</h2></div>
          <div className="info-copy"><p>Many games ask for a whole evening. OutBrick starts with a smaller promise: one board, one clear question, and one satisfying moment of progress. It is designed for a coffee break, a commute, or the quiet reset after a long task.</p><p>The journal follows the questions that sit around that promise: how games fit into real lives, how accessibility makes a board clearer, and what successful games teach us about agency, repetition, and craft.</p></div>
        </section>

        <section className="info-section" aria-labelledby="principles-title">
          <div className="section-heading-split info-section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> Our principles</div><h2 id="principles-title">Design with <span>care.</span></h2></div><p>These are working principles, not a claim that every player or every day is the same.</p></div>
          <div className="info-card-grid">
            <article className="info-card info-card-green"><span className="info-card-icon"><Heart size={20} /></span><h3>Respect the pause</h3><p>Sessions have natural edges. Progress stays legible, interruption is safe, and the game does not need pressure to make a moment enjoyable.</p></article>
            <article className="info-card info-card-blue"><span className="info-card-icon"><Lightbulb size={20} /></span><h3>Make the rule readable</h3><p>Challenge should come from the puzzle’s idea, not from unclear controls. The board gives you enough information to form a plan.</p></article>
            <article className="info-card info-card-teal"><span className="info-card-icon"><ShieldCheck size={20} /></span><h3>Build access in</h3><p>Colour is paired with shape and glyphs, support options stay close to the experience, and player feedback remains part of the work.</p></article>
            <article className="info-card info-card-yellow"><span className="info-card-icon"><Sparkles size={20} /></span><h3>Keep curiosity alive</h3><p>Undo, visible feedback, and solver-verified boards help experimentation feel safer without removing the satisfaction of finding the line.</p></article>
          </div>
        </section>

        <section className="info-split-section" aria-labelledby="making-title">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> How it is made</div><h2 id="making-title">A living little <span>workshop.</span></h2></div>
          <div className="info-copy"><p>OutBrick is an independent project by Mourad Hamdi. The game, the visual language, and the journal grow together: a new board can prompt a design note, and a research note can change the question we ask of a feature.</p><p>We publish sources in APA 7 style when a story makes a research claim, distinguish first-party success stories from peer-reviewed evidence, and keep conclusions proportional to what the source can actually support.</p><a className="blog-text-link" href="/research">Read our research method <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="info-cta" aria-labelledby="join-title">
          <div><div className="eyebrow"><span className="eyebrow-dot" /> Come along</div><h2 id="join-title">Find a board. <span>Take your time.</span></h2><p>Start with the web demo, meet the mascots, or browse the journal when you have a little more room.</p></div>
          <div className="info-cta-actions"><a className="nav-cta" href="/play">Try OutBrick <ArrowUpRight size={15} /></a><a className="blog-text-link" href="/contact">Contact the team <ArrowUpRight size={15} /></a></div>
        </section>
      </main>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
