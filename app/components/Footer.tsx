'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { useCookieConsent } from '../context/CookieConsentContext';
import { legalLinks, logo, navItems, site } from '../lib/site';

export function Footer() {
  const { openBanner } = useCookieConsent();
  const footerLinks = navItems.filter((item) => !['/', '/events', '/galleries', '/videos', '/podcast'].includes(item.href));

  return (
    <footer className="bg-ink py-12 text-white dark:bg-[#0e0907]">
      <div className="page-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="relative mb-5 h-11 w-56">
            <Image src={logo.dark} alt="Strong Asian Lead" fill sizes="224px" className="object-contain object-left" />
          </div>
          <p className="body-copy text-white/70">A community archive for the work, events, and conversations of Strong Asian Lead.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm font-medium text-white/75">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
          <a href={site.instagram} target="_blank" rel="noreferrer" className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
      <div className="page-shell mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
          <button type="button" onClick={openBanner} className="rounded-sm hover:text-white">
            Cookie preferences
          </button>
          <Link href="/directory" className="hover:text-white">
            Directory
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <p>All rights reserved.</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
