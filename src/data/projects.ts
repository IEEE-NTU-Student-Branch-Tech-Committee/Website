export type Project = {
  slug: string;
  name: string;
  category: 'Hackathon' | 'Community' | 'Industry';
  label: string;
  description: string;
  focus: string;
  illustration: 'intuition' | 'coding' | 'industry' | 'ieee';
  image: string | null;
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
    illustration: 'intuition',
    image: null,
    externalUrl: null,
  },
  {
    slug: 'coding-nights',
    name: 'Coding Nights',
    category: 'Community',
    label: 'Learn by doing',
    description:
      'A space for our technical community to come together around code, develop skills and share the process of building.',
    focus: 'Code. Learn. Connect.',
    illustration: 'coding',
    image: null,
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
    illustration: 'industry',
    image: null,
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
    illustration: 'ieee',
    image: null,
    externalUrl: null,
  },
];

export const workshops = {
  title: 'Keep your curiosity moving.',
  description:
    'Industry-focused workshops and seminars connect our community with technical ideas and perspectives beyond the classroom.',
};
