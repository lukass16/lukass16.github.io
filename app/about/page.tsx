import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { getIconByName, DownloadIcon } from "@/components/Icons";

export const metadata = {
  title: "CV - Lukass Kellijs",
  description: "About Lukass Kellijs - CV and Contact Information",
};

// Remove emojis from text
const cleanBio = (text: string) =>
  text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();

export default function AboutPage() {
  return (
    <section className="cv-section">
      <div className="cv-header">
        <div className="cv-name-block">
          <h1 className="cv-name">
            <span>Lukass</span>
            <span>Kellijs</span>
          </h1>
          <p className="cv-subtitle">Yale University, New Haven, CT</p>
        </div>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={130}
          height={130}
          className="cv-avatar"
          priority
        />
      </div>

      <div className="cv-divider" />

      <div className="cv-content">
        <div className="cv-main">
          <div className="cv-block">
            <h2>About</h2>
            <p>{cleanBio(profile.bio)}</p>
          </div>

          <div className="cv-block">
            <h2>Education</h2>
            <div className="cv-item">
              <h3>Yale University</h3>
              <p className="cv-item-meta">September 2023 — May 2027 (New Haven, USA)</p>
              <p>Applied Physics (B.S.) '27 (GPA: 3.99/4.00)</p>
            </div>
            <div className="cv-item">
              <h3>Engineering High School of Riga Technical University</h3>
              <p className="cv-item-meta">September 2020 — July 2023 (Riga, Latvia)</p>
            </div>
          </div>

          <div className="cv-block">
            <h2>Experience & Projects</h2>
            <div className="cv-item">
              <h3>Research at ETH Zurich CAMLab</h3>
              <p className="cv-item-meta">January 2025 — Present</p>
              <p>Physics-informed losses for training and fine-tuning neural operators.</p>
            </div>
            <div className="cv-item">
              <h3>Head / Public Relations Manager at European Space Camp (ESC)</h3>
              <p className="cv-item-meta">September 2022 — Present (Andøya, Norway)</p>
              <p>Leading international volunteer team for Europe's largest educational space camp.</p>
            </div>
            <div className="cv-item">
              <h3>Director of Outreach, Yale Undergraduate Aerospace Association</h3>
              <p className="cv-item-meta">September 2023 — Present (New Haven, USA)</p>
              <p>Board member, responsible for alumni relations and outreach events.</p>
            </div>
            <div className="cv-item">
              <h3>Avionics Team Lead, RTU High Power Rocketry Team</h3>
              <p className="cv-item-meta">October 2020 — September 2023 (Riga, Latvia)</p>
              <p>Led avionics sub-team, developing and testing electrical systems for launches.</p>
            </div>
          </div>
        </div>

        <div className="cv-sidebar">
          <div className="cv-block">
            <h2>Links</h2>
            <div className="cv-links">
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
              <Link href="/">Portfolio</Link>
            </div>
          </div>

          <div className="cv-block">
            <h2>Contact</h2>
            <p>{profile.email}</p>
          </div>

          <div className="cv-block">
            <h2>Skills</h2>
            <p>Python, Data Analysis (NumPy, SciPy, Pandas), ML (PyTorch), C++, Matlab, R, JavaScript, Electronics, CAD, LaTeX</p>
          </div>

          <div className="cv-block">
            <h2>Interests</h2>
            <p>Deep Learning, Physics, Engineering, Inverse Design, Space, Earth and Planetary Sciences, Climate</p>
          </div>

          <div className="cv-block cv-download">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-link"
            >
              <DownloadIcon size={16} />
              Download Full CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
