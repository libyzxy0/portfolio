export const BackgroundEffect = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Top Spotlight */}
    <div
      className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 dark:opacity-20 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
      }}
    />

    {/* Bottom Spotlight */}
    <div
      className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-10 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
      }}
    />

    {/* Dot Pattern Background */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  </div>
);