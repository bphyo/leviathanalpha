import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Leviathan Alpha — The unified intelligence layer for prediction markets",
  description:
    "Track the whales. Find the arb. Spot the catalyst. Polymarket, Kalshi, and Manifold in one terminal.",
  metadataBase: new URL("https://leviathanalpha.io"),
  openGraph: {
    title: "Leviathan Alpha — The unified intelligence layer for prediction markets",
    description:
      "Track the whales. Find the arb. Spot the catalyst.",
    url: "https://leviathanalpha.io",
    siteName: "Leviathan Alpha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leviathan Alpha — The unified intelligence layer for prediction markets",
    description:
      "Track the whales. Find the arb. Spot the catalyst.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
