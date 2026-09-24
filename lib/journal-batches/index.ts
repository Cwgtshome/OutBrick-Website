import type { BlogArticle } from '../blog.ts';
import { batch1 } from './batch-1.ts';
import { batch2 } from './batch-2.ts';
import { batch3 } from './batch-3.ts';
import { batch4 } from './batch-4.ts';
import { batch5 } from './batch-5.ts';

/** The journal's later articles, one file per batch so they can be written side by side. */
export const batchArticles: BlogArticle[] = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5];
