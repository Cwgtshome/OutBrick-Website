import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { generateKeyPairSync, sign, verify } from 'node:crypto';
const require = createRequire(import.meta.resolve('wrangler/package.json'));
const { Miniflare, convertV4MiniflareOptions } = require('miniflare');
const { build } = require('esbuild');

test('Apple ES256 client secret signs and verifies inside the Cloudflare runtime', async () => {
  const { privateKey, publicKey } = generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
  const pem = privateKey.export({ format: 'pem', type: 'pkcs8' }).toString();
  const rsa = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const header = Buffer.from(JSON.stringify({alg:'RS256',kid:'provider-test'})).toString('base64url');
  const payload = Buffer.from(JSON.stringify({iss:'https://appleid.apple.com',aud:'test-client',sub:'test-subject',nonce:'test-nonce',exp:Math.floor(Date.now()/1000)+300})).toString('base64url');
  const input = header + '.' + payload;
  const token = input + '.' + sign('RSA-SHA256',Buffer.from(input),rsa.privateKey).toString('base64url');
  const jwk = {...rsa.publicKey.export({format:'jwk'}),kid:'provider-test'};
  const script = await build({
    stdin: { contents: `import { signEs256, verifyIdToken } from './netlify/community/auth/jwt.ts';
      export default { async fetch(request, env) {
        if(new URL(request.url).pathname === '/verify') {
          globalThis.fetch = async () => Response.json({keys:[JSON.parse(env.TEST_JWK)]});
          const claims = await verifyIdToken(env.TEST_TOKEN,{jwksUrl:'https://jwks.runtime.test',issuers:['https://appleid.apple.com'],audience:'test-client',nonce:'test-nonce'});
          return Response.json({subject:claims.sub});
        }
        const pem = new URL(request.url).pathname === '/escaped' ? env.TEST_KEY.replace(/\\n/g, '\\\\n') : env.TEST_KEY;
        return new Response(signEs256({kid:'runtime-test'}, {iss:'test-team',sub:'test-client',iat:1,exp:301}, pem));
      }};`, resolveDir: process.cwd() },
    bundle: true, format: 'esm', platform: 'neutral', external: ['node:*'], write: false,
  });
  const mf = new Miniflare(convertV4MiniflareOptions({ modules: true, script: script.outputFiles[0].text,
    compatibilityDate: '2026-10-08', compatibilityFlags: ['nodejs_compat'],
    bindings: { TEST_KEY: pem, TEST_JWK: JSON.stringify(jwk), TEST_TOKEN:token } }));
  try {
    for (const path of ['/', '/escaped']) {
      const response = await mf.dispatchFetch('https://runtime.test' + path);
      assert.equal(response.status, 200, await response.clone().text());
      const token = await response.text();
      const [header, payload, signature] = token.split('.');
      assert.equal(JSON.parse(Buffer.from(header, 'base64url')).alg, 'ES256');
      assert.equal(JSON.parse(Buffer.from(payload, 'base64url')).sub, 'test-client');
      const bytes = Buffer.from(signature, 'base64url');
      assert.equal(bytes.length, 64);
      assert.equal(verify('sha256', Buffer.from(header + '.' + payload), {key: publicKey, dsaEncoding:'ieee-p1363'}, bytes), true);
    }
    const verified = await mf.dispatchFetch('https://runtime.test/verify');
    assert.equal(verified.status,200,await verified.clone().text());
    assert.deepEqual(await verified.json(),{subject:'test-subject'});
  } finally { await mf.dispose(); }
});
