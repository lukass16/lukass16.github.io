import Image from "next/image";
import { profile } from "@/data/profile";
import { getIconByName, DownloadIcon } from "@/components/Icons";

export const metadata = {
  title: "CV - Lukass Kellijs",
  description: "About Lukass Kellijs - CV and Contact Information",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-section">
        <div className="about-header">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={180}
            height={180}
            className="about-avatar"
            priority
          />
          <h1 className="about-name">{profile.name}</h1>
          <div className="social-links">
            {profile.social.map((link) => {
              const Icon = getIconByName(link.icon);
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.url.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="social-link"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <p className="about-bio">{profile.bio}</p>

        <div style={{ textAlign: "center" }}>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            <DownloadIcon size={18} />
            View my CV as a PDF
          </a>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="contact-title">Get in touch</h2>
        <a href={`mailto:${profile.email}`} className="contact-email">
          {profile.email}
        </a>
      </section>
    </>
  );
}

