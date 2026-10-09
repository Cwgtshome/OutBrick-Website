import rules from './generated/redirects.json';

/** Netlify's current route table, including forced aliases and localized 404s. */
export function routeRule(pathname: string) {
  for (const rule of rules) {
    const names: string[] = [];
    const pattern = rule.from.split(/(\*|:[a-zA-Z]+)/).map((part) => {
      if (part === '*') { names.push('splat'); return '(.*)'; }
      if (part.startsWith(':')) { names.push(part.slice(1)); return '([^/]+)'; }
      return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('');
    const match = pathname.match(new RegExp(`^${pattern}/?$`));
    if (!match) continue;
    let target = rule.to;
    names.forEach((name, index) => { target = target.replaceAll(`:${name}`, match[index + 1]); });
    return { ...rule, target };
  }
  return null;
}
