import { metrics } from '@/data/metrics';

export function Metrics() {
  return (
    <section className="metrics-section container" aria-label="Our impact">
      <div className="metrics-context">
        <span className="eyebrow">A community with impact</span>
        <span>As reported in our 2026/27 AGM</span>
      </div>
      <dl className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <dt>
              {metric.label}
              <span className="metric-detail">{metric.detail}</span>
            </dt>
            <dd>
              {metric.value}
              <span>{metric.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
