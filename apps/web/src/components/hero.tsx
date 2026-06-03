import { WaitlistForm } from "./waitlist-form";
import { SectionFadeBottom } from "./section-ambient";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden">
      <AmbientBackground />
      <SectionFadeBottom />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-[clamp(1.25rem,3vh,2rem)] px-4 pb-[clamp(3rem,9vh,5rem)] pt-8 text-center sm:px-6 sm:pt-[clamp(1.5rem,4vh,3rem)]">
        <div className="inline-flex max-w-full animate-fade-in items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur-sm sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-sm">
          <span className="relative inline-flex h-1.5 w-1.5 flex-shrink-0 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green/60 opacity-75" />
            <span className="relative inline-flex h-full w-full rounded-full bg-signal-green" />
          </span>
          <span className="truncate">Polymarket, Kalshi, PredictIt &mdash; and more</span>
        </div>

        <h1
          className="relative text-balance max-w-6xl animate-fade-in font-serif font-semibold leading-[1.06] tracking-[-0.01em]"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
            animationDelay: "80ms",
            animationFillMode: "backwards",
          }}
        >
          <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
            Unified intelligence
            <br className="hidden sm:block" /> for prediction markets
          </span>
        </h1>

        <p
          className="text-balance max-w-3xl animate-fade-in font-serif italic text-muted-foreground"
          style={{
            fontSize: "clamp(1.125rem, 1.9vw, 1.5rem)",
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
          <span className="mt-2 block text-foreground">
            Track the whales. Find the arb. Spot the catalyst.
          </span>
        </p>

        <div
          className="w-full max-w-md animate-fade-in scroll-mt-24"
          style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
        >
          <WaitlistForm />
        </div>

        <p
          className="animate-fade-in font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs"
          style={{ animationDelay: "320ms", animationFillMode: "backwards" }}
        >
          Free newsletter &middot; No paywall &middot; Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- ambient background ---------------------------- */

function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{ contain: "paint" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-25" />

      {/* Dot pattern overlay — adds instrumentation texture */}
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

      {/* Drifting gradient orbs — promoted to own GPU layer for cheap compositing */}
      <div
        className="absolute left-[12%] top-[18%] h-[55vh] w-[55vh] animate-drift-slower rounded-full bg-signal-green/[0.09] blur-[80px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute right-[8%] top-[28%] h-[48vh] w-[48vh] animate-drift-slow rounded-full bg-signal-amber/[0.06] blur-[80px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute bottom-[6%] left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 animate-float-y-slow rounded-full bg-signal-green/[0.07] blur-[100px]"
        style={{ willChange: "transform" }}
      />

      {/* Corner crosshair marks — instrumentation flourish */}
      <CornerMark className="left-6 top-6 sm:left-10 sm:top-10" />
      <CornerMark className="right-6 top-6 rotate-90 sm:right-10 sm:top-10" />
      <CornerMark className="bottom-6 left-6 -rotate-90 sm:bottom-10 sm:left-10" />
      <CornerMark className="bottom-6 right-6 rotate-180 sm:bottom-10 sm:right-10" />

      {/* Top hairline only */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-green/30 to-transparent" />

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

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={"absolute h-4 w-4 text-signal-green/40 sm:h-5 sm:w-5 " + className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M0 8 V0 H8" />
    </svg>
  );
}

/* --------------------------------- icons --------------------------------- */

