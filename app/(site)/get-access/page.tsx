import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get access',
  description:
    'Request access, book a demo or email us directly. Teams start with a paid pilot on a real question; founders start free.',
  alternates: { canonical: '/get-access' },
  openGraph: { title: 'Get access', description: 'Request access, book a demo or email us directly. Teams start with a paid pilot on a real question; founders start free.', url: '/get-access' },
};

export default function Page() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap hero-c">
          <span className="eyebrow">Get access</span>
          <h1 className="h1">Get access to <span className="hi">evalue8.</span></h1>
          <p className="lede">Teams start with a paid pilot on a real question — roughly six months, then an annual contract if it earns it. Pick whichever way of starting suits you.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid g3 rv">
            <a className="card lc" href="/get-access#sec-request" style={{padding:'28px'}}>
              <span className="n">01</span><h3>Request access</h3>
              <p>Tell us what you are trying to find out. Two minutes, and we come back with whether evalue8 can answer it.</p>
              <span className="tl" style={{marginTop:'14px'}}>Fill in the form</span>
            </a>
            <a className="card lc" id="book-demo" href="/get-access#sec-request" data-booking style={{padding:'28px'}}>
              <span className="n">02</span><h3>Book a demo</h3>
              <p>Thirty minutes on something you are actually working on — a company from your pipeline, a technology you are scouting, a batch you have reviewed. No slides.</p>
              <span className="tl" style={{marginTop:'14px'}}>Pick a time</span>
            </a>
            <a className="card lc" href="mailto:carolina@evalue8.ai?subject=evalue8%20enquiry" style={{padding:'28px'}}>
              <span className="n">03</span><h3>Email us</h3>
              <p>Straight to a person. Security questions welcome — we would rather answer them before a procurement process than during one.</p>
              <span className="tl" style={{marginTop:'14px'}}>carolina@evalue8.ai</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sec alt" id="sec-request">
        <div className="wrap split top">
          <div>
            <span className="eyebrow rv">Request access</span>
            <h2 className="h2 rv">Bring a real question. We will run it live.</h2>
            <ul className="flist rv" style={{maxWidth:'44ch'}}>
              <li><span className="d"></span><div><b>You keep the output</b><span>Whatever we produce in the call is yours, whether or not you go further.</span></div></li>
              <li><span className="d"></span><div><b>Security questions welcome</b><span>Bring your IT team if it saves a round.</span></div></li>
              <li><span className="d"></span><div><b>Pilots, not procurement marathons</b><span>Roughly six months on a real question, then an annual contract.</span></div></li>
            </ul>
            <p className="cap rv">Founders do not need this — <a className="tl" href="/founders">start free</a>.</p>
          </div>
          <div className="card rv" style={{padding:'30px'}}>
            <form className="frm" data-form="access" data-mail="carolina@evalue8.ai">
              <div className="f"><label htmlFor="dn">Name</label><input id="dn" name="name" type="text" required /></div>
              <div className="f"><label htmlFor="de">Work email</label><input id="de" name="email" type="email" required /></div>
              <div className="f"><label htmlFor="dc">Organisation</label><input id="dc" name="org" type="text" required /></div>
              <div className="f"><label htmlFor="dq">What are you trying to find out?</label><textarea id="dq" name="question" required placeholder="A market, a technology, a company, a batch of applications…"></textarea></div>
              <button className="btn mint" type="submit">Send request</button>
              <p className="ok-msg">Opening your mail app with the request ready to send. If nothing happened, write to <a className="tl" href="mailto:carolina@evalue8.ai">carolina@evalue8.ai</a>.</p>
              <p className="tiny">Goes straight to Carolina. No phone number needed.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
