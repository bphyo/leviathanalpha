import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden border-b border-border/60">
      <AmbientBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-[clamp(1.25rem,3vh,2rem)] px-4 pb-[clamp(3rem,9vh,5rem)] pt-[clamp(1.5rem,4vh,3rem)] text-center sm:px-6">
        <div className="inline-flex max-w-full animate-fade-in items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur-sm sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-sm">
          <span className="relative inline-flex h-1.5 w-1.5 flex-shrink-0 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green/60 opacity-75" />
            <span className="relative inline-flex h-full w-full rounded-full bg-signal-green" />
          </span>
          <span className="truncate">Polymarket, Kalshi, Manifold &mdash; and more</span>
        </div>

        <h1
          className="relative text-balance max-w-6xl animate-fade-in font-semibold leading-[1.04] tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 7.5vw, 5.75rem)",
            animationDelay: "80ms",
            animationFillMode: "backwards",
          }}
        >
          <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
            The unified intelligence layer
            <br className="hidden sm:block" /> for prediction markets
          </span>
        </h1>

        <p
          className="text-balance max-w-3xl animate-fade-in font-mono text-muted-foreground"
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            animationDelay: "160ms",
            animationFillMode: "backwards",
          }}
        >
          <span className="relative inline-block">
            <span>Trade like an insider, legally.</span>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-2 top-1/2 h-[10px] w-[calc(100%+1rem)] -translate-y-1/2"
              viewBox="0 0 300 10"
              preserveAspectRatio="none"
            >
              <path
                d="M 4 6 C 80 3, 160 7, 296 4"
                fill="none"
                stroke="hsl(var(--signal-red))"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </span>
          <span className="mt-2 block text-foreground sm:ml-2 sm:mt-0 sm:inline">
            Track the whales. Find the arb. Spot the catalyst.
          </span>
        </p>

        <div
          className="w-full max-w-md animate-fade-in scroll-mt-24"
          style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
        >
          <WaitlistForm />
        </div>

        <ul
          className="flex animate-fade-in flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-[11px] text-foreground sm:gap-5 sm:text-sm"
          style={{ animationDelay: "320ms", animationFillMode: "backwards" }}
        >
          <li className="flex items-center gap-1.5">
            <CheckIcon />
            Early access
          </li>
          <li className="flex items-center gap-1.5">
            <CheckIcon />
            Weekly newsletter
          </li>
          <li className="flex items-center gap-1.5">
            <CheckIcon />
            Founding-member pricing
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- ambient background ---------------------------- */

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-25" />

      {/* Three drifting gradient orbs at different speeds + colors */}
      <div className="absolute left-[12%] top-[18%] h-[55vh] w-[55vh] animate-drift-slower rounded-full bg-signal-green/[0.08] blur-[120px]" />
      <div className="absolute right-[8%] top-[28%] h-[48vh] w-[48vh] animate-drift-slow rounded-full bg-signal-amber/[0.05] blur-[110px]" />
      <div className="absolute bottom-[6%] left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 animate-float-y-slow rounded-full bg-signal-green/[0.06] blur-[140px]" />

      {/* Soft scanline sweeping vertically */}
      <div className="absolute inset-x-0 top-0 h-[1px] animate-scan-y-slow bg-gradient-to-r from-transparent via-signal-green/35 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-[1px] animate-scan-y bg-gradient-to-r from-transparent via-signal-amber/20 to-transparent" />

      {/* Top + bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-green/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Soft vignette to keep focus center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, hsl(var(--background) / 0.6) 100%)",
        }}
      />
    </div>
  );
}

/* --------------------------------- icons --------------------------------- */

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3 w-3 flex-shrink-0 text-signal-green sm:h-3.5 sm:w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5 L7 12 L13 4" />
    </svg>
  );
}
