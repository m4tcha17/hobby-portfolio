import Link from "next/link";
import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";
import { Highlight } from "@/components/site/highlight";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32">
      <p className="text-sm font-medium text-primary"><Highlight text={site.role} /></p>
      <h1 className="mt-3 max-w-lg font-heading text-6xl font-semibold tracking-tight text-foreground sm:text-6xl">
        <Highlight text={site.tagline} />
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted-foreground">
        <Highlight text={site.description} />
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/#projects" className={buttonVariants({ size: "lg" })}>
          View projects
          <ArrowRightIcon data-icon="inline-end" aria-hidden />
        </Link>
        <Link href="/#contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
          <EnvelopeSimpleIcon data-icon="inline-start" aria-hidden />
          Contact me
        </Link>
      </div>
    </section>
  );
}
