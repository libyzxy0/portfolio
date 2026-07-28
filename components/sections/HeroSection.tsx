"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { TERMINAL_LINES } from "@/data/portfolio";

export const HeroSection = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"prompt" | "output" | "done">("prompt");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(TERMINAL_LINES.length);
      return;
    }
    if (lineIndex >= TERMINAL_LINES.length) return;

    const current = TERMINAL_LINES[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex < target.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => clearTimeout(t);
    }

    if (phase === "prompt") {
      const t = setTimeout(() => {
        setPhase("output");
        setCharIndex(0);
      }, 200);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
      setPhase("prompt");
    }, 350);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex, reducedMotion]);

  return (
    <section className="relative z-0 w-full -mt-[80px] min-h-[calc(100vh+1rem)] md:min-h-[calc(100vh-1rem)] flex items-center justify-center px-6 md:px-16 py-12 overflow-hidden">
      <BackgroundEffect />

      <div className="w-full max-w-3xl mx-auto space-y-10 relative z-10 mt-[80px]">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-500">Available for work</span>
          <span>•</span>
          <span>visitor@libyzxy0:~</span>
        </div>

        <div className="space-y-6 min-h-[220px]">
          {TERMINAL_LINES.slice(0, reducedMotion ? TERMINAL_LINES.length : lineIndex + 1).map(
            (line, i) => {
              const isCurrent = !reducedMotion && i === lineIndex;
              const promptText =
                isCurrent && phase === "prompt"
                  ? line.prompt.slice(0, charIndex)
                  : line.prompt;
              const showOutput =
                reducedMotion ||
                i < lineIndex ||
                phase === "output" ||
                phase === "done";
              const outputText =
                isCurrent && phase === "output"
                  ? line.output.slice(0, charIndex)
                  : line.output;

              return (
                <div key={i} className="font-mono text-sm md:text-base">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary select-none">$</span>
                    <span className="text-foreground/80">{promptText}</span>
                    {isCurrent && phase === "prompt" && (
                      <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                    )}
                  </div>
                  {showOutput && (
                    <div className="mt-2 text-foreground text-2xl md:text-4xl font-extrabold tracking-tight">
                      {outputText}
                      {isCurrent && phase === "output" && (
                        <span className="inline-block w-2 h-7 md:h-9 ml-1 bg-primary animate-pulse align-middle" />
                      )}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-sm pt-4">
          <Button variant="outline" className="group font-mono">
            <Link href="#projects" className="flex flex-row items-center gap-2">
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button variant="outline" className="group font-mono">
            <Link href="#contact">
              <span>Contact Me</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};