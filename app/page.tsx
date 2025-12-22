"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowProjects(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowProjects = () => {
    setShowProjects(true);
    setTimeout(() => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Remove emojis from bio
  const cleanBio = profile.bio.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/gu, '').replace(/\s+/g, ' ').trim();

  return (
    <>
      <section className="intro-section">
        <div className="intro-header">
          <div className="intro-name-block">
            <h1 className="intro-name">
              <span>Lukass</span>
              <span>Kellijs</span>
            </h1>
            <p className="intro-subtitle">Yale University, New Haven, CT</p>
            <button onClick={handleShowProjects} className="projects-trigger-btn">
              Projects →
            </button>
          </div>
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={140}
            height={140}
            className="intro-avatar"
            priority
          />
        </div>

        <div className="intro-divider" />

        <div className="intro-content">
          <div className="intro-left">
            <div className="intro-about">
              <h2>About</h2>
              <p>{cleanBio}</p>
            </div>
          </div>

          <div className="intro-sidebar">
            <h3>Social Media</h3>
            <div className="sidebar-links">
              {profile.social
                .filter((s) => s.name !== "Email")
                .map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
            </div>

            <h3>Contact</h3>
            <div className="contact-info">
              <p>{profile.email}</p>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={projectsRef}
        className={`projects-section ${showProjects ? "visible" : ""}`}
      >
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
        </div>
        <ProjectGrid />
      </div>
    </>
  );
}
