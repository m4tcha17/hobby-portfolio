import Link from "next/link";
import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";
import { stripHighlights } from "@/lib/highlight";
import { Highlight } from "@/components/site/highlight";
import SplitText from "@/components/animations/split-text";
import TextType from "@/components/animations/text-type";
import Magnet from "@/components/animations/magnet";
import { HeroReplay } from "@/components/sections/hero-replay";
import { HeroTerminal } from "@/components/sections/hero-terminal";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 sm:px-6"
    >
      <div>
        {/* HeroReplay remounts the animated role and tagline when the header home link is clicked. */}
        <HeroReplay>
          {/* TextType types plain characters, so brackets are stripped; the whole line is already primary. */}
          {/* Block wrapper: TextType and SplitText both render inline-block, which would put them side by side. */}
          <div>
            <TextType
              as="p"
              text={stripHighlights(site.role)}
              loop={false}
              cursorStyle="underscore"
              mistakes={0.67}
              typingSpeed={60}
              className="text-sm font-medium text-primary"
            />
          </div>
          <SplitText
            tag="h1"
            text={site.tagline}
            trigger="load"
            splitType="chars"
            delay={30}
            textAlign="left"
            className="mt-3 max-w-lg font-heading text-6xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            <Highlight text={site.tagline} />
          </SplitText>
        </HeroReplay>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          <Highlight text={site.description} />
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {/* padding 0: the pull only engages while the cursor is on the button itself. */}
          <Magnet padding={0} magnetStrength={2} maxOffset={5}>
            <Link href="/#projects" className={buttonVariants({ size: "lg" })}>
              View projects
              <ArrowRightIcon data-icon="inline-end" aria-hidden />
            </Link>
          </Magnet>
          <Link href="/#contact" className={buttonVariants({ size: "lg", variant: "quiet" })}>
            <EnvelopeSimpleIcon
              data-icon="inline-start"
              aria-hidden
              className="transition-transform duration-300 group-hover/button:-translate-y-1 group-focus-visible/button:-translate-y-1 motion-reduce:transition-none motion-reduce:translate-y-0!"
            />
            Contact me
          </Link>
        </div>
      </div>
      <div className="mt-12 hidden lg:block">
        <HeroTerminal />
      </div>
    </section>
  );
}
