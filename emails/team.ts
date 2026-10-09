// The team's own copy of every form submission, sent to support@outbrick.site (newsletter
// sign-ups to news@outbrick.site) in the same
// design as the visitor's acknowledgement. It replaces Netlify's plain notification: the
// visitor's message first, every field they filled in, where they came from, whether their
// acknowledgement went out, and a reply button. Reply-To is the visitor, so answering the email
// answers them.
//
// Always English (it is for the team), whatever language the visitor wrote in. Every visitor
// value is escaped here; the text/plain part gets the raw value.

import { contactTopics } from '../lib/business.ts';
import { SITE, button, color, esc, escLines, eyebrow, field, fonts, footerBlock, heading, link, panel, para, rule, shell, textBlock, toText, type Ctx } from './core.ts';
import type { EmailLocale } from './i18n.ts';
import { brandFooterText } from './brand.ts';
import type { Rendered } from './templates.ts';

export type TeamForm = 'contact' | 'careers' | 'affiliate' | 'newsletter';

export type TeamInput = {
  form: TeamForm;
  /** Every field the visitor submitted (Netlify's `data`). */
  data: Record<string, unknown>;
  /** The language the visitor's page was in (and their acknowledgement went out in). */
  locale: EmailLocale;
  submissionId: string;
  createdAt?: string;
  /** What happened to the visitor's own email: "sent", or why not. */
  acknowledgement: string;
  /** Where the team answers it: the support case or application in /community/admin. */
  dashboard?: { url: string; ref?: string };
  assetBase?: string;
};

const languageNames: Record<EmailLocale, string> = { en: 'English', fr: 'French', de: 'German', es: 'Spanish', ja: 'Japanese', 'pt-BR': 'Portuguese (Brazil)' };

/** The form's colour in the brick course, and what it is called in the inbox. */
const forms: Record<TeamForm, { label: string; accent: string }> = {
  contact: { label: 'Contact', accent: '#3b8bf0' },
  careers: { label: 'Careers', accent: '#26b9b0' },
  affiliate: { label: 'Affiliate', accent: '#7b5cf0' },
  newsletter: { label: 'Newsletter', accent: '#b8780a' },
};

/** Field order and labels per form. Anything else the visitor sent follows, under its own name. */
const fieldLabels: Record<TeamForm, [string, string][]> = {
  contact: [['name', 'Name'], ['email', 'Email'], ['topic', 'Topic'], ['device', 'Device'], ['ios-version', 'iOS version'], ['app-version', 'OutBrick version'], ['level', 'Level'], ['purchase-item', 'Purchase'], ['purchase-date', 'Purchased on'], ['assistive', 'Assistive technology'], ['tried', 'Troubleshooter: problem tried'], ['guide', 'From guide'], ['source', 'Opened from']],
  careers: [['name', 'Name'], ['email', 'Email'], ['role', 'Role'], ['location', 'Location'], ['portfolio', 'Portfolio']],
  affiliate: [['name', 'Name'], ['email', 'Email'], ['handle', 'Handle'], ['channels', 'Channels'], ['audience', 'Audience'], ['country', 'Country'], ['plan', 'Plan'], ['code', 'Requested code']],
  newsletter: [['email', 'Email'], ['name', 'Name'], ['language', 'Language'], ['consent', 'Consent']],
};

/** The long free-text field each form leads with. */
const messageField: Partial<Record<TeamForm, [string, string]>> = {
  contact: ['message', 'Message'],
  careers: ['cover-note', 'Cover note'],
};

/** Never shown: Netlify's plumbing, the honeypot, and the visitor's IP address. */
const hidden = new Set(['bot-field', 'form-name', 'locale', 'referrer', 'user_agent', 'ip', 'message', 'cover-note']);

const str = (v: unknown, max = 5000) => toText(Array.isArray(v) ? v.join(', ') : v).slice(0, max).trim();
const oneLine = (v: string, max: number) => {
  const s = v.replace(/\s+/g, ' ').trim();
  return s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s;
};

function topicName(value: string): string {
  return contactTopics.find((t) => t.value === value)?.label ?? value;
}

function shownValue(key: string, value: string): string {
  if (key === 'topic') return topicName(value);
  if (key === 'language' && value in languageNames) return languageNames[value as EmailLocale];
  if (key === 'consent') return value === 'yes' ? 'Yes, ticked' : value;
  return value;
}

