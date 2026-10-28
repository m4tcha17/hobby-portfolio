import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechStack } from "@/components/projects/tech-stack";

/** Home Featured Projects card. Shows `summary`, never the long description. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full transition-shadow group-hover:ring-foreground/25">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={640}
          height={360}
          className="aspect-video w-full bg-muted object-cover"
        />
        <CardHeader>
          <CardTitle className="text-base">{project.title}</CardTitle>
          <CardDescription className="text-sm">{project.summary}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <TechStack tech={project.tech} />
        </CardContent>
      </Card>
    </Link>
  );
}
