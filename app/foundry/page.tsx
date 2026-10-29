import type { Metadata } from 'next';
import './foundry.css';
import FoundryBehaviour from './FoundryBehaviour';

export const metadata: Metadata = {
  title: { absolute: 'Clean Tech Foundry — Kapital, das mitarbeitet' },
  description:
    'Clean Tech Foundry investiert 100–200 k€ in Pre-Seed- und Seed-Teams aus Climate Tech und Energie und arbeitet operativ mit, bis der Product-Market-Fit steht. Kein PMF? Anteile zurück für 1 €.',
  alternates: { canonical: '/foundry' },
  openGraph: {
    title: 'Clean Tech Foundry — Kapital, das mitarbeitet',
    description:
      'Pre-Seed & Seed · Climate & Energy Tech. Wir finanzieren euch und arbeiten im Team mit, bis der Product-Market-Fit steht.',
    url: '/foundry',
    locale: 'de_DE',
  },
};

const Check = () => (
  <svg className="cf-ck" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const Mark = () => (
  <svg className="cf-mark" viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#fff" />
    <path d="M9 8h13v4.6h-8.2v2.6h6.6v4.4h-6.6V25H9z" fill="var(--cf-p)" />
    <circle cx="22.5" cy="22.5" r="2.5" fill="var(--cf-p)" />
  </svg>
);

const PHASES = [
  { n: 1, t: 'Verstehen', q: 'Wer hat das Problem wirklich, und wie dringend?', b: ['Kundeninterviews', 'Markt validieren', 'Zielgruppe schärfen'] },
  { n: 2, t: 'Testen', q: 'Welches Angebot zieht, zu welchem Preis?', b: ['Geschäftsmodell testen', 'Produktangebot anpassen', 'Preise ausprobieren'] },
  { n: 3, t: 'Verkaufen', q: 'Die ersten Kunden gewinnen und halten.', b: ['Erste Verträge', 'Probleme beim Kunden lösen', 'Vertrieb aufbauen'] },
  { n: 4, t: 'Fundament', q: 'Die Basis für Wachstum und die nächste Runde.', b: ['Wiederholbare Prozesse', 'Team aufstellen', 'Anschlussfinanzierung'] },
];

const FOCUS = [
  ['Erzeugung', 'Erneuerbare Energien', 'Solar, Wind, Wärme und die Technik, die sie günstiger und schneller ins Netz bringt.'],
  ['Flexibilität', 'Speicher & Netze', 'Batterien, Lastmanagement und Software, die Angebot und Verbrauch zusammenbringt.'],
  ['Verbrauch', 'Gebäude & Effizienz', 'Wärmepumpen, Lüftung, Energiemanagement für Haushalte, Gewerbe und Kommunen.'],
  ['Mobilität', 'Laden & Elektrifizierung', 'Ladeinfrastruktur, Flotten und die Verbindung von Fahrzeug und Stromnetz.'],
  ['Industrie', 'Industrie & Prozesse', 'Dekarbonisierung von Produktion, Prozesswärme und Lieferketten im Mittelstand.'],
  ['Ressourcen', 'Kreislaufwirtschaft', 'Materialien, Recycling und Geschäftsmodelle, die Ressourcen länger im Umlauf halten.'],
];

const COMPARE: Array<[string, string, string, string, string]> = [
  ['Kapital', 'Meist ab Seed, größere Runden', 'Kleinere Tickets, privat', 'Finanziert eigene Ideen', '100–200 k€ ab Pre-Seed'],
  ['Mitarbeit', 'Beirat und Netzwerk', 'Punktuelle Beratung', 'Baut Firmen selbst', 'Mindestens eine Person arbeitet in eurem Team'],
  ['Erstes Ziel', 'Wachstum und Exit', 'Sehr unterschiedlich', 'Eigene Ventures starten', 'Product-Market-Fit mit eurem Team'],
  ['Wenn es nicht klappt', 'Anteile bleiben im Cap Table', 'Anteile bleiben im Cap Table', 'Venture wird eingestellt', 'Ihr kauft die Anteile für 1 € zurück'],
];

export default function FoundryPage() {
  return (
    <div className="ctf" lang="de">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        precedence="default"
      />

      <header className="cf-hdr" id="cf-hdr">
        <div className="cf-wrap cf-hdr-in">
          <a className="cf-logo" href="#top" aria-label="Clean Tech Foundry — nach oben"><Mark /><span>Clean Tech Foundry</span></a>
          <nav className="cf-nav" id="cf-nav" aria-label="Hauptnavigation">
            <a href="#ansatz">Ansatz</a>
            <a href="#fokus">Fokus</a>
            <a href="#gruender">Für Gründer</a>
            <a href="#team">Team</a>
            <a className="cf-pill" href="#investoren">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 7V5.2a3.5 3.5 0 017 0V7M3.5 7h9v6.5h-9z" fill="currentColor" /></svg>
              LP-Zugang
            </a>
          </nav>
          <button className="cf-burger" id="cf-burger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="cf-nav"><span></span><span></span></button>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="cf-hero">
          <div className="cf-wrap cf-hero-grid">
            <div>
              <p className="cf-eyebrow cf-on-p">Pre-Seed &amp; Seed · Climate &amp; Energy Tech · Pre-PMF</p>
              <h1 className="cf-h1">Kapital, das <span className="cf-ul">mitarbeitet.</span></h1>
              <p className="cf-lede">Clean Tech Foundry investiert in Pre-Seed- und Seed-Teams aus Climate Tech und Energie. Und wir steigen operativ ein: Wir arbeiten in eurem Team mit, bis der Product-Market-Fit steht.</p>
              <div className="cf-ctas">
                <a className="cf-btn cf-btn-w" href="#gruender">Als Team bewerben <span aria-hidden="true">→</span></a>
                <a className="cf-btn cf-btn-o" href="#investoren">Für Investoren</a>
              </div>
              <p className="cf-eyebrow cf-on-p cf-sm">Erfahrung aus</p>
              <div className="cf-chips">
                <span>sonnen</span><span>Tesla</span><span>Amazon</span><span>18+ Jahre High-Tech Gründerfonds</span><span>Gründer-Coaching</span>
              </div>
            </div>

            <div className="cf-panel" aria-label="So arbeitet die Foundry">
              <div className="cf-panel-top"><span>So arbeitet die Foundry</span><span id="cf-phase-count">Phase 1 von 4</span></div>
              <div className="cf-diagram">
                <span className="cf-node cf-n1">Kapital</span>
                <span className="cf-node cf-n2">Operatives Team</span>
                <span className="cf-node cf-n3">Climate-Tech-Wissen</span>
                <svg className="cf-lines" viewBox="0 0 400 300" aria-hidden="true">
                  <path d="M70 52 C 80 110, 140 130, 168 145" />
                  <path d="M330 52 C 320 110, 260 130, 232 145" />
                  <path d="M200 220 L 200 262" />
                </svg>
                <div className="cf-ring">
                  <svg viewBox="0 0 120 120" aria-hidden="true">
                    <circle cx="60" cy="60" r="52" className="cf-ring-bg" />
                    <circle cx="60" cy="60" r="52" className="cf-ring-fg" id="cf-ring-fg" />
                  </svg>
                  <div className="cf-ring-in">
                    <small id="cf-phase-n">Phase 1</small>
                    <b id="cf-phase-t">Verstehen</b>
                  </div>
                </div>
              </div>
              <p className="cf-panel-cap">Kapital, Menschen und Branchenwissen fließen in euer Startup. Gemeinsam gehen wir durch vier Phasen, bis der Product-Market-Fit steht.</p>
            </div>
          </div>
        </section>

        {/* ── Kennzahlen ── */}
        <section className="cf-stats">
          <div className="cf-wrap cf-stats-grid">
            <div><b>100–200 k€</b><span>Ticket pro Startup</span></div>
            <div><b>Pre-Seed &amp; Seed</b><span>Frühphase, vor dem Product-Market-Fit</span></div>
            <div><b>≥ 1 Person</b><span>arbeitet operativ in eurem Team mit</span></div>
            <div><b>1 €</b><span>Rückkauf der Anteile, wenn der PMF ausbleibt</span></div>
          </div>
        </section>

        {/* ── Warum ── */}
        <section className="cf-sec" id="ansatz">
          <div className="cf-wrap">
            <p className="cf-eyebrow">Warum es uns gibt</p>
            <h2 className="cf-h2">Kapital allein baut keinen Product-Market-Fit.</h2>
            <div className="cf-split">
              <p className="cf-big">Die meisten Climate-Tech-Startups scheitern nicht an der Technik. Sie scheitern daran, <em>die Kunden zu finden, die das Produkt jetzt brauchen</em> und dafür bezahlen.</p>
              <div className="cf-prose">
                <p>Ein klassischer VC gibt Geld, einen Beiratssitz und ein Netzwerk. In der frühen Phase fehlt aber oft etwas anderes: <b>Hände und Erfahrung</b>. Jemand, der mit euch Kundeninterviews führt, Angebote schreibt und den ersten Vertrieb aufbaut.</p>
                <p>Genau das machen wir. Clean Tech Foundry verbindet Venture Capital, die Nähe eines Business Angels und die Arbeitsweise eines Venture Builders. Wir finanzieren euch <b>und arbeiten im Unternehmen mit</b>. Nicht als Berater von außen, sondern im Team.</p>
                <p>Unser Ziel ist klar: Aus einer Technologie oder Idee wird ein Unternehmen mit zahlenden Kunden.</p>
              </div>
            </div>

            <div className="cf-table-wrap" role="region" aria-label="Vergleich mit anderen Finanzierungsformen" tabIndex={0}>
              <table className="cf-table">
                <thead>
                  <tr><th scope="col"><span className="cf-sr">Kriterium</span></th><th scope="col">Klassischer VC</th><th scope="col">Business Angel</th><th scope="col">Venture Builder</th><th scope="col" className="cf-hl">Clean Tech Foundry</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r[0]}><th scope="row">{r[0]}</th><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td className="cf-hl">{r[4]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Phasen ── */}
        <section className="cf-sec cf-pt0">
          <div className="cf-wrap">
            <p className="cf-eyebrow">So arbeiten wir</p>
            <h2 className="cf-h2">Vier Phasen bis zum Product-Market-Fit.</h2>
            <p className="cf-sub">Wir gehen diese Schritte gemeinsam mit euch. Wie lange jede Phase dauert, hängt vom Markt ab. Was zählt, ist das Ergebnis am Ende.</p>
            <ol className="cf-phases">
              {PHASES.map((p) => (
                <li key={p.n}>
                  <span className="cf-ph-n">Phase {p.n}</span>
                  <h3>{p.t}</h3>
                  <p>{p.q}</p>
                  <ul>{p.b.map((x) => <li key={x}>{x}</li>)}</ul>
                </li>
              ))}
            </ol>
            <div className="cf-goal">
              <span className="cf-goal-i"><Check /></span>
              <p>Ziel erreicht, wenn Kunden von selbst auf euch zukommen und sagen: Wir brauchen euer Produkt.</p>
            </div>
          </div>
        </section>

        {/* ── PMF-Definition ── */}
        <section className="cf-sec cf-purple">
          <div className="cf-wrap">
            <p className="cf-eyebrow cf-on-p">Unsere Definition von Product-Market-Fit</p>
            <h2 className="cf-h2 cf-xl">Product-Market-Fit heißt: Die Kunden kommen zu euch.</h2>
            <div className="cf-three">
              <div><h3>Keine Höflichkeits-Piloten</h3><p>Ein Pilot ohne Budget ist ein freundliches Nein. Wir zählen Kunden, die bezahlen.</p></div>
              <div><h3>Empfehlungen statt Kaltakquise</h3><p>Anfragen über Empfehlungen, nicht nur über Kaltakquise. Das ist das Signal.</p></div>
              <div><h3>Ein klarer Maßstab</h3><p>Die Kriterien für den PMF legen wir vor dem Investment gemeinsam mit euch fest.</p></div>
            </div>
          </div>
        </section>

        {/* ── Fairness-Klausel ── */}
        <section className="cf-sec">
          <div className="cf-wrap cf-fair">
            <div className="cf-coin"><b>1€</b><small>Rückkaufpreis</small></div>
            <div>
              <p className="cf-eyebrow">Fairness-Klausel</p>
              <h2 className="cf-h2">Kein PMF? Eure Anteile zurück für 1 €.</h2>
              <p className="cf-sub">Wir gehen mit euch ins Risiko. Wenn der Product-Market-Fit trotz gemeinsamer Arbeit ausbleibt, könnt ihr unsere Anteile für einen symbolischen Euro zurückkaufen. So startet ihr neu, ohne totes Kapital im Cap Table.</p>
              <ul className="cf-checks">
                <li><Check />Kriterien und Fristen stehen vorab im Vertrag</li>
                <li><Check />Ein sauberer Neustart statt jahrelanger Hängepartie</li>
                <li><Check />Unser Anreiz ist klar: Wir verdienen nur, wenn es funktioniert</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Fokus ── */}
        <section className="cf-sec cf-alt" id="fokus">
          <div className="cf-wrap">
            <p className="cf-eyebrow">Investmentfokus</p>
            <h2 className="cf-h2">Nur Climate Tech.<br />Nur Frühphase.</h2>
            <p className="cf-sub">Wir investieren ausschließlich in Startups, die die Energiewende und eine nachhaltige Wirtschaft voranbringen. Hardware, Software und alles dazwischen.</p>
            <div className="cf-focus">
              {FOCUS.map(([k, t, d]) => (
                <div key={t}><span className="cf-ph-n">{k}</span><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Für Gründer ── */}
        <section className="cf-sec" id="gruender">
          <div className="cf-wrap">
            <p className="cf-eyebrow">Für Gründerinnen und Gründer</p>
            <h2 className="cf-h2">Ihr habt die Technologie. Wir helfen, den Markt zu finden.</h2>
            <div className="cf-apply">
              <div>
                <h3 className="cf-h3">Wen wir suchen</h3>
                <ul className="cf-checks">
                  <li><Check />Teams in der Pre-Seed- oder Seed-Phase, noch vor dem Product-Market-Fit</li>
                  <li><Check />Eine Lösung mit klarem Beitrag zu Klima, Energie oder Ressourcen</li>
                  <li><Check />Gründer, die Hilfe im Alltag wollen, nicht nur Geld</li>
                  <li><Check />Offenheit, das Geschäftsmodell zu testen und anzupassen</li>
                </ul>
                <h3 className="cf-h3">Was ihr bekommt</h3>
                <ul className="cf-checks">
                  <li><Check />100–200 k€ Kapital für die frühe Phase</li>
                  <li><Check />Mindestens eine erfahrene Person, die operativ mitarbeitet</li>
                  <li><Check />Zugang zu Kunden, Partnern und Folgeinvestoren im Energiemarkt</li>
                  <li><Check />Die 1-€-Rückkaufoption, falls der PMF ausbleibt</li>
                </ul>
              </div>
              <div className="cf-card cf-form-card">
                <h3 className="cf-h3b">Jetzt bewerben</h3>
                <p className="cf-muted">Fünf Minuten reichen. Wir bewerten jede Bewerbung strukturiert und melden uns mit einer klaren Antwort.</p>
                <form className="cf-form" data-form="foundry-apply" data-mail="carolin@evalue8.ai" data-subject="Clean Tech Foundry — Bewerbung" data-lang="de"
                  data-ok="Danke, eure Bewerbung ist angekommen. Wir melden uns mit einer klaren Antwort.">
                  <div className="cf-row">
                    <div className="cf-f"><label htmlFor="fa-name">Dein Name</label><input id="fa-name" name="name" type="text" autoComplete="name" required /></div>
                    <div className="cf-f"><label htmlFor="fa-mail">E-Mail</label><input id="fa-mail" name="email" type="email" autoComplete="email" required /></div>
                  </div>
                  <div className="cf-row">
                    <div className="cf-f"><label htmlFor="fa-startup">Startup</label><input id="fa-startup" name="startup" type="text" autoComplete="organization" required /></div>
                    <div className="cf-f"><label htmlFor="fa-phase">Phase</label>
                      <select id="fa-phase" name="phase" defaultValue="Pre-Seed"><option>Pre-Seed</option><option>Seed</option><option>Noch vor der Gründung</option></select>
                    </div>
                  </div>
                  <div className="cf-f"><label htmlFor="fa-area">Bereich</label>
                    <select id="fa-area" name="area" defaultValue="Erneuerbare Energien">
                      {FOCUS.map(([, t]) => <option key={t}>{t}</option>)}
                      <option>Anderer Bereich</option>
                    </select>
                  </div>
                  <div className="cf-f"><label htmlFor="fa-problem">Welches Problem löst ihr, und für wen?</label><textarea id="fa-problem" name="problem" required placeholder="Zwei bis drei Sätze genügen."></textarea></div>
                  <div className="cf-f"><label htmlFor="fa-deck">Link zum Pitch Deck (optional)</label><input id="fa-deck" name="deck" type="url" placeholder="https://" /></div>
                  <input className="cf-hp" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <button className="cf-btn cf-btn-p" type="submit">Bewerbung absenden <span aria-hidden="true">→</span></button>
                  <p className="ok-msg cf-ok" aria-live="polite"></p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="cf-sec cf-pt0" id="team">
          <div className="cf-wrap">
            <p className="cf-eyebrow">Team</p>
            <h2 className="cf-h2">Investoren, die selbst gebaut haben.</h2>
            <p className="cf-sub">Wir kombinieren langjährige Erfahrung im Frühphasen-VC mit operativer Praxis aus der Energiebranche.</p>
            <div className="cf-team">
              <div className="cf-card"><span className="cf-badge">IN</span><span className="cf-ph-n">Investment</span><h3>18+ Jahre Frühphasen-VC</h3><p>Mehr als 18 Jahre als Investment Manager beim High-Tech Gründerfonds. Bewertung und Begleitung von Beteiligungen, Coaching von Gründerteams.</p></div>
              <div className="cf-card"><span className="cf-badge">OP</span><span className="cf-ph-n">Operations</span><h3>Praxis aus der Energiewende</h3><p>Operative Erfahrung bei sonnen, Tesla und Amazon. Produkt, Vertrieb und Markteintritt im Energiemarkt.</p></div>
              <div className="cf-card"><span className="cf-badge">EX</span><span className="cf-ph-n">Expertennetzwerk</span><h3>Spezialisten auf Abruf</h3><p>Fachleute für Technik, Regulierung und Vertrieb, die direkt mit den Gründerteams arbeiten.</p></div>
            </div>
            <a className="cf-powered" href="/home">
              <b>Powered by evalue8</b>
              <span>Jede Bewerbung durchläuft eine strukturierte Bewertung auf der Decision-Intelligence-Plattform evalue8. Das macht unsere Entscheidungen nachvollziehbar und schnell, für Gründer und für Investoren.</span>
            </a>
          </div>
        </section>

        {/* ── Für Investoren ── */}
        <section className="cf-sec cf-deep" id="investoren">
          <div className="cf-wrap">
            <p className="cf-eyebrow cf-on-p">Für Investoren</p>
            <h2 className="cf-h2">Solide Rendite. Echte Wirkung für die Energiewende.</h2>
            <p className="cf-sub cf-on-deep">Wir suchen Family Offices, Privatinvestoren und Impact-Investoren, die mit ihrem Kapital etwas Sinnvolles bewegen wollen und dabei auf eine realistische, wirtschaftlich attraktive Rendite setzen.</p>
            <div className="cf-four">
              <div><h3>Realistisch kalkuliert</h3><p>Wir versprechen keine Wunder-Multiples. Wir kommunizieren konservativ und liefern transparent.</p></div>
              <div><h3>Risiko aktiv gesteuert</h3><p>Weil wir im Team mitarbeiten, sehen wir früh, was funktioniert und was nicht.</p></div>
              <div><h3>Wirkung messbar</h3><p>Jede Beteiligung trägt nachweisbar zur Energiewende bei. Wir berichten darüber.</p></div>
              <div><h3>Digital und transparent</h3><p>Onboarding, Reporting und Dokumente laufen über eine eigene Investorenplattform.</p></div>
            </div>
            <div className="cf-lp">
              <div className="cf-locked" aria-label="LP-Bereich, nur für eingeladene Investoren">
                <div className="cf-blur" aria-hidden="true">
                  <div className="cf-blur-kpis"><i></i><i></i><i></i></div>
                  <div className="cf-blur-bars"><i style={{ height: '30%' }}></i><i style={{ height: '45%' }}></i><i style={{ height: '38%' }}></i><i style={{ height: '62%' }}></i><i style={{ height: '70%' }}></i><i style={{ height: '88%' }}></i></div>
                </div>
                <div className="cf-locked-in">
                  <span className="cf-lock"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 7V5.2a3.5 3.5 0 017 0V7M3.5 7h9v6.5h-9z" fill="currentColor" /></svg></span>
                  <h3>LP-Bereich</h3>
                  <p>Nur für eingeladene Investoren. Zugang nach persönlichem Gespräch.</p>
                  <div className="cf-tags"><span>Investmentthese</span><span>Fondsstruktur</span><span>Portfolio-Updates</span><span>Quartalsberichte</span><span>Datenraum</span></div>
                </div>
              </div>
              <div className="cf-card cf-form-card">
                <h3 className="cf-h3b">Zugang anfragen</h3>
                <p className="cf-muted">Wir melden uns persönlich und klären, ob unser Fonds zu euch passt.</p>
                <form className="cf-form" data-form="foundry-lp" data-mail="carolin@evalue8.ai" data-subject="Clean Tech Foundry — LP-Zugang" data-lang="de"
                  data-ok="Danke, deine Anfrage ist angekommen. Wir melden uns persönlich bei dir.">
                  <div className="cf-row">
                    <div className="cf-f"><label htmlFor="lp-name">Name</label><input id="lp-name" name="name" type="text" autoComplete="name" required /></div>
                    <div className="cf-f"><label htmlFor="lp-org">Organisation</label><input id="lp-org" name="org" type="text" autoComplete="organization" /></div>
                  </div>
                  <div className="cf-f"><label htmlFor="lp-mail">E-Mail</label><input id="lp-mail" name="email" type="email" autoComplete="email" required /></div>
                  <div className="cf-f"><label htmlFor="lp-type">Ich investiere als</label>
                    <select id="lp-type" name="type" defaultValue="Family Office"><option>Family Office</option><option>Privatinvestor:in</option><option>Impact-Investor</option><option>Institutioneller Investor</option><option>Sonstiges</option></select>
                  </div>
                  <label className="cf-consent" htmlFor="lp-pro"><input id="lp-pro" name="professional" type="checkbox" required /><span>Ich bestätige, dass ich als professioneller oder semiprofessioneller Anleger handle.</span></label>
                  <input className="cf-hp" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <button className="cf-btn cf-btn-p" type="submit">Zugang anfragen <span aria-hidden="true">→</span></button>
                  <p className="ok-msg cf-ok" aria-live="polite"></p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="cf-foot">
        <div className="cf-wrap">
          <div className="cf-foot-top">
            <p className="cf-foot-h">Gemeinsam bis zum Product-Market-Fit.</p>
            <nav aria-label="Fußzeile">
              <a href="#ansatz">Ansatz</a><a href="#fokus">Fokus</a><a href="#gruender">Bewerben</a><a href="#team">Team</a><a href="#investoren">Investoren</a><a href="/trust">Datenschutz</a><a href="/home">evalue8</a>
            </nav>
          </div>
          <div className="cf-foot-bot">
            <p><b>Clean Tech Foundry</b></p>
            <p>Diese Website dient der allgemeinen Information. Sie ist kein Angebot und keine Aufforderung zum Erwerb von Fondsanteilen. Informationen zu Fondsstruktur und Konditionen erhalten ausschließlich professionelle und semiprofessionelle Anleger nach individueller Prüfung.</p>
          </div>
        </div>
      </footer>

      <FoundryBehaviour />
    </div>
  );
}
