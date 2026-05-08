export function CardTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.18] transition-opacity duration-500 group-hover:opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--signal-green) / 0.7) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 100% 0%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 100% 0%, black 0%, transparent 70%)",
        }}
      />
      <div className="absolute -right-12 -top-12 h-44 w-44 animate-drift-slow rounded-full bg-signal-green/[0.10] blur-3xl transition-opacity duration-500 group-hover:bg-signal-green/[0.18]" />
    </div>
  );
}
