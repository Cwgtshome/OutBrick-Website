/** The text of a Help Centre inline string with its markup removed (bold, links, key caps, code). */
export function plainInline(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\{\{([^}]+)\}\}/g, '$1');
}
