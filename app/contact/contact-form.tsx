'use client';

import { useState, type FormEvent } from 'react';

const CONTACT_EMAIL = 'mourad.hamdi@me.com';

/**
 * The contact form prepares an email in the visitor's own mail app; it never
 * sends anything itself, and nothing is posted anywhere. That is also what the
 * privacy policy says happens, so the two have to stay in step.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const read = (key: string) => String(values.get(key) ?? '').trim();
    const topic = read('topic') || 'General support';
    const body = [`Name: ${read('name')}`, `Reply email: ${read('email')}`, `Topic: ${topic}`, '', read('message'), ''].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`OutBrick — ${topic}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-email">Reply email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-topic">What can we help with?</label>
        <select id="cf-topic" name="topic" defaultValue="General support">
          <option>General support</option>
          <option>Accessibility</option>
          <option>Privacy</option>
          <option>Purchase or refund</option>
          <option>Bug report</option>
        </select>
      </div>
      <div>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows={7} />
      </div>
      <div>
        <button className="btn" type="submit">Open mail app</button>
      </div>
      {submitted && (
        <p className="form-status" role="status">
          If your mail app opened, review the draft and send it there. If it did not open, email{' '}
          {CONTACT_EMAIL} directly.
        </p>
      )}
    </form>
  );
}
