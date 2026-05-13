export function SiteFooter() {
  return (
    <footer className="py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
        <div className="flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap font-mono text-sm leading-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Leviathan Alpha"
            className="h-[1.4em] w-[1.4em] flex-shrink-0"
          />
          <span className="translate-y-[1px] font-semibold leading-none tracking-tight">
            LEVIATHAN ALPHA
          </span>
        </div>
        <p className="font-mono text-[11px] leading-relaxed text-muted-foreground sm:whitespace-nowrap sm:text-center sm:text-xs">
          For informational purposes only. Not investment advice. Leviathan Alpha does not execute trades or hold customer funds.
        </p>
        <div className="flex flex-shrink-0 items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/LeviathanLabs_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @LeviathanLabs_ on X"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              <XIcon />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Threads"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              <ThreadsIcon />
            </a>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[15px] w-[15px]"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 192 192"
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[15px] w-[15px]"
    >
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2105 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 44.8568 153.317C33.5301 139.966 27.6764 120.682 27.4497 96C27.6764 71.3181 33.5301 52.0336 44.8568 38.6827C56.9538 24.4249 74.2039 17.1095 97.0132 16.9405C119.988 17.1108 137.539 24.4614 150.184 38.788C156.388 45.8156 161.067 54.6488 164.151 64.9503L180.33 60.6422C176.59 47.9622 170.704 37.0357 162.71 27.974C146.51 9.61668 122.811 0.210262 97.0695 0.0331675H96.9569C71.2674 0.209742 47.8341 9.65142 32.1488 28.0729C18.1832 44.4699 10.9809 67.2766 10.7322 95.9322L10.7321 96L10.7322 96.0678C10.9809 124.723 18.1832 147.53 32.1488 163.927C47.8341 182.349 71.2674 191.79 96.9569 191.967H97.0695C119.913 191.811 136.018 185.829 149.287 172.56C166.644 155.22 166.121 133.481 160.4 120.143C156.298 110.585 148.479 102.825 137.537 97.6584ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
    </svg>
  );
}
