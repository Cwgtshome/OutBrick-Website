import type { Metadata } from 'next';
import { chromeCopy } from '../../lib/i18n/chrome';
import { localeAlternates, localePath, localeUrl, ogLocales, type Locale } from '../../lib/i18n/locales';
import { playCopy } from '../../lib/i18n/play';
import { AppStoreBadge, Course, editorialNavFor, VillageFooter, VillageHeader } from '../village-shell';
import { GetAppQr } from './get-app-qr';
import { PlayBoard } from './play-board';
import '../styles/play.css';

/**
 * The play guide, in any of its languages: `/play` (app/(en)/play/page.tsx)
 * and `/fr/play`, `/de/play`, `/es/play`, `/ja/play`
 * (app/[locale]/play/page.tsx). It opens on a board you can actually play,
 * because the rule takes five seconds to learn and five paragraphs to
 * describe; the loop around the board — stars, the rope, lives, undos —
 * follows underneath, in the same words the home page's ledger uses, so the
 * two never drift apart. Every word comes from lib/i18n/play.ts.
 */
export function playMetadata(locale: Locale): Metadata {
  const { title, description } = playCopy[locale].meta;
  const url = localeUrl(locale, '/play');
  return {
    title: { absolute: title },
    description,
    alternates: localeAlternates(locale, '/play'),
    openGraph: {
      type: 'website',
      siteName: 'OutBrick',
      url,
      locale: ogLocales[locale],
      title,
      description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'OutBrick mascots and home screen' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  };
}

const loopColours = [
  { colour: '#ffc53d', foot: '#b8780a' },
  { colour: '#26b9b0', foot: '#087e84' },
  { colour: '#3b8bf0', foot: '#1d4fa6' },
  { colour: '#e2352f', foot: '#8e1c18' },
  { colour: '#7b5cf0', foot: '#4a35b0' },
];

export function PlayGuide({ locale }: { locale: Locale }) {
  const t = playCopy[locale];
  const chrome = chromeCopy[locale];
  return (
    <div className="ob-site">
      <a className="skip" href="#main">{chrome.skip}</a>
      <VillageHeader links={editorialNavFor(locale)} home={localePath(locale, '/')} label={chrome.primaryNav} locale={locale} />

      <main id="main">
        <section className="band-ink play-hero">
          <div className="wrap play-hero-grid">
            <div>
              <Course />
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.title[0]}<span className="gold">{t.title[1]}</span></h1>
              <p className="lede">
                {t.lede}
              </p>
              <ul className="play-keys">
                {t.keys.map(([bold, rest]) => (
                  <li key={bold}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
              <p className="play-daily">
                {t.daily[0]}
                <a className="daily-link" href="/daily" hrefLang={locale === 'en' ? undefined : 'en'}>{t.daily[1]}</a>
              </p>
            </div>
            <div className="play-board-wrap">
              <PlayBoard label={t.boardLabel} locale={locale} />
            </div>
          </div>
        </section>

        <section className="band-cream">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">{t.loop.eyebrow}</p>
              <h2>{t.loop.title}</h2>
              <p className="lede">
                {t.loop.lede}
              </p>
            </div>
            <ul className="ledger">
              {t.loop.rows.map((row, index) => (
                <li key={row.title}>
                  <span className="mark" style={{ background: loopColours[index].colour, boxShadow: `0 4px 0 ${loopColours[index].foot}` }} aria-hidden="true" />
                  <div>
                    <b>{row.title}</b>
                    <p>{row.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band-ink">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">{t.meet.eyebrow}</p>
              <h2>{t.meet.title}</h2>
              <p className="lede">
                {t.meet.lede}
              </p>
            </div>
            <dl className="play-nouns">
              {t.meet.nouns.map(([term, text]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="band-panel tight">
          <div className="wrap centred-block">
            <h2>{t.close.title}</h2>
            <p className="lede">
              {t.close.lede}
            </p>
            <div className="cta-row centred"><AppStoreBadge locale={locale} /></div>
            <GetAppQr locale={locale} centred />
          </div>
        </section>
      </main>

      <VillageFooter locale={locale} page="/play" />
    </div>
  );
}
