import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../editorial-shell';
import { friends, mascotStories } from '../../../lib/mascots';
import { siteUrl } from '../../../lib/site';
import { FriendMoves } from '../../components/friend-moves-binder';

const description =
  'Meet the nine brick friends of OutBrick: Bloo, Peach, Sprout, Bricko, Flurry, Moss, Poppy, Vio and Zippy. Three share your Home screen at a time.';

export const metadata: Metadata = {
  title: 'The nine brick friends',
  description,
  keywords: ['OutBrick friends', 'OutBrick mascots', ...friends.map((friend) => friend.name)],
  alternates: { canonical: '/mascots' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/mascots`,
    siteName: 'OutBrick',
    title: 'The nine brick friends of OutBrick',
    description,
    images: [{ url: `${siteUrl}/assets/friends/bloo.png`, width: 360, height: 360, alt: 'Bloo, a blue brick-shaped OutBrick friend.' }],
  },
  twitter: { card: 'summary', title: 'The nine brick friends of OutBrick', description, images: [`${siteUrl}/assets/friends/bloo.png`] },
};

export default function MascotsPage() {
  const withStory = friends.filter((friend) => friend.hasStory);
  const others = friends.filter((friend) => !friend.hasStory);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/mascots#page`,
    url: `${siteUrl}/mascots`,
    name: 'The nine brick friends of OutBrick',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: friends.map((friend, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: friend.hasStory ? `${siteUrl}/mascots/${friend.id}` : `${siteUrl}/mascots#${friend.id}`,
        name: friend.name,
        image: `${siteUrl}${friend.image}`,
      })),
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Mascots', item: `${siteUrl}/mascots` },
    ],
  };

  return (
    <EditorialPage current="mascots">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Mascots' }]} />
          <div className="ed-hero-grid" style={{ alignItems: 'start' }}>
            <div>
              <p className="ed-label">The cast</p>
              <h1 className="ed-display">Nine brick friends. <em>Three at a time.</em></h1>
              <p className="ed-lede">
                Real 3D characters built from the same bricks as the board. Three share your Home screen,
                and the cast turns over as you play: one waves goodbye and walks off, another walks on and
                says hello. Poke one and it reacts. Clear a board and each has a victory move of its own.
              </p>
              <p className="ed-meta" style={{ marginTop: 20, maxWidth: '56ch' }}>
                The friends speak in text bubbles only. They have no voices: character vocalisations were
                removed on 21 September 2026.
              </p>
            </div>
            <nav aria-label="All nine friends">
              <ul className="ed-roster" style={{ listStyle: 'none', margin: 0 }}>
                {friends.map((friend) => (
                  <li key={friend.id} style={{ ['--c' as string]: friend.colour, ['--c-foot' as string]: friend.foot }}>
                    <a href={friend.hasStory ? `/mascots/${friend.id}` : `#${friend.id}`} data-friend-moves="">
                      <span className="plinth" data-friend-move={friend.id}>
                        <img className="fm-actor" src={friend.image} alt="" width={360} height={360} decoding="async" />
                      </span>
                      <b>{friend.name}</b>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Bond />

      <section className="ed-band-paper ed-band" aria-labelledby="stories-title">
        <div className="ed-wrap">
          <p className="ed-label">Three stories</p>
          <h2 id="stories-title" className="ed-h2" style={{ marginTop: 14, maxWidth: '20ch' }}>The friends who were there first.</h2>
          <p className="ed-lede" style={{ marginTop: 16 }}>Bloo, Peach and Sprout each have a short illustrated story, set in real villages from the Journey.</p>
          <div className="ed-story-trio">
            {withStory.map((friend) => {
              const story = mascotStories.find((item) => item.id === friend.id)!;
              const village = story.chapters[0]!.village;
              return (
                <article
                  key={friend.id}
                  className="ed-storycard ed-lift ed-reveal"
                  data-friend-moves=""
                  style={{ ['--c' as string]: friend.colour, ['--c-foot' as string]: friend.foot, ['--c-ink' as string]: friend.ink }}
                >
                  <div className="ed-storycard-art" aria-hidden="true" data-friend-move={friend.id}>
                    <figure className="ed-capture" style={{ margin: 0 }}>
                      <img src={`/assets/villages/${village.slug}.jpg`} alt="" width={239} height={520} loading="lazy" decoding="async" />
                    </figure>
                    <img className="ed-friend fm-actor" src={friend.image} alt="" width={360} height={360} loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <span className="role">{friend.role}</span>
                    <h3><a href={`/mascots/${friend.id}`}>{friend.name}</a></h3>
                    <p className="headline">{story.headline}</p>
                    <p className="dek">{story.dek}</p>
                    <span className="go" aria-hidden="true">Read {friend.name}’s story</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="six-title">
        <div className="ed-wrap">
          <p className="ed-label">And six more</p>
          <h2 id="six-title" className="ed-h2" style={{ marginTop: 14, maxWidth: '18ch' }}>The rest of the cast, briefly.</h2>
          <p className="ed-lede" style={{ marginTop: 16 }}>What each friend does in the game, quoted from the cast notes, and a line of flavour from us.</p>
          <div className="ed-profiles">
            {others.map((friend) => (
              <article
                key={friend.id}
                id={friend.id}
                className="ed-profile ed-reveal"
                style={{ ['--c' as string]: friend.colour, ['--c-foot' as string]: friend.foot }}
                aria-labelledby={`${friend.id}-name`}
              >
                <div className="plinth" data-friend-move={friend.id}>
                  <img className="fm-actor" src={friend.image} alt={friend.imageAlt} width={360} height={360} loading="lazy" decoding="async" />
                </div>
                <div>
                  <p className="ed-label no-mark" style={{ color: `color-mix(in srgb, ${friend.colour} 62%, #fff)` }}>{friend.role}</p>
                  <h3 id={`${friend.id}-name`}>{friend.name}</h3>
                  <p className="flavour" style={{ marginTop: 12 }}>{friend.flavour}</p>
                </div>
                <blockquote>
                  <span className="ed-label">In the game</span>
                  {friend.line}
                </blockquote>
              </article>
            ))}
          </div>
          <div className="ed-actions" style={{ marginTop: 40 }}>
            <a className="ed-btn" href="/#cast">See all nine on the home page</a>
            <a className="ed-link" href="/press-kit#friends">Download the renders</a>
          </div>
        </div>
      </section>

      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
      <FriendMoves />
    </EditorialPage>
  );
}
