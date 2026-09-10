import Link from "next/link";
import { Hero } from "@/app/components/solutions/Hero";
import { WhatIsIt } from "@/app/components/solutions/WhatIsIt";
import { Products } from "@/app/components/solutions/Products";
import { Divider } from "@/app/components/solutions/Divider";
import { Decor } from "@/app/components/solutions/Decor";

export const metadata = {
  title: "Solana Products | Solana",
  description:
    "Explore APIs, data products, agent tools, payments, transaction links, commerce tools, and docs for building on Solana.",
};

const HIGHLIGHT = "#14F195";

const PLATFORM_CATEGORIES = [
  {
    key: "platform",
    title: "Platform",
    subtitle: "Financial product APIs",
    description:
      "Solana Developer Platform includes APIs for issuance, payments, and trading.",
    href: "/solutions/sdp",
  },
  {
    key: "agents",
    title: "Agents",
    subtitle: "Identity and skills",
    description:
      "Agent Registry and Skills help builders add identity, trust, and context.",
    href: "/agent-registry",
  },
  {
    key: "payments",
    title: "Payments",
    subtitle: "x402 and Solana Pay",
    description:
      "x402, Solana Pay, Commerce Kit, and Kora support checkout and web payments.",
    href: "/x402",
  },
  {
    key: "build",
    title: "Build",
    subtitle: "Data and docs",
    description:
      "Solana Data, Tokens API, developer docs, RPC providers, and guides help teams start building.",
    href: "/docs",
  },
];

const PRODUCT_MAP = [
  {
    key: "01",
    title: "Platform layer",
    description:
      "Solana Developer Platform, Solana Data, Tokens API, and RPC resources support financial, payment, and data-heavy products.",
  },
  {
    key: "02",
    title: "Agent layer",
    description:
      "x402, Agent Registry, Skills, and AI resources help agents use identity, trust, context, and payments.",
  },
  {
    key: "03",
    title: "Transaction layer",
    description:
      "Actions, blinks, Solana Pay, Commerce Kit, Kora, and token docs help create user-facing transaction flows.",
  },
];

const PRODUCT_PATHS = [
  {
    key: "01",
    eyebrow: "Platform APIs",
    title: "Build financial products with issuance and payment APIs.",
    description:
      "Start with Solana Developer Platform, then use the payment, token, and RPC docs.",
    links: "SDP / Payments docs / RPC providers",
    href: "/solutions/sdp",
  },
  {
    key: "02",
    eyebrow: "Agent products",
    title: "Build agents with identity, trust, and payments.",
    description:
      "Use Agent Registry for identity, Skills for context, and x402 for paid APIs and resources.",
    links: "Agent Registry / Skills / x402",
    href: "/agent-registry",
  },
  {
    key: "03",
    eyebrow: "User actions",
    title: "Create transaction links and checkout flows.",
    description:
      "Actions and blinks make transactions shareable. Solana Pay, Commerce Kit, and Kora support checkout.",
    links: "Actions and blinks / Solana Pay / Kora",
    href: "/solutions/actions",
  },
  {
    key: "04",
    eyebrow: "Data products",
    title: "Explore network data and token APIs.",
    description:
      "Use Solana Data for network metrics, Tokens API for market and token data, and Pay.sh for paid API workflows.",
    links: "Solana Data / Pay.sh / Tokens API",
    href: "/data",
  },
];

const PLATFORM_TOOLS = [
  {
    key: "sdp",
    title: "Solana Developer Platform",
    description: "APIs for financial products.",
    href: "/solutions/sdp",
  },
  {
    key: "x402",
    title: "x402",
    description: "Payment resources and ecosystem tools for the web.",
    href: "/x402",
  },
  {
    key: "agent-registry",
    title: "Agent Registry",
    description: "Onchain identity and trust tools for AI agents.",
    href: "/agent-registry",
  },
  {
    key: "skills",
    title: "Skills",
    description: "Ready-to-use information for AI agents building on Solana.",
    href: "/skills",
  },
  {
    key: "actions",
    title: "Actions and blinks",
    description: "Shareable transactions and app actions.",
    href: "/solutions/actions",
  },
  {
    key: "ai",
    title: "Agents and AI",
    description: "AI tools, agent kits, and examples.",
    href: "/solutions/ai",
  },
];

const DEV_TOOLS = [
  {
    key: "commerce-kit",
    title: "Commerce Kit",
    description: "Commerce tooling documentation.",
    href: "/docs/tools/commerce-kit",
  },
  {
    key: "kora",
    title: "Kora",
    description: "Tools for fee support and payment processing.",
    href: "/docs/tools/kora",
  },
  {
    key: "solana-pay",
    title: "Solana Pay",
    description: "Docs for Solana Pay and payment flows.",
    href: "/docs/tools/solana-pay",
  },
  {
    key: "rpc",
    title: "RPC providers",
    description: "RPC provider options for apps.",
    href: "/rpc",
  },
  {
    key: "payments-tooling",
    title: "Payments tooling",
    description: "Payment tools and ecosystem resources.",
    href: "/solutions/payments-tooling",
  },
  {
    key: "token-extensions",
    title: "Token Extensions",
    description: "Extra token features for mints and accounts.",
    href: "/solutions/token-extensions",
  },
  {
    key: "digital-assets",
    title: "Digital assets",
    description: "Digital asset product and tool resources.",
    href: "/solutions/digital-assets",
  },
];

const BUILD_WITH_PRODUCTS = [
  {
    key: "docs",
    title: "Docs",
    description: "Official Solana developer documentation.",
    href: "/docs",
  },
  {
    key: "payments-docs",
    title: "Payments docs",
    description: "Payment guides and production guidance.",
    href: "/docs/payments",
  },
  {
    key: "tokens-docs",
    title: "Tokens docs",
    description: "Token programs, extensions, and account basics.",
    href: "/docs/tokens",
  },
  {
    key: "rpc-docs",
    title: "RPC providers",
    description: "Public and private RPC provider options.",
    href: "/rpc",
  },
  {
    key: "dev-guides",
    title: "Developer guides",
    description: "Guides for building products and apps.",
    href: "/docs/tools",
  },
];

const DATA_PRODUCTS = [
  {
    key: "solana-data",
    title: "Solana Data",
    description: "Network, stablecoin, and DeFi metrics.",
    href: "/data",
  },
  {
    key: "paysh",
    title: "Pay.sh",
    description: "Pay-as-you-go API access for agents and command-line tools.",
    href: "https://pay.sh",
    external: true,
  },
  {
    key: "tokens-api",
    title: "Tokens API",
    description: "Token, price, and liquidity APIs for Solana applications.",
    href: "https://tokens.xyz",
    external: true,
  },
];

export default function ProductsPage() {
  return (
    <div className="docs-shell">
      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="max-w-[1440px] mx-auto px-5 py-16 md:px-8 md:py-24 xl:px-12 xl:py-32">
            <div className="max-w-[860px]">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text mb-3">
                Products
              </p>
              <h1 className="nd-heading-2xl text-nd-high-em-text">
                Find Solana products and tools for building
              </h1>
              <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text">
                Explore APIs, data products, agent tools, payments, transaction
                links, commerce tools, and docs for building on Solana.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/solutions/sdp"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Solana Developer Platform
                </a>
                <a
                  href="/agent-registry"
                  className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
                >
                  Explore agent tools
                </a>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Platform categories */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {PLATFORM_CATEGORIES.map((cat) => (
              <a
                key={cat.key}
                href={cat.href}
                className="group block border-b border-white/[0.08] p-5 md:p-8 xl:border-b-0 xl:border-r xl:last:border-r-0 transition-colors hover:bg-white/[0.03]"
              >
                <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                  {cat.title}
                </p>
                <h3 className="mt-3 nd-heading-s text-nd-high-em-text">
                  {cat.subtitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                  {cat.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured product */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="p-5 md:p-8 xl:p-12">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                Featured product
              </p>
              <h2 className="mt-3 nd-heading-l text-nd-high-em-text">
                Launch x402 payments on Solana
              </h2>
              <p className="mt-4 text-nd-mid-em-text">
                x402 lets APIs and websites ask for payment before serving
                content. Solana handles fast, low-cost settlement.
              </p>
              <div className="mt-8">
                <a
                  href="/x402"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Open x402
                </a>
              </div>
            </div>
            <div className="relative hidden min-h-[300px] md:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Findex%2Fperformance-bg.webp&w=1200&q=75"
                alt="x402 on Solana"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Product map */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text mb-3">
              Product map
            </p>
            <h2 className="nd-heading-l text-nd-high-em-text">
              A simple map of platform, agent, and payment tools.
            </h2>
            <p className="mt-4 max-w-2xl text-nd-mid-em-text">
              Start with platform APIs, data products, agent tools, or payment
              products, then use the docs to build.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCT_MAP.map((item) => (
                <div
                  key={item.key}
                  className="border border-white/[0.08] bg-[#0C0C0E] p-6 md:p-8"
                >
                  <span className="text-sm font-medium text-nd-mid-em-text">
                    {item.key}
                  </span>
                  <h3 className="mt-3 nd-heading-s text-nd-high-em-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product paths */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text mb-3">
              Product paths
            </p>
            <h2 className="nd-heading-l text-nd-high-em-text">
              Choose the toolset your team needs.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRODUCT_PATHS.map((path) => (
                <a
                  key={path.key}
                  href={path.href}
                  className="group block border border-white/[0.08] bg-[#0C0C0E] p-6 md:p-8 transition-colors hover:border-white/20"
                >
                  <span className="text-sm font-medium text-nd-mid-em-text">
                    {path.key}
                  </span>
                  <p className="mt-3 font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-highlight-green">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-2 nd-heading-s text-nd-high-em-text">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                    {path.description}
                  </p>
                  <p className="mt-4 text-xs text-nd-mid-em-text">
                    {path.links}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-nd-high-em-text group-hover:underline">
                    Open →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Product directory */}
        <Products
          className="z-[1]"
          title="Platforms and tools"
          description="Products for financial APIs, agents, AI tools, and transaction links."
          products={PLATFORM_TOOLS}
          highlightColor={HIGHLIGHT}
        />

        <Divider />

        <Products
          className="z-[1]"
          title="Developer and payment tools"
          description="Docs and payment tools for building real product flows."
          products={DEV_TOOLS}
          highlightColor={HIGHLIGHT}
        />

        <Divider />

        <Products
          className="z-[1]"
          title="Build with products"
          description="Starting points for developers ready to write code."
          products={BUILD_WITH_PRODUCTS}
          highlightColor={HIGHLIGHT}
        />

        <Divider />

        <Products
          className="z-[1]"
          title="Data and API products"
          description="Dashboards and API products for network, token, and paid resource workflows."
          products={DATA_PRODUCTS}
          highlightColor={HIGHLIGHT}
        />

        {/* CTA */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="relative px-5 py-16 md:px-8 md:py-24 xl:px-12 xl:py-32">
            <div className="max-w-[860px]">
              <h2 className="nd-heading-l text-nd-high-em-text">
                Start building on Solana
              </h2>
              <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text">
                Find the right products and tools for your team. Explore the docs
                to get started.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Read the docs
                </Link>
                <a
                  href="/products"
                  className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
                >
                  Browse products
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
