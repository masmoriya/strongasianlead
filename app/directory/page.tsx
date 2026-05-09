import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '../lib/metadata';
import { galleries } from '../lib/media';
import { legalLinks, navItems } from '../lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Directory',
  path: '/directory',
  description: 'Plain-text directory of Strong Asian Lead pages.',
});

export default function DirectoryPage() {
  const pages = [
    ...navItems,
    { label: 'Story', href: '/story' },
    ...legalLinks,
  ];

  return (
    <section className="section">
      <div className="page-shell max-w-3xl">
        <h1 className="section-title">Directory</h1>
        <p className="body-copy mt-6">A plain index for browser tools, search engines, and humans.</p>
        <div className="mt-10 grid gap-8">
          <LinkList title="Pages" items={pages} />
          <LinkList
            title="Gallery pages"
            items={galleries.map((gallery) => ({ label: gallery.title, href: `/galleries/${gallery.slug}` }))}
          />
        </div>
      </div>
    </section>
  );
}

function LinkList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <section className="border-t border-black/10 pt-6 dark:border-white/10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="minimal-link text-sm">{item.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
