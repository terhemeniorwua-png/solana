import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Cosmos to Solana Migration Guide | Solana",
  description:
    "Choose a guide below to migrate to Solana from Cosmos.",
};

const GUIDES = [
  {
    title: "Port CosmWasm contracts",
    description: "Explore the smart contract guide",
    href: "/developers/migrate-to-solana/cosmos/cosmwasm",
  },
  {
    title: "Migrate a Cosmos app chain",
    description: "Explore the app-chain guide",
    href: "/developers/migrate-to-solana/cosmos/app-chain",
  },
];

const RESOURCES = [
  {
    title: "Intro to Solana Development",
    description: "Browse official Solana development documentation.",
    href: "/docs",
  },
  {
    title: "Solana AI Agent Skills",
    description:
      "Use pre-built skills you can drop into your AI agents to interact with Solana.",
    href: "/skills",
  },
  {
    title: "Solana Bootcamp",
    description:
      "Watch a structured video series that walks through setup and day-one development workflows.",
    href: "/developers/bootcamp",
  },
  {
    title: "More Solana Developer Tools",
    description:
      "Browse docs, guides, cookbook recipes, tools, and ecosystem support channels.",
    href: "/developers",
  },
];

export default function CosmosMigrationPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
              Cosmos
            </p>
            <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
              Cosmos to Solana Migration Guides
            </h1>
            <p className="mt-4 max-w-3xl nd-body-l text-nd-mid-em-text">
              Choose a guide below to migrate to Solana.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Choose your guide.
            </h2>
            <div className="mt-10 grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
              {GUIDES.map((guide) => (
                <a
                  key={guide.title}
                  href={guide.href}
                  className="group bg-[#0C0C0E] p-8 transition-colors hover:bg-[#151518]"
                >
                  <h3 className="nd-heading-m text-nd-high-em-text">
                    {guide.title}
                  </h3>
                  <span className="mt-3 inline-flex text-sm text-white underline-offset-4 group-hover:underline">
                    {guide.description} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Resources for Solana Developers.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {RESOURCES.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="group border border-white/[0.08] p-6 transition-colors hover:bg-[#151518]"
                >
                  <h3 className="text-sm font-medium text-white group-hover:underline underline-offset-4">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-nd-mid-em-text">
                    {resource.description}
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
