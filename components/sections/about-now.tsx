import { site } from "@/content/site";
import AnimatedContent from "@/components/animations/animated-content";

/** About page "What I'm doing now" list: a label column beside each entry. */
export function AboutNow() {
  return (
    <section aria-labelledby="now-heading" className="mx-auto w-full max-w-5xl px-4 pt-12 pb-20 sm:px-6">
      <AnimatedContent distance={40} once={false}>
        <h2 id="now-heading" className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What I&apos;m doing now
        </h2>
      </AnimatedContent>
      <dl className="mt-8 divide-y divide-border border-y border-border">
        {site.now.map((item, i) => (
          <AnimatedContent
            key={item.label}
            distance={40}
            once={false}
            delay={0.12 + i * 0.1}
            className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase sm:pt-1">{item.label}</dt>
            <dd className="text-lg text-foreground">{item.text}</dd>
          </AnimatedContent>
        ))}
      </dl>
    </section>
  );
}
