/**
 * Form handling shared by every page (evalue8 chrome and /foundry).
 *
 * A form carrying data-form posts its fields to /api/contact, which emails them
 * through the STRATO mailbox straight into the inbox. If the server can't send
 * (SMTP not configured yet, network error), the form falls back to composing
 * the same message in the visitor's mail app addressed to data-mail, so a
 * request is never silently dropped.
 *
 * Optional attributes on the <form>:
 *   data-mail      fallback address for the mail-app route
 *   data-subject   fallback subject
 *   data-ok        text shown after a successful send
 *   data-fallback  text shown when the mail app is opened instead
 *   data-lang="de" German button/status texts
 */
type On = (t: Element, type: string, fn: EventListener) => void;

export function attachForms(root: ParentNode, on: On) {
  root.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((f) => {
    on(f, 'submit', async (e) => {
      e.preventDefault();
      const de = f.getAttribute('data-lang') === 'de';
      const btn = f.querySelector<HTMLButtonElement>('button[type=submit]');
      const msg = (f.querySelector('.ok-msg') || f.parentElement?.querySelector('.ok-msg')) as HTMLElement | null;
      // Forms without data-mail are product teasers (e.g. /founders): show the note only.
      if (!f.hasAttribute('data-mail')) {
        msg?.classList.add('on');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.55'; }
        return;
      }
      const label0 = btn?.innerHTML;

      const fields: Array<{ name: string; label: string; value: string }> = [];
      let hp = '';
      f.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        'input[name],textarea[name],select[name]'
      ).forEach((el) => {
        if (el.name === 'hp') { hp = el.value; return; }
        let value = el.value;
        if (el instanceof HTMLInputElement && el.type === 'checkbox') value = el.checked ? (de ? 'Ja' : 'Yes') : '';
        if (!value) return;
        const lab = f.querySelector(`label[for="${el.id}"]`);
        fields.push({ name: el.name, label: (lab?.textContent || el.name).trim(), value });
      });

      if (btn) {
        btn.disabled = true;
        btn.style.opacity = '0.55';
        btn.textContent = de ? 'Wird gesendet …' : 'Sending …';
      }

      let sent = false;
      try {
        const r = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ form: f.getAttribute('data-form'), fields, hp, page: window.location.pathname }),
        });
        sent = r.ok;
      } catch {
        sent = false;
      }

      const mail = f.getAttribute('data-mail') || 'carolin@evalue8.ai';
      if (sent) {
        if (msg) msg.textContent = f.getAttribute('data-ok') ||
          (de ? 'Danke, ist angekommen. Wir melden uns persönlich bei dir.' : 'Thanks — it has reached Carolin. She will get back to you personally.');
        f.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input:not([type=checkbox]),textarea').forEach((el) => { el.value = ''; });
        if (btn) btn.textContent = de ? 'Gesendet ✓' : 'Sent ✓';
      } else {
        const subject = f.getAttribute('data-subject') || 'evalue8 — request';
        const body = fields.map((x) => `${x.label}:\n${x.value}`).join('\n\n');
        window.location.href = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (msg) msg.textContent = f.getAttribute('data-fallback') ||
          (de ? `Dein Mailprogramm öffnet sich mit der fertigen Nachricht. Falls nicht, schreib direkt an ${mail}.`
              : `Opening your mail app with the message ready to send. If nothing happened, write to ${mail}.`);
        if (btn) { btn.disabled = false; btn.style.opacity = ''; if (label0) btn.innerHTML = label0; }
      }
      msg?.classList.add('on');
    });
  });
}
