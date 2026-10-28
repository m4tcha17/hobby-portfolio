import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/** Home Featured Projects bento tile. Shows `summary`, never the long description. */
export function ProjectCard({
  project,
  index,
  large = false,
  className,
}: {
  project: Project;
  /** Zero-based position in the bento, shown as "01", "02", ... */
  index: number;
  /** The big bento tile gets a larger title and image `sizes`. */
  large?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative block h-full overflow-hidden rounded-lg bg-muted ring-1 ring-foreground/10 outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes={large ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <span className="absolute top-4 left-4 rounded-full bg-scrim/60 px-2.5 py-1 font-mono text-xs text-scrim-foreground backdrop-blur-sm">
        {String(index + 1).padStart(2, "0")} / Featured
      </span>
      <span
        aria-hidden
        className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-scrim/60 text-scrim-foreground backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-0"
      >
        <ArrowUpRightIcon className="size-4" />
      </span>

      {/* Frosted band: blur removes image detail behind the text, scrim tint adds contrast. */}
      <div className="absolute inset-x-0 bottom-0 border-t border-scrim-foreground/10 bg-scrim/60 px-6 py-4 text-scrim-foreground backdrop-blur-md">
        <h3
          className={cn(
            "font-heading font-medium transition-colors duration-300 group-hover:text-primary-on-scrim group-focus-visible:text-primary-on-scrim",
            large ? "text-2xl" : "text-lg",
          )}
        >{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm">{project.summary}</p>
      </div>
    </Link>
  );
}
