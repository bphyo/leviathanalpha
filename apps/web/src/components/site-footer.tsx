export function SiteFooter() {
  return (
    <footer className="py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
        <div className="flex flex-shrink-0 items-center gap-1.5 font-mono text-sm leading-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Leviathan Alpha"
            className="h-[1.4em] w-[1.4em] flex-shrink-0"
          />
          <span className="font-semibold leading-none tracking-tight">LEVIATHAN ALPHA</span>
        </div>
        <p className="font-mono text-[11px] leading-relaxed text-muted-foreground sm:whitespace-nowrap sm:text-center sm:text-xs">
          For informational purposes only. Not investment advice. Leviathan Alpha does not execute trades or hold customer funds.
        </p>
        <p className="flex-shrink-0 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
