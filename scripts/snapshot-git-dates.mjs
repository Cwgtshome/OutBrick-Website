// Before uploading a deploy through Netlify's API (the build machine then has no git history),
// record what the build would otherwise ask git: the commit, and each tracked file's last commit
// date. scripts/postbuild.mjs reads `.git-dates.json` when git is unavailable.
//
//   node scripts/snapshot-git-dates.mjs        # in a clean checkout of the commit being deployed

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
const commit = git('rev-parse', 'HEAD').trim();
const files = {};
let date = '';
// Newest first, so the first date seen for a file is its last commit.
for (const line of git('log', '--format=%x00%cs', '--name-only', 'HEAD').split('\n')) {
  if (line.startsWith('\u0000')) date = line.slice(1);
  else if (line && !files[line]) files[line] = date;
}
fs.writeFileSync(path.join(root, '.git-dates.json'), JSON.stringify({ commit, files }));
console.log(`[snapshot-git-dates] ${commit.slice(0, 7)}: ${Object.keys(files).length} files`);
