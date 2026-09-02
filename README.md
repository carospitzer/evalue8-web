# evalue8 — website

Marketing site for evalue8.ai. Next.js 16 (App Router, TypeScript), statically
prerendered, no database, no API keys, no environment variables.

---

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub, GitLab or Bitbucket).
   A git repo is already initialised here with one commit, so:

   ```bash
   git remote add origin git@github.com:<you>/evalue8-web.git
   git push -u origin main
   ```

2. Go to **vercel.com → Add New → Project** and import that repository.

3. Press **Deploy**. Vercel detects Next.js. The only optional variable is
   `NEXT_PUBLIC_BOOKING_URL` (see *Forms and the demo booking* below) — the site
   builds and works without it.

4. Add the domain under **Project → Settings → Domains**: `evalue8.ai` plus
   `www.evalue8.ai`, and let Vercel handle the redirect between them.

5. After the domain is live, change `BASE` in `app/sitemap.ts`, the
   `sitemap` URL in `app/robots.ts` and `metadataBase` in `app/layout.tsx` if
   you use anything other than `https://www.evalue8.ai`.

Local development:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

---

## What's in here

```
app/
  layout.tsx              html shell, fonts, metadata, Organization JSON-LD
  globals.css             the whole design system — tokens, components, breakpoints
  page.tsx                THE ENTRY PAGE — persona chooser, no header or footer
  (site)/layout.tsx       header, footer and client behaviour for every other page
  (site)/home/            the generic homepage
  (site)/investors/       persona landing page
  (site)/corporates/      persona landing page
  (site)/accelerators/    persona landing page
  (site)/founders/        persona landing page
  (site)/platform/        product overview
  (site)/pricing/  trust/  company/  get-access/  login/
  sitemap.ts  robots.ts  not-found.tsx
components/
  Header.tsx              nav, mega menus, persona bar, mobile sheet (markup)
  Footer.tsx              footer + mobile sticky CTA (markup)
  SiteBehaviour.tsx       all client-side behaviour for the chrome, in one place
  EntryBehaviour.tsx      the entry page only remembers the chosen persona
public/
  mark.png                logo mark used in the header and footer
  icon.png                favicon
  wordmark-light.png / wordmark-dark.png
  img/ui-*.webp           real product screenshots — Scout topic search and
                          People Scout, Quick Research with its verdicts,
                          Extended Research upload, claim validation, strategic
                          landscape, defensibility radar, inline feedback,
                          signals & risks, Cockpit
  img/tm-*.webp           team and advisor portraits, taken from the pitch deck
```

## Two dimensions the site has to teach

The information architecture separates **what evalue8 does** from **how you use it**,
and introduces them in that order so a visitor isn't asked to hold both at once.

- **What it does** — Discover → Understand → Analyze → Decide → Track. Shown on
  `/platform` as one connected workflow where each step hands its result to the
  next, and repeated per persona in their own vocabulary.
- **How you use it** — Interface, MCP, API, Integrations. One diagram
  (`.layer` in `globals.css`) appearing on `/home` and `/platform`: evalue8 as
  the operating system you work in, or as the intelligence layer behind the
  systems you already run on.

## The entry flow

`/` is **not** the homepage. It is a reduced, full-screen persona chooser with no
navigation: logo, "Who are you?", four cards, and a quiet "Explore evalue8 first"
link. Choosing a card goes to `/investors`, `/corporates`, `/accelerators` or
`/founders`; the quiet link goes to `/home`, which is the classic homepage
explaining the whole platform. From then on the normal navigation is present and
the visitor can move between all four freely — a persona context bar in the header
shows which view they are in and offers a way back to `/`.

The choice is remembered in `localStorage` only for that context bar. There is no
server-side personalisation, no cookie gate and no redirect: every page is a plain
static URL that can be linked, indexed and shared.

Every page is a plain server component holding its own markup. The only client
components are `SiteBehaviour.tsx`, which attaches all chrome behaviour on mount
(sticky header state, the dark-header treatment over a dark hero, mega menus,
mobile menu, scroll reveal, form handling, the persona context bar and the mobile
sticky CTA), and `EntryBehaviour.tsx`, which does nothing but remember the chosen
persona. Adding a page therefore needs no JavaScript at all — copy an existing
`page.tsx`, change the markup and the `metadata` export.

---

## Before this goes live

Where the numbers come from: the **runtimes on the site are the product's own**
(Scout 2–6 min depending on mode, Quick Research 10 s – 1 min, Extended Research
4–6 min) rather than the deck's slightly different figures, because the product
screens are the more concrete and more recent source. Module names, field names,
the traffic-light verdicts, claim validation, inline feedback, bulk mode and the
Google Drive upload are all read off the screenshots. The trust pillars, "10+
pilot partners in Europe" and the team come from the deck.

### What still needs you

Everything on the site is clickable and every link resolves — the build passes and
a full functional pass over all routes, anchors, redirects, images and mobile
breakpoints reports no problems. Six content decisions are still yours:

1. **MCP, API and Attio.** These come from your brief, not from the screenshots.
   `/platform` and `/home` present them as available today. Confirm what actually
   ships now versus what is planned, and move anything not live into a clearly
   labelled "coming" state — this is the fastest claim for a technical buyer to
   test. Google Drive is safe: it's visible in the Extended Research upload.
