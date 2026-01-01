"use client";

import { useState } from "react";
import { ProjectTag, getProjectsByTag, tagLabels } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const tags: (ProjectTag | "*")[] = ["*", "ML", "DA", "EE"];

export default function ProjectGrid() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "*">("*");
  const projects = getProjectsByTag(activeTag);

  return (
    <div>
      <div className="filter-tabs">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-tab ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag === "*" ? "All" : tag}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
