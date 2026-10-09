import fs from 'node:fs/promises';
const source = await fs.readFile('netlify.toml', 'utf8');
const redirects = source.split('[[redirects]]').slice(1).map((block) => {
  const section = block.split(/\n\[/)[0];
  const field = (name) => section.match(new RegExp(`^\\s*${name}\\s*=\\s*"([^"]+)"`, 'm'))?.[1];
  const status = Number(section.match(/^\s*status\s*=\s*(\d+)/m)?.[1]);
  if (!field('from') || !field('to') || ![200, 301, 302, 404].includes(status)) throw new Error('Unsupported Netlify redirect; port it explicitly.');
  return { from: field('from'), to: field('to'), status, force: /^\s*force\s*=\s*true/m.test(section) };
});
await fs.mkdir('cloudflare/generated', { recursive: true });
await fs.writeFile('cloudflare/generated/redirects.json', JSON.stringify(redirects, null, 2) + '\n');
console.log(`Prepared ${redirects.length} existing route rules.`);
