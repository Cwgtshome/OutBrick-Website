import type { Metadata } from 'next';
import { pageMetadata, siteUrl } from '../../../lib/site';
import { JsonLd } from '../../editorial-shell';
import { LegalPage, Pills } from '../../legal-page';
import { ContactForm } from './contact-form';

const description =
  'Contact the OutBrick team about game support, bugs, accessibility, privacy, purchases, press, partnerships, affiliates or careers. A person replies.';

export const metadata: Metadata = pageMetadata({
  path: '/contact',
  title: 'Contact OutBrick: support, press and partnerships',
  description,
});

const elsewhere = [
  { href: '/support', title: 'Stuck on a board?', note: 'The support page answers the common questions straight away.' },
  { href: '/press', title: 'Writing about OutBrick?', note: 'The press room has the release, the boilerplate and the facts.' },
  { href: '/affiliates', title: 'Want to promote the game?', note: 'The affiliate programme has its own application.' },
  { href: '/careers', title: 'Looking for a job?', note: 'Each open role has its own page and application.' },
];

export default function ContactPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}/contact#page`,
    url: `${siteUrl}/contact`,
    name: 'Contact OutBrick',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: {
      '@type': 'Organization',
      name: 'OutBrick',
      url: siteUrl,
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'customer support', url: `${siteUrl}/contact` },
        { '@type': 'ContactPoint', contactType: 'press', url: `${siteUrl}/press` },
      ],
    },
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
    ],
  };

  return (
    <LegalPage
      eyebrow="Contact OutBrick"
      title="Let’s untangle it."
      summary="Game support, a bug, accessibility, privacy, a purchase that did not arrive, press, partnerships, affiliates or a job — pick a topic and tell us. A person reads every message."
      updated="24 September 2026"
      current="/contact"
    >
      <div className="brick headline">
        <h2>A real line to the team.</h2>
        <p>
          The form sends your message straight to the OutBrick team — no mail app needed — and a person
          replies by email.
        </p>
      </div>

      <section className="brick" id="form" aria-labelledby="form-title">
        <h2 id="form-title">Send a message</h2>
        <ContactForm />
      </section>

      <section className="brick" aria-labelledby="elsewhere-title">
        <h2 id="elsewhere-title">You might be looking for</h2>
        <ul className="contact-elsewhere">
          {elsewhere.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <b>{item.title}</b>
                <span>{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="brick" aria-labelledby="refunds-title">
        <h2 id="refunds-title">Purchases and refunds</h2>
        <p>
          Refunds for App Store purchases are handled by Apple, not by OutBrick — the{' '}
          <a href="/refunds">refunds page</a> explains how to ask Apple, and we are glad to help if a
          purchase did not arrive.
        </p>
      </section>

      <Pills items={['A person replies', 'Never sold or shared', 'No mail app needed']} />
      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
    </LegalPage>
  );
}
