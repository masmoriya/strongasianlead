'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { logo, navItems } from '../lib/site';

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-ink text-white dark:bg-[#0e0907]">
      <div className="page-shell flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Strong Asian Lead home" className="relative h-9 w-44 shrink-0">
          <Image src={logo.dark} alt="Strong Asian Lead" fill sizes="176px" className="object-contain object-left" priority />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          {navItems.filter((item) => item.href !== '/').map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ThemeToggle className="h-9 bg-white/10 px-3 text-white hover:bg-white/20 dark:bg-gold dark:text-ink" />
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="bg-white/10 px-3 py-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          Menu
        </button>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="page-shell grid gap-1 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-1 py-2 text-sm font-medium ${pathname === item.href ? 'text-gold' : 'text-white/78'}`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle className="mt-2 w-fit bg-white/10 text-white hover:bg-white/20 dark:bg-gold dark:text-ink" />
        </nav>
      ) : null}
    </header>
  );
}
