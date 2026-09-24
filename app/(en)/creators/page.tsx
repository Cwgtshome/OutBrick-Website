import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../editorial-shell';
import { CopyButton } from '../../components/copy-button';
import { friends } from '../../../lib/mascots';
import { pageMetadata, siteUrl, socialProfiles } from '../../../lib/site';

const title = 'OutBrick creators kit: ideas, art, hashtags and rules';
const description =
  'Making videos or posts about OutBrick? Ideas that work, the brand dos and don’ts, downloadable art, suggested hashtags and how to disclose partnerships.';

export const metadata: Metadata = pageMetadata({ path: '/creators', title, description });

const ideas = [
  {
    tone: 'purple',
    kicker: 'Board challenge',
    title: 'Which brick goes first?',
    body: 'Film a packed board, stop before the first move, and let your audience call it. Every board was cleared by a solver before it shipped, so there is always an answer to reveal.',
  },
  {
    tone: 'gold',
    kicker: 'Clip',
    title: '“Can you beat the target?”',
    body: 'Every board shows its move target and move limit from the first tap. Clear it on target without an undo for three stars — a natural fifteen-second challenge.',
  },
  {
    tone: 'teal',
    kicker: 'Share link',
    title: 'Play on the web, share the result',
    body: 'The play guide on this site has real boards you can play in a browser. Finish one and the share link opens a page that previews your result — perfect for a bio or a reply.',
    href: '/play',
    cta: 'Open the play guide',
  },
  {
    tone: 'pink',
    kicker: 'Stickers',
    title: 'The friends, in Messages',
    body: 'OutBrick has an iMessage app with stickers and challenges. React with Bloo, Peach and Sprout, or send a board to a friend without leaving the thread.',
  },
];

const stickers = ['cleared', 'beat-the-target', 'bloo-cheer', 'peach-think', 'sprout-cheer', 'one-more'];
const stickerName = (id: string) => id.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());

const hashtags = '#OutBrick #BlockSortPuzzle';

