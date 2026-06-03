import { WaitlistForm } from "./waitlist-form";
import { SectionAmbient, SectionFadeBottom } from "./section-ambient";

export function CTA() {
  return (
    <section
      id="waitlist"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-32"
    >
      <SectionAmbient noiseId="cta-noise" />
      <SectionFadeBottom />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
          / sign up
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          Read the tape before the market does.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
          One account. The Leviathan every Sunday, free. Dashboard access as we onboard.
          Whale moves, cross-venue spreads, catalysts on next week&apos;s tape.
        </p>
        <div className="mx-auto mt-6 w-full max-w-md sm:mt-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
