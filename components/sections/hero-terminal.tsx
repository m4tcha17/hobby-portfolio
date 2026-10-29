"use client";

import { useState } from "react";

import { site } from "@/content/site";
import TextType from "@/components/animations/text-type";

/** Arch-style prompt: `[user@host dir]$`, the default bash PS1 on Arch Linux. */
function Prompt() {
  return (
    <span>
      <span className="text-primary-on-scrim">[</span>
      <span className="text-scrim-foreground">~/{site.siteName}</span>
      <span className="text-primary-on-scrim">]$</span>
    </span>
  );
}

/** Decorative Arch Linux terminal window shown below the hero copy. */
export function HeroTerminal() {
  // The second prompt appears and types only after the first command finishes typing.
  const [commandTyped, setCommandTyped] = useState(false);

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-border bg-scrim font-mono text-sm text-scrim-foreground shadow-lg">
      <div className="flex items-center gap-2 border-b border-scrim-foreground/10 px-4 py-2.5">
        <span className="size-3 rounded-full bg-scrim-foreground/20" aria-hidden />
        <span className="size-3 rounded-full bg-scrim-foreground/20" aria-hidden />
        <span className="size-3 rounded-full bg-scrim-foreground/20" aria-hidden />
        <span className="ml-2 text-xs text-scrim-foreground/60">~/{site.siteName}</span>
      </div>
      <div className="space-y-1 px-4 py-4 leading-relaxed">
        <p>
          {/* span, not p: a <p> inside a <p> is invalid HTML and breaks hydration. */}
          <Prompt /> <TextType
            as="span"
            text="cat experience.txt"
            loop={false}
            showCursor={!commandTyped}
            cursorStyle="block"
            mistakes={0.4}
            typingSpeed={80}
            onTypingComplete={() => setCommandTyped(true)}
            className="text-sm font-medium text-scrim-foreground/80"
          />
        </p>
        {commandTyped && (
          <p>
            <Prompt /> <TextType
              as="span"
              text="Software developer with Linux experience."
              loop={false}
              cursorStyle="block"
              mistakes={0.4}
              typingSpeed={80}
              className="text-sm font-medium text-scrim-foreground/80"
            />
          </p>
        )}
      </div>
    </div>
  );
}
