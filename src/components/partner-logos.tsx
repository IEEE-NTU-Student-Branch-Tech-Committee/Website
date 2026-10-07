import Image from 'next/image';
import { partners } from '@/data/partners';
import { asset } from '@/data/site';

export function PartnerLogos() {
  return (
    <ul className="partner-logos" aria-label="Sponsors and ecosystem partners">
      {partners.map((partner) => (
        <li key={partner.name}>
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-link"
          >
            <span className={`partner-logo-image${partner.wide ? ' partner-logo-wide' : ''}`}>
              <Image
                src={asset(partner.logo)}
                alt={partner.name}
                width={partner.wide ? 200 : 112}
                height={112}
              />
            </span>
            <span className="partner-name">{partner.name}</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
