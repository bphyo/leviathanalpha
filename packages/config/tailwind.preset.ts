import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        signal: {
          green: "hsl(var(--signal-green))",
          red: "hsl(var(--signal-red))",
          amber: "hsl(var(--signal-amber))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "ui-serif", "serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fade-in 0.6s ease-out",
        marquee: "marquee 40s linear infinite",
        "drift-slow": "drift 22s ease-in-out infinite",
        "drift-slower": "drift 32s ease-in-out infinite",
        "float-y": "float-y 8s ease-in-out infinite",
        "float-y-slow": "float-y 14s ease-in-out infinite",
        breathe: "breathe 7s ease-in-out infinite",
        "breathe-slow": "breathe 11s ease-in-out infinite",
        "scan-y": "scan-y 9s linear infinite",
        "scan-y-slow": "scan-y 16s linear infinite",
        twinkle: "twinkle 4.5s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.95)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        "scan-y": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%, 90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.4)" },
        },
      },
    },
  },
};

export default preset;
