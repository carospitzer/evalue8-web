import type { Metadata } from 'next';
import EntryBehaviour from '@/components/EntryBehaviour';

export const metadata: Metadata = {
  title: { absolute: 'evalue8 — Scout. Evaluate. Decide.' },
  description:
    'An intelligence system that finds, researches and validates companies, founders, technologies and markets — with the evidence behind every claim. Choose your starting point: investor, corporate innovation, accelerator or founder.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return (
    <>
      <div className="entry">
        <div className="entry-top">
          <div className="entry-logo">
            <img src="/mark.png" alt="" />
            <b>evalue8</b>
            <span className="entry-claim">Scout. Evaluate. Decide.</span>
          </div>
        </div>

        <div className="entry-mid">
          <div className="entry-intro">
            <span className="entry-eyebrow">We are</span>
            <p>An intelligence system that finds, researches and validates companies, founders, technologies and&nbsp;markets — <span className="hi">with the evidence behind every claim.</span></p>
          </div>

          <div className="entry-head">
            <h1>Who are you?</h1>
            <p>The same intelligence. Four different workflows. Start with yours.</p>
          </div>

          <div className="pgrid">
            <a className="pcard" href="/investors" data-persona="investor">
              <span className="role">Investor</span>
              <h2>Find, screen and diligence your next investment.</h2>
              <span className="jobs">Dealflow &amp; sourcing<br />Founder discovery<br />Investment research</span>
              <span className="go">Investors <span className="arrow">→</span></span>
            </a>
            <a className="pcard" href="/corporates" data-persona="corporate">
              <span className="role">Corporate / Innovation</span>
              <h2>Understand a market, a technology or a supplier before you commit.</h2>
              <span className="jobs">Market intelligence<br />Technology scouting<br />Competitor watch</span>
              <span className="go">Corporates <span className="arrow">→</span></span>
            </a>
            <a className="pcard" href="/accelerators" data-persona="accelerator">
              <span className="role">Accelerator</span>
              <h2>Review every application the same way — and find the ones that never applied.</h2>
              <span className="jobs">Application screening<br />Pipeline scouting<br />Cohort selection</span>
              <span className="go">Accelerators <span className="arrow">→</span></span>
            </a>
            <a className="pcard" href="/founders" data-persona="founder">
              <span className="free">Free</span>
              <span className="role">Founder</span>
              <h2>Understand your market. Understand your startup. Find the investors that fit.</h2>
              <span className="jobs">Market landscape<br />The investor view of you<br />Investor matching</span>
              <span className="go">Founders <span className="arrow">→</span></span>
            </a>
          </div>
        </div>

        <div className="entry-btm">
          <div className="entry-out">
            <span>Not one of these?</span>
            <a className="entry-explore" href="/home">Explore evalue8 <span className="arrow">→</span></a>
            <a className="entry-li" href="https://www.linkedin.com/company/evalue8ai" target="_blank" rel="noopener noreferrer" aria-label="evalue8 on LinkedIn" title="Connect on LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1t2.48 2.5zM.22 8.02h4.56V24H.22zM8.34 8.02h4.37v2.18h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.28c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.89-2.79 3.85V24H8.34z" /></svg>
            </a>
          </div>

          <div className="entry-trust">
            <div className="tstrip">
              <span className="tlab">Supported by</span>
              <div className="mq">
                <div className="mq-track">
                  <div className="mq-set">
                    <img src="/img/lg-eco-unternehmertum.png" alt="UnternehmerTUM" />
                    <img src="/img/lg-eco-aination.png" alt="AI Nation" />
                    <img src="/img/lg-eco-tumai.png" alt="TUM.ai" />
                    <img src="/img/lg-eco-eit.png" alt="EIT Community Supernovas" />
                    <img src="/img/lg-eco-startupvalley.png" alt="StartupValley" />
                  </div>
                  <div className="mq-set">
                    <img src="/img/lg-eco-unternehmertum.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-eco-aination.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-eco-tumai.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-eco-eit.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-eco-startupvalley.png" alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tstrip">
              <span className="tlab">Experience from leading institutions</span>
              <div className="mq rev slow">
                <div className="mq-track">
                  <div className="mq-set">
                    <img src="/img/lg-inst-tesla.png" alt="Tesla" />
                    <img src="/img/lg-inst-man.png" alt="MAN" />
                    <img src="/img/lg-inst-dachser.png" alt="DACHSER" />
                    <img src="/img/lg-inst-amazon.png" alt="Amazon" />
                    <img src="/img/lg-inst-utum.png" alt="UnternehmerTUM" />
                    <img src="/img/lg-inst-augsburg.png" alt="University of Augsburg" />
                    <img src="/img/lg-inst-cbs.png" alt="Copenhagen Business School" />
                    <img src="/img/lg-inst-dtu.png" alt="Denmark Technical University" />
                    <img src="/img/lg-inst-essec.png" alt="ESSEC Business School" />
                  </div>
                  <div className="mq-set">
                    <img src="/img/lg-inst-tesla.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-man.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-dachser.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-amazon.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-utum.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-augsburg.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-cbs.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-dtu.png" alt="" aria-hidden="true" />
                    <img src="/img/lg-inst-essec.png" alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="entry-note">Built in Munich · 10+ pilot partners in Europe</p>
        </div>
      </div>
      <EntryBehaviour />
    </>
  );
}
