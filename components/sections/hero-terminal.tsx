"use client";

import { useEffect, useRef, useState } from "react";

/** Pause between finishing the command and its output, like pressing Enter. */
const ENTER_DELAY_MS = 600;

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
  const enterTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(enterTimer.current), []);

  return (
    <div className="cursor-target w-full max-w-xs overflow-hidden rounded-xl border border-border bg-scrim font-mono text-sm text-scrim-foreground shadow-lg">
      <div className="flex items-center gap-2 border-b border-scrim-foreground/10 px-4 py-2.5">
        <span className="size-3 rounded-full bg-scrim-foreground/20" aria-hidden />
        <span className="size-3 rounded-full bg-scrim-foreground/20" aria-hidden />
        <span className="size-3 rounded-full bg-scrim-foreground/20" aria-hidden />
        <span className="ml-2 text-xs text-scrim-foreground/60">~/{site.siteName}</span>
      </div>
      {/* Fixed height = the finished output (3 lines: the second command wraps at max-w-xs, plus space-y-1 and py-4, since min-height includes padding), so the box never grows while typing. Update if the text or width changes. */}
      <div className="min-h-[calc(3lh+3.75rem)] space-y-1 px-4 py-4 leading-relaxed">
        <p>
          {/* span, not p: a <p> inside a <p> is invalid HTML and breaks hydration. */}
          <Prompt /> <TextType
            as="span"
            text="cat experience.txt"
            loop={false}
            initialDelay={1000}
            showCursor={!commandTyped}
            cursorStyle="block"
            mistakes={0.4}
            typingSpeed={40}
            onTypingComplete={() => {
              enterTimer.current = setTimeout(() => setCommandTyped(true), ENTER_DELAY_MS);
            }}
            className="text-sm font-medium text-scrim-foreground/80"
          />
        </p>
        {commandTyped && (
          <p>
            <Prompt /> <TextType
              as="span"
              text="Software developer with Linux experience."
              loop={false}
              initialDelay={500}
              cursorStyle="block"
              mistakes={0.4}
              typingSpeed={40}
              className="text-sm font-medium text-scrim-foreground/80"
            />
          </p>
        )}
      </div>
    </div>
  );
}
