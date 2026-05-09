import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { createPageMetadata } from './lib/metadata';

export const metadata: Metadata = createPageMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body className="font-sans antialiased">
        <CookieConsentProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <CookieConsentBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
