import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import AnimatedContent from "@/components/animations/animated-content";
import Magnet from "@/components/animations/magnet";

// Contact buttons stay one step smaller than the shared `lg` size.
const contactButtonSize =
  "h-10 gap-1.5 px-4 text-sm has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-4";

// TODO: destination still undecided; mailto is a temporary placeholder.
const getInTouchHref = `mailto:${site.email}`;

/** "Get in touch" call to action. Email and social links live in SiteFooter. */
export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <AnimatedContent distance={40} once={false}>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Get in touch</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Want to work together? I&apos;d love to hear from you.
        </p>
        <div className="mt-8">
          {/* padding 0: the pull only engages while the cursor is on the button itself. */}
          <Magnet padding={0} magnetStrength={4} maxOffset={12}>
            <a href={getInTouchHref} className={cn(buttonVariants({ size: "lg" }), contactButtonSize)}>
              Get in touch
              <ArrowRightIcon data-icon="inline-end" aria-hidden />
            </a>
          </Magnet>
        </div>
      </AnimatedContent>
    </section>
  );
}
