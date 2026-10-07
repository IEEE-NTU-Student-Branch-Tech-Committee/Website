import { siteConfig } from '@/data/site';
import { Icon } from './icon';

export function SocialLinks({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className={detailed ? 'social-links social-links-detailed' : 'social-links'}>
      {siteConfig.socialLinks.map((social) => (
        <li key={social.url}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <Icon name={social.icon} />
            <span>{social.label}</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {detailed && <p>{social.description}</p>}
        </li>
      ))}
    </ul>
  );
}
