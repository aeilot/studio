import Link from "next/link";
import { getFeaturedProjects, type Project } from "@/lib/projects";

function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function ProjectLink({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const className = "project-link";
  const content = (
    <>
      <span className="project-index">{formatIndex(index)}</span>
      <div className="project-body">
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        <p className="project-title">{project.title}</p>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
      </div>
      {project.year != null && (
        <span className="project-year">{project.year}</span>
      )}
    </>
  );

  if (project.external ?? project.href.startsWith("http")) {
    return (
      <a
        href={project.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={project.href} className={className}>
      {content}
    </Link>
  );
}

export function ProjectList() {
  const projects = getFeaturedProjects();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="projects-section content-wrap">
      <h2 className="section-label">Selected work</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={project.id} className="project-row">
            <ProjectLink project={project} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
