"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { flushSync } from "react-dom";

const REVEAL_MS = 1000;

/** Wavy-circle reveal shape: points around the edge, frames sampled over the animation, crests around the edge. */
const WAVE_POINTS = 96;
const WAVE_FRAMES = 40;
const WAVE_CRESTS = 8;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

/**
 * Keyframes for a circle that grows from (x, y) to `radius` with a rippling edge. Every frame has the
 * same number of points, so the browser interpolates between the polygons. The ripple travels around
 * the edge and flattens out at the end, so the last frame is a plain circle covering the viewport.
 */
function waveKeyframes(x: number, y: number, radius: number): Keyframe[] {
  return Array.from({ length: WAVE_FRAMES + 1 }, (_, frame) => {
    const t = frame / WAVE_FRAMES;
    const r = easeInOutCubic(t) * radius;
    // Ripple grows with the circle (a small circle with full-size waves looks like a gear) and flattens out at the end.
    const amplitude = Math.min(r * 0.06, 32) * (1 - t ** 3);
    const phase = t * Math.PI * 4;
    const points = Array.from({ length: WAVE_POINTS }, (_, i) => {
      const angle = (i / WAVE_POINTS) * Math.PI * 2;
      // A second, slower ripple running the other way keeps the edge from looking like a gear.
      const edge =
        r +
        amplitude * Math.sin(WAVE_CRESTS * angle + phase) +
        amplitude * 0.5 * Math.sin((WAVE_CRESTS - 3) * angle - phase * 1.3);
      return `${(x + edge * Math.cos(angle)).toFixed(1)}px ${(y + edge * Math.sin(angle)).toFixed(1)}px`;
    });
    return { clipPath: `polygon(${points.join(", ")})` };
  });
}

/**
 * Light/dark toggle. The new theme grows from the button as a circle with a rippling edge (View Transitions API);
 * instant under prefers-reduced-motion or in browsers without `startViewTransition`.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  function toggle() {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce || !buttonRef.current) {
      setTheme(next);
      return;
    }

    // Circle centered on the button, large enough to reach the farthest viewport corner.
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const root = document.documentElement;
    // Scopes the reveal CSS in globals.css to this transition only.
    root.classList.add("theme-reveal");
    const transition = document.startViewTransition(() => {
      // The new snapshot is taken when this callback returns, so the theme class must already be on <html>.
      // next-themes applies it in an effect; flushSync runs it now, and the class swap guarantees it.
      flushSync(() => setTheme(next));
      root.classList.toggle("dark", next === "dark");
    });
    transition.ready.then(() => {
      // Easing is baked into the frames, so the animation itself runs linearly.
      root.animate(waveKeyframes(x, y, radius), {
        duration: REVEAL_MS,
        easing: "linear",
        pseudoElement: "::view-transition-new(root)",
      });
    });
    transition.finished.finally(() => root.classList.remove("theme-reveal"));
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="cursor-target relative inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors duration-300 outline-none hover:text-primary focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring/30"
    >
      {/* Both icons render and the `.dark` class picks one, so server and client markup match before the theme is known.
          Showing an icon (display none to inline) restarts its enter animation: the sun or moon spins in on each switch. */}
      <SunIcon
        weight="bold"
        aria-hidden
        className="size-4.5 animate-in spin-in-90 zoom-in-50 fade-in duration-500 dark:hidden motion-reduce:animate-none"
      />
      <MoonIcon
        weight="bold"
        aria-hidden
        className="hidden size-4.5 animate-in -spin-in-90 zoom-in-50 fade-in duration-500 dark:block motion-reduce:animate-none"
      />
    </button>
  );
}
