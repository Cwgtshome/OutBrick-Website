import type { Metadata } from 'next';
import { Bond, Crumbs, EditorialPage, JsonLd, Studs } from '../../editorial-shell';
import { affiliateTerms } from '../../../lib/business';
import { pageMetadata, siteUrl } from '../../../lib/site';
import { AffiliateForm } from './affiliate-form';

const title = 'OutBrick affiliate programme: earn 30% as a creator';
const description =
  'Promote OutBrick: Block Sort Puzzle with your own link and earn 30% of our net proceeds from the in-app purchases Apple attributes to you, for 12 months.';

export const metadata: Metadata = pageMetadata({ path: '/affiliates', title, description });

const { commissionPercent: pct, windowMonths: months, minimumPayout } = affiliateTerms;

const steps = [
  {
    title: 'Apply and get your code',
    body: 'Tell us where you post and how you would show the game. If it is a fit, we confirm a personal code — MOURAD27, say — and the link that goes with it.',
  },
  {
    title: 'Share your link',
    body: 'outbrick.site/r/<your code> opens OutBrick on the App Store, carrying an App Store campaign tag that is yours alone. Put it in your bio, your description or your post, with a clear “affiliate link” note.',
  },
  {
    title: `Earn ${pct}% of what follows`,
    body: `When App Store Connect attributes in-app purchases to your campaign — Brick Pass, Remove Ads, coins — you earn ${pct}% of OutBrick’s net proceeds from them, for ${months} months from each download.`,
  },
];

const example: [string, string][] = [
  ['Customers attributed to your link spend', '$300.00'],
  ['Apple’s commission (example: 15%)', '− $45.00'],
  ['OutBrick’s proceeds', '$255.00'],
  ['Refunds in the month (example)', '− $15.00'],
  ['Net proceeds', '$240.00'],
];

const audiences = [
  { tone: 'pink', kicker: 'Short video', title: 'TikTok, Shorts, Reels and Spotlight', body: 'Board challenges, near-misses, the clear card and the friends’ victory moves — OutBrick reads well in fifteen seconds.' },
  { tone: 'red', kicker: 'Long form', title: 'YouTubers and streamers', body: 'Let-me-think-out-loud runs through a chapter, and the 167 villages of the Journey coming together stud by stud.' },
  { tone: 'teal', kicker: 'Writers', title: 'Puzzle and mobile-game writers', body: 'Blogs, newsletters and review sites that care about fair design: no clock, a free first undo, opt-in ads only.' },
  { tone: 'gold', kicker: 'Communities', title: 'Puzzle clubs and community hosts', body: 'Discord servers, subreddits and group chats of adult puzzle fans, posting within each community’s own rules.' },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Why a link, and not a discount code?',
    a: 'Every purchase in OutBrick is an Apple in-app purchase: Apple takes the payment and later pays OutBrick its proceeds, so there is no checkout of ours where a code could be typed. Your link carries an App Store campaign tag instead, and App Store Connect’s App Analytics tells us which downloads, and which purchases after them, came through it.',
  },
  {
    q: 'How do you know which purchases came from me?',
    a: 'From Apple. App Analytics reports downloads and proceeds per campaign, and your campaign is named after your code (aff-yourcode). It only counts people who agreed to share analytics with app developers, and it reports totals, not individuals — we never learn who your viewers are, and neither do you.',
  },
  {
    q: 'Why could my numbers look lower than my clicks?',
    a: 'Because Apple only attributes people who share analytics with developers, and only when the download follows your link. Someone who taps your link and installs days later from a search, or on another device, may not be attributed. We pay on what Apple reports — we do not estimate or extrapolate, in either direction.',
  },
  {
    q: 'When and how am I paid?',
    a: `Monthly. Once Apple has paid OutBrick for a month’s sales, we pay your ${pct}% of the net proceeds attributed to you in that month. Balances under ${minimumPayout} roll over to the next month. We agree the payment method with you when you are approved, and you are responsible for any tax due on what you earn.`,
  },
  {
    q: 'What counts, and for how long?',
    a: `All in-app purchases App Analytics attributes to your campaign — the Brick Pass, Remove Ads and coin bundles — for ${months} months from each referred download, and only as far as App Analytics attributes them. Refunded purchases are taken back out. Downloads themselves earn nothing, because OutBrick is free.`,
  },
  {
    q: 'Do I need a big following?',
    a: 'No. We look at fit more than size: an audience that enjoys puzzles, and posts that show the game as it is. Small, engaged channels are welcome.',
  },
  {
    q: 'Can I run ads to my link?',
    a: 'You may promote your own posts on your own channels. You may not bid on “OutBrick” or close variants in Apple Search Ads, or buy installs in any form.',
  },
  {
    q: 'Do I have to say it is an affiliate link?',
    a: 'Yes, every time, clearly and up front: #ad or “affiliate link” in the caption or on screen, or the platform’s own paid-partnership label. It is the law in many places — the FTC’s rules in the US, the ASA and CAP Code in the UK — and it is a rule of this programme everywhere.',
  },
];

