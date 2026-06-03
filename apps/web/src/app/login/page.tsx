import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Login · Leviathan Alpha",
  description: "Sign in to your Leviathan Alpha account.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-3 sm:px-6">
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
      </div>

      <section className="relative">
        <div className="mx-auto max-w-md px-4 pb-16 pt-4 sm:px-6 sm:pb-28 sm:pt-2">
          <div className="text-center">
            <Link
              href="/"
              aria-label="Back to home"
              className="mb-5 inline-flex sm:mb-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Leviathan Alpha"
                className="h-11 w-11 sm:h-12 sm:w-12"
              />
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-green sm:text-xs">
              / login
            </p>
            <h1
              className="mt-3 text-balance font-serif font-semibold leading-[1.1] tracking-[-0.01em] sm:mt-4 sm:leading-[1.06]"
              style={{ fontSize: "clamp(1.875rem, 5vw, 3.25rem)" }}
            >
              <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
                Welcome back.
              </span>
            </h1>
            <p className="mt-3 text-balance text-sm font-serif italic leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              Sign in to read The Leviathan, open the dashboard, and pick up where you left off.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <AuthForm mode="login" />
          </div>

          <p className="mt-6 text-center font-mono text-[11px] text-muted-foreground sm:mt-8 sm:text-xs">
            New here?{" "}
            <Link
              href="/signup"
              className="text-foreground underline-offset-2 transition-colors hover:text-signal-green hover:underline"
            >
              Create an account &rarr;
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
