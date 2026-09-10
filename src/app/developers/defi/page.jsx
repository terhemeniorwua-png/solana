import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "DeFi | Solana",
  description:
    "High transaction throughput. Ultra low fees. Low latency. Capital efficiency. Solana is made for builders.",
};

function StatCard({ value, label }) {
  return (
    <div className="border border-white/[0.08] bg-[#0C0C0E] p-6">
      <div className="nd-heading-m text-nd-high-em-text">{value}</div>
      <p className="mt-2 text-sm text-nd-mid-em-text">{label}</p>
    </div>
  );
}

function FeatureCard({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-white/[0.08] p-6 transition-colors hover:bg-[#151518]"
    >
      <h3 className="text-sm font-medium text-nd-mid-em-text">{title}</h3>
      <p className="mt-2 text-base text-nd-high-em-text">{description}</p>
      <span className="mt-auto pt-4 text-xs text-nd-mid-em-text group-hover:text-white transition-colors">
        Try It →
      </span>
    </a>
  );
}

export default function DefiPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="relative mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid min-h-[430px] xl:grid-cols-[minmax(0,1fr)_480px] xl:min-h-[560px]">
            <div className="relative z-10 flex flex-col justify-end px-5 py-14 md:px-8 md:py-20 xl:px-12 xl:py-24">
              <div className="max-w-[860px]">
                <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                  DeFi
                </p>
                <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
                  DeFi made fast, seamless, and easy
                </h1>
                <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text md:mt-6">
                  High transaction throughput. Ultra low fees. Low latency.
                  Capital efficiency. Solana is made for builders.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/developers"
                    className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                  >
                    Start Building
                  </a>
                  <a
                    href="https://docs.solana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-none border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/40"
                  >
                    Read Docs
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden overflow-hidden border-l border-white/[0.08] xl:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Fcaab781a01724a068276fdd3446f4cbe.png&w=1920&q=75"
                alt="DeFi on Solana"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid grid-cols-1 gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <StatCard value="11B+" label="Total value locked" />
            <StatCard value="430M" label="avg 24h volume" />
            <StatCard value="$0.18" label="avg transaction fee" />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Why Solana
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              Solana&apos;s blazing speed and low fees scale as the ecosystem
              grows without sacrificing censorship resistance or security.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/[0.08] p-5 md:p-8 xl:p-12 md:border-b-0 md:border-r">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                Anchor Framework
              </p>
              <h2 className="mt-4 nd-heading-m text-nd-high-em-text">
                Write smart contracts with ease
              </h2>
              <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                It shouldn&apos;t be hard to write smart contracts. Anchor is
                Solidity, web3.js, ethers.js, Truffle, and ganache all in one
                toolchain. Get started writing functional programs on Solana
                faster than ever.
              </p>
              <a
                href="https://www.anchor-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-white underline-offset-4 hover:underline"
              >
                Read Guide →
              </a>
            </div>
            <div className="p-5 md:p-8 xl:p-12">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F873bf74d6e4a43d8a6f83d99f0d0288f.png&w=1200&q=75"
                alt="Anchor Framework"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
              DeFi Primitives
            </p>
            <h2 className="mt-4 nd-heading-l text-nd-high-em-text">
              A single global state
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              Never deal with capital inefficient Layer 2 systems or sharded
              chains. Solana maintains a single global state, and scales alongside
              Moore&apos;s Law.
            </p>
          </div>
          <div className="grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <FeatureCard
              title="wallets"
              description="Learn how to connect with the wallet adapter standard."
              link="https://github.com/solana-labs/wallet-adapter"
            />
            <FeatureCard
              title="Lending Protocols"
              description="Access liquidity with MarginFi and Solend."
              link="https://sinoglobalcap.medium.com/how-to-solana-chapter-1-solana-lending-borrowing-5ba14905e2fd"
            />
            <FeatureCard
              title="Oracles"
              description="Query data with Pyth."
              link="https://pyth.network/"
            />
            <FeatureCard
              title="Margin & Derivatives"
              description="Use Mango and PsyOptions for leverage."
              link="https://solana.com/ecosystem/explore?categories=defi"
            />
            <FeatureCard
              title="Staking"
              description="Liquid staking with Marinade and Lido pools."
              link="https://solana.com/ecosystem/explore"
            />
            <FeatureCard
              title="Bridges"
              description="Go to ETH and back with Wormhole and Allbridge."
              link="https://solana.com/ecosystem/explore"
            />
          </div>
        </section>
      </div>
    </div>
  );
}