'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getStoredConsent, setConsent, type CookieConsent } from '../utils/cookie-consent';

type ConsentContext = {
  preferences: CookieConsent | null;
  showBanner: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updatePreferences: (update: Partial<CookieConsent>) => void;
  openBanner: () => void;
  closeBanner: () => void;
};

const Context = createContext<ConsentContext | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookieConsent | null>(() => getStoredConsent());
  const [bannerOverride, setBannerOverride] = useState<'auto' | 'open' | 'closed'>('auto');

  useEffect(() => {
    const onChange = (event: Event) => {
      setPreferences((event as CustomEvent<CookieConsent | null>).detail);
    };

    window.addEventListener('sal-cookie-consent-changed', onChange);
    return () => window.removeEventListener('sal-cookie-consent-changed', onChange);
  }, []);

  const acceptAll = useCallback(() => {
    setPreferences(setConsent({ analytics: true, marketing: true }));
    setBannerOverride('closed');
  }, []);

  const rejectNonEssential = useCallback(() => {
    setPreferences(setConsent({ analytics: false, marketing: false }));
    setBannerOverride('closed');
  }, []);

  const updatePreferences = useCallback((update: Partial<CookieConsent>) => {
    setPreferences(setConsent(update));
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      showBanner: bannerOverride === 'open' || (bannerOverride === 'auto' && preferences === null),
      acceptAll,
      rejectNonEssential,
      updatePreferences,
      openBanner: () => setBannerOverride('open'),
      closeBanner: () => setBannerOverride('closed'),
    }),
    [preferences, bannerOverride, acceptAll, rejectNonEssential, updatePreferences],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useCookieConsent() {
  const context = useContext(Context);
  if (!context) throw new Error('useCookieConsent must be used inside CookieConsentProvider');
  return context;
}
