'use client';
import { notFoundCopy } from '../../lib/i18n/catalog-maps.ts';
import type { ReactNode } from 'react';
import { useLocale } from './locale-context';
import { localePath } from '../../lib/i18n/locales';
export function LocalizedNotFound({brand}:{brand:ReactNode}) {
 const locale=useLocale(); const c=notFoundCopy(locale);
 return <main className="nf-page"><div className="nf-board" aria-hidden="true">{['#3fc544','#3b8bf0','#f26ab8','#ffc53d','#7b5cf0','#f5851f'].map((color,i)=><span className="nf-slot" key={color}>{i===3?null:<span className="nf-brick" style={{background:color}} />}</span>)}</div><a className="nf-home" href={localePath(locale,'/')} aria-label={c[2]}>{brand}</a><p className="nf-code">404</p><h1 className="nf-title">{c[0]}</h1><p className="nf-copy">{c[1]}</p><nav className="nf-links" aria-label={c[3]}>{['/','/play','/blog','/support'].map((p,i)=><a className={`nf-link${i===0?' nf-link-primary':''}`} href={localePath(locale,p)} key={p}>{c[4+i]}</a>)}</nav></main>;
}
