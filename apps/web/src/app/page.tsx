import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { VenuesMarquee } from "@/components/venues-marquee";
import { LivePreview } from "@/components/live-preview";
import { Features } from "@/components/features";
import { CTA } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <RevealOnScroll>
        <Features />
      </RevealOnScroll>
      <RevealOnScroll>
        <VenuesMarquee />
      </RevealOnScroll>
      <RevealOnScroll>
        <LivePreview />
      </RevealOnScroll>
      <RevealOnScroll>
        <CTA />
      </RevealOnScroll>
      <SiteFooter />
    </main>
  );
}
