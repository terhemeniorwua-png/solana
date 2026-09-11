"use client";
import { useCountUp } from "@/app/hooks/useCountUp";
import { motion } from "framer-motion";
import PerformanceBackground from "@/app/components/PerformanceBackground";

const HEADLINE_STATS = [
  {
    value: 16400000000000,
    className: "text-[28px] xl:text-[40px] leading-[1.14] xl:leading-[1] font-light uppercase",
    label: "Total transactions to date",
  },
  {
    value: 9750,
    className: "text-[28px] xl:text-[40px] leading-[1.14] xl:leading-[1] font-light uppercase",
    label: "Transactions per second",
  },
];

const GRID_STATS = [
  { final: "50M", prefix: "", label: "Monthly active addresses" },
  { final: "3.5B", prefix: "", label: "Monthly transactions" },
  { final: "$3.3T", prefix: "$", label: "Trading volume" },
  { final: "$3.4B", prefix: "$", label: "App revenue" },
];

const BarChartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M3 15h2v5H3zM7 12h2v8H7zM11 9h2v11h-2zM15 6h2v14h-2zM19 3h2v17h-2z" />
  </svg>
);

const BoltIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="m10.94,10.94c-.71.46-.91,1.41-.44,2.12.12.18.27.33.44.44.71.46,1.65.27,2.12-.44,0,0,0,0,0,0l3.96-6.04s0-.02,0-.03c0-.02-.03-.02-.04-.01l-6.04,3.96Z" />
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
  </svg>
);

function formatNumber(n, prefix) {
  if (n >= 1e12) return `${prefix}${(n / 1e12).toFixed(1)}T`;
  if (n >= 1e9) return `${prefix}${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `${prefix}${Math.round(n / 1e6)}M`;
  return `${prefix}${n.toLocaleString()}`;
}

function CountUpStat({ value, label, className }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref}>
      <div className={className}>{formatNumber(count, "")}</div>
      <div className="mt-1.5 md:mt-1 xl:mt-3 text-[16px] md:text-[18px] leading-[1.33] font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Performance() {
  return (
    <div className="w-full">
      <hr className="border-nd-border-light border-t m-0 !opacity-100" />
      <section className="relative overflow-hidden bg-nd-inverse text-nd-high-em-text text-left m-0">
        <PerformanceBackground />
        <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 py-10 flex flex-col justify-between relative">
          <div className="flex flex-col xl:flex-row gap-[52px] justify-between items-start">
            <div className="xl:max-w-[50%] grow-0">
              <h2 className="nd-heading-l">
                The fastest growing &amp; <br />
                <span className="font-light">leading financial platform</span>
              </h2>
              <p className="text-nd-mid-em-text nd-body-xl max-md:mt-3 md:mt-[35px] xl:mt-8">
                The number one platform for startups and enterprises, with the
                most users, the most developers, the most trading activity, and
                the highest real TPS.
              </p>
            </div>

            <div className="w-full xl:w-[35%] relative before:absolute before:top-0 before:left-0 before:w-px before:h-full before:bg-gradient-to-b before:from-[#D884F0] before:to-[#44EBA6]">
              <div className="py-5 px-3 md:px-8 xl:py-8 flex flex-row gap-4 md:gap-8 xl:gap-[28px] border-nd-border-light">
                <div>
                  <BarChartIcon className="xl:size-8 md:size-5" />
                </div>
                <div>
                  <CountUpStat
                    value={HEADLINE_STATS[0].value}
                    label={HEADLINE_STATS[0].label}
                    className={HEADLINE_STATS[0].className}
                  />
                </div>
              </div>
              <div className="py-5 px-3 md:px-8 xl:py-8 flex flex-row gap-4 md:gap-8 xl:gap-[28px] border-nd-border-light border-t">
                <div>
                  <BoltIcon className="xl:size-8 md:size-5" />
                </div>
                <div>
                  <CountUpStat
                    value={HEADLINE_STATS[1].value}
                    label={HEADLINE_STATS[1].label}
                    className={HEADLINE_STATS[1].className}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[380px] md:mt-[350px] xl:mt-[560px] -mx-5 md:-mx-8 xl:mx-0">
            <div className="grid grid-cols-2 w-full xl:grid-cols-4">
              {GRID_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`p-4 md:p-8 xl:px-10 flex flex-col justify-between gap-4 max-xl:border-b border-nd-border-light max-xl:border-t ${
                    idx === 0
                      ? "xl:pl-0"
                      : idx === 2
                        ? "xl:border-l"
                        : "border-l xl:border-l"
                  }`}
                >
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none font-light uppercase">
                      {stat.final}
                    </div>
                    <div className="mt-1.5 md:mt-1 xl:mt-3 text-[14px] md:text-[18px] leading-[1.33] font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}