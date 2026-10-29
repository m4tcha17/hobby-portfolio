import Image from "next/image";

import { site } from "@/content/site";
import { stripHighlights } from "@/lib/highlight";
import { Highlight } from "@/components/site/highlight";
import { OrnamentDivider } from "@/components/site/ornament-divider";
import AnimatedContent from "@/components/animations/animated-content";
import SplitText from "@/components/animations/split-text";
import { AboutThought } from "@/components/sections/about-thought";

/** About intro: name, role and location, ornament break, photo beside the bio, and an epigraph quote. */
export function About() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20">
      <header>
        <SplitText
          tag="h1"
          text={site.name}
          trigger="load"
          splitType="chars"
          delay={30}
          textAlign="center"
          className="cursor-target font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          <Highlight text={site.name} />
        </SplitText>
        <AnimatedContent distance={40} trigger="mount" delay={0.12}>
          <p className="cursor-target mt-3 max-w-fit text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase sm:text-sm">
            {stripHighlights(site.role)} · {site.location}
          </p>
        </AnimatedContent>
      </header>

      <OrnamentDivider className="my-10 sm:my-12" />

      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
        <AnimatedContent distance={40} trigger="mount" delay={0.12} className="w-full max-w-80 shrink-0 sm:w-72">
          <Image
            src="/profile.jpg"
            alt={`Portrait of ${site.name}`}
            width={900}
            height={1200}
            priority
            sizes="(min-width: 640px) 288px, 320px"
            className="aspect-3/4 w-full object-cover cursor-target"
          />
        </AnimatedContent>
        <div className="w-full min-w-0 flex-1">
          <AnimatedContent distance={40} trigger="mount" delay={0.24}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{site.bioTitle}</h2>
            <p className="cursor-target mt-3 max-w-prose text-lg leading-7 text-muted-foreground">
              {site.bio}
            </p>
            <div className="mt-1">
              <AboutThought />
            </div>
          </AnimatedContent>

          <AnimatedContent distance={40} trigger="mount" delay={0.36}>
            <figure className="mt-10 max-w-prose">
              <blockquote className="text-xs text-foreground italic sm:text-sm">
                <p>“{site.quote.text}”</p>
              </blockquote>
              {site.quote.attribution && (
                <figcaption className="mt-3 text-sm text-muted-foreground">— {site.quote.attribution}</figcaption>
              )}
            </figure>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
