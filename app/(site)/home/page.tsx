import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market intelligence for companies, technologies and markets',
  description:
    'From an open question to a decision you can defend. Scout up to a hundred companies in minutes, rank them in seconds, and back the shortlist with a source-linked report.',
  alternates: { canonical: '/home' },
  openGraph: { title: 'Market intelligence for companies, technologies and markets', description: 'From an open question to a decision you can defend. Scout up to a hundred companies in minutes, rank them in seconds, and back the shortlist with a source-linked report.', url: '/home' },
};

export default function Page() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Scout. Evaluate. Decide.</span>
            <h1 className="h1">From an open question to <span className="hi">a decision you can defend.</span></h1>
            <p className="lede">evalue8 opens up markets, vendors and technologies — structured, comparable and source-based. Scout up to a hundred companies in minutes, rank them in seconds, and back the shortlist with a report that links every claim to where it came from.</p>
            <div className="btns">
              <a className="btn mint" href="/get-access">Get access</a>
              <a className="btn ghost" href="/platform">See how it works</a>
            </div>
            <p className="cap">Built in Munich. European data sovereignty from the start.</p>
          </div>
          <div>
            <div className="shot">
              <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/scout</span></div>
              <div className="shot-clip"><img src="/img/ui-scout.webp" alt="The evalue8 Scout screen: search companies or people by similar startup or topic, with saved runs listed alongside" /></div>
              <div className="shot-cap">Scout — search by company, topic, technology or market signal. Expected runtime 3–6 minutes.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sm">
        <div className="wrap">
          <div className="proof rv">
            <div><div className="k">10+</div><div className="v">pilot partners in Europe</div></div>
            <div><div className="k">3+</div><div className="v">awards won</div></div>
            <div><div className="k">Munich</div><div className="v">supported by UnternehmerTUM, AI&nbsp;Nation and TUM AI E-Lab</div></div>
            <div><div className="k">EU</div><div className="v">data sovereignty, role-based access, clear data separation</div></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">The problem</span>
          <h2 className="h2 w rv">The next advantage isn't more data. It's better, faster, defensible decisions.</h2>
          <div className="grid g3 rv" style={{marginTop:'38px'}}>
            <div className="card">
              <span className="n">Fragmented research</span>
              <h3>Search engines, single lists and market databases give you results nobody can retrace.</h3>
              <p style={{marginTop:'12px',color:'var(--teal)',fontWeight:'600'}}>evalue8 explores a market systematically and compares vendors against the same criteria.</p>
            </div>
            <div className="card">
              <span className="n">Checking companies</span>
              <h3>Product, company and market risks get researched in several separate steps.</h3>
              <p style={{marginTop:'12px',color:'var(--teal)',fontWeight:'600'}}>One analysis places a company instantly: relevance, offering, traction, team, competition, opportunities and risks.</p>
            </div>
            <div className="card">
              <span className="n">Politically sensitive decisions</span>
              <h3>Statements and alternatives are only partly verifiable — and hard to share internally.</h3>
              <p style={{marginTop:'12px',color:'var(--teal)',fontWeight:'600'}}>Check statements against sources and released documents, then pass the result on by link.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">The engine</span>
          <h2 className="h2 w rv">Three stages. Each one useful on its own.</h2>
          <p className="lede rv">You don't have to run the whole thing. Every stage produces a result you can use, and leads deeper only if the decision needs it.</p>
          <div className="stages rv" style={{marginTop:'36px'}}>
            <div className="stage">
              <div className="n">01</div>
              <h3>Scout</h3>
              <div className="t">2–6 minutes</div>
              <div className="hr"></div>
              <p><strong>Broad market sweep.</strong> Search by problem, technology, product or vendor — or by person.</p>
              <p>Returns companies ranked for your mandate, plus the people worth talking to.</p>
              <div className="out">Structured vendor list</div>
            </div>
            <div className="stage mid">
              <div className="n">02</div>
              <h3>Quick Research</h3>
              <div className="t">10 seconds to 1 minute</div>
              <div className="hr"></div>
              <p><strong>Fast assessment.</strong> Offering, customers, geography, traction, competition, upsides and risks.</p>
              <p>Flags each company as promising, unclear or off-scope, with the reasoning attached.</p>
              <div className="out">Relevance profile</div>
            </div>
            <div className="stage">
              <div className="n">03</div>
              <h3>Extended Research</h3>
              <div className="t">4–6 minutes</div>
              <div className="hr"></div>
              <p><strong>Due diligence review.</strong> Validates claims, surfaces key questions and names the areas needing further analysis.</p>
              <p>Ends in an overall readiness rating you can challenge line by line.</p>
              <div className="out">Verifiable report</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <span className="eyebrow rv">Inside the product</span>
          <h2 className="h2 w rv">What you actually get back</h2>
          <div className="split top rv" style={{marginTop:'34px'}}>
            <div>
              <h3>Every run in one place</h3>
              <p>Cockpit tracks each analysis across Speedy, Quick and Extended research — with notes, classification, a shareable public link and export to PDF, JSON or Excel.</p>
              <ul className="flist" style={{marginTop:'22px'}}>
                <li><span className="d"></span><div><b>Compare on the same fields</b><span>Every company is analysed into the same structure, so a shortlist is actually comparable.</span></div></li>
                <li><span className="d"></span><div><b>Classify and hand over</b><span>Mark a company, share a link internally, export the report into your own document.</span></div></li>
                <li><span className="d"></span><div><b>Watchlists and saved runs</b><span>Keep a topic, a market or a set of vendors and come back to it.</span></div></li>
              </ul>
            </div>
            <div className="shot">
              <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/cockpit</span></div>
              <div className="shot-clip tall"><img src="/img/ui-cockpit.webp" alt="The evalue8 Cockpit: a table of analysed companies with industry, stage, research type, notes, classifier, public link and export controls" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec white" style={{paddingTop:'0'}}>
        <div className="wrap">
          <div className="split top rev rv">
            <div>
              <h3>Analysis you can challenge</h3>
              <p>Extended Research produces the parts a decision actually needs: a competitive landscape, an interpretive defensibility read across five dimensions, diligence priorities with suggested questions, and a claim validation pass over the document you uploaded.</p>
              <ul className="flist" style={{marginTop:'22px'}}>
                <li><span className="d"></span><div><b>Defensibility radar</b><span>Differentiation, technology, market, team and moat — each marked signal-based, with a confidence level.</span></div></li>
                <li><span className="d"></span><div><b>Claim validation</b><span>Every claim in a deck sorted into supported, likely true, insufficient, likely false or contradicted.</span></div></li>
                <li><span className="d"></span><div><b>Evidence trail</b><span>Open the sources behind any statement.</span></div></li>
              </ul>
              <p className="cap">The radar is an interpretive scoring aid, not a measured benchmark — the product says so on the screen.</p>
            </div>
            <div className="shot">
              <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
              <div className="shot-clip tall"><img src="/img/ui-radar.webp" alt="The Defensibility Radar in evalue8: a five-dimension radar chart alongside scored dimensions for differentiation, technology, market, team and moat" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">The intelligence flow</span>
          <h2 className="h2 w rv">Broad search, one standard of assessment, traceable sources.</h2>
          <div className="flowgrid rv" style={{marginTop:'44px'}}>
            <div className="flowcol">
              <div className="fnode"><b>Web &amp; vendor sites</b><span>Public product and company signals</span></div>
              <div className="fnode"><b>Registers &amp; tenders</b><span>Demand, references and market participants</span></div>
              <div className="fnode"><b>Studies, patents &amp; news</b><span>Technology maturity and market dynamics</span></div>
              <div className="fnode"><b>Your own documents</b><span>Only once you release them, with clear data separation</span></div>
            </div>
            <div className="fcore">
              <b>evalue8</b>
              <em>Market intelligence</em>
              <span>Multiple AI agents<br />Source grading<br />Claim checking</span>
            </div>
            <div className="flowcol">
              <div className="fnode"><b>Market overview</b><span>Broad, structured vendor list</span></div>
              <div className="fnode"><b>Vendor comparison</b><span>Uniform profiles and criteria</span></div>
              <div className="fnode"><b>Risk assessment</b><span>Opportunities, risks and open questions</span></div>
              <div className="fnode"><b>Shareable report</b><span>Source-based and ready to circulate</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">The difference</span>
          <h2 className="h2 w rv">Built for trust, not just for speed.</h2>
          <p className="lede rv">Decision-grade material for specialist teams, leadership and the committees they have to convince.</p>
          <div className="grid g4 rv" style={{marginTop:'36px'}}>
            <div className="card"><span className="n">Auditable</span><p>Every statement leads back to a source, an evidence grade and its uncertainty. Conclusions stay traceable.</p></div>
            <div className="card"><span className="n">Validated</span><p>Claim checks, cross-checks, bias controls and human approvals are part of the workflow.</p></div>
            <div className="card"><span className="n">EU / GDPR</span><p>European data sovereignty, role-based access and clear data separation, designed in from the start.</p></div>
            <div className="card"><span className="n">Model-agnostic</span><p>The right model and data service for each task — without locking you to one provider.</p></div>
          </div>
          <div className="btns rv" style={{marginTop:'26px'}}><a className="tl" href="/trust">Security &amp; privacy overview</a></div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">One intelligence layer</span>
          <h2 className="h2 w rv">Use evalue8 as your operating system — or bring evalue8 into yours.</h2>
          <p className="lede rv">The value is not the interface. It is the structured, validated, source-linked intelligence underneath it — reachable from wherever you already work.</p>
          <div className="grid g4 rv" style={{marginTop:'34px'}}>
            <div className="card"><span className="n">Interface</span><h4>app.evalue8.ai</h4><p>Scout, research and Cockpit in one place.</p></div>
            <div className="card"><span className="n">MCP</span><h4>Claude · Codex</h4><p>Reach evalue8 research inside the AI tools you already use.</p></div>
            <div className="card"><span className="n">API</span><h4>Your own systems</h4><p>Internal tools, automations and custom workflows.</p></div>
            <div className="card"><span className="n">Integrations</span><h4>Google Drive · Attio</h4><p>Documents in, results out, where your team works.</p></div>
          </div>
          <div className="btns rv" style={{marginTop:'24px'}}><a className="tl" href="/platform#sec-integrations">How the integrations work</a></div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">One platform, four jobs</span>
          <h2 className="h2 w rv">The same engine. Four very different decisions.</h2>
          <div className="grid g4 rv" style={{marginTop:'34px'}}>
            <a className="card lc" href="/investors" data-persona="investor"><span className="n">Investors</span><h3>Source, screen and diligence deals</h3><p>Founder discovery, consistent screening, investor-fit and diligence priorities.</p><span className="tl" style={{marginTop:'14px'}}>For investors</span></a>
            <a className="card lc" href="/corporates" data-persona="corporate"><span className="n">Corporates</span><h3>Watch markets, technologies and vendors</h3><p>From a problem to approaches, technologies, companies and the experts behind them.</p><span className="tl" style={{marginTop:'14px'}}>For innovation teams</span></a>
            <a className="card lc" href="/accelerators" data-persona="accelerator"><span className="n">Accelerators</span><h3>Screen applications, fill the pipeline</h3><p>Validate the claims in every deck, rank who deserves a human look, scout what never applied.</p><span className="tl" style={{marginTop:'14px'}}>For programs</span></a>
            <a className="card lc" href="/founders" data-persona="founder"><span className="n">Founders</span><h3>See yourself as investors will</h3><p>Run the analysis on your own deck, then find the investors that actually fit. Free to start.</p><span className="tl" style={{marginTop:'14px'}}>For founders</span></a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="h2 rv">Bring us a question you're actually working on.</h2>
          <p className="lede rv">We'd rather run evalue8 on your real market, deal or batch than show you a demo script. Thirty minutes, and you keep whatever it produces.</p>
          <div className="btns rv"><a className="btn mint" href="/get-access">Get access</a><a className="btn ghost" href="/founders">Founders — start free</a></div>
        </div>
      </section>
    </>
  );
}
