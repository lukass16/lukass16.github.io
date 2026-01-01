import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { DownloadIcon } from "@/components/Icons";

export const metadata = {
  title: "CV - Lukass Kellijs",
  description: "About Lukass Kellijs - CV and Contact Information",
};

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
            <p>
              I am an undergraduate student at Yale University studying Applied Physics. 
              I focus on using theoretical and computational methods—such as machine learning 
              and physical modeling—for engineering research and development. I enjoy pursuing 
              opportunities to practically learn and participate in scientific activities and 
              enjoy creating such opportunities for others through volunteering in educational projects.
            </p>
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
            <h2>Research</h2>
            <div className="cv-item">
              <h3>Logan Wright Applied Physics Laboratory, Yale University</h3>
              <p className="cv-item-meta">September 2024 — Present (New Haven, USA)</p>
              <p>Using Machine Learning methods for the inverse design of optical computing systems.</p>
            </div>
            <div className="cv-item">
              <h3>Computational and Applied Mathematics Laboratory, ETH Zürich</h3>
              <p className="cv-item-meta">May 2025 — July 2025 (Zürich, Switzerland)</p>
              <p>Summer research in scientific machine learning—exploring the use of physics-informed losses for the training of neural operator models.</p>
            </div>
            <div className="cv-item">
              <h3>SciML Plasma Turbulence Surrogate Models</h3>
              <p className="cv-item-meta">September 2024 — May 2025 (New Haven, USA)</p>
              <p>Exploring methods of Scientific Machine Learning to create efficient surrogate models for plasma turbulence simulations using data from the MIT PSFC.</p>
            </div>
          </div>

          <div className="cv-block">
            <h2>Activities</h2>
            <div className="cv-item">
              <h3>Co-President at Yale AI Association</h3>
              <p className="cv-item-meta">September 2025 — Present (New Haven, USA)</p>
              <p>Founded club of more than 100 members, propose and organize events, lead club work.</p>
            </div>
            <div className="cv-item">
              <h3>Head / Public Relations Manager at European Space Camp (ESC)</h3>
              <p className="cv-item-meta">September 2022 — September 2025 (Andøya, Norway)</p>
              <p>Largest educational space camp in Europe. Led a team of 6 international volunteers for the past 3 years—planning, organizing, and promoting ESC.</p>
            </div>
            <div className="cv-item">
              <h3>Director of Outreach / Member at Yale Undergraduate Aerospace Association</h3>
              <p className="cv-item-meta">September 2023 — September 2025 (New Haven, USA)</p>
              <p>Board member, responsible for alumni relations, speaker, and outreach events for the club. Led projects in CubeSat (Mechanical), and Liquid Rocket (Propulsion) teams.</p>
            </div>
            <div className="cv-item">
              <h3>Avionics Team Lead at Riga Technical University High Power Rocketry Team</h3>
              <p className="cv-item-meta">October 2020 — September 2023 (Riga, Latvia)</p>
              <p>First rocketry team in Latvia. In charge of leading the Avionics sub-team, developing and testing all electrical systems used in our launches.</p>
            </div>
          </div>

          <div className="cv-block">
            <h2>Achievements</h2>
            <ul className="cv-achievements-list">
              <li>International Physics Olympiad 2022, 2023 — Bronze Medal</li>
              <li>European Physics Olympiad 2022 — Bronze Medal</li>
              <li>Latvian National Physics Olympiad 2021, 2022, 2023 — 1st place</li>
              <li>EU Contest for Young Scientists 2022 — Biodiversity Award</li>
              <li>Nordic-Baltic Physics Olympiad 2022 — Silver Medal</li>
              <li>Baltic States French Olympiad 2021 — Silver Medal</li>
            </ul>
          </div>

          <div className="cv-block">
            <h2>Relevant Coursework</h2>
            <div className="cv-coursework">
              <p><strong>Graduate:</strong> S&DS 6890 Scientific Machine Learning, ENV 5940 Global Carbon Cycle (Audit), CPSC 5710 Trustworthy Deep Learning</p>
              <p><strong>Undergraduate:</strong> CPSC 4520 Deep Learning Theory and Applications, PHYS 4400 Quantum Mechanics I and II, PHYS 4500 Thermodynamics and Statistical Mechanics, PHYS 4300 Electromagnetic Fields and Optics, S&DS 2380 Probability and Bayesian Statistics, MENG 2050 Computer-Aided Engineering, MENG 1105 Mechanical Design</p>
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
            <div className="cv-contact-details">
              <p>{profile.email}</p>
              <p>+1 (203) 410-5343</p>
              <p>+371 20001603</p>
              <p className="cv-location">Riga, Latvia / New Haven, USA</p>
            </div>
          </div>

          <div className="cv-block">
            <h2>Skills</h2>
            <p>Python, ML (PyTorch), Data Analysis (NumPy, SciPy, Pandas), C++, Matlab, R, JavaScript, Electronics, Embedded Programming, CAD (Solidworks, Onshape), 3D Printing, Graphic Design, LaTeX</p>
          </div>

          <div className="cv-block">
            <h2>Interests</h2>
            <p>Deep Learning, Reinforcement Learning, Physics, Engineering, Inverse Design, Sensor Technologies, Robotics, Space, Earth and Planetary Sciences, Climate Sciences, Green Energy</p>
          </div>

          <div className="cv-block">
            <h2>Languages</h2>
            <p>Latvian, English, German, French</p>
          </div>

          <div className="cv-block">
            <h2>Hobbies</h2>
            <p>Climbing, Basketball, Skiing, Snowboarding, Downhill Longboarding, Guitar, Reading</p>
          </div>

          <div className="cv-block cv-download">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-link"
            >
              <DownloadIcon size={16} />
              Download CV as PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
