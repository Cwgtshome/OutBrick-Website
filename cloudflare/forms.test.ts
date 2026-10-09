import test from 'node:test';
import assert from 'node:assert/strict';
import { freshDatabase } from '../netlify/community/test/harness.ts';
import { submitForm } from './forms.ts';
const request = (fields: [string,string][], origin = 'https://www.outbrick.site') => new Request('https://www.outbrick.site/', {method:'POST', headers:{origin,'content-type':'application/x-www-form-urlencoded'}, body:new URLSearchParams(fields)});
const base: [string,string][] = [['form-name','affiliate'],['email','system-test@example.com'],['consent','yes']];
void test('forms persist repeated fields when email is unavailable, without broadcasting', async () => {
  delete process.env.RESEND_API_KEY;
  const db = await freshDatabase();
  try {
    const response = await submitForm(request([...base,['channels','video'],['channels','blog']]));
    assert.equal(response.status,202);
    const {rows} = await db.query<{payload:{data:{channels:string[]}},delivery_state:string,attempts:number}>('SELECT payload,delivery_state,attempts FROM web_form_submissions');
    assert.equal(rows.length,1);
    assert.deepEqual(rows[0].payload.data.channels,['video','blog']);
    assert.equal(rows[0].delivery_state,'pending');
    assert.equal(rows[0].attempts,1);
  } finally { await db.close(); }
});
void test('origin, consent and honeypot reject persistence and delivery', async () => {
  delete process.env.RESEND_API_KEY;
  const db = await freshDatabase();
  try {
    assert.equal((await submitForm(request(base,'https://untrusted.example'))).status,403);
    assert.equal((await submitForm(request(base.filter(([key])=>key!=='consent')))).status,400);
    assert.equal((await submitForm(request([...base,['bot-field','filled']]))).status,200);
    const {rows} = await db.query<{count:number}>('SELECT count(*)::int AS count FROM web_form_submissions');
    assert.equal(rows[0].count,0);
  } finally { await db.close(); }
});
void test('one address gets at most three visitor emails a day; later submissions are kept for the team', async () => {
  delete process.env.RESEND_API_KEY;
  const db = await freshDatabase();
  try {
    const fields: [string,string][] = [['form-name','contact'],['email','Flooded@Example.com'],['consent','yes'],['message','hello']];
    for (let i = 0; i < 4; i++) assert.equal((await submitForm(request(fields))).status, 202);
    // A different address is unaffected.
    assert.equal((await submitForm(request([['form-name','newsletter'],['email','other@example.com'],['consent','yes']]))).status, 202);
    const {rows} = await db.query<{payload:{acknowledge?:boolean,data:{email:string}}}>('SELECT payload FROM web_form_submissions ORDER BY created_at, id');
    assert.equal(rows.length, 5, 'every submission is stored');
    assert.deepEqual(rows.map((r) => r.payload.acknowledge !== false), [true, true, true, false, true]);
  } finally { await db.close(); }
});
