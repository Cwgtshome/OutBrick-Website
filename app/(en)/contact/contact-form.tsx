'use client';
import { useLocale } from '../../components/locale-context';
import { clientTree, clientText } from '../../../lib/i18n/client-tree';

import { useEffect, useMemo, useRef, useState } from 'react';
import { contactTopics, deviceTopics } from '../../../lib/business';
import { assistiveOptions } from '../../../lib/support/model';
import type { Suggestion } from '../../../lib/support/content';
import { ConsentField, NetlifyForm, SelectField, SubmitRow, TextArea, TextField, useSearchParam } from '../../components/netlify-form';

/**
 * The contact form. It posts to the site's form endpoint (cloudflare/forms.ts): the details you
 * type reach the OutBrick inbox and become a support case (netlify/lifecycle/cases.ts), and the
 * privacy policy's "Forms on this website" section says exactly that — the two have to stay in step.
 *
 * `?topic=<value>` preselects a topic, so /press can link to /contact?topic=press. The game and
 * the Support Centre can also fill in `device`, `os`, `app`, `level`, `assistive`, `tried` (a
 * troubleshooter problem already tried), `guide` and `source`. The topic-specific fields are
 * always in the prerendered HTML; with script they show only for the topics they belong to.
 *
 * While a player describes the problem, matching known issues, step-by-step fixes and guides are
 * suggested (from `suggestions`, built by app/support-centre.tsx), and the message is kept as a
 * draft on this device until it is sent.
 */

const DRAFT_KEY = 'ob-contact-draft';
const accessibilityTopics = ['accessibility'];
const levelTopics = ['support', 'bug', 'accessibility'];
const purchaseTopics = ['purchases'];

function readDraft(): string {
  try {
    return window.localStorage.getItem(DRAFT_KEY) ?? '';
  } catch {
    return '';
  }
}
function writeDraft(value: string) {
  try {
    if (value.trim()) window.localStorage.setItem(DRAFT_KEY, value.slice(0, 5000));
    else window.localStorage.removeItem(DRAFT_KEY);
  } catch {
    /* Private browsing or blocked storage: the draft simply is not kept. */
  }
}

/** Words to match on: whole words in spaced scripts, and character pairs in Japanese. */
function terms(text: string): string[] {
  const lower = text.toLowerCase();
  const words = lower.split(/[^\p{L}\p{N}]+/u).filter((w) => w.length >= 4);
  const cjk = Array.from(lower.matchAll(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]{2,}/gu)).flatMap((m) => {
    const s = m[0];
    const pairs: string[] = [];
    for (let i = 0; i < s.length - 1; i++) pairs.push(s.slice(i, i + 2));
    return pairs;
  });
  return Array.from(new Set([...words, ...cjk]));
}

function suggest(index: Suggestion[], text: string): Suggestion[] {
  const t = terms(text);
  if (t.length < 2) return [];
  const scored = index
    .map((s) => {
      let score = 0;
      for (const w of t) if (s.words.includes(w)) score += w.length >= 6 ? 2 : 1;
      // Known issues first when they match at all: they answer "is it just me?".
      if (score && s.kind === 'issue') score += 2;
      return { s, score };
    })
    .filter((x) => x.score >= 3)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, 3).map((x) => x.s);
}

const kindLabel = { issue: 'Known issue', fix: 'Step-by-step fix', guide: 'Guide' } as const;

