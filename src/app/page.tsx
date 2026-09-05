import type { Metadata } from 'next';
import { CommunityPhoto } from '@/components/community-photo';
import { GeometricArt } from '@/components/geometric-art';
import { ButtonLink, Eyebrow, SectionHeading, TextLink } from '@/components/ui';
import { Icon } from '@/components/icon';
import { Metrics } from '@/components/metrics';
import { ProjectCard } from '@/components/project-card';
import { PartnershipCTA } from '@/components/partnership-cta';
import { projects } from '@/data/projects';
import { pillars } from '@/data/about';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = { alternates: { canonical: `${siteConfig.url}/` } };

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid-background" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-content">
            <Eyebrow>
              <span className="live-dot" />
              IEEE NTU Student Branch
            </Eyebrow>
            <h1>
              Engineering ideas.
              <br />
              Building <span className="accent-text">communities.</span>
              <br />
              Creating opportunities.
            </h1>
            <p>
              A community of curious minds at NTU. We bring students, technology and industry
              together to build what’s next.
            </p>
            <div className="button-row">
              <ButtonLink href="/initiatives/">Explore our initiatives</ButtonLink>
              <TextLink href="/people/">Meet our people</TextLink>
            </div>
            <div className="hero-footnote">
              <span className="tiny-diamond" />
              <span>STUDENT-LED. FUTURE-FOCUSED. SINCE 1991.</span>
            </div>
          </div>
          <GeometricArt />
        </div>
        <div className="hero-baseline container">
          <span>NANYANG TECHNOLOGICAL UNIVERSITY, SINGAPORE</span>
          <a href="#impact" aria-label="Discover our community below">
            Discover what connects us
            <Icon name="down" />
          </a>
        </div>
      </section>
      <div id="impact">
        <Metrics />
      </div>
      <section className="about-home container section-space">
        <div>
          <Eyebrow number="01">Our purpose</Eyebrow>
          <h2>
            Curiosity is the start.
            <br />
            <span className="muted-heading">Community takes it further.</span>
          </h2>
        </div>
        <div className="about-home-copy">
          <p>
            Since 1991, IEEE NTU Student Branch has brought students together through a shared
            interest in engineering and technology.
          </p>
          <p>
            From first ideas to technical projects, from hackathons to industry connections, we
            create space to explore, collaborate and grow.
          </p>
          <TextLink href="/about/">Get to know IEEE NTU</TextLink>
        </div>
        <div className="since-line">
          <span>ESTABLISHED</span>
          <strong>1991</strong>
          <span className="since-rule" />
          <p>
            More than three decades.
            <br />
            Still looking forward.
          </p>
        </div>
      </section>
      <section className="initiatives-home section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Ideas in action"
            number="02"
            title={
              <>
                A place to build.
                <br />A reason to connect.
              </>
            }
            description="Different ways in. A shared drive to make things happen."
          >
            <TextLink href="/initiatives/">Explore all initiatives</TextLink>
          </SectionHeading>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="container pillars-section section-space">
        <SectionHeading eyebrow="What we do" number="03" title="Many strengths. One community." />
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar">
              <Icon name={pillar.icon} />
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="community-section section-space">
        <div className="container community-grid">
          <div className="community-photo">
            <CommunityPhoto
              alt="IEEE NTU students gathered together after a community event"
              sizes="(max-width: 600px) 90vw, 50vw"
            />
            <span className="photo-caption">
              <span className="live-dot" />
              Real people. Shared possibilities.
            </span>
          </div>
          <div className="community-copy">
            <Eyebrow number="04">The people behind the possibilities</Eyebrow>
            <h2>
              Student-run.
              <br />
              Community-driven.
            </h2>
            <p>
              Behind every initiative is a team that makes it happen. Meet the students bringing
              their ideas, energy and expertise to IEEE NTU.
            </p>
            <ButtonLink href="/people/" secondary>
              Meet our {siteConfig.term} team
            </ButtonLink>
            <div className="community-note">
              <span className="tiny-diamond" />
              <span>
                Different perspectives.
                <br />
                One shared direction.
              </span>
            </div>
          </div>
        </div>
      </section>
      <PartnershipCTA />
    </>
  );
}
