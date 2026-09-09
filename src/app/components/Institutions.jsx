"use client";
import Image from "next/image";

const INSTITUTIONS = [
  {
    name: "Western Union",
    logo: "/img/logos-eco/western-union.svg",
    value: "USDPT",
    label: "Stablecoin launching 2026",
    border: "max-md:border-r-0 max-xl:border-r xl:border-r",
  },
  {
    name: "Visa",
    logo: "/img/logos-eco/visa.svg",
    value: "Millions",
    label: "Settled in USDC",
    border: "xl:border-r max-md:border-t",
  },
  {
    name: "Paypal",
    logo: "/img/logos-eco/paypal.svg",
    value: "PYUSD",
    label: "Stablecoin issued",
    border: "max-md:border-r-0 max-xl:border-r xl:border-r max-xl:border-t max-md:border-t",
  },
  {
    name: "Franklin Templeton",
    logo: "/img/logos-eco/franklin-templeton.webp",
    value: "64%",
    label: "Monthly Onchain Asset Growth",
    border: "max-xl:border-t max-md:border-t",
  },
  {
    name: "r3",
    logo: "/img/logos-eco/r3.webp",
    value: "10B",
    label: "in Regulated Onchain Assets",
    border: "max-md:border-r-0 max-xl:border-r xl:border-r max-xl:border-t max-md:border-t xl:border-t",
  },
  {
    name: "Bullish",
    logo: "/img/logos-eco/bullish.svg",
    value: "2.5B",
    label: "Daily Volume",
    border: "xl:border-r max-xl:border-t max-md:border-t xl:border-t",
  },
];

const TRUST_LOGOS = [
  { name: "Hamilton Lane", src: "/img/logos-eco/hamilton-lane.webp", h: undefined },
  { name: "Blackrock", src: "/img/logos-eco/blackrock.png", h: "80%" },
  { name: "Brevan Howard", src: "/img/logos-eco/brevan-howard.png", h: "80%" },
  { name: "Societe Generale", src: "/img/logos-eco/societe-generale.png", h: "96%" },
  { name: "Vaneck", src: "/img/logos-eco/vaneck.png", h: "80%" },
];

export default function Institutions() {
  return (
    <div>
      <div className="w-full">
        <hr className="border-nd-border-light border-t m-0 !opacity-100" />
      </div>
      <section className="relative overflow-hidden text-nd-high-em-text text-left m-0 z-10">
        <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 py-10 flex flex-col justify-between relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="xl:max-w-[70%] grow-0">
              <h2 className="nd-heading-l">
                The world&rsquo;s largest institutions{" "}
                <br className="max-md:hidden" />
                <span className="font-light">
                  and fintechs are building on Solana.
                </span>
              </h2>
            </div>
            <div>
              <a
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 rounded-full border-[1px] border-nd-border-prominent not-hover:bg-transparent hover:bg-nd-border-prominent px-6 h-12 w-auto nd-body-m text-inherit"
                href="/solutions/tokenization"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all
              </a>
            </div>
          </div>

          <div className="mt-10 xl:mt-16 rounded-2xl border-nd-border-light border-[1px] bg-nd-inverse overflow-hidden relative">
            <Image
              alt=""
              fill
              sizes="100vw"
              src="/img/index/projects-bg.webp"
              className="opacity-30 blur-[40px]"
            />
            <Image
              alt=""
              width={1411}
              height={283}
              src="/img/index/pattern-parallelogram-r.svg"
              className="absolute bottom-[-23px] right-[-900px] mix-blend-overlay opacity-40 max-w-none hidden xl:block"
            />
            <Image
              alt=""
              width={1411}
              height={283}
              src="/img/index/pattern-parallelogram-r.svg"
              className="absolute bottom-[-100px] right-[-1000px] mix-blend-overlay max-w-none hidden xl:block"
            />
            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {INSTITUTIONS.map((inst) => (
                <article
                  key={inst.name}
                  className={`relative group shrink-0 p-[24px_20px] xl:p-8 flex flex-col justify-between xl:min-h-[360px] border-nd-border-light ${inst.border}`}
                  aria-label={inst.name}
                >
                  <div className="relative">
                    <div className="relative h-6 xl:h-8">
                      <Image
                        src={inst.logo}
                        alt={inst.name}
                        fill
                        sizes="(max-width: 1280px) 50vw, 25vw"
                        className="object-contain w-auto"
                      />
                    </div>
                  </div>
                  <div className="mt-8 mb-0 relative">
                    <div className="sr-only">{inst.label}</div>
                    <div className="text-[24px] xl:text-[40px] leading-[1.33] xl:leading-[1.2] mb-1 uppercase">
                      {inst.value}
                    </div>
                    <div className="nd-body-m font-medium">{inst.label}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="flex whitespace-nowrap items-center scrollbar-hidden overflow-auto transform-gpu mt-10 xl:mt-16 -mx-5 md:-mx-8 xl:-mx-10 w-auto px-5 md:px-8 xl:px-10 h-[28px] xl:h-[40px] gap-6 xl:gap-12 justify-start md:justify-between">
              {TRUST_LOGOS.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center relative md:mr-12 xl:mr-32 self-center h-full m-0"
                  style={logo.h ? { height: logo.h } : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="block h-full max-h-full max-w-none !w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}