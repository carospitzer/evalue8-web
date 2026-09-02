import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The platform — Scout, Quick Research, Extended Research, Cockpit',
  description:
    'One engine, four jobs. Broad search, one standard of assessment and traceable sources — from an open question to a report you can circulate.',
  alternates: { canonical: '/platform' },
  openGraph: { title: 'The platform — Scout, Quick Research, Extended Research, Cockpit', description: 'One engine, four jobs. Broad search, one standard of assessment and traceable sources — from an open question to a report you can circulate.', url: '/platform' },
};

export default function Page() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap hero-c">
          <span className="eyebrow">The platform</span>
          <h1 className="h1">One workflow, <span className="hi">not five disconnected tools.</span></h1>
          <p className="lede">Find what matters, understand it fast, analyse what deserves it, manage it in one place and stay updated. Each step hands its result to the next — and you can reach the same intelligence from the tools you already use.</p>
          <div className="btns"><a className="btn mint" href="/get-access">Get access</a><a className="btn ghost" href="/founders">Founders — start free</a></div>
        </div>
      </section>

      <section className="sec sm">
        <div className="wrap">
          <div className="steps five rv">
            <div><b>01 Find</b><h4>Scout / Find</h4><span>Companies, founders, technologies, experts and markets.</span></div>
            <div><b>02 Understand</b><h4>Quick Research</h4><span>Every candidate placed in the same structure, and flagged.</span></div>
            <div><b>03 Analyze</b><h4>Extended Research</h4><span>Market, technology, competition, risk — with the evidence.</span></div>
            <div><b>04 Manage</b><h4>Cockpit</h4><span>One comparable view of everything you have looked at.</span></div>
            <div><b>05 Stay updated</b><h4>Watchlists</h4><span>Saved runs keep a topic or a company alive.</span></div>
          </div>
        </div>
      </section>

      <section className="sec alt" id="sec-scout">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">01 · Scout / Find</span>
            <h2 className="h2 rv">Describe the problem. Get the market.</h2>
            <p className="lede s rv">Scout maps a problem space rather than matching a keyword. Describe who pays, what breaks today and the category you are after — evalue8 can tighten that prompt and ask clarifying questions before it runs, then returns companies ranked for your mandate in two to six minutes.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Companies</b><span>By topic and problem space, or by starting from one you already know.</span></div></li>
              <li><span className="d"></span><div><b>Founders and experts</b><span>People Scout finds company people or topic experts, filtered by person type, geography and recent public signals — with contact matching.</span></div></li>
              <li><span className="d"></span><div><b>Technologies and markets</b><span>Approaches, methods and the players around them, not a category tag.</span></div></li>
              <li><span className="d"></span><div><b>Saved runs and watchlists</b><span>Keep a search alive and come back to what changed.</span></div></li>
            </ul>
          </div>
          <div className="rv">
            <div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/scout</span></div><div className="shot-clip tall"><img src="/img/ui-topic.webp" alt="Scout topic search with a populated query describing a buyer, workflow and solution area, and an option to improve the prompt before running" /></div><div className="shot-cap">A real topic search. Expected runtime 2–4 minutes.</div></div>
            <div style={{marginTop:'16px'}}><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/scout · people</span></div><div className="shot-clip short"><img src="/img/ui-people.webp" alt="People Scout: find founders and topic experts by topic, person type, geography and recent public signals, with contact matching" /></div><div className="shot-cap">People Scout — founders and experts by background.</div></div></div>
          </div>
        </div>
      </section>

      <section className="sec white" id="sec-quick">
        <div className="wrap split rev">
          <div>
            <span className="eyebrow rv">02 · Quick Research</span>
            <h2 className="h2 rv">Understand a company in under a minute</h2>
            <p className="lede s rv">Ten seconds to a minute per company: what they offer, who buys, where they are, what traction is visible, who competes, and what the upsides and risks look like. Each one comes back flagged, so a long list becomes a short one without anyone reading a hundred websites.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>The same fields every time</b><span>Category, stage, customer, geography, business model — comparable across the whole list.</span></div></li>
              <li><span className="d"></span><div><b>A verdict with its reasoning</b><span>Promising, unclear or off-scope, each with the sentence that explains the call.</span></div></li>
              <li><span className="d"></span><div><b>Data gaps named</b><span>What could not be established is written down rather than filled in.</span></div></li>
            </ul>
          </div>
          <div className="rv"><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div><div className="shot-clip tall"><img src="/img/ui-flags.webp" alt="Two Quick Research result cards, one flagged Promising and one flagged Unclear, each with category, stage, customer, geography and an assessment sentence" /></div><div className="shot-cap">Flagged, with the sentence that explains it.</div></div></div>
        </div>
      </section>

      <section className="sec" id="sec-extended">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">03 · Extended Research</span>
            <h2 className="h2 rv">A four-to-six-minute due diligence review</h2>
            <p className="lede s rv">Add a pitch deck, an application or a vendor document — from your machine or straight from Google Drive — and evalue8 validates the claims in it, maps the competitive landscape, surfaces the risks and returns the questions worth asking.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Strategic landscape</b><span>Competitors placed by solution overlap and market presence, including the ones outside your category.</span></div></li>
              <li><span className="d"></span><div><b>Signals &amp; risks</b><span>Positive signals and risk factors side by side, each traceable.</span></div></li>
              <li><span className="d"></span><div><b>Diligence priorities</b><span>Focus areas to reach a decision, each with the specific questions to ask.</span></div></li>
              <li><span className="d"></span><div><b>Defensibility radar</b><span>Differentiation, technology, market, team and moat — interpretive, signal-based, labelled as such.</span></div></li>
            </ul>
            <p className="cap rv">Up to five files, 25 MB each. Bulk mode runs a whole batch at once.</p>
          </div>
          <div className="rv"><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · new</span></div><div className="shot-clip tall"><img src="/img/ui-ext.webp" alt="Extended Research setup with startup name, website, application files uploaded from disk or Google Drive, and an optional context field" /></div><div className="shot-cap">Manual entry or bulk. From disk or Google Drive.</div></div></div>
        </div>
        <div className="wrap rv" style={{marginTop:'34px'}}><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · strategic landscape</span></div><div className="shot-clip tall"><img src="/img/ui-land.webp" alt="Competitive landscape map plotting companies by solution overlap against market presence, with a direct threat zone and per-company overlap, presence and traction scores" /></div><div className="shot-cap">We don&rsquo;t only analyse one company &mdash; we place it in the landscape around it. The chart states its own method and calls itself a diligence prompt, not a benchmark.</div></div></div>
      </section>

      <section className="sec alt" id="sec-evidence">
        <div className="wrap">
          <span className="eyebrow rv">Evidence &amp; claim validation</span>
          <h2 className="h2 w rv">Every assessment traces back to a source</h2>
          <p className="lede rv">This is what separates a research system from a chat window. A claim does not stand because the model wrote it — it stands because something else says so, and you can open that something.</p>
          <div className="steps rv" style={{marginTop:'32px'}}>
            <div><b>01 Claim</b><h4>A statement from a document or the market</h4><span>Taken out of the pitch deck, the vendor page or the application.</span></div>
            <div><b>02 Validation</b><h4>Checked against independent sources</h4><span>Supported, likely true, insufficient, likely false or contradicted.</span></div>
            <div><b>03 Evidence</b><h4>Graded, not just counted</h4><span>Evidence strength, identity confidence, official source and relevance.</span></div>
            <div><b>04 Source</b><h4>Openable</h4><span>The evidence trail lists what was used, so anyone can check the reasoning.</span></div>
          </div>
          <div className="rv" style={{marginTop:'26px'}}><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · claim validation</span></div><div className="shot-clip short"><img src="/img/ui-claims2.webp" alt="Claim validation summary showing supported, likely true, insufficient, likely false and contradicted counts out of fifteen claims, each with a link to details" /></div><div className="shot-cap">Fifteen claims from one pitch deck, sorted — and each one opens to its evidence.</div></div></div>
          <div className="split top rv" style={{marginTop:'34px'}}>
            <div>
              <h3>Argue with the report, in the report</h3>
              <p>Select any statement and ask the AI to explain the basis for it, or suggest a change. The chat can pull fresh web sources for that specific line, and there is a report-wide chat for broader questions.</p>
              <ul className="flist" style={{marginTop:'18px'}}>
                <li><span className="d"></span><div><b>Ask a question</b><span>"Where does this number come from?" — answered against the sources behind that sentence.</span></div></li>
                <li><span className="d"></span><div><b>Suggest change</b><span>Correct or sharpen a statement with what you know and the report does not.</span></div></li>
                <li><span className="d"></span><div><b>Human approval stays in the workflow</b><span>The analysis is a draft your team edits, not a verdict it has to accept.</span></div></li>
              </ul>
            </div>
            <div><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · inline feedback</span></div><div className="shot-clip short"><img src="/img/ui-inline.webp" alt="Inline feedback panel showing a selected claim from the report with options to ask a question or suggest a change" /></div></div>
              <div className="card mint" style={{marginTop:'16px'}}>
                <h4>What we do not claim</h4>
                <p>Not "AI you can trust". Everything comes from public sources and the documents you release; where the evidence is thin the output says so, and the scoring is interpretive and labelled that way on screen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec white" id="sec-cockpit">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">04 · Cockpit</span>
            <h2 className="h2 rv">Everything you have looked at, in one comparable view</h2>
            <p className="lede s rv">Not a folder of documents. Every run across speedy, quick and extended research in one searchable table — with notes, classification, a shareable public link and export to PDF, JSON or Excel.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Compare on the same fields</b><span>Because every company was analysed into the same structure.</span></div></li>
              <li><span className="d"></span><div><b>Classify and hand over</b><span>Mark where something stands, share a link, export the report into your own document.</span></div></li>
              <li><span className="d"></span><div><b>Stay updated</b><span>Watchlists and saved runs keep a market or a company alive between reviews.</span></div></li>
            </ul>
          </div>
          <div className="rv"><div className="shot"><div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/cockpit</span></div><div className="shot-clip tall"><img src="/img/ui-cockpit.webp" alt="Cockpit table of analysed companies with industry, stage, research type, notes, classification, public link and export controls" /></div></div></div>
        </div>
      </section>

      <section className="sec" id="sec-sources">
        <div className="wrap">
          <span className="eyebrow rv">Signal sources</span>
          <h2 className="h2 w rv">What evalue8 reads — and what it does not</h2>
          <div className="flowgrid rv" style={{marginTop:'40px'}}>
            <div className="flowcol">
              <div className="fnode"><b>Web &amp; vendor sites</b><span>Public product and company signals</span></div>
              <div className="fnode"><b>Registers &amp; tenders</b><span>Demand, references and market participants</span></div>
              <div className="fnode"><b>Studies, patents &amp; news</b><span>Technology maturity and market dynamics</span></div>
              <div className="fnode"><b>Your own documents</b><span>Only once you release them, with clear data separation</span></div>
            </div>
            <div className="fcore"><b>evalue8</b><em>Market intelligence</em><span>Multiple AI agents<br />Source grading<br />Claim checking</span></div>
            <div className="flowcol">
              <div className="fnode"><b>Market overview</b><span>Broad, structured vendor list</span></div>
              <div className="fnode"><b>Vendor comparison</b><span>Uniform profiles and criteria</span></div>
              <div className="fnode"><b>Risk assessment</b><span>Opportunities, risks and open questions</span></div>
              <div className="fnode"><b>Shareable report</b><span>Source-based and ready to circulate</span></div>
            </div>
          </div>
          <p className="cap rv" style={{maxWidth:'66ch'}}>It does not see inside companies. Revenue that is not public we will not invent — it appears as a data gap instead. <a className="tl" href="/trust">Security &amp; privacy overview</a></p>
        </div>
      </section>

      <section className="sec dark" id="sec-integrations">
        <div className="wrap">
          <span className="eyebrow rv">Integrations</span>
          <h2 className="h2 w rv">Your intelligence. Where you already work.</h2>
          <p className="lede rv">evalue8 should not become another isolated tool to maintain. Use it as your intelligence operating system — or connect the layer underneath it to the systems you already run on.</p>
          <div className="layer rv" style={{marginTop:'38px'}}>
            <div className="layer-top"><b>evalue8 intelligence</b><span>Structured · Validated · Sourced</span></div>
            <div className="layer-cols">
              <div className="lcol"><b>Interface</b><h4>Work in evalue8</h4><p>Scout, Quick and Extended Research and Cockpit in one place, with the whole pipeline comparable.</p><span className="via">app.evalue8.ai</span></div>
              <div className="lcol"><b>MCP</b><h4>Work in your AI tools</h4><p>Reach evalue8 research from the AI environment you already work in, without leaving it.</p><span className="via">Claude · Codex</span></div>
              <div className="lcol"><b>API</b><h4>Work in your own systems</h4><p>Bring evalue8 intelligence into internal tools, automations and custom workflows.</p><span className="via">REST API</span></div>
              <div className="lcol"><b>Direct integrations</b><h4>Work in the tools you have</h4><p>Pull documents in and push results out to the systems your team already uses.</p><span className="via">Google Drive · Attio</span></div>
            </div>
          </div>
          <div className="grid g2 rv" style={{marginTop:'24px'}}>
            <div className="card"><span className="n">Option A</span><h3>evalue8 as your operating system</h3><p>Run the whole intelligence workflow inside the platform — discovery, screening, analysis, pipeline and tracking in one view.</p></div>
            <div className="card"><span className="n">Option B</span><h3>evalue8 as your intelligence layer</h3><p>Keep the databases, CRM and tools you have, and bring evalue8 structured research into them.</p></div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">Who uses it</span>
          <h2 className="h2 w rv">Same engine, four workflows</h2>
          <div className="grid g4 rv" style={{marginTop:'30px'}}>
            <a className="card lc" href="/investors" data-persona="investor"><span className="n">Investors</span><h3>Source, screen, diligence</h3><p>Founder and company discovery, investor-fit screening, claim validation, IC-ready exports.</p><span className="tl" style={{marginTop:'12px'}}>For investors</span></a>
            <a className="card lc" href="/corporates" data-persona="corporate"><span className="n">Corporate Innovation</span><h3>Markets and technologies</h3><p>From a problem to approaches, technologies, providers and experts.</p><span className="tl" style={{marginTop:'12px'}}>For innovation teams</span></a>
            <a className="card lc" href="/accelerators" data-persona="accelerator"><span className="n">Accelerators</span><h3>Applications and pipeline</h3><p>Systematic research plus expert judgement, and scouting for what never applied.</p><span className="tl" style={{marginTop:'12px'}}>For programs</span></a>
            <a className="card lc" href="/founders" data-persona="founder"><span className="n">Founders</span><h3>Market, self, investors</h3><p>Understand your market, see yourself as investors will, find the ones that fit.</p><span className="tl" style={{marginTop:'12px'}}>For founders</span></a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap"><h2 className="h2 rv">See it on your own question.</h2><div className="btns rv"><a className="btn mint" href="/get-access">Get access</a><a className="btn ghost" href="/pricing">See pricing</a></div></div>
      </section>
    </>
  );
}
