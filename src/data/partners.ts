export type Partner = { name: string; logo: string; url: string; approved: boolean };
// TODO: Add only confirmed public partners with approved, current logo files.
export const partners: Partner[] = [];

export const partnershipAreas = [
  {
    number: '01',
    title: 'Hackathon & event partnerships',
    description:
      'Connect with student technologists through iNTUition, IEEE Day and our technical community initiatives.',
    tags: ['iNTUition', 'IEEE Day'],
  },
  {
    number: '02',
    title: 'Industry Projects',
    description:
      'Explore opportunities for student teams and industry to work together on meaningful technical challenges.',
    tags: ['Technical collaboration', 'Student talent'],
  },
  {
    number: '03',
    title: 'Knowledge & expertise',
    description:
      'Bring industry perspectives into the student community through technical workshops and seminars.',
    tags: ['Workshops', 'Seminars'],
  },
  {
    number: '04',
    title: 'Long-term collaboration',
    description:
      'Build relationships that create ongoing opportunities for students, connecting our technical community with the wider ecosystem.',
    tags: ['Industry connections', 'Community'],
  },
];
