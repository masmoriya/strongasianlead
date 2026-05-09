'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getStoredConsent, setConsent, type CookieConsent } from '../utils/cookie-consent';

type ConsentCategory = 'analytics' | 'marketing' | 'location' | 'essential';

type ConsentContext = {
  preferences: CookieConsent | null;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updatePreferences: (update: Partial<CookieConsent>) => void;
  hasConsented: (category: ConsentCategory) => boolean;
  showBanner: boolean;
  openBanner: () => void;
  closeBanner: () => void;
};

const Context = createContext<ConsentContext | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookieConsent | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const onChange = (event: Event) => {
      const next = (event as CustomEvent<CookieConsent | null>).detail;
      setPreferences(next);
      if (next === null) setIsBannerVisible(true);
    };

    window.addEventListener('cookie-consent-changed', onChange);

    const syncStoredPreference = window.setTimeout(() => {
      const stored = getStoredConsent();
      setPreferences(stored);
      setIsBannerVisible(stored === null);
    }, 0);

    return () => {
      window.clearTimeout(syncStoredPreference);
      window.removeEventListener('cookie-consent-changed', onChange);
    };
  }, []);

  const closeBanner = useCallback(() => {
    setIsBannerVisible(false);
  }, []);

  const acceptAll = useCallback(() => {
    setPreferences(setConsent({ analytics: true, marketing: true, location: true }));
    closeBanner();
  }, [closeBanner]);

  const rejectNonEssential = useCallback(() => {
    setPreferences(setConsent({ analytics: false, marketing: false, location: false }));
    closeBanner();
  }, [closeBanner]);

  const updatePreferences = useCallback((update: Partial<CookieConsent>) => {
    setPreferences(setConsent(update));
  }, []);

  const hasConsented = useCallback(
    (category: ConsentCategory) => {
      if (category === 'essential') return true;
      if (category === 'analytics') return preferences?.analytics ?? false;
      if (category === 'marketing') return preferences?.marketing ?? false;
      if (category === 'location') return preferences?.location ?? false;
      return false;
    },
    [preferences],
  );

  const openBanner = useCallback(() => {
    setIsBannerVisible(true);
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      acceptAll,
      rejectNonEssential,
      updatePreferences,
      hasConsented,
      showBanner: isBannerVisible,
      openBanner,
      closeBanner,
    }),
    [
      preferences,
      acceptAll,
      rejectNonEssential,
      updatePreferences,
      hasConsented,
      isBannerVisible,
      openBanner,
      closeBanner,
    ],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useCookieConsent() {
  const context = useContext(Context);
  if (!context) throw new Error('useCookieConsent must be used inside CookieConsentProvider');
  return context;
}
