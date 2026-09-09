"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background mesh */}
      <div className="absolute inset-0 noise-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(153,69,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(20,241,149,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_20%_70%,rgba(153,69,255,0.1),transparent)]" />
        {/* TODO: Replace with a high-res noise/gradient mesh image asset */}
      </div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-[#A0A0A0] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
          Network is live and performing
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto"
        >
          Build for the <span className="gradient-text">next wave</span>
          <br />
          of the internet
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg text-[#A0A0A0] max-w-[600px] mx-auto leading-relaxed"
        >
          A high-performance blockchain delivering sub-second finality and
          parallel execution — built for scaling decentralized applications to
          billions of users.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10"
        >
          <a
            href="#"
            className="inline-flex px-8 py-3.5 rounded-full gradient-bg text-black font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start Building
          </a>
        </motion.div>

        {/* Live status card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 mx-auto max-w-[720px]"
        >
          <a
            href="#"
            className="block p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all group text-left"
          >
            <div className="flex gap-4 items-start">
              {/* Thumbnail placeholder */}
              <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-[#9945FF]/30 to-[#14F195]/30 flex items-center justify-center border border-white/[0.06]">
                {/* TODO: Replace with actual thumbnail image */}
                <div className="w-6 h-6 rounded bg-white/10" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider mb-1">
                  Latest Release
                </div>
                <div className="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                  Network v2.1 — Parallel Execution Engine Now Live
                </div>
                <p className="text-sm text-[#A0A0A0] mt-1 line-clamp-1">
                  Experience 65,000+ transactions per second with the upgraded
                  runtime and improved state management.
                </p>
              </div>
              <div className="shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-[#A0A0A0] group-hover:text-[#14F195] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent" />
    </section>
  );
}
