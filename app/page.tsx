import type { Metadata } from 'next';
import EntryBehaviour from '@/components/EntryBehaviour';

export const metadata: Metadata = {
  title: { absolute: 'evalue8 — Scout. Evaluate. Decide.' },
  description:
    'One market intelligence platform, four workflows. Choose your starting point: investor, corporate innovation, accelerator or founder.',
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
          <div className="entry-head">
            <h1>Who are you?</h1>
            <p>evalue8 is one market intelligence platform. Four teams use it for four very different decisions. Start with yours.</p>
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
          <a href="/home">Explore evalue8 first</a>
          <p className="entry-note">Built in Munich · 10+ pilot partners in Europe · Supported by UnternehmerTUM, AI Nation and TUM AI E-Lab</p>
        </div>
      </div>
      <EntryBehaviour />
    </>
  );
}
