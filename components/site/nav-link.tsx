"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Header nav link marked `aria-current="page"` while on its page or a page below it
 * (`/projects/[slug]` keeps Projects active). Hash links (`/#contact`) only scroll, so they never
 * count as the current page.
 */
export function NavLink({ href, className, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  const active = !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(className, active && "text-primary after:scale-x-100")}
      {...props}
    />
  );
}
