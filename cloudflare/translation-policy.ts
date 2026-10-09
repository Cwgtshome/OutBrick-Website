// Cloudflare's published gpt-oss-20b rates: 18,182 / 27,273 neurons per million
// input / output tokens. Reserve twice the UTF-8 byte upper bound, including
// template overhead and the entire output allowance. Failed calls consume their
// reservation too; an unknown provider outcome must never permit a second charge.
export const TRANSLATION_DAILY_NEURONS = 5000;
export const TRANSLATION_MODEL = '@cf/openai/gpt-oss-20b';
export function translationReservation(markdown: string, system: string) {
  const bytes = new TextEncoder().encode(`<post>\n${markdown}\n</post>\n${system}`).length;
  if (bytes > 16000) throw new Error('Translation exceeds the free request limit.');
  const maxTokens = Math.min(6000, Math.max(1024, bytes * 2));
  const neurons = Math.ceil(2 * ((bytes + 2048) * 18182 + maxTokens * 27273) / 1_000_000);
  return { neurons, maxTokens };
}
export const RESERVE_TRANSLATION_SQL = `
  INSERT INTO translation_budget (day, neurons) VALUES (?, ?)
  ON CONFLICT(day) DO UPDATE SET neurons = translation_budget.neurons + excluded.neurons
  WHERE translation_budget.neurons + excluded.neurons <= ?
  RETURNING neurons`;
