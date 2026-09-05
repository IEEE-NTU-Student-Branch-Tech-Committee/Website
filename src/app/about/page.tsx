import type { Metadata } from 'next';
import { CommunityPhoto } from '@/components/community-photo';
import { PageHero, Eyebrow, SectionHeading, TextLink } from '@/components/ui';
import { Metrics } from '@/components/metrics';
import { Icon } from '@/components/icon';
import { PartnershipCTA } from '@/components/partnership-cta';
import { principles, pillars } from '@/data/about';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Since 1991, IEEE NTU Student Branch has connected students through engineering, technology, innovation and community.',
  alternates: { canonical: `${siteConfig.url}/about/` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About IEEE NTU"
        title={
          <>
            Built on curiosity.
            <br />
            <span className="accent-text">Growing through connection.</span>
          </>
        }
        description="A student-run technical organisation at Nanyang Technological University, advancing innovation and education in engineering and technology since 1991."
      />
      <section className="container story-grid">
        <div className="history-panel">
          <Eyebrow>A continuing story</Eyebrow>
          <span className="history-year">1991</span>
          <p>
            The start of a community.
            <br />A foundation for what comes next.
          </p>
          <div className="history-lines" aria-hidden="true" />
        </div>
        <div className="story-copy">
          <h2>
            Ideas grow when
            <br />
            people come together.
          </h2>
          <p>
            IEEE NTU Student Branch brings together students who want to explore technology and put
            their ideas into practice. Our community connects aspiring technologists through
            hackathons, technical workshops, seminars and shared experiences.
          </p>
          <p>
            We’re building on that foundation with a growing focus on project-based opportunities
            and meaningful, long-term industry collaboration.
          </p>
          <TextLink href="/initiatives/">See our ideas in action</TextLink>
        </div>
      </section>
      <section className="container section-space">
        <SectionHeading eyebrow="Our direction" title="Space to explore. Support to grow." />
        <div className="principles-grid">
          {principles.map((p) => (
            <article key={p.title} className="principle">
              <span className="mono accent-text">{p.number}</span>
              <h3>
                {p.title}
                <span aria-hidden="true">.</span>
              </h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>
      <Metrics />
      <section className="container section-space">
        <SectionHeading
          eyebrow="How we come together"
          title="A shared mission. Different strengths."
          description="Five areas of work support our technical initiatives and the people around them."
        />
        <div className="about-pillars">
          {pillars.map((p, i) => (
            <article key={p.title}>
              <span className="mono">0{i + 1}</span>
              <Icon name={p.icon} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container about-community">
        <CommunityPhoto
          alt="The IEEE NTU community gathered at an event"
          sizes="(max-width: 600px) 90vw, 45vw"
        />
        <div>
          <Eyebrow>The heart of our branch</Eyebrow>
          <h2>
            Made possible
            <br />
            by our people.
          </h2>
          <TextLink href="/people/">Meet the team</TextLink>
        </div>
      </section>
      <PartnershipCTA />
    </>
  );
}
