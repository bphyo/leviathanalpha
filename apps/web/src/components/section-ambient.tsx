type Props = {
  noiseId: string;
};

export function SectionAmbient({ noiseId }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
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

      <div className="absolute left-[10%] top-[15%] h-[50vh] w-[50vh] animate-drift-slower rounded-full bg-signal-green/[0.06] blur-[120px]" />
      <div className="absolute right-[10%] bottom-[15%] h-[44vh] w-[44vh] animate-drift-slow rounded-full bg-signal-amber/[0.04] blur-[110px]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.10] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={noiseId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
      </svg>
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
