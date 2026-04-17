import { WaitlistForm } from "./waitlist-form";
import { LiveTicker } from "./live-ticker";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" aria-hidden />

      <LiveTicker />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-start gap-[clamp(1.25rem,3vh,2rem)] px-4 pb-[clamp(2rem,6vh,4rem)] pt-12 text-center sm:justify-center sm:px-6 sm:pt-[clamp(2rem,6vh,4rem)]">
        <div className="inline-flex max-w-full animate-fade-in items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-[11px] text-muted-foreground sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-sm">
          <span className="inline-block h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-signal-green sm:h-2 sm:w-2" />
          <span className="truncate">Polymarket, Kalshi, Manifold &mdash; and more</span>
        </div>

        <h1
          className="text-balance max-w-6xl animate-fade-in font-semibold leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 7.5vw, 5.75rem)",
            animationDelay: "80ms",
            animationFillMode: "backwards",
          }}
        >
          The AI agent for
          <br className="hidden sm:block" /> prediction markets.
        </h1>

        <p
          className="text-balance max-w-5xl animate-fade-in font-mono text-muted-foreground"
          style={{
            fontSize: "clamp(1rem, 1.7vw, 1.25rem)",
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
            Track the whales. Find the arb. Trade the catalyst.
          </span>
        </p>

        <div
          id="waitlist"
          className="w-full max-w-md animate-fade-in scroll-mt-24"
          style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
        >
          <WaitlistForm />
        </div>

        <p
          className="text-balance animate-fade-in px-2 font-mono text-xs text-muted-foreground sm:text-sm"
          style={{ animationDelay: "320ms", animationFillMode: "backwards" }}
        >
          First 100 get founding-member pricing — locked in forever.
        </p>
      </div>

      <div className="relative hidden items-center justify-center pb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 sm:flex">
        <span className="animate-pulse">scroll</span>
        <span className="ml-2">↓</span>
      </div>
    </section>
  );
}
