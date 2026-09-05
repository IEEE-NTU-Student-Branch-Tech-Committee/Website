// Public summaries curated from the AGM. Detailed facts stay in their own data files.
export const homeContent = {
  about: {
    title: 'About us',
    introduction: 'Engineering, technology and a community to explore them with.',
    description:
      'Since 1991, IEEE NTU Student Branch has brought students together through hackathons, technical workshops, seminars and shared experiences. We connect curious minds with opportunities to learn, build and collaborate with industry.',
  },
  featuredProjectSlugs: ['intuition', 'coding-nights', 'ieee-day'],
  events: {
    title: 'Events & initiatives',
    description: 'A shared interest in technology. Different ways to get involved.',
  },
  team: {
    title: 'Meet our team',
    description: 'The students behind our community, events and technical opportunities.',
    featuredIds: ['unnav-sharma', 'aviraj-goyle', 'saba-azad'],
  },
  join: {
    title: 'Get involved',
    description: 'Find your place in our technical community.',
    opportunities: [
      {
        title: 'Learn together',
        description: 'Explore Coding Nights, IEEE Day and technical workshops.',
        href: '/initiatives/#coding-nights',
        linkLabel: 'Explore our events',
        icon: 'code',
      },
      {
        title: 'Build with others',
        description:
          'Bring your ideas to iNTUition and discover our direction for Industry Projects.',
        href: '/initiatives/#industry-projects',
        linkLabel: 'Discover our projects',
        icon: 'layers',
      },
      {
        title: 'Connect with the team',
        description:
          'Meet the students working across technology, community, partnerships and operations.',
        href: '/people/',
        linkLabel: 'Meet our people',
        icon: 'connections',
      },
    ],
  },
  // TODO: Set only when the branch has a confirmed public recruitment form.
  recruitmentUrl: null as string | null,
} as const;

// A dated event archive needs verified dates and approved public artwork first.
// These optional records render only when real event details are supplied.
export type EventRecord = {
  id: string;
  title: string;
  date: string;
  image: string | null;
  url: string | null;
};
export const pastEvents: EventRecord[] = [];
