"use client";
import Image from "next/image";
import { useState } from "react";

const POSTS = [
  {
    title: "Report: Stablecoins Are Reshaping Remittances",
    excerpt:
      "New report on stablecoin remittances covering four implementation paths for money transfer operators, corridor overviews, and case studies.",
    slug: "report-stablecoins-are-reshaping-remittances",
  },
  {
    title: "How BitRobot Crowdsources Real-World Data for Embodied AI, with Jonathan Victor",
    excerpt:
      "BitRobot open-sourced 2,000 hours of robot navigation data and uses Solana to track and reward embodied AI data contributors.",
    slug: "bits-to-bricks-bitrobot-jonathan-victor",
  },
  {
    title: "Solana Ecosystem Roundup: August 2026",
    excerpt:
      "Solana's August 2026 roundup: record transactions, $4B in RWAs, growing stablecoin payments, tokenized stocks, DeFi innovation, ETFs, and governance.",
    slug: "solana-ecosystem-roundup-august-2026",
  },
  {
    title: "Payment Channels: 1 Million Payments Per Second",
    excerpt:
      "Payment channels support 1 million payments per second by authorizing agent spending once.",
    slug: "payment-channels-1-million-payments-per-second",
  },
  {
    title: "How to Reclaim Excess SOL After Rent Reduction",
    excerpt:
      "Rent on Solana has been reduced. Every account is now over-funded. Here's how to reclaim excess SOL.",
    slug: "how-to-reclaim-excess-sol-after-rent-reduction",
  },
  {
    title: "The Token Supercycle: Everything of Value is Becoming Programmable",
    excerpt:
      "More than $4.7 trillion in stablecoins moved across Solana in the past year as tokenized markets expand access to ownership and finance.",
    slug: "the-token-supercycle-oped",
  },
  {
    title: "Webinar Recap: Cross-Border Payments in Latin America",
    excerpt:
      "Jorge Borges, Head of Latin America at Fireblocks, and Antonio Neto of the Solana Foundation discussed how firms across LATAM are putting stablecoin payments into production.",
    slug: "webinar-recap-cross-border-payments-in-latin-america",
  },
  {
    title: "Solana Changelog: August 27, 2026",
    excerpt:
      "V1 Transactions are approaching, while a 300ms slot-time feature gate reached Mainnet and new releases shipped across Solana tooling.",
    slug: "solana-changelog-august-27-2026",
  },
  {
    title: "The Token Supercycle Is Here: Solana Brings Breakpoint 2026 to London",
    excerpt:
      "Breakpoint comes to London November 15–17, bringing 8,000+ attendees and leaders from capital markets, payments, technology and policy.",
    slug: "breakpoint-2026-london-speakers",
  },
  {
    title: "Solana Changelog: August 20, 2026",
    excerpt:
      "Feature gates reduced mainnet slot times from 400ms to 350ms, while Agave, Firedancer, and Solana Kit shipped updates.",
    slug: "solana-changelog-august-20-2026",
  },
];

const PrevArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
    <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z" />
  </svg>
);

const NextArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
    <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z" />
  </svg>
);

export default function BlogGrid() {
  const [index, setIndex] = useState(0);
  const len = POSTS.length;
  const go = (dir) =>
    setIndex((i) => Math.min(len - 1, Math.max(0, i + dir)));

  return (
    <section className="relative overflow-hidden text-white text-left">
        <div className="py-10">
          <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 mb-8 xl:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="nd-heading-l">
                Keep up with <br />
                <span className="font-light">the latest on Solana</span>
              </h2>
            </div>
            <div className="flex gap-3 items-center">
              <div className="hidden xl:inline-flex">
                <div className="flex gap-2">
                  <button
                    aria-label="Previous"
                    onClick={() => go(-1)}
                    className="rounded-full w-12 h-12 p-1 border-[1px] border-nd-border-prominent transition flex items-center justify-center not-hover:bg-black hover:bg-nd-border-prominent"
                  >
                    <PrevArrow />
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => go(1)}
                    className="rounded-full w-12 h-12 p-1 border-[1px] border-nd-border-prominent transition flex items-center justify-center not-hover:bg-black hover:bg-nd-border-prominent"
                  >
                    <NextArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10">
            <div className="relative w-full flex items-center justify-center !m-0 [&>div]:!overflow-visible [&>div]:!p-0 w-full md:w-[700px] xl:w-[1360px]">
              <div className="w-full overflow-hidden z-0 px-14">
                <div
                  className="flex"
                  style={{
                    width: `${len * 100}%`,
                    display: "flex",
                    transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                    transform: `translateX(calc(-${((index / len) * 100).toFixed(3)}% + 0px))`,
                    cursor: "grab",
                  }}
                >
                  {POSTS.map((post) => (
                    <div
                      key={post.slug}
                      style={{
                        width: `${(100 / len).toFixed(3)}%`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexShrink: 0,
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="flex flex-col xl:flex-row w-full self-start min-w-0 px-1">
                          <div className="relative w-full xl:w-2/3 aspect-[16/9] xl:aspect-[875/492] rounded-tl-xl rounded-tr-xl xl:rounded-tr-none xl:rounded-bl-xl overflow-hidden group">
                            <Image
                              src={`/uploads/posts/${post.slug}/heroImage.webp`}
                              alt={post.title}
                              fill
                              sizes="(max-width: 1280px) 100vw, 66vw"
                              className="object-cover z-0"
                            />
                          </div>
                          <div className="w-full xl:w-1/3 bg-[#0D0C11] p-5 xl:p-8 rounded-bl-xl rounded-br-xl xl:rounded-bl-none xl:rounded-tr-xl xl:flex xl:flex-1 xl:flex-col min-w-0 overflow-hidden">
                            <h3 className="nd-heading-m xl:order-1 line-clamp-4">
                              {post.title}
                            </h3>
                            <p className="text-nd-mid-em-text nd-body-l font-medium max-xl:mt-3 xl:mt-8 xl:pt-8 xl:border-t xl:border-nd-border-light xl:order-3 line-clamp-5">
                              {post.excerpt}
                            </p>
                            <div className="mt-[25px] xl:mt-8 xl:order-2 xl:grow">
                              <a
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 rounded-full border-[1px] border-nd-border-prominent not-hover:bg-transparent hover:bg-nd-border-prominent h-11 px-6 w-full xl:w-auto nd-body-m text-inherit"
                                href={`/news/${post.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={post.title}
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}