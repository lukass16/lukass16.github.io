import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.slug}`} className="project-card">
      <div className="project-card-image-wrapper">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="project-card-image"
        />
        <div className="project-card-overlay" />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-summary">{project.summary}</p>
        <div className="project-card-tags">
          {project.tags.map((tag, index) => (
            <span key={tag} className="project-tag">
              {tag}
              {index < project.tags.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
