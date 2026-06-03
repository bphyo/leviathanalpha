import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterSubscribe } from "@/components/newsletter-subscribe";
import { CardTexture } from "@/components/card-texture";

// In v2 this comes from MDX files in /content/issues/. For now: hardcoded sample
// so we have a concrete template to design against.
const ISSUES = [
  {
    slug: "whales-loaded-the-fed-cut",
    n: "#001",
    date: "May 17, 2026",
    title: "Whales loaded the Fed cut. Did you?",
    blurb:
      "Three top-100 Polymarket wallets quietly built positions hours before the September FOMC. We break down the entries, the exits, and the spread Kalshi left on the table.",
    image: "/issues/whales-loaded-the-fed-cut/cover.jpg",
    readingTime: "5 min read",
  },
  {
    slug: "wallets-fading-recession-trade",
    n: "#002",
    date: "May 24, 2026",
    title: "Five wallets quietly fading the recession trade",
    blurb:
      "PnL leaderboard top-10 has been short the recession-by-2026 market for two weeks.",
    image: "/issues/wallets-fading-recession-trade/cover.jpg",
    readingTime: "6 min read",
  },
  {
    slug: "kalshi-polymarket-arb-nobody-talking",
    n: "#003",
    date: "May 31, 2026",
    title: "The Kalshi/Polymarket arb that nobody's talking about",
    blurb:
      "Same election market, 4-cent spread, persistent for 36 hours. We map the flow.",
    image: "/issues/kalshi-polymarket-arb-nobody-talking/cover.jpg",
    readingTime: "7 min read",
  },
  {
    slug: "resolution-risk-election-market",
    n: "#004",
    date: "Jun 7, 2026",
    title: "Resolution risk on the election market everyone's holding",
    blurb:
      "The phrasing is ambiguous, the resolution source is contested, and the smart money is exiting. Here's what they're seeing.",
    image: "/issues/resolution-risk-election-market/cover.jpg",
    readingTime: "8 min read",
  },
  {
    slug: "catalyst-calendar-nobody-is-pricing-in",
    n: "#005",
    date: "Jun 14, 2026",
    title: "The catalyst calendar nobody's pricing in",
    blurb:
      "Three macro prints next week the prediction markets are still mispricing — and the wallets quietly positioning ahead of each one.",
    image: "/issues/catalyst-calendar-nobody-is-pricing-in/cover.jpg",
    readingTime: "6 min read",
  },
];

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return ISSUES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const issue = ISSUES.find((i) => i.slug === slug);
  if (!issue) return { title: "Not found · The Leviathan" };
  return {
    title: `${issue.title} · The Leviathan`,
    description: issue.blurb,
    openGraph: {
      title: issue.title,
      description: issue.blurb,
      type: "article",
      publishedTime: issue.date,
    },
  };
}