export default function AffiliatesPage() {
  const pageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/affiliates#page`,
    url: `${siteUrl}/affiliates`,
    name: 'The OutBrick affiliate programme',
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    publisher: { '@type': 'Organization', name: 'OutBrick', url: siteUrl },
  };
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  };
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OutBrick', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Affiliate programme', item: `${siteUrl}/affiliates` },
    ],
  };

  return (
    <EditorialPage className="bz">
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <Crumbs items={[{ href: '/', label: 'OutBrick' }, { label: 'Affiliate programme' }]} />
          <div className="ed-hero-grid">
            <div>
              <p className="ed-label">Affiliate programme</p>
              <h1 className="ed-display">Share the puzzle. <em>Earn from what follows.</em></h1>
              <p className="ed-lede">
                Creators and writers who love a good puzzle get a personal link to OutBrick on the App
                Store, and {pct}% of our net proceeds from the in-app purchases Apple attributes to it,
                for {months} months. Plain rules, Apple’s numbers, no tricks.
              </p>
              <div className="ed-actions">
                <a className="ed-btn" href="#apply">Apply now</a>
                <a className="ed-link" href="#how">How it works</a>
              </div>
            </div>
            <div className="bz-codeart" aria-hidden="true">
              <img className="bz-codeart-friend" src="/assets/friends/peach.webp" alt="" width={360} height={360} />
              <div className="bz-codeslab ed-slab lit" data-tone="gold">
                <Studs count={4} />
                <span className="bz-codeslab-label">Your code</span>
                <span className="bz-codeslab-code">YOURCODE27</span>
                <span className="bz-codeslab-link">outbrick.site/r/yourcode27</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Bond />

      <section id="how" className="ed-band-paper ed-band bz-anchor" aria-labelledby="how-title">
        <div className="ed-wrap">
          <p className="ed-label">How it works</p>
          <h2 id="how-title" className="ed-h2" style={{ marginTop: 14 }}>Three steps, and Apple keeps the score.</h2>
          <ol className="ed-steps" data-tone="purple">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ed-band-cream ed-band" aria-labelledby="earn-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">What you earn</p>
            <h2 id="earn-title" className="ed-h2">{pct}% of our net, for {months} months.</h2>
            <dl className="ed-ledger" style={{ marginTop: 28 }}>
              <div><dt>Commission</dt><dd>{pct}% of OutBrick’s net proceeds — what Apple pays us after its commission and any taxes it collects, less refunds.</dd></div>
              <div><dt>What counts</dt><dd>In-app purchases that App Store Connect’s App Analytics attributes to your campaign: the Brick Pass, Remove Ads and coin bundles.</dd></div>
              <div><dt>How long</dt><dd>{months} months from each referred download, as far as App Analytics attributes the purchases.</dd></div>
              <div><dt>Payouts</dt><dd>Monthly, once Apple has paid us for the month. Balances under {minimumPayout} roll over.</dd></div>
            </dl>
          </div>
          <figure className="bz-receipt" aria-labelledby="example-title">
            <span className="bz-receipt-tag">Example</span>
            <h3 id="example-title" className="bz-receipt-title">A hypothetical month</h3>
            <p className="bz-receipt-note">These numbers are made up to show the arithmetic. They are not a forecast, and not OutBrick’s prices.</p>
            <dl>
              {example.map(([label, amount]) => (
                <div key={label}><dt>{label}</dt><dd>{amount}</dd></div>
              ))}
              <div className="total"><dt>You earn {pct}%</dt><dd>$72.00</dd></div>
            </dl>
            <figcaption>
              Apple’s commission is 15% or 30% depending on the developer’s programme, and in many
              countries sales tax or VAT comes out first. Your statement uses the real figures Apple reports.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ed-band-paper ed-band" aria-labelledby="limits-title">
        <div className="ed-wrap ed-split">
          <div>
            <p className="ed-label">Said plainly</p>
            <h2 id="limits-title" className="ed-h2">What Apple can and can’t count.</h2>
          </div>
          <div className="ed-prose">
            <p>
              There is no analytics SDK in OutBrick, and this programme adds nothing to the app. Attribution
              comes entirely from App Store Connect’s App Analytics, so its limits are ours too:
            </p>
            <ul className="bz-list">
              <li>Apple only counts people who have agreed to share analytics with app developers. Many people have not, and their purchases cannot be attributed to anyone.</li>
              <li>A download is attributed when it follows a tap on your link. Someone who installs later from a search, or on another device, may not be.</li>
              <li>App Analytics reports totals per campaign, and Apple’s own figures can take a few days to settle. We pay on what Apple reports, reconciled with what Apple pays us.</li>
              <li>We never see who your viewers are. Nor do you.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ed-band-ink ed-band" aria-labelledby="who-title">
        <div className="ed-wrap">
          <p className="ed-label">Who it’s for</p>
          <h2 id="who-title" className="ed-h2" style={{ marginTop: 14 }}>People whose audience likes a good puzzle.</h2>
          <div className="ed-wall">
            {audiences.map((a) => (
              <article className="ed-brickcard" data-tone={a.tone} key={a.title}>
                <span className="ed-kicker">{a.kicker}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
          <p className="ed-meta" style={{ marginTop: 32, maxWidth: '64ch' }}>
            OutBrick is rated 4+, but this programme is for adults promoting to adults: promotion must not be
            directed at children under 13.
          </p>
        </div>
      </section>

      <section className="ed-band-paper ed-band" aria-labelledby="rules-title">
        <div className="ed-wrap">
          <p className="ed-label">The rules</p>
          <h2 id="rules-title" className="ed-h2" style={{ marginTop: 14 }}>Fair to players, fair to you.</h2>
          <div className="ed-words">
            <div data-tone="green">
              <h3 className="ed-h3">Always</h3>
              <ul>
                <li>Disclose every post, up front: #ad, “affiliate link”, or the platform’s paid-partnership label (FTC in the US, ASA and CAP Code in the UK)</li>
                <li>Use your own link, outbrick.site/r/your-code, exactly as we give it</li>
                <li>Show real gameplay you recorded yourself</li>
                <li>Describe the game as it is — the <a href="/press-kit">press kit</a> has the right words</li>
              </ul>
            </div>
            <div data-tone="red">
              <h3 className="ed-h3">Never</h3>
              <ul>
                <li>Pay, reward or incentivise anyone to install — no prizes, giveaways for downloads, or reward apps</li>
                <li>Fake clicks, installs or purchases: no bots, click farms or misleading redirects</li>
                <li>Bid on “OutBrick” or close variants in Apple Search Ads</li>
                <li>Aim promotion at children under 13</li>
                <li>Say “no ads”, “no lives” or that there is a timer; make money or health claims; or pose as OutBrick</li>
              </ul>
            </div>
          </div>
          <p className="ed-meta bz-fine">
            Approval is at OutBrick’s discretion. We may pause or end an affiliate’s participation, and withhold
            commission linked to a breach of these rules. If the terms change, we tell approved affiliates by
            email before the change applies.
          </p>
        </div>
      </section>

      <section className="ed-band-ink ed-band-tight" aria-labelledby="kit-title">
        <div className="ed-wrap bz-teaser">
          <img src="/assets/stickers/beat-the-target-160.webp" srcSet="/assets/stickers/beat-the-target-160.webp 1x, /assets/stickers/beat-the-target-320.webp 2x" alt="" width={120} height={120} />
          <div>
            <h2 id="kit-title" className="ed-h3">Not sure what to post?</h2>
            <p>The creators kit has ideas that work, the brand dos and don’ts, hashtags and the art.</p>
          </div>
          <a className="ed-btn ghost" href="/creators">Open the creators kit</a>
        </div>
      </section>

      <section className="ed-band-paper ed-band" aria-labelledby="faq-title">
        <div className="ed-wrap bz-narrow">
          <div className="ed-faq" style={{ marginTop: 0 }} data-tone="purple">
            <p className="ed-label">Questions</p>
            <h2 id="faq-title">Affiliate FAQ</h2>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="ed-band-cream ed-band bz-anchor" aria-labelledby="apply-title">
        <div className="ed-wrap bz-formgrid">
          <div>
            <p className="ed-label">Apply</p>
            <h2 id="apply-title" className="ed-h2" style={{ marginTop: 14 }}>Tell us about your channels.</h2>
            <p className="ed-lede" style={{ marginTop: 18 }}>
              It takes about three minutes. We read every application, and reply by email either way.
            </p>
            <p className="ed-meta" style={{ marginTop: 18 }}>
              Questions first? <a className="ed-link" href="/contact?topic=affiliate">Ask us</a>
            </p>
          </div>
          <div className="bz-formslab">
            <AffiliateForm />
          </div>
        </div>
      </section>

      <JsonLd data={pageData} />
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
    </EditorialPage>
  );
}
