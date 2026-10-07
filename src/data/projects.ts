export type Project = {
  slug: string;
  name: string;
  category: 'Hackathon' | 'Community' | 'Industry';
  label: string;
  description: string;
  focus: string;
  image: string | null;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
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
    image: '/images/intuition-event.webp',
    imageAlt: 'Participants in the lecture theatre at iNTUition v12.0',
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
    image: '/images/coding-nights-event.webp',
    imageAlt: 'Participants receiving certificates at Coding Nights',
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
    image: '/images/industry.jpg',
    imageAlt: 'Logos of Meta, Apple, NVIDIA, Google and OpenAI',
    imageFit: 'contain',
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
  {
    slug: 'annual-general-meeting',
    name: 'Annual General Meeting (AGM)',
    category: 'Community',
    label: 'Welcome, handover and the year ahead',
    description:
      'Held each academic year, our Annual General Meeting welcomes new members, brings new and returning members together, and marks the handover between outgoing and incoming committees. It is also an opportunity to discuss the branch’s plans for the year ahead.',
    focus: 'Meet the community, support the handover and plan the new academic year.',
    image: null,
    imageAlt: '',
    externalUrl: null,
  },
];

export const workshops = {
  title: 'Workshops & seminars',
  description:
    'Industry-focused workshops and seminars connect our community with technical ideas and perspectives beyond the classroom.',
};
