import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { getFeaturedProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Ideas made real.</h2>
      {/* Bento: first project is the big left tile, the other two stack on the right. */}
      {/* 16:7 grid makes every tile roughly 3:2 landscape. */}
      <ul className="mt-8 grid gap-4 sm:aspect-[16/7] sm:grid-cols-3 sm:grid-rows-2">
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className={cn("aspect-[3/2] sm:aspect-auto", index === 0 && "sm:col-span-2 sm:row-span-2")}
          >
            <ProjectCard project={project} index={index} large={index === 0} />
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
