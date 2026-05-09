'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { logo, navItems } from '../lib/site';

const contentLinks = navItems.filter((item) => ['/events', '/galleries', '/videos', '/podcast'].includes(item.href));
const primaryLinks = navItems.filter((item) => !['/', '/events', '/galleries', '/videos', '/podcast'].includes(item.href));

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const contentActive = contentLinks.some((item) => pathname.startsWith(item.href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-white backdrop-blur dark:bg-[#0e0907]/95">
      <div className="page-shell flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Strong Asian Lead home" className="relative h-9 w-44 shrink-0">
          <Image src={logo.dark} alt="Strong Asian Lead" fill sizes="176px" className="object-contain object-left" priority />
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white ${pathname === item.href ? 'text-gold' : 'text-white/78'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button
              type="button"
              className={`inline-flex items-center gap-2 rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white ${contentActive ? 'text-gold' : 'text-white/78'}`}
              aria-haspopup="menu"
            >
              Content
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="pointer-events-none absolute right-0 top-full z-50 mt-2 min-w-44 rounded-lg border border-white/10 bg-ink p-1 opacity-0 shadow-xl shadow-black/20 transition duration-150 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:bg-[#0e0907]">
              {contentLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm transition hover:bg-white/10 ${pathname.startsWith(item.href) ? 'text-gold' : 'text-white/78'}`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium transition hover:bg-white/20 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          Menu
        </button>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="page-shell grid gap-1 pb-4 md:hidden">
          {[...primaryLinks, ...contentLinks].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === item.href ? 'bg-white/10 text-gold' : 'text-white/78'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
