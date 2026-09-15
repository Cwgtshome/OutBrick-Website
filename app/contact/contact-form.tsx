'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail, ShieldCheck } from 'lucide-react';

const CONTACT_EMAIL = 'mourad.hamdi@me.com';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get('name') ?? '').trim();
    const email = String(values.get('email') ?? '').trim();
    const topic = String(values.get('topic') ?? 'General support');
    const message = String(values.get('message') ?? '').trim();
    const subject = `OutBrick support: ${topic}`;
    const body = [`Name: ${name}`, `Reply email: ${email}`, `Topic: ${topic}`, '', message].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Bloo" required />
        </label>
        <label>
          <span>Reply email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label>
        <span>What can we help with?</span>
        <select name="topic" defaultValue="General support">
          <option>General support</option>
          <option>Accessibility</option>
          <option>Privacy</option>
          <option>Purchase or refund</option>
          <option>Bug report</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={7} placeholder="Tell us what happened, including the level and device if useful." required />
      </label>
      <div className="contact-form-actions">
        <button className="gloss-button gloss-green" type="submit">
          <span className="gloss-button-inner">Open mail app <ArrowUpRight size={18} /></span>
        </button>
        <span className="contact-form-note"><Mail size={15} /> This opens a ready-to-send email to {CONTACT_EMAIL}.</span>
      </div>
      {submitted && <p className="contact-form-status" role="status"><Check size={16} /> If your mail app opened, review the draft and send it there. If it did not open, email mourad.hamdi@me.com directly.</p>}
      <p className="contact-form-privacy"><ShieldCheck size={15} /> Please do not include passwords, payment card details, or other sensitive information.</p>
    </form>
  );
}
