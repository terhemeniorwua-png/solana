"use client";
import { motion } from "framer-motion";

const POSTS = [
  {
    title: "The year in network scaling",
    excerpt: "A look at how parallel execution and state compression drove dramatic throughput gains across 2026.",
    tag: "Engineering",
    date: "Sep 5, 2026",
  },
  {
    title: "A primer on token extensions",
    excerpt: "Everything developers need to know about issuing programmable, feature-rich assets on-chain.",
    tag: "Protocol",
    date: "Aug 30, 2026",
  },
  {
    title: "Designing for a billion users",
    excerpt: "What it takes to build consumer apps that stay fast, cheap, and reliable under massive scale.",
    tag: "Product",
    date: "Aug 24, 2026",
  },
  {
    title: "The economics of validators",
    excerpt: "Breaking down the incentives, staking rewards, and hardware requirements of network consensus.",
    tag: "Infrastructure",
    date: "Aug 15, 2026",
  },
  {
    title: "Zero-knowledge for everyone",
    excerpt: "Demystifying privacy tech and where it fits in the roadmap for verifiable computation.",
    tag: "Research",
    date: "Aug 8, 2026",
  },
  {
    title: "Lessons from shipping v2",
    excerpt: "Retrospective on the biggest protocol upgrade to date and what we learned along the way.",
    tag: "Engineering",
    date: "Jul 30, 2026",
  },
  {
    title: "Building the on-chain economy",
    excerpt: "How tokenized assets and DeFi rails are reshaping payments, lending, and capital markets.",
    tag: "DeFi",
    date: "Jul 21, 2026",
  },
  {
    title: "A developer's guide to RPC",
    excerpt: "Choosing the right provider, tuning queries, and handling rate limits for production apps.",
    tag: "Tooling",
    date: "Jul 12, 2026",
  },
  {
    title: "The mobile-first future",
    excerpt: "Why app stores and embedded wallets are the next frontier for onboarding mainstream users.",
    tag: "Consumer",
    date: "Jul 3, 2026",
  },
  {
    title: "Security foundations",
    excerpt: "An in-depth look at how the network defends against attacks, outages, and adversarial actors.",
    tag: "Security",
    date: "Jun 25, 2026",
  },
];

const Arrow = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function BlogGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Keep up with the latest
          </h2>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
          >
            View all posts
            <Arrow className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.15] transition-colors"
            >
              {/* 16:9 image placeholder */}
              <div className="aspect-video w-full bg-gradient-to-br from-[#9945FF]/20 via-[#0a0a0a] to-[#14F195]/20 relative overflow-hidden">
                {/* TODO: Replace with actual blog thumbnail image */}
                <div className="absolute inset-0 noise-bg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                    <svg className="w-5 h-5 text-[#A0A0A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l10.5 4.5-10.5 4.5V7.5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-[#A0A0A0] mb-3">
                  <span className="font-mono uppercase tracking-wider text-[#9945FF]">
                    {post.tag}
                  </span>
                  <span className="text-white/[0.15]">·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#F5F5F5] group-hover:text-white transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed line-clamp-2 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="text-sm text-[#A0A0A0] group-hover:text-[#14F195] transition-colors flex items-center gap-1.5">
                  Learn more
                  <Arrow className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
