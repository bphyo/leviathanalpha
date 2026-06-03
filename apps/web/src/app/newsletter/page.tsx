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

const LATEST_POST = {
  n: "#001",
  date: "May 17, 2026",
  title: "Whales loaded the Fed cut. Did you?",
  blurb:
    "Three top-100 Polymarket wallets quietly built positions hours before the September FOMC. We break down the entries, the exits, and the spread Kalshi left on the table.",
  slug: "whales-loaded-the-fed-cut",
  image: "/issues/whales-loaded-the-fed-cut/cover.jpg",
};

const PAST_ISSUES = [
  {
    n: "#005",
    date: "Jun 14, 2026",
    title: "The catalyst calendar nobody's pricing in",
    blurb:
      "Three macro prints next week the prediction markets are still mispricing — and the wallets quietly positioning ahead of each one.",
    slug: "catalyst-calendar-nobody-is-pricing-in",
    image: "/issues/catalyst-calendar-nobody-is-pricing-in/cover.jpg",
  },
  {
    n: "#004",
    date: "Jun 7, 2026",
    title: "Resolution risk on the election market everyone's holding",
    blurb:
      "The phrasing is ambiguous, the resolution source is contested, and the smart money is exiting. Here's what they're seeing.",
    slug: "resolution-risk-election-market",
    image: "/issues/resolution-risk-election-market/cover.jpg",
  },
  {
    n: "#003",
    date: "May 31, 2026",
    title: "The Kalshi/Polymarket arb that nobody's talking about",
    blurb:
      "Same election market, 4-cent spread, persistent for 36 hours. We map the flow.",
    slug: "kalshi-polymarket-arb-nobody-talking",
    image: "/issues/kalshi-polymarket-arb-nobody-talking/cover.jpg",
  },
  {
    n: "#002",
    date: "May 24, 2026",
    title: "Five wallets quietly fading the recession trade",
    blurb:
      "PnL leaderboard top-10 has been short the recession-by-2026 market for two weeks.",
    slug: "wallets-fading-recession-trade",
    image: "/issues/wallets-fading-recession-trade/cover.jpg",
  },
  {
    n: "#001",
    date: "May 17, 2026",
    title: "Whales loaded the Fed cut. Did you?",
    blurb:
      "Three top-100 Polymarket wallets built positions hours before the September FOMC.",
    slug: "whales-loaded-the-fed-cut",
    image: "/issues/whales-loaded-the-fed-cut/cover.jpg",
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
            <NewsletterSubscribe label="Subscribe" />
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
            <div className="mb-8 max-w-2xl sm:mb-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
                / latest post
              </p>
            </div>

            <a
              href={`/archive/${LATEST_POST.slug}`}
              className="group grid gap-6 overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-signal-green/40 sm:grid-cols-[1.1fr_1fr] sm:gap-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted/40 sm:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LATEST_POST.image}
                  alt={LATEST_POST.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center gap-3 p-5 sm:gap-4 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                  {LATEST_POST.date}
                </p>
                <h3 className="text-balance text-2xl font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-signal-green sm:text-2xl md:text-3xl">
                  {LATEST_POST.title}
                </h3>
                <p className="text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {LATEST_POST.blurb}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-green transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 sm:text-xs">
                  Read the issue
                  <span aria-hidden>→</span>
                </p>
              </div>
            </a>
          </div>
        </section>
      </RevealOnScroll>

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
                Recent posts
              </h2>
            </div>

            {(() => {
              const FREE_COUNT = 2;
              const freePosts = PAST_ISSUES.slice(0, FREE_COUNT);
              const lockedPosts = PAST_ISSUES.slice(FREE_COUNT);

              const renderRow = (issue: (typeof PAST_ISSUES)[number], locked = false) => (
                <a
                  href={locked ? "/signup" : `/archive/${issue.slug}`}
                  className="group relative -mx-3 flex cursor-pointer flex-row items-start gap-3.5 rounded-md px-3 py-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-signal-green/[0.04] sm:-mx-4 sm:items-center sm:gap-6 sm:px-4 sm:py-6"
                  aria-disabled={locked || undefined}
                  tabIndex={locked ? -1 : undefined}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-2 left-0 w-[2px] origin-center scale-y-0 rounded-full bg-signal-green transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 sm:inset-y-3"
                  />

                  {/* Thumbnail — 4:3 ratio, smaller on mobile to keep list feel */}
                  <div className="relative aspect-[4/3] w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted/40 sm:w-32 md:w-40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={issue.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Title + blurb */}
                  <div className="min-w-0 flex-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:mb-1.5 sm:text-[11px] sm:tracking-[0.18em]">
                      {issue.date}
                    </p>
                    <h3 className="flex items-baseline gap-2 text-[15px] font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-signal-green sm:text-lg">
                      <span>{issue.title}</span>
                      <span
                        aria-hidden
                        className="hidden -translate-x-2 text-signal-green opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 sm:inline-block"
                      >
                        →
                      </span>
                    </h3>
                    <p className="mt-1 line-clamp-2 max-w-2xl text-[13px] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:mt-1.5 sm:line-clamp-none sm:text-sm">
                      {issue.blurb}
                    </p>
                  </div>
                </a>
              );

              return (
                <>
                  {/* Free posts — first 2, fully accessible */}
                  <ul className="divide-y divide-border/60 border-y border-border/60">
                    {freePosts.map((issue) => (
                      <li key={issue.n}>{renderRow(issue, false)}</li>
                    ))}
                  </ul>

                  {/* Locked posts — remaining, blurred behind sign-up CTA */}
                  {lockedPosts.length > 0 && (
                    <div className="relative">
                      <ul
                        aria-hidden
                        className="divide-y divide-border/60 border-b border-border/60 select-none"
                        style={{ filter: "blur(5px)" }}
                      >
                        {lockedPosts.map((issue) => (
                          <li key={issue.n} className="pointer-events-none">
                            {renderRow(issue, true)}
                          </li>
                        ))}
                      </ul>

                      {/* Fade gradient overlay */}
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-40"
                        style={{
                          background:
                            "linear-gradient(to bottom, hsl(var(--background) / 0.8), hsl(var(--background) / 0.3))",
                        }}
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40"
                        style={{
                          background:
                            "linear-gradient(to top, hsl(var(--background)), hsl(var(--background) / 0.3))",
                        }}
                        aria-hidden
                      />

                      {/* Centered CTA */}
                      <div className="absolute inset-0 flex items-center justify-center px-4">
                        <div className="flex max-w-sm flex-col items-center gap-4 rounded-lg border border-signal-green/30 bg-background/95 p-6 text-center shadow-[0_0_60px_-12px] shadow-signal-green/30 backdrop-blur-sm sm:gap-5 sm:p-8">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-signal-green/30 bg-signal-green/[0.06] text-signal-green">
                            <LockIcon />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
                              The full archive
                            </p>
                            <h3 className="text-balance text-lg font-semibold tracking-tight sm:text-xl">
                              Subscribe to read every issue.
                            </h3>
                            <p className="text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm">
                              Free forever. The full archive plus a new issue every Sunday.
                            </p>
                          </div>
                          <a
                            href="/signup"
                            className="inline-flex items-center gap-1.5 rounded-md bg-signal-green px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-black shadow-[0_0_32px_-6px] shadow-signal-green/50 transition-colors hover:bg-signal-green/90 sm:text-sm"
                          >
                            Subscribe
                            <span aria-hidden>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
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
              Drop your email. We&apos;ll send a confirmation, then The Leviathan every week.
            </p>
            <div className="mx-auto mt-6 w-full max-w-md sm:mt-8">
              <NewsletterSubscribe label="Subscribe" />
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
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{ contain: "paint" }}
    >
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

      <div
        className="absolute left-[15%] top-[10%] h-[50vh] w-[50vh] animate-drift-slower rounded-full bg-signal-green/[0.08] blur-[80px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute right-[10%] bottom-[10%] h-[44vh] w-[44vh] animate-drift-slow rounded-full bg-signal-amber/[0.06] blur-[80px]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}
