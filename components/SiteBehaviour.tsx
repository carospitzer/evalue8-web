'use client';

import { useEffect } from 'react';

/**
 * All client-side behaviour for the site chrome, attached once on mount:
 * scroll reveal, mega menus, mobile menu, forms, the persona context bar,
 * the mobile sticky CTA, and the header treatment over a dark hero.
 */
export default function SiteBehaviour() {
  useEffect(() => {
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cleanups: Array<() => void> = [];
    const on = (
      target: Document | Window | Element,
      type: string,
      fn: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    const store = (k: string, v: string) => {
      try { localStorage.setItem(k, v); } catch { /* private mode */ }
    };
    const read = (k: string) => {
      try { return localStorage.getItem(k); } catch { return null; }
    };

    /* ── persona memory + context bar ── */
    const PERSONA: Record<string, [string, string]> = {
      '/investors': ['investor', 'investment teams'],
      '/corporates': ['corporate', 'innovation teams'],
      '/accelerators': ['accelerator', 'startup programs'],
      '/founders': ['founder', 'founders'],
    };
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (PERSONA[path]) {
      store('e8_persona', PERSONA[path][0]);
      store('e8_persona_label', PERSONA[path][1]);
      store('e8_pbar_off', '0');
    }
    const pbar = document.getElementById('pbar');
    const pbarrole = document.getElementById('pbarrole');
    const label = read('e8_persona_label');
    if (pbar && pbarrole && label && read('e8_pbar_off') !== '1') {
      pbarrole.textContent = label;
      pbar.classList.add('on');
    }
    const pbarx = document.getElementById('pbarx');
    if (pbarx)
      on(pbarx, 'click', () => {
        store('e8_pbar_off', '1');
        pbar?.classList.remove('on');
      });
    on(document, 'click', (e) => {
      const a = (e.target as HTMLElement)?.closest?.('[data-persona]');
      if (a) store('e8_persona', a.getAttribute('data-persona') || '');
    });

    /* ── deep link with an anchor ──
       A native hash jump happens before the reveal animation has run, so the
       target moves out from under the browser. Reveal everything first, then
       re-scroll once layout has settled. */
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('on'));
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const land = () => {
          const top = target.getBoundingClientRect().top + window.pageYOffset - 88;
          window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' });
        };
        requestAnimationFrame(() => { land(); setTimeout(land, 120); });
      }
    }

    /* ── scroll reveal ── */
    let io: IntersectionObserver | null = null;
    if (!reduce && hash.length < 2 && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on');
              io?.unobserve(entry.target);
            }
          }),
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      document.querySelectorAll('.rv').forEach((el) => io!.observe(el));
      cleanups.push(() => io?.disconnect());
    } else {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('on'));
    }

    /* ── mega menus ── */
    let openMega: { el: HTMLElement; btn: HTMLElement } | null = null;
    const closeMega = () => {
      if (!openMega) return;
      openMega.el.classList.remove('open');
      openMega.btn.setAttribute('aria-expanded', 'false');
      openMega.btn.classList.remove('active');
      openMega = null;
    };
    document.querySelectorAll<HTMLElement>('[data-mega]').forEach((btn) => {
      const el = document.getElementById(btn.getAttribute('data-mega') || '');
      if (!el) return;
      const parent = btn.parentElement!;
      let timer: ReturnType<typeof setTimeout>;
      const open = () => {
        if (openMega?.el === el) return;
        closeMega();
        el.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.classList.add('active');
        openMega = { el, btn };
      };
      on(btn, 'click', (e) => {
        e.stopPropagation();
        openMega?.el === el ? closeMega() : open();
      });
      on(parent, 'mouseenter', () => {
        clearTimeout(timer);
        if (window.innerWidth > 860) open();
      });
      on(parent, 'mouseleave', () => {
        timer = setTimeout(() => {
          // only close if this menu is still the open one — the pointer may
          // have moved straight onto a neighbouring menu
          if (openMega?.el === el) closeMega();
        }, 160);
      });
    });
    on(document, 'click', (e) => {
      if (!(e.target as HTMLElement)?.closest?.('.mega')) closeMega();
    });

    /* ── mobile sheet ── */
    const sheet = document.getElementById('msheet');
    const closeSheet = () => {
      sheet?.classList.remove('on');
      document.body.style.overflow = '';
    };
    const burger = document.getElementById('burger');
    if (burger)
      on(burger, 'click', () => {
        sheet?.classList.add('on');
        document.body.style.overflow = 'hidden';
      });
    const sheetx = document.getElementById('msheetx');
    if (sheetx) on(sheetx, 'click', closeSheet);
    if (sheet) on(sheet, 'click', (e) => {
      if ((e.target as HTMLElement)?.closest?.('a')) closeSheet();
    });
    on(document, 'keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Escape') { closeMega(); closeSheet(); }
    });

    /* ── forms ──
       A form carrying data-mail composes a real message to that address in the
       visitor's own mail client: a genuine destination with no backend, no third
       party and nothing silently dropped. To move to a hosted form service or an
       API route later, replace this block — the markup stays as it is. */
    document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((f) => {
      on(f, 'submit', (e) => {
        e.preventDefault();
        const mail = f.getAttribute('data-mail');
        if (mail) {
          const lines: string[] = [];
          f.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
            'input[name],textarea[name]'
          ).forEach((el) => {
            if (!el.value) return;
            const lab = f.querySelector(`label[for="${el.id}"]`);
            lines.push(`${lab ? lab.textContent?.trim() : el.name}:\n${el.value}`);
          });
          const subject = `evalue8 — ${f.getAttribute('data-subject') || 'access request'}`;
          window.location.href =
            `mailto:${mail}?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(lines.join('\n\n'))}`;
        }
        const msg = f.querySelector('.ok-msg') || f.parentElement?.querySelector('.ok-msg');
        msg?.classList.add('on');
        const btn = f.querySelector<HTMLButtonElement>('button[type=submit]');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.55'; }
      });
    });

    /* ── Book a demo ──
       Set NEXT_PUBLIC_BOOKING_URL (Cal.com, Google Calendar appointment page,
       whatever you use) and this button points at it. Until it is set, the button
       falls back to the request form on the same page, so it is never a dead end. */
    const booking = process.env.NEXT_PUBLIC_BOOKING_URL;
    const bookBtn = document.getElementById('book-demo');
    if (bookBtn && booking) {
      bookBtn.setAttribute('href', booking);
      bookBtn.setAttribute('target', '_blank');
      bookBtn.setAttribute('rel', 'noopener');
    }

    /* ── active state in the mega menus and the persona switcher ── */
    const here = path + window.location.hash;
    document.querySelectorAll('.mitem').forEach((a) => {
      const href = a.getAttribute('href');
      a.classList.toggle('cur', href === here || (href === path && !window.location.hash));
    });
    document.querySelectorAll('#pbarsw a').forEach((a) => {
      a.classList.toggle('on', a.getAttribute('href') === path);
    });

    /* ── header treatment + mobile sticky CTA ── */
    const hdr = document.getElementById('hdr');
    const mstick = document.getElementById('mstick');
    const main = document.getElementById('main');
    const firstSection = main?.firstElementChild as HTMLElement | null;
    const darkHero =
      firstSection && firstSection.classList.contains('dark') ? firstSection : null;

    const onScroll = () => {
      hdr?.classList.toggle('scrolled', window.scrollY > 4);
      mstick?.classList.toggle('on', window.scrollY > 620 && path !== '/demo');
      // keep the header dark only while the dark hero is still behind it
      const over = darkHero
        ? window.scrollY < darkHero.offsetTop + darkHero.offsetHeight - 90
        : false;
      hdr?.classList.toggle('on-dark', over);
    };
    on(window, 'scroll', onScroll, { passive: true });
    onScroll();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
