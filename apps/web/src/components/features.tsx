import { CardTexture } from "./card-texture";
import { SectionAmbient, SectionFadeBottom } from "./section-ambient";

const FEATURES = [
  {
    tag: "01",
    title: "Whale Watch",
    body: "Every top wallet, ranked by PnL and conviction. Get paged the moment a whale moves size — before the market reprices.",
    meta: "~2.1s median alert latency",
  },
  {
    tag: "02",
    title: "Unified Market View + Arbitrage",
    body: "Same event, different venue, different price. We surface mispricings across Polymarket, Kalshi, Manifold, and more so you don't have to tab-switch.",
    meta: "live spread scanner",
  },
  {
    tag: "03",
    title: "Catalyst Calendar",
    body: "What's on next week's tape — Fed prints, court rulings, sports finals, earnings — mapped to the markets each catalyst moves.",
    meta: "weekly · pre-event",
  },
  {
    tag: "04",
    title: "EV Scoring",
    body: "Every market scored on expected value: implied probability vs. fair odds derived from on-chain flow, historical hit rates, and resolution context.",
    meta: "auto · per market",
  },
  {
    tag: "05",
    title: "News & Sentiment Pulse",
    body: "We crawl headlines, Twitter/X, Reddit, and on-chain chatter for every active market — surface the stories moving sentiment before the price moves.",
    meta: "headlines · social · on-chain",
  },
  {
    tag: "06",
    title: "Wallet Stalking",
    body: "Follow specific smart-money wallets one-by-one. Get pinged the second they enter or exit a position. Quiet copy-trade for the wallets you trust.",
    meta: "per-wallet alerts",
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
            Six edges. One terminal.
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
