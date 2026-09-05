'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectArtwork } from './project-card';
import { Icon } from './icon';

const categories = ['All initiatives', 'Hackathon', 'Community', 'Industry'] as const;

export function InitiativePortfolio() {
  const [category, setCategory] = useState<string>('All initiatives');
  const visible = projects.filter((p) => category === 'All initiatives' || p.category === category);
  return (
    <section className="container portfolio-section" aria-label="Our initiatives">
      <div className="portfolio-toolbar">
        <div className="filter-group" role="group" aria-label="Filter initiatives">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-button ${category === c ? 'selected' : ''}`}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="mono" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'initiative' : 'initiatives'}
        </p>
      </div>
      <div className="initiative-list">
        {visible.map((project) => (
          <article key={project.slug} id={project.slug} className="initiative-detail">
            <ProjectArtwork project={project} />
            <div className="initiative-detail-copy">
              <div className="project-meta">
                <span className="tag">{project.category}</span>
                <span className="mono">0{projects.indexOf(project) + 1}</span>
              </div>
              <p className="eyebrow">{project.label}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="initiative-focus">
                <Icon name="spark" />
                <span>{project.focus}</span>
              </div>
              {project.externalUrl && (
                <a href={project.externalUrl} className="text-link">
                  Visit {project.name}
                  <Icon name="diagonal" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
