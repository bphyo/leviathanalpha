"use client";

import { useEffect, useState } from "react";
import { Button } from "@leviathan/ui/button";
import { Input } from "@leviathan/ui/input";

type Status = "idle" | "loading" | "success" | "error";

// TODO: swap this for your Jotform / Tally / Formspree endpoint.
// For now the form fakes a submission locally so the design works end-to-end.
const WAITLIST_ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<string>("trader");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (status !== "success") return;
    const id = setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
    return () => clearTimeout(id);
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!WAITLIST_ENDPOINT) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setMessage("You're on the list. We'll reach out.");
      setEmail("");
      return;
    }

    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, userType, referrer: document.referrer || null }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("You're on the list. We'll reach out.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-signal-green/40 bg-signal-green/5 p-4 text-left">
        <p className="font-mono text-sm text-signal-green">✓ Confirmed</p>
        <p className="mt-1 text-sm text-muted-foreground">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          required
          placeholder="you@somewhere.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="h-12 text-base sm:flex-1"
          aria-label="Email address"
        />
        <Button
          type="submit"
          variant="signal"
          size="lg"
          disabled={status === "loading" || !email}
          className="sm:w-auto"
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 text-sm">
        <span className="mr-1 font-mono text-muted-foreground">I&apos;m a</span>
        {(["trader", "researcher", "builder"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setUserType(t)}
            className={
              "rounded-full border px-2.5 py-0.5 font-mono text-xs transition-colors " +
              (userType === t
                ? "border-signal-green/60 bg-signal-green/10 text-signal-green"
                : "border-border text-muted-foreground hover:text-foreground")
            }
          >
            {t}
          </button>
        ))}
      </div>

      {status === "error" && (
        <p className="font-mono text-xs text-signal-red">{message}</p>
      )}
    </form>
  );
}
