import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { getFeaturedProjects } from "@/lib/projects";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Ideas made real.</h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Link href="/projects" className={buttonVariants({ size: "lg", variant: "outline" })}>
          More works
          <ArrowRightIcon data-icon="inline-end" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
