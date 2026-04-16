"use client";

import { useEffect, useRef, useState } from "react";

type Row = {
  market: string;
  venue: string;
  price: number;
  delta: number;
  vol: string;
};

const SEED: Row[] = [
  { market: "Fed cuts rates by July", venue: "Polymarket", price: 0.64, delta: 0.03, vol: "$2.1M" },
  { market: "Fed cuts rates by July", venue: "Kalshi", price: 0.59, delta: 0.01, vol: "$840K" },
  { market: "BTC > $150k EOY", venue: "Polymarket", price: 0.21, delta: -0.04, vol: "$5.8M" },
  { market: "BTC > $150k EOY", venue: "Kalshi", price: 0.24, delta: -0.02, vol: "$1.2M" },
  { market: "Oscars: Best Picture", venue: "Polymarket", price: 0.38, delta: 0.02, vol: "$410K" },
];

function jitter(r: Row): Row {
  const drift = (Math.random() - 0.5) * 0.012;
  const nextPrice = Math.min(0.99, Math.max(0.01, r.price + drift));
  return { ...r, price: nextPrice, delta: r.delta + drift };
}

export function LivePreview() {
  const [rows, setRows] = useState<Row[]>(SEED);
  const prev = useRef<Row[]>(SEED);

  useEffect(() => {
    const id = setInterval(() => {
      setRows((current) => {
        prev.current = current;
        return current.map(jitter);
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-b border-border/60 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
              / preview
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
              Every venue. One terminal.
            </h2>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-muted-foreground sm:flex">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal-green" />
            live
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/40 px-3 py-2 sm:px-4 sm:py-2.5">
            <div className="flex flex-shrink-0 items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-signal-red/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
            </div>
            <p className="truncate font-mono text-[11px] text-muted-foreground sm:text-xs">
              cross-venue spread monitor
            </p>
            <span className="hidden flex-shrink-0 font-mono text-xs text-muted-foreground sm:inline">
              leviathan://terminal
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  <th className="px-3 py-3 text-left font-medium sm:px-4">Market</th>
                  <th className="hidden px-3 py-3 text-left font-medium sm:table-cell sm:px-4">Venue</th>
                  <th className="px-3 py-3 text-right font-medium sm:px-4">Price</th>
                  <th className="px-3 py-3 text-right font-medium sm:px-4">24h Δ</th>
                  <th className="hidden px-3 py-3 text-right font-medium sm:table-cell sm:px-4">Volume</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {rows.map((r, i) => {
                  const before = prev.current[i]?.price ?? r.price;
                  const flashUp = r.price > before;
                  const flashDown = r.price < before;
                  return (
                    <tr
                      key={`${r.market}-${r.venue}`}
                      className="border-b border-border/60 last:border-none hover:bg-muted/20"
                    >
                      <td className="px-3 py-3 text-xs text-foreground sm:px-4 sm:text-sm">
                        <span className="block">{r.market}</span>
                        <span className="mt-0.5 block text-[10px] text-muted-foreground sm:hidden">
                          {r.venue}
                        </span>
                      </td>
                      <td className="hidden px-3 py-3 text-muted-foreground sm:table-cell sm:px-4">
                        {r.venue}
                      </td>
                      <td
                        className={
                          "px-3 py-3 text-right tabular-nums transition-colors duration-500 sm:px-4 " +
                          (flashUp
                            ? "bg-signal-green/10 text-signal-green"
                            : flashDown
                              ? "bg-signal-red/10 text-signal-red"
                              : "text-foreground")
                        }
                      >
                        {r.price.toFixed(3)}
                      </td>
                      <td
                        className={
                          "px-3 py-3 text-right tabular-nums sm:px-4 " +
                          (r.delta >= 0 ? "text-signal-green" : "text-signal-red")
                        }
                      >
                        {r.delta >= 0 ? "+" : ""}
                        {r.delta.toFixed(3)}
                      </td>
                      <td className="hidden px-3 py-3 text-right tabular-nums text-muted-foreground sm:table-cell sm:px-4">
                        {r.vol}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-border bg-muted/30 px-3 py-2 font-mono text-[10px] text-muted-foreground sm:px-4 sm:text-[11px]">
            <span className="truncate">
              Fed cuts · {((rows[0]!.price - rows[1]!.price) * 100).toFixed(1)}¢ edge ·
              Poly → Kalshi
            </span>
            <span className="flex-shrink-0 text-signal-green">● signal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
