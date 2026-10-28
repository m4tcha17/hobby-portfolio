import { site } from "@/content/site";
import { stripHighlights } from "@/lib/highlight";
import { socialIcons } from "@/components/site/social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>© {stripHighlights(site.name)}. All rights reserved.</p>
        <ul className="flex items-center gap-4">
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
        </ul>
      </div>
    </footer>
  );
}
