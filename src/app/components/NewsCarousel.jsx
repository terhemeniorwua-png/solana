"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "@/app/hooks/useCarousel";

const FILTERS = ["All", "DeFi", "Institutions", "Consumer", "Developers", "Ecosystem"];

const NEWS = [
  {
    title: "Protocol Upgrade Accelerates Settlement Times",
    excerpt: "The latest network upgrade reduces average block time to a fraction of a second, unlocking new classes of high-frequency applications.",
    tag: "Developers",
    date: "Sep 2, 2026",
    readTime: "6 min",
  },
  {
    title: "Institutional Adoption Reaches New Milestone",
    excerpt: "A growing number of asset managers are building custody and trading infrastructure on the network's fast, low-cost rails.",
    tag: "Institutions",
    date: "Aug 28, 2026",
    readTime: "4 min",
  },
  {
    title: "Consumer Payments See Record Throughput",
    excerpt: "Point-of-sale integrations now process over a million micro-payments daily, driving mainstream merchant adoption.",
    tag: "Consumer",
    date: "Aug 22, 2026",
    readTime: "5 min",
  },
  {
    title: "Leading Exchange Lists Native Token",
    excerpt: "The token becomes available on major spot exchanges, deepening liquidity and broadening global access.",
    tag: "DeFi",
    date: "Aug 18, 2026",
    readTime: "3 min",
  },
  {
    title: "New Ecosystem Fund Backs 40 Startups",
    excerpt: "Grants and venture funding flow to teams building infrastructure, tooling, and consumer applications across the ecosystem.",
    tag: "Ecosystem",
    date: "Aug 10, 2026",
    readTime: "7 min",
  },
  {
    title: "Developer Tooling Receives Major Refresh",
    excerpt: "The CLI, IDEs, and debugger tooling get a ground-up rewrite to make building and shipping applications faster than ever.",
    tag: "Developers",
    date: "Aug 2, 2026",
    readTime: "5 min",
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

export default function NewsCarousel() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { containerRef, canScrollLeft, canScrollRight, scroll } = useCarousel();

  const filteredNews =
    activeFilter === "All"
      ? NEWS
      : NEWS.filter((n) => n.tag === activeFilter);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Eyebrow */}
        <div className="font-mono text-xs text-[#A0A0A0] uppercase tracking-[0.2em] mb-6">
          Terminal
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${
                activeFilter === filter
                  ? "text-[#F5F5F5]"
                  : "text-[#A0A0A0] hover:text-[#F5F5F5]"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="newsTab"
                  className="absolute bottom-0 left-3 right-3 h-[2px] gradient-bg rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
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
            <AnimatePresence mode="popLayout">
              {filteredNews.map((item) => (
                <motion.article
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-[360px] snap-start p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-colors group"
                >
                  <div className="flex items-center gap-3 text-xs text-[#A0A0A0] mb-4">
                    <span className="font-mono uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-white/[0.15]">·</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F5F5] group-hover:text-white transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#A0A0A0] font-mono">
                      {item.readTime} read
                    </span>
                    <span className="text-sm text-[#A0A0A0] group-hover:text-[#14F195] transition-colors flex items-center gap-1">
                      Read
                      <Arrow className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
