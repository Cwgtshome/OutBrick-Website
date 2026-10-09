import { DurableObject } from 'cloudflare:workers';
import { RESERVE_TRANSLATION_SQL, TRANSLATION_DAILY_NEURONS, TRANSLATION_MODEL, translationReservation } from './translation-policy.ts';

// One coordination atom for this account's OutBrick AI allowance, shared by
// preview and production. No customer text is persisted in this object.
export class TranslationBudget extends DurableObject<{ AI: Ai }> {
  constructor(ctx: DurableObjectState, env: { AI: Ai }) {
    super(ctx, env);
    ctx.storage.sql.exec('CREATE TABLE IF NOT EXISTS translation_budget (day TEXT PRIMARY KEY, neurons INTEGER NOT NULL CHECK (neurons >= 0 AND neurons <= 5000))');
  }

  async translate(markdown: string, system: string): Promise<string> {
    const { neurons, maxTokens } = translationReservation(markdown, system);
    const day = new Date().toISOString().slice(0, 10);
    // Synchronous SQL completes before external inference; concurrent calls and
    // restarts share the durable reservation. Nothing refunds ambiguous failures.
    const accepted = this.ctx.storage.sql.exec(RESERVE_TRANSLATION_SQL, day, neurons, TRANSLATION_DAILY_NEURONS).toArray();
    if (!accepted.length) throw new Error('The free daily translation allowance has been reached.');
    this.ctx.storage.sql.exec('DELETE FROM translation_budget WHERE day < ?', day);
    const result = await this.env.AI.run(TRANSLATION_MODEL, {
      messages: [{ role: 'system', content: system }, { role: 'user', content: `<post>\n${markdown}\n</post>` }],
      temperature: 0, max_completion_tokens: maxTokens, reasoning_effort: 'low', stream: false,
    });
    const data = result as { choices?: { finish_reason?: string; message?: { content?: string; refusal?: string } }[] };
    const choice = data.choices?.[0];
    if (choice?.message?.refusal || choice?.finish_reason !== 'stop') throw new Error('Translation incomplete or refused.');
    const text = choice.message?.content?.trim();
    if (!text) throw new Error('Translation empty.');
    return text.replace(/^<post>\s*/i, '').replace(/\s*<\/post>$/i, '');
  }
}

// Only bound Workers can invoke RPC. There is no public inference endpoint.
const worker = { fetch: () => new Response('Not found', { status: 404 }) };
export default worker;
