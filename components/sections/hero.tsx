import Link from "next/link";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32">
      <p className="text-sm font-medium text-primary">{site.role}</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {site.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{site.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/#projects" className={buttonVariants({ size: "lg" })}>
          View projects
          <ArrowRight data-icon="inline-end" aria-hidden />
        </Link>
        <Link href="/#contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
          <EnvelopeSimple data-icon="inline-start" aria-hidden />
          Contact me
        </Link>
      </div>
    </section>
  );
}
