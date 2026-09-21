import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { ArrowDownToLine, ArrowUpRight, Camera, Check, Mail, PackageOpen, Sparkles } from 'lucide-react';
import { mascotStories } from '../../lib/mascots';
import { siteUrl } from '../../lib/site';
import { EditorialFooter, EditorialHeader } from '../editorial-shell';
import { StoreBadge } from '../store-badge';

const pressKitDescription = 'The official OutBrick press kit: app icon, approved game screens, real mascot renders, a short game description, and contact details.';

export const metadata: Metadata = {
  title: 'OutBrick press kit',
  description: pressKitDescription,
  keywords: ['OutBrick press kit', 'OutBrick assets', 'OutBrick screenshots', 'sliding-brick puzzle'],
  alternates: { canonical: '/press-kit' },
  openGraph: {
    type: 'website',
    url: '/press-kit',
    title: 'OutBrick press kit',
    description: pressKitDescription,
    images: [{ url: '/og.png', width: 1400, height: 710, alt: 'OutBrick mascots and Home screen' }],
  },
};

const pressScreens = [
  { name: 'Home', tag: 'The village', image: '/assets/home-screen.png', alt: 'OutBrick Home screen with the three mascots and Level 32 button' },
  { name: 'Play', tag: 'The board', image: '/assets/play-screen.png', alt: 'OutBrick Play screen showing a colour-sort board with sliding bricks' },
  { name: 'Journey', tag: 'The path', image: '/assets/journey-screen.png', alt: 'OutBrick Journey screen showing the chapter path and progress' },
  { name: 'Shop', tag: 'The shelf', image: '/assets/shop-screen.png', alt: 'OutBrick Shop screen showing optional puzzle boosters' },
  { name: 'Brick Pass', tag: 'The season', image: '/assets/pass-screen.png', alt: 'OutBrick Brick Pass screen showing free and premium reward tracks' },
  { name: 'Readable by design', tag: 'Colour-blind ready', image: '/assets/colorblind-screen.png', alt: 'OutBrick colour-blind settings and readable board treatment' },
];

const pressAssets = [
  { name: 'App icon', label: 'The shipping app icon', image: '/icon.png', alt: 'OutBrick app icon', className: 'press-kit-asset-icon', downloadName: 'outbrick-app-icon.png' },
  { name: 'Bloo', label: 'The blue hero', image: '/assets/bloo-cheer.png', alt: 'Bloo, the blue OutBrick mascot, cheering', className: '', downloadName: 'outbrick-bloo.png' },
  { name: 'Peach', label: 'The gentle worrier', image: '/assets/peach-think.png', alt: 'Peach, the orange OutBrick mascot, thinking', className: '', downloadName: 'outbrick-peach.png' },
  { name: 'Sprout', label: 'The curious kid', image: '/assets/sprout-cheer.png', alt: 'Sprout, the green OutBrick mascot, cheering', className: '', downloadName: 'outbrick-sprout.png' },
];

