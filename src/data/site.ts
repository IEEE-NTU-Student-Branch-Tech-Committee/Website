export const siteConfig = {
  name: 'IEEE NTU Student Branch',
  university: 'Nanyang Technological University',
  founded: 1991,
  term: '2026/27',
  description:
    'A student-run engineering and technology community at Nanyang Technological University. Explore our hackathon, technical initiatives, people and industry collaborations.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ieeentu.com',
  contactEmail: 'IEEENTU-Branch@e.ntu.edu.sg' as string | null,
  partnershipEmail: null as string | null,
  socialLinks: [
    {
      label: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/ieee_ntu/',
      description: 'Event announcements and life at IEEE NTU.',
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/company/ieee-ntu-student-branch/',
      description: 'Our people, partnerships and opportunities.',
    },
    {
      label: 'GitHub',
      icon: 'github',
      url: 'https://github.com/IEEE-NTU-Student-Branch-Tech-Committee',
      description: 'Projects from our Technology Committee.',
    },
  ] as const,
  friends: [{ label: 'NTU Women in Tech', url: 'https://www.ntuwit.com/' }],
};

type NavigationItem = { label: string; href: string; section?: string; activePath?: string };
export const navigation: NavigationItem[] = [
  { label: 'About', href: '/#about', section: 'about', activePath: '/about/' },
  { label: 'Our Team', href: '/people/', section: 'team', activePath: '/people/' },
  { label: 'Events', href: '/#events', section: 'events', activePath: '/initiatives/' },
  { label: 'Join Us', href: '/#join-us', section: 'join-us' },
  { label: 'Sponsors', href: '/#partners', section: 'partners', activePath: '/partnerships/' },
  ...(siteConfig.contactEmail || siteConfig.socialLinks.length
    ? [{ label: 'Contact Us', href: '/#contact', section: 'contact' }]
    : []),
];

export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
