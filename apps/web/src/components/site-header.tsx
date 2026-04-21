import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-1.5 font-mono text-sm leading-none sm:gap-2 sm:text-lg"
        >
          <Image
            src="/logo.png"
            alt="Leviathan Alpha"
            width={32}
            height={32}
            priority
            className="h-[1.4em] w-[1.4em] flex-shrink-0 -translate-y-[0.5px] sm:translate-y-0"
          />
          <span className="truncate font-semibold leading-none tracking-tight">LEVIATHAN ALPHA</span>
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Signals</a>
          <a href="#venues" className="transition-colors hover:text-foreground">Venues</a>
          <a href="#preview" className="transition-colors hover:text-foreground">Preview</a>
          <a href="#waitlist" className="transition-colors hover:text-foreground">Waitlist</a>
        </nav>
        <a
          href="#waitlist"
          className="flex-shrink-0 whitespace-nowrap rounded-md bg-signal-green px-3 py-1.5 text-[11px] font-medium text-black shadow-[0_0_24px_-4px] shadow-signal-green/40 transition-colors hover:bg-signal-green/90 sm:px-3.5 sm:text-xs"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
