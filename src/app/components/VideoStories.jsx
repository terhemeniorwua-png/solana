"use client";
import { useCarousel } from "@/app/hooks/useCarousel";

const VIDEOS = [
  {
    title: "Anatomy of a high-throughput network",
    duration: "12:45",
    description: "Inside the architecture that powers millions of transactions per second.",
  },
  {
    title: "Building your first dApp from scratch",
    duration: "18:20",
    description: "A step-by-step walkthrough from smart contract to live deployment.",
  },
  {
    title: "Scaling challenges we solved",
    duration: "14:02",
    description: "The engineering story behind the latest protocol upgrades.",
  },
  {
    title: "Inside the validator ecosystem",
    duration: "09:38",
    description: "How independent operators keep the network secure and decentralized.",
  },
  {
    title: "The future of payments on-chain",
    duration: "16:11",
    description: "From tokenized deposits to real-time cross-border settlement.",
  },
];

const Arrow = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export default function VideoStories() {
  const { containerRef, canScrollLeft, canScrollRight, scroll } = useCarousel();

  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            How we built this
          </h2>
          <p className="text-[#A0A0A0] max-w-xl">
            Stories, deep dives, and behind-the-scenes from the engineers and
            operators building the network.
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/[0.08] items-center justify-center hover:bg-white/[0.06] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/[0.08] items-center justify-center hover:bg-white/[0.06] transition-colors"
            >
              <Arrow className="w-5 h-5" />
            </button>
          )}

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
          >
            {VIDEOS.map((video) => (
              <div
                key={video.title}
                className="shrink-0 w-[400px] snap-start group"
              >
                {/* 16:9 thumbnail with play button */}
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#9945FF]/25 via-[#0a0a0a] to-[#14F195]/20 relative border border-white/[0.08] group-hover:border-white/[0.15] transition-colors">
                  {/* TODO: Replace with actual video thumbnail image */}
                  <div className="absolute inset-0 noise-bg" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-black/40 group-hover:scale-105 transition-all duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-xs font-mono text-[#F5F5F5]">
                    {video.duration}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                  {video.title}
                </h3>
                <p className="mt-1 text-sm text-[#A0A0A0] line-clamp-1">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
