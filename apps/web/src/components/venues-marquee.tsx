type Venue = {
  name: string;
  logo?: string;
};

const VENUES: Venue[] = [
  { name: "Polymarket", logo: "/venues/polymarket.png" },
  { name: "Polymarket US", logo: "/venues/polymarket.png" },
  { name: "Kalshi", logo: "/venues/kalshi.png" },
  { name: "Manifold", logo: "/venues/manifold.jpg" },
  { name: "Limitless", logo: "/venues/limitless.jpeg" },
  { name: "Smarkets", logo: "/venues/smarkets.png" },
  { name: "Metaculus", logo: "/venues/metaculus.jpeg" },
  { name: "Myriad", logo: "/venues/myriad.jpg" },
  { name: "Probable", logo: "/venues/probable.jpeg" },
  { name: "Opinion", logo: "/venues/opinion.jpeg" },
  { name: "Baozi", logo: "/venues/baozi.jpg" },
];

export function VenuesMarquee() {
  return (
    <section id="venues" className="border-b border-border/60 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-foreground sm:mb-6 sm:text-sm">
          Indexing all 10+ venues that matter
        </p>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-start gap-12 whitespace-nowrap py-2">
            {[...VENUES, ...VENUES].map((v, i) => (
              <div
                key={`${v.name}-${i}`}
                className="flex w-20 flex-col items-center gap-2 font-mono text-xs text-foreground sm:w-24 sm:text-sm"
              >
                <VenueMark venue={v} />
                <span className="truncate">{v.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VenueMark({ venue }: { venue: Venue }) {
  if (venue.logo) {
    return (
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white sm:h-16 sm:w-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={venue.logo}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </span>
    );
  }
  return (
    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-muted font-mono text-2xl font-bold text-foreground sm:h-16 sm:w-16">
      {venue.name.charAt(0)}
    </span>
  );
}
