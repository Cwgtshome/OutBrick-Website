import { Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from 'react';
import { publicPages } from './public-pages';
import { formExtraWords, formDynamicText } from './forms-extras';
import { localePath, type Locale } from './locales';

/** Localize client-rendered form content without translating stable field values. */
export function clientText(text: string, locale: Locale): string {
  if (locale === 'en') return text;
  const key = text.replace(/\s+/g, ' ').trim();
  const value = formExtraWords[locale][key] ?? publicPages[locale][key] ?? formDynamicText(text, locale);
  if (!value) return text;
  return `${/^\s/.test(text) ? ' ' : ''}${value}${/\s$/.test(text) ? ' ' : ''}`;
}
export function clientTree(node: ReactNode, locale: Locale): ReactNode {
  if (locale === 'en') return node;
  if (typeof node === 'string') return clientText(node, locale);
  if (Array.isArray(node)) {
    // JSX may split a paragraph at line breaks; translate its contiguous prose together.
    const joined: ReactNode[] = [];
    for (const child of node) {
      const last = joined.length - 1;
      if (typeof child === 'string' && typeof joined[last] === 'string') joined[last] = `${joined[last]}${child}`;
      else joined.push(child);
    }
    return Children.toArray(joined.map(child => clientTree(child, locale)));
  }
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, unknown>>;
  if (element.props.translate === 'no') return node;
  const props: Record<string, unknown> = {};
  if (typeof element.type === 'function' || (typeof element.type === 'object' && element.type !== null)) props.locale = locale;
  for (const [key, value] of Object.entries(element.props)) {
    if (key === 'children' || key === 'success') {
      props[key] = typeof value === 'function' ? (...args: unknown[]) => clientTree(value(...args), locale) : clientTree(value as ReactNode, locale);
    } else if (['label', 'spoken', 'placeholder', 'missing', 'patternMessage', 'title', 'aria-label', 'hint', 'next'].includes(key)) {
      props[key] = typeof value === 'string' ? clientText(value, locale) : clientTree(value as ReactNode, locale);
    } else if ((key === 'href' || key === 'action') && typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !/^\/(fr|de|es|ja)(?:[/?#]|$)/.test(value) && !/\.[a-z0-9]+(?:[?#]|$)/i.test(value)) {
      props[key] = localePath(locale, value);
    } else if (key === 'options' && Array.isArray(value)) {
      props[key] = value.map(option => ({ ...option, label: clientText(option.label, locale) }));
    }
  }
  return cloneElement(element, props);
}
