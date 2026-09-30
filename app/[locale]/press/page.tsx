import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import * as EnglishSource from '../../(en)/press/page';
import { localizePageTree, localizedMetadata, publicLocale, publicStaticParams } from '../../localized-public-page';

type Props = { params: Promise<{ locale: string; [key: string]: string }> };
const source = EnglishSource as unknown as {
  default: (props: Props) => ReactNode | Promise<ReactNode>;
  metadata?: Metadata;
  generateMetadata?: (props: Props) => Metadata | Promise<Metadata>;
  generateStaticParams?: () => Record<string, string>[];
};
export const dynamicParams = false;

export function generateStaticParams() { return publicStaticParams(); }

export async function generateMetadata(props: Props): Promise<Metadata> {
  const locale = await publicLocale(props.params);
  const original = source.generateMetadata ? await source.generateMetadata(props) : source.metadata ?? {};
  return localizedMetadata(original, `/press`, locale);
}

export default async function LocalizedPage(props: Props) {
  const locale = await publicLocale(props.params);
  await generateMetadata(props);
  return localizePageTree(await source.default(props), locale);
}
