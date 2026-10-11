import { notFoundMeta } from '../../../lib/i18n/catalog-maps.ts';
import type { Metadata } from 'next';
import { publicLocale, publicStaticParams } from '../../localized-public-page';
import { BrandMark } from '../../village-shell';
import { LocalizedNotFound } from '../../components/localized-not-found';
import '../../styles/not-found.css';
export const dynamicParams = false;
export function generateStaticParams() { return publicStaticParams(); }
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata> { const c=notFoundMeta(await publicLocale(params)); return {title:c[0], description:c[1], robots:{index:false,follow:true},alternates:{canonical:null}}; }
export default function Page() { return <LocalizedNotFound brand={<BrandMark />} />; }
