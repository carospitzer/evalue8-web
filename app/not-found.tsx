export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="hero dark" style={{ minHeight: '70vh' }}>
      <div className="wrap" style={{ maxWidth: '620px' }}>
        <span className="eyebrow">404</span>
        <h1 className="h1" style={{ fontSize: 'clamp(30px,4vw,44px)' }}>
          That page isn&apos;t here.
        </h1>
        <p className="lede">
          It may have moved, or the link may be wrong. The platform overview is a good place to pick
          the thread back up.
        </p>
        <div className="btns">
          <a className="btn mint" href="/platform">Explore the platform</a>
          <a className="btn ghost" href="/">Choose your starting point</a>
        </div>
      </div>
    </section>
  );
}
