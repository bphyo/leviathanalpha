import { CardTexture } from "./card-texture";
import { SectionAmbient, SectionFadeBottom } from "./section-ambient";

const FEATURES = [
  {
    tag: "01",
    title: "Whale tracking",
    body: "Every Polymarket wallet, ranked by PnL and conviction. Get paged the moment a top wallet moves size — before the market reprices.",
    meta: "~2.1s median alert latency",
  },
  {
    tag: "02",
    title: "Cross-venue arbitrage",
    body: "Same event, different venue, different price. We surface mispricings between Polymarket, Kalshi, Manifold, and more so you don't have to tab-switch.",
    meta: "live spread scanner",
  },
  {
    tag: "03",
    title: "Resolution-source sentiment",
    body: "Every market has a resolution source — Fed minutes, Truth Social, a sports score. We track the signal that actually moves the outcome.",
    meta: "news · on-chain · social",
  },
  {
    tag: "04",
    title: "Backtested insider library",
    body: "The wallets that keep calling it right. Ranked by conviction and hit rate — follow the insiders, not the noise.",
    meta: "backtested hit rates",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 overflow-hidden py-14 sm:py-28">
      <SectionAmbient noiseId="features-noise" />
      <SectionFadeBottom />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
            / signals
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
            Your personalized AI agent for every prediction.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
            Retail trades on vibes. Sharp traders trade on flow, spread, and resolution
            context. Leviathan Alpha puts that toolkit in one place.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.tag}
              className="group relative flex flex-col gap-2.5 overflow-hidden bg-background p-5 transition-colors hover:bg-muted/30 sm:gap-3 sm:p-7"
            >
              <CardTexture />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{f.tag}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-signal-green">
                  {f.meta}
                </span>
              </div>
              <h3 className="relative text-base font-semibold tracking-tight sm:text-lg">{f.title}</h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
