import type { Metadata } from 'next';
import { PageHero } from '@/components/ui';
import { PersonCard } from '@/components/person-card';
import { PartnershipCTA } from '@/components/partnership-cta';
import { people, committeeTerm } from '@/data/people';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Team',
  description: `Meet the ${committeeTerm} leadership and directors of IEEE NTU Student Branch.`,
  alternates: { canonical: `${siteConfig.url}/people/` },
};

const departments = [
  {
    id: 'leadership',
    title: 'Branch Leadership',
    members: people.filter((person) => person.group === 'Leadership'),
  },
  {
    id: 'business-development',
    title: 'Business Development',
    members: people.filter(
      (person) => person.group === 'Directors' && person.portfolio === 'Business Development',
    ),
  },
  {
    id: 'technology',
    title: 'Technology',
    members: people.filter(
      (person) => person.group === 'Directors' && person.portfolio === 'Technology',
    ),
  },
  {
    id: 'logistics',
    title: 'Logistics',
    members: people.filter(
      (person) => person.group === 'Directors' && person.portfolio === 'Logistics',
    ),
  },
  {
    id: 'marketing',
    title: 'Marketing',
    members: people.filter(
      (person) => person.group === 'Directors' && person.portfolio === 'Marketing',
    ),
  },
];

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="Our committee"
        title="Our Team"
        description={`The ${committeeTerm} committee of IEEE NTU Student Branch.`}
      />
      <nav className="container team-jump-links" aria-label="Committee sections">
        {departments.map((department) => (
          <a key={department.id} href={`#${department.id}`}>
            {department.title}
          </a>
        ))}
      </nav>
      <div className="container team-directory">
        {departments.map((department) => (
          <section
            id={department.id}
            className="people-section"
            key={department.id}
            aria-labelledby={`${department.id}-heading`}
          >
            <h2 id={`${department.id}-heading`}>{department.title}</h2>
            <div className="people-grid">
              {department.members.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <PartnershipCTA />
    </>
  );
}
