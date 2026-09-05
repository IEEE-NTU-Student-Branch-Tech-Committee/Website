export const siteConfig = {
  name: 'IEEE NTU Student Branch',
  university: 'Nanyang Technological University',
  founded: 1991,
  term: '2026/27',
  description:
    'A student-run engineering and technology community at Nanyang Technological University. Explore our hackathon, technical initiatives, people and industry collaborations.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://dasbootu9607.github.io/IEEE-NTU-Student-Branch-Website',
  // TODO: Supply a verified public inbox and approved social URLs. Empty values are never displayed.
  contactEmail: null as string | null,
  partnershipEmail: null as string | null,
  socialLinks: [] as { label: string; url: string }[],
};

type NavigationItem = { label: string; href: string; section?: string; activePath?: string };
export const navigation: NavigationItem[] = [
  { label: 'About', href: '/#about', section: 'about', activePath: '/about/' },
  { label: 'Our team', href: '/people/', section: 'team', activePath: '/people/' },
  { label: 'Events', href: '/#events', section: 'events', activePath: '/initiatives/' },
  { label: 'Join us', href: '/#join-us', section: 'join-us' },
  { label: 'Partnerships', href: '/#partners', section: 'partners', activePath: '/partnerships/' },
  ...(siteConfig.contactEmail || siteConfig.socialLinks.length
    ? [{ label: 'Contact', href: '/#contact', section: 'contact' }]
    : []),
];

export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
