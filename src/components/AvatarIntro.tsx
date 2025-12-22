import Image from "next/image";
import { profile } from "@/data/profile";
import { getIconByName } from "./Icons";

export default function AvatarIntro() {
  return (
    <section className="intro-section">
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={150}
        height={150}
        className="avatar"
        priority
      />
      <h1 className="intro-name">
        {profile.name}
        <span className="intro-status">{profile.statusEmoji}</span>
      </h1>
      <p className="intro-bio">{profile.shortBio}</p>
      <div className="social-links">
        {profile.social.map((link) => {
          const Icon = getIconByName(link.icon);
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="social-link"
              aria-label={link.name}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </section>
  );
}

