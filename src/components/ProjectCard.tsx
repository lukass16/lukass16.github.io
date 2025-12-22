import Image from "next/image";
import Link from "next/link";
import { Project, tagLabels } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.slug}`} className="project-card">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={200}
        className="project-card-image"
      />
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-summary">{project.summary}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tagLabels[tag]}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

