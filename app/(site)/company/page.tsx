import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company & team',
  description:
    'A small team building serious infrastructure in Munich. The next advantage is not more data — it is better decisions.',
  alternates: { canonical: '/company' },
  openGraph: { title: 'Company & team', description: 'A small team building serious infrastructure in Munich. The next advantage is not more data — it is better decisions.', url: '/company' },
};

export default function Page() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap" style={{maxWidth:'900px'}}>
          <span className="eyebrow">Company</span>
          <h1 className="h1">The next advantage isn't more data. <span className="hi">It's better decisions.</span></h1>
          <p className="lede">More is published about companies, technologies and markets every week than any team can read. evalue8 is the layer between that flood and the decision — reading what nobody has time to read, structuring it so it can be compared, and showing where every statement came from.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">The team</span>
          <h2 className="h2 w rv">A small team building serious infrastructure, in Munich</h2>
          <div className="team rv" style={{marginTop:'40px'}}>
            <div className="tm">
              <div className="ph"><img src="/img/tm-carolin.webp" alt="Carolin Spitzer" /></div>
              <h3>Carolina Spitzer</h3>
              <div className="rl">Commercial</div>
              <ul>
                <li>Researched AI-supported decision-making in venture capital</li>
                <li>Scaled products across seven countries</li>
                <li>Three founding projects</li>
                <li>Ex-Tesla — product and business scaling</li>
              </ul>
              <p className="tiny" style={{marginTop:'12px'}}>Has wanted to build a company since she was young, and has built things from Amsterdam, Copenhagen, Santiago de Chile and stretches of Vietnam and Thailand before coming back to Germany.</p>
            </div>
            <div className="tm">
              <div className="ph"><img src="/img/tm-valentin.webp" alt="Valentin Hornung" /></div>
              <h3>Valentin Hornung</h3>
              <div className="rl">Tech &amp; Product</div>
              <ul>
                <li>Senior Product Manager, Technology at Amazon</li>
                <li>Algorithms for a €3bn product catalogue</li>
                <li>Infrastructure for nine-figure portfolios</li>
                <li>5+ awards for AI architecture</li>
              </ul>
              <p className="tiny" style={{marginTop:'12px'}}>Cooked professionally before going deep into technology, and still treats a kitchen the way he treats a system design.</p>
            </div>
            <div className="tm">
              <div className="ph"><img src="/img/tm-sebastian.webp" alt="Sebastian Riedel" /></div>
              <h3>Sebastian Riedel</h3>
              <div className="rl">Chief Product Officer</div>
              <ul>
                <li>Agentic AI</li>
                <li>Backend and forecasting at sonnen</li>
                <li>Previously TUM and DLR</li>
              </ul>
              <p className="tiny" style={{marginTop:'12px'}}>Three Ironman finishes, and the training discipline shows up in how he ships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <span className="eyebrow rv">Why we build this</span>
          <h2 className="h2 w rv">Helping fuel European innovation with better market intelligence</h2>
          <div className="split top rv" style={{marginTop:'24px'}}>
            <p className="lede">Better intelligence leads to better innovation decisions. A fund that can see a market properly backs a different company. A manufacturer that finds the right approach early spends three years differently. A programme that reviews every application the same way picks a different cohort.</p>
            <p className="lede">The information to make those calls is almost always public. It is just spread across more sources than any team can read, in a shape nobody can compare. That gap is what we work on.</p>
          </div>
          <p className="lede rv" style={{color:'#fff',fontWeight:'500',maxWidth:'62ch'}}>Our belief is that as evalue8 researches more markets, companies, founders and technologies, the structure it produces gets more useful across the European innovation ecosystem — for the people investing in it, building in it and buying from it.</p>
          <p className="cap rv">That is our product philosophy and where we are heading, not a claim about today.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow rv">Ecosystem</span>
          <h2 className="h2 w rv">Working across Europe's innovation ecosystem</h2>
          <p className="lede rv">Programmes, communities and collaborations we have been part of on the way here.</p>
          <div className="eco rv">
            <span>UnternehmerTUM</span><span>TUM.ai</span><span>TUM Incubator</span><span>ZOLLHOF</span>
            <span>Pioneers Club</span><span>Freiraum Ventures</span><span>AI Nation</span>
            <span>EIT Community Supernovas</span><span>StartupValley</span>
          </div>
          <p className="cap rv">Named with permission and without implying a customer relationship. Official logos replace this strip once we have the assets.</p>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span className="eyebrow rv">Advisors</span>
          <h2 className="h2 w rv">People who have done this before</h2>
          <div className="adv rv" style={{marginTop:'28px'}}>
            <div className="a"><img src="/img/tm-bernhard.webp" alt="" /><div><b>Bernhard Heinrich</b><span>Head of Industry — global go-to-market. Previously carbmee.</span></div></div>
            <div className="a"><img src="/img/tm-raphaele.webp" alt="" /><div><b>Raphaele Fabbri</b><span>Managing Director, 70+ investments. Techstars.</span></div></div>
            <div className="a"><img src="/img/tm-bastian.webp" alt="" /><div><b>Bastian Burger</b><span>Former Director AI — tech and venture development. UnternehmerTUM / TUM Venture Labs.</span></div></div>
          </div>
          <p className="tiny rv" style={{marginTop:'18px'}}>Experience across Tesla, Amazon, MAN, DACHSER, sonnen, DLR and UnternehmerTUM, with degrees from TUM, University of Augsburg, Copenhagen Business School, DTU and ESSEC.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split top">
          <div className="rv">
            <span className="eyebrow">Where we stand</span>
            <h3>Munich, and European by design</h3>
            <p>European data sovereignty is not a feature we added for procurement. Companies here have to understand which technologies, suppliers and research groups matter to them — and the ones that will matter in ten years are being founded now, in places no ranking has noticed yet.</p>
            <h3 style={{marginTop:'26px'}}>Small on purpose</h3>
            <p>You will talk to the person who built the thing you're asking about. Developed through UnternehmerTUM, AI Nation and the TUM AI E-Lab, with 10+ pilot partners across Europe.</p>
            <h3 style={{marginTop:'26px'}}>How we go to market</h3>
            <p>Roughly six-month paid pilots, then annual contracts. We would rather prove it on your real question than sell it on a slide.</p>
          </div>
          <div className="rv">
            <div className="proof" style={{border:'1px solid var(--line)',borderRadius:'var(--r-lg)',background:'var(--surface)'}}>
              <div style={{padding:'24px'}}><div className="k">10+</div><div className="v">pilot partners in Europe</div></div>
              <div style={{padding:'24px'}}><div className="k">3+</div><div className="v">awards won</div></div>
            </div>
            <div className="card" style={{marginTop:'16px'}}>
              <span className="n">Supported by</span>
              <p>UnternehmerTUM · AI Nation · TUM AI E-Lab · TUM.ai · EIT Community Supernovas</p>
            </div>
            <div className="card" style={{marginTop:'16px'}}>
              <span className="n">Get in touch</span>
              <p><a className="tl" href="mailto:carolina@evalue8.ai">carolina@evalue8.ai</a> — Carolina, commercial<br /><a className="tl" href="mailto:sebastian@evalue8.ai">sebastian@evalue8.ai</a> — Sebastian, product</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap"><h2 className="h2 rv">Want to see what we've built?</h2><div className="btns rv"><a className="btn mint" href="/get-access">Get access</a><a className="btn ghost" href="/platform">Explore the platform</a></div></div>
      </section>
    </>
  );
}
