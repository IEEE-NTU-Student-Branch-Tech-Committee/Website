import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './icon';

export function ButtonLink({
  href,
  children,
  secondary = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`}
      href={href}
    >
      {children}
      <Icon name="diagonal" />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-link">
      {children}
      <Icon name="arrow" />
    </Link>
  );
}

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  number,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  number?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow number={number}>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero container">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="page-intro">{description}</p>
      {children}
    </section>
  );
}
