"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "@/components/animations/particles";

/** Theme tokens the particles are tinted with, read from `.dark` on <html>. */
const COLOR_TOKENS = ["--primary", "--primary-on-scrim", "--muted-foreground"];

/**
 * Dark mode only: a fixed particle field behind the whole site. Unmounted in light mode so no WebGL context runs there.
 * Static under prefers-reduced-motion (handled by Particles).
 */
export function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const [colors, setColors] = useState<string[] | null>(null);

  useEffect(() => {
    if (!dark) return;
    // During the toggle's view transition the `.dark` class lands after this effect, so read the tokens a frame later.
    const frame = requestAnimationFrame(() => {
      const styles = getComputedStyle(document.documentElement);
      setColors(COLOR_TOKENS.map((token) => styles.getPropertyValue(token).trim()).filter(Boolean));
    });
    return () => cancelAnimationFrame(frame);
  }, [dark]);

  if (!dark || !colors) return null;

  return (
    // -z-10 sits above the body background (propagated to the viewport) and below all page content.
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Particles
        particleColors={colors}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        alphaParticles
        moveParticlesOnHover
        particleHoverFactor={1}
        clickBurst={false}
        opacity={0.7}
      />
    </div>
  );
}
