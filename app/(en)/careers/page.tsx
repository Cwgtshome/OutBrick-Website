import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd } from '../../editorial-shell';
import { hiringCountriesText, jobs, teams } from '../../../lib/business';
import { pageMetadata, siteUrl } from '../../../lib/site';
import { RoleList } from './role-list';

const title = 'Careers at OutBrick: remote jobs in calm games';
const description =
  'Join OutBrick, the small, remote-first team behind OutBrick: Block Sort Puzzle. Five open roles in marketing, community, design and AI engineering.';

export const metadata: Metadata = pageMetadata({ path: '/careers', title, description });

const why = [
  { tone: 'gold', kicker: 'Small', title: 'Every person changes the game', body: 'OutBrick is a small company. What you make ships to players on six Apple platforms, and you will be able to point at it.' },
  { tone: 'teal', kicker: 'Calm', title: 'A calm game, made calmly', body: 'We make a puzzle with no clock, and we try to work the same way: steady weeks, honest planning, no crunch culture.' },
  { tone: 'purple', kicker: 'Honest', title: 'We say how it works', body: 'Our players are told exactly how lives, ads and purchases work. We are as plain with each other, and with you in hiring.' },
  { tone: 'blue', kicker: 'Remote', title: 'Remote-first, from day one', body: 'We work from home, in writing, across time zones — with a few hours of overlap agreed with each person rather than imposed.' },
];

const process = [
  { title: 'Apply', body: 'The form on each role: a link to your work and a short note. No cover-letter theatre.' },
  { title: 'Intro call', body: 'Thirty minutes on video with Mourad Hamdi, our founder: the role, you, and your questions.' },
  { title: 'A practical step', body: 'A small exercise close to the real work, scoped to a few hours — or a walkthrough of something you have already made, if you prefer.' },
  { title: 'Meet the team', body: 'A conversation with the people you would work with most.' },
  { title: 'Offer', body: 'A written offer with the terms spelled out. Pay is discussed openly, early, not sprung at the end.' },
];

const benefits = [
  'Fully remote, in any of the six countries we hire in',
  'Flexible hours around a short, agreed overlap',
  'Pay discussed openly from the first call',
  'Time and room to do careful work',
  'The tools and software the job needs',
];

export default function CareersPage() {
  const pageData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/careers#page`,
    url: `${siteUrl}/careers`,
    name: 'Careers at OutBrick',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: jobs.length,
      itemListElement: jobs.map((job, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/careers/${job.slug}`,
        name: job.title,
      })),
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: `${siteUrl}/careers` },
    ],
  };

  return (
    <EditorialPage className="bz">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Careers' }]} />
          <div className="ed-hero-grid">
            <div>
              <p className="ed-label">Careers</p>
              <h1 className="ed-display">Build calm games <em>with us.</em></h1>
              <p className="ed-lede">
                OutBrick is a small, remote-first team making a puzzle game that respects the people who play
                it. We are hiring for {jobs.length} roles.
              </p>
              <div className="ed-actions">
                <a className="ed-btn" href="#roles">See open roles</a>
                <a className="ed-link" href="#process">How we hire</a>
              </div>
            </div>
            <div className="bz-crew" aria-hidden="true">
              <img src="/assets/friends/bricko.webp" alt="" width={360} height={360} />
              <img src="/assets/friends/bloo.webp" alt="" width={360} height={360} />
              <img src="/assets/friends/sprout.webp" alt="" width={360} height={360} />
            </div>
          </div>
        </div>
      </header>
      <Bond />

      <section id="roles" className="ed-band-paper ed-band bz-anchor" aria-labelledby="roles-title">
        <div className="ed-wrap">
          <p className="ed-label">Open roles</p>
          <h2 id="roles-title" className="ed-h2" style={{ marginTop: 14 }}>Five places at the table.</h2>
          <p className="ed-lede" style={{ marginTop: 16 }}>
            All remote, open to people living in {hiringCountriesText()}.
          </p>
          <RoleList jobs={jobs} teams={teams} />
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="why-title">
        <div className="ed-wrap">
          <p className="ed-label">Why OutBrick</p>
          <h2 id="why-title" className="ed-h2" style={{ marginTop: 14 }}>How we work.</h2>
          <div className="ed-wall">
            {why.map((item) => (
              <article className="ed-brickcard" data-tone={item.tone} key={item.title}>
                <span className="ed-kicker">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="ed-band-cream ed-band bz-anchor" aria-labelledby="process-title">
        <div className="ed-wrap">
          <p className="ed-label">Hiring process</p>
          <h2 id="process-title" className="ed-h2" style={{ marginTop: 14 }}>Five steps, no surprises.</h2>
          <ol className="bz-path">
            {process.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="ed-meta" style={{ marginTop: 28 }}>A person reads every application, and we tell you where you stand at each step.</p>
        </div>
      </section>

      <section className="ed-band-paper ed-band" aria-labelledby="benefits-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">What we offer</p>
            <h2 id="benefits-title" className="ed-h2">Kept honest.</h2>
            <p className="ed-meta" style={{ marginTop: 16 }}>
              Pay and terms depend on the role, the level and where you live; we share them in the first call
              rather than print numbers here we have not agreed with anyone yet.
            </p>
          </div>
          <ul className="bz-benefits">
            {benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </section>

      <section className="ed-band-ink ed-band-tight" aria-labelledby="none-title">
        <div className="ed-wrap bz-teaser">
          <img src="/assets/friends/peach.webp" alt="" width={120} height={120} />
          <div>
            <h2 id="none-title" className="ed-h3">Not quite your role?</h2>
            <p>Tell us what you do anyway. Use the contact form with the topic set to Careers.</p>
          </div>
          <a className="ed-btn ghost" href="/contact?topic=careers#form">Get in touch</a>
        </div>
      </section>

      <JsonLd data={pageData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
