import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../../editorial-shell';
import { CopyButton } from '../../components/copy-button';
import { founderQuote, pressBoilerplate } from '../../../lib/business';
import { CONTACT_EMAIL, pageMetadata, siteUrl } from '../../../lib/site';
import { APP_STORE_URL } from '../../store-badge';
import { pressReleases } from './releases';

const title = 'OutBrick press room: news, boilerplate and contacts';
const description =
  'News and press releases from OutBrick, the About OutBrick boilerplate, a word from founder Mourad Hamdi, how to cite the game, and the press contact.';

export const metadata: Metadata = pageMetadata({ path: '/press', title, description });

export default function PressPage() {
  const pageData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/press#page`,
    url: `${siteUrl}/press`,
    name: 'OutBrick press room',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: pressReleases.map((release, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/press/${release.slug}`,
        name: release.headline,
      })),
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Press room', item: `${siteUrl}/press` },
    ],
  };
  const latest = pressReleases[0];

  return (
    <EditorialPage current="press" className="bz">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Press room' }]} />
          <div className="ed-hero-grid">
            <div>
              <p className="ed-label">Press room</p>
              <h1 className="ed-display">News from <em>the brick village.</em></h1>
              <p className="ed-lede">
                Releases, the paragraph to paste, a word from the founder and the right way to cite the
                game. For logos, art and captures, the press kit has everything.
              </p>
              <div className="ed-actions">
                <a className="ed-btn" href="/press-kit">Open the press kit</a>
                <a className="ed-link" href="#contact">Press contact</a>
              </div>
            </div>
            <a className="bz-newscard ed-slab lit" data-tone="gold" href={`/press/${latest.slug}`}>
              <Studs count={4} />
              <span className="bz-newscard-kicker">Latest release · {latest.dateline}</span>
              <span className="bz-newscard-title">{latest.short}</span>
              <span className="bz-newscard-dek">{latest.dek}</span>
              <span className="bz-newscard-more">Read the release</span>
            </a>
          </div>
        </div>
      </header>
      <Bond />

      <section className="ed-band-paper ed-band" aria-labelledby="news-title">
        <div className="ed-wrap">
          <p className="ed-label">Releases</p>
          <h2 id="news-title" className="ed-h2" style={{ marginTop: 14 }}>News</h2>
          <ol className="ed-rows bz-releases">
            {pressReleases.map((release) => (
              <li className="ed-row" key={release.slug}>
                <div>
                  <p className="ed-meta"><time dateTime={release.published}>{release.dateline}</time> · Press release</p>
                  <h3><a href={`/press/${release.slug}`}>{release.headline}</a></h3>
                  <p>{release.dek}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ed-band-cream ed-band" aria-labelledby="about-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">Boilerplate</p>
            <h2 id="about-title" className="ed-h2">About OutBrick</h2>
            <p className="ed-meta" style={{ marginTop: 16 }}>Use it as is, or trim from the end.</p>
          </div>
          <div className="bz-boiler">
            <p>{pressBoilerplate}</p>
            <CopyButton text={pressBoilerplate} label="Copy paragraph" />
          </div>
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="quote-title">
        <div className="ed-wrap">
          <h2 id="quote-title" className="ed-label">From the founder</h2>
          <figure className="bz-quote">
            <blockquote>
              <p>{founderQuote}</p>
            </blockquote>
            <figcaption>
              <img src="/assets/icon/icon-192.png" alt="" width={56} height={56} />
              <span><b>Mourad Hamdi</b>Founder &amp; CEO, OutBrick</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ed-band-paper ed-band" aria-labelledby="cite-title">
        <div className="ed-wrap">
          <p className="ed-label">Citing OutBrick</p>
          <h2 id="cite-title" className="ed-h2" style={{ marginTop: 14 }}>Name it, link it.</h2>
          <dl className="ed-ledger" style={{ marginTop: 28 }}>
            <div><dt>Name</dt><dd><b>OutBrick</b> — one word, capital O and B. On first mention, the App Store name: <b>OutBrick: Block Sort Puzzle</b>.</dd></div>
            <div><dt>Company</dt><dd>OutBrick, founded by Mourad Hamdi (Founder &amp; CEO)</dd></div>
            <div><dt>Website</dt><dd><a className="ed-link" style={{ fontSize: 'inherit' }} href="/">www.outbrick.site</a></dd></div>
            <div><dt>App Store</dt><dd><a className="ed-link" style={{ fontSize: 'inherit', overflowWrap: 'anywhere' }} href={APP_STORE_URL}>{APP_STORE_URL.replace('https://', '')}</a></dd></div>
            <div><dt>Describe it as</dt><dd>A sliding-brick colour-sort puzzle. More wording, and what to avoid, is in the <a className="ed-link" style={{ fontSize: 'inherit' }} href="/press-kit">press kit</a>.</dd></div>
          </dl>
        </div>
      </section>

      <section id="contact" className="ed-band-ink ed-band bz-anchor" aria-labelledby="contact-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">Media contact</p>
            <h2 id="contact-title" className="ed-h2" style={{ marginTop: 14 }}>Questions go to a person.</h2>
          </div>
          <div className="ed-prose">
            <p>
              Interviews, review access, asset requests or fact checks: use the contact form with the topic
              set to Press &amp; media, or email Mourad directly. Replies come from the same address.
            </p>
            <div className="ed-actions" style={{ marginTop: 26 }}>
              <a className="ed-btn" href="/contact?topic=press#form">Contact the press desk</a>
              <a className="ed-link" style={{ marginTop: 0 }} href={`mailto:${CONTACT_EMAIL}?subject=OutBrick%20press`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={pageData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
