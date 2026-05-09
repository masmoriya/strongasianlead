import type { MetadataRoute } from 'next';
import { galleries } from './lib/media';
import { teamMembers } from './lib/team';
import { legalLinks, navItems, site } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...navItems.map((item) => item.href),
    '/story',
    '/directory',
    '/cookie-preferences',
    ...legalLinks.map((item) => item.href),
    ...galleries.map((gallery) => `/galleries/${gallery.slug}`),
    ...teamMembers.map((member) => `/team/${member.slug}`),
  ];

  return Array.from(new Set(routes)).map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date('2026-05-09'),
  }));
}
