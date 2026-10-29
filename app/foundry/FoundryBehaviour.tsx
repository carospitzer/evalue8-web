'use client';

import { useEffect } from 'react';
import { attachForms } from '@/components/forms';

const PHASES = ['Verstehen', 'Testen', 'Verkaufen', 'Fundament'];
const CIRC = 2 * Math.PI * 52;

/** /foundry only: phase animation in the hero, mobile menu, header shadow, forms. */
export default function FoundryBehaviour() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = (t: Element | Window, type: string, fn: EventListener, opts?: AddEventListenerOptions) => {
      t.addEventListener(type, fn, opts);
      cleanups.push(() => t.removeEventListener(type, fn, opts));
    };

    const root = document.querySelector('.ctf');
    if (!root) return;
    attachForms(root, on);

    /* hero: cycle through the four phases */
    const ring = document.getElementById('cf-ring-fg');
    const n = document.getElementById('cf-phase-n');
    const t = document.getElementById('cf-phase-t');
    const c = document.getElementById('cf-phase-count');
    let i = 0;
    const show = () => {
      ring?.setAttribute('stroke-dasharray', `${(CIRC * (i + 1)) / 4} ${CIRC}`);
      if (n) n.textContent = `Phase ${i + 1}`;
      if (t) t.textContent = PHASES[i];
      if (c) c.textContent = `Phase ${i + 1} von 4`;
    };
    show();
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      const id = window.setInterval(() => { i = (i + 1) % 4; show(); }, 2600);
      cleanups.push(() => window.clearInterval(id));
    }

    /* header + mobile menu */
    const hdr = document.getElementById('cf-hdr');
    const burger = document.getElementById('cf-burger');
    const nav = document.getElementById('cf-nav');
    const onScroll = () => hdr?.classList.toggle('cf-scrolled', window.scrollY > 4);
    on(window, 'scroll', onScroll, { passive: true });
    onScroll();
    if (burger && nav) {
      on(burger, 'click', () => {
        const open = !hdr?.classList.contains('cf-open');
        hdr?.classList.toggle('cf-open', open);
        burger.setAttribute('aria-expanded', String(open));
      });
      nav.querySelectorAll('a').forEach((a) =>
        on(a, 'click', () => { hdr?.classList.remove('cf-open'); burger.setAttribute('aria-expanded', 'false'); })
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
