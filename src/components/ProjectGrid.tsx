"use client";

import { useState } from "react";
import { ProjectTag, getProjectsByTag } from "@/data/projects";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "*">("*");
  const projects = getProjectsByTag(activeTag);

  return (
    <div>
      <FilterTabs activeTag={activeTag} onTagChange={setActiveTag} />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

