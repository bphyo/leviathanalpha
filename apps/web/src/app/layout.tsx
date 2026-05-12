import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Leviathan Alpha — Unified intelligence for prediction markets",
  description:
    "Track the whales. Find the arb. Spot the catalyst. Polymarket, Kalshi, and Manifold in one terminal.",
  metadataBase: new URL("https://leviathanalpha.io"),
  openGraph: {
    title: "Leviathan Alpha — Unified intelligence for prediction markets",
    description:
      "Track the whales. Find the arb. Spot the catalyst.",
    url: "https://leviathanalpha.io",
    siteName: "Leviathan Alpha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leviathan Alpha — Unified intelligence for prediction markets",
    description:
      "Track the whales. Find the arb. Spot the catalyst.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
