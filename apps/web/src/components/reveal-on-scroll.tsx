"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the reveal animation starts after intersecting. */
  delay?: number;
  /** Distance to translate from on the way in (e.g. "translate-y-6"). */
  fromClass?: string;
  /** Custom duration class (e.g. "duration-700"). */
  durationClass?: string;
};

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  fromClass = "translate-y-6",
  durationClass = "duration-700",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    // Already in viewport on mount — show immediately, skip the animation entry.
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportH * 0.9 && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={
        "transition-all ease-[cubic-bezier(0.22,1,0.36,1)] " +
        durationClass +
        " " +
        (visible ? "translate-y-0 opacity-100" : `${fromClass} opacity-0`) +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}
