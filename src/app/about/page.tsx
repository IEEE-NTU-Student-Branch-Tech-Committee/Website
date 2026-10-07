import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero, TextLink } from '@/components/ui';
import { Metrics } from '@/components/metrics';
import { PartnershipCTA } from '@/components/partnership-cta';
import { principles, pillars, strategy } from '@/data/about';
import { asset, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about IEEE NTU Student Branch, our community and our committees at Nanyang Technological University.',
  alternates: { canonical: `${siteConfig.url}/about/` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About IEEE NTU"
        title="About Us"
        description="Advancing student learning in engineering and technology since 1991."
      />
      <section className="container about-story">
        <Image
          src={asset('/images/ntu-campus.webp')}
          alt="The Hive at Nanyang Technological University"
          width={1600}
          height={960}
          sizes="(max-width: 899px) 90vw, 45vw"
        />
        <div>
          <h2>IEEE at Nanyang Technological University</h2>
          <p>
            Established in 1991, IEEE NTU Student Branch brings together students with a shared
            interest in engineering and technology. Our flagship initiatives include iNTUition, our
            annual hackathon, and IEEE Day, alongside Coding Nights, technical workshops and
            seminars.
          </p>
          <p>
            We help students develop practical skills, explore new ideas and build connections with
            peers and industry. Our growing focus on collaborative projects creates opportunities to
            apply those skills beyond the classroom.
          </p>
          <TextLink href="/initiatives/">Explore our initiatives</TextLink>
        </div>
      </section>
      <section className="container section-space">
        <div className="centered-heading">
          <h2>Our Objectives</h2>
          <p>Supporting our members and strengthening our technical community.</p>
        </div>
        <div className="objectives-list">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
      <Metrics />
      <section className="container section-space">
        <div className="centered-heading">
          <h2>How We Work</h2>
          <p>Four committees support our events, projects and community.</p>
        </div>
        <div className="committee-functions">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
        <div className="strategy-office">
          <h3>{strategy.title}</h3>
          <p>{strategy.description}</p>
        </div>
        <div className="section-link">
          <TextLink href="/people/">Meet our committee</TextLink>
        </div>
      </section>
      <PartnershipCTA />
    </>
  );
}
