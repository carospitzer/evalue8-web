import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For corporates — market and technology intelligence',
  description:
    'Which technology is actually worth your time? Technology scouting, vendor comparison, competitor intelligence and expert discovery for innovation, strategy and R&D teams.',
  alternates: { canonical: '/corporates' },
  openGraph: { title: 'For corporates — market and technology intelligence', description: 'Which technology is actually worth your time? Technology scouting, vendor comparison, competitor intelligence and expert discovery for innovation, strategy and R&D teams.', url: '/corporates' },
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">For innovation, strategy and R&amp;D teams</span>
            <h1 className="h1">Which technology is <span className="hi">actually worth your time?</span></h1>
            <p className="lede">Market intelligence for innovation, strategy and R&amp;D teams. Start with a strategic question and evalue8 works outward: which approaches exist, which technologies could solve it, which companies provide them, which experts understand the field — and which of them stand up to a closer look.</p>
            <div className="btns">
              <a className="btn" href="/get-access">Get access</a>
              <a className="btn ghost" href="/get-access">Bring us a question</a>
            </div>
            <p className="cap">No venture jargon required. Start from the problem you actually have.</p>
          </div>
          <div className="shot">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/scout</span></div>
            <div className="shot-clip"><img src="/img/ui-inno.webp" alt="Scout topic search filled with a detailed question about AI-based energy management for commercial and industrial buildings, with previous topic-led discovery runs alongside" /></div>
            <div className="shot-cap">A real topic search. Expected runtime 2–4 minutes, returning a ranked provider list.</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">The problem</span>
          <h2 className="h2 w rv">By the time it's obvious, the decision has already been made by default</h2>
          <div className="split top rv" style={{marginTop:'24px'}}>
            <p className="lede s">A supplier mentions a new process. A competitor announces something at a trade fair. A commissioned study arrives six months after the question was asked. The information was public the whole time — it was just spread across thousands of sources nobody had time to read.</p>
            <p className="lede s">And when a recommendation finally reaches leadership, it has to survive people who weren't in the room. Statements that can't be traced back to a source rarely do.</p>
          </div>
        </div>
      </section>

      <section className="sec sm alt">
        <div className="wrap">
          <div className="steps rv">
            <div><b>01 Understand</b><h4>What is changing?</h4><span>Structure a market and see who is actually in it.</span></div>
            <div><b>02 Discover</b><h4>Who can solve this?</h4><span>Approaches, technologies, companies and the experts behind them.</span></div>
            <div><b>03 Analyze</b><h4>Who is credible?</h4><span>The same criteria applied to every candidate, with sources.</span></div>
            <div><b>04 Decide</b><h4>Build, buy, partner or invest?</h4><span>A report your leadership can open and check.</span></div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <span className="eyebrow rv">The core workflow</span>
          <h2 className="h2 w rv">From a strategic question to a decision you can defend</h2>
          <p className="lede rv">You rarely know the name of the technology you need. You know the problem you have. evalue8 works outward from there — and every step is already a usable result.</p>
          <div className="split top rv" style={{marginTop:'34px'}}>
            <div className="chain">
              <div><span className="st">Problem</span><span className="bd"><b>The strategic question</b><span>A cost, an emission target, a capability gap, a customer requirement you can't meet yet.</span></span></div>
              <div><span className="st">Solutions</span><span className="bd"><b>Which approaches exist</b><span>The routes that could solve it, and what each of them assumes about your process.</span></span></div>
              <div><span className="st">Technologies</span><span className="bd"><b>What is actually behind them</b><span>The methods and materials in each route, and how mature they are today.</span></span></div>
              <div className="hl"><span className="st">Companies</span><span className="bd"><b>Who provides them</b><span>Established suppliers, spin-offs and startups in one structured, ranked list.</span></span></div>
              <div><span className="st">Experts</span><span className="bd"><b>Who understands the field</b><span>Researchers and engineers working on exactly this, found through People Scout with contact matching.</span></span></div>
              <div><span className="st">Analysis</span><span className="bd"><b>Which of them hold up</b><span>The shortlist compared on identical criteria, then a source-based report on the ones that matter.</span></span></div>
              <div><span className="st">Decision</span><span className="bd"><b>Build, buy, partner or invest</b><span>A recommendation your leadership can open, check and pass on.</span></span></div>
            </div>
            <div>
              <div className="shot">
                <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/scout</span></div>
                <div className="shot-clip tall"><img src="/img/ui-inno.webp" alt="Scout topic search filled with a detailed technology-partner question about AI-based energy management for commercial and industrial buildings" /></div>
                <div className="shot-cap">A real topic search. Expected runtime 2–4 minutes.</div>
              </div>
              <p className="q" style={{marginTop:'16px'}}><span className="ic"></span>Identify European startups specialising in AI-based energy management for commercial and industrial buildings — predictive control of heat pumps, PV, battery storage, charging infrastructure and HVAC — that we could integrate into customer projects to cut energy costs, peak loads and CO₂.</p>
              <p className="cap">Written the way an innovation manager actually asks. Scout can tighten the prompt and ask clarifying questions before it runs.</p>
            </div>
          </div>
          <div className="card mint rv" style={{marginTop:'26px'}}>
            <h3>A three-month scouting project starts as an afternoon</h3>
            <p>Scout doesn't replace the project. It moves the starting line — you begin with a structured, ranked supplier list and the experts behind it, instead of a blank page and a consultant's proposal.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split rev">
          <div>
            <span className="eyebrow rv">Comparison</span>
            <h2 className="h2 rv">Vendors compared against the same criteria</h2>
            <p className="lede s rv">Quick Research places every candidate in an identical structure in 10–30 seconds: what they offer, where they are, traction, team, competition, opportunities and risks. That is what makes a shortlist defensible instead of anecdotal.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Uniform profiles</b><span>Category, stage, customers, geography and business model in the same place every time.</span></div></li>
              <li><span className="d"></span><div><b>Maturity, honestly stated</b><span>Pilot line, first installations or series production — and what the evidence actually supports.</span></div></li>
              <li><span className="d"></span><div><b>Competitors named</b><span>Including the ones that solve the same problem with a different technology.</span></div></li>
              <li><span className="d"></span><div><b>Data gaps flagged</b><span>What could not be established is written down, not glossed over.</span></div></li>
            </ul>
          </div>
          <div className="shot rv">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
            <div className="shot-clip tall"><img src="/img/ui-cards.webp" alt="Two research result cards side by side showing category, stage, customer and geography for each company, plus an assessment summary" /></div>
            <div className="shot-cap">The same fields for every vendor — that is the whole point.</div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">Competitive picture</span>
          <h2 className="h2 w rv">Where the players actually sit — including the ones outside your category</h2>
          <div className="shot rv" style={{marginTop:'28px'}}>
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · strategic landscape</span></div>
            <div className="shot-clip tall"><img src="/img/ui-land.webp" alt="Competitive landscape map plotting providers by solution overlap against market presence, with a direct threat zone and per-company scores" /></div>
            <div className="shot-cap">Placed by solution overlap and market presence. The chart states its own method and calls itself a diligence prompt, not a benchmark.</div>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">The corporate difference</span>
          <h2 className="h2 w rv">A recommendation that survives the people who weren't in the room</h2>
          <p className="lede rv">Internal decisions are rarely lost on the analysis. They are lost when nobody can retrace it.</p>
          <div className="grid g3 rv" style={{marginTop:'34px'}}>
            <div className="card"><span className="n">Traceable</span><h3>Every statement has a source</h3><p>Open the evidence behind any line — in the meeting, not afterwards.</p></div>
            <div className="card"><span className="n">Shareable</span><h3>Pass the result on by link</h3><p>A colleague, a business unit or a steering committee reads the same report you did.</p></div>
            <div className="card"><span className="n">Checkable</span><h3>Claims tested against your own documents</h3><p>Release a vendor's material to it and evalue8 checks what the vendor claims against what the sources support.</p></div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <span className="eyebrow rv">What teams use it for</span>
          <h2 className="h2 w rv">Six questions it answers well</h2>
          <div className="grid g3 rv" style={{marginTop:'32px'}}>
            <div className="card"><h3>Market intelligence</h3><p>Structure a market, see who is in it, and keep the picture current.</p></div>
            <div className="card"><h3>Technology scouting</h3><p>From a problem to the approaches, technologies and companies behind it.</p></div>
            <div className="card"><h3>Competitor intelligence</h3><p>Patents, hiring, launches, partnerships and funding — tracked rather than googled.</p></div>
            <div className="card"><h3>Partner &amp; supplier scouting</h3><p>Compare candidates on substance before the first call.</p></div>
            <div className="card"><h3>Expert discovery</h3><p>Find the researchers and engineers working on exactly your problem.</p></div>
            <div className="card"><h3>Build, buy or partner</h3><p>See what already exists before you commit development budget to it.</p></div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">Who works with it</span>
          <h2 className="h2 w rv">You don't need an innovation lab to use this</h2>
          <div className="grid g3 rv" style={{marginTop:'30px'}}>
            <div className="card"><h4>Innovation &amp; strategy</h4><p>Watch the field, prepare decisions, brief leadership with something defensible.</p></div>
            <div className="card"><h4>R&amp;D and engineering</h4><p>Find approaches and prior art before committing development budget.</p></div>
            <div className="card"><h4>Corporate development &amp; M&amp;A</h4><p>Map a space you're new to and find the targets in it.</p></div>
            <div className="card"><h4>Technology purchasing</h4><p>Compare suppliers on substance rather than on sales decks.</p></div>
            <div className="card"><h4>Corporate venture</h4><p>Assess startups against your own roadmap, not a generic score.</p></div>
            <div className="card"><h4>Managing directors</h4><p>Get the overview you'd otherwise buy as a study — and keep it current.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">Fits your stack</span>
          <h2 className="h2 w rv">One more system to maintain? No.</h2>
          <p className="lede rv">Innovation teams already carry a portfolio of tools nobody fully uses. evalue8 can be the place you work — or the intelligence behind the place you already work.</p>
          <div className="grid g3 rv" style={{marginTop:'30px'}}>
            <div className="card"><span className="n">Interface</span><h4>Work in evalue8</h4><p>Scout, research and Cockpit in the browser, with projects shared across the team.</p></div>
            <div className="card"><span className="n">MCP &amp; API</span><h4>Work in your own tools</h4><p>Reach evalue8 research from the AI tools your team uses, or bring it into internal systems and automated workflows.</p></div>
            <div className="card"><span className="n">Integrations</span><h4>Google Drive · Attio</h4><p>Pull supplier documents straight from Drive into an analysis, and push results where your team tracks them.</p></div>
          </div>
          <div className="btns rv" style={{marginTop:'22px'}}><a className="tl" href="/platform">How the intelligence layer works</a></div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap split top">
          <div>
            <span className="eyebrow rv">Trust</span>
            <h2 className="h2 rv">What you research reveals your strategy</h2>
            <p className="lede s rv">Anyone searching for a specific process is telling the world about their roadmap. That is why your research stays inside your team — and why internal documents are only ever used once you release them.</p>
            <a className="tl rv" href="/trust">Security &amp; privacy overview</a>
          </div>
          <ul className="flist rv">
            <li><span className="d"></span><div><b>Internal documents only on release</b><span>Your own material is used only when you release it, with clear data separation.</span></div></li>
            <li><span className="d"></span><div><b>EU data sovereignty</b><span>European hosting and role-based access, designed in from the start.</span></div></li>
            <li><span className="d"></span><div><b>Auditable output</b><span>Every statement leads back to a source and an evidence grade.</span></div></li>
            <li><span className="d"></span><div><b>Model-agnostic</b><span>The right model per task — no dependency on a single provider.</span></div></li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap split top">
          <div>
            <h2 className="h2 rv">Bring us a question. We'll show you the answer.</h2>
            <p className="rv">Not a demo script — your actual scouting question, run through the product. If it's useful we'll talk. If it isn't, you still have the answer.</p>
          </div>
          <div className="rv">
            <form className="frm" data-form="cq" data-mail="carolina@evalue8.ai" data-subject="a scouting question">
              <div className="f"><label htmlFor="cq1">Your question</label><textarea id="cq1" name="question" required placeholder="How can we reduce energy consumption in industrial drying processes?"></textarea></div>
              <div className="f"><label htmlFor="cq2">Work email</label><input id="cq2" name="email" type="email" required placeholder="you@company.com" /></div>
              <button className="btn mint" type="submit">Send the question</button>
              <p className="ok-msg">Opening your mail app with the question ready to send. If nothing happened, write to <a className="tl" href="mailto:carolina@evalue8.ai">carolina@evalue8.ai</a>.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
