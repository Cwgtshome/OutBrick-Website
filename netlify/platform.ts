// Request-scoped adapters let the same handlers run on Netlify and Workers.
// AsyncLocalStorage prevents parallel requests from sharing database connections.
import { AsyncLocalStorage } from 'node:async_hooks';
import { getDeployStore, getStore } from '@netlify/blobs';
import type { Db } from './community/db.ts';

export type PlatformStore = {
  get(key: string, options: { type: 'arrayBuffer' }): Promise<ArrayBuffer | null>;
  get(key: string, options: { type: 'json' }): Promise<unknown>;
  get(key: string, options: { type: 'text' }): Promise<string | null>;
  set(key: string, value: ArrayBuffer | string): Promise<unknown>;
  setJSON(key: string, value: unknown): Promise<unknown>;
  delete(key: string): Promise<unknown>;
};
export type Platform = { db: Db; store: (name: string) => PlatformStore; translate?: (markdown: string, system: string) => Promise<string> };
const active = new AsyncLocalStorage<Platform>();
export const platformDatabase = () => active.getStore()?.db;
export const platformTranslator = () => active.getStore()?.translate;
export const withPlatform = <T>(platform: Platform, work: () => T): T => active.run(platform, work);
export function platformStore(name: string, deployScoped = false): PlatformStore {
  const platform = active.getStore();
  if (platform) return platform.store(name);
  return deployScoped ? getDeployStore({ name }) : getStore({ name, consistency: 'strong' });
}
