type SetName = 'eco' | 'inst';

/* [file, name, compact] — compact marks are allowed a little more height
   so a square logo does not read as smaller than a wide wordmark. */
const SETS: Record<SetName, [string, string, boolean?][]> = {
  eco: [
    ['lg-eco-unternehmertum', 'UnternehmerTUM'],
    ['lg-eco-aination', 'AI Nation'],
    ['lg-eco-tumai', 'TUM.ai'],
    ['lg-eco-eit', 'EIT Community Supernovas'],
    ['lg-eco-startupvalley', 'StartupValley'],
  ],
  inst: [
    ['lg-inst-tesla', 'Tesla'],
    ['lg-inst-man', 'MAN', true],
    ['lg-inst-dachser', 'DACHSER'],
    ['lg-inst-amazon', 'Amazon'],
    ['lg-inst-sonnen', 'sonnen'],
    ['lg-inst-dlr', 'DLR — German Aerospace Center', true],
    ['lg-inst-utum', 'UnternehmerTUM', true],
    ['lg-inst-augsburg', 'University of Augsburg'],
    ['lg-inst-cbs', 'Copenhagen Business School'],
    ['lg-inst-dtu', 'Denmark Technical University'],
    ['lg-inst-essec', 'ESSEC Business School'],
  ],
};

export default function LogoStrip({
  set,
  label,
  tone = 'dark',
  reverse = false,
  slow = false,
  className = '',
}: {
  set: SetName;
  label?: string;
  tone?: 'dark' | 'light';
  reverse?: boolean;
  slow?: boolean;
  className?: string;
}) {
  const items = SETS[set];
  const row = (dup: boolean) => (
    <div className="mq-set">
      {items.map(([file, name, compact]) => (
        <img
          key={(dup ? 'b-' : 'a-') + file}
          className={compact ? 'cmp' : undefined}
          src={`/img/${file}.png`}
          alt={dup ? '' : name}
          aria-hidden={dup || undefined}
        />
      ))}
    </div>
  );

  return (
    <div className={`tstrip${tone === 'light' ? ' light' : ''}${className ? ' ' + className : ''}`}>
      {label ? <span className="tlab">{label}</span> : null}
      <div className={`mq${reverse ? ' rev' : ''}${slow ? ' slow' : ''}`}>
        <div className="mq-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
