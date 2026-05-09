'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { FEATURES, GA_MEASUREMENT_ID, META_PIXEL_ID } from '../lib/features';
import { useCookieConsent } from '../context/CookieConsentContext';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function ConsentScripts() {
  const { hasConsented } = useCookieConsent();
  const loadGa = FEATURES.googleAnalytics && Boolean(GA_MEASUREMENT_ID) && hasConsented('analytics');
  const loadMetaPixel = FEATURES.metaPixel && Boolean(META_PIXEL_ID) && hasConsented('marketing');

  useEffect(() => {
    if (!loadGa || typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      client_storage: 'none',
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }, [loadGa]);

  return (
    <>
      {loadGa ? (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      ) : null}
      {loadMetaPixel ? (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !(function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              window.fbq('init', '${String(META_PIXEL_ID).replace(/'/g, "\\'")}');
              window.fbq('track', 'PageView');
            `,
          }}
        />
      ) : null}
    </>
  );
}
