"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";

import { HERO_REPLAY_EVENT } from "@/components/site/home-link";

/** Remounts its children on `HERO_REPLAY_EVENT`, so the hero's load animations play again. */
export function HeroReplay({ children }: { children: ReactNode }) {
  const [run, setRun] = useState(0);

  useEffect(() => {
    const replay = () => setRun((value) => value + 1);
    window.addEventListener(HERO_REPLAY_EVENT, replay);
    return () => window.removeEventListener(HERO_REPLAY_EVENT, replay);
  }, []);

  return <Fragment key={run}>{children}</Fragment>;
}
