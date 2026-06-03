"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@leviathan/ui/button";
import { Input } from "@leviathan/ui/input";

export function NewsletterSubscribe({ label = "Sign up" }: { label?: string } = {}) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      router.push("/signup");
      return;
    }
    router.push(`/signup?email=${encodeURIComponent(trimmed)}`);
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
          className="h-12 text-base sm:flex-1"
          aria-label="Email address"
        />
        <Button
          type="submit"
          variant="signal"
          size="lg"
          disabled={!email}
          className="sm:w-auto"
        >
          {label}
        </Button>
      </div>
    </form>
  );
}
