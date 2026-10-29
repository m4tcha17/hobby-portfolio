"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

import { HERO_REPLAY_EVENT, consumeHeroReplay } from "@/components/site/home-link";

/** Remounts its children on `HERO_REPLAY_EVENT`, or on returning via a home link, so the hero's load animations play again. */
export function HeroReplay({ children }: { children: ReactNode }) {
  const [run, setRun] = useState(0);
  // Refs survive `<Activity>` hiding, so this is true only when the hero is shown again, not on first mount.
  const shown = useRef(false);

  useEffect(() => {
    const replay = () => setRun((value) => value + 1);
    // Home link clicked from another page while this route was hidden: replay now that it is visible.
    if (consumeHeroReplay() && shown.current) replay();
    shown.current = true;
    window.addEventListener(HERO_REPLAY_EVENT, replay);
    return () => window.removeEventListener(HERO_REPLAY_EVENT, replay);
  }, []);

  return <Fragment key={run}>{children}</Fragment>;
}