export default function PressKitPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/press-kit#page`,
    url: `${siteUrl}/press-kit`,
    name: 'OutBrick press kit',
    description: pressKitDescription,
    isPartOf: { '@type': 'WebSite', name: 'OutBrick', url: siteUrl },
    image: `${siteUrl}/og.png`,
  };

  return (
    <div className="blog-site press-kit-site">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="press-kit" />

      <main className="press-kit-main" aria-labelledby="press-kit-title">
        <section className="press-kit-hero">
          <div className="press-kit-hero-copy">
            <div className="blog-kicker"><Sparkles size={14} /> Asset desk · OutBrick</div>
            <h1 id="press-kit-title">Everything you need to tell the <span>OutBrick story.</span></h1>
            <p>OutBrick is a calm one-finger puzzle built for focus, play, and progress. This press kit has the assets, screens, and short version of the game ready to share.</p>
            <div className="press-kit-hero-actions">
              <StoreBadge />
              <a className="blog-text-link" href="#assets">Browse the assets <ArrowUpRight size={15} /></a>
            </div>
            <div className="press-kit-proof" aria-label="Press kit contents">
              <span><Check size={14} /> Shipping app icon</span>
              <span><Check size={14} /> Six game screens</span>
              <span><Check size={14} /> Real mascot renders</span>
            </div>
          </div>

          <div className="press-kit-hero-art">
            <div className="press-kit-art-topline"><span>OUTBRICK · PRESS KIT</span><span>2026</span></div>
            <div className="press-kit-art-grid" aria-hidden="true" />
            <img src="/assets/mascots-group-cheer.png" alt="Bloo, Peach, and Sprout celebrating together" title="OutBrick mascot group" />
            <div className="press-kit-art-caption"><span>The cast behind the clear</span><strong>Small moves.<br />Big little smiles.</strong></div>
            <div className="press-kit-art-sticker"><span className="press-kit-art-sticker-icon"><img src="/icon.png" alt="" /></span><span>Six Apple platforms<br /><strong>OutBrick</strong></span></div>
          </div>
        </section>

        <section className="press-kit-story" aria-labelledby="press-kit-story-title">
          <div className="press-kit-story-mark" aria-hidden="true"><span>O</span><span>+</span><span>B</span></div>
          <div>
            <div className="blog-kicker"><PackageOpen size={14} /> The short version</div>
            <h2 id="press-kit-story-title">A calm puzzle with a <span>toy-box heart.</span></h2>
          </div>
          <div className="press-kit-story-copy">
            <p>OutBrick is a one-finger colour-sort puzzle for the moments between things. Slide every brick to its matching gate, keep the good bits, and come back when the next small clear sounds fun.</p>
            <p>It runs the genre’s shape with the dial turned toward the player: five lives that refill one every thirty minutes, a free undo on every single board that can never run out, and advertising that is rewarded video only — no banners, no interstitials, nothing between levels. A video plays when a player presses a button asking for one of six things — a life, five more moves at the limit, two undos, a booster armed for the board ahead, the clear card’s coins paid again, or a second spin of the Brick Wheel — each capped daily, and declining changes nothing about the game. One-time purchases, no subscription.</p>
            <div className="press-kit-facts"><span><strong>Format</strong> iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch</span><span><strong>Feel</strong> Calm, tactile, readable</span><span><strong>Promise</strong> Nothing interrupts a board.</span></div>
          </div>
        </section>

        <section id="assets" className="press-kit-section press-kit-assets-section" aria-labelledby="press-kit-assets-title">
          <div className="press-kit-section-heading">
            <div><div className="blog-kicker"><Camera size={14} /> Ready to use</div><h2 id="press-kit-assets-title">The little <span>asset shelf.</span></h2></div>
            <p>These are the same visual materials used across the game and the OutBrick site. Open any image at its full source size.</p>
          </div>
          <div className="press-kit-asset-grid">
            {pressAssets.map((asset) => (
              <article className={`press-kit-asset-card ${asset.className}`} key={asset.name}>
                <div className="press-kit-asset-art"><img src={asset.image} alt={asset.alt} title={asset.alt} /></div>
                <div className="press-kit-asset-copy"><div><span>{asset.label}</span><h3>{asset.name}</h3></div><a className="press-kit-icon-link" href={asset.image} download={asset.downloadName} aria-label={`Download ${asset.name} asset`}><ArrowDownToLine size={16} /></a></div>
              </article>
            ))}
          </div>
          <div className="press-kit-assets-note"><span className="press-kit-note-mark"><Check size={15} /></span><span>Need the full cast together? The <a href="/assets/mascots-group-cheer.png" download="outbrick-mascots-group.png">group render is ready too</a>, and the <a href="/mascots">mascot stories</a> add the character context behind each face.</span></div>
        </section>

        <section className="press-kit-section press-kit-screens-section" aria-labelledby="press-kit-screens-title">
          <div className="press-kit-section-heading press-kit-section-heading-split">
            <div><div className="blog-kicker"><Camera size={14} /> In the game</div><h2 id="press-kit-screens-title">Approved <span>game screens.</span></h2></div>
            <div><p>Six current iPhone captures from the OutBrick experience, including Home, Play, Journey, Shop, Brick Pass, and the colour-blind-ready treatment.</p><a className="blog-text-link" href="/play">See the playable flow <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="press-kit-screen-rail">
            {pressScreens.map((screen, index) => (
              <a className="press-kit-screen-card" href={screen.image} download={`outbrick-${screen.name.toLowerCase().replaceAll(' ', '-')}.png`} key={screen.name}>
                <div className="press-kit-screen-topline"><span>{screen.tag}</span><ArrowDownToLine size={14} /></div>
                <img src={screen.image} alt={screen.alt} title={`OutBrick ${screen.name} screen`} loading={index === 0 ? 'eager' : 'lazy'} />
                <div className="press-kit-screen-caption"><strong>{screen.name}</strong><span>Open full capture</span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="press-kit-section press-kit-cast-section" aria-labelledby="press-kit-cast-title">
          <div className="press-kit-section-heading press-kit-section-heading-split">
            <div><div className="blog-kicker"><Sparkles size={14} /> The cast</div><h2 id="press-kit-cast-title">Three ways to <span>meet the board.</span></h2></div>
            <p>Bloo brings the hello, Peach brings the plan, and Sprout keeps asking the useful question. Their stories live in the same toy-brick world as the puzzle.</p>
          </div>
          <div className="press-kit-cast-grid">
            {mascotStories.map((story) => (
              <a className="press-kit-cast-card" href={`/mascots/${story.id}`} style={{ '--press-accent': story.accent, '--press-accent-soft': story.accentSoft } as CSSProperties} key={story.id}>
                <div className="press-kit-cast-art"><span>{story.role}</span><img src={story.heroImage} alt={story.imageAlt} title={`${story.name} OutBrick mascot`} /></div>
                <div className="press-kit-cast-copy"><div><h3>{story.name}</h3><p>{story.widgetLine}</p></div><ArrowUpRight size={17} /></div>
              </a>
            ))}
          </div>
        </section>

        <section className="press-kit-contact" aria-labelledby="press-kit-contact-title">
          <div className="press-kit-contact-copy">
            <div className="blog-kicker"><Mail size={14} /> Press and contact</div>
            <h2 id="press-kit-contact-title">Have a question?<br /><span>Let’s make room.</span></h2>
            <p>For press questions, asset requests, accessibility conversations, or a story about the game, reach Mourad directly or use the structured contact form.</p>
            <div className="press-kit-contact-actions"><a className="nav-cta" href="mailto:mourad.hamdi@me.com">Email Mourad <ArrowUpRight size={15} /></a><a className="blog-text-link" href="/contact">Open the contact form <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="press-kit-contact-card"><span className="press-kit-contact-icon"><Mail size={20} /></span><span><strong>Direct contact</strong><a href="mailto:mourad.hamdi@me.com">mourad.hamdi@me.com</a><small>Replies start in your mail app.</small></span><StoreBadge compact /></div>
        </section>

        <section className="press-kit-notes" aria-labelledby="press-kit-notes-title">
          <div><div className="blog-kicker"><Check size={14} /> Quick facts</div><h2 id="press-kit-notes-title">Use the <span>right words.</span></h2></div>
          <div className="press-kit-notes-grid"><div><span>Official title</span><strong>OutBrick</strong></div><div><span>Category</span><strong>Sliding-brick colour-sort puzzle</strong></div><div><span>Platform</span><strong>iPhone, iPad, Mac, Apple TV, Apple Vision Pro, Apple Watch</strong></div><div><span>Official page</span><a href={siteUrl}>{siteUrl.replace('https://', '')}</a></div></div>
        </section>
      </main>

      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
