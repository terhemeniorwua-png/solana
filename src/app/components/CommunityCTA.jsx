"use client";
import Image from "next/image";

const TILES = [
  {
    title: "Validate the network",
    description: "Run a validator to help keep the network fast and secure for everyone.",
    href: "/validators",
    paths: [
      "M19 3c-1.65 0-3 1.35-3 3 0 .5.14.97.35 1.38l-1.12 1.3c-.64-.43-1.41-.69-2.24-.69s-1.53.24-2.15.64l-2.2-1.65c.22-.45.35-.96.35-1.49 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5c.66 0 1.28-.2 1.81-.52l2.18 1.64c-.3.56-.49 1.2-.49 1.88 0 1 .38 1.9.99 2.6l-1.69 1.69.03.03c-.4-.2-.84-.32-1.32-.32-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.48-.12-.92-.32-1.32l.03.03 1.95-1.95c.42.15.87.25 1.34.25 2.21 0 4-1.79 4-4 0-.64-.17-1.24-.44-1.78l1.25-1.46c.36.16.76.25 1.19.25 1.65 0 3-1.35 3-3s-1.35-3-3-3ZM7 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M4 5.5C4 4.67 4.67 4 5.5 4S7 4.67 7 5.5 6.33 7 5.5 7 4 6.33 4 5.5m9 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1",
    ],
  },
  {
    title: "Secure by staking",
    description: "Stake SOL and earn rewards while supporting decentralization.",
    href: "/staking",
    paths: [
      "m20.42,6.11l-7.97-4c-.28-.14-.62-.14-.9,0L3.58,6.11c-.31.15-.51.45-.55.79-.01.11-.96,10.76,8.55,15.01.13.06.27.09.41.09s.28-.03.41-.09c9.51-4.25,8.57-14.91,8.55-15.01-.03-.34-.24-.64-.55-.79Zm-8.42,13.79c-6.74-3.27-7.06-10.26-7-12.26l7-3.51,7,3.51c.04,1.99-.33,9.02-7,12.26Z",
      "M11 12.59 9.71 11.29 8.29 12.71 11 15.41 15.71 10.71 14.29 9.29 11 12.59z",
    ],
  },
  {
    title: "Build an app",
    description: "Launch the next big idea on the network powering the biggest apps in crypto.",
    href: "/docs/intro/quick-start",
    paths: [
      "M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 5h16v4H4zm0 14v-8h16v8z",
      "M14 6h2v2h-2zM17 6h2v2h-2z",
    ],
  },
  {
    title: "Contribute with code",
    description: "Write open source code and get paid through ecosystem grants.",
    href: "https://solana.org/grants-funding",
    paths: [
      "M9.71 16.29 5.41 12l4.3-4.29-1.42-1.42L2.59 12l5.7 5.71zM15.71 17.71l5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z",
    ],
  },
  {
    title: "Tokenize an asset",
    description: "Turn real-world assets into tokens to make them easier to trade and access globally.",
    href: "/solutions/tokenization",
    paths: [
      "M12 2C8.02 2 4 3.37 4 6v12c0 2.63 4.02 4 8 4s8-1.37 8-4V6c0-2.63-4.02-4-8-4m0 18c-3.72 0-6-1.29-6-2v-1.27c1.54.84 3.78 1.27 6 1.27s4.46-.43 6-1.27V18c0 .71-2.28 2-6 2m0-4c-3.72 0-6-1.29-6-2v-1.27c1.54.84 3.78 1.27 6 1.27s4.46-.43 6-1.27V14c0 .71-2.28 2-6 2m0-4c-3.72 0-6-1.29-6-2V8.73C7.54 9.57 9.78 10 12 10s4.46-.43 6-1.27V10c0 .71-2.28 2-6 2m0-4C8.28 8 6 6.71 6 6s2.28-2 6-2 6 1.29 6 2-2.28 2-6 2",
    ],
  },
];

export default function CommunityCTA() {
  return (
    <section className="relative overflow-hidden bg-nd-inverse text-nd-high-em-text text-left m-0 px-2">
        <div className="max-w-[1828px] mx-auto rounded-xl overflow-hidden relative">
          <Image
            alt="Hero background"
            fill
            sizes="150vw"
            src="/img/index/projects-bg.webp"
            className="!absolute inset-0 z-0"
          />
          <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 pt-10 pb-[120px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[80%] bg-gradient-to-b from-[#0B0A10] via-[#0B0A10] via-19% to-transparent pointer-events-none" />
            <div className="xl:flex xl:justify-between xl:items-center relative">
              <h2 className="nd-heading-l xl:max-w-[50%]">
                Build alongside <br />
                <span className="font-light">our global community.</span>
              </h2>
              <p className="nd-body-xl max-xl:mt-3 xl:py-3 xl:pl-6 xl:max-w-[40%] relative xl:before:absolute xl:before:top-0 xl:before:left-0 xl:before:w-px xl:before:h-full xl:before:bg-gradient-to-b xl:before:from-[#D884F0] xl:before:to-[#44EBA6]">
                Whether you&rsquo;re a builder, creator, validator, or
                supporter, there&rsquo;s a place for you to help.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 mt-10 relative">
              {TILES.map((tile) => (
                <a
                  key={tile.title}
                  href={tile.href}
                  className="flex max-md:flex-row md:flex-col items-start gap-3 md:gap-12 px-4 py-5 md:px-6 md:py-8 rounded-xl bg-nd-border-light hover:bg-nd-mid-em-text-alpha/20 backdrop-blur-[8px] text-inherit"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="shrink-0 grow-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="block w-5 h-5 md:w-10 md:h-10">
                      {tile.paths.map((d, i) => (
                        <path key={i} d={d} />
                      ))}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium nd-body-xl max-xl:!text-[16px]">
                      {tile.title}
                    </h4>
                    <p className="nd-body-m text-nd-mid-em-text !mt-1 max-xl:!text-[14px]">
                      {tile.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}