export function ContactForm({ suggestions = [], trackHref = '/support/request' }: { locale?: string; suggestions?: Suggestion[]; trackHref?: string }) {
  const locale = useLocale();
  const wanted = useSearchParam('topic');
  const [chosen, setChosen] = useState<string | null>(null);
  const topic = chosen ?? (wanted && contactTopics.some((t) => t.value === wanted) ? wanted : 'support');

  const device = useSearchParam('device') ?? undefined;
  const os = useSearchParam('os') ?? undefined;
  const app = useSearchParam('app') ?? undefined;
  const level = useSearchParam('level') ?? undefined;
  const assistive = useSearchParam('assistive') ?? undefined;
  const tried = useSearchParam('tried') ?? '';
  const guide = useSearchParam('guide') ?? '';
  const source = useSearchParam('source') ?? '';

  const [matches, setMatches] = useState<Suggestion[]>([]);
  const restored = useRef(false);
  const timer = useRef<number | undefined>(undefined);

  // Bring back an unsent draft, once, straight into the field.
  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    const draft = readDraft();
    const box = document.querySelector<HTMLTextAreaElement>('form[name="contact"] textarea[name="message"]');
    if (draft && box && !box.value) box.value = draft;
  }, []);

  // Keep the draft and suggest help a moment after the typing stops.
  const typed = (value: string) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      writeDraft(value);
      setMatches(suggest(suggestions, value));
    }, 350);
  };

  const triedTitle = useMemo(() => (tried ? suggestions.find((s) => s.kind === 'fix' && s.href.endsWith(`problem=${tried}`))?.title ?? '' : ''), [tried, suggestions]);

  const showDevice = deviceTopics.includes(topic) || accessibilityTopics.includes(topic);
  const showLevel = levelTopics.includes(topic);
  const showPurchase = purchaseTopics.includes(topic);
  const showAssistive = accessibilityTopics.includes(topic);
  const topicLabel = (value: string | null) => clientText(contactTopics.find((t) => t.value === value)?.label ?? 'your message', locale);

  return clientTree((
    <NetlifyForm
      name="contact"
      action="/contact/thanks"
      label="Contact OutBrick"
      onSent={() => writeDraft('')}
      success={(values, reply) => (
        <>
          <h3>Message sent. Thank you.</h3>
          <p>
            Your note about <b>{topicLabel(values.get('topic'))}</b> is with the team. A person reads every
            message and replies to <b translate="no">{values.get('email')}</b>.
          </p>
          {typeof reply.ref === 'string' ? (
            <p className="ss-ref-line">
              Your reference: <b translate="no">{reply.ref}</b>
            </p>
          ) : null}
          <p>We have emailed you a private link to follow your request, read our replies and add details.</p>
          <p>If you need to add something, such as a screenshot, reply to our email when it arrives.</p>
          <p><a className="btn ghost" href={trackHref}>Track your request</a></p>
        </>
      )}
    >
      {({ errors, status }) => (
        <>
          <SelectField
            name="topic"
            label="What is it about?"
            spoken="a topic"
            options={contactTopics}
            value={topic}
            onValueChange={setChosen}
            error={errors.topic}
          />
          {tried ? (
            <p className="ss-tried">
              You already tried the step-by-step fix for: <b>{triedTitle || tried}</b>
            </p>
          ) : null}
          <input type="hidden" name="tried" value={tried} />
          <input type="hidden" name="guide" value={guide} />
          <input type="hidden" name="source" value={source} />
          <div className="obf-row">
            <TextField name="name" label="Your name" spoken="your name" autoComplete="name" error={errors.name} maxLength={120} />
            <TextField
              name="email"
              label="Email for our reply"
              spoken="your email address"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              autoCapitalize="off"
              error={errors.email}
              maxLength={200}
            />
          </div>
          <fieldset className="obf-group" hidden={!showLevel && !showAssistive && !showPurchase}>
            <legend>About the problem <span className="obf-optional">(optional)</span></legend>
            <div className="obf-row">
              <div hidden={!showLevel}>
                <TextField key={`level-${level ?? ''}`} name="level" label="Level number" optional placeholder="e.g. 512" hint="Shown at the top of the board." defaultValue={level} error={errors.level} maxLength={12} pattern="[0-9]{1,5}" patternMessage="Enter the level as a number, like 512." />
              </div>
              <div hidden={!showAssistive}>
                <SelectField
                  key={`assistive-${assistive ?? ''}`}
                  name="assistive"
                  label="Assistive technology"
                  optional
                  placeholder="None or not sure"
                  options={assistiveOptions.map((o) => ({ value: o, label: o === 'other' ? 'Other' : o }))}
                  defaultValue={assistive && (assistiveOptions as readonly string[]).includes(assistive) ? assistive : ''}
                  error={errors.assistive}
                />
              </div>
            </div>
            <div className="obf-row" hidden={!showPurchase}>
              <TextField name="purchase-item" label="What did you buy?" optional placeholder="e.g. Remove Ads" error={errors['purchase-item']} maxLength={120} />
              <TextField name="purchase-date" label="When did you buy it?" optional placeholder="e.g. 8 October" error={errors['purchase-date']} maxLength={40} />
            </div>
          </fieldset>
          <fieldset className="obf-group" hidden={!showDevice}>
            <legend>Your device <span className="obf-optional">(optional, helps with support and bugs)</span></legend>
            <div className="obf-row obf-row-3">
              <TextField key={`device-${device ?? ''}`} name="device" label="Device" optional placeholder="e.g. iPhone 15" defaultValue={device} error={errors.device} maxLength={80} />
              <TextField key={`os-${os ?? ''}`} name="ios-version" label="iOS version" optional placeholder="e.g. 26.0" hint="Settings › General › About" defaultValue={os} error={errors['ios-version']} maxLength={20} />
              <TextField key={`app-${app ?? ''}`} name="app-version" label="App version" optional placeholder="e.g. 4.2" defaultValue={app} error={errors['app-version']} maxLength={20} />
            </div>
          </fieldset>
          <TextArea
            name="message"
            label="Your message"
            spoken="your message"
            hint="For a stuck board, include the level number. Please leave out passwords and card details."
            error={errors.message}
            rows={7}
            minLength={10}
            maxLength={5000}
            onValueChange={typed}
          />
          <div className="ss-suggest" aria-live="polite">
            {matches.length ? (
              <>
                <p className="ss-suggest-title">These may answer your question</p>
                <ul>
                  {matches.map((m) => (
                    <li key={m.href}>
                      <a href={m.href} target="_blank" rel="noopener">
                        <span className={`ss-kind k-${m.kind}`}>{kindLabel[m.kind]}</span>
                        <span translate="no" className="t">{m.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="ss-hint">Opens in a new tab. Your message stays here.</p>
              </>
            ) : null}
          </div>
          <ConsentField error={errors.consent}>
            I agree that OutBrick may use these details to reply to me, as described in the{' '}
            <a href="/privacy#forms">privacy policy</a>.
          </ConsentField>
          <SubmitRow
            status={status}
            label="Send message"
            next={
              <>
                <b>What happens next</b>
                <ol className="ss-next">
                  <li>You get an email with your reference straight away.</li>
                  <li>A person on the team reads your message and replies by email.</li>
                  <li>Follow your request and add details at any time from the link in that email.</li>
                </ol>
              </>
            }
          />
        </>
      )}
    </NetlifyForm>
  ), locale);
}
