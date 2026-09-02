import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust & security',
  description:
    'Auditable, validated, EU/GDPR and model-agnostic. Where your data sits, who can see it, and what we do not claim.',
  alternates: { canonical: '/trust' },
  openGraph: { title: 'Trust & security', description: 'Auditable, validated, EU/GDPR and model-agnostic. Where your data sits, who can see it, and what we do not claim.', url: '/trust' },
};

export default function Page() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap" style={{maxWidth:'860px'}}>
          <span className="eyebrow">Trust &amp; security</span>
          <h1 className="h1">Built for trust, <span className="hi">not just for speed.</span></h1>
          <p className="lede">Decision-grade material for specialist teams, leadership and the committees they have to convince. We only claim what we can show you — and we won't put a certification badge here until we hold one.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid g2 rv">
            <div className="card"><span className="n">01 · Auditable</span><h3>Every statement leads back</h3><p>Each claim traces to its source, an evidence grade and its remaining uncertainty. Conclusions stay retraceable — which is what makes them usable in a committee.</p></div>
            <div className="card"><span className="n">02 · Validated</span><h3>Checked, not just generated</h3><p>Claim checks, cross-checks against independent sources, controls against bias, and human approvals are part of the workflow rather than an optional review step.</p></div>
            <div className="card"><span className="n">03 · EU / GDPR</span><h3>European data sovereignty</h3><p>European hosting, role-based access and clear separation between your data and anyone else's, designed in from the start rather than added later.</p></div>
            <div className="card"><span className="n">04 · Model-agnostic</span><h3>No provider lock-in</h3><p>The right model and data service is chosen per task. You are not tied to a single AI vendor, and we name the providers we use.</p></div>
            <div className="card"><span className="n">05 · Your documents</span><h3>Used only once you release them</h3><p>Internal material — a deck, a supplier document, an application — is processed only after you release it to a specific analysis, and kept separate from everything else.</p></div>
            <div className="card"><span className="n">06 · Your research</span><h3>Visible only to your team</h3><p>What you search reveals your strategy. Runs, watchlists and notes stay inside your workspace and are never shared with other customers.</p></div>
            <div className="card"><span className="n">07 · A person decides</span><h3>Not automated decision-making</h3><p>evalue8 prioritises attention and prepares evidence. It does not make automated decisions about people — relevant if you process applications or founder data through it.</p></div>
            <div className="card"><span className="n">08 · Data gaps stated</span><h3>Silence is a finding</h3><p>Where the evidence is thin, the output says so. A visible gap is more useful than a plausible sentence that fills it.</p></div>
          </div>

          <div className="card rv" style={{marginTop:'24px',borderColor:'var(--line-2)'}}>
            <h3>What this page deliberately doesn't have</h3>
            <p>No certification badges we haven't earned. No uptime figure we don't measure. No customer logos we don't have permission to show. We are a young company and we would rather tell you that than have you find it out during procurement.</p>
            <p style={{marginTop:'12px'}}>If your security review needs a document we haven't published yet — a data processing agreement, a sub-processor list, a description of the model providers we use — ask and we'll send it.</p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap"><h2 className="h2 rv">Security questions before a demo?</h2><p className="lede rv">Send them over. We'd rather answer them first than halfway through a procurement process.</p><div className="btns rv"><a className="btn mint" href="/get-access">Get in touch</a></div></div>
      </section>
    </>
  );
}
