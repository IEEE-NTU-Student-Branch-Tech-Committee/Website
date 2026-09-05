import Image from 'next/image';
import type { Person } from '@/data/people';
import { asset } from '@/data/site';

export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="person-card">
      <div className="person-image">
        {person.portrait ? (
          <Image
            src={asset(`/images/${person.portrait}`)}
            alt={person.name}
            width={480}
            height={540}
            sizes="(max-width: 600px) 45vw, (max-width: 1024px) 30vw, 24vw"
          />
        ) : (
          <div className="person-fallback" aria-hidden="true">
            <span>
              {person.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
            <div className="fallback-diamond" />
          </div>
        )}
        <span className="person-portfolio">{person.portfolio}</span>
      </div>
      <div className="person-info">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
        {person.profileUrl && (
          <a href={person.profileUrl} className="text-link">
            View profile<span className="sr-only"> of {person.name}</span>
          </a>
        )}
      </div>
    </article>
  );
}
