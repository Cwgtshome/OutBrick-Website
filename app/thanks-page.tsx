import type { Metadata } from 'next';
import { localePath, type Locale } from '../lib/i18n/locales';
import type { ReactNode } from 'react';
import { pageMetadata } from '../lib/site';
import { Course, docNav, VillageFooter, VillageHeader } from './village-shell';

/**
 * Where a form lands when it is posted without script: Netlify stores the submission, then
 * serves the form's `action` page. With script the form never leaves its page, so these are
 * seen rarely — but they are the no-script half of every form, so they must exist.
 * Not indexed: a thank-you page is not something to find in search.
 */
export function thanksMetadata(path: string, title: string, description: string): Metadata {
  return { ...pageMetadata({ path, title, description }), robots: { index: false, follow: true } };
}

export function ThanksPage({
  eyebrow,
  title,
  children,
  back,
  locale = 'en',
  page,
}: {
  locale?: Locale;
  page?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  back: { href: string; label: string };
}) {
  const ui = { en: ['Skip to content', 'Help and legal', 'Back to OutBrick'], fr: ['Aller au contenu', 'Aide et informations juridiques', 'Retour à OutBrick'], de: ['Zum Inhalt springen', 'Hilfe und Rechtliches', 'Zurück zu OutBrick'], es: ['Ir al contenido', 'Ayuda e información legal', 'Volver a OutBrick'], ja: ['本文へ移動', 'ヘルプと法的情報', 'OutBrickに戻る'], 'pt-BR': ['Pular para o conteúdo', 'Ajuda e informações legais', 'Voltar ao OutBrick'] }[locale];
  return (
    <div className="ob-site">
      <a className="skip" href="#main">{ui[0]}</a>
      <VillageHeader links={docNav} label={ui[1]} locale={locale} />
      <main id="main">
        <div className="doc-head thanks-head">
          <div className="wrap">
            <Course />
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <div className="thanks-body">{children}</div>
            <p className="thanks-actions">
              <a className="btn" href={back.href}>{back.label}</a>
              <a className="thanks-home" href={localePath(locale, '/')}>{ui[2]}</a>
            </p>
          </div>
          <div className="road" aria-hidden="true" />
        </div>
      </main>
      <VillageFooter locale={locale} page={page} />
    </div>
  );
}
