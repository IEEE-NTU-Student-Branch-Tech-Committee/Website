import { metrics } from '@/data/metrics';

export function Metrics() {
  return (
    <section className="metrics-section container" aria-label="Our impact">
      <div className="metrics-context">
        <h2>Our Community in Numbers</h2>
        <p>Highlights from our events and community.</p>
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
