import React, { useEffect, useState, useCallback } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './ThemePaletteToggle.module.css';

export type AccentTheme = 'blue' | 'copper';

const STORAGE_KEY = 'keys-accent-theme';
const EVENT_NAME = 'keys-accent-theme-change';

function getInitialTheme(): AccentTheme {
  if (!ExecutionEnvironment.canUseDOM) {
    return 'blue';
  }
  const currentAttr = document.documentElement.getAttribute('data-accent-theme') as AccentTheme | null;
  if (currentAttr === 'blue' || currentAttr === 'copper') {
    return currentAttr;
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as AccentTheme | null;
    if (saved === 'blue' || saved === 'copper') {
      return saved;
    }
  } catch {
    // Ignore localStorage access errors
  }
  return 'blue';
}

export default function ThemePaletteToggle(): JSX.Element | null {
  const [accentTheme, setAccentTheme] = useState<AccentTheme>('blue');
  const [isMounted, setIsMounted] = useState(false);

  const applyTheme = useCallback((nextTheme: AccentTheme) => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }
    document.documentElement.setAttribute('data-accent-theme', nextTheme);
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Ignore
    }
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: nextTheme }));
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const initial = getInitialTheme();
    setAccentTheme(initial);
    document.documentElement.setAttribute('data-accent-theme', initial);

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<AccentTheme>;
      if (customEvent.detail && (customEvent.detail === 'blue' || customEvent.detail === 'copper')) {
        setAccentTheme(customEvent.detail);
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'blue' || e.newValue === 'copper')) {
        setAccentTheme(e.newValue);
        document.documentElement.setAttribute('data-accent-theme', e.newValue);
      }
    };

    window.addEventListener(EVENT_NAME, handleCustomChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(EVENT_NAME, handleCustomChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: AccentTheme = accentTheme === 'blue' ? 'copper' : 'blue';
    setAccentTheme(nextTheme);
    applyTheme(nextTheme);
  };

  if (!isMounted) {
    return (
      <button
        type="button"
        aria-label="Toggle Theme Palette"
        className={styles.toggleBtn}
        disabled>
        <span className={styles.swatch} />
        <span className={styles.label}>Theme</span>
      </button>
    );
  }

  const isBlue = accentTheme === 'blue';
  const label = isBlue ? 'Ocean Blue' : 'Warm Copper';
  const title = isBlue
    ? 'Active: Deep Space Blue gradient (Click for Warm Copper)'
    : 'Active: Warm Copper editorial (Click for Deep Space Blue)';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggleBtn}
      title={title}
      aria-label={`Switch Theme Palette (Current: ${label})`}>
      <span className={styles.swatch} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}
