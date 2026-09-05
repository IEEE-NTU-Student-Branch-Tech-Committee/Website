'use client';

import { useSyncExternalStore } from 'react';
import { Icon } from './icon';

function subscribe(callback: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  function sync() {
    let preference = null;
    try {
      preference = localStorage.getItem('ieee-ntu-theme');
    } catch {
      /* Storage can be unavailable. */
    }
    document.documentElement.dataset.theme =
      preference === 'dark' || preference === 'light'
        ? preference
        : media.matches
          ? 'dark'
          : 'light';
    callback();
  }
  window.addEventListener('themechange', callback);
  window.addEventListener('storage', sync);
  media.addEventListener('change', sync);
  return () => {
    window.removeEventListener('themechange', callback);
    window.removeEventListener('storage', sync);
    media.removeEventListener('change', sync);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme || 'light',
    () => 'light',
  );
  function toggle() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('ieee-ntu-theme', next);
    } catch {
      /* Keep the in-memory preference. */
    }
    window.dispatchEvent(new Event('themechange'));
  }
  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={toggle}
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Dark theme"
      title="Switch colour theme"
    >
      <Icon name="sun" className="sun-icon" />
      <Icon name="moon" className="moon-icon" />
    </button>
  );
}
