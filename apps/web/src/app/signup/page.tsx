import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Sign up · Leviathan Alpha",
  description:
    "Create your Leviathan Alpha account. The Leviathan every Sunday, free. Dashboard access as we onboard.",
};

type SearchParams = Promise<{ email?: string }>;

const PERKS = [
  {
    title: "The Leviathan newsletter",
    body: "Every Sunday morning: whale moves, cross-venue spreads, and the catalysts on next week's tape. Free, no fluff.",
  },
  {
    title: "Instant dashboard access",
    body: "Unified market view across Polymarket, Kalshi, PredictIt and 9 more. Live arb scanner. Free, no waitlist.",
  },
  {
    title: "Whale-watch alerts",
    body: "Follow specific wallets across venues. Get pinged the moment a top wallet moves size — before the market reprices.",
  },
  {
    title: "Catalyst calendar",
    body: "Next week's tape — Fed prints, court rulings, sports finals, earnings — mapped to the markets each one moves.",
  },
  {
    title: "EV scoring on every market",
    body: "Expected value scored from implied probability, on-chain flow, historical hit rates, and resolution context.",
  },
];

export default async function SignupPage({ searchParams }: { searchParams: SearchParams }) {
  const { email } = await searchParams;

  return (
    <main className="min-h-screen">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-3 sm:px-6">
        <Link
          href="/"
          aria-label="Back to home"
          className="group flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted/40 hover:text-signal-green"
        >
          <span
            aria-hidden
            className="inline-block text-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1"
          >
            ←
          </span>
        </Link>
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-mono text-base leading-none sm:gap-2.5 sm:text-xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Leviathan Alpha"
            className="h-[1.4em] w-[1.4em] flex-shrink-0 translate-y-[1px] sm:translate-y-0"
          />
          <span className="translate-y-[1px] truncate font-semibold leading-none tracking-tight">
            LEVIATHAN ALPHA
          </span>
        </Link>
      </div>

      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-16 pt-6 sm:gap-12 sm:px-6 sm:pb-32 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Left: signup form — vertically centered on mobile */}
          <div className="flex min-h-[calc(100vh-12rem)] flex-col justify-center text-center lg:min-h-0 lg:text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
              / sign up
            </p>
            <h1
              className="mt-3 text-balance font-serif font-semibold leading-[1.1] tracking-[-0.01em] sm:mt-4 sm:leading-[1.06]"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
                Read the tape before the market does.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-balance font-serif italic text-muted-foreground sm:mt-6 sm:text-lg">
              One account. The Leviathan every Sunday. Instant dashboard access.
            </p>

            <div className="mx-auto mt-7 w-full max-w-md sm:mt-10 lg:mx-0">
              <AuthForm mode="signup" initialEmail={email ?? ""} />
            </div>

            <p className="mt-5 font-mono text-[11px] text-muted-foreground sm:text-xs">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-foreground underline-offset-2 transition-colors hover:text-signal-green hover:underline"
              >
                Sign in &rarr;
              </Link>
            </p>
          </div>

          {/* Right: what you get */}
          <div className="flex flex-col lg:border-l lg:border-border/60 lg:pl-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
              / what you get
            </p>
            <ul className="mt-5 flex flex-col gap-5 sm:mt-8 sm:gap-8">
              {PERKS.map((perk, i) => (
                <li key={perk.title} className="flex gap-3.5 sm:gap-4">
                  <span className="flex-shrink-0 font-mono text-xs text-signal-green sm:text-sm">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[15px] font-semibold tracking-tight sm:text-lg">
                      {perk.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground sm:text-base">
                      {perk.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-border/60 pt-5 font-mono text-[11px] leading-relaxed text-muted-foreground sm:mt-10 sm:pt-6 sm:text-xs">
              Used by traders at Polymarket, Kalshi, and a few funds we&apos;re not allowed to name.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
