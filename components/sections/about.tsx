import AboutContent from "@/content/about.mdx";
import { site } from "@/content/site";
import { TechStack } from "@/components/projects/tech-stack";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <h1 className="mt-3 mb-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {site.name}
      </h1>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mt-8">About</h2>
      <div className="mt-2 max-w-2xl">
        <AboutContent />
      </div>
      <h3 className="mt-10 text-sm font-medium text-foreground">Skills</h3>
      <div className="mt-3">
        <TechStack tech={site.skills} />
      </div>
    </section>
  );
}
