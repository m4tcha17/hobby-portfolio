"use client";

import { useEffect, useState } from "react";

import LatticeLoader, { type LatticeStatus } from "@/components/animations/lattice-loader";

/** Range of how long the loader "thinks" before settling, like an AI reasoning trace. Picked at random per visit. */
const THINK_MIN_MS = 5000;
const THINK_MAX_MS = 12000;

/** AI-style "Thought for Ns" line under the about bio, as if the bio was just reasoned out. */
export function AboutThought() {
  const [status, setStatus] = useState<LatticeStatus>("working");

  useEffect(() => {
    // Random inside the effect (client only), so server and client markup still match.
    const thinkMs = THINK_MIN_MS + Math.random() * (THINK_MAX_MS - THINK_MIN_MS);
    const timer = setTimeout(() => setStatus("done"), thinkMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LatticeLoader
      status={status}
      label="Thinking"
      doneLabel="Done"
      color="var(--muted-foreground)"
      doneColor="var(--primary)"
      fontSize={13}
      cellSize={4}
      gap={2}
      className="text-muted-foreground"
    />
  );
}
