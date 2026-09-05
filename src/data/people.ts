import { siteConfig } from './site';

export type Person = {
  id: string;
  name: string;
  role: string;
  group: 'Leadership' | 'Directors';
  portfolio: string;
  portrait: string | null;
  profileUrl: string | null;
};

export const committeeTerm = siteConfig.term;
// Name/role mapping: AGM pp.6–7. Image filenames correspond to verified PDF image objects.
export const people: Person[] = [
  {
    id: 'unnav-sharma',
    name: 'Unnav Sharma',
    role: 'President',
    group: 'Leadership',
    portfolio: 'Leadership',
    portrait: 'unnav-sharma.webp',
    profileUrl: null,
  },
  {
    id: 'aviraj-goyle',
    name: 'Aviraj Goyle',
    role: 'Vice President, Internal',
    group: 'Leadership',
    portfolio: 'Leadership',
    portrait: 'aviraj-goyle.webp',
    profileUrl: null,
  },
  {
    id: 'saba-azad',
    name: 'Saba Azad',
    role: 'Vice President, External',
    group: 'Leadership',
    portfolio: 'Leadership',
    portrait: 'saba-azad.webp',
    profileUrl: null,
  },
  {
    id: 'bhavya-sangal',
    name: 'Bhavya Sangal',
    role: 'Honorary General Secretary',
    group: 'Leadership',
    portfolio: 'Strategy Office',
    portrait: 'bhavya-sangal.webp',
    profileUrl: null,
  },
  {
    id: 'hiren-jain',
    name: 'Hiren Jain',
    role: 'Treasurer',
    group: 'Leadership',
    portfolio: 'Strategy Office',
    portrait: 'hiren-jain.webp',
    profileUrl: null,
  },
  {
    id: 'maanya-malhotra',
    name: 'Maanya Malhotra',
    role: 'Business Director',
    group: 'Directors',
    portfolio: 'Business Development',
    portrait: 'maanya-malhotra.webp',
    profileUrl: null,
  },
  // TODO: Clean original portrait; the deck photo includes a recruitment badge.
  {
    id: 'divija-jain',
    name: 'Divija Jain',
    role: 'Business Director',
    group: 'Directors',
    portfolio: 'Business Development',
    portrait: null,
    profileUrl: null,
  },
  {
    id: 'arjun-prakash',
    name: 'Arjun Prakash',
    role: 'Technology Director',
    group: 'Directors',
    portfolio: 'Technology',
    portrait: 'arjun-prakash.webp',
    profileUrl: null,
  },
  {
    id: 'rushika-gupta',
    name: 'Rushika Gupta',
    role: 'Technology Director',
    group: 'Directors',
    portfolio: 'Technology',
    portrait: 'rushika-gupta.webp',
    profileUrl: null,
  },
  {
    id: 'chuhan-mei',
    name: 'Chuhan Mei',
    role: 'Technology Director',
    group: 'Directors',
    portfolio: 'Technology',
    portrait: 'chuhan-mei.webp',
    profileUrl: null,
  },
  // TODO: The p.7 portrait duplicates Saba Azad's image; obtain Andy's verified portrait/full name.
  {
    id: 'andy',
    name: 'Andy',
    role: 'Logistics Director',
    group: 'Directors',
    portfolio: 'Logistics',
    portrait: null,
    profileUrl: null,
  },
  {
    id: 'khushi-modi',
    name: 'Khushi Modi',
    role: 'Marketing Director',
    group: 'Directors',
    portfolio: 'Marketing',
    portrait: 'khushi-modi.webp',
    profileUrl: null,
  },
  {
    id: 'nandisha-jindal',
    name: 'Nandisha Jindal',
    role: 'Marketing Director',
    group: 'Directors',
    portfolio: 'Marketing',
    portrait: 'nandisha-jindal.webp',
    profileUrl: null,
  },
];
