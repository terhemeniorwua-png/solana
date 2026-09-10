import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Migrate to Solana — Chain Migration Hub | Solana",
  description:
    "Comprehensive guides for migrating your product from Ethereum, Cosmos, or other blockchains to Solana.",
};

const chains = [
  {
    name: "EVM / Ethereum",
    slug: "ethereum",
    color: "from-blue-500/10 to-transparent",
  },
  {
    name: "CosmWasm / Cosmos",
    slug: "cosmos",
    color: "from-purple-500/10 to-transparent",
  },
];

const nextSteps = [
  {
    title: "Intro to Solana Development",
    desc: "Browse official Solana development documentation.",
    href: "/docs/intro/quick-start",
  },
  {
    title: "Solana AI Agent Skills",
    desc: "Use pre-built skills you can drop into your AI agents to interact with Solana.",
    href: "/skills",
  },
  {
    title: "Solana Bootcamp",
    desc: "Watch a structured video series that walks through setup and day-one development workflows.",
    href: "/developers/bootcamp",
  },
  {
    title: "More Solana Developer Tools",
    desc: "Browse docs, guides, cookbook recipes, tools, and ecosystem support channels.",
    href: "/developers",
  },
];

export default function MigratePage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
              Chain Migration Guide
            </p>
            <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
              Migrate to Solana
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              Comprehensive guides for migrating your product from Ethereum,
              Cosmos, or other blockchains to Solana. Each guide is tailored to
              your source chain — covering key differences, tooling, and
              step-by-step migration patterns.
            </p>
            <a
              href="#choose-your-chain"
              className="mt-6 inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
            >
              View Guides
            </a>
          </div>
        </section>

        <section
          id="choose-your-chain"
          className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x"
        >
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Choose the chain you&apos;re migrating from.
            </h2>
            <div className="mt-10 grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
              {chains.map((chain) => (
                <a
                  key={chain.slug}
                  href={`/developers/migrate-to-solana/${chain.slug}`}
                  className={`group bg-gradient-to-br ${chain.color} p-8 transition-colors hover:bg-[#151518]`}
                >
                  <h3 className="nd-heading-m text-nd-high-em-text">
                    {chain.name}
                  </h3>
                  <span className="mt-3 inline-flex text-sm text-white underline-offset-4 group-hover:underline">
                    View {chain.name.split(" / ")[0]} Guides →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Next steps for Solana developers.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {nextSteps.map((step) => (
                <a
                  key={step.title}
                  href={step.href}
                  className="group border border-white/[0.08] p-6 transition-colors hover:bg-[#151518]"
                >
                  <h3 className="text-sm font-medium text-white group-hover:underline underline-offset-4">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-nd-mid-em-text">
                    {step.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}