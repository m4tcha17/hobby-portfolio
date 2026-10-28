import { ArrowUpIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";
import { stripHighlights } from "@/lib/highlight";
import { buttonVariants } from "@/components/ui/button";
import { socialIcons } from "@/components/site/social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>© {stripHighlights(site.name)}. All rights reserved.</p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <EnvelopeSimpleIcon className="size-5" aria-hidden />
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
                  aria-label={label}
                  className="transition-colors hover:text-foreground"
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              </li>
            );
          })}
          <a href="#" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Back to top
            <ArrowUpIcon data-icon="inline-end" aria-hidden />
          </a>
        </ul>
      </div>
    </footer>
  );
}
