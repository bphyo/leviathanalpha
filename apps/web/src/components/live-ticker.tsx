"use client";

import { useEffect, useState } from "react";

type Tick = {
  market: string;
  venue: string;
  price: number;
  delta: number;
};

const SEED: Tick[] = [
  { market: "FED CUT JUL", venue: "POLY", price: 0.64, delta: 0.03 },
  { market: "BTC > 150K", venue: "POLY", price: 0.21, delta: -0.04 },
  { market: "OSCARS BP", venue: "POLY", price: 0.38, delta: 0.02 },
  { market: "GDP Q2 > 3%", venue: "KALSHI", price: 0.47, delta: 0.01 },
  { market: "NBA FINALS", venue: "POLY", price: 0.29, delta: -0.02 },
  { market: "CPI < 3.0", venue: "KALSHI", price: 0.71, delta: 0.05 },
  { market: "ETH > 5K EOY", venue: "POLY", price: 0.33, delta: -0.01 },
  { market: "SENATE GOP", venue: "POLY", price: 0.58, delta: 0.02 },
];

function jitter(t: Tick): Tick {
  const drift = (Math.random() - 0.5) * 0.02;
  const nextPrice = Math.min(0.99, Math.max(0.01, t.price + drift));
  const nextDelta = t.delta + drift;
  return { ...t, price: nextPrice, delta: nextDelta };
}

export function LiveTicker() {
  const [ticks, setTicks] = useState<Tick[]>(SEED);

  useEffect(() => {
    const id = setInterval(() => {
      setTicks((prev) => prev.map(jitter));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const doubled = [...ticks, ...ticks];

  return (
    <div className="relative z-10 border-y border-border/60 bg-background/60 backdrop-blur-sm">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap py-2.5 font-mono text-xs">
          {doubled.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-muted-foreground/60">{t.venue}</span>
              <span className="text-foreground">{t.market}</span>
              <span className="tabular-nums text-muted-foreground">
                {t.price.toFixed(2)}
              </span>
              <span
                className={
                  "tabular-nums " +
                  (t.delta >= 0 ? "text-signal-green" : "text-signal-red")
                }
              >
                {t.delta >= 0 ? "▲" : "▼"}
                {Math.abs(t.delta).toFixed(2)}
              </span>
              <span className="text-border">│</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
