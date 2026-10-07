export type Partner = {
  name: string;
  logo: string;
  url: string;
  kind: 'Sponsor' | 'Ecosystem partner';
  wide?: boolean;
};

// Jane Street and Crator are confirmed sponsors. Seven other identities appear on
// source slide 11. Two unconfirmed marks are excluded at the branch's request.
export const partners: Partner[] = [
  {
    name: 'Jane Street',
    logo: '/images/partners/jane-street.svg',
    url: 'https://www.janestreet.com/',
    kind: 'Sponsor',
    wide: true,
  },
  {
    name: 'Crator',
    logo: '/images/partners/crator.svg',
    url: 'https://www.cratorlabs.ai/erpnext',
    kind: 'Sponsor',
    wide: true,
  },
  {
    name: 'GovTech Singapore',
    logo: '/images/partners/govtech.png',
    url: 'https://www.tech.gov.sg/',
    kind: 'Ecosystem partner',
  },
  {
    name: 'YouthTechSG',
    logo: '/images/partners/youthtechsg.png',
    url: 'https://www.youthtech.sg/',
    kind: 'Ecosystem partner',
  },
  {
    name: 'EDB Singapore',
    logo: '/images/partners/edb.png',
    url: 'https://www.edb.gov.sg/',
    kind: 'Ecosystem partner',
  },
  {
    name: 'DSTA',
    logo: '/images/partners/dsta.png',
    url: 'https://www.dsta.gov.sg/',
    kind: 'Ecosystem partner',
  },
  {
    name: 'Reactor School',
    logo: '/images/partners/reactor-school.png',
    url: 'https://www.reactor.school/',
    kind: 'Ecosystem partner',
  },
  {
    name: 'IMDA',
    logo: '/images/partners/imda.png',
    url: 'https://www.imda.gov.sg/',
    kind: 'Ecosystem partner',
  },
  {
    name: 'NTU Career & Attachment Office',
    logo: '/images/partners/ntu-cao.png',
    url: 'https://www.ntu.edu.sg/education/career-guidance-industry-collaborations',
    kind: 'Ecosystem partner',
  },
];

export const partnershipAreas = [
  {
    title: 'Hackathons & events',
    description:
      'Support iNTUition and our community events through sponsorship, problem statements, prizes and mentorship.',
  },
  {
    title: 'Industry projects',
    description:
      'Work with student teams on practical technical challenges, from an initial idea to a finished deliverable.',
  },
  {
    title: 'Workshops & seminars',
    description:
      'Share technical expertise and industry experience through hands-on sessions and conversations with students.',
  },
  {
    title: 'Long-term partnerships',
    description:
      'Develop ongoing collaborations that support our members and connect student talent with industry opportunities.',
  },
];
