import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log in',
  description:
    'Log in to evalue8.',
  alternates: { canonical: '/login' },
  openGraph: { title: 'Log in', description: 'Log in to evalue8.', url: '/login' },
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap" style={{maxWidth:'460px'}}>
          <span className="eyebrow">Log in</span>
          <h1 className="h1" style={{fontSize:'clamp(28px,3.4vw,38px)'}}>Welcome back.</h1>
          <p className="lede s">The application lives at app.evalue8.ai.</p>
          <div className="frm">
            <div className="f"><label htmlFor="le">Work email</label><input id="le" type="email" placeholder="you@company.com" /></div>
            <a className="btn" href="/get-access" style={{justifyContent:'center'}}>Continue</a>
            <p className="tiny">No account yet? <a className="tl" href="/founders">Founders start free</a> — or <a className="tl" href="/get-access">get access</a> for your team.</p>
          </div>
        </div>
      </section>
    </>
  );
}