/** The visitor's values, in the form's order, then anything unexpected. */
export function teamFields(form: TeamForm, data: Record<string, unknown>): { key: string; label: string; value: string }[] {
  const known = fieldLabels[form];
  const out = known.map(([key, label]) => ({ key, label, value: shownValue(key, str(data[key], 500)) })).filter((f) => f.value);
  for (const [key, raw] of Object.entries(data)) {
    if (hidden.has(key) || known.some(([k]) => k === key)) continue;
    const value = str(raw, 500);
    if (value) out.push({ key, label: key.replace(/[-_]+/g, ' ').replace(/^./, (c) => c.toUpperCase()), value });
  }
  return out;
}

function fieldValueHtml(key: string, value: string): string {
  if (key === 'email') return link(`mailto:${value}`, esc(value));
  if (/^https:\/\/[^\s"'<>]+$/i.test(value)) return link(value, esc(value));
  return escLines(value);
}

function headline(form: TeamForm, data: Record<string, unknown>): string {
  const name = oneLine(str(data.name, 120), 60);
  const who = name || oneLine(str(data.email, 200), 80) || 'Someone';
  switch (form) {
    case 'contact':
      return `New message from ${who}`;
    case 'careers':
      return `${who} applied${str(data.role, 160) ? ` for ${oneLine(str(data.role, 160), 70)}` : ''}`;
    case 'affiliate':
      return `${who} wants to join the affiliate programme`;
    case 'newsletter':
      return `${who} signed up for OutBrick News`;
  }
}

export function teamSubject(form: TeamForm, data: Record<string, unknown>): string {
  const name = oneLine(str(data.name, 120), 50) || oneLine(str(data.email, 200), 60) || 'Someone';
  const tag = form === 'contact' && str(data.topic, 40) ? `${forms.contact.label} · ${topicName(str(data.topic, 40))}` : forms[form].label;
  const lead = messageField[form] ? oneLine(str(data[messageField[form]![0]], 400), 70) : '';
  const tail = form === 'careers' ? oneLine(str(data.role, 160), 60) : form === 'newsletter' ? 'awaiting confirmation' : lead;
  return `[${tag}] ${name}${tail ? `: ${tail}` : ''}`;
}

function when(createdAt?: string): string {
  const d = createdAt ? new Date(createdAt) : new Date();
  if (Number.isNaN(d.getTime())) return '';
  return `${d.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
}

function pagePath(referrer: string): string {
  try {
    const u = new URL(referrer, SITE);
    return u.host === new URL(SITE).host || u.host.endsWith('.netlify.app') ? `${u.pathname}${u.search}` : u.href;
  } catch {
    return referrer;
  }
}

export function teamNotification(input: TeamInput): Rendered {
  const ctx: Ctx = { locale: 'en', assetBase: input.assetBase ?? SITE };
  const f = fonts('en');
  const { form, data } = input;
  const meta = forms[form];
  const fields = teamFields(form, data);
  const email = str(data.email, 200);
  const name = oneLine(str(data.name, 120), 60);
  const message = messageField[form] ? str(data[messageField[form]![0]]) : '';
  const referrer = str(data.referrer, 2000);
  const userAgent = str(data.user_agent, 400);
  const subject = input.dashboard?.ref ? `[${input.dashboard.ref}] ${teamSubject(form, data)}` : teamSubject(form, data);
  const title = headline(form, data);
  const ackSent = input.acknowledgement === 'sent';
  const ackLine =
    form === 'newsletter'
      ? ackSent
        ? 'Confirmation email sent. They join the list only when they press its button.'
        : `No confirmation email: ${input.acknowledgement}.`
      : ackSent
        ? `Acknowledgement sent in ${languageNames[input.locale]}.`
        : `No acknowledgement sent: ${input.acknowledgement}.`;
  const replySubject = form === 'contact' ? 'Re: your message to OutBrick' : form === 'careers' ? 'Re: your OutBrick application' : form === 'affiliate' ? 'Re: your OutBrick affiliate application' : 'OutBrick News';
  const replyHref = email && form !== 'newsletter' ? `mailto:${email}?subject=${encodeURIComponent(replySubject)}` : '';

  const chip = (text: string, bg: string, fg: string) =>
    `<span style="display:inline-block;margin:0 6px 8px 0;padding:4px 10px;border-radius:999px;background:${bg};color:${fg};font-family:${f.text};font-size:13px;line-height:1.4;font-weight:800;">${text}</span>`;

  const body = [
    eyebrow(ctx, esc(`New ${meta.label.toLowerCase()} form submission`), meta.accent === '#b8780a' ? color.goldFoot : color.panel),
    heading(ctx, esc(title)),
    `<p style="margin:0 0 14px;">${form === 'contact' && str(data.topic, 40) ? chip(esc(topicName(str(data.topic, 40))), meta.accent, '#ffffff') : ''}${chip(esc(languageNames[input.locale]), color.cream, color.onPaper)}${chip(esc(ackSent ? (form === 'newsletter' ? 'Confirmation sent' : 'Acknowledged') : 'Not acknowledged'), ackSent ? '#dff5e1' : '#fde4e2', ackSent ? '#1f6b2a' : '#9b1c17')}${when(input.createdAt) ? chip(esc(when(input.createdAt)), color.cream, color.onPaper2) : ''}</p>`,
    message ? panel(ctx, eyebrow(ctx, esc(messageField[form]![1]), meta.accent) + para(ctx, escLines(message), { margin: '0 0 14px' }), meta.accent) : '',
    panel(ctx, fields.map((x) => field(ctx, esc(x.label), fieldValueHtml(x.key, x.value))).join(''), color.panel),
    input.dashboard ? button(ctx, input.dashboard.url, esc(input.dashboard.ref ? `Answer ${input.dashboard.ref} in the dashboard` : 'Decide in the dashboard'), 320) : '',
    input.dashboard ? para(ctx, esc('Answering in the dashboard keeps the case history, sends the designed reply and, later, the “did we solve it?” check-in. A plain email reply works too, but isn’t tracked.'), { muted: true, size: 14 }) : '',
    replyHref ? button(ctx, replyHref, esc(`Reply to ${name || email}`), 300) : '',
    para(ctx, esc(ackLine), { muted: true, size: 15 }),
    rule(),
    para(
      ctx,
      [
        referrer ? `<strong>Page:</strong> ${esc(pagePath(referrer))}` : '',
        userAgent ? `<strong>Browser:</strong> ${esc(userAgent)}` : '',
        `<strong>Submission:</strong> ${esc(input.submissionId)}`,
      ]
        .filter(Boolean)
        .join('<br>'),
      { muted: true, size: 14 },
    ),
  ].join('\n');

  const footer = footerBlock(ctx, {
    links: [
      ['Netlify submissions', 'https://app.netlify.com/projects/outbrick/forms'],
      ['Resend emails', 'https://resend.com/emails'],
      ['Support page', `${SITE}/support`],
    ],
    lines: [
      esc(`Sent to the OutBrick team because someone used the ${meta.label.toLowerCase()} form at outbrick.site. Replying answers ${email ? 'the visitor' : 'nobody: they left no address'}.`),
      `OutBrick · <a href="${SITE}/" style="color:${color.title};text-decoration:underline;">www.outbrick.site</a>`,
    ],
  });

  const html = shell({ ctx, title: subject, preheader: message ? oneLine(message, 140) : ackLine, logoAlt: 'OutBrick', body, footer });
  const text = textBlock([
    title,
    `${languageNames[input.locale]} · ${ackSent ? 'acknowledged' : 'not acknowledged'}${when(input.createdAt) ? ` · ${when(input.createdAt)}` : ''}`,
    '',
    message && `${messageField[form]![1]}:`,
    message,
    message && '',
    ...fields.map((x) => `${x.label}: ${x.value}`),
    '',
    ackLine,
    '',
    referrer && `Page: ${pagePath(referrer)}`,
    userAgent && `Browser: ${userAgent}`,
    `Submission: ${input.submissionId}`,
    '',
    '—',
    'Netlify submissions: https://app.netlify.com/projects/outbrick/forms',
    `Replying answers ${email ? 'the visitor' : 'nobody: they left no address'}.`,
    ...brandFooterText(ctx.locale),
  ]);
  return { subject, html, text };
}
