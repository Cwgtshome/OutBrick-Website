import type { BlogArticle } from '../blog.ts';
import { batch1 } from './batch-1.ts';
import { batch2 } from './batch-2.ts';
import { batch3 } from './batch-3.ts';
import { batch4 } from './batch-4.ts';
import { batch5 } from './batch-5.ts';
import { batch6 } from './batch-6.ts';
import { batch7 } from './batch-7.ts';
import { batch8 } from './batch-8.ts';
import { batch9 } from './batch-9.ts';
import { batch10 } from './batch-10.ts';

/** The journal's later articles, one file per batch so they can be written side by side. */
export const batchArticles: BlogArticle[] = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6, ...batch7, ...batch8, ...batch9, ...batch10];
