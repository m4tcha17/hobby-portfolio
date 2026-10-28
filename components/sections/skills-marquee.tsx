import { site } from "@/content/site";
import { LogoLoop } from "@/components/animations/logo-loop";

/** Thin strip of `site.skills` scrolling between Hero and Featured Projects. */
export function SkillsMarquee() {
  const logos = site.skills.map((skill) => ({
    node: (
      <span className="flex items-center gap-8 font-heading text-lg font-medium whitespace-nowrap text-muted-foreground">
        {skill}
        <span aria-hidden className="text-primary">✦</span>
      </span>
    ),
    title: skill,
  }));

  return (
    <section aria-label="Skills" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div className="border-y border-border py-6">
        <LogoLoop logos={logos} speed={40} logoHeight={28} gap={32} fadeOut pauseOnHover ariaLabel="Skills" />
      </div>
    </section>
  );
}
