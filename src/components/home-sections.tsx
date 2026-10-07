import { homeContent } from '@/data/home';
import { people, committeeTerm } from '@/data/people';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { CommunityPhoto } from './community-photo';
import { Icon } from './icon';
import { PersonCard } from './person-card';
import { ProjectCard } from './project-card';
import { PartnerLogos } from './partner-logos';
import { SocialLinks } from './social-links';
import { TextLink } from './ui';

export function HomeAbout() {
  return (
    <section id="about" className="home-about home-section">
      <div className="container home-about-grid">
        <div>
          <h2>{homeContent.about.title}</h2>
          <p>{homeContent.about.description}</p>
          <p>{homeContent.about.mission}</p>
          <div className="button-row">
            <TextLink href="/about/">More about us</TextLink>
            <a
              href="https://www.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit IEEE.org <Icon name="diagonal" />
            </a>
          </div>
        </div>
        <CommunityPhoto
          alt="Students at an IEEE NTU community event"
          sizes="(max-width: 899px) 90vw, 45vw"
        />
      </div>
    </section>
  );
}

export function HomeEvents() {
  const featured = homeContent.featuredProjectSlugs.flatMap((slug) =>
    projects.filter((project) => project.slug === slug),
  );
  return (
    <section id="events" className="home-events home-section">
      <div className="container">
        <div className="centered-heading">
          <h2>Events & Initiatives</h2>
          <p>Hackathons, hands-on workshops and a community of students who enjoy technology.</p>
        </div>
        <div className="home-events-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="section-link">
          <TextLink href="/initiatives/">All our initiatives</TextLink>
        </div>
      </div>
    </section>
  );
}

export function HomeTeam() {
  const featured = homeContent.team.featuredIds.flatMap((id) =>
    people.filter((person) => person.id === id),
  );
  return (
    <section id="team" className="home-team home-section">
      <div className="container">
        <div className="centered-heading">
          <h2>{homeContent.team.title}</h2>
          <p>Committee {committeeTerm}</p>
        </div>
        <div className="home-team-people">
          {featured.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
        <div className="section-link">
          <TextLink href="/people/">Meet the full committee</TextLink>
        </div>
      </div>
    </section>
  );
}

export function HomeJoin() {
  return (
    <section id="join-us" className="home-join home-section">
      <div className="container home-join-inner">
        <h2>Join Us</h2>
        <p>
          Interested in technology? Join a workshop, take part in iNTUition, or get involved with
          our technical projects. Students from across NTU are welcome.
        </p>
        <p>
          Follow us on Instagram for event announcements and opportunities to join our community.
        </p>
        <div className="button-row">
          <a
            className="button button-primary"
            href={siteConfig.socialLinks[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" />
            Follow IEEE NTU
          </a>
          <TextLink href="/initiatives/">Explore our events</TextLink>
        </div>
      </div>
    </section>
  );
}

export function HomePartnerships() {
  return (
    <>
      <section id="partners" className="home-partners home-section">
        <div className="container">
          <div className="centered-heading">
            <h2>Our Sponsors & Partners</h2>
            <p>Supporting student opportunities and connecting our community with industry.</p>
          </div>
          <PartnerLogos />
          <div className="section-link">
            <TextLink href="/partnerships/">Work with IEEE NTU</TextLink>
          </div>
        </div>
      </section>
      <section id="contact" className="home-contact home-section">
        <div className="container">
          <div className="centered-heading">
            <h2>Contact Us</h2>
            <p>Get in touch and stay connected with IEEE NTU.</p>
          </div>
          <SocialLinks detailed />
          <p className="contact-location">Nanyang Technological University · Singapore</p>
        </div>
      </section>
    </>
  );
}
