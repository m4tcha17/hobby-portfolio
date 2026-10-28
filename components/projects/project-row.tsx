import Image from "next/image";
import Link from "next/link";
import { GithubLogoIcon } from "@phosphor-icons/react/ssr";

import type { Project } from "@/lib/projects";
import { buttonVariants } from "@/components/ui/button";
import { TechStack } from "@/components/projects/tech-stack";

/**
 * `/projects` list row. Shows the long description, never `summary`.
 * The title link is stretched over the whole row; the GitHub button sits above it.
 */
export function ProjectRow({ project }: { project: Project }) {
  const { Description } = project;

  return (
    <article className="group relative grid gap-6 rounded-lg p-4 transition-colors hover:bg-muted/50 has-[a[data-row-link]:focus-visible]:ring-2 has-[a[data-row-link]:focus-visible]:ring-ring sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={640}
        height={360}
        className="aspect-video w-full rounded-md bg-muted object-cover"
      />
      <div className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            data-row-link
            className="outline-none after:absolute after:inset-0 after:rounded-lg"
          >
            {project.title}
          </Link>
        </h2>
        <div className="text-sm">
          <Description />
        </div>
        <TechStack tech={project.tech} />
        <div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg", className: "relative z-10" })}
          >
            <GithubLogoIcon data-icon="inline-start" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
