import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import { ArrowLeftIcon, getIconByName } from "@/components/Icons";
import MarkdownContent from "@/components/MarkdownContent";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Lukass Kellijs`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <article className="project-page">
      <Link href="/" className="back-link">
        <ArrowLeftIcon size={16} />
        Back to projects
      </Link>

      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-meta">
          <span className="project-date">{formatDate(project.date)}</span>
          <div className="project-links">
            {project.links.map((link) => {
              const Icon = getIconByName(link.icon);
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Icon size={16} />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="project-featured-image"
        priority
      />

      <MarkdownContent content={project.content} />
    </article>
  );
}

