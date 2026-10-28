import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GithubLogo } from "@phosphor-icons/react/ssr";

import { getProject, getProjects } from "@/lib/projects";
import { buttonVariants } from "@/components/ui/button";
import { TechStack } from "@/components/projects/tech-stack";

// `dynamicParams` is unavailable with cacheComponents; unknown slugs hit notFound().
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

/** Project detail page. Shows both `summary` and the long description; `date` only appears here. */
export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { Description } = project;

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/projects"
        className={buttonVariants({ variant: "ghost", size: "sm", className: "-ml-2" })}
      >
        <ArrowLeft data-icon="inline-start" aria-hidden />
        All projects
      </Link>

      <header className="mt-8">
        {project.date && (
          <p className="text-sm font-medium text-primary">{project.date}</p>
        )}
        <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
      </header>

      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={1280}
        height={720}
        preload
        className="mt-10 aspect-video w-full rounded-lg bg-muted object-cover"
      />

      <div className="mt-10">
        <TechStack tech={project.tech} />
      </div>

      <div className="mt-6">
        <Description />
      </div>

      <div className="mt-10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          <GithubLogo data-icon="inline-start" aria-hidden />
          View on GitHub
        </a>
      </div>
    </article>
  );
}
