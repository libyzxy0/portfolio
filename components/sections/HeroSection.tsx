"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { TERMINAL_LINES } from "@/data/portfolio";

const SCRAMBLE_CHARS =
  "!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const CatIllustration = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [headTilt, setHeadTilt] = useState({ rotate: 0, x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(Math.hypot(dx, dy) / 120, 1);

      const maxPupilShift = 7;
      setPupilOffset({
        x: Math.cos(angle) * maxPupilShift * dist,
        y: Math.sin(angle) * maxPupilShift * dist,
      });

      const maxRotate = 6;
      const maxLean = 5;
      setHeadTilt({
        rotate: Math.max(-maxRotate, Math.min(maxRotate, (dx / rect.width) * maxRotate * 2)),
        x: Math.cos(angle) * maxLean * dist,
        y: Math.sin(angle) * maxLean * dist * 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const scheduleBlink = () => {
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        scheduleBlink();
      }, 2600 + Math.random() * 2400);
    };
    scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={wrapperRef}>
      <svg
        viewBox="0 0 240 240"
        className="w-56 h-56 xl:w-72 xl:h-72 text-primary"
        shapeRendering="geometricPrecision"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{
            transform: `translate(${headTilt.x}px, ${headTilt.y}px) rotate(${headTilt.rotate}deg)`,
            transformOrigin: "120px 130px",
            transition: "transform 150ms ease-out",
          }}
        >
          <polyline
            points="160,190 196,190 196,140 180,140"
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="opacity-90"
          />

          <rect
            x="70"
            y="130"
            width="100"
            height="100"
            fill="currentColor"
            className="opacity-90"
          />
          <rect x="80" y="210" width="24" height="24" fill="currentColor" className="opacity-90" />
          <rect x="136" y="210" width="24" height="24" fill="currentColor" className="opacity-90" />

          <rect x="64" y="32" width="36" height="36" fill="currentColor" className="opacity-90" />
          <rect x="140" y="32" width="36" height="36" fill="currentColor" className="opacity-90" />
          <rect x="72" y="40" width="20" height="20" fill="var(--background, #fff)" />
          <rect x="148" y="40" width="20" height="20" fill="var(--background, #fff)" />

          <rect
            x="56"
            y="56"
            width="128"
            height="104"
            fill="currentColor"
            className="opacity-90"
          />

          <g>
            <rect x="76" y="84" width="28" height="28" fill="var(--background, #fff)" />
            {!blink ? (
              <rect
                x={90 + pupilOffset.x - 6}
                y={98 + pupilOffset.y - 6}
                width="12"
                height="12"
                fill="currentColor"
                style={{ transition: "x 80ms linear, y 80ms linear" }}
              />
            ) : (
              <rect x="80" y="96" width="20" height="4" fill="currentColor" />
            )}

            <rect x="136" y="84" width="28" height="28" fill="var(--background, #fff)" />
            {!blink ? (
              <rect
                x={150 + pupilOffset.x - 6}
                y={98 + pupilOffset.y - 6}
                width="12"
                height="12"
                fill="currentColor"
                style={{ transition: "x 80ms linear, y 80ms linear" }}
              />
            ) : (
              <rect x="140" y="96" width="20" height="4" fill="currentColor" />
            )}
          </g>

          <rect x="114" y="120" width="12" height="8" fill="var(--background, #fff)" />

          <polyline
            points="100,136 112,136 112,140 128,140 128,136 140,136"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" className="opacity-60">
            <line x1="50" y1="102" x2="20" y2="102" />
            <line x1="50" y1="114" x2="20" y2="114" />
            <line x1="50" y1="126" x2="20" y2="126" />
            <line x1="190" y1="102" x2="220" y2="102" />
            <line x1="190" y1="114" x2="220" y2="114" />
            <line x1="190" y1="126" x2="220" y2="126" />
          </g>
        </g>
      </svg>
    </div>
  );
};

const randomChar = () =>
  SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

export const HeroSection = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"prompt" | "output" | "done">("prompt");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrambleTick, setScrambleTick] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setInterval(() => setScrambleTick((s) => s + 1), 40);
    return () => clearInterval(t);
  }, [reducedMotion]);

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

  const renderScrambled = (target: string, revealedCount: number, isActive: boolean) => {
    if (!isActive || reducedMotion) return target.slice(0, revealedCount);

    const settled = target.slice(0, revealedCount);
    const scrambleWindow = 4;
    const remaining = target.slice(revealedCount, revealedCount + scrambleWindow);

    const scrambled = remaining
      .split("")
      .map((ch, i) => {
        if (ch === " ") return " ";
        const seedRandom = (scrambleTick + i * 7) % SCRAMBLE_CHARS.length;
        return SCRAMBLE_CHARS[seedRandom];
      })
      .join("");

    return settled + scrambled;
  };

  return (
    <section className="relative z-0 w-full -mt-[80px] min-h-[calc(100vh+1rem)] md:min-h-[calc(100vh-1rem)] flex items-center justify-center px-6 md:px-16 py-12 overflow-hidden">
      <BackgroundEffect />

      <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-8 relative z-10 mt-[80px]">
        <div className="w-full max-w-3xl space-y-10">
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
                    ? renderScrambled(line.prompt, charIndex, true)
                    : line.prompt;
                const showOutput =
                  reducedMotion ||
                  i < lineIndex ||
                  phase === "output" ||
                  phase === "done";
                const outputText =
                  isCurrent && phase === "output"
                    ? renderScrambled(line.output, charIndex, true)
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
                <span>My Projects</span>
              </Link>
            </Button>

            <Button variant="outline" className="group font-mono">
              <Link href="#contact">
                <span>Contact Me</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex shrink-0 items-center justify-center">
          <CatIllustration />
        </div>
      </div>
    </section>
  );
};