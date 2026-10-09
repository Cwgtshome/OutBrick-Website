import type { Locale } from '../i18n/locales.ts';
import { helpArticle, helpArticles } from '../help/content.ts';
import { plainInline } from './inline.ts';
import type { KnownIssue, SupportCopy } from './model.ts';
import type { Block } from '../help/model.ts';
import { supportCopies } from './copy/index.ts';
import { en as enIssues } from './issues/en.ts';
import { fr as frIssues } from './issues/fr.ts';
import { de as deIssues } from './issues/de.ts';
import { es as esIssues } from './issues/es.ts';
import { ja as jaIssues } from './issues/ja.ts';
import { ptBR as ptBRIssues } from './issues/pt-BR.ts';

const issues: Record<Locale, KnownIssue[]> = { en: enIssues, fr: frIssues, de: deIssues, es: esIssues, ja: jaIssues, 'pt-BR': ptBRIssues };

export const supportCopy = (locale: Locale): SupportCopy => supportCopies[locale] ?? supportCopies.en;

/** Known issues in `locale`; an entry missing from a translation falls back to English. */
export function knownIssues(locale: Locale): KnownIssue[] {
  const own = new Map((issues[locale] ?? []).map((i) => [i.id, i]));
  return enIssues.map((i) => own.get(i.id) ?? i);
}

/** The day the known-issues list was last reviewed: the newest `checked` of any entry. */
export function issuesReviewed(): string {
  return enIssues.map((i) => i.checked).sort().at(-1) ?? '2026-10-09';
}

// ---------------------------------------------------------------------------------------------
// The troubleshooter is built from the Help Centre's "Troubleshooting common problems" guide, so
// the steps are the same, team-checked words in every language. Each section of that guide is one
// problem; its steps or list items become one card each, and the guide's "three quick checks"
// (update, check the version, restart) follow as the last resort.

export const TROUBLESHOOTING = 'troubleshooting';
const QUICK_CHECKS = 'first';

/** Problems that match a known issue, and the contact topic their escalation preselects. */
const problemIssue: Record<string, string> = { voiceover: 'voiceover-focus' };
const problemTopic: Record<string, string> = { purchase: 'purchases', voiceover: 'accessibility' };

export type Problem = { id: string; title: string; intro: string[]; steps: string[]; issue?: string; topic: string };

/**
 * A section's steps: its numbered or bulleted items, one card each. A section written only as
 * prose (lives, widgets) becomes one card per paragraph; otherwise its paragraphs are the intro.
 */
function sectionSteps(blocks: Block[]): { intro: string[]; steps: string[] } {
  const items: string[] = [];
  const paragraphs: string[] = [];
  for (const b of blocks) {
    if (b.t === 'steps' || b.t === 'list') items.push(...b.items);
    else if (b.t === 'p') paragraphs.push(b.text);
  }
  return items.length ? { intro: paragraphs, steps: items } : { intro: [], steps: paragraphs };
}

export function troubleshooter(locale: Locale): { problems: Problem[]; quickChecks: string[] } {
  const guide = helpArticle(locale, TROUBLESHOOTING);
  if (!guide) return { problems: [], quickChecks: [] };
  const quick = guide.sections.find((s) => s.id === QUICK_CHECKS);
  const problems = guide.sections
    .filter((s) => s.id !== QUICK_CHECKS)
    .map((s) => ({
      id: s.id,
      title: s.title,
      ...sectionSteps(s.blocks),
      issue: problemIssue[s.id],
      topic: problemTopic[s.id] ?? 'support',
    }));
  return { problems, quickChecks: quick ? sectionSteps(quick.blocks).steps : [] };
}

// ---------------------------------------------------------------------------------------------
// What the contact form suggests while a player types: guides, troubleshooter problems and known
// issues, in plain text with the words to match on. Small enough to ship with the form.

export type Suggestion = { kind: 'guide' | 'fix' | 'issue'; href: string; title: string; text: string; words: string };

export function suggestionIndex(locale: Locale, paths: { guide: (slug: string) => string; fix: (id: string) => string; issue: (id: string) => string }): Suggestion[] {
  const guides = helpArticles(locale).map((a) => ({
    kind: 'guide' as const,
    href: paths.guide(a.slug),
    title: plainInline(a.title),
    text: plainInline(a.summary),
    words: `${plainInline(a.title)} ${a.keywords ?? ''} ${plainInline(a.sections.map((s) => s.title).join(' '))}`.toLowerCase(),
  }));
  const fixes = troubleshooter(locale).problems.map((p) => ({
    kind: 'fix' as const,
    href: paths.fix(p.id),
    title: plainInline(p.title),
    text: plainInline(p.steps[0] ?? ''),
    words: `${plainInline(p.title)} ${plainInline(p.steps.join(' '))}`.toLowerCase(),
  }));
  const open = knownIssues(locale)
    .filter((i) => i.status !== 'fixed')
    .map((i) => ({ kind: 'issue' as const, href: paths.issue(i.id), title: plainInline(i.title), text: plainInline(i.fix), words: `${plainInline(i.title)} ${plainInline(i.what)}`.toLowerCase() }));
  return [...open, ...fixes, ...guides];
}
