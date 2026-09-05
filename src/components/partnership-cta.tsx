import { ButtonLink, Eyebrow } from './ui';

export function PartnershipCTA() {
  return (
    <section className="container partnership-section">
      <div className="cta-panel">
        <div>
          <Eyebrow>Better, together</Eyebrow>
          <h2>
            Great ideas deserve
            <br />
            meaningful connections.
          </h2>
          <p>
            Connect with a community of student technologists.
            <br className="desktop-break" /> Let’s build opportunities that go further.
          </p>
          <ButtonLink href="/partnerships/">Partner with IEEE NTU</ButtonLink>
        </div>
        <div className="cta-geometry" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="cta-note">STUDENT TALENT. INDUSTRY PERSPECTIVE. SHARED POSSIBILITY.</span>
      </div>
    </section>
  );
}
