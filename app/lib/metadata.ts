import type { Metadata } from 'next';
import { logo, site } from './site';

type PageMetadata = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description = site.description,
  path = '/',
  image = logo.light,
}: PageMetadata = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.name}` : site.name;
  const metadataBase = new URL(site.url);

  return {
    title: pageTitle,
    description,
    metadataBase,
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: site.name,
      images: [{ url: image, alt: `${site.name} logo` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [image],
    },
  };
}
