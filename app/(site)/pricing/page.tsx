import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Free for founders, paid pilots for teams. Roughly six months on a real question, then an annual contract.',
  alternates: { canonical: '/pricing' },
  openGraph: { title: 'Pricing', description: 'Free for founders, paid pilots for teams. Roughly six months on a real question, then an annual contract.', url: '/pricing' },
};

export default function Page() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap hero-c">
          <span className="eyebrow">Pricing</span>
          <h1 className="h1">Free for founders. <span className="hi">Pilots for teams.</span></h1>
          <p className="lede">Two ways in, and no tier chart to decode.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="grid g2 rv" style={{maxWidth:'900px',margin:'0 auto'}}>
            <div className="card" style={{padding:'34px'}}>
              <span className="n">Founders</span>
              <h3 style={{fontSize:'26px',letterSpacing:'-.03em'}}>Free</h3>
              <p style={{margin:'10px 0 20px'}}>Start with free runs on your own company — web-only triage or deck-backed feedback. Unlock further analyses one at a time; a full diligence pass is paid per run. No card, no call.</p>
              <a className="btn ghost" href="/founders">Start free</a>
            </div>
            <div className="card" style={{padding:'34px',borderColor:'var(--mint)',boxShadow:'0 0 0 3px var(--mint-soft)'}}>
              <span className="n">Investors · Corporates · Accelerators</span>
              <h3 style={{fontSize:'26px',letterSpacing:'-.03em'}}>Pilot</h3>
              <p style={{margin:'10px 0 20px'}}>A paid pilot of roughly six months on a question you actually have, then an annual contract if it earns it. Scout, Quick and Extended Research and Cockpit, priced per seat and usage.</p>
              <a className="btn mint" href="/get-access">Get access</a>
            </div>
          </div>
          <p className="tiny rv" style={{marginTop:'22px',textAlign:'center',maxWidth:'60ch',marginLeft:'auto',marginRight:'auto'}}>A pilot is scoped to a real question, so you can judge the value before committing to a year. Larger deployments across several teams or with specific data-handling requirements are priced individually.</p>
        </div>
      </section>
      <section className="band"><div className="wrap"><h2 className="h2 rv">Not sure which fits?</h2><p className="lede rv">Tell us what you are trying to find out and we will tell you which one covers it — or that neither does.</p><div className="btns rv"><a className="btn mint" href="/get-access">Get in touch</a></div></div></section>
    </>
  );
}
