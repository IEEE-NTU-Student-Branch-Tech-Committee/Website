import Image from 'next/image';
import { homeContent, pastEvents } from '@/data/home';
import { people, committeeTerm } from '@/data/people';
import { projects } from '@/data/projects';
import { partners } from '@/data/partners';
import { asset, siteConfig } from '@/data/site';
import { CommunityPhoto } from './community-photo';
import { Icon } from './icon';
import { Metrics } from './metrics';
import { PersonCard } from './person-card';
import { ProjectCard } from './project-card';
import { ButtonLink, Eyebrow, SectionHeading, TextLink } from './ui';

export function HomeAbout() {
  return (
    <section id="about" className="home-about home-section">
      <div className="container home-about-grid">
        <div>
          <Eyebrow>IEEE NTU Student Branch · Since {siteConfig.founded}</Eyebrow>
          <h2>{homeContent.about.title}</h2>
          <p className="home-about-lead">{homeContent.about.introduction}</p>
          <p>{homeContent.about.description}</p>
          <div className="button-row">
            <TextLink href="/about/">More about IEEE NTU</TextLink>
            <a href="https://www.ieee.org/" className="text-link">
              Visit IEEE.org <Icon name="diagonal" />
            </a>
          </div>
        </div>
        <CommunityPhoto
          alt="IEEE NTU students gathered after a community event"
          sizes="(max-width: 899px) 90vw, 45vw"
        />
      </div>
    </section>
  );
}

export function HomeEvents() {
  const featured = homeContent.featuredProjectSlugs.flatMap((slug) =>
    projects.filter((p) => p.slug === slug),
  );
  return (
    <section id="events" className="home-events home-section">
      <div className="container">
        <SectionHeading
          eyebrow="Explore our community"
          title={homeContent.events.title}
          description={homeContent.events.description}
        >
          <TextLink href="/initiatives/">View all initiatives</TextLink>
        </SectionHeading>
        <div className="home-events-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />
          ))}
        </div>
        {pastEvents.length > 0 && (
          <div className="event-archive">
            <h3>Past events</h3>
            <div className="event-archive-grid">
              {pastEvents.map((event) => (
                <article key={event.id}>
                  {event.image && (
                    <Image src={asset(event.image)} width={640} height={400} alt={event.title} />
                  )}
                  <time dateTime={event.date}>
                    {new Intl.DateTimeFormat('en-SG', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      timeZone: 'UTC',
                    }).format(new Date(event.date))}
                  </time>
                  <h4>{event.title}</h4>
                  {event.url && (
                    <a className="text-link" href={event.url}>
                      View event <Icon name="diagonal" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function HomeTeam() {
  const featured = homeContent.team.featuredIds.flatMap((id) => people.filter((p) => p.id === id));
  return (
    <section id="team" className="home-team home-section">
      <div className="container home-team-grid">
        <div className="home-team-copy">
          <Eyebrow>Our team · {committeeTerm}</Eyebrow>
          <h2>{homeContent.team.title}</h2>
          <p>{homeContent.team.description}</p>
          <ButtonLink href="/people/" secondary>
            Meet the full committee
          </ButtonLink>
        </div>
        <div className="home-team-people">
          {featured.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeJoin() {
  return (
    <section id="join-us" className="home-join home-section">
      <div className="container">
        <SectionHeading
          eyebrow="Join our community"
          title={homeContent.join.title}
          description={homeContent.join.description}
        />
        <div className="home-join-grid">
          {homeContent.join.opportunities.map((opportunity) => (
            <article key={opportunity.title}>
              <Icon name={opportunity.icon} />
              <h3>{opportunity.title}</h3>
              <p>{opportunity.description}</p>
              <TextLink href={opportunity.href}>{opportunity.linkLabel}</TextLink>
            </article>
          ))}
        </div>
        {homeContent.recruitmentUrl && (
          <a className="button button-primary recruitment-link" href={homeContent.recruitmentUrl}>
            Join IEEE NTU <Icon name="diagonal" />
          </a>
        )}
      </div>
    </section>
  );
}

export function HomePartnerships() {
  const approved = partners.filter((p) => p.approved);
  const hasContact = siteConfig.contactEmail || siteConfig.socialLinks.length > 0;
  return (
    <>
      <section id="partners" className="home-partners home-section">
        <div className="container">
          <div className="home-partners-heading">
            <div>
              <Eyebrow>Industry & partnerships</Eyebrow>
              <h2>Work with our community.</h2>
              <p>
                Connect students with industry through hackathons, knowledge sharing and meaningful
                technical projects.
              </p>
            </div>
            <ButtonLink href="/partnerships/">Partner with IEEE NTU</ButtonLink>
          </div>
          {approved.length > 0 && (
            <div className="partner-logos">
              {approved.map((partner) => (
                <a key={partner.name} href={partner.url}>
                  <Image src={asset(partner.logo)} alt={partner.name} width={180} height={80} />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      <Metrics />
      {hasContact && (
        <section id="contact" className="container home-contact home-section">
          <SectionHeading eyebrow="Connect with IEEE NTU" title="Contact us" />
          <div className="contact-links">
            {siteConfig.contactEmail && (
              <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>
                <Icon name="mail" />
                {siteConfig.contactEmail}
              </a>
            )}
            {siteConfig.socialLinks.map((social) => (
              <a className="text-link" key={social.url} href={social.url}>
                {social.label}
                <Icon name="diagonal" />
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
