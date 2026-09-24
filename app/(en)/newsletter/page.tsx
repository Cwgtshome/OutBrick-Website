import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../../editorial-shell';
import { NewsletterSignup } from '../../components/newsletter-signup';
import { pageMetadata, siteUrl } from '../../../lib/site';
import { breadcrumbNode, graph, webPageNode } from '../../../lib/structured-data';

const title = 'The OutBrick newsletter: new villages and big updates';
const description =
  'One short email when OutBrick opens a new village or ships a big update, about once a month. No spam, five languages, unsubscribe any time.';

export const metadata: Metadata = pageMetadata({ path: '/newsletter', title, description });

const promises: { tone: string; title: string; body: string }[] = [
  { tone: 'gold', title: 'New villages', body: 'When the Journey grows, you hear where the road goes next.' },
  { tone: 'teal', title: 'Big updates', body: 'The release notes that matter, in plain words: what changed on the board and why.' },
  { tone: 'purple', title: 'About once a month', body: 'Only when there is something to say, and never more than roughly monthly.' },
  { tone: 'green', title: 'No spam', body: 'Your address is used for this letter and nothing else. It is never sold, and never used for advertising.' },
];

export default function NewsletterPage() {
  const url = `${siteUrl}/newsletter`;
  const structuredData = graph(
    webPageNode({ url, name: title, description }),
    breadcrumbNode(url, [
      { name: 'OutBrick', path: '/' },
      { name: 'Newsletter', path: '/newsletter' },
    ]),
  );

  return (
    <EditorialPage>
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Newsletter' }]} />
          <p className="ed-label" style={{ marginTop: 18 }}>Newsletter</p>
          <h1 className="ed-display">Letters from <em>the boulevard.</em></h1>
          <p className="ed-lede">
            A short email when a new village opens on the Journey or a big update reaches the App Store.
            Pick the language you would like it in; everything else is on this page.
          </p>
        </div>
      </header>
      <Bond />

      <section className="ed-band-paper ed-band" aria-labelledby="get-title">
        <div className="ed-wrap wn-news-grid">
          <div>
            <p className="ed-label">What you’ll get</p>
            <h2 id="get-title" className="ed-h2" style={{ marginTop: 14 }}>Four promises, kept short.</h2>
            <ul className="nl-promises">
              {promises.map((promise) => (
                <li key={promise.title} data-tone={promise.tone}>
                  <span className="ed-slab" aria-hidden="true"><Studs count={1} /></span>
                  <div>
                    <h3 className="ed-h3">{promise.title}</h3>
                    <p>{promise.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <NewsletterSignup headingLevel={2} heading="Sign up" intro="Your email address and a language. That is all we ask for." />
            <p className="ed-meta" style={{ marginTop: 22, maxWidth: '52ch' }}>
              To come off the list, reply to any letter or use the{' '}
              <a className="ed-link" href="/contact?topic=privacy#form">contact form</a> with the topic set to Privacy.
              How the address is stored is set out in the <a className="ed-link" href="/privacy">privacy policy</a>.
            </p>
          </div>
        </div>
      </section>
      <Bond thin />

      <section className="ed-band-ink ed-band-tight" aria-labelledby="meanwhile-title">
        <div className="ed-wrap">
          <h2 id="meanwhile-title" className="ed-h3">In the meantime</h2>
          <div className="ed-actions" style={{ marginTop: 18 }}>
            <a className="ed-btn" href="/whats-new">Read what’s new in 4.2</a>
            <a className="ed-link" href="/blog">Browse the journal</a>
            <a className="ed-link" href="/feed.xml" type="application/rss+xml">Journal RSS</a>
          </div>
        </div>
      </section>

      <JsonLd data={structuredData} />
    </EditorialPage>
  );
}
