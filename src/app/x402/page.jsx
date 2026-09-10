import { Hero } from "@/app/components/solutions/Hero";
import { WhatIsIt } from "@/app/components/solutions/WhatIsIt";
import { Products } from "@/app/components/solutions/Products";
import { Divider } from "@/app/components/solutions/Divider";
import { Decor } from "@/app/components/solutions/Decor";

export const metadata = {
  title: "x402 on Solana | Internet-Native Payments for AI Agents | Solana",
  description:
    "Build with internet-native payments on Solana. x402 lets APIs and websites ask for payment before serving content.",
};

const HIGHLIGHT = "#14F195";

const ECOSYSTEM_LINKS = [
  {
    key: "x402org",
    title: "x402.org",
    description:
      "Homepage for x402 maintained by the x402 Foundation. Learn everything you need to know about x402 via the docs, Github, and other resources",
    href: "https://x402.org/",
    external: true,
  },
  {
    key: "corbits",
    title: "Corbits",
    description:
      "Platforms any API or data endpoint for pay-per-use via the x402 standard",
    href: "https://corbits.dev/",
    external: true,
  },
  {
    key: "payai",
    title: "PayAI",
    description:
      "Solana facilitator for x402 payments enabling microtransactions and an AI-agent marketplace to transact autonomously",
    href: "https://payai.network/",
    external: true,
  },
  {
    key: "x402scan",
    title: "x402scan",
    description:
      "Open-source explorer for the x402 ecosystem that tracks servers, transactions and resource usage across networks",
    href: "https://www.x402scan.com/",
    external: true,
  },
  {
    key: "t54",
    title: "T54",
    description:
      "Building the trust layer for agentic finance with solutions in identity, verification, and risk management",
    href: "https://t54.ai",
    external: true,
  },
  {
    key: "cdp-wallet",
    title: "CDP Wallet",
    description:
      "Embedded wallet solution built by the Coinbase Development Platform",
    href: "https://docs.cdp.coinbase.com/embedded-wallets/welcome",
    external: true,
  },
];

const TOOLKIT_LINKS = [
  {
    key: "x402-docs",
    title: "x402 Docs",
    description: "Gitbook Documentation for x402",
    href: "https://x402.gitbook.io/x402",
    external: true,
  },
  {
    key: "faremeter",
    title: "Faremeter",
    description: "OSS Framework for agentic payments",
    href: "https://docs.corbits.dev/quickstart",
    external: true,
  },
  {
    key: "payai-toolkit",
    title: "PayAI",
    description: "Sell services with x402",
    href: "https://docs.payai.network/x402/servers/introduction",
    external: true,
  },
  {
    key: "x402secure",
    title: "x402Secure",
    description: "SDK that adds secure layer on x402",
    href: "https://www.t54.ai/x402-secure",
    external: true,
  },
  {
    key: "privy",
    title: "Privy",
    description: "Build on x402 with Privy wallets",
    href: "https://x402.gitbook.io/x402/guides/mcp-server-with-x402",
    external: true,
  },
  {
    key: "mcp-x402",
    title: "MCP with x402",
    description: "Use x402 to payment-gate MCP Servers",
    href: "https://x402.gitbook.io/x402/guides/mcp-server-with-x402",
    external: true,
  },
  {
    key: "solana-templates",
    title: "Solana Templates",
    description: "Templates to get started building with x402 on Solana",
    href: "https://solana.com/developers/templates",
    external: true,
  },
];

export default function X402Page() {
  return (
    <div className="docs-shell">
      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="max-w-[1440px] mx-auto flex flex-col relative min-h-[844px] md:min-h-[1080px] xl:min-h-[1200px] justify-between">
            <div className="px-[20px] md:px-[32px] xl:px-[40px] py-[64px] md:py-[112px] xl:py-[160px] max-w-5xl">
              <h1 className="m-0 font-brand font-medium leading-[1.1] md:leading-none text-[40px] md:text-[56px] xl:text-[88px] tracking-[-1.6px] md:tracking-[-2.24px] xl:tracking-[-3.52px]">
                x402 on Solana
              </h1>
              <p className="text-[#ABABBA] text-lg md:text-2xl mt-[12px] xl:mt-[24px] mb-0 max-w-xl tracking-[-0.36px] md:tracking-[-0.48px] leading-[1.33]">
                Build with internet-native payments on Solana.
              </p>
              <div className="mt-[32px] xl:mt-[64px]">
                <a
                  href="/x402/what-is-x402"
                  className="inline-flex items-center rounded-full bg-white text-black text-base md:text-lg px-5 py-3 font-medium hover:bg-white/90 transition-colors tracking-[-0.16px] md:tracking-[-0.18px]"
                >
                  What is x402?
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row xl:pb-10">
              <div className="grid grid-cols-2 w-full xl:min-h-44 xl:grid-cols-3">
                <div className="p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 border-t border-white/15">
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none uppercase font-light">
                      37M+
                    </div>
                    <div className="mt-[6px] md:mt-[8px] text-[14px] md:text-[18px] font-medium leading-[1.42] md:leading-[1.44] xl:leading-[1.33]">
                      Transactions on Solana
                    </div>
                  </div>
                </div>
                <div className="p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 max-md:border-t border-white/15 border-l">
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none uppercase font-light">
                      20K+
                    </div>
                    <div className="mt-[6px] md:mt-[8px] text-[14px] md:text-[18px] font-medium leading-[1.42] md:leading-[1.44] xl:leading-[1.33]">
                      Buyers and Sellers
                    </div>
                  </div>
                </div>
                <div className="p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 max-md:border-t border-white/15 xl:border-l col-span-2 xl:col-span-1">
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none uppercase font-light">
                      70%
                    </div>
                    <div className="mt-[6px] md:mt-[8px] text-[14px] md:text-[18px] font-medium leading-[1.42] md:leading-[1.44] xl:leading-[1.33]">
                      Monthly Volume on Solana
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* What is x402 */}
        <WhatIsIt
          titleLight="What is"
          titleRest="x402?"
          description="x402 is an internet-native payments protocol incubated by the Coinbase Development Platform team. It allows any web service to charge for access to its APIs and content without requiring users to create accounts or manage subscriptions. Connect your agent to paid resources, build new ways to monetize your APIs, and discover new services on x402."
          imageSrc="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fdepin%2Fwhat-is.webp&w=1200&q=75"
        />

        <Divider />

        {/* Ecosystem */}
        <Products
          className="z-[1]"
          title="Ecosystem"
          description=""
          products={ECOSYSTEM_LINKS}
          highlightColor={HIGHLIGHT}
        />

        <Decor imageSrc="https://solana.com/src/img/solutions/icm/bg-1.webp" />

        {/* Toolkit */}
        <Products
          className="z-[1]"
          title="x402 Toolkit"
          description="Explore turnkey Solana products for x402."
          products={TOOLKIT_LINKS}
          highlightColor={HIGHLIGHT}
        />
      </div>
    </div>
  );
}
