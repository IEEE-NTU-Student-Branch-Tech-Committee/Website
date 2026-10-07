export type Project = {
  slug: string;
  name: string;
  category: 'Hackathon' | 'Community' | 'Industry';
  label: string;
  description: string;
  focus: string;
  image: string | null;
  imageAlt: string;
  externalUrl: string | null;
};

// Sources: AGM pp.3, 15–16. No event dates, registration links or client claims were supplied.
export const projects: Project[] = [
  {
    slug: 'intuition',
    name: 'iNTUition',
    category: 'Hackathon',
    label: 'Our flagship hackathon',
    description:
      'A meeting point for curious minds. Our annual hackathon brings students together to explore ideas, collaborate and build with technology.',
    focus: 'Ideate. Collaborate. Build.',
    image: '/images/intuition.webp',
    imageAlt: 'A presentation at the iNTUition hackathon',
    externalUrl: null,
  },
  {
    slug: 'coding-nights',
    name: 'Coding Nights',
    category: 'Community',
    label: 'Learn by doing',
    description:
      'Hands-on coding workshops where students practise technical skills, learn from one another and prepare for technical interviews. Coding Nights 1.0 and 2.0 are part of our Technology Committee’s programme.',
    focus: 'Code. Learn. Connect.',
    image: '/images/coding-nights.webp',
    imageAlt: 'Participants and organisers at Coding Nights',
    externalUrl: null,
  },
  {
    slug: 'industry-projects',
    name: 'Industry Projects',
    category: 'Industry',
    label: 'Connecting talent with industry',
    description:
      'We’re developing opportunities for student teams to collaborate with companies on meaningful technical projects, taking ideas into real-world contexts.',
    focus: 'Technical talent. Meaningful collaboration.',
    image: '/images/ntu-campus.webp',
    imageAlt: 'The Hive at Nanyang Technological University',
    externalUrl: null,
  },
  {
    slug: 'ieee-day',
    name: 'IEEE Day',
    category: 'Community',
    label: 'Engineering, together',
    description:
      'A flagship community initiative bringing students together around a shared interest in engineering, technology and innovation.',
    focus: 'A shared passion for technology.',
    image: '/images/ntu-campus.webp',
    imageAlt: 'The Hive on the NTU campus',
    externalUrl: null,
  },
];

export const workshops = {
  title: 'Workshops & seminars',
  description:
    'Industry-focused workshops and seminars connect our community with technical ideas and perspectives beyond the classroom.',
};
