'use client';

import { useEffect, useId, useRef, useState, type SubmitEvent } from 'react';
import '../styles/growth.css';

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
 * on /privacy.
 */

const languages = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
  { value: 'ja', label: '日本語' },
] as const;

export type NewsletterLanguage = (typeof languages)[number]['value'];

export function NewsletterSignup({
  heading = 'Get a letter when there’s a new village',
  headingLevel = 2,
  intro = 'New villages, big updates and the odd note from the bench. About once a month, never more than that.',
  defaultLanguage = 'en',
  showHeading = true,
}: {
  heading?: string;
  headingLevel?: 2 | 3;
  intro?: string;
  defaultLanguage?: NewsletterLanguage;
  /** Off where the surrounding block already says what the form is for. */
  showHeading?: boolean;
}) {
  const id = useId();
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
    } catch {
      // Let the browser post it the old way: /newsletter/thanks still records it.
      setState('idle');
      form.submit();
    }
  }

  if (state === 'done') {
    return (
      <div className="obx-news" data-newsletter-state="done">
        <output className="obx-news-done">
          <span className="obx-news-mark" aria-hidden="true">✓</span>
          <Heading ref={doneRef} tabIndex={-1}>You’re on the list.</Heading>
          <p>
            Thank you. The next letter comes when there’s a new village or a big update, about once a
            month at most. To come off the list, reply to any letter. <a href="/privacy">How we look after your email</a>.
          </p>
        </output>
      </div>
    );
  }

  return (
    <div className="obx-news" data-newsletter-state={state}>
      {showHeading ? <Heading id={headingId}>{heading}</Heading> : null}
      {showHeading && intro ? <p className="obx-news-intro">{intro}</p> : null}
      <form
        name="newsletter"
        method="POST"
        action="/newsletter/thanks"
        data-netlify="true"
        netlify-honeypot="bot-field"
        aria-labelledby={showHeading ? headingId : undefined}
        aria-label={showHeading ? undefined : 'Newsletter sign-up'}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <p hidden>
          <label>
            Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className="obx-news-row">
          <div className="obx-news-field">
            <label htmlFor={`${id}-email`}>Email address</label>
            <input id={`${id}-email`} name="email" type="email" required autoComplete="email" inputMode="email" spellCheck={false} />
          </div>
          <div className="obx-news-field">
            <label htmlFor={`${id}-language`}>Language</label>
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
          <input id={`${id}-consent`} name="consent" type="checkbox" value="yes" required />
          <span>
            <label htmlFor={`${id}-consent`}>Email me about OutBrick updates. Unsubscribe any time.</label>{' '}
            <a href="/privacy">Privacy policy</a>
          </span>
        </div>
        <button className="obx-news-submit" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Signing you up…' : 'Sign me up'}
        </button>
      </form>
    </div>
  );
}
