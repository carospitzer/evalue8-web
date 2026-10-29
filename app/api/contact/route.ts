import nodemailer from 'nodemailer';

/**
 * Every form on the site posts here. The message is sent through the STRATO
 * mailbox (same setup as chilipick.de) straight into the inbox, so a request
 * no longer depends on the visitor having a mail app configured.
 *
 * Vercel → Settings → Environment Variables:
 *   SMTP_USER   the STRATO mailbox that sends, e.g. carolin@evalue8.ai
 *   SMTP_PASS   that mailbox's password
 *   NOTIFY_TO   where requests go (default: carolin@evalue8.ai)
 *   SMTP_HOST / SMTP_PORT optional (default smtp.strato.de / 465)
 *
 * Without SMTP_USER/SMTP_PASS the route answers 503 and the browser falls back
 * to opening the visitor's mail app, exactly as before — nothing is lost.
 * No IP addresses are stored or sent.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FORMS: Record<string, string> = {
  access: 'evalue8 · access request',
  cq: 'evalue8 · scouting question (corporates)',
  pilot: 'evalue8 · accelerator pilot request',
  'foundry-apply': 'Foundry · Bewerbung',
  'foundry-lp': 'Foundry · LP-Zugang angefragt',
};

const hits = new Map<string, number[]>();
function limited(key: string, max = 6, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const list = (hits.get(key) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) hits.clear();
  return list.length > max;
}

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

let transport: nodemailer.Transporter | undefined;
function mailer() {
  if (transport) return transport;
  const port = Number(process.env.SMTP_PORT || 465);
  transport = process.env.MAIL_DRY_RUN
    ? nodemailer.createTransport({ jsonTransport: true })
    : nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.strato.de',
        port,
        secure: port === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
  return transport;
}

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export async function POST(req: Request) {
  if (!process.env.MAIL_DRY_RUN && (!process.env.SMTP_USER || !process.env.SMTP_PASS)) {
    return json(503, { ok: false, error: 'not_configured' });
  }

  let body: { form?: unknown; fields?: unknown; hp?: unknown; page?: unknown };
  try {
    body = await req.json();
  } catch {
    return json(400, { ok: false, error: 'bad_request' });
  }

  const form = clean(body.form, 40);
  if (!FORMS[form]) return json(400, { ok: false, error: 'unknown_form' });
  if (body.hp) return json(200, { ok: true }); // honeypot: bots get a quiet success

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return json(429, { ok: false, error: 'rate_limited' });

  const raw = Array.isArray(body.fields) ? body.fields.slice(0, 20) : [];
  const rows: Array<[string, string]> = [];
  let replyTo = '';
  for (const f of raw) {
    if (!f || typeof f !== 'object') continue;
    const { label, name, value } = f as Record<string, unknown>;
    const v = clean(value, 4000);
    if (!v) continue;
    const l = clean(label, 120) || clean(name, 60);
    rows.push([l, v]);
    if (!replyTo && clean(name, 60) === 'email' && EMAIL.test(v)) replyTo = v;
  }
  if (!rows.length) return json(400, { ok: false, error: 'empty' });

  const who =
    rows.find(([l]) => /name/i.test(l))?.[1] ||
    rows.find(([l]) => /organi|startup/i.test(l))?.[1] ||
    replyTo ||
    'website';
  const page = clean(body.page, 200);
  const time = new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
  rows.push(['Seite / page', page || '—'], ['Zeit / time', time]);

  const text = rows.map(([k, v]) => `${k}:\n${v}`).join('\n\n');
  const html =
    '<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">' +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="color:#555;vertical-align:top;white-space:nowrap"><b>${esc(k)}</b></td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`
      )
      .join('') +
    '</table>';

  try {
    const info = await mailer().sendMail({
      from: `"evalue8 website" <${process.env.SMTP_USER || 'carolin@evalue8.ai'}>`,
      to: process.env.NOTIFY_TO || 'carolin@evalue8.ai',
      replyTo: replyTo || undefined,
      subject: `${FORMS[form]} · ${who.slice(0, 80)}`,
      text,
      html,
    });
    if (process.env.MAIL_DRY_RUN) console.log(String((info as { message?: unknown }).message));
    return json(200, { ok: true });
  } catch (e) {
    const err = e as { code?: string; responseCode?: number; message?: string };
    console.error('contact mail error', err.code || '', err.responseCode || '', err.message); // no personal data
    return json(500, { ok: false, error: 'server_error' });
  }
}

export function GET() {
  return json(405, { ok: false, error: 'method_not_allowed' });
}
