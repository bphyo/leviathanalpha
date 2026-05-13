"use client";

import { useEffect, useState } from "react";
import { Button } from "@leviathan/ui/button";
import { Input } from "@leviathan/ui/input";

type Status = "idle" | "loading" | "success" | "error";

const NEWSLETTER_ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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

    if (!NEWSLETTER_ENDPOINT) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setMessage("Subscribed. The Leviathan drops every Sunday.");
      setEmail("");
      return;
    }

    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "newsletter" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Subscribed. The Leviathan drops every Sunday.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-signal-green/40 bg-signal-green/5 p-4 text-left">
        <p className="font-mono text-sm text-signal-green">✓ Subscribed</p>
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
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>
      {status === "error" && (
        <p className="font-mono text-xs text-signal-red">{message}</p>
      )}
    </form>
  );
}
