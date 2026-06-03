// noiseId kept for API compatibility — no longer used since the heavy SVG noise filter was removed
type Props = {
  noiseId?: string;
};

export function SectionAmbient({}: Props = {}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{ contain: "paint" }}
    >
      <div className="absolute inset-0 grid-bg radial-fade opacity-25" />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground) / 0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 100%)",
        }}
      />

      <div
        className="absolute left-[10%] top-[15%] h-[50vh] w-[50vh] animate-drift-slower rounded-full bg-signal-green/[0.07] blur-[80px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute right-[10%] bottom-[15%] h-[44vh] w-[44vh] animate-drift-slow rounded-full bg-signal-amber/[0.05] blur-[80px]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

export function SectionFadeBottom() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 sm:h-48"
      aria-hidden
      style={{
        background:
          "linear-gradient(to bottom, transparent, hsl(var(--background)) 95%)",
      }}
    />
  );
}

export function SectionDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
      aria-hidden
      style={{
        background:
          "linear-gradient(to right, transparent, hsl(var(--border) / 0.6) 50%, transparent)",
      }}
    />
  );
}
