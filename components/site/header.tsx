import Link from "next/link";

import { site } from "@/content/site";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-heading text-sm font-semibold tracking-tight text-foreground">
          {site.siteName}
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
