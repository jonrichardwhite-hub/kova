export const metadata = { title: 'Kova · Design system' };

const CARDS = [
  ['brand-lockups', 'Brand lockups'],
  ['colors-brand', 'Colors · Brand'],
  ['colors-core', 'Colors · Core'],
  ['colors-semantic', 'Colors · Semantic'],
  ['colors-domain', 'Colors · Domain'],
  ['type-display', 'Type · Display'],
  ['type-body', 'Type · Body'],
  ['type-wordmark-and-tags', 'Type · Wordmark & tags'],
  ['buttons', 'Buttons'],
  ['cards', 'Cards'],
  ['chat', 'Chat'],
  ['icons', 'Icons'],
  ['info-panels', 'Info panels'],
  ['pills-and-status', 'Pills & status'],
  ['radii', 'Radii'],
  ['shadows', 'Shadows'],
  ['spacing', 'Spacing'],
  ['voice', 'Voice'],
];

export default function DesignSystemPage() {
  return (
    <section className="ds-index">
      <div className="kova-tag">DESIGN SYSTEM · V0.1</div>
      <h2 style={{ marginTop: 12 }}>Kova foundations.</h2>
      <p>
        Live preview cards sourced from the design handoff bundle — colors, type,
        components, and voice. Each frame is the authoritative HTML/CSS from{' '}
        <code>kova-design-system/project/preview/</code>.
      </p>
      <div className="ds-grid">
        {CARDS.map(([slug, label]) => (
          <div className="ds-card" key={slug}>
            <iframe src={`/ds/preview/${slug}.html`} title={label} loading="lazy" />
            <div className="ds-card-label">
              {label}
              <small>{slug}.html</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
