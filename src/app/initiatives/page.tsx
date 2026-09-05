import type { Metadata } from 'next';
import { PageHero, Eyebrow, TextLink } from '@/components/ui';
import { InitiativePortfolio } from '@/components/initiative-portfolio';
import { PartnershipCTA } from '@/components/partnership-cta';
import { workshops } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { Icon } from '@/components/icon';

export const metadata: Metadata = {
  title: 'Initiatives',
  description:
    'Explore iNTUition, Coding Nights, IEEE Day and our direction for Industry Projects at IEEE NTU Student Branch.',
  alternates: { canonical: `${siteConfig.url}/initiatives/` },
};

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our initiatives"
        title={
          <>
            Curiosity, <span className="accent-text">in motion.</span>
          </>
        }
        description="Build something. Learn something. Meet the people who make it possible. Explore the initiatives that bring our technical community together."
      />
      <InitiativePortfolio />
      <section className="container workshop-section">
        <div className="workshop-panel">
          <Icon name="compass" />
          <div>
            <Eyebrow>Beyond the build</Eyebrow>
            <h2>{workshops.title}</h2>
            <p>{workshops.description}</p>
          </div>
          <TextLink href="/partnerships/">Connect with our community</TextLink>
        </div>
      </section>
      <PartnershipCTA />
    </>
  );
}
