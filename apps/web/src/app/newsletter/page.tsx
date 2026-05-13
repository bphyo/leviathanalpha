import type { Metadata } from "next";
import { Anchor } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterSubscribe } from "@/components/newsletter-subscribe";
import { CardTexture } from "@/components/card-texture";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "The Leviathan — Weekly briefing on prediction markets · Leviathan Alpha",
  description:
    "Every Sunday: the biggest whale moves, cross-venue spreads, and catalysts on next week's tape. Free.",
};

const PAST_ISSUES = [
  {
    n: "#003",
    date: "Coming soon",
    title: "The Kalshi/Polymarket arb that nobody's talking about",
    blurb:
      "Same election market, 4-cent spread, persistent for 36 hours. We map the flow.",
  },
  {
    n: "#002",
    date: "Coming soon",
    title: "Five wallets quietly fading the recession trade",
    blurb:
      "PnL leaderboard top-10 has been short the recession-by-2026 market for two weeks.",
  },
  {
    n: "#001",
    date: "Inaugural issue",
    title: "Whales loaded the Fed cut. Did you?",
    blurb:
      "Three top-100 Polymarket wallets built positions hours before the September FOMC.",
  },
];

const SECTIONS = [
  {
    tag: "01",
    title: "Whale Board",
    body: "The week's biggest wallet moves on Polymarket and Kalshi — entries, exits, and conviction.",
    meta: "top wallets · weekly",
  },
  {
    tag: "02",
    title: "Spread Watch",
    body: "Cross-venue mispricings worth a look. Same event, different price, different size.",
    meta: "live spread scanner",
  },
  {
    tag: "03",
    title: "Catalyst Calendar",
    body: "What's on the tape next week — Fed prints, court rulings, sports finals, earnings.",
    meta: "weekly · pre-event",
  },
  {
    tag: "04",
    title: "Resolution Risk",
    body: "The fine print that decides the payout. Every Sunday: which markets have shaky resolution sources, ambiguous wording, or contested settlement risk.",
    meta: "fragility scoring",
  },
];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <PageBackground />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 sm:h-48"
          aria-hidden
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--background)) 90%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-14 pt-10 text-center sm:px-6 sm:pb-24 sm:pt-28">
          <div className="mb-5 flex justify-center sm:mb-7">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-signal-green/30 bg-signal-green/[0.06] text-signal-green shadow-[0_0_40px_-8px] shadow-signal-green/40 sm:h-16 sm:w-16">
              <Anchor className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />
            </span>
          </div>
          <h1
            className="font-serif font-medium italic leading-[1.02] tracking-tight text-foreground"
            style={{ fontSize: "clamp(3rem, 11vw, 7.5rem)" }}
          >
            The Leviathan
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-foreground sm:mt-6 sm:text-lg">
            A weekly read on what the smart money is pricing. One tight briefing on
            the biggest whale moves of the week, the cross-venue spreads worth
            watching, and the catalysts on next week&apos;s tape.
          </p>

          <div className="mx-auto mt-8 w-full max-w-md sm:mt-10">
            <p className="mb-3 text-balance font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[13px] sm:tracking-[0.2em]">
              Drop your email · New issue every Sunday
            </p>
            <NewsletterSubscribe />
          </div>

          <p className="mt-5 font-mono text-[13px] text-muted-foreground sm:mt-6 sm:text-sm">
            Read by traders at Polymarket, Kalshi, and a few funds we&apos;re not
            allowed to name.
          </p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="border-b border-border/60 py-12 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 max-w-2xl sm:mb-14">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
                / what&apos;s inside
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
                Four sections. Ten minutes. Everything that matters.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {SECTIONS.map((s) => (
                <div
                  key={s.tag}
                  className="group relative flex flex-col gap-2.5 overflow-hidden bg-background p-5 transition-colors hover:bg-muted/30 sm:gap-3 sm:p-7"
                >
                  <CardTexture />
                  <span className="relative font-mono text-xs text-muted-foreground">{s.tag}</span>
                  <h3 className="relative text-base font-semibold tracking-tight sm:text-lg">{s.title}</h3>
                  <p className="relative text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="border-b border-border/60 py-12 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-7 max-w-2xl sm:mb-12">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
                / archive
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
                Recent issues
              </h2>
            </div>

            <ul className="divide-y divide-border/60 border-y border-border/60">
              {PAST_ISSUES.map((issue) => (
                <li
                  key={issue.n}
                  className="group relative -mx-3 flex cursor-pointer flex-col gap-2 rounded-md px-3 py-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-signal-green/[0.04] sm:-mx-4 sm:flex-row sm:items-baseline sm:gap-8 sm:px-4 sm:py-6"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-1/2 hidden h-8 w-[2px] -translate-y-1/2 origin-center scale-y-0 rounded-full bg-signal-green transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 sm:block"
                  />
                  <div className="flex flex-shrink-0 items-baseline gap-3 font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:w-48">
                    <span className="text-foreground">{issue.n}</span>
                    <span>{issue.date}</span>
                  </div>
                  <div className="min-w-0 flex-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    <h3 className="flex items-baseline gap-2 text-base font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-signal-green sm:text-lg">
                      <span>{issue.title}</span>
                      <span
                        aria-hidden
                        className="inline-block -translate-x-2 text-signal-green opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {issue.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="relative overflow-hidden py-14 sm:py-24">
          <div className="absolute inset-0 grid-bg radial-fade opacity-25" aria-hidden />
          <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-4xl">
              Get the first issue this Sunday.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
              Drop your email. We&apos;ll send a confirmation, then The Oracle every week.
            </p>
            <div className="mx-auto mt-6 w-full max-w-md sm:mt-8">
              <NewsletterSubscribe />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <SiteFooter />
    </main>
  );
}

function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-bg radial-fade opacity-25" />

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

      <div className="absolute left-[15%] top-[10%] h-[50vh] w-[50vh] animate-drift-slower rounded-full bg-signal-green/[0.07] blur-[120px]" />
      <div className="absolute right-[10%] bottom-[10%] h-[44vh] w-[44vh] animate-drift-slow rounded-full bg-signal-amber/[0.05] blur-[110px]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="newsletter-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#newsletter-noise)" />
      </svg>
    </div>
  );
}
