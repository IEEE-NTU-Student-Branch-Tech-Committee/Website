import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero, Eyebrow, ButtonLink, TextLink, SectionHeading } from '@/components/ui';
import { GeometricArt } from '@/components/geometric-art';
import { Icon } from '@/components/icon';
import { Metrics } from '@/components/metrics';
import { partners, partnershipAreas } from '@/data/partners';
import { asset, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Partnerships',
  description:
    'Explore long-term collaboration with IEEE NTU through hackathons, technical workshops, industry projects and student opportunities.',
  alternates: { canonical: `${siteConfig.url}/partnerships/` },
};

export default function PartnershipsPage() {
  const email = siteConfig.partnershipEmail || siteConfig.contactEmail;
  const approved = partners.filter((p) => p.approved);
  return (
    <>
      <PageHero
        eyebrow="Industry & partnerships"
        title={
          <>
            Shared ambition.
            <br />
            <span className="accent-text">Greater possibilities.</span>
          </>
        }
        description="Connect industry perspectives with student curiosity. We’re building long-term collaborations that create meaningful technical opportunities for the IEEE NTU community."
      />
      <section className="container partner-intro">
        <div>
          <Eyebrow>More than a moment</Eyebrow>
          <h2>
            Build a relationship.
            <br />
            Grow the opportunity.
          </h2>
          <p>
            Our approach starts with a shared interest in engineering and technology. Through
            flagship events, knowledge exchange and a growing focus on project-based collaboration,
            we connect students with the people and ideas shaping industry.
          </p>
          <TextLink href="#collaborate">Explore ways to collaborate</TextLink>
        </div>
        <GeometricArt compact />
      </section>
      <section className="container section-space" id="collaborate">
        <SectionHeading eyebrow="Ways to work together" title="A connection with purpose." />
        <div className="partnership-grid">
          {partnershipAreas.map((area) => (
            <article className="partnership-card" key={area.number}>
              <span className="mono accent-text">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="tags">
                {area.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <Metrics />
      {approved.length > 0 && (
        <section className="container section-space">
          <SectionHeading eyebrow="Our collaborators" title="Connected by shared ambition." />
          <div className="partner-logos">
            {approved.map((p) => (
              <a key={p.name} href={p.url}>
                <Image src={asset(p.logo)} alt={p.name} width={180} height={80} />
              </a>
            ))}
          </div>
        </section>
      )}
      <section className="container partnership-section">
        <div className="cta-panel partner-final">
          <Eyebrow>Partner with IEEE NTU</Eyebrow>
          <h2>
            Let’s give good ideas
            <br />
            somewhere to go.
          </h2>
          <p>
            Discover our initiatives and the team creating opportunities
            <br className="desktop-break" /> at the intersection of student talent and industry.
          </p>
          <div className="button-row">
            {email ? (
              <a
                className="button button-primary"
                href={`mailto:${email}?subject=Partnership%20with%20IEEE%20NTU`}
              >
                Start a conversation
                <Icon name="diagonal" />
              </a>
            ) : (
              <ButtonLink href="/initiatives/">Explore our initiatives</ButtonLink>
            )}
            <TextLink href="/people/">Meet our team</TextLink>
          </div>
          {siteConfig.socialLinks.length > 0 && (
            <div className="contact-links">
              {siteConfig.socialLinks.map((s) => (
                <a className="text-link" key={s.url} href={s.url}>
                  {s.label}
                  <Icon name="diagonal" />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
