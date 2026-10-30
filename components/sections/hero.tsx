import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";
import { stripHighlights } from "@/lib/highlight";
import { Highlight } from "@/components/site/highlight";
import SplitText from "@/components/animations/split-text";
import TextType from "@/components/animations/text-type";
import Magnet from "@/components/animations/magnet";
import AnimatedContent from "@/components/animations/animated-content";
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
        {/* HeroReplay remounts all hero animations when the header home link is clicked. */}
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
            className="cursor-target mt-3 max-w-lg font-heading text-6xl font-semibold tracking-tight text-foreground sm:text-4x1"
          >
            <Highlight text={site.tagline} />
          </SplitText>
          {/* Fade-ups follow the tagline's character reveal. */}
          <AnimatedContent distance={24} trigger="mount" delay={0.3}>
            <p className="cursor-target mt-6 w-fit max-w-xl text-lg text-muted-foreground">
              <Highlight text={site.description} />
            </p>
          </AnimatedContent>
          <AnimatedContent distance={24} trigger="mount" delay={0.45}>
            <div className="mt-10 flex flex-wrap gap-3">
              {/* Plain anchors for both buttons: the hero is only on "/", and a native fragment jump scrolls again even when
                  the URL already ends in the same hash (next/link skips same-URL navigations). */}
              {/* padding 0: the pull only engages while the cursor is on the button itself. */}
              <Magnet padding={0} magnetStrength={2} maxOffset={5}>
                <a href="#projects" className={buttonVariants({ size: "lg" })}>
                  View projects
                  <ArrowRightIcon data-icon="inline-end" aria-hidden />
                </a>
              </Magnet>
              <a href="#contact" className={buttonVariants({ size: "lg", variant: "quiet" })}>
                <EnvelopeSimpleIcon
                  data-icon="inline-start"
                  aria-hidden
                  className="transition-transform duration-300 group-hover/button:-translate-y-1 group-focus-visible/button:-translate-y-1 motion-reduce:transition-none motion-reduce:translate-y-0!"
                />
                Contact me
              </a>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={24} trigger="mount" delay={0.6} className="mt-12 hidden lg:block">
            <HeroTerminal />
          </AnimatedContent>
        </HeroReplay>
      </div>
    </section>
  );
}
