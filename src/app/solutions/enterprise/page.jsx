// 'use client'
import { Hero } from "@/app/components/solutions/Hero";
import { WhatIsIt } from "@/app/components/solutions/WhatIsIt";
import { Products } from "@/app/components/solutions/Products";
import { Divider } from "@/app/components/solutions/Divider";
import { Decor } from "@/app/components/solutions/Decor";
import { Report } from "@/app/components/solutions/Report";
import { FlowIcon, ArrowsIcon, DiscountIcon } from "@/app/components/solutions/icons";

export const metadata = {
  title: "Partner Resources | Build on Solana",
  description:
    "Everything you need to build financial infrastructure on Solana. Technical guides, documentation, and resources for institutional partners.",
};

const HIGHLIGHT = "#14F195";

const SOLUTION_LINKS = [
  {
    key: "0",
    title: "Tokenization",
    description: "Tokenize any asset with institutional-grade compliance.",
    href: "/solutions/tokenization",
    external: true,
  },
  {
    key: "1",
    title: "Stablecoins",
    description: "Launch your own stablecoin with built-in compliance.",
    href: "/solutions/stablecoins",
    external: true,
  },
  {
    key: "2",
    title: "Institutional Payments",
    description: "Move money globally with near-zero fees.",
    href: "/solutions/institutional-payments",
    external: true,
  },
];

const TECHNICAL_GUIDES = [
  {
    key: "dvp",
    title: "Delivery vs Payment (DvP)",
    description:
      "Implement atomic settlement for securities using SPL Token 2022 extensions. Eliminate counterparty risk with simultaneous asset and payment transfer.",
    href: "/docs/tokenization/dvp",
    eyebrowTag: "Settlement",
  },
  {
    key: "nav-strikes",
    title: "NAV Strikes for Money Market Funds",
    description:
      "Multiple daily NAV strikes for fund subscriptions and redemptions with atomic settlement and institutional-grade compliance.",
    href: "/docs/tokenization/nav-strikes",
    eyebrowTag: "Fund Operations",
  },
  {
    key: "acl",
    title: "Permissioned Tokens with Token ACL",
    description:
      "Implement compliant, permissioned tokens using Token ACL and the ABL Gate Program. Enable allow/block lists without sacrificing user experience.",
    href: "/docs/tokenization/token-acl",
    eyebrowTag: "Compliance",
  },
];

const RESOURCES = [
  {
    key: "docs",
    title: "Documentation",
    description: "Comprehensive guides, tutorials, and API references.",
    href: "/docs",
    external: false,
  },
  {
    key: "spl",
    title: "Solana Program Documentation",
    description: "Official docs for Token-2022 and all Solana program interfaces.",
    href: "https://www.solana-program.com/docs",
    external: true,
  },
  {
    key: "token-extensions",
    title: "Token Extensions",
    description: "Deep dive into compliance and programmability features.",
    href: "/docs/tokens/extensions",
    external: false,
  },
  {
    key: "keychain",
    title: "Keychain — Secure Signing",
    description:
      "Unified signing across KMS, HSM, and institutional custody backends.",
    href: "/docs/tools/keychain",
    external: false,
  },
  {
    key: "grants",
    title: "Grants Program",
    description: "Funding support for building on Solana.",
    href: "https://solana.org/grants",
    external: true,
  },
];

export default function EnterprisePage() {
  return (
    <div id="enterprise-page" aria-labelledby="hero-title" className="bg-black">
      <Hero
        title="Build Financial Infrastructure on Solana"
        subtitle="The world's most performant blockchain for institutional-grade financial applications. From tokenization to settlement, Solana provides the infrastructure you need."
        stats={[
          { value: "65,000+", label: "Transactions per second", Icon: FlowIcon },
          { value: "400ms", label: "Block time", Icon: ArrowsIcon },
          { value: "$0.00025", label: "Average transaction fee", Icon: DiscountIcon },
        ]}
      />

      <Divider />

      <WhatIsIt
        titleLight="Why build on"
        titleRest="Solana?"
        description="Solana combines the speed, cost-efficiency, and reliability that financial institutions require. With native support for compliance features through Token Extensions, atomic settlement, and battle-tested infrastructure processing billions in daily volume, Solana is the platform of choice for the world's leading financial institutions."
        imageSrc="/src/img/solutions/icm/what-is.webp"
      />

      <Divider />

      <Products
        className="z-[1]"
        title="Solution Areas"
        description="Explore our comprehensive solutions for institutional use cases."
        products={SOLUTION_LINKS}
        highlightColor={HIGHLIGHT}
        imageSrc="/src/img/solutions/icm/toolkit.svg"
      />

      <Decor imageSrc="/src/img/solutions/icm/bg-1.webp" />

      <Products
        className="z-[1]"
        title="Technical Guides"
        description="In-depth implementation guides for common institutional use cases."
        products={TECHNICAL_GUIDES}
        highlightColor={HIGHLIGHT}
      />

      <Divider />

      <section className="relative bg-black text-white text-left font-brand">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[32px] xl:px-[40px] py-[64px] md:py-[112px] xl:py-[160px] flex flex-col xl:flex-row max-xl:gap-6 xl:gap-20">
          <div className="w-full xl:w-1/2">
            <h2 className="font-brand font-medium leading-none text-[32px] md:text-[40px] xl:text-[64px] mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-[#ABABBA] text-lg md:text-2xl mb-0 max-w-md tracking-[-0.36px] md:tracking-[-0.48px] leading-[1.33]">
              Common questions from institutional partners building on Solana.
            </p>
          </div>
          <div className="w-full xl:w-1/2 flex items-center">
            <a
              href="/solutions/enterprise/faq"
              className="group flex items-center justify-between gap-6 w-full border border-white/10 hover:border-[#14F195]/60 rounded-2xl px-6 py-8 no-underline transition-colors"
            >
              <div>
                <p className="font-brand font-medium text-white text-lg md:text-2xl mb-1">
                  Browse all 58 questions
                </p>
                <p className="text-[#ABABBA] text-base md:text-lg mb-0">
                  Chain migration, privacy, tokenized funds, payments, custody, and compliance.
                </p>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 w-10 h-10 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-200"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <Divider />

      <Products
        className="z-[1]"
        title="Developer Resources"
        description="Essential resources for building on Solana."
        products={RESOURCES}
        highlightColor={HIGHLIGHT}
      />

      <Divider hideOnDesktop />

      {/* <Report
        eyebrow="Have questions?"
        emailCta="Get in Touch"
        emailHref="mailto:enterprise@solana.org"
      /> */}
    </div>
  );
}