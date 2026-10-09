// Local cutover preflight: print names only; never print credential values.
import fs from 'node:fs/promises';
const env = JSON.parse(await fs.readFile('.env.netlify-migration.json', 'utf8'));
const required = ['RESEND_API_KEY', 'RESEND_EVENTS_WEBHOOK_SECRET', 'APPLE_CLIENT_ID', 'APPLE_TEAM_ID', 'APPLE_KEY_ID', 'APPLE_PRIVATE_KEY', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET'];
const missing = required.filter(name => typeof env[name] !== 'string' || !env[name].trim());
const masked = Object.keys(env).filter(name => typeof env[name] === 'string' && /^[•*]{4,}/u.test(env[name]));
console.log(JSON.stringify({ readyForCutover: missing.length === 0 && masked.length === 0, missing, masked }));
if (missing.length || masked.length) process.exitCode = 1;
