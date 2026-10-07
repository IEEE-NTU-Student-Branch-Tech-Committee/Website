import { TextLink } from './ui';

export function PartnershipCTA() {
  return (
    <section className="partnership-section">
      <div className="container partnership-invitation">
        <div>
          <h2>Partner with IEEE NTU</h2>
          <p>
            Support student learning through events, technical projects and industry collaboration.
          </p>
        </div>
        <TextLink href="/partnerships/">Explore partnerships</TextLink>
      </div>
    </section>
  );
}
