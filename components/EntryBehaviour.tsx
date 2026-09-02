'use client';

import { useEffect } from 'react';

/** The entry page has no chrome — it only needs to remember the chosen persona. */
export default function EntryBehaviour() {
  useEffect(() => {
    const handler = (e: Event) => {
      const a = (e.target as HTMLElement)?.closest?.('[data-persona]');
      if (!a) return;
      try {
        localStorage.setItem('e8_persona', a.getAttribute('data-persona') || '');
        localStorage.setItem('e8_pbar_off', '0');
      } catch { /* private mode */ }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}
