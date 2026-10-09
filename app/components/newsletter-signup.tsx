'use client';

import { useLocale } from './locale-context';
import { formWords } from '../../lib/i18n/forms';
import { validateForm, useHydrated } from './netlify-form';
import { NEWSLETTER_CONSENT_VERSION, newsletterWords } from '../../lib/i18n/newsletter';
import { localePath } from '../../lib/i18n/locales';
import { useEffect, useId, useRef, useState, type SubmitEvent } from 'react';
import '../styles/growth.css';
import { track } from '../../lib/track';

/**
 * The newsletter sign-up: new villages and big updates, about once a month.
 *
 * A Netlify Form. The prerendered HTML carries the whole form — `name`,
 * `data-netlify`, the hidden `form-name` and the honeypot — which is what
 * Netlify's deploy-time scan looks for, so submissions are stored with the
 * site's other form entries and nothing third-party is loaded.
 *
 * Without script it is a plain POST to /newsletter/thanks, which Netlify
 * records and then answers with that page. With script, the same fields go
 * to "/" as an url-encoded POST and the form swaps for an inline thank-you;
 * if that request fails, the form falls back to the plain POST.
 *
 * What is collected (email, chosen language, the consent tick) is described
 * on /privacy. The confirmation also records, as proof of consent, the page
 * the form was on and NEWSLETTER_CONSENT_VERSION (the hidden field below).
 */

const languages = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
  { value: 'ja', label: '日本語' },
  { value: 'pt-BR', label: 'Português (Brasil)' },
] as const;

export type NewsletterLanguage = (typeof languages)[number]['value'];

export function NewsletterSignup({
  heading = 'Get a letter when there’s a new village',
  headingLevel = 2,
  intro = 'New villages, big updates and the odd note from the bench. About once a month, never more than that.',
  defaultLanguage,
  showHeading = true,
}: {
  heading?: string;
  headingLevel?: 2 | 3;
  intro?: string;
  defaultLanguage?: NewsletterLanguage;
  /** Off where the surrounding block already says what the form is for. */
  showHeading?: boolean;
}) {
  const locale = useLocale();
  const t = newsletterWords[locale];
  defaultLanguage ??= locale;
  const id = useId();
  const ready = useHydrated();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [summary, setSummary] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const doneRef = useRef<HTMLHeadingElement>(null);
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const headingId = `${id}-title`;

  // Once the thank-you replaces the form, move focus to it so a screen reader announces it
  // and a keyboard user is not left on a button that no longer exists.
  useEffect(() => {
    if (state === 'done') doneRef.current?.focus();
  }, [state]);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const validation = validateForm(form, locale);
    setErrors(validation.errors);
    const count = Object.keys(validation.errors).length;
    if (count) { setSummary(formWords[locale].summary(count)); validation.first?.focus(); return; }
    setSummary('');
    const body = new URLSearchParams();
    for (const [key, value] of new FormData(form)) if (typeof value === 'string') body.append(key, value);
    setState('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setState('done');
      track('newsletter_signup', { form_name: 'newsletter' });
      // GA4's recommended lead event; the page path only, never the address.
      track('generate_lead', { method: 'newsletter', source: window.location.pathname });
    } catch {
      // Let the browser post it the old way: /newsletter/thanks still records it.
      setState('idle');
      setSummary(formWords[locale].failed);
    }
  }

  if (state === 'done') {
    return (
      <div className="obx-news" data-newsletter-state="done">
        <output className="obx-news-done">
          <span className="obx-news-mark" aria-hidden="true">✓</span>
          <Heading ref={doneRef} tabIndex={-1}>{t.done}</Heading>
          <p>
            {t.thanks}{' '}<a href={localePath(locale, '/privacy')}>{t.privacyNote}</a>.
          </p>
        </output>
      </div>
    );
  }

  return (
    <div className="obx-news" data-newsletter-state={state}>
      {showHeading ? <Heading id={headingId}>{locale === 'en' ? heading : t.heading}</Heading> : null}
      {showHeading && intro ? <p className="obx-news-intro">{locale === 'en' ? intro : t.intro}</p> : null}
      <form
        name="newsletter"
        method="POST"
        action={localePath(locale, '/newsletter/thanks')}
        data-netlify="true"
        netlify-honeypot="bot-field"
        aria-labelledby={showHeading ? headingId : undefined}
        aria-label={showHeading ? undefined : t.label}
        onSubmit={handleSubmit}
        noValidate={ready}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <input type="hidden" name="consent-version" value={NEWSLETTER_CONSENT_VERSION} />
        <p hidden>
          <label>
            {t.empty} <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className="obx-news-row">
          <div className="obx-news-field">
            <label htmlFor={`${id}-email`}>{t.email}</label>
            <input id={`${id}-email`} name="email" type="email" required autoComplete="email" inputMode="email" spellCheck={false} data-label={t.email} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-error` : undefined} />
            {errors.email ? <p id={`${id}-email-error`} className="obf-error">{errors.email}</p> : null}
          </div>
          <div className="obx-news-field">
            <label htmlFor={`${id}-language`}>{t.language}</label>
            <select id={`${id}-language`} name="language" defaultValue={defaultLanguage}>
              {languages.map((language) => (
                <option key={language.value} value={language.value} lang={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="obx-news-consent">
          <input id={`${id}-consent`} name="consent" type="checkbox" value="yes" required data-missing={formWords[locale].checkbox} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? `${id}-consent-error` : undefined} />
          <span>
            <label htmlFor={`${id}-consent`}>{t.consent}</label>{' '}
            <a href={localePath(locale, '/privacy')}>{t.privacy}</a>
          </span>
        </div>
        {errors.consent ? <p id={`${id}-consent-error`} className="obf-error">{errors.consent}</p> : null}
        <p className="obf-alert" role="alert">{summary}</p>
        <button className="obx-news-submit" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? t.sending : t.submit}
        </button>
      </form>
    </div>
  );
}
