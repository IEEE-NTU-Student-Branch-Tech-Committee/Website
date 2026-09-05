import type { Metadata } from 'next';
import { PageHero, SectionHeading } from '@/components/ui';
import { PersonCard } from '@/components/person-card';
import { PartnershipCTA } from '@/components/partnership-cta';
import { people, committeeTerm } from '@/data/people';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our People',
  description: `Meet the ${committeeTerm} leadership and directors of IEEE NTU Student Branch.`,
  alternates: { canonical: `${siteConfig.url}/people/` },
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow={`Our people / ${committeeTerm}`}
        title="Our people"
        description="Students, builders and collaborators. Meet the team bringing our community together and turning a shared vision into action."
      >
        <span className="term-badge">
          <span className="live-dot" />
          Committee {committeeTerm}
        </span>
      </PageHero>
      <nav className="container team-jump-links" aria-label="Committee sections">
        <a href="#leadership">Branch leadership</a>
        <a href="#directors">Directors</a>
      </nav>
      <section id="leadership" className="container people-section">
        <SectionHeading eyebrow="Setting our direction" title="Branch leadership" />
        <div className="people-grid leadership-grid">
          {people
            .filter((p) => p.group === 'Leadership')
            .map((p) => (
              <PersonCard key={p.id} person={p} />
            ))}
        </div>
      </section>
      <section id="directors" className="container people-section section-space">
        <SectionHeading
          eyebrow="Making it happen"
          title="Our directors"
          description="The teams behind our technology, partnerships, community and operations."
        />
        <div className="people-grid">
          {people
            .filter((p) => p.group === 'Directors')
            .map((p) => (
              <PersonCard key={p.id} person={p} />
            ))}
        </div>
      </section>
      <PartnershipCTA />
    </>
  );
}
