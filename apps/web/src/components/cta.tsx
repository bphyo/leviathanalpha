import { WaitlistForm } from "./waitlist-form";

export function CTA() {
  return (
    <section
      id="waitlist"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/60 py-16 sm:py-32"
    >
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:mb-3 sm:text-xs">
          / early access
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          Get the edge before the market does.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
          We&apos;re onboarding a small group of founding traders, researchers, and builders.
          Join the waitlist — we&apos;ll reach out in waves.
        </p>
        <div className="mx-auto mt-6 w-full max-w-md sm:mt-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
