export default function Header() {
  return (
    <>
      <header className="hdr" id="hdr">
        <div className="wrap">
          <a className="logo" href="/home" aria-label="evalue8.ai — home"><img className="wm wm-l" src="/wm_light_bg.png" alt="evalue8" /><img className="wm wm-d" src="/wm_dark_bg.png" alt="evalue8" /><span className="dotai">.ai</span></a>
          <nav className="nav">
            <div>
              <button className="navbtn" data-mega="mp" aria-expanded="false">Platform <i className="chev"></i></button>
              <div className="mega mega-p" id="mp">
                <div>
                  <span className="mlab">The workflow</span>
                  <a className="mitem" href="/platform#sec-scout"><b>Scout / Find</b><span>Discover companies, founders, technologies, experts and markets</span></a>
                  <a className="mitem" href="/platform#sec-quick"><b>Quick Research</b><span>Understand a company in under a minute and decide if it deserves more</span></a>
                  <a className="mitem" href="/platform#sec-extended"><b>Extended Research</b><span>Go deeper on market, technology, competition and risk</span></a>
                  <a className="mitem" href="/platform#sec-cockpit"><b>Cockpit</b><span>Bring it together, manage the workflow, stay updated</span></a>
                </div>
                <div>
                  <span className="mlab">How it works</span>
                  <a className="mitem" href="/platform#sec-sources"><b>Signal sources</b><span>What evalue8 reads, and what it doesn't</span></a>
                  <a className="mitem" href="/platform#sec-evidence"><b>Evidence &amp; claim validation</b><span>Claim → validation → evidence → source</span></a>
                  <a className="mitem" href="/platform#sec-integrations"><b>Integrations</b><span>MCP, API, Google Drive and Attio</span></a>
                  <a className="mitem" href="/trust"><b>Trust &amp; security</b><span>Where your data sits and who can see it</span></a>
                </div>
              </div>
            </div>
            <div>
              <button className="navbtn" data-mega="ms" aria-expanded="false">Solutions <i className="chev"></i></button>
              <div className="mega mega-s" id="ms">
                <a className="mitem" href="/investors" data-persona="investor"><b><span className="dot"></span>Investors</b><span>Sourcing, screening, diligence and IC</span></a>
                <a className="mitem" href="/corporates" data-persona="corporate"><b><span className="dot"></span>Corporates &amp; Innovation</b><span>Markets, technologies, vendors, competitors</span></a>
                <a className="mitem" href="/accelerators" data-persona="accelerator"><b><span className="dot"></span>Accelerators &amp; Programs</b><span>Application screening and pipeline scouting</span></a>
                <a className="mitem" href="/founders" data-persona="founder"><b><span className="dot"></span>Founders</b><span>Your own analysis and investor fit — free</span></a>
              </div>
            </div>
            <div><a className="navbtn" href="/pricing">Pricing</a></div>
            <div>
              <button className="navbtn" data-mega="mc" aria-expanded="false">Company <i className="chev"></i></button>
              <div className="mega mega-c" id="mc">
                <a className="mitem" href="/company"><b>About &amp; team</b><span>Why we build this, and who does</span></a>
                <a className="mitem" href="/trust"><b>Trust &amp; security</b><span>Where your data sits, and who sees it</span></a>
                <a className="mitem" href="/get-access"><b>Contact</b><span>Talk to us</span></a>
              </div>
            </div>
          </nav>
          <div className="hdr-cta">
            <a className="tl" href="/login" style={{color:'var(--ink-2)'}}>Log in</a>
            <a className="btn" href="/get-access">Get access</a>
            <button className="burger" id="burger" aria-label="Menu"><i></i><i></i><i></i></button>
          </div>
        </div>
      </header>

      <div className="pbar" id="pbar">
        <div className="wrap">
          <span className="lbl">Viewing as</span>
          <nav className="sw" id="pbarsw" aria-label="Switch perspective">
            <a href="/investors" data-p="investor" data-persona="investor">Investor</a>
            <a href="/corporates" data-p="corporate" data-persona="corporate">Corporate Innovation</a>
            <a href="/accelerators" data-p="accelerator" data-persona="accelerator">Accelerator</a>
            <a href="/founders" data-p="founder" data-persona="founder">Founder</a>
          </nav>
          <button className="x" id="pbarx" aria-label="Dismiss">&times;</button>
        </div>
      </div>

      <div className="msheet" id="msheet">
        <div className="top">
          <a className="logo" href="/home" aria-label="evalue8.ai — home"><img className="wm wm-l" src="/wm_light_bg.png" alt="evalue8" /><img className="wm wm-d" src="/wm_dark_bg.png" alt="evalue8" /><span className="dotai">.ai</span></a>
          <button className="x" id="msheetx" aria-label="Close">&times;</button>
        </div>
        <nav>
          <a href="/platform">Platform</a>
          <a className="sub" href="/investors">For investors</a>
          <a className="sub" href="/corporates">For corporates &amp; innovation</a>
          <a className="sub" href="/accelerators">For accelerators</a>
          <a className="sub" href="/founders">For founders</a>
          <a href="/pricing">Pricing</a>
          <a href="/trust">Trust &amp; security</a>
          <a href="/company">Company</a>
        </nav>
        <div className="mcta">
          <a className="btn" href="/get-access">Get access</a>
          <a className="btn ghost" href="/founders">Founders — start free</a>
        </div>
      </div>
    </>
  );
}
