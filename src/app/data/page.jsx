import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Solana Data",
  description:
    "Network, stablecoin, DeFi, RPC, and transaction sender metrics from leading providers.",
};

const topics = [
  {
    label: "Overview",
    desc: "Core Solana network activity, fee, price, and block production metrics. Fees are the sum of base and priority fees only.",
  },
  {
    label: "Network",
    desc: "Key network metrics including active accounts, transaction counts, and network uptime over time.",
  },
  {
    label: "Stablecoins",
    desc: "Stablecoin supply, transfer volume, and transfer counts across USDC, USDT, and other major stablecoins.",
  },
  {
    label: "DeFi",
    desc: "Total value locked (TVL) and volume data from major Solana DeFi protocols and DEX aggregators.",
  },
  {
    label: "RPC",
    desc: "RPC latency metrics with filters for provider, region, method, and infrastructure type.",
  },
  {
    label: "Tx Senders",
    desc: "Transaction sender and economic top accounts metrics, including fee and priority fee breakdowns.",
  },
];

export default function DataPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
              Live infrastructure and network data
            </p>
            <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
              Solana data
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              Network, stablecoin, DeFi, RPC, and transaction sender metrics
              from leading providers.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <div className="grid gap-6 md:grid-cols-2">
              {topics.map((topic) => (
                <div
                  key={topic.label}
                  className="border border-white/[0.08] bg-[#0C0C0E] p-6 md:p-8"
                >
                  <h2 className="text-base font-medium text-nd-high-em-text">
                    {topic.label}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                    {topic.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-sm text-nd-mid-em-text">
                Top Ledger provides the underlying infrastructure for these
                metrics. View the data on{" "}
                <a
                  href="https://dune.com/solana/solana-network-metrics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4"
                >
                  Dune Analytics
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}