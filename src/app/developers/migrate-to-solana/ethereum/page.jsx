import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "EVM / Ethereum to Solana Migration Guide | Solana",
  description:
    "Learn about the key differences between the SVM and EVM development environments, and start building with Solana.",
};

const GUIDES = [
  {
    title: "A Complete Solana Guide for EVM Developers",
    href: "/developers/migrate-to-solana/complete-guide",
  },
  {
    title: "ERC20 for Solana Developers",
    href: "/developers/migrate-to-solana/erc20",
  },
  {
    title: "ERC721 for Solana Developers",
    href: "/developers/migrate-to-solana/erc721",
  },
  {
    title: "ERC4337 for Solana Developers",
    href: "/developers/migrate-to-solana/erc4337",
  },
  {
    title: "ERC3643 for Solana Developers",
    href: "/developers/migrate-to-solana/erc3643",
  },
  {
    title: "ERC4626 for Solana Developers",
    href: "/developers/migrate-to-solana/erc4626",
  },
  {
    title: "EIP-2612 for Solana Developers",
    href: "/developers/migrate-to-solana/eip2612",
  },
  {
    title: "Understanding Consensus",
    href: "/developers/migrate-to-solana/consensus",
  },
  {
    title: "Accounts",
    href: "/developers/migrate-to-solana/accounts",
  },
  {
    title: "Programs and Smart Contracts",
    href: "/developers/migrate-to-solana/smart-contracts",
  },
  {
    title: "Client Differences",
    href: "/developers/migrate-to-solana/client-differences",
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

export default function EthereumMigrationPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
              EVM / Ethereum
            </p>
            <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
              Understanding Solana for EVM developers
            </h1>
            <p className="mt-4 max-w-3xl nd-body-l text-nd-mid-em-text">
              Learn about the key differences between the SVM and EVM
              development environments, and start building with Solana.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/developers/migrate-to-solana/complete-guide"
                className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
              >
                Get Started
              </a>
              <a
                href="https://rareskills.io/solana-tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Try the Course
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Choose your guide.
            </h2>
            <div className="mt-10 grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
              {GUIDES.map((guide) => (
                <a
                  key={guide.title}
                  href={guide.href}
                  className="group bg-[#0C0C0E] p-6 transition-colors hover:bg-[#151518]"
                >
                  <h3 className="text-sm font-medium text-white group-hover:underline underline-offset-4">
                    {guide.title}
                  </h3>
                  <span className="mt-2 inline-flex text-sm text-nd-mid-em-text">
                    Read →
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
