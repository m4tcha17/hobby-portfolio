import Image from "next/image";

import AboutContent from "@/content/about.mdx";
import { site } from "@/content/site";
import { Highlight } from "@/components/site/highlight";
import { TechStack } from "@/components/projects/tech-stack";
import AnimatedContent from "@/components/animations/animated-content";
import SplitText from "@/components/animations/split-text";

export function About() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:items-start">
        <AnimatedContent distance={40} trigger="mount">
          <Image
            src="/profile.jpg"
            alt={`Portrait of ${site.name}`}
            width={900}
            height={1200}
            priority
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 40vw, 100vw"
            className="aspect-3/4 w-full rounded-xl object-cover"
          />
        </AnimatedContent>
        <div>
          <SplitText
            tag="h1"
            text={site.name}
            trigger="load"
            splitType="chars"
            delay={30}
            textAlign="left"
            className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            <Highlight text={site.name} />
          </SplitText>
          <AnimatedContent distance={40} trigger="mount" delay={0.12}>
            <h2 className="mt-8 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">About</h2>
            <div className="cursor-target mt-2 max-w-2xl text-lg">
              <AboutContent />
            </div>
          </AnimatedContent>
          <AnimatedContent distance={40} trigger="mount" delay={0.24}>
            <h2 className="mt-10 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Skills</h2>
            <div className="mt-3">
              <TechStack tech={site.skills} />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
