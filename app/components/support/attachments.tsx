'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { supportCopies } from '../../../lib/support/copy/index';
import type { Locale } from '../../../lib/i18n/locales';

const MAX = 3;
const MAX_BYTES = 8 * 1024 * 1024;
const MAX_SIDE = 2400;

type Item = { key: string; preview: string; id?: string; state: 'uploading' | 'done' | 'failed'; error?: string };

/**
 * Turn any image the browser can show (including an iPhone's HEIC photo) into a PNG or JPEG of at
 * most 2400 pixels a side, so it is accepted by the server (netlify/lifecycle/support-attachments.ts)
 * and small enough to send. Screenshots stay PNG so their text stays sharp.
 */
async function prepare(file: File): Promise<Blob> {
  const keepAsIs = (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/webp') && file.size <= MAX_BYTES;
  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) {
    if (keepAsIs) return file;
    throw new Error('decode');
  }
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  if (keepAsIs && scale === 1) {
    bitmap.close();
    return file;
  }
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const type = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, 0.9));
  if (!blob) throw new Error('encode');
  return blob;
}

/**
 * Up to three screenshots for a support message. Each is uploaded as soon as it is chosen and
 * shown as a thumbnail with a Remove button; `onChange` (and, when `name` is given, a hidden form
 * field) carries the ids of those that arrived. A parent clears it by remounting it (`key`).
 */
export function AttachmentPicker({ locale, name, onChange }: { locale: Locale; name?: string; onChange?: (ids: string[]) => void }) {
  const t = supportCopies[locale].attach;
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [notice, setNotice] = useState('');
  const ids = items.filter((i) => i.state === 'done' && i.id).map((i) => i.id as string);
  const idsKey = ids.join(',');

  useEffect(() => {
    onChange?.(idsKey ? idsKey.split(',') : []);
  }, [idsKey, onChange]);

  function mark(key: string, patch: Partial<Item>) {
    setItems((now) => now.map((i) => (i.key === key ? { ...i, ...patch } : i)));
  }

  async function add(files: FileList | null) {
    if (!files?.length) return;
    setNotice('');
    const room = MAX - items.length;
    const chosen = Array.from(files).slice(0, Math.max(0, room));
    if (files.length > room) setNotice(t.tooMany);
    for (const file of chosen) {
      const key = `${file.name}-${file.size}-${Math.random().toString(36).slice(2)}`;
      const preview = URL.createObjectURL(file);
      setItems((now) => [...now, { key, preview, state: 'uploading' }]);
      try {
        const blob = await prepare(file);
        if (blob.size > MAX_BYTES) throw new Error('size');
        const response = await fetch('/api/community/support/attachments', { method: 'POST', headers: { 'Content-Type': blob.type || 'application/octet-stream' }, body: blob });
        const body = (await response.json().catch(() => ({}))) as { id?: string; error?: { message?: string } };
        if (!response.ok || !body.id) throw new Error(response.status === 413 ? 'size' : body.error?.message || 'upload');
        mark(key, { id: body.id, state: 'done' });
      } catch (error) {
        mark(key, { state: 'failed', error: error instanceof Error && error.message === 'size' ? t.tooBig : t.failed });
      }
    }
    if (input.current) input.current.value = '';
  }

  function remove(key: string) {
    setItems((now) => {
      const gone = now.find((i) => i.key === key);
      if (gone) URL.revokeObjectURL(gone.preview);
      return now.filter((i) => i.key !== key);
    });
  }

  return (
    <div className="ss-attach">
      <p className="ss-attach-label" id={`${id}-label`}>{t.label}</p>
      <p className="ss-hint" id={`${id}-hint`}>{t.hint}</p>
      {items.length ? (
        <ul className="ss-attach-list">
          {items.map((item, n) => (
            <li key={item.key} className={`s-${item.state}`}>
              <img src={item.preview} alt={t.alt(n + 1)} width={96} height={96} />
              <span className="ss-attach-state" aria-live="polite">{item.state === 'uploading' ? t.uploading : item.state === 'failed' ? item.error : ''}</span>
              <button type="button" className="ss-back" onClick={() => remove(item.key)} aria-label={`${t.remove}: ${t.alt(n + 1)}`}>{t.remove}</button>
            </li>
          ))}
        </ul>
      ) : null}
      {items.length < MAX ? (
        <label className="btn ghost ss-attach-add">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M4 6h3l2-2h6l2 2h3v13H4V6Zm8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
          {t.add}
          <input ref={input} type="file" accept="image/*" multiple className="sr-only" aria-describedby={`${id}-hint`} onChange={(e) => void add(e.target.files)} />
        </label>
      ) : null}
      {notice ? <p className="ss-error" role="alert">{notice}</p> : null}
      {name ? <input type="hidden" name={name} value={idsKey} /> : null}
    </div>
  );
}
