import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../../../editorial-shell';
import { friends, getAdjacentMascot, getFriend, getMascotStory, mascotStories } from '../../../../lib/mascots';
import { siteUrl } from '../../../../lib/site';
import { FriendMoves } from '../../../components/friend-moves-binder';

type MascotPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mascotStories.map((story) => ({ slug: story.id }));
}

export async function generateMetadata({ params }: MascotPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getMascotStory(slug);
  const friend = getFriend(slug);
  if (!story || !friend) return {};
  const title = `${story.name}: ${story.headline}`;
  const image = `${siteUrl}${friend.image}`;

  return {
    title,
    description: story.dek,
    keywords: ['OutBrick', story.name, 'OutBrick friends', 'brick mascot'],
    alternates: { canonical: `/mascots/${story.id}` },
    openGraph: {
      type: 'article',
      url: `${siteUrl}/mascots/${story.id}`,
      siteName: 'OutBrick',
      title,
      description: story.dek,
      images: [{ url: image, width: 360, height: 360, alt: friend.imageAlt }],
    },
    twitter: { card: 'summary', title, description: story.dek, images: [image] },
  };
}

export default async function MascotStoryPage({ params }: MascotPageProps) {
  const { slug } = await params;
  const story = getMascotStory(slug);
  const friend = getFriend(slug);
  if (!story || !friend) notFound();

  const previous = getAdjacentMascot(story.id, -1);
  const next = getAdjacentMascot(story.id, 1);
  const storyUrl = `${siteUrl}/mascots/${story.id}`;
  const tone = { '--c': friend.colour, '--c-foot': friend.foot, '--c-ink': friend.ink, '--c-soft': `color-mix(in srgb, ${friend.colour} 18%, #fff)` } as CSSProperties;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${storyUrl}#page`,
    url: storyUrl,
    name: `${story.name}: ${story.headline}`,
    description: story.dek,
    image: `${siteUrl}${friend.image}`,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: {
      '@type': 'Thing',
      name: `${story.name} (OutBrick character)`,
      description: friend.line,
      image: `${siteUrl}${friend.image}`,
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

  const otherFriends = friends.filter((item) => item.id !== friend.id);

  return (
    <EditorialPage current="mascots">
      <div style={tone}>
        <header className="ed-band-ink ed-mhero">
          <div className="ed-wrap">
            <Crumbs items={[{ href: '/', label: 'OutBrick' }, { href: '/mascots', label: 'Mascots' }, { label: story.name }]} />
            <div className="ed-mhero-grid">
              <div>
                <p className="ed-label" style={{ color: `color-mix(in srgb, ${friend.colour} 62%, #fff)` }}>{story.role}</p>
                <h1 className="ed-display">
                  <span className="name">{story.name}</span>
                  <span className="headline">{story.headline}</span>
                </h1>
                <p className="ed-lede" style={{ marginTop: 24 }}>{story.dek}</p>
                <dl className="ed-ledger ed-mfacts">
                  <div><dt>In the game</dt><dd>{friend.line}</dd></div>
                  <div><dt>Superpower</dt><dd>{story.superpower}</dd></div>
                  <div><dt>The tell</dt><dd>{story.tells}</dd></div>
                  <div><dt>Favourite move</dt><dd>{story.favoriteMove}</dd></div>
                </dl>
              </div>
              <div className="ed-mstage" data-friend-move={friend.id}>
                <Studs count={4} />
                <p className="ed-bubble"><span className="sr-only">{story.name}’s text bubble: </span>{story.bubble}</p>
                <img className="friend fm-actor" src={friend.image} alt={friend.imageAlt} width={360} height={360} decoding="async" fetchPriority="high" />
              </div>
            </div>
          </div>
        </header>
        <Bond />

        <section className="ed-band-paper ed-band" aria-labelledby="opening-title">
          <div className="ed-wrap ed-split">
            <div>
              <p className="ed-label">Before the next move</p>
              <h2 id="opening-title" className="ed-h2" style={{ marginTop: 14 }}>A little more {story.name}.</h2>
            </div>
            <div className="ed-prose">
              <p className="ed-intro" style={{ fontSize: 'clamp(1.15rem, 1.05rem + 0.45vw, 1.4rem)' }}>{story.opening}</p>
              <p>{story.temperament} {story.name} is not there to solve the board for you, only to make the room friendlier while you find the way through.</p>
            </div>
          </div>

          <div className="ed-wrap">
            <div className="ed-chapters">
              {story.chapters.map((chapter) => (
                <article className="ed-chapter ed-reveal" key={chapter.number} aria-labelledby={`chapter-${chapter.number}`}>
                  <figure className="ed-chapter-art" data-friend-move={friend.id}>
                    <div className="ed-capture">
                      <img src={`/assets/villages/${chapter.village.slug}.jpg`} alt={`${chapter.village.name}, a brick-built village on the OutBrick Journey map.`} width={239} height={520} loading="lazy" decoding="async" />
                    </div>
                    <img className="ed-friend fm-actor" src={friend.image} alt="" width={360} height={360} loading="lazy" decoding="async" />
                    <figcaption>{chapter.village.name}, on the Journey</figcaption>
                  </figure>
                  <div>
                    <span className="n">{chapter.number}</span>
                    <h3 id={`chapter-${chapter.number}`}>{chapter.title}</h3>
                    <p>{chapter.body}</p>
                    <p className="ed-note">{chapter.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ed-band-ink ed-band-tight" aria-label="More friends">
          <div className="ed-wrap">
            <nav className="ed-mnav" aria-label="Other stories">
              <a href={`/mascots/${previous.id}`} style={{ ['--c' as string]: getFriend(previous.id)!.colour, ['--c-foot' as string]: getFriend(previous.id)!.foot, ['--c-ink' as string]: getFriend(previous.id)!.ink }}>
                <small>Previous story</small><b>{previous.name}</b>
              </a>
              <a className="all" href="/mascots"><small>The cast</small><b>All nine friends</b></a>
              <a className="next" href={`/mascots/${next.id}`} style={{ ['--c' as string]: getFriend(next.id)!.colour, ['--c-foot' as string]: getFriend(next.id)!.foot, ['--c-ink' as string]: getFriend(next.id)!.ink }}>
                <small>Next story</small><b>{next.name}</b>
              </a>
            </nav>
            <p className="ed-meta" style={{ marginTop: 28 }}>
              Also on the road:{' '}
              {otherFriends
                .filter((item) => !item.hasStory)
                .map((item, index, list) => (
                  <span key={item.id}>
                    <a className="ed-link" style={{ fontSize: 'inherit' }} href={`/mascots#${item.id}`}>{item.name}</a>
                    {index < list.length - 1 ? ', ' : '.'}
                  </span>
                ))}
            </p>
          </div>
        </section>
      </div>

      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
      <FriendMoves />
    </EditorialPage>
  );
}
