export default function Footer() {
  return (
    <>
      <footer className="ftr">
        <div className="wrap">
          <div className="ftr-grid">
            <div>
              <a className="logo" href="/home" aria-label="evalue8.ai — home"><img className="wm wm-l" src="/wm_light_bg.png" alt="evalue8" /><img className="wm wm-d" src="/wm_dark_bg.png" alt="evalue8" /><span className="dotai">.ai</span></a>
              <p className="bl">Scout. Evaluate. Decide. Market intelligence for companies, technologies and markets. Built in Munich.</p>
            </div>
            <div><h5>Platform</h5><ul>
              <li><a href="/platform">Scout</a></li>
              <li><a href="/platform">Quick Research</a></li>
              <li><a href="/platform">Extended Research</a></li>
              <li><a href="/platform">Cockpit</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul></div>
            <div><h5>Solutions</h5><ul>
              <li><a href="/investors">For investors</a></li>
              <li><a href="/corporates">For corporates</a></li>
              <li><a href="/accelerators">For accelerators</a></li>
              <li><a href="/founders">For founders</a></li>
            </ul></div>
            <div><h5>Company</h5><ul>
              <li><a href="/company">About &amp; team</a></li>
              <li><a href="/trust">Trust &amp; security</a></li>
              <li><a href="/get-access">Contact</a></li>
              <li><a href="/">Change your view</a></li>
            </ul></div>
            <div><h5>Legal</h5><ul>
              <li><a href="/trust">Privacy</a></li>
              <li><a href="/trust">Terms</a></li>
              <li><a href="/trust">Sub-processors</a></li>
              <li><a href="/trust">Imprint</a></li>
            </ul></div>
          </div>
          <div className="ftr-btm">
            <span>© 2026 evalue8</span><span>Munich, Germany</span><a href="mailto:carolina@evalue8.ai">carolina@evalue8.ai</a>
            <span className="sp">Design prototype — product screenshots are real, example queries are illustrative</span>
          </div>
        </div>
      </footer>
      <div className="mstick" id="mstick"><a className="btn" href="/demo">Get access</a></div>
    </>
  );
}
