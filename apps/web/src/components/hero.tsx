import Link from "next/link";
import { WaitlistForm } from "./waitlist-form";
import { SectionFadeBottom } from "./section-ambient";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden">
      <AmbientBackground />
      <SectionFadeBottom />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-[clamp(1.25rem,3vh,2rem)] px-4 pb-[clamp(3rem,9vh,5rem)] pt-[clamp(1.5rem,4vh,3rem)] text-center sm:px-6">
        <div className="inline-flex max-w-full animate-fade-in items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur-sm sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-sm">
          <span className="relative inline-flex h-1.5 w-1.5 flex-shrink-0 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green/60 opacity-75" />
            <span className="relative inline-flex h-full w-full rounded-full bg-signal-green" />
          </span>
          <span className="truncate">Polymarket, Kalshi, PredictIt &mdash; and more</span>
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
            Unified intelligence
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
            <Link
              href="/newsletter"
              className="underline-offset-2 transition-colors hover:text-signal-green hover:underline"
            >
              Weekly newsletter
            </Link>
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

      {/* Three drifting gradient orbs at different speeds + colors */}
      <div className="absolute left-[12%] top-[18%] h-[55vh] w-[55vh] animate-drift-slower rounded-full bg-signal-green/[0.08] blur-[120px]" />
      <div className="absolute right-[8%] top-[28%] h-[48vh] w-[48vh] animate-drift-slow rounded-full bg-signal-amber/[0.05] blur-[110px]" />
      <div className="absolute bottom-[6%] left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 animate-float-y-slow rounded-full bg-signal-green/[0.06] blur-[140px]" />

      {/* Film grain noise — breaks up flat gradients */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

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
