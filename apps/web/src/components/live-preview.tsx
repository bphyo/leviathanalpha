"use client";

import { useEffect, useState } from "react";
import { RevealOnScroll } from "./reveal-on-scroll";

export function LivePreview() {
  return (
    <section id="preview" className="scroll-mt-20 border-b border-border/60 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-14">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
              / preview
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
              See the agent in action.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
              Conversational intelligence, real-time signals, and whale profiles &mdash;
              across every prediction market that matters.
            </p>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-muted-foreground sm:flex">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal-green" />
            live
          </div>
        </div>

        <div className="grid gap-5 sm:gap-6">
          <RevealOnScroll delay={0}>
            <ChatPreview />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <AlertFeedPreview />
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <ArbScannerPreview />
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <WhaleProfilePreview />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function TerminalChrome({
  title,
  children,
  statusLeft,
  statusRight,
}: {
  title: string;
  children: React.ReactNode;
  statusLeft?: React.ReactNode;
  statusRight?: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/40 px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="flex flex-shrink-0 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-red/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
        </div>
        <p className="truncate font-mono text-[11px] text-muted-foreground sm:text-xs">
          {title}
        </p>
        <span className="hidden flex-shrink-0 font-mono text-xs text-muted-foreground sm:inline">
          leviathan://agent
        </span>
      </div>

      {children}

      {(statusLeft || statusRight) && (
        <div className="flex items-center justify-between gap-2 border-t border-border bg-muted/30 px-3 py-2 font-mono text-[10px] text-muted-foreground sm:px-4 sm:text-[11px]">
          <span className="truncate">{statusLeft}</span>
          <span className="flex-shrink-0">{statusRight}</span>
        </div>
      )}
    </div>
  );
}

function ChatPreview() {
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setShowCursor((c) => !c), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        / ask leviathan
      </p>
      <TerminalChrome
        title="conversational agent"
        statusLeft={
          <>
            <span className="text-signal-green">●</span> thinking complete &middot; 312ms &middot;
            sources: 4 venues, 8 wallets
          </>
        }
        statusRight={<span className="text-signal-green">● live</span>}
      >
        <div className="px-4 py-5 font-mono text-[13px] leading-relaxed sm:px-6 sm:py-7 sm:text-sm">
          <div className="mb-5 flex gap-2 text-muted-foreground">
            <span className="text-signal-green">&gt;</span>
            <span>What moved in prediction markets today?</span>
          </div>

          <div className="space-y-4 text-foreground">
            <p className="text-muted-foreground">
              I&apos;m tracking 3 things worth watching:
            </p>

            <div className="space-y-1">
              <p>
                <span className="mr-1">🐋</span>
                <span className="font-semibold">Macro Whale</span>{" "}
                <span className="text-muted-foreground">
                  (0xABC&hellip;, 73% hit rate on Fed)
                </span>
              </p>
              <p className="pl-6 text-muted-foreground">
                dropped <span className="text-foreground">$340k YES</span> on &ldquo;Fed cuts by
                July&rdquo;
              </p>
              <p className="pl-6 text-muted-foreground">
                Market repriced{" "}
                <span className="tabular-nums text-foreground">0.64 &rarr; 0.67</span>{" "}
                <span className="text-signal-green">&uarr;</span> in 4 minutes
              </p>
            </div>

            <div className="space-y-1">
              <p>
                <span className="mr-1">⚡</span>
                <span className="font-semibold">Kalshi &harr; Polymarket</span>{" "}
                <span className="text-muted-foreground">spread on BoJ April hike</span>
              </p>
              <p className="pl-6 text-muted-foreground">
                widened to{" "}
                <span className="tabular-nums text-foreground">89 pts</span>{" "}
                <span className="text-signal-amber">(4.4% arb)</span>
              </p>
            </div>

            <div className="space-y-1">
              <p>
                <span className="mr-1">📈</span>
                <span className="font-semibold">&ldquo;Trump indicted in 2026&rdquo;</span>{" "}
                <span className="text-muted-foreground">saw 3 whale flips in 2h</span>
              </p>
              <p className="pl-6 text-muted-foreground">
                Now pricing <span className="text-signal-red">18% lower</span> than last week
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-muted-foreground">
            <span>Want me to dig into any of these?</span>
            <span
              className={
                "inline-block h-4 w-2 bg-signal-green transition-opacity " +
                (showCursor ? "opacity-100" : "opacity-0")
              }
            />
          </div>
        </div>
      </TerminalChrome>
    </div>
  );
}

type Alert = {
  time: string;
  glyph: string;
  title: string;
  body: string;
  toneClass?: string;
};

const ALERTS: Alert[] = [
  {
    time: "just now",
    glyph: "🐋",
    title: "Macro Whale placed $340k YES on Fed cuts",
    body: "Pattern: 73% hit rate on macro. Positions ~6h before FOMC.",
    toneClass: "text-signal-green",
  },
  {
    time: "14 min ago",
    glyph: "📊",
    title: "Polymarket vs Kalshi spread on BoJ: 89 pts",
    body: "Unusual — spreads this wide rarely hold more than 4 hours.",
    toneClass: "text-signal-amber",
  },
  {
    time: "23 min ago",
    glyph: "🧠",
    title: "3 top-10 wallets flipped \"Trump indicted 2026\"",
    body: "Concentrated moves like this historically lead price by 4–12h.",
    toneClass: "text-foreground",
  },
  {
    time: "37 min ago",
    glyph: "⚡",
    title: "New market opened: NBA Finals · Polymarket",
    body: "First 12 min of liquidity: $2.3M. Unusual pace vs baseline.",
    toneClass: "text-signal-green",
  },
  {
    time: "52 min ago",
    glyph: "🔻",
    title: "CPI < 3.0% April — whale exited $180k YES position",
    body: "Same wallet opened NO position on Kalshi for similar size.",
    toneClass: "text-signal-red",
  },
];

function AlertFeedPreview() {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        / live signal feed
      </p>
      <TerminalChrome
        title="real-time agent alerts"
        statusLeft={
          <>
            <span className="text-signal-green">●</span> 5 signals in last hour &middot; watching{" "}
            <span className="text-foreground">10+ venues</span>
          </>
        }
        statusRight={<span className="text-signal-green">● live</span>}
      >
        <div className="divide-y divide-border font-mono text-[13px] sm:text-sm">
          {ALERTS.map((a, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3 sm:px-6 sm:py-4">
              <span className="mt-0.5 text-lg leading-none">{a.glyph}</span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <p className={"font-semibold sm:truncate " + (a.toneClass ?? "text-foreground")}>
                    {a.title}
                  </p>
                  <span className="flex-shrink-0 font-mono text-[11px] text-muted-foreground">
                    {a.time}
                  </span>
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]">
                  {a.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </TerminalChrome>
    </div>
  );
}

type Arb = {
  status: "active" | "closing" | "closed";
  market: string;
  venueA: { name: string; side: string; price: string };
  venueB: { name: string; side: string; price: string };
  edge: string;
  roi: string;
  apy?: string;
  note?: string;
};

const ARBS: Arb[] = [
  {
    status: "active",
    market: "BoJ April rate hike · +25 bps",
    venueA: { name: "Kalshi", side: "YES", price: "2¢" },
    venueB: { name: "Polymarket", side: "NO", price: "91¢" },
    edge: "89 pt",
    roi: "4.4%",
    apy: "230% APY",
    note: "$142 → $6 guaranteed",
  },
  {
    status: "active",
    market: "Fed cuts by July",
    venueA: { name: "Polymarket", side: "YES", price: "64¢" },
    venueB: { name: "Kalshi", side: "YES", price: "59¢" },
    edge: "5 pt",
    roi: "1.8%",
    note: "Thin liquidity on Kalshi leg",
  },
  {
    status: "active",
    market: "NBA Finals · Warriors win",
    venueA: { name: "Polymarket", side: "YES", price: "34¢" },
    venueB: { name: "Kalshi", side: "NO", price: "58¢" },
    edge: "8 pt",
    roi: "2.1%",
    note: "Narrow window — likely closes before tip-off",
  },
  {
    status: "closing",
    market: "BTC > $150k EOY",
    venueA: { name: "Polymarket", side: "YES", price: "21¢" },
    venueB: { name: "Kalshi", side: "YES", price: "24¢" },
    edge: "2 pt",
    roi: "0.6%",
    note: "Gap closed from 8pt → 2pt in last 14 min",
  },
  {
    status: "closed",
    market: "Trump indicted in 2026",
    venueA: { name: "Polymarket", side: "NO", price: "—" },
    venueB: { name: "Kalshi", side: "NO", price: "—" },
    edge: "—",
    roi: "—",
    note: "Arb resolved 08:42 ET · 45-min window",
  },
];

function statusPill(status: Arb["status"]) {
  if (status === "active")
    return (
      <span className="rounded-full border border-signal-green/40 bg-signal-green/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-signal-green">
        active
      </span>
    );
  if (status === "closing")
    return (
      <span className="rounded-full border border-signal-amber/40 bg-signal-amber/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-signal-amber">
        closing
      </span>
    );
  return (
    <span className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
      closed
    </span>
  );
}

function ArbScannerPreview() {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        / arb scanner
      </p>
      <TerminalChrome
        title="cross-venue arbitrage monitor"
        statusLeft={
          <>
            <span className="text-signal-green">●</span> 3 active &middot; 1 closing &middot;
            avg ROI{" "}
            <span className="text-foreground">2.8%</span>
          </>
        }
        statusRight={<span className="text-signal-green">● scanning</span>}
      >
        <div className="divide-y divide-border font-mono text-[13px] sm:text-sm">
          {ARBS.map((a, i) => (
            <div
              key={i}
              className={
                "px-4 py-3.5 sm:px-6 sm:py-4 " +
                (a.status === "closed" ? "opacity-50" : "")
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {statusPill(a.status)}
                    <p className="font-semibold text-foreground sm:truncate">{a.market}</p>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-muted-foreground">
                    <span>
                      <span className="text-foreground">{a.venueA.name}</span>{" "}
                      {a.venueA.side}{" "}
                      <span className="tabular-nums text-foreground">{a.venueA.price}</span>
                    </span>
                    <span className="text-muted-foreground/60">&harr;</span>
                    <span>
                      <span className="text-foreground">{a.venueB.name}</span>{" "}
                      {a.venueB.side}{" "}
                      <span className="tabular-nums text-foreground">{a.venueB.price}</span>
                    </span>
                  </div>
                  {a.note && (
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]">
                      {a.note}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="tabular-nums text-signal-green">{a.edge}</p>
                  <p className="tabular-nums text-[12px] text-muted-foreground">
                    {a.roi}
                    {a.apy ? ` · ${a.apy}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TerminalChrome>
    </div>
  );
}

function WhaleProfilePreview() {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        / whale profile
      </p>
      <TerminalChrome
        title="0xABC...7f3 · Macro Whale"
        statusLeft={
          <>
            <span className="text-signal-green">●</span> tracked for 214 days
          </>
        }
        statusRight={<span className="text-signal-green">● watching</span>}
      >
        <div className="grid gap-0 font-mono text-[13px] sm:grid-cols-2 sm:text-sm">
          <div className="space-y-5 border-b border-border p-4 sm:border-b-0 sm:border-r sm:p-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl leading-none">🐋</span>
              <div>
                <p className="font-semibold">Macro Whale</p>
                <p className="text-[11px] text-muted-foreground">0xABC...7f3</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Total PnL (2025)</span>
                <span className="tabular-nums text-signal-green">+$2.4M</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Hit rate (macro)</span>
                <span className="tabular-nums">73%</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Avg position size</span>
                <span className="tabular-nums">$180k</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Active hours</span>
                <span>Mornings ET</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-4 sm:p-6">
            <div>
              <p className="mb-2.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                Current positions
              </p>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="min-w-0 truncate">Fed cuts by July</span>
                  <span className="flex items-center gap-1.5 tabular-nums text-signal-green">
                    $340k YES <span>&uarr;</span>
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="min-w-0 truncate">Recession Q2 2026</span>
                  <span className="flex items-center gap-1.5 tabular-nums text-signal-red">
                    $180k NO <span>&darr;</span>
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="min-w-0 truncate">CPI &lt; 3.0% April</span>
                  <span className="flex items-center gap-1.5 tabular-nums text-muted-foreground">
                    $120k YES <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[11px] uppercase tracking-wider text-signal-green">
                Agent notes
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Positions consistently before FOMC meetings. Pattern suggests institutional or
                well-informed trader. Typically moves ~6 hrs before CPI/NFP prints.
              </p>
            </div>
          </div>
        </div>
      </TerminalChrome>
    </div>
  );
}
