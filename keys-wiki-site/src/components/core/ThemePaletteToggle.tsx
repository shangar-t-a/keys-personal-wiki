import React, { useEffect, useState, useCallback } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import clsx from 'clsx';
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

  const selectTheme = (theme: AccentTheme) => {
    if (accentTheme === theme) return;
    setAccentTheme(theme);
    applyTheme(theme);
  };

  if (!isMounted) {
    return (
      <div className={styles.paletteTrack} aria-hidden="true">
        <span className={clsx(styles.segmentBtn, styles.activeSegment)}>🌊</span>
        <span className={clsx(styles.segmentBtn, styles.inactiveSegment)}>🍂</span>
      </div>
    );
  }

  const isBlue = accentTheme === 'blue';

  return (
    <div
      className={styles.paletteTrack}
      role="radiogroup"
      aria-label="Theme Color Palette">
      {/* 3D Spring Slider Thumb */}
      <div
        className={clsx(
          styles.thumb,
          isBlue ? styles.thumbBlue : styles.thumbCopper
        )}
      />

      {/* Ocean Blue Option */}
      <button
        type="button"
        role="radio"
        aria-checked={isBlue}
        onClick={() => selectTheme('blue')}
        className={clsx(
          styles.segmentBtn,
          isBlue ? styles.activeSegment : styles.inactiveSegment
        )}
        title="Deep Space Blue & Cyan Palette (Default)"
        aria-label="Switch to Deep Space Blue & Cyan palette">
        🌊
      </button>

      {/* Warm Copper Option */}
      <button
        type="button"
        role="radio"
        aria-checked={!isBlue}
        onClick={() => selectTheme('copper')}
        className={clsx(
          styles.segmentBtn,
          !isBlue ? styles.activeSegment : styles.inactiveSegment
        )}
        title="Warm Copper & Amber Editorial Palette"
        aria-label="Switch to Warm Copper & Amber palette">
        🍂
      </button>
    </div>
  );
}
