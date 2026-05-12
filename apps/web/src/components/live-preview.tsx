"use client";

import { ArrowDown, ArrowUp, ChevronRight, Minus } from "lucide-react";
import { RevealOnScroll } from "./reveal-on-scroll";
import { SectionDivider } from "./section-ambient";

export function LivePreview() {
  return (
    <section id="preview" className="relative scroll-mt-20 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-14">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
              / preview
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
              The terminal, in three views.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
              One market, every venue. Every whale, every move. Every spread, sorted by edge.
              Nothing else like it.
            </p>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-muted-foreground sm:flex">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green/60 opacity-75" />
              <span className="relative inline-flex h-full w-full rounded-full bg-signal-green" />
            </span>
            live
          </div>
        </div>

        <div className="grid gap-5 sm:gap-6">
          <RevealOnScroll delay={0}>
            <UnifiedMarketPreview />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <WhaleTapePreview />
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <ArbScannerPreview />
          </RevealOnScroll>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}

/* --------------------------- terminal chrome --------------------------- */

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
          leviathan://terminal
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

/* --------------------------- venue logo chip --------------------------- */

const VENUE_LOGO: Record<string, string> = {
  Polymarket: "/venues/polymarket.png",
  Kalshi: "/venues/kalshi.png",
  Manifold: "/venues/manifold.jpg",
};

function VenueChip({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) {
  const dim = size === "md" ? "h-5 w-5" : "h-4 w-4";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`inline-flex ${dim} flex-shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={VENUE_LOGO[name] ?? ""}
          alt=""
          className="h-full w-full object-contain"
        />
      </span>
      <span>{name}</span>
    </span>
  );
}

/* --------------------------- sparkline --------------------------- */

type SparklineProps = {
  data: number[];
  color: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  showArea?: boolean;
  className?: string;
};

function Sparkline({
  data,
  color,
  width = 80,
  height = 24,
  strokeWidth = 1.5,
  showArea = false,
  className = "",
}: SparklineProps) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const points = data.map((v, i) => {
    const x = i * stepX;
    const y = height - ((v - min) / range) * height;
    return [x, y] as const;
  });
  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const areaPath = `${path} L ${width} ${height} L 0 ${height} Z`;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      {showArea && (
        <path d={areaPath} fill={color} fillOpacity={0.12} stroke="none" />
      )}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* --------------------------- unified market view --------------------------- */

// 24 hourly ticks per venue for Argentina YES odds, ending today
const ARGENTINA_HISTORY = {
  Polymarket: [0.17, 0.17, 0.18, 0.18, 0.19, 0.19, 0.18, 0.19, 0.20, 0.20, 0.19, 0.20, 0.21, 0.22, 0.21, 0.20, 0.21, 0.22, 0.22, 0.21, 0.21, 0.22, 0.21, 0.21],
  Kalshi:     [0.16, 0.16, 0.17, 0.17, 0.17, 0.18, 0.17, 0.18, 0.18, 0.19, 0.18, 0.19, 0.19, 0.20, 0.19, 0.19, 0.20, 0.20, 0.19, 0.19, 0.19, 0.20, 0.19, 0.19],
  Manifold:   [0.20, 0.19, 0.21, 0.22, 0.22, 0.21, 0.22, 0.23, 0.24, 0.23, 0.24, 0.23, 0.24, 0.24, 0.23, 0.24, 0.24, 0.23, 0.23, 0.24, 0.24, 0.23, 0.23, 0.23],
};

const VENUE_COLOR: Record<string, string> = {
  Polymarket: "hsl(var(--signal-green))",
  Kalshi: "hsl(var(--signal-amber))",
  Manifold: "hsl(var(--foreground) / 0.7)",
};

type VenuePrice = { venue: string; price: string; delta: number; best?: boolean; spark: number[] };

type Outcome = {
  label: string;
  venues: VenuePrice[];
  spread: string;
  spreadHot?: boolean;
};

const OTHER_OUTCOMES: Outcome[] = [
  {
    label: "France",
    venues: [
      { venue: "Polymarket", price: "0.18", delta: 0, spark: [0.16, 0.17, 0.17, 0.18, 0.18, 0.17, 0.18, 0.18] },
      { venue: "Kalshi", price: "0.17", delta: 1, best: true, spark: [0.15, 0.16, 0.16, 0.17, 0.17, 0.16, 0.17, 0.17] },
      { venue: "Manifold", price: "0.19", delta: 0, spark: [0.18, 0.18, 0.19, 0.19, 0.18, 0.19, 0.19, 0.19] },
    ],
    spread: "2 pt",
  },
  {
    label: "Brazil",
    venues: [
      { venue: "Polymarket", price: "0.15", delta: -1, best: true, spark: [0.17, 0.16, 0.16, 0.15, 0.16, 0.15, 0.15, 0.15] },
      { venue: "Kalshi", price: "0.16", delta: 0, spark: [0.16, 0.16, 0.17, 0.16, 0.17, 0.16, 0.16, 0.16] },
      { venue: "Manifold", price: "0.17", delta: 1, spark: [0.15, 0.16, 0.16, 0.17, 0.16, 0.17, 0.17, 0.17] },
    ],
    spread: "2 pt",
  },
  {
    label: "Spain",
    venues: [
      { venue: "Polymarket", price: "0.12", delta: 1, best: true, spark: [0.10, 0.11, 0.11, 0.12, 0.11, 0.12, 0.12, 0.12] },
      { venue: "Kalshi", price: "0.13", delta: 0, spark: [0.12, 0.13, 0.13, 0.13, 0.12, 0.13, 0.13, 0.13] },
      { venue: "Manifold", price: "0.14", delta: -1, spark: [0.16, 0.15, 0.15, 0.14, 0.14, 0.15, 0.14, 0.14] },
    ],
    spread: "2 pt",
  },
];

function DeltaIcon({ delta }: { delta: number }) {
  if (delta > 0)
    return <ArrowUp className="h-3 w-3 text-signal-green" strokeWidth={2.5} />;
  if (delta < 0)
    return <ArrowDown className="h-3 w-3 text-signal-red" strokeWidth={2.5} />;
  return <Minus className="h-3 w-3 text-muted-foreground" strokeWidth={2.5} />;
}

function UnifiedMarketPreview() {
  // Compute current prices for the headline chart
  const last = (arr: number[]) => arr[arr.length - 1] ?? 0;
  const pmNow = last(ARGENTINA_HISTORY.Polymarket);
  const kalshiNow = last(ARGENTINA_HISTORY.Kalshi);
  const manifoldNow = last(ARGENTINA_HISTORY.Manifold);

  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        / unified market view
      </p>
      <TerminalChrome
        title="2026 FIFA World Cup — winner"
        statusLeft={
          <>
            <span className="text-signal-green">●</span> 24h vol{" "}
            <span className="text-foreground">$8.4M</span> · venues 3 · last tick 2s ago
          </>
        }
        statusRight={<span className="text-signal-green">● ACTIVE</span>}
      >
        <div className="border-b border-border px-4 py-5 sm:px-6 sm:py-6">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
                Featured outcome
              </p>
              <h3 className="mt-0.5 font-semibold tracking-tight sm:text-lg">Argentina</h3>
            </div>
            <div className="grid grid-cols-3 gap-x-3 gap-y-1 font-mono text-[10px] sm:flex sm:flex-wrap sm:items-center sm:gap-x-4 sm:text-xs">
              <LegendDot color="hsl(var(--signal-green))" label="Polymarket" value={pmNow.toFixed(2)} />
              <LegendDot color="hsl(var(--signal-amber))" label="Kalshi" value={kalshiNow.toFixed(2)} />
              <LegendDot color="hsl(var(--foreground) / 0.7)" label="Manifold" value={manifoldNow.toFixed(2)} />
            </div>
          </div>
          <MultiLineChart
            series={[
              { name: "Polymarket", data: ARGENTINA_HISTORY.Polymarket, color: VENUE_COLOR.Polymarket! },
              { name: "Kalshi", data: ARGENTINA_HISTORY.Kalshi, color: VENUE_COLOR.Kalshi! },
              { name: "Manifold", data: ARGENTINA_HISTORY.Manifold, color: VENUE_COLOR.Manifold! },
            ]}
          />
        </div>

        {/* Mobile: stacked card layout for other outcomes */}
        <div className="divide-y divide-border sm:hidden">
          <p className="bg-muted/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Other outcomes
          </p>
          {OTHER_OUTCOMES.map((o) => (
            <div key={o.label} className="px-4 py-3 font-mono text-[12px]">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-foreground">{o.label}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  spread{" "}
                  <span
                    className={
                      "tabular-nums " +
                      (o.spreadHot ? "text-signal-amber" : "text-foreground")
                    }
                  >
                    {o.spread}
                  </span>
                </span>
              </div>
              <div className="space-y-1.5">
                {o.venues.map((v) => (
                  <div key={v.venue} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <span
                        className="inline-block h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ background: VENUE_COLOR[v.venue] ?? "hsl(var(--foreground))" }}
                      />
                      <span>{v.venue}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkline
                        data={v.spark}
                        color={VENUE_COLOR[v.venue] ?? "hsl(var(--foreground))"}
                        width={36}
                        height={14}
                        showArea
                      />
                      <span
                        className={
                          "inline-flex items-center gap-1 tabular-nums " +
                          (v.best ? "text-signal-green" : "text-foreground")
                        }
                      >
                        {v.price}
                        <DeltaIcon delta={v.delta} />
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: dense table */}
        <div className="hidden sm:block">
          <table className="w-full font-mono text-[13px]">
            <thead className="border-b border-border bg-muted/20 text-[11px] uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-6 py-2 text-left">Other outcomes</th>
                <th className="px-3 py-2 text-right">Polymarket</th>
                <th className="px-3 py-2 text-right">Kalshi</th>
                <th className="px-3 py-2 text-right">Manifold</th>
                <th className="px-6 py-2 text-right">Spread</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {OTHER_OUTCOMES.map((o) => (
                <tr key={o.label} className="hover:bg-muted/20">
                  <td className="px-6 py-3 text-foreground">{o.label}</td>
                  {o.venues.map((v) => (
                    <td key={v.venue} className="px-3 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Sparkline
                          data={v.spark}
                          color={VENUE_COLOR[v.venue] ?? "hsl(var(--foreground))"}
                          width={40}
                          height={16}
                          showArea
                        />
                        <span
                          className={
                            "inline-flex items-center gap-1 " +
                            (v.best ? "text-signal-green" : "text-foreground")
                          }
                        >
                          <span className="tabular-nums">{v.price}</span>
                          <DeltaIcon delta={v.delta} />
                        </span>
                      </div>
                    </td>
                  ))}
                  <td className="px-6 py-3 text-right">
                    <span
                      className={
                        "tabular-nums " +
                        (o.spreadHot ? "text-signal-amber" : "text-muted-foreground")
                      }
                    >
                      {o.spread}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TerminalChrome>
    </div>
  );
}

function LegendDot({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-block h-2 w-2 rounded-full" style={{ background: color }} />
      <span className="text-muted-foreground">{label}</span>
      <span className="tabular-nums text-foreground">{value}</span>
    </span>
  );
}

/* --------------------------- multi-line chart --------------------------- */

type Series = { name: string; data: number[]; color: string };

function MultiLineChart({
  series,
}: {
  series: Series[];
}) {
  // viewBox stays fixed; SVG scales proportionally. Aspect ratio ~3:1 reads well at all sizes.
  const width = 600;
  const height = 200;
  const padding = { top: 12, right: 16, bottom: 28, left: 56 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const allPoints = series.flatMap((s) => s.data);
  const min = Math.min(...allPoints);
  const max = Math.max(...allPoints);
  const range = max - min || 1;
  const yPad = range * 0.15;
  const yMin = Math.max(0, min - yPad);
  const yMax = Math.min(1, max + yPad);
  const yRange = yMax - yMin;

  const len = series[0]?.data.length ?? 0;
  const stepX = len > 1 ? innerW / (len - 1) : 0;

  const yTo = (v: number) => padding.top + innerH - ((v - yMin) / yRange) * innerH;
  const xTo = (i: number) => padding.left + i * stepX;

  const yTicks = [yMin, (yMin + yMax) / 2, yMax];
  const xLabels = ["24h", "18h", "12h", "6h", "now"];

  return (
    <svg
      className="block h-auto w-full"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Y axis grid */}
      {yTicks.map((t, i) => {
        const y = yTo(t);
        return (
          <g key={i}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={y}
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth={1}
              strokeDasharray={i === 1 ? "0" : "4 4"}
              opacity={i === 1 ? 0.45 : 0.3}
            />
            <text
              x={padding.left - 10}
              y={y + 4}
              fontSize="13"
              textAnchor="end"
              fill="hsl(var(--muted-foreground))"
              fontFamily="ui-monospace, monospace"
            >
              {t.toFixed(2)}
            </text>
          </g>
        );
      })}

      {/* X axis labels */}
      {xLabels.map((label, i) => {
        const x = padding.left + (i * innerW) / (xLabels.length - 1);
        return (
          <text
            key={label}
            x={x}
            y={height - 8}
            fontSize="13"
            textAnchor={i === 0 ? "start" : i === xLabels.length - 1 ? "end" : "middle"}
            fill="hsl(var(--muted-foreground))"
            fontFamily="ui-monospace, monospace"
          >
            {label}
          </text>
        );
      })}

      {/* Series lines + areas */}
      {series.map((s) => {
        const points = s.data.map((v, i) => [xTo(i), yTo(v)] as const);
        const path = points
          .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
          .join(" ");
        const areaPath = `${path} L ${xTo(len - 1).toFixed(1)} ${padding.top + innerH} L ${xTo(0).toFixed(1)} ${padding.top + innerH} Z`;
        const lastIdx = s.data.length - 1;
        const [lastX, lastY] = points[lastIdx] ?? [0, 0];
        return (
          <g key={s.name}>
            <path d={areaPath} fill={s.color} fillOpacity={0.08} />
            <path
              d={path}
              fill="none"
              stroke={s.color}
              strokeWidth={1.75}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle cx={lastX} cy={lastY} r={3.5} fill={s.color} stroke="hsl(var(--background))" strokeWidth={1.5} />
          </g>
        );
      })}
    </svg>
  );
}

/* --------------------------- whale activity tape --------------------------- */

type WhaleEvent = {
  time: string;
  wallet: string;
  action: "BUY" | "SELL";
  size: string;
  venue: "Polymarket" | "Kalshi" | "Manifold";
  market: string;
  hitRate: string;
  trades: string;
  pnlSpark: number[];
  emphasis?: boolean;
};

const WHALE_EVENTS: WhaleEvent[] = [
  {
    time: "09:42:18",
    wallet: "MACRO-7F3",
    action: "BUY",
    size: "$340k YES",
    venue: "Polymarket",
    market: "Fed cuts ≥25bps at July FOMC",
    hitRate: "73% macro",
    trades: "41 trades",
    pnlSpark: [1, 1.1, 1.4, 1.3, 1.6, 1.9, 2.1, 2.4],
    emphasis: true,
  },
  {
    time: "09:38:51",
    wallet: "SPORTS-A12",
    action: "BUY",
    size: "$92k YES",
    venue: "Polymarket",
    market: "Argentina wins 2026 World Cup",
    hitRate: "61% sports",
    trades: "118 trades",
    pnlSpark: [0.8, 0.9, 1.0, 1.1, 1.0, 1.2, 1.3, 1.4],
  },
  {
    time: "09:31:04",
    wallet: "POLI-D9C",
    action: "SELL",
    size: "$180k YES",
    venue: "Kalshi",
    market: "Trump indicted in 2026",
    hitRate: "58% politics",
    trades: "22 trades",
    pnlSpark: [1.2, 1.4, 1.3, 1.5, 1.4, 1.3, 1.2, 1.1],
  },
  {
    time: "09:14:22",
    wallet: "MACRO-2B8",
    action: "BUY",
    size: "$420k NO",
    venue: "Kalshi",
    market: "Recession by Q4 2026",
    hitRate: "69% macro",
    trades: "33 trades",
    pnlSpark: [0.6, 0.7, 0.9, 1.1, 1.3, 1.4, 1.6, 1.8],
  },
  {
    time: "08:57:09",
    wallet: "SPORTS-A12",
    action: "BUY",
    size: "$58k YES",
    venue: "Kalshi",
    market: "France advances to semi-finals",
    hitRate: "61% sports",
    trades: "118 trades",
    pnlSpark: [0.8, 0.9, 1.0, 1.1, 1.0, 1.2, 1.3, 1.4],
  },
];

function WhaleTapePreview() {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        / whale activity tape
      </p>
      <TerminalChrome
        title="real-time whale wallet feed"
        statusLeft={
          <>
            <span className="text-signal-green">●</span> tracking{" "}
            <span className="text-foreground">2,847 wallets</span> · 5 events in last hour
          </>
        }
        statusRight={<span className="text-signal-green">● LIVE</span>}
      >
        <div className="divide-y divide-border font-mono text-[12px] sm:text-[13px]">
          {WHALE_EVENTS.map((e, i) => {
            const pnlEnd = e.pnlSpark[e.pnlSpark.length - 1] ?? 0;
            const pnlStart = e.pnlSpark[0] ?? 0;
            const pnlUp = pnlEnd >= pnlStart;
            return (
              <div
                key={i}
                className={
                  "px-4 py-3 sm:px-6 " + (e.emphasis ? "bg-signal-green/[0.04]" : "")
                }
              >
                {/* Mobile: stacked layout */}
                <div className="flex flex-col gap-1 sm:hidden">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-semibold text-foreground">{e.wallet}</span>
                    <span className="tabular-nums text-[11px] text-muted-foreground">{e.time}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={
                        "tabular-nums font-semibold " +
                        (e.action === "BUY" ? "text-signal-green" : "text-signal-red")
                      }
                    >
                      {e.action} {e.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground/80">
                    <VenueChip name={e.venue} />
                    <span className="text-muted-foreground">·</span>
                    <span className="min-w-0 truncate">{e.market}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {e.hitRate} · {e.trades}
                  </span>
                </div>

                {/* Desktop: single-row grid */}
                <div className="hidden sm:grid grid-cols-[auto_auto_auto_1fr_auto_auto] items-center gap-x-4">
                  <span className="tabular-nums text-muted-foreground">{e.time}</span>
                  <span className="font-semibold text-foreground">{e.wallet}</span>
                  <span
                    className={
                      "tabular-nums font-semibold " +
                      (e.action === "BUY" ? "text-signal-green" : "text-signal-red")
                    }
                  >
                    {e.action} {e.size}
                  </span>
                  <span className="min-w-0 truncate text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 text-foreground/80">
                      <VenueChip name={e.venue} />
                      <span className="text-muted-foreground">·</span>
                      <span>{e.market}</span>
                    </span>
                  </span>
                  <Sparkline
                    data={e.pnlSpark}
                    color={pnlUp ? "hsl(var(--signal-green))" : "hsl(var(--signal-red))"}
                    width={50}
                    height={20}
                    showArea
                  />
                  <span className="text-[11px] text-muted-foreground">
                    {e.hitRate} · {e.trades}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </TerminalChrome>
    </div>
  );
}

/* --------------------------- cross-venue arb scanner --------------------------- */

type Arb = {
  status: "active" | "closing" | "closed";
  market: string;
  venueA: { name: "Polymarket" | "Kalshi" | "Manifold"; side: string; price: string };
  venueB: { name: "Polymarket" | "Kalshi" | "Manifold"; side: string; price: string };
  edge: string;
  roi: string;
  apy?: string;
  age: string;
  spreadSpark: number[];
};

const ARBS: Arb[] = [
  {
    status: "active",
    market: "BoJ April rate hike · +25 bps",
    venueA: { name: "Kalshi", side: "YES", price: "0.02" },
    venueB: { name: "Polymarket", side: "NO", price: "0.91" },
    edge: "89 pt",
    roi: "4.4%",
    apy: "230% APY",
    age: "47 min",
    spreadSpark: [40, 55, 62, 70, 78, 85, 89, 89],
  },
  {
    status: "active",
    market: "Argentina wins 2026 World Cup",
    venueA: { name: "Polymarket", side: "YES", price: "0.21" },
    venueB: { name: "Kalshi", side: "YES", price: "0.19" },
    edge: "2 pt",
    roi: "1.8%",
    age: "12 min",
    spreadSpark: [1, 1, 2, 2, 1, 2, 2, 2],
  },
  {
    status: "active",
    market: "Fed cuts by July FOMC",
    venueA: { name: "Polymarket", side: "YES", price: "0.64" },
    venueB: { name: "Kalshi", side: "YES", price: "0.59" },
    edge: "5 pt",
    roi: "2.1%",
    age: "1h 24m",
    spreadSpark: [3, 4, 4, 5, 6, 5, 5, 5],
  },
  {
    status: "closing",
    market: "BTC > $150k EOY",
    venueA: { name: "Polymarket", side: "YES", price: "0.21" },
    venueB: { name: "Kalshi", side: "YES", price: "0.24" },
    edge: "3 pt",
    roi: "0.9%",
    age: "8 min",
    spreadSpark: [8, 7, 6, 5, 4, 4, 3, 3],
  },
  {
    status: "closed",
    market: "Trump indicted in 2026",
    venueA: { name: "Polymarket", side: "NO", price: "—" },
    venueB: { name: "Kalshi", side: "NO", price: "—" },
    edge: "—",
    roi: "—",
    age: "resolved 8:42 ET",
    spreadSpark: [12, 10, 8, 6, 4, 2, 1, 0],
  },
];

function StatusPill({ status }: { status: Arb["status"] }) {
  if (status === "active")
    return (
      <span className="inline-flex flex-shrink-0 items-center rounded-sm border border-signal-green/40 bg-signal-green/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-signal-green sm:text-[10px]">
        active
      </span>
    );
  if (status === "closing")
    return (
      <span className="inline-flex flex-shrink-0 items-center rounded-sm border border-signal-amber/40 bg-signal-amber/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-signal-amber sm:text-[10px]">
        closing
      </span>
    );
  return (
    <span className="inline-flex flex-shrink-0 items-center rounded-sm border border-border bg-muted/60 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[10px]">
      closed
    </span>
  );
}

function ArbScannerPreview() {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        / cross-venue arb scanner
      </p>
      <TerminalChrome
        title="active arbitrage opportunities · sorted by edge"
        statusLeft={
          <>
            <span className="text-signal-green">●</span> 3 active · 1 closing · avg ROI{" "}
            <span className="text-foreground">2.8%</span> · scanning every 4s
          </>
        }
        statusRight={<span className="text-signal-green">● SCANNING</span>}
      >
        <div className="divide-y divide-border font-mono text-[12px] sm:text-[13px]">
          {ARBS.map((a, i) => {
            const lastSpread = a.spreadSpark[a.spreadSpark.length - 1] ?? 0;
            const firstSpread = a.spreadSpark[0] ?? 0;
            const spreadColor =
              a.status === "closed"
                ? "hsl(var(--muted-foreground))"
                : lastSpread >= firstSpread
                  ? "hsl(var(--signal-green))"
                  : "hsl(var(--signal-amber))";
            return (
              <div
                key={i}
                className={
                  "px-4 py-3.5 sm:px-6 sm:py-4 " +
                  (a.status === "closed" ? "opacity-50" : "")
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <StatusPill status={a.status} />
                      <p className="font-semibold text-foreground sm:truncate">{a.market}</p>
                    </div>
                    {/* Legs: stacked on mobile, inline on desktop */}
                    <div className="flex flex-col gap-1 text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
                      <span className="inline-flex items-center gap-1.5">
                        <VenueChip name={a.venueA.name} />{" "}
                        <span>{a.venueA.side}</span>{" "}
                        <span className="tabular-nums text-foreground">{a.venueA.price}</span>
                      </span>
                      <ChevronRight className="hidden h-3.5 w-3.5 text-muted-foreground/60 sm:inline-block" />
                      <span className="inline-flex items-center gap-1.5">
                        <VenueChip name={a.venueB.name} />{" "}
                        <span>{a.venueB.side}</span>{" "}
                        <span className="tabular-nums text-foreground">{a.venueB.price}</span>
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-muted-foreground sm:mt-1 sm:text-[12px]">
                      open {a.age}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-3">
                    <Sparkline
                      data={a.spreadSpark}
                      color={spreadColor}
                      width={60}
                      height={28}
                      showArea
                      className="hidden sm:block"
                    />
                    <div className="text-right">
                      <p className="tabular-nums text-signal-green">{a.edge}</p>
                      <p className="tabular-nums text-[11px] text-muted-foreground sm:text-[12px]">
                        {a.roi}
                        {a.apy ? ` · ${a.apy}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </TerminalChrome>
    </div>
  );
}
