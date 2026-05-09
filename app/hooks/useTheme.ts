'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

const THEME_KEY = 'sal-theme';

function prefersDark() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
}

function applyTheme(preference: ThemePreference) {
  if (typeof document === 'undefined') return;
  const useDark = preference === 'dark' || (preference === 'system' && prefersDark());
  document.documentElement.classList.toggle('dark', useDark);
  document.documentElement.classList.toggle('light', !useDark);
}

function readPreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system';
  const value = window.localStorage.getItem(THEME_KEY);
  return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
}

export function useTheme() {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => readPreference());

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    window.localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }, []);

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!media) return;

    const onChange = () => {
      if (readPreference() === 'system') applyTheme('system');
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const resolvedTheme = useMemo<'light' | 'dark'>(() => {
    if (preference === 'light') return 'light';
    if (preference === 'dark') return 'dark';
    return prefersDark() ? 'dark' : 'light';
  }, [preference]);

  return { preference, resolvedTheme, setPreference };
}