export default async function IssuePage({ params }: { params: Params }) {
  const { slug } = await params;
  const issue = ISSUES.find((i) => i.slug === slug);
  if (!issue) notFound();

  const related = ISSUES.filter((i) => i.slug !== issue.slug).slice(0, 3);

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <article className="relative">
        {/* Top nav: back to newsletter */}
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 sm:pt-12">
          <Link
            href="/newsletter"
            aria-label="Back to The Leviathan"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted/40 hover:text-signal-green"
          >
            <span
              aria-hidden
              className="inline-block text-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1"
            >
              ←
            </span>
          </Link>
        </div>

        {/* Article header */}
        <header className="mx-auto max-w-4xl px-4 pt-8 text-center sm:px-6 sm:pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
            / the leviathan · {issue.n}
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:mt-5 sm:text-5xl">
            {issue.title}
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3 font-mono text-xs text-muted-foreground sm:mt-6 sm:text-sm">
            <span>{issue.date}</span>
            <span aria-hidden>·</span>
            <span>{issue.readingTime}</span>
          </div>
        </header>

        {/* Cover image */}
        <div className="mx-auto mt-8 max-w-3xl px-4 sm:mt-12 sm:px-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted/40 sm:aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={issue.image}
              alt={issue.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
          <Prose>
            <p className="lead">
              At 11:42 AM ET last Wednesday, an anonymous wallet on Polymarket
              dropped <strong>$340,000 YES</strong> on &ldquo;Fed cuts by July.&rdquo;
              Four minutes later, the market repriced from 0.64 to 0.67.
            </p>

            <p>
              Three hours later, a second wallet — different address, same pattern —
              took $180k of the same position. By Thursday morning, a third whale
              had quietly built $220k of exposure. None of these wallets had
              traded the Fed market in 2026 before.
            </p>

            <p>
              On Friday at 2:00 PM ET, the FOMC announced a 25bps cut.
            </p>

            <p>
              The market reprised to 1.00. The three wallets collectively walked
              away with roughly <strong>$190k of profit</strong> across the three
              positions. The mainstream financial press spent the next 72 hours
              debating whether the cut was the right call. The wallets had
              already moved on to the next thing.
            </p>

            <h2>Why this pattern matters</h2>

            <p>
              The Fed cut wasn&apos;t a surprise to anyone with a Bloomberg
              terminal. SOFR futures had been pricing 80%+ probability for days.
              What was a surprise: <em>who got there first on Polymarket,
              and what they did next</em>.
            </p>

            <p>
              Wallet <code>0xABC&hellip;7f3</code> — the leader of this trio —
              has now positioned ahead of three of the last four FOMC meetings.
              Hit rate on macro markets over trailing 90 days:{" "}
              <strong className="text-signal-green">73%</strong>. Average
              position size: $180k. This isn&apos;t retail.
            </p>

            <h2>The Kalshi spread nobody mentioned</h2>

            <p>
              Here&apos;s the part you won&apos;t see anywhere else. While
              Polymarket repriced from 0.64 to 0.67, Kalshi&apos;s equivalent
              market sat at 0.59 for nearly four hours.
            </p>

            <p>
              That&apos;s an <strong>8-point spread</strong> on a binary outcome
              with hours until resolution. A trader with positions on both
              venues could have locked in approximately{" "}
              <strong>2.8% risk-free</strong> by buying NO on Kalshi and YES
              on Polymarket. Nobody did.
            </p>

            <Callout>
              <p>
                <strong>Why arbs persist on prediction markets:</strong> different
                user bases, different liquidity, and most retail traders only
                watch one venue. The smart money trades across venues.
                Everyone else doesn&apos;t even know the spreads exist.
              </p>
            </Callout>

            <h2>What we&apos;re watching next week</h2>

            <p>
              Three markets to keep on the radar going into next week&apos;s tape:
            </p>

            <ul>
              <li>
                <strong>BoJ April rate hike</strong> — Kalshi YES at 2¢,
                Polymarket NO at 91¢. Persistent 89-point spread. Resolution
                Friday.
              </li>
              <li>
                <strong>Recession by Q2 2026</strong> — top-10 Polymarket
                wallets have been net short for two weeks. Worth knowing.
              </li>
              <li>
                <strong>Trump indicted in 2026</strong> — three top-100 wallets
                flipped positions in the last 24 hours. Market repriced 18%
                lower than last week.
              </li>
            </ul>

            <p>
              We&apos;ll cover the BoJ spread in depth next Sunday. If it
              closes before then, even better — we&apos;ll write the post-mortem.
            </p>

            <hr />

            <p className="text-sm text-muted-foreground">
              <em>
                The Leviathan ships every Sunday morning. Whale moves,
                cross-venue spreads, and the catalysts on next week&apos;s tape.
                Free, no fluff, no shilling. Forward this to a friend who trades.
              </em>
            </p>
          </Prose>
        </div>

        {/* Subscribe CTA */}
        <section className="relative overflow-hidden border-t border-border/60 py-14 sm:py-20">
          <div className="absolute inset-0 grid-bg radial-fade opacity-25" aria-hidden />
          <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
              / subscribe
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              Get The Leviathan every Sunday.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
              Free. One issue a week. Whale moves, cross-venue spreads, and
              the catalysts on next week&apos;s tape.
            </p>
            <div className="mx-auto mt-6 w-full max-w-md sm:mt-8">
              <NewsletterSubscribe />
            </div>
          </div>
        </section>

        {/* More from The Leviathan */}
        <section className="border-t border-border/60 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 flex items-end justify-between gap-3 sm:mb-10 sm:gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
                  / more from the leviathan
                </p>
                <h2 className="mt-2 text-balance text-xl font-semibold tracking-tight sm:mt-3 sm:text-3xl">
                  Recent posts
                </h2>
              </div>
              <Link
                href="/newsletter"
                className="group inline-block flex-shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green underline-offset-[6px] transition-all duration-200 hover:underline sm:text-xs"
              >
                View all<span aria-hidden className="ml-1.5 inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/archive/${r.slug}`}
                  className="group relative flex flex-col overflow-hidden bg-background transition-colors hover:bg-muted/30"
                >
                  <CardTexture />
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col gap-2 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {r.date}
                    </p>
                    <h3 className="text-base font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-signal-green sm:text-lg">
                      {r.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {r.blurb}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}

/* ----------------------------- prose styling ----------------------------- */

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        font-serif text-foreground/90
        [&_p]:my-5 [&_p]:text-[17px] [&_p]:leading-[1.7] sm:[&_p]:text-lg
        [&_p.lead]:text-xl [&_p.lead]:leading-[1.55] [&_p.lead]:text-foreground sm:[&_p.lead]:text-[22px]
        [&_h2]:font-sans [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground sm:[&_h2]:mt-14 sm:[&_h2]:text-3xl
        [&_h3]:font-sans [&_h3]:mt-10 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-foreground
        [&_strong]:text-foreground [&_strong]:font-semibold
        [&_em]:italic
        [&_code]:font-mono [&_code]:text-[0.92em] [&_code]:rounded [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-foreground
        [&_a]:text-signal-green [&_a]:underline-offset-2 [&_a]:underline hover:[&_a]:no-underline
        [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-[17px] [&_ul]:leading-[1.7] sm:[&_ul]:text-lg
        [&_li]:my-2
        [&_hr]:my-12 [&_hr]:border-border/60
        [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-signal-green [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-foreground
      "
    >
      {children}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-lg border border-signal-green/30 bg-signal-green/[0.04] p-5 sm:p-6">
      <div
        className="
          font-sans text-foreground
          [&_p]:my-0 [&_p]:text-[15px] [&_p]:leading-[1.6] sm:[&_p]:text-base
          [&_strong]:text-signal-green
        "
      >
        {children}
      </div>
    </div>
  );
}
