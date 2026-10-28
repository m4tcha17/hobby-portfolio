import type { Metadata } from "next";

import { getProjects } from "@/lib/projects";
import { ProjectRow } from "@/components/projects/project-row";
import AnimatedContent from "@/components/animations/animated-content";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Projects</h1>
      <ul className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <AnimatedContent distance={40} once={false}>
              <ProjectRow project={project} />
            </AnimatedContent>
          </li>
        ))}
      </ul>
    </section>
  );
}
