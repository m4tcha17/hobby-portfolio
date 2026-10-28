"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** Fired when a home link is clicked; `HeroReplay` listens and replays the hero animations. */
export const HERO_REPLAY_EVENT = "hero:replay";

/**
 * Link to `/` that also replays the hero animations. Clicking it while already on the home page
 * is a same-route navigation, so React keeps the hero mounted (animations would not rerun) and
 * the page does not scroll, so this also scrolls back to the top.
 */
export function HomeLink({ onClick, ...props }: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      onClick={(event) => {
        onClick?.(event);
        if (pathname === "/") {
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        }
        window.dispatchEvent(new Event(HERO_REPLAY_EVENT));
      }}
      {...props}
    />
  );
}
