import type { Metadata } from 'next';
import { PageHero } from '@/components/ui';
import { PartnerLogos } from '@/components/partner-logos';
import { SocialLinks } from '@/components/social-links';
import { partnershipAreas } from '@/data/partners';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Sponsors & Partnerships',
  description:
    'Our sponsors and ecosystem partners. Work with IEEE NTU on hackathons, workshops, technical projects and student opportunities.',
  alternates: { canonical: `${siteConfig.url}/partnerships/` },
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our collaborators"
        title="Sponsors & Partnerships"
        description="Connecting student talent with industry and the wider technology community."
      />
      <section className="container sponsors-section" aria-labelledby="sponsor-heading">
        <div className="centered-heading">
          <h2 id="sponsor-heading">Our Sponsors & Partners</h2>
          <p>
            We appreciate the organisations supporting student opportunities and our wider
            ecosystem.
          </p>
        </div>
        <PartnerLogos />
      </section>
      <section id="collaborate" className="container section-space">
        <div className="centered-heading">
          <h2>Work with IEEE NTU</h2>
          <p>
            Our Business Development Committee develops partnerships across events, learning and
            technical collaboration.
          </p>
        </div>
        <div className="partnership-options">
          {partnershipAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="partnership-contact">
        <div className="container">
          <div className="centered-heading">
            <h2>Get in Touch</h2>
            <p>
              For sponsorships, workshops or technical collaboration, reach our branch through
              Instagram or LinkedIn.
            </p>
          </div>
          <SocialLinks detailed />
        </div>
      </section>
    </>
  );
}
