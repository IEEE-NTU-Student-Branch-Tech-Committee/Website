'use client';

import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectArtwork } from './project-card';
import { TextLink } from './ui';

const categories = ['All initiatives', 'Hackathon', 'Community', 'Industry'] as const;

export function InitiativePortfolio() {
  const [category, setCategory] = useState<string>('All initiatives');
  const visible = projects.filter(
    (project) => category === 'All initiatives' || project.category === category,
  );

  useEffect(() => {
    function showLinkedInitiative() {
      if (projects.some((project) => `#${project.slug}` === window.location.hash))
        setCategory('All initiatives');
    }
    window.addEventListener('hashchange', showLinkedInitiative);
    return () => window.removeEventListener('hashchange', showLinkedInitiative);
  }, []);

  return (
    <section className="container portfolio-section" aria-label="Our initiatives">
      <div className="portfolio-toolbar">
        <div className="filter-group" role="group" aria-label="Filter initiatives">
          {categories.map((item) => (
            <button
              key={item}
              className={`filter-button ${category === item ? 'selected' : ''}`}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p aria-live="polite">
          {visible.length} {visible.length === 1 ? 'initiative' : 'initiatives'}
        </p>
      </div>
      <div className="initiative-list">
        {visible.map((project) => (
          <article key={project.slug} id={project.slug} className="initiative-detail">
            <ProjectArtwork project={project} />
            <div className="initiative-detail-copy">
              <p className="initiative-category">{project.category}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p className="initiative-focus">{project.focus}</p>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Visit {project.name} <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.slug === 'coding-nights' && (
                <TextLink href="/#contact">Follow our event announcements</TextLink>
              )}
              {project.slug === 'industry-projects' && (
                <TextLink href="/partnerships/">Explore collaboration opportunities</TextLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
