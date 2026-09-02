import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For accelerators — application screening and scouting',
  description:
    'Every application reviewed the same way, with the claims in each deck checked against public sources. Then scout the startups that never applied.',
  alternates: { canonical: '/accelerators' },
  openGraph: { title: 'For accelerators — application screening and scouting', description: 'Every application reviewed the same way, with the claims in each deck checked against public sources. Then scout the startups that never applied.', url: '/accelerators' },
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">For accelerators, incubators and startup programs</span>
            <h1 className="h1">Every application gets the same review. <span className="hi">Your team gets its time back.</span></h1>
            <p className="lede">evalue8 reads every submitted deck, checks its claims against public sources, and flags each applicant green, amber or off-scope — with the reasoning attached. Your reviewers then correct, question and decide inside the same report. And it finds the startups that never applied.</p>
            <div className="btns">
              <a className="btn" href="/get-access">Run a pilot on your next batch</a>
              <a className="btn ghost" href="/platform">See how one application is analysed</a>
            </div>
            <p className="cap">Inbound and outbound in one workspace. The selection stays with your team.</p>
          </div>
          <div className="shot">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/cockpit</span></div>
            <div className="shot-clip tall"><img src="/img/ui-flags.webp" alt="Two applicants from the same batch analysed side by side, one flagged Promising and one flagged Unclear, each with category, stage, customer and an assessment sentence" /></div>
            <div className="shot-cap">Two applicants from one batch — flagged, with the sentence behind each call.</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">The problem</span>
          <h2 className="h2 w rv">Application 380 does not get the same attention as number 12</h2>
          <div className="split top rv" style={{marginTop:'24px'}}>
            <p className="lede s">Not because your team isn't careful. Because it is human, and the deadline is on Friday. Selection quality quietly becomes a function of reading order, writing skill, and who happened to be reviewing at 11pm.</p>
            <p className="lede s" style={{color:'var(--ink)',fontWeight:'500'}}>The startups that write well get in. The ones that build well sometimes don't.</p>
          </div>
        </div>
      </section>

      <section className="sec sm alt">
        <div className="wrap">
          <span className="eyebrow rv">The selection workflow</span>
          <div className="chain rv" style={{marginTop:'16px'}}>
            <div><span className="st">01 Application</span><span className="bd"><b>Decks and forms come in</b><span>Every applicant already gives you the document the analysis needs. Bulk mode takes the whole batch at once, from disk or Google Drive.</span></span></div>
            <div><span className="st">02 Research</span><span className="bd"><b>Automated, identical for everyone</b><span>What the company does beyond the pitch, the team, the market, the competition and what the form left out.</span></span></div>
            <div className="hl"><span className="st">03 Flagging</span><span className="bd"><b>Green, amber, off-scope</b><span>Each applicant flagged with the sentence that explains the call — and the sources behind it.</span></span></div>
            <div><span className="st">04 Expert input</span><span className="bd"><b>Your reviewers correct and question</b><span>Select any claim to ask where it came from or suggest a change. Notes and classification per applicant sit in Cockpit.</span></span></div>
            <div><span className="st">05 Combined view</span><span className="bd"><b>Systematic research plus human judgement</b><span>One record holding both — what the evidence says and what your jury thinks.</span></span></div>
            <div><span className="st">06 Shortlist</span><span className="bd"><b>The batch becomes a ranked few</b><span>Comparable on identical fields rather than on writing quality or reading order.</span></span></div>
            <div><span className="st">07 Decision</span><span className="bd"><b>People choose</b><span>evalue8 structures and enriches the decision. It never makes it.</span></span></div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">Claim validation</span>
            <h2 className="h2 rv">What the deck says, next to what the sources say</h2>
            <p className="lede s rv">This is the part built for you. Applicants hand you a pitch deck; evalue8 takes each claim in it and comes back with one of five verdicts — supported, likely true, insufficient, likely false or contradicted — each one openable down to its source.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Supported</b><span>Independently confirmed in public sources.</span></div></li>
              <li><span className="d"></span><div><b>Likely true</b><span>Consistent with the evidence, without direct confirmation.</span></div></li>
              <li><span className="d"></span><div><b>Insufficient</b><span>Not verifiable from public sources — the honest and most common verdict at early stage.</span></div></li>
              <li><span className="d"></span><div><b>Likely false / Contradicted</b><span>The sources point the other way. Worth a conversation, not an automatic rejection.</span></div></li>
            </ul>
            <div className="card mint rv" style={{marginTop:'20px'}}>
              <h4>Read it as a question list, not a verdict</h4>
              <p>"Insufficient" is not a red flag — at pre-seed it is the normal state. What it gives you is a precise list of what to ask in the interview.</p>
            </div>
          </div>
          <div className="shot rv">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
            <div className="shot-clip short"><img src="/img/ui-claims2.webp" alt="Claim validation summary: supported, likely true, insufficient, likely false and contradicted, each with a count out of fifteen" /></div>
            <div className="shot-cap">15 claims from one deck, sorted — each one openable down to its evidence.</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split rev">
          <div>
            <span className="eyebrow rv">Prioritising</span>
            <h2 className="h2 rv">Green, amber, off-scope — with the reasoning attached</h2>
            <p className="lede s rv">A number without an explanation is worse than no number. Every flag comes with the sentence behind it and the sources you can open, so a decision on an applicant can be explained to that applicant.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>What the company actually does</b><span>Beyond the pitch, in plain language.</span></div></li>
              <li><span className="d"></span><div><b>Team, market, technology, traction</b><span>Researched outside the application form.</span></div></li>
              <li><span className="d"></span><div><b>Signals and risks</b><span>Positive signals and risk factors side by side, each one sourced.</span></div></li>
              <li><span className="d"></span><div><b>Questions for the interview</b><span>Diligence priorities come with the specific questions to put to the founders.</span></div></li>
            </ul>
            <p className="rv" style={{fontWeight:'600',color:'var(--ink)',marginTop:'18px'}}>Every applicant gets the same depth of review — including the one submitted four minutes before the deadline.</p>
            <p className="cap rv">For publicly funded programs and university transfer offices, equal treatment isn't a nice-to-have — it's something you have to be able to demonstrate.</p>
          </div>
          <div className="rv">
            <div className="shot">
              <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
              <div className="shot-clip tall"><img src="/img/ui-flags.webp" alt="Two analysed applicants side by side, one flagged Promising and one flagged Unclear, each with category, stage, customer, geography and an assessment sentence" /></div>
              <div className="shot-cap">Two applicants from the same batch, flagged and explained.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">AI plus jury</span>
            <h2 className="h2 rv">The research is systematic. The judgement stays yours.</h2>
            <p className="lede s rv">A selection committee's value is exactly the thing an analysis can't produce: domain instinct, knowledge of the region, a sense of whether these two founders will still be talking in a year. evalue8 is built so that judgement lands in the same document as the evidence.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Question any claim</b><span>Select a sentence in the report and ask where it came from. The chat can pull fresh sources for that specific line.</span></div></li>
              <li><span className="d"></span><div><b>Suggest a change</b><span>A juror who knows something the public record doesn't can correct the report rather than argue with it in a meeting.</span></div></li>
              <li><span className="d"></span><div><b>Notes and classification per applicant</b><span>Kept in Cockpit next to the analysis, so the batch view shows both perspectives at once.</span></div></li>
              <li><span className="d"></span><div><b>Nothing is decided automatically</b><span>evalue8 does not reject anyone. It prepares the case; your committee closes it.</span></div></li>
            </ul>
            <p className="cap rv">Useful for accelerators, startup challenges, innovation competitions, corporate programs and selection committees — anywhere several people have to reach one defensible verdict.</p>
          </div>
          <div className="rv">
            <div className="shot">
              <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · inline feedback</span></div>
              <div className="shot-clip short"><img src="/img/ui-inline.webp" alt="Inline feedback panel showing a selected claim from the report with options to ask a question or suggest a change" /></div>
              <div className="shot-cap">A reviewer challenging one line of the analysis.</div>
            </div>
            <div className="grid rv" style={{gap:'12px',marginTop:'16px'}}>
              <div className="card" style={{borderLeft:'3px solid var(--green)'}}><h4>Green — worth a full review</h4><p>Strong fit with your criteria, claims that hold up, evidence found beyond the application.</p></div>
              <div className="card" style={{borderLeft:'3px solid var(--amber)'}}><h4>Amber — needs a human</h4><p>Promising, with open questions a person has to resolve. This is where your team's time belongs.</p></div>
              <div className="card" style={{borderLeft:'3px solid var(--red)'}}><h4>Off-scope</h4><p>Clearly outside your program's remit, with the reason written down so you can defend it.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">Outbound</span>
            <h2 className="h2 rv">The best startups in your field didn't apply</h2>
            <p className="lede s rv">Applications tell you who found you. They don't tell you who exists. Scout sweeps a field in three to six minutes and returns the companies and founders that match your program — including the ones with no website yet.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Scout by theme</b><span>The technologies and markets your program is built around.</span></div></li>
              <li><span className="d"></span><div><b>Scout by stage and region</b><span>Companies at the point where your program is genuinely useful.</span></div></li>
              <li><span className="d"></span><div><b>Scout by person</b><span>Researchers and operators who have just started, or are about to.</span></div></li>
              <li><span className="d"></span><div><b>Save the run</b><span>Keep the search and come back to what has changed before the next call opens.</span></div></li>
            </ul>
            <p className="rv" style={{fontWeight:'600',color:'var(--ink)',marginTop:'18px'}}>Fill the pipeline before the call for applications, not after it closes.</p>
          </div>
          <div className="rv">
            <p className="q"><span className="ic"></span>University spinoffs at Seed or Series A in our focus fields</p>
            <p className="q"><span className="ic"></span>Quantum startups headquartered in Europe with public research backing</p>
            <p className="q"><span className="ic"></span>Startups developing mounting systems for utility-scale solar</p>
            <p className="q"><span className="ic"></span>Founders who left a research institute in the last twelve months</p>
            <p className="cap">Real search patterns from the product. Saved runs keep a topic alive between cohorts.</p>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">The limit</span>
          <h2 className="h2 w rv">What evalue8 does not do</h2>
          <p className="lede rv">It does not select your cohort. It does not reject anyone. It does not hand you a number you'd have to defend without knowing where it came from.</p>
          <p className="lede rv" style={{color:'#fff',fontWeight:'500'}}>It removes the reading, not the judgement — so your team spends its time on the startups that deserve human attention. Human approval is part of the workflow by design, not a setting you switch on.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">Programs</span>
          <h2 className="h2 w rv">Built for anyone who runs a selection process</h2>
          <div className="grid g3 rv" style={{marginTop:'30px'}}>
            <div className="card"><h4>Accelerators &amp; incubators</h4><p>Batch screening plus proactive sourcing between cohorts.</p></div>
            <div className="card"><h4>Corporate programs</h4><p>Assess applicants against the parent company's strategic priorities.</p></div>
            <div className="card"><h4>Startup competitions</h4><p>Consistent, defensible review across hundreds of entries.</p></div>
            <div className="card"><h4>Public funding programs</h4><p>Equal treatment you can document, with the reasoning preserved.</p></div>
            <div className="card"><h4>University tech transfer</h4><p>Find the spin-offs forming inside your own institution's research.</p></div>
            <div className="card"><h4>Ecosystem organisations</h4><p>Map who is actually active in your region, not just who is registered.</p></div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap split top">
          <div>
            <span className="eyebrow rv">Trust</span>
            <h2 className="h2 rv">Applications contain other people's data</h2>
            <p className="lede s rv">You're processing material founders trusted you with. That shapes how it is handled.</p>
            <a className="tl rv" href="/trust">Security &amp; privacy overview</a>
          </div>
          <ul className="flist rv">
            <li><span className="d"></span><div><b>Documents used only on release</b><span>Applicant material is processed only for your review, with clear data separation.</span></div></li>
            <li><span className="d"></span><div><b>EU data sovereignty</b><span>European hosting and role-based access.</span></div></li>
            <li><span className="d"></span><div><b>A person decides</b><span>evalue8 prioritises attention. It does not make automated decisions about people.</span></div></li>
            <li><span className="d"></span><div><b>Everything traceable</b><span>Each verdict opens to the source behind it, so a rejected applicant's question has an answer.</span></div></li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap split top">
          <div>
            <h2 className="h2 rv">Try it on a batch you've already decided.</h2>
            <p className="rv">Send us your criteria and a previous cohort's applications. We'll run them and show you what a consistent review would have surfaced — including whether it agrees with the choices you made.</p>
          </div>
          <div className="rv">
            <form className="frm" data-form="pilot" data-mail="carolina@evalue8.ai" data-subject="accelerator pilot request">
              <div className="f"><label htmlFor="ab1">When does your next batch open?</label><input id="ab1" name="batch" type="text" required placeholder="e.g. March 2027" /></div>
              <div className="f"><label htmlFor="ab2">Applications expected</label><input id="ab2" name="volume" type="text" required placeholder="e.g. 300–500" /></div>
              <div className="f"><label htmlFor="ab3">Work email</label><input id="ab3" name="email" type="email" required placeholder="you@program.org" /></div>
              <button className="btn mint" type="submit">Request a pilot</button>
              <p className="ok-msg">Opening your mail app with the request ready to send. If nothing happened, write to <a className="tl" href="mailto:carolina@evalue8.ai">carolina@evalue8.ai</a>.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