export default function CreatorsPage() {
  const tiktok = socialProfiles.find((p) => p.network === 'tiktok');
  const planned = socialProfiles.filter((p) => !p.live).map((p) => p.label);
  const pageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/creators#page`,
    url: `${siteUrl}/creators`,
    name: 'OutBrick creators kit',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    publisher: { '@type': 'Organization', name: 'OutBrick', url: siteUrl },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Creators kit', item: `${siteUrl}/creators` },
    ],
  };

  return (
    <EditorialPage className="bz">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Creators kit' }]} />
          <div className="ed-hero-grid">
            <div>
              <p className="ed-label">Creators kit</p>
              <h1 className="ed-display">Make something <em>with the bricks.</em></h1>
              <p className="ed-lede">
                Videos, posts, challenges and write-ups about OutBrick are welcome — no permission needed for
                honest content. Here is what works, the few rules that matter, and the art to use.
              </p>
              <div className="ed-actions">
                <a className="ed-btn" href="#ideas">Get ideas</a>
                <a className="ed-link" href="#assets">Download the art</a>
              </div>
            </div>
            <ul className="bz-stickerwall" aria-hidden="true">
              {stickers.map((id) => (
                <li key={id}>
                  <img src={`/assets/stickers/${id}-160.webp`} srcSet={`/assets/stickers/${id}-160.webp 1x, /assets/stickers/${id}-320.webp 2x`} alt="" width={160} height={160} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <Bond />

      <section id="ideas" className="ed-band-paper ed-band bz-anchor" aria-labelledby="ideas-title">
        <div className="ed-wrap">
          <p className="ed-label">What to make</p>
          <h2 id="ideas-title" className="ed-h2" style={{ marginTop: 14 }}>Four ideas that suit the game.</h2>
          <div className="ed-wall">
            {ideas.map((idea) => (
              <article className="ed-brickcard" data-tone={idea.tone} key={idea.title}>
                <span className="ed-kicker">{idea.kicker}</span>
                <h3>{idea.title}</h3>
                <p>{idea.body}</p>
                {idea.href ? <p><a className="bz-cardlink" href={idea.href}>{idea.cta}</a></p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-band-cream ed-band" aria-labelledby="brand-title">
        <div className="ed-wrap">
          <p className="ed-label">Brand dos and don’ts</p>
          <h2 id="brand-title" className="ed-h2" style={{ marginTop: 14 }}>Show it as it is.</h2>
          <div className="ed-words">
            <div data-tone="green">
              <h3 className="ed-h3">Do</h3>
              <ul>
                <li>Write OutBrick as one word, capital O and B</li>
                <li>Record real gameplay yourself, on your own device</li>
                <li>Call the friends by name: Bloo, Peach, Sprout, Bricko, Flurry, Moss, Poppy, Vio and Zippy</li>
                <li>Use the art as supplied, at any size</li>
                <li>Say what it costs honestly: free, with optional purchases and opt-in rewarded videos</li>
              </ul>
            </div>
            <div data-tone="red">
              <h3 className="ed-h3">Don’t</h3>
              <ul>
                <li>Recolour, redraw or merge the friends, or give them voices — in the game they speak in text bubbles</li>
                <li>Say “no ads”, “no lives”, or that there is a timer or countdown</li>
                <li>Make brain-training, health or money-making claims</li>
                <li>Use the app icon or wordmark as your own avatar, or post as if you were OutBrick</li>
                <li>Suggest that Apple sponsors or endorses your content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="assets" className="ed-band-ink ed-band bz-anchor" aria-labelledby="assets-title">
        <div className="ed-wrap">
          <p className="ed-label">Assets</p>
          <h2 id="assets-title" className="ed-h2" style={{ marginTop: 14 }}>The art, ready to use.</h2>
          <p className="ed-lede" style={{ marginTop: 16 }}>
            The <a className="ed-link" href="/press-kit#friends">press kit</a> has the app icon, the wordmark, all nine friends as
            transparent PNGs and current <a className="ed-link" href="/press-kit#assets">game captures</a>. The stickers are here.
          </p>
          <div className="ed-downloads bz-stickers">
            {stickers.map((id) => (
              <a className="ed-download" key={id} href={`/assets/stickers/${id}-320.webp`} download={`outbrick-sticker-${id}.webp`}>
                <span className="plinth icon"><img src={`/assets/stickers/${id}-160.webp`} alt="" width={160} height={160} loading="lazy" decoding="async" /></span>
                <b>{stickerName(id)}</b>
                <span>WebP sticker, 320 × 320</span>
              </a>
            ))}
            {friends.slice(0, 4).map((friend) => (
              <a
                className="ed-download"
                key={friend.id}
                href={friend.image.replace(/\.webp$/, '.png')}
                download={`outbrick-${friend.id}.png`}
                style={{ ['--c' as string]: friend.colour, ['--c-foot' as string]: friend.foot }}
              >
                <span className="plinth"><img src={friend.image} alt={friend.imageAlt} width={360} height={360} loading="lazy" decoding="async" /></span>
                <b>{friend.name}</b>
                <span>PNG, 360 × 360</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-band-paper ed-band" aria-labelledby="tags-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">Hashtags and handles</p>
            <h2 id="tags-title" className="ed-h2">Tag it so we can find it.</h2>
          </div>
          <div className="ed-prose">
            <div className="bz-tags">
              <span className="ed-chip" data-tone="purple">#OutBrick</span>
              <span className="ed-chip" data-tone="teal">#BlockSortPuzzle</span>
              <CopyButton text={hashtags} label="Copy hashtags" />
            </div>
            <p>
              Use both on every post. Add your platform’s own puzzle or cosy-games tags if they fit your audience.
            </p>
            <p>
              Tag <a className="ed-link" style={{ marginTop: 0, display: 'inline' }} href={tiktok?.url}>@outbrick on TikTok</a>. OutBrick is
              coming to {planned.join(', ').replace(/, ([^,]*)$/, ' and $1')} as @outbrick, too — those profiles are not open yet.
            </p>
          </div>
        </div>
      </section>

      <section className="ed-band-cream ed-band" aria-labelledby="disclose-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label" data-tone="red">Disclosure</p>
            <h2 id="disclose-title" className="ed-h2">If anything was given, say so.</h2>
          </div>
          <div className="ed-prose">
            <p>
              If you use an affiliate link, were paid, or received anything from OutBrick — a promo code, the
              Brick Pass, early access — say so clearly at the start of the post, not buried in hashtags. It is
              required by the FTC in the US, the ASA and CAP Code in the UK, and similar rules elsewhere.
            </p>
            <ul className="bz-list">
              <li>Use your platform’s paid-partnership or branded-content label where it has one</li>
              <li>Or say it in words, on screen and in the caption: “#ad — affiliate link, I earn a commission”</li>
              <li>Say it out loud in a video, too: many people watch without reading the caption</li>
            </ul>
            <p>Just playing because you like it? Then there is nothing to disclose — enjoy it.</p>
          </div>
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="earn-title">
        <div className="ed-wrap bz-teaser">
          <img src="/assets/friends/bloo.webp" alt="" width={120} height={120} />
          <div>
            <h2 id="earn-title" className="ed-h3">Posting regularly? Earn from it.</h2>
            <p>The affiliate programme pays 30% of our net proceeds from purchases Apple attributes to your link.</p>
          </div>
          <div className="ed-actions">
            <a className="ed-btn" href="/affiliates">See the affiliate programme</a>
            <a className="ed-link" href="/contact?topic=marketing">Pitch a partnership</a>
          </div>
        </div>
      </section>

      <JsonLd data={pageData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
