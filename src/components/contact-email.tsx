import { siteConfig } from '@/data/site';
import { Icon } from './icon';

export function ContactEmail({ compact = false }: { compact?: boolean }) {
  if (!siteConfig.contactEmail) return null;
  return (
    <a
      className={`contact-email${compact ? ' contact-email-compact' : ''}`}
      href={`mailto:${siteConfig.contactEmail}`}
      aria-label={`Email IEEE NTU at ${siteConfig.contactEmail}`}
    >
      <Icon name="mail" />
      <span>
        {!compact && 'Email: '}
        {siteConfig.contactEmail}
      </span>
    </a>
  );
}
