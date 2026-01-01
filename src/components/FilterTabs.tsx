"use client";

import { ProjectTag, tagLabels } from "@/data/projects";

interface FilterTabsProps {
  activeTag: ProjectTag | "*";
  onTagChange: (tag: ProjectTag | "*") => void;
}

const tags: (ProjectTag | "*")[] = ["*", "ML", "DA", "EE", "OTHER"];

export default function FilterTabs({ activeTag, onTagChange }: FilterTabsProps) {
  return (
    <div className="filter-tabs">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`filter-tab ${activeTag === tag ? "active" : ""}`}
          onClick={() => onTagChange(tag)}
        >
          {tagLabels[tag]}
        </button>
      ))}
    </div>
  );
}

