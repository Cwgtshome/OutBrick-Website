import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { ArrowUpRight, ChevronRight, HeartHandshake, Sparkles } from 'lucide-react';
import { EditorialFooter, EditorialHeader, OutBrickLogo } from '../editorial-shell';
import { mascotStories } from '../../lib/mascots';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Meet the OutBrick mascots',
  description: 'Meet Bloo, Peach, and Sprout—the friendly OutBrick mascots who make every clear feel like a little story.',
  keywords: ['OutBrick mascots', 'Bloo', 'Peach', 'Sprout', 'puzzle game characters'],
  alternates: { canonical: '/mascots' },
  openGraph: {
    type: 'website',
    url: '/mascots',
    title: 'Meet the OutBrick mascots',
    description: 'Three friendly characters, three different ways to find the next move.',
    images: [{ url: `${siteUrl}/assets/mascots-group-cheer.png`, width: 2048, height: 1393, alt: 'Bloo, Peach, and Sprout cheering together' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet the OutBrick mascots',
    description: 'Three friendly characters, three different ways to find the next move.',
    images: [`${siteUrl}/assets/mascots-group-cheer.png`],
  },
};

export default function MascotsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/mascots#page`,
    url: `${siteUrl}/mascots`,
    name: 'Meet the OutBrick mascots',
    description: metadata.description,
    isPartOf: { '@type': 'WebSite', name: 'OutBrick', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: mascotStories.map((story, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/mascots/${story.id}`,
        name: story.name,
        image: `${siteUrl}${story.heroImage}`,
        description: story.dek,
      })),
    },
  };

  return (
    <div className="blog-site mascot-story-site mascot-cast-site">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="mascots" />
      <main className="mascot-cast-main" aria-labelledby="mascot-cast-title">
        <section className="mascot-cast-hero">
          <div className="mascot-cast-copy">
            <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-pink" /> The cast</div>
            <h1 id="mascot-cast-title">Meet the <span>little legends.</span></h1>
            <p>OutBrick has three ways of looking at a board: charge at it, think it through, or ask one more question. Bloo, Peach, and Sprout bring all three to the same bright little village.</p>
            <div className="mascot-cast-actions"><a className="nav-cta" href="/play">Play OutBrick <ArrowUpRight size={15} /></a><a className="blog-text-link" href="#stories">Read their stories <ChevronRight size={15} /></a></div>
            <div className="mascot-cast-proof"><span><HeartHandshake size={15} /> Friendly by design</span><span><Sparkles size={15} /> Real 3D companions</span><span>Three voices, one board</span></div>
          </div>
          <div className="mascot-cast-hero-art">
            <span className="cast-art-label cast-art-label-left">The village</span>
            <img src="/assets/mascots-group-cheer.png" alt="Bloo, Peach, and Sprout cheering together" title="The OutBrick mascot cast" />
            <span className="cast-art-label cast-art-label-right">Come say hello</span>
          </div>
        </section>

        <section id="stories" className="mascot-cast-stories" aria-labelledby="stories-title">
          <div className="mascot-cast-section-heading">
            <div><div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-gold" /> Choose a companion</div><h2 id="stories-title">Three hearts.<br /><span>Many good moves.</span></h2></div>
            <p>Each mascot has a different rhythm, but none of them asks you to be perfect. Pick a story and see what they bring to the next clear.</p>
          </div>
          <div className="mascot-cast-grid">
            {mascotStories.map((story) => (
              <a className={`mascot-cast-card mascot-cast-card-${story.id}`} href={`/mascots/${story.id}`} key={story.id} style={{ '--story-accent': story.accent, '--story-accent-soft': story.accentSoft } as CSSProperties}>
                <div className="mascot-cast-card-art"><img src={story.heroImage} alt={story.imageAlt} title={`${story.name} mascot`} /><span>{story.role}</span></div>
                <div className="mascot-cast-card-copy"><div className="mascot-cast-card-name-row"><h3>{story.name}</h3><ArrowUpRight size={19} /></div><p>{story.dek}</p><span className="mascot-cast-read">Read {story.name}’s story <ChevronRight size={16} /></span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="mascot-cast-collective" aria-labelledby="collective-title">
          <div className="mascot-cast-collective-mark"><OutBrickLogo /></div>
          <div><div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-green" /> Same board, different eyes</div><h2 id="collective-title">The answer gets better <span>when it is shared.</span></h2></div>
          <p>Bloo brings the nerve, Peach brings the care, and Sprout brings the question nobody else thought to ask. Together, they make the game feel like a place you can return to—not a test you have to pass.</p>
          <a className="blog-text-link" href="/#cast">See them on the Home screen <ArrowUpRight size={15} /></a>
        </section>
      </main>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
