"use client";
import { motion } from "framer-motion";
import { useCarousel } from "@/app/hooks/useCarousel";

const EVENTS = [
  {
    name: "Global Developer Conference",
    date: "Oct 14–16, 2026",
    city: "Barcelona, Spain",
  },
  {
    name: "DeFi Summit Europe",
    date: "Nov 3–5, 2026",
    city: "London, UK",
  },
  {
    name: "Web3 Builders Hackathon",
    date: "Nov 22–24, 2026",
    city: "Singapore",
  },
  {
    name: "Token Economy Workshop",
    date: "Dec 8–9, 2026",
    city: "Zurich, Switzerland",
  },
  {
    name: "Institutional Digital Assets Forum",
    date: "Jan 15–16, 2027",
    city: "New York, USA",
  },
  {
    name: "Asian Blockchain Meetup",
    date: "Feb 4–5, 2027",
    city: "Tokyo, Japan",
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

export default function EventsCarousel() {
  const { containerRef, canScrollLeft, canScrollRight, scroll } = useCarousel();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Upcoming Events
          </h2>
          <a
            href="#"
            className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors flex items-center gap-1"
          >
            View all
            <Arrow className="w-4 h-4" />
          </a>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/[0.08] items-center justify-center hover:bg-white/[0.06] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
          )}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/[0.08] items-center justify-center hover:bg-white/[0.06] transition-colors"
            >
              <Arrow className="w-5 h-5" />
            </motion.button>
          )}

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory pb-4 cursor-grab active:cursor-grabbing"
          >
            {EVENTS.map((event, idx) => (
              <motion.a
                key={event.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="shrink-0 w-[320px] snap-start p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-colors group"
              >
                <div className="text-xs font-medium text-[#A0A0A0] font-mono mb-3">
                  {event.date}
                </div>
                <h3 className="text-lg font-semibold text-[#F5F5F5] group-hover:text-white mb-2 transition-colors">
                  {event.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-[#A0A0A0]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {event.city}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
