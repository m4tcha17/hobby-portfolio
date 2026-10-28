import { EnvelopeSimple } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { socialIcons } from "@/components/site/social-icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Contact</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Want to work together or just say hi? Reach out by email or find me on the platforms below.
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        <li>
          <a href={`mailto:${site.email}`} className={buttonVariants({ size: "lg" })}>
            <EnvelopeSimple data-icon="inline-start" aria-hidden />
            {site.email}
          </a>
        </li>
        {site.socials.map(({ platform, label, href }) => {
          const Icon = socialIcons[platform];
          return (
            <li key={platform}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                <Icon data-icon="inline-start" aria-hidden />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
