import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For founders — run the analysis investors run',
  description:
    'Upload your deck and see which claims hold up against public sources, which competitors an investor will name, and what they will ask. Free to start.',
  alternates: { canonical: '/founders' },
  openGraph: { title: 'For founders — run the analysis investors run', description: 'Upload your deck and see which claims hold up against public sources, which competitors an investor will name, and what they will ask. Free to start.', url: '/founders' },
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">For founders — free to start</span>
            <h1 className="h1">Understand your market — <span className="hi">and how you look in it.</span></h1>
            <p className="lede">Map the companies, technologies and competitors around your idea. Then run the same analysis an investment team would run on your own deck — and find the investors that actually fit. Free to start.</p>
            <form className="inline-f" data-form="free">
              <input type="text" required placeholder="yourcompany.com" aria-label="Your company website" />
              <button className="btn mint" type="submit">Start for free</button>
            </form>
            <p className="ok-msg">In the product your analysis would start here — no account needed until you want to save it.</p>
            <p className="cap">Free runs to start. No card, no sales call. Add a deck for the deeper read, or run it on your website alone.</p>
          </div>
          <div className="shot">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
            <div className="shot-clip"><img src="/img/ui-sturesearch.webp" alt="Quick Research on a startup: category, stage, customer and geography, an assessment sentence and expandable sections for competitors, traction and risks" /></div>
            <div className="shot-cap">Your own company, placed the way an investment team would place it.</div>
          </div>
        </div>
      </section>

      <section className="sec sm alt">
        <div className="wrap">
          <div className="chain rv">
            <div><span className="st">01 Understand your market</span><span className="bd"><b>What market am I entering, and who is already there?</b><span>The landscape around your idea — companies, technologies, adjacent solutions and who already sits where.</span></span></div>
            <div><span className="st">02 Understand yourself</span><span className="bd"><b>How might an investor evaluate my company?</b><span>The analysis an investment team would run on you, including which of your claims hold up publicly.</span></span></div>
            <div className="hl"><span className="st">03 Find your investors</span><span className="bd"><b>Which funds actually fit my market, stage and technology?</b><span>Funds screened on market, technology, stage, geography, previous investments and focus.</span></span></div>
            <div><span className="st">04 Research them</span><span className="bd"><b>Who should I approach, and what have they backed?</b><span>Run the same research on a fund that they'd run on you — including the people worth reaching.</span></span></div>
            <div><span className="st">05 Prepare your approach</span><span className="bd"><b>Say something they have not read fifty times</b><span>Approach built on what the research actually found, not on "I saw you invested in X".</span></span></div>
            <div><span className="st">06 Optional</span><span className="bd"><b>Be found — only if you switch it on</b><span>You can choose to be surfaced to relevant investors. Off by default, opt-in, reversible.</span></span></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">Understand your market</span>
            <h2 className="h2 rv">Before you pitch a market, find out what's already in it</h2>
            <p className="lede s rv">Most first meetings go wrong on the same question: "who else is doing this?" Scout maps the space around your idea in a couple of minutes — the companies, the technologies, the adjacent solutions and the substitutes you might not think of as competitors.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>The landscape</b><span>Who is already selling into your problem space, and how established they are.</span></div></li>
              <li><span className="d"></span><div><b>The technologies</b><span>Which approaches exist to solve the same thing, including ones you didn't pick.</span></div></li>
              <li><span className="d"></span><div><b>Direct and indirect competition</b><span>Placed by solution overlap and market presence, not by category label.</span></div></li>
              <li><span className="d"></span><div><b>Where you sit</b><span>Your own position on that map — which is often not where you assumed.</span></div></li>
            </ul>
            <p className="cap rv">The same map an investor will build about you. Better to see it first.</p>
          </div>
          <div className="shot rv">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research · strategic landscape</span></div>
            <div className="shot-clip tall"><img src="/img/ui-land.webp" alt="Competitive landscape map placing companies by solution overlap against market presence, with a direct threat zone and per-company overlap and traction scores" /></div>
            <div className="shot-cap">Solution overlap on one axis, market presence on the other.</div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap split rev">
          <div>
            <span className="eyebrow rv">Understand yourself</span>
            <h2 className="h2 rv">The awkward questions, before someone else asks them</h2>
            <p className="lede s rv">Investors research you before they answer. They use the same public sources anyone can reach — and form an opinion from them. You can see that view first.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Your claims, checked</b><span>Each statement in your deck comes back supported, likely true, insufficient, likely false or contradicted — with the source attached.</span></div></li>
              <li><span className="d"></span><div><b>The competitors they'll name</b><span>Including the ones solving your problem with a different technology, which you may not be tracking.</span></div></li>
              <li><span className="d"></span><div><b>Where your moat actually reads as thin</b><span>Differentiation, technology, market, team and moat, each with the reasoning behind it.</span></div></li>
              <li><span className="d"></span><div><b>The questions you'll get</b><span>Diligence priorities, phrased as the questions an investor would put to you.</span></div></li>
              <li><span className="d"></span><div><b>What isn't visible yet</b><span>Traction you have but nobody outside can see is its own finding — and it's fixable.</span></div></li>
            </ul>
            <div className="card mint rv" style={{marginTop:'20px'}}>
              <h4>"Insufficient" is not a failing grade</h4>
              <p>At early stage most claims aren't publicly verifiable. What matters is knowing which ones — because those are exactly the slides an investor will push on.</p>
            </div>
          </div>
          <div className="shot rv">
            <div className="shot-bar"><div className="dots"><i></i><i></i><i></i></div><span className="url">app.evalue8.ai/research</span></div>
            <div className="shot-clip tall"><img src="/img/ui-risks.webp" alt="Signals and risks for a startup alongside diligence priorities, each with three suggested questions an investor would ask" /></div>
            <div className="shot-cap">Positive signals, risk factors, and the exact questions an investor would put to you.</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow rv">Find your fit</span>
            <h2 className="h2 rv">Not a list of a thousand funds. The ones that would take the call.</h2>
            <p className="lede s rv">Investor lists are easy to get and almost useless on their own. Fit is what's missing — and evalue8 already assesses it, because that is what the investor side of the product does.</p>
            <ul className="flist rv">
              <li><span className="d"></span><div><b>Market and technology</b><span>Funds that invest in your space — including ones that don't advertise your category but keep backing it.</span></div></li>
              <li><span className="d"></span><div><b>Stage and geography</b><span>Who writes cheques at your size, in your region, now.</span></div></li>
              <li><span className="d"></span><div><b>Previous investments and focus</b><span>What they've said they look for, and what they've actually done.</span></div></li>
              <li><span className="d"></span><div><b>The people</b><span>People Scout finds the partner who would own your deal, with contact matching.</span></div></li>
              <li><span className="d"></span><div><b>Fit concerns</b><span>The mismatch that would end the conversation in week three — named in week one.</span></div></li>
            </ul>
          </div>
          <div className="rv">
            <span className="eyebrow">Understand them</span>
            <h3>Know something real before the first email</h3>
            <p>"I saw you invested in X" is not research. Investors read fifty of those a week.</p>
            <p>Run the same analysis on a fund that they would run on you: what they've backed recently, how they describe their thesis, which partner covers your space, and where your company genuinely connects to it.</p>
            <p style={{fontWeight:'600',color:'var(--ink)'}}>One relevant email beats fifty generic ones — and takes less time in total.</p>
            <div className="card" style={{marginTop:'20px'}}>
              <span className="n">Prepare better</span>
              <h4>Walk in with the list</h4>
              <p>Take the diligence priorities from your own analysis into the meeting. Answering the hard question before it's asked is the single cheapest thing you can do for a round.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">Your data</span>
          <h2 className="h2 w rv">We also build for investors. So here is the answer to your first question.</h2>
          <div className="grid g4 rv" style={{marginTop:'30px'}}>
            <div className="card"><h4>Your analysis is yours</h4><p>We don't show it to investors and we don't sell it.</p></div>
            <div className="card"><h4>Signing up doesn't list you</h4><p>Using evalue8 doesn't put your company in front of anyone.</p></div>
            <div className="card"><h4>Your deck stays separated</h4><p>Documents you upload are used for your analysis, with clear data separation.</p></div>
            <div className="card"><h4>Delete it whenever</h4><p>And it's gone — the analysis and everything derived from it.</p></div>
          </div>
          <div className="card mint rv" style={{marginTop:'16px'}}>
            <span className="n">Optional</span>
            <h3>Want to be found? That's a switch you flip.</h3>
            <p>You can choose to be surfaced to relevant investors or included in a relevant newsletter. It is off unless you switch it on, you pick what is shared, and you can switch it off again. Nothing from your analysis reaches anyone automatically.</p>
          </div>
          <div className="btns rv" style={{marginTop:'22px'}}><a className="tl" href="/trust">Security &amp; privacy overview</a></div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">Pricing</span>
          <h2 className="h2 w rv">Start with your free runs. Unlock more one at a time.</h2>
          <p className="lede rv">The same analysis engine investors use in their diligence workflow — three depths, and you only pay when you go all the way down.</p>
          <div className="tw rv" style={{marginTop:'28px'}}>
            <table className="tbl">
              <thead><tr><th>Depth</th><th>What it does</th><th>What it costs</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Speedy</strong><br /><span className="tiny">web-only triage</span></td>
                  <td>Fast feedback from your website and public signals. No deck required — useful before you've written one.</td>
                  <td>Included in your free runs</td>
                </tr>
                <tr>
                  <td><strong>Quick</strong><br /><span className="tiny">deck-backed feedback</span></td>
                  <td>Adds pitch deck extraction and structured founder feedback: how your company reads, the competitors named, the questions raised.</td>
                  <td>Free run to start, then unlock more</td>
                </tr>
                <tr>
                  <td><strong>Deep</strong><br /><span className="tiny">full diligence pass</span></td>
                  <td>The complete research workflow — claim validation, strategic landscape, signals and risks, diligence priorities and readiness rating.</td>
                  <td>Paid, per run</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tiny rv" style={{marginTop:'14px'}}>Free runs are consumed when an analysis is queued. No subscription and no card to start, and whatever you run stays yours.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="h2 rv">See what an investor sees.</h2>
          <p className="lede rv">Takes a few minutes. No account until you want to keep the result.</p>
          <form className="inline-f rv" data-form="free2">
            <input type="text" required placeholder="yourcompany.com" aria-label="Your company website" />
            <button className="btn mint" type="submit">Start for free</button>
          </form>
          <p className="ok-msg">In the product your analysis would start here.</p>
        </div>
      </section>
    </>
  );
}
