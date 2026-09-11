import Image from "next/image";
import { HeroBackground } from "@/app/components/HeroBackground";

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-nd-inverse text-nd-high-em-text text-left border-b border-nd-border-light m-0"
      aria-labelledby="hero-title"
    >
      <HeroBackground />

      <div className="relative z-10 flex min-h-[700px]">
        <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 flex flex-col justify-between relative pt-12 xl:pt-[120px] md:pb-8 xl:pb-10 min-h-[calc(100vh-70px)]">
          <div className="max-w-5xl">
            <h1 className="nd-heading-2xl" id="hero-title">
              The capital market{" "}
              <br />
              <span className="font-light">for every asset on earth.</span>
            </h1>

            <p className="text-nd-mid-em-text font-medium max-md:mt-5 md:mt-6 nd-body-xl xl:max-w-[440px]">
              Solana is the leading high performance network powering internet
              capital markets, payments, and crypto applications.
            </p>

            <div className="mt-[52px]">
              <button
                type="button"
                className={`${BTN_BASE} hover:bg-[#7b47ff]/90 h-11 px-6 rounded-full md:h-[48px] nd-body-m !px-5 py-3 bg-nd-cta text-nd-inverse hover:!bg-nd-primary/90 tracking-[-0.16px] md:tracking-[-0.18px]`}
                aria-label="Get started"
              >
                Get started
                <span className="-mr-3 p-1 !size-8 bg-nd-inverse text-nd-cta rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="!size-[16px] block"
                    aria-hidden="true"
                  >
                    <path d="M6 13h6v4l6-5-6-5v4H6z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="mt-[52px] -mx-5 md:mx-0">
            <div className="overflow-hidden w-full md:w-[504px]">
              <div className="w-full flex flex-row items-stretch p-2 bg-[#DFCDF5] text-nd-inverse md:rounded-xl bg-blend-screen">
                <div className="grow-0 shrink-0 mr-3 md:mr-5 pb-10 md:pb-0">
                  <Image
                    src="/img/index/slot-200ms-promo.webp"
                    alt=""
                    width={153}
                    height={153}
                    className="!h-auto w-[74px] md:w-[153px] rounded-lg md:rounded-sm aspect-square"
                  />
                </div>
                <div className="grow flex flex-col justify-between md:py-1.5 xl:py-2 md:pr-2">
                  <div className="max-md:py-1 max-md:pr-1">
                    <p className="font-medium nd-body-l">
                      200ms: Monitoring the situation
                    </p>
                    <p className="nd-body-s opacity-[0.64]">
                      Watch Solana&apos;s measured path to 200ms with live
                      slot-time and network metrics.
                    </p>
                  </div>
                  <div className="mt-2 md:mt-3">
                    <a
                      href="/200ms"
                      aria-label="Open live monitor"
                      className={`${BTN_BASE} hover:bg-[#7b47ff]/90 px-6 rounded-full font-normal nd-body-s tracking-[-0.1em] !px-4 py-[6px] h-8 bg-nd-inverse text-nd-primary hover:!bg-nd-inverse/90 ml-[-86px] md:ml-0 w-[calc(100%+86px)] md:w-auto`}
                    >
                      Open live monitor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}