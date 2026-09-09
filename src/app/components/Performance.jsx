"use client";
import { useCountUp } from "@/app/hooks/useCountUp";

const STATS = [
  { value: 2480000, label: "Monthly active addresses", prefix: "", suffix: "" },
  { value: 850, label: "Monthly transactions", prefix: "", suffix: "M" },
  { value: 142, label: "Trading volume", prefix: "$", suffix: "B" },
  { value: 520, label: "App revenue", prefix: "$", suffix: "M" },
  { value: 65000, label: "Transactions per second", prefix: "", suffix: "" },
];

function formatNumber(n, prefix, suffix) {
  if (n >= 1000000) {
    return `${prefix}${(n / 1000000).toFixed(1)}M${suffix}`;
  }
  if (n >= 1000) {
    return `${prefix}${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K${suffix}`;
  }
  return `${prefix}${n.toLocaleString()}${suffix}`;
}

function StatBlock({ value, label, prefix, suffix }) {
  const { count, ref } = useCountUp(value, 2200);

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <div className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight gradient-text">
        {formatNumber(count, prefix, suffix)}
      </div>
      <div className="mt-3 text-sm text-[#A0A0A0]">{label}</div>
    </div>
  );
}

export default function Performance() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden border-y border-white/[0.08]">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#9945FF]/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#14F195]/8 blur-[120px]" />
        {/* TODO: Replace with high-res gradient mesh asset */}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Performance that speaks
          <br />
          <span className="gradient-text">for itself</span>
        </h2>
        <p className="text-[#A0A0A0] max-w-xl mx-auto mb-16">
          The network is operating at scale with millions of active users,
          processing hundreds of millions of transactions every month.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
