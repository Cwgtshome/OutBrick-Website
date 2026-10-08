import { currentGameCopy } from '../../lib/i18n/current-game';
import { localePath, type Locale } from '../../lib/i18n/locales';
import { chromeCopy } from '../../lib/i18n/chrome';

/** Reuses the site's existing bands, typography and ledger; no separate visual system. */
export function CurrentGameFeatures({ locale = 'en' }: { locale?: Locale }) {
  const t = currentGameCopy[locale];
  return (
    <div className="ob-site"><section className="band-cream" aria-labelledby="current-game-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.label}</p>
          <h2 id="current-game-title">{t.title}</h2>
          <p className="lede">{t.summary}</p>
        </div>
        <ul className="ledger">
          {[t.match, t.specials, t.goals, t.voiceover, t.apple, t.community].map(text => (
            <li key={text}><span className="mark" style={{ background: 'var(--purple)' }} aria-hidden="true">◆</span><div><p>{text}</p></div></li>
          ))}
        </ul>
        <p><a href={localePath(locale, '/community')}>{chromeCopy[locale].footer.community}</a></p>
        <h3>{t.releaseTitle}</h3>
        <p>{t.release}</p>
      </div>
    </section></div>
  );
}
