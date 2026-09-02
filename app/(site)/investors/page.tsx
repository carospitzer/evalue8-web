import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For investors — sourcing, screening and diligence',
  description:
    'Scout a hundred companies and diligence the three that matter. Founder discovery, investor-fit screening, claim validation and diligence priorities for VC, corporate venture, growth and private equity teams.',
  alternates: { canonical: '/investors' },
  openGraph: { title: 'For investors — sourcing, screening and diligence', description: 'Scout a hundred companies and diligence the three that matter. Founder discovery, investor-fit screening, claim validation and diligence priorities for VC, corporate venture, growth and private equity teams.', url: '/investors' },
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">For investment teams</span>
            <h1 className="h1">Scout a hundred companies. <span className="hi">Diligence the three that matter.</span></h1>
            <p className="lede">An intelligence operating system for the investment workflow: sourcing, screening, diligence and pipeline in one place, where each step hands its work to the next instead of sending you back to a blank search field.</p>
            <div className="btns">
              <a className="btn" href="/get-access">Get access</a>
              <a className="btn ghost" href="/platform">See a sample report</a>
            </div>
            <p className="cap">Sourcing, screening and diligence in one workspace. Your pipeline stays inside your team.</p>
          </div>
          <div className="shot">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/cockpit</span></div>
            <div className="shot-clip tall"><img src="/img/ui-result.webp" alt="A Scout result for one company showing company snapshot, at-a-glance scores, data gaps, why it matches, why it fits this investor, fit concerns and a quality check" /></div>
            <div className="shot-cap">Every result carries why it matches, why it fits <em>your</em> mandate, and where it does not.</div>
          </div>
        </div>
      </section>

      <section className="sec sm alt">
        <div className="wrap">
          <div className="steps rv">
            <div><b>01 Discover</b><h4>Who exists at all?</h4><span>Scout by thesis, technology or founder background — not by someone else's tags.</span></div>
            <div><b>02 Screen</b><h4>Worth a second look?</h4><span>Quick Research places every company in the same structure in under a minute.</span></div>
            <div><b>03 Analyze</b><h4>What speaks against it?</h4><span>Extended Research: landscape, defensibility, risks and the questions to ask.</span></div>
            <div><b>04 Decide</b><h4>What goes to IC?</h4><span>Compare, classify, export the report or hand it over by link.</span></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">The operating system</span>
          <h2 className="h2 w rv">Each step hands its work to the next</h2>
          <p className="lede rv">Most investment research is lost in the gaps between tools — a name found in one place, re-searched in another, pasted into a third, and stale by the time it reaches the memo. In evalue8 the output of each step is the input of the next.</p>
          <div className="chain rv" style={{marginTop:'32px'}}>
            <div><span className="st">Scout</span><span className="bd"><b>A thesis returns a ranked list</b><span>Companies and founders matching your mandate — carried forward as a list, not as a page of links to re-open.</span></span></div>
            <div><span className="st">Quick Research</span><span className="bd"><b>The list becomes a shortlist</b><span>Every name placed in the same structure and flagged, so the ranking is comparable rather than remembered.</span></span></div>
            <div className="hl"><span className="st">Extended Research</span><span className="bd"><b>The shortlist becomes a diligence pass</b><span>Claims from the deck validated, landscape mapped, risks and the questions for the first call written down.</span></span></div>
            <div><span className="st">Cockpit</span><span className="bd"><b>The diligence pass becomes a pipeline</b><span>Classified, searchable, exportable, shareable — the record of what you knew and when.</span></span></div>
            <div><span className="st">Watchlists</span><span className="bd"><b>The pipeline stays current</b><span>Saved runs and watchlists keep the thesis and the companies you passed on alive.</span></span></div>
          </div>
          <div className="rv" style={{marginTop:'26px'}}><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/cockpit</span></div><div className="shot-clip tall"><img src="/img/ui-cockpit.webp" alt="Cockpit table holding every analysed company with industry, stage, research type, run count, notes, classification, shareable link and export controls" /></div><div className="shot-cap">Everything in one place — because every step wrote into the same record.</div></div></div>
          <div className="card mint rv" style={{marginTop:'22px'}}>
            <h3>Less time maintaining information. More time with the people behind it.</h3>
            <p>No re-searching a name you already looked at, no copying between a database and a spreadsheet, no stale company summary in a memo. The time saved is not the point in itself — it is where it goes: forming a view, meeting founders, arguing the deal.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">01 — Discover</span>
            <h2 className="h2 rv">Sourcing that doesn't depend on who you happen to know</h2>
            <p className="lede s rv">Scout searches companies <em>and</em> people. Start from a company you like and find the ones like it, or start from a topic and let it sweep the market. A run takes three to six minutes and can surface up to a hundred companies at once — with the relevant people to contact.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Similar startup</b><span>Give it a name and a website — optionally a deck — and get the companies that actually resemble it.</span></div></li>
              <li><span className="d"></span><div><b>Topic search</b><span>Describe a thesis in your own words and let it sweep the field.</span></div></li>
              <li><span className="d"></span><div><b>People search</b><span>Find founders and operators by background, not by job title.</span></div></li>
              <li><span className="d"></span><div><b>Watchlists and saved runs</b><span>Keep a thesis running and come back to what has changed.</span></div></li>
            </ul>
          </div>
          <div className="rv">
            <div className="shot" style={{marginBottom:'16px'}}>
              <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/scout · people</span></div>
              <div className="shot-clip short"><img src="/img/ui-people.webp" alt="People Scout: find founders and topic experts by topic, person type, geography and recent public signals, with contact matching" /></div>
              <div className="shot-cap">People Scout — founders and experts by background, with contact matching.</div>
            </div>
            <p className="q"><span className="ic"></span>Latest YC batch founders with roots in the DACH region</p>
            <p className="q"><span className="ic"></span>University spinoffs at Seed or Series A in advanced materials</p>
            <p className="q"><span className="ic"></span>Pre-seed founders in green tech who incorporated this year</p>
            <p className="q"><span className="ic"></span>Quantum startups headquartered in Europe with public research backing</p>
            <p className="cap">Real search patterns from the product. Scout returns a structured list, not a page of links.</p>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap split rev">
          <div>
            <span className="eyebrow rv">02 — Screen</span>
            <h2 className="h2 rv">Every company placed the same way, in 10–30 seconds</h2>
            <p className="lede s rv">The problem with screening isn't speed. It's that the twentieth company of the week gets a different level of attention than the first. Quick Research gives each one the same structure — and tells you where it fits <em>your</em> mandate.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Company snapshot</b><span>What they build, stage, customers, geography, funding and size.</span></div></li>
              <li><span className="d"></span><div><b>Why it matches — and why it fits this investor</b><span>Scored against your thesis, stage and check size, not a generic ranking.</span></div></li>
              <li><span className="d"></span><div><b>Fit concerns</b><span>Named explicitly. A mismatch on model or round shape gets flagged before the call, not after it.</span></div></li>
              <li><span className="d"></span><div><b>Data gaps</b><span>What could not be established — stated, rather than filled in with something plausible.</span></div></li>
              <li><span className="d"></span><div><b>Quality check</b><span>Evidence, identity confidence, official source and relevance, each graded.</span></div></li>
            </ul>
          </div>
          <div className="shot rv">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
            <div className="shot-clip tall"><img src="/img/ui-flags.webp" alt="Two Quick Research cards from the same list, one flagged Promising and one flagged Unclear, each with category, stage, customer, geography and an assessment sentence" /></div>
            <div className="shot-cap">The same fields for every company, each one flagged with the sentence behind the call.</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">03 — Analyze</span>
            <h2 className="h2 rv">A first diligence pass that survives a partner meeting</h2>
            <p className="lede s rv">Extended Research takes five to ten minutes and assembles what an IC memo actually needs — with every claim linked back to where it came from.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Signals &amp; risks</b><span>Positive signals and risk factors side by side, each one sourced.</span></div></li>
              <li><span className="d"></span><div><b>Diligence priorities</b><span>Financial validation, customer traction, IP and tech moat — each with the specific questions to put to the founder.</span></div></li>
              <li><span className="d"></span><div><b>Strategic landscape</b><span>A competitive map positioned by solution overlap and market presence, including the competitors that don't share the category label.</span></div></li>
              <li><span className="d"></span><div><b>Defensibility radar</b><span>Differentiation, technology, market, team and moat — interpretive, signal-based, and labelled as such.</span></div></li>
              <li><span className="d"></span><div><b>Claim validation</b><span>Upload the deck and every claim in it comes back supported, likely true, insufficient, likely false or contradicted.</span></div></li>
            </ul>
          </div>
          <div className="rv">
            <div className="shot">
              <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
              <div className="shot-clip"><img src="/img/ui-risks.webp" alt="Signals and risks for a company alongside diligence priorities, each priority carrying three suggested questions to put to the founder" /></div>
              <div className="shot-cap">Signals, risks and the diligence priorities — each with the questions to ask.</div>
            </div>

          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">04 — Decide</span>
          <h2 className="h2 w rv">Research your partners can open, check and argue with</h2>
          <div className="grid g4 rv" style={{marginTop:'34px'}}>
            <div className="card"><span className="n">Compare</span><p>Companies side by side on the same fields — not on whoever wrote the better deck.</p></div>
            <div className="card"><span className="n">Classify</span><p>Mark where a company stands in your process and keep the whole pipeline in one view.</p></div>
            <div className="card"><span className="n">Share</span><p>A public link for the ones you want a colleague or a co-investor to read.</p></div>
            <div className="card"><span className="n">Export</span><p>PDF, JSON or Excel — light or complete — straight into your memo or your model.</p></div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">Fit</span>
          <h2 className="h2 w rv">Built for teams that have to be right, not just fast</h2>
          <div className="grid g4 rv" style={{marginTop:'32px'}}>
            <div className="card"><span className="n">VC</span><h3>Venture capital</h3><p>Thematic sourcing, screening at volume, first-pass diligence.</p></div>
            <div className="card"><span className="n">CVC</span><h3>Corporate venture</h3><p>Strategic fit and technology assessment against the parent's roadmap.</p></div>
            <div className="card"><span className="n">PE</span><h3>Growth &amp; private equity</h3><p>Landscape mapping, market structure, buy-and-build candidates.</p></div>
            <div className="card"><span className="n">DEBT</span><h3>Venture debt &amp; family offices</h3><p>Fast, consistent screening without a research team.</p></div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">Market intelligence</span>
            <h2 className="h2 rv">Not just "is this a good company?" but "what is the market around it?"</h2>
            <p className="lede s rv">A company only means something in its context. Extended Research places it against the competition by solution overlap and market presence — including the players that do not share its category label.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Direct and adjacent competitors</b><span>Grouped by what they technically do, with overlap, presence and traction scored per company.</span></div></li>
              <li><span className="d"></span><div><b>Alternative opportunities</b><span>The comparable companies you could back instead — so the choice is explicit rather than implicit.</span></div></li>
              <li><span className="d"></span><div><b>Market structure and positioning</b><span>Where value sits today, and which wedge this company is actually holding.</span></div></li>
              <li><span className="d"></span><div><b>Technologies underneath</b><span>The approaches in play, and how mature each one is.</span></div></li>
            </ul>
          </div>
          <div className="rv"><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · strategic landscape</span></div><div className="shot-clip tall"><img src="/img/ui-land.webp" alt="Competitive landscape map placing companies by solution overlap against market presence, with a direct threat zone and per-company overlap, presence and traction scores" /></div><div className="shot-cap">Placed by solution overlap and market presence. The chart states its own method.</div></div></div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <span className="eyebrow rv">Evidence</span>
          <h2 className="h2 w rv">You can trace why the system reached an assessment</h2>
          <p className="lede rv">The reason this can go into a memo is that none of it has to be taken on faith. Every claim in a deck is checked, graded and linked back.</p>
          <div className="steps rv" style={{marginTop:'30px'}}>
            <div><b>01 Claim</b><h4>From the deck</h4><span>Each statement the founder makes, pulled out individually.</span></div>
            <div><b>02 Validation</b><h4>Checked</h4><span>Supported, likely true, insufficient, likely false or contradicted.</span></div>
            <div><b>03 Evidence</b><h4>Graded</h4><span>Evidence strength, identity confidence, official source, relevance.</span></div>
            <div><b>04 Source</b><h4>Openable</h4><span>The evidence trail, so a partner can check it in the meeting.</span></div>
          </div>
          <div className="rv" style={{marginTop:'26px'}}><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · claim validation</span></div><div className="shot-clip short"><img src="/img/ui-claims2.webp" alt="Claim validation summary showing supported, likely true, insufficient, likely false and contradicted counts out of fifteen claims, each with a link to details" /></div><div className="shot-cap">Ten of fifteen claims here came back insufficient — not false, but unverifiable publicly. That is precisely the agenda for a first call.</div></div></div>
          <div className="btns rv" style={{marginTop:'22px'}}><a className="tl" href="/platform#sec-evidence">How evidence and claim validation work</a></div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">Two ways to run it</span>
          <h2 className="h2 w rv">Replace your stack — or keep it and add the intelligence</h2>
          <p className="lede rv">Most funds already have a CRM, a database subscription and a way of working. You don't have to give those up to get structured research.</p>
          <div className="grid g2 rv" style={{marginTop:'32px'}}>
            <div className="card">
              <span className="n">Option A</span>
              <h3>evalue8 as the operating system</h3>
              <p>Run the whole intelligence workflow inside the platform — sourcing, screening, diligence, pipeline and tracking in one comparable view, with the team working from the same record.</p>
            </div>
            <div className="card">
              <span className="n">Option B</span>
              <h3>evalue8 as the intelligence layer</h3>
              <p>Keep the databases, CRM and tools you have. Reach evalue8 research through <strong>MCP</strong> inside Claude or Codex, through the <strong>API</strong> in your own systems and automations, or through direct integrations with <strong>Google Drive</strong> and <strong>Attio</strong>.</p>
            </div>
          </div>
          <p className="cap rv">Either way it's the same structured, validated, source-linked intelligence underneath.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split top">
          <div>
            <span className="eyebrow rv">Trust</span>
            <h2 className="h2 rv">Your pipeline stays yours</h2>
            <p className="lede s rv">What a fund researches is a signal in itself. It doesn't leave your team.</p>
            <a className="tl rv" href="/trust">Security &amp; privacy overview</a>
          </div>
          <ul className="flist rv">
            <li><span className="d"></span><div><b>Auditable by design</b><span>Every statement leads back to a source, an evidence grade and its uncertainty.</span></div></li>
            <li><span className="d"></span><div><b>Validated, not just generated</b><span>Claim checks, cross-checks, bias controls and human approvals are part of the workflow.</span></div></li>
            <li><span className="d"></span><div><b>EU data sovereignty</b><span>European hosting, role-based access and clear data separation.</span></div></li>
            <li><span className="d"></span><div><b>Model-agnostic</b><span>The right model per task, with no lock-in to a single provider.</span></div></li>
          </ul>
        </div>
      </section>

      <section className="sec sm alt">
        <div className="wrap" style={{maxWidth:'820px'}}>
          <span className="eyebrow rv">Questions we get</span>
          <div className="faq rv" style={{marginTop:'18px'}}>
            <details><summary>Does this replace our data provider?</summary><div className="a">No. A database tells you a company exists. evalue8 tells you what it is, how it compares, and whether it's worth your time. Most teams run both.</div></details>
            <details><summary>How do we know the analysis is right?</summary><div className="a">You don't have to take it on trust. Every statement links to its source with an evidence grade, and where the evidence is thin the output says so instead of filling the gap.</div></details>
            <details><summary>Does it decide for us?</summary><div className="a">No. It removes the reading, not the judgement. Human approval is part of the workflow by design.</div></details>
            <details><summary>Can we use it on our portfolio, not just on new deals?</summary><div className="a">Yes — the same analysis works on companies you already hold and on their competitors.</div></details>
            <details><summary>What does it cost?</summary><div className="a">Per seat, with an allowance for deep runs. Pilots typically run about six months before moving to an annual contract.</div></details>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="h2 rv">Bring us a company from your pipeline.</h2>
          <p className="lede rv">We'd rather run Scout and Extended Research on a live deal than walk you through a demo script. You keep whatever it produces.</p>
          <div className="btns rv"><a className="btn mint" href="/get-access">Get access</a><a className="btn ghost" href="/platform">See the platform</a></div>
        </div>
      </section>
    </>
  );
}
