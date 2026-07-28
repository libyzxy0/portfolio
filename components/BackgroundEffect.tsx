"use client";

import { useState, useEffect } from "react";

export const BackgroundEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, var(--background) 95%)",
        }}
      />

      <div
        className="absolute rounded-full bg-emerald-500/10 blur-[100px] transition-transform duration-300 ease-out"
        style={{
          width: "350px",
          height: "350px",
          top: -175,
          left: -175,
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      />

      <div
        className="absolute rounded-full bg-green-500/10 blur-[80px] transition-transform duration-700 ease-out"
        style={{
          width: "200px",
          height: "200px",
          top: -100,
          left: -100,
          transform: `translate3d(${mousePos.x + 80}px, ${mousePos.y - 60}px, 0)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-25 dark:opacity-5 text-emerald-700 dark:text-emerald-500"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
};