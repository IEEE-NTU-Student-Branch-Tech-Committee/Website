import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { asset } from '@/data/site';
import { Icon } from './icon';

export function ProjectArtwork({ project }: { project: Project }) {
  if (project.image)
    return (
      <div className="project-art">
        <Image
          src={asset(project.image)}
          alt={`${project.name} initiative`}
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
        />
      </div>
    );
  return (
    <div className={`project-art art-${project.illustration}`} aria-hidden="true">
      <span className="art-corner">IEEE NTU / {project.category.toUpperCase()}</span>
      {project.illustration === 'intuition' && (
        <>
          <div className="intuition-orbits">
            <i />
            <i />
            <i />
          </div>
          <span className="art-word">
            iNTUition<span>WHERE IDEAS TAKE SHAPE.</span>
          </span>
          <span className="art-index">01 / BUILD</span>
        </>
      )}
      {project.illustration === 'coding' && (
        <>
          <div className="code-lines">
            <span>
              <b>01</b>
              <i>const</i> possibility = {'{'}
            </span>
            <span>
              <b>02</b> &nbsp; curiosity: <em>true</em>,
            </span>
            <span>
              <b>03</b> &nbsp; community: <em>connected</em>
            </span>
            <span>
              <b>04</b>
              {'};'}
            </span>
          </div>
          <span className="coding-symbol">{'</>'}</span>
          <span className="art-index">02 / CONNECT</span>
        </>
      )}
      {project.illustration === 'industry' && (
        <>
          <div className="industry-blocks">
            <i />
            <i />
            <i />
          </div>
          <span className="art-word small-art-word">
            Ideas meet
            <br />
            industry.
          </span>
          <span className="art-index">03 / COLLABORATE</span>
        </>
      )}
      {project.illustration === 'ieee' && (
        <>
          <div className="ieee-orbit">
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="art-word small-art-word">
            Engineering.
            <br />
            Together.
          </span>
          <span className="art-index">04 / COMMUNITY</span>
        </>
      )}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <Link href={`/initiatives/#${project.slug}`} className="project-card-link">
        <ProjectArtwork project={project} />
        <div className="project-card-body">
          <div className="project-meta">
            <span className="tag">{project.category}</span>
            <span className="mono">0{index + 1}</span>
          </div>
          <h3>
            {project.name}
            <span className="round-arrow">
              <Icon name="diagonal" />
            </span>
          </h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </article>
  );
}
