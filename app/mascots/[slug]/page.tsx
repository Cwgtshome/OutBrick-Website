import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, HeartHandshake, Sparkles } from 'lucide-react';
import { EditorialFooter, EditorialHeader } from '../../editorial-shell';
import { MascotStoryExperience } from '../mascot-story-experience';
import { getAdjacentMascot, getMascotStory, mascotStories, type MascotStory } from '../../../lib/mascots';
import { siteUrl } from '../../../lib/site';

type MascotPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mascotStories.map((story) => ({ slug: story.id }));
}

export async function generateMetadata({ params }: MascotPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getMascotStory(slug);
  if (!story) return {};

  return {
    title: `${story.name} — OutBrick mascot story`,
    description: story.dek,
    keywords: ['OutBrick', story.name, story.role, 'mascot story', 'puzzle game characters'],
    alternates: { canonical: `/mascots/${story.id}` },
    openGraph: {
      type: 'website',
      url: `/mascots/${story.id}`,
      title: `${story.name} — OutBrick mascot story`,
      description: story.dek,
      images: [{ url: `${siteUrl}${story.heroImage}`, width: 1024, height: 1024, alt: story.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${story.name} — OutBrick mascot story`,
      description: story.dek,
      images: [`${siteUrl}${story.heroImage}`],
    },
  };
}

function MascotFacts({ story }: { story: MascotStory }) {
  return (
    <div className="mascot-story-facts" aria-label={`${story.name} character notes`}>
      <div><span className="mascot-story-fact-label">Superpower</span><strong>{story.superpower}</strong></div>
      <div><span className="mascot-story-fact-label">Tell</span><strong>{story.tells}</strong></div>
      <div><span className="mascot-story-fact-label">Favourite move</span><strong>{story.favoriteMove}</strong></div>
    </div>
  );
}

export default async function MascotStoryPage({ params }: MascotPageProps) {
  const { slug } = await params;
  const story = getMascotStory(slug);
  if (!story) notFound();

  const previous = getAdjacentMascot(story.id, -1);
  const next = getAdjacentMascot(story.id, 1);
  const storyUrl = `${siteUrl}/mascots/${story.id}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${storyUrl}#page`,
    url: storyUrl,
    name: `${story.name} — OutBrick mascot story`,
    description: story.dek,
    image: [`${siteUrl}${story.heroImage}`],
    isPartOf: { '@type': 'WebSite', name: 'OutBrick', url: siteUrl },
    mainEntity: {
      '@type': 'Person',
      name: story.name,
      description: `${story.role}. ${story.voice}`,
      image: `${siteUrl}${story.heroImage}`,
      memberOf: { '@type': 'Organization', name: 'OutBrick', url: siteUrl },
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Mascots', item: `${siteUrl}/mascots` },
      { '@type': 'ListItem', position: 3, name: story.name, item: storyUrl },
    ],
  };

  return (
    <div className={`blog-site mascot-story-site mascot-story-site-${story.id}`} style={{ '--story-accent': story.accent, '--story-accent-soft': story.accentSoft } as CSSProperties}>
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader current="mascots" />
      <main className="mascot-story-main">
        <div className="mascot-story-breadcrumbs"><a href="/">OutBrick</a><ChevronRight size={14} /><a href="/mascots">Mascots</a><ChevronRight size={14} /><span>{story.name}</span></div>

        <section className="mascot-story-hero" aria-labelledby={`${story.id}-title`}>
          <div className="mascot-story-copy">
            <a className="article-back-link" href="/mascots"><ArrowLeft size={15} /> Meet the cast</a>
            <div className="mascot-story-role"><span className="mascot-story-role-dot" /> {story.role}</div>
            <h1 id={`${story.id}-title`}>{story.name}: <span>{story.headline}</span></h1>
            <p className="mascot-story-dek">{story.dek}</p>
            <p className="mascot-story-voice"><HeartHandshake size={16} /> {story.voice}</p>
            <div className="mascot-story-actions"><a className="nav-cta" href="/play">Play OutBrick <ArrowUpRight size={15} /></a><a className="blog-text-link" href="#chapters">Follow the story <ChevronRight size={15} /></a></div>
            <MascotFacts story={story} />
          </div>
          <div className="mascot-story-portrait">
            <span className="mascot-story-portrait-topline"><span>OutBrick / {story.name}</span><span>3D companion</span></span>
            <div className="mascot-story-portrait-glow" aria-hidden="true" />
            <img src={story.heroImage} alt={story.imageAlt} title={`${story.name} 3D mascot`} />
            <div className="mascot-story-speech"><Sparkles size={15} /><span>{story.quote}</span></div>
            <span className="mascot-story-portrait-bottomline">{story.name} · always a little alive</span>
          </div>
        </section>

        <section className="mascot-story-intro" aria-labelledby={`${story.id}-intro-title`}>
          <div className="mascot-story-intro-mark" aria-hidden="true"><span>{story.name.charAt(0)}</span><span>+</span><span>O</span></div>
          <div><div className="eyebrow"><span className="eyebrow-dot" /> Before the next move</div><h2 id={`${story.id}-intro-title`}>A little more <span>{story.name}.</span></h2></div>
          <div className="mascot-story-intro-copy"><p>{story.opening}</p><p>{story.name} is not here to solve the board for you. They are here to make the room feel friendly while you find your way through it.</p></div>
        </section>

        <div id="chapters"><MascotStoryExperience story={story} /></div>

        <section className="mascot-story-lesson" aria-labelledby={`${story.id}-lesson-title`}>
          <div className="mascot-story-lesson-image"><img src={story.idleImage} alt={`${story.name} standing in their relaxed OutBrick pose`} title={`${story.name} relaxed pose`} /></div>
          <div className="mascot-story-lesson-copy"><div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-gold" /> What they leave behind</div><h2 id={`${story.id}-lesson-title`}>A board feels different <span>after a good companion.</span></h2><p>{story.name} brings a rhythm to OutBrick that is easy to recognise: {story.voice.toLowerCase()} Their story is really a reminder that progress does not need one perfect personality.</p><div className="mascot-story-lesson-callout"><Sparkles size={17} /><span>{story.quote}</span></div></div>
        </section>

        <section className="mascot-story-cast-nav" aria-label="Browse mascot stories">
          <a className="mascot-story-nav-card" href={`/mascots/${previous.id}`}><ChevronLeft size={17} /><span><small>Previous story</small><strong>{previous.name}</strong></span></a>
          <a className="mascot-story-nav-center" href="/mascots"><span>All three</span><strong>Meet the cast</strong><ArrowUpRight size={16} /></a>
          <a className="mascot-story-nav-card mascot-story-nav-card-next" href={`/mascots/${next.id}`}><span><small>Next story</small><strong>{next.name}</strong></span><ChevronRight size={17} /></a>
        </section>
      </main>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </div>
  );
}
