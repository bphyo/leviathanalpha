"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#features", label: "Signals" },
  { href: "/#venues", label: "Venues" },
  { href: "/#preview", label: "Preview" },
  { href: "/newsletter", label: "Newsletter", internal: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-mono text-base leading-none sm:gap-2.5 sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Leviathan Alpha"
            className="h-[1.4em] w-[1.4em] flex-shrink-0"
          />
          <span className="translate-y-[1px] truncate font-semibold leading-none tracking-tight">
            LEVIATHAN ALPHA
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 font-mono text-base text-muted-foreground sm:flex">
          {NAV_LINKS.map((link) =>
            link.internal ? (
              <Link
                key={link.href}
                href={link.href as "/newsletter"}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-2">
          <a
            href="/#waitlist"
            className="whitespace-nowrap rounded-md bg-signal-green px-2.5 py-1.5 text-[11px] font-medium text-black shadow-[0_0_24px_-4px] shadow-signal-green/40 transition-colors hover:bg-signal-green/90 sm:px-3.5 sm:text-sm"
          >
            Join waitlist
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="-mr-1 flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted/60 sm:hidden"
          >
            <MorphIcon open={open} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={
          "fixed inset-x-0 top-16 z-30 origin-top transform-gpu overflow-hidden border-b bg-background/95 backdrop-blur transition-[max-height,opacity,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hidden " +
          (open
            ? "pointer-events-auto max-h-[80vh] border-border/60 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0")
        }
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-3 py-4">
          {NAV_LINKS.map((link, i) => {
            const itemStyle: React.CSSProperties = {
              transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
            };
            const itemClass =
              "rounded-md px-3 py-3 font-mono text-base text-foreground transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted/60 " +
              (open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0");
            return link.internal ? (
              <Link
                key={link.href}
                href={link.href as "/newsletter"}
                onClick={() => setOpen(false)}
                style={itemStyle}
                className={itemClass}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={itemStyle}
                className={itemClass}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function MorphIcon({ open }: { open: boolean }) {
  const baseLine =
    "absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";
  return (
    <span className="relative block h-5 w-5">
      <span
        className={
          baseLine +
          " " +
          (open ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px]")
        }
      />
      <span
        className={
          "absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ease-out " +
          (open ? "opacity-0" : "opacity-100")
        }
      />
      <span
        className={
          baseLine +
          " " +
          (open ? "-translate-y-1/2 -rotate-45" : "translate-y-[5px]")
        }
      />
    </span>
  );
}
