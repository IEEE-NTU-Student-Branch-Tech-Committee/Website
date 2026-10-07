import type { Metadata } from 'next';
import { PageHero, TextLink } from '@/components/ui';
import { InitiativePortfolio } from '@/components/initiative-portfolio';
import { PartnershipCTA } from '@/components/partnership-cta';
import { workshops } from '@/data/projects';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Events & Initiatives',
  description:
    'Explore iNTUition, Coding Nights, IEEE Day, our Annual General Meeting, industry projects and technical workshops at IEEE NTU Student Branch.',
  alternates: { canonical: `${siteConfig.url}/initiatives/` },
};

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our initiatives"
        title="Events & Initiatives"
        description="Learn practical skills, build with other students and connect with industry."
      />
      <InitiativePortfolio />
      <section className="workshop-section">
        <div className="container workshop-panel">
          <h2>{workshops.title}</h2>
          <p>{workshops.description}</p>
          <TextLink href="/#contact">Follow our event announcements</TextLink>
        </div>
      </section>
      <PartnershipCTA />
    </>
  );
}