2. **Investor matching for founders** (`app/(site)/founders/page.tsx`, "Find your
   fit"). Investor *fit* and *fit concerns* clearly exist from the investor side,
   and People Scout finds people with contact matching. Whether a founder can
   search for matching funds today is still the one capability on the site I
   could not see in the material.
3. **`/trust`.** Name the actual hosting provider and region. The four pillars —
   auditable, validated, EU/GDPR, model-agnostic — come from your own deck and
   are safe; the provider is not stated anywhere yet.
4. **Sub-processor list and DPA.** Referenced on `/trust`, not written yet.
   Every enterprise security review asks for both.
5. **"3+ awards won"** on `/home` and `/company`. Your deck shows a Google logo
   next to it; the site deliberately does not, because a logo implies a
   relationship. Naming the awards would make the claim stronger.
6. **Ecosystem strip** on `/company`. Nine organisations are named as
   "programmes, communities and collaborations we have been part of" — deliberately
   not "customers" or "partners". Confirm each name is fair to use, and send the
   official logos when you have permission; the strip is built to swap text chips
   for a logo row without a layout change.

Also worth a look: the name. Your deck says **Carolin Spitzer / carolin@evalue8.ai**;
your brief says **Carolina / carolina@evalue8.ai**. The site uses Carolina
throughout, including the form destination and the contact block. If the deck is
right, one search-and-replace fixes it.

One thing was deliberately genericised: the real Scout query in your screenshots
names a specific company as the customer. `/corporates` keeps the query's shape
and detail but removes the name, because a customer name on a website needs that
customer's permission.

---

## Navigation

Every item in the Platform menu is a real destination. The four modules and the
three "how it works" entries are anchored sections on `/platform`:

| Menu item | URL |
|---|---|
| Scout / Find | `/platform#sec-scout` |
| Quick Research | `/platform#sec-quick` |
| Extended Research | `/platform#sec-extended` |
| Cockpit | `/platform#sec-cockpit` |
| Signal sources | `/platform#sec-sources` |
| Evidence & claim validation | `/platform#sec-evidence` |
| Integrations | `/platform#sec-integrations` |
| Trust & security | `/trust` (its own page) |

Anchored sections carry `scroll-margin-top: 96px` so they clear the sticky
header. A deep link with a hash reveals the page immediately and re-scrolls once
layout settles — without that, the reveal animation moves the target out from
under the browser's jump.

## Forms and the demo booking

Forms have a real production destination and need no service to work: on submit,
`SiteBehaviour.tsx` composes the message and opens the visitor's mail client
addressed to **carolina@evalue8.ai**. Nothing is silently dropped and no third
party is involved. Look for `form[data-form][data-mail]`; to move to a hosted
form or an API route later, replace that one block — the markup stays.

**Book a demo** on `/get-access` reads `NEXT_PUBLIC_BOOKING_URL`:

```bash
# .env.local, and the same variable in Vercel → Settings → Environment Variables
NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-handle/30min
```

Set it and the button opens your scheduling page in a new tab. Leave it unset and
the button falls back to the request form on the same page — so it is never a
dead end either way. `.env.example` documents this.

## Fonts

Loaded from Google Fonts via a `<link>` in `app/layout.tsx`. To self-host — one
fewer third-party request and no layout shift — swap in `next/font/google`:

```tsx
import { Plus_Jakarta_Sans } from 'next/font/google';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});
```

then put `className={sans.variable}` on `<html>` and delete the three `<link>`
tags plus the `--font-sans` line at the top of `globals.css`. It was left as a
`<link>` only because the build environment this was assembled in could not
reach fonts.googleapis.com.

## Design system

`app/globals.css` is the single source of truth. It is derived from two places:
the **product UI** (pale blue canvas, white cards, navy actions, mint accents,
soft 12–22px radii) and the **pitch deck** (near-black with a cyan wash, used for
narrative moments). The rule that keeps them coherent: **light surfaces are the
product, dark surfaces are the argument.**

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F6F8FC` | page ground — the app's canvas colour |
| `--surface` | `#FFFFFF` | cards, product frames |
| `--navy` | `#16233F` | primary buttons and active states, as in the app |
| `--mint` | `#14C8B8` | the app's accent — dots, toggles, CTAs on dark |
| `--teal` | `#0E8F88` | the accessible version for text and links on light |
| `--cyan` | `#12D6D6` | the logo cyan — dark surfaces only |
| `--dark` | `#07100F` | the deck's near-black, for hero and footer |
| `--line` | `#E6EBF3` | hairlines and card borders |

The site commits to one visual world and does not follow the OS dark-mode
setting — a brand site should look the same to everyone. Every colour is painted
explicitly, so nothing inherits from the browser.

Type is **Plus Jakarta Sans** throughout, in one family with real weight and
letter-spacing discipline, because the product uses a single geometric family
too. Small uppercase labels carry `.15em` tracking, matching the app's column
headers.

## Product screenshots

`public/img/ui-*.webp` are real screenshots of the running product, presented in
a browser frame with the URL shown. They are the only imagery on the site apart
from the team portraits — no stock photography, no abstract AI illustration.
Replace them as the UI changes; the frame markup (`.shot`) stays the same.

## Navigation

Internal links are plain `<a>` tags, so every navigation is a full page load
from Vercel's edge cache. If you want instant client-side transitions later,
swap them for `next/link` — the markup needs no other change.
