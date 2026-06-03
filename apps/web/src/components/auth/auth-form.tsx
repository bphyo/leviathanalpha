"use client";

import { useState } from "react";
import { Button } from "@leviathan/ui/button";
import { Input } from "@leviathan/ui/input";

type Mode = "signup" | "login";

type Props = {
  mode: Mode;
  initialEmail?: string;
};

export function AuthForm({ mode, initialEmail = "" }: Props) {
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "notice">("idle");
  const [notice, setNotice] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setNotice("");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("notice");
    setNotice(
      mode === "signup"
        ? "You're in. Check your inbox to confirm your email."
        : "Signed in. Redirecting to your dashboard…"
    );
  }

  async function onGoogle() {
    setStatus("loading");
    setNotice("");
    await new Promise((r) => setTimeout(r, 500));
    setStatus("notice");
    setNotice(
      mode === "signup"
        ? "Account created with Google. Welcome to Leviathan Alpha."
        : "Signed in with Google. Redirecting to your dashboard…"
    );
  }

  const submitLabel =
    mode === "signup"
      ? status === "loading"
        ? "Creating account…"
        : "Create account"
      : status === "loading"
        ? "Signing in…"
        : "Sign in";

  return (
    <div className="flex flex-col gap-4">
      {/* Email/password form */}
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        {mode === "signup" && (
          <Field label="Name">
            <Input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === "loading"}
              className="h-11"
              autoComplete="name"
            />
          </Field>
        )}

        <Field label="Email">
          <Input
            type="email"
            required
            placeholder="you@somewhere.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="h-11"
            autoComplete="email"
          />
        </Field>

        <Field
          label="Password"
          rightSlot={
            mode === "login" ? (
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground underline-offset-4 transition-colors hover:text-signal-green hover:underline"
              >
                Forgot?
              </a>
            ) : null
          }
        >
          <Input
            type="password"
            required
            placeholder={mode === "signup" ? "At least 8 characters" : "Your password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={status === "loading"}
            className="h-11"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            minLength={mode === "signup" ? 8 : undefined}
          />
        </Field>

        <Button
          type="submit"
          variant="signal"
          size="lg"
          disabled={status === "loading"}
          className="mt-2 w-full"
        >
          {submitLabel}
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          or
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Google SSO */}
      <button
        type="button"
        onClick={onGoogle}
        disabled={status === "loading"}
        className="group inline-flex h-11 items-center justify-center gap-3 rounded-md border border-border bg-muted/40 px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-muted/60 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <GoogleIcon />
        <span>{mode === "signup" ? "Sign up with Google" : "Sign in with Google"}</span>
      </button>

      {/* Notice display after submit */}
      {status === "notice" && notice && (
        <div className="rounded-md border border-signal-green/30 bg-signal-green/[0.05] p-4 text-left">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal-green">
            ✓ Noted
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{notice}</p>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  rightSlot,
  children,
}: {
  label: string;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        {rightSlot}
      </div>
      {children}
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 flex-shrink-0"
    >
      <path
        fill="#EA4335"
        d="M12 10.2v3.92h5.45c-.24 1.41-1.66 4.13-5.45 4.13-3.28 0-5.95-2.72-5.95-6.07s2.67-6.07 5.95-6.07c1.86 0 3.11.79 3.83 1.47l2.6-2.5C16.93 3.58 14.7 2.7 12 2.7 6.85 2.7 2.7 6.85 2.7 12s4.15 9.3 9.3 9.3c5.37 0 8.93-3.77 8.93-9.08 0-.61-.07-1.08-.15-1.55H12z"
      />
      <path
        fill="#4285F4"
        d="M12 10.2v3.92h5.45c-.24 1.41-1.66 4.13-5.45 4.13v3.05c5.37 0 8.93-3.77 8.93-9.08 0-.61-.07-1.08-.15-1.55H12z"
      />
      <path
        fill="#FBBC05"
        d="M6.05 12c0-.62.1-1.21.27-1.77L3.16 7.85A9.27 9.27 0 002.7 12c0 1.5.36 2.92.99 4.18l3.16-2.4A6.05 6.05 0 016.05 12z"
      />
      <path
        fill="#34A853"
        d="M12 21.3c2.7 0 4.93-.89 6.57-2.42l-3.12-2.42c-.86.58-2.01.99-3.45.99-2.64 0-4.88-1.78-5.68-4.18l-3.16 2.4c1.56 3.1 4.76 5.23 8.84 5.63z"
      />
    </svg>
  );
}
