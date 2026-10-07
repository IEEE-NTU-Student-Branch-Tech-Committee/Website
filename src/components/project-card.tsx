import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { asset } from '@/data/site';

export function ProjectArtwork({ project }: { project: Project }) {
  if (!project.image) return null;
  return (
    <div className="project-art">
      <Image
        src={asset(project.image)}
        alt={project.imageAlt}
        fill
        sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 33vw"
      />
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/initiatives/#${project.slug}`} className="project-card-link">
        <ProjectArtwork project={project} />
        <div className="project-card-body">
          <h3>{project.name}</h3>
          <p>{project.label}</p>
          <span className="project-read-more">
            Learn more <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
