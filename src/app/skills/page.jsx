"use client";

import { useState } from "react";
import { Divider } from "@/app/components/solutions/Divider";

const TABS = [
  "All",
  "Reference",
  "Tooling",
  "Skill",
  "Tokens",
  "Payments",
  "Security",
  "Testing",
  "Programs",
  "DeFi",
  "Infrastructure",
];

const OFFICIAL_SKILLS = [
  {
    key: "common-errors",
    tag: "Reference",
    title: "Common Errors & Solutions",
    description:
      "Diagnose and fix common errors encountered when building on Solana, including GLIBC issues, Anchor version conflicts, and RPC errors.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/common-errors.md",
  },
  {
    key: "compatibility-matrix",
    tag: "Tooling",
    title: "Version Compatibility Matrix",
    description:
      "Reference table for matching Anchor, Solana CLI, Rust, and Node.js versions to avoid toolchain conflicts.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/compatibility-matrix.md",
  },
  {
    key: "runtime-concepts",
    tag: "Skill",
    title: "Solana Runtime Concepts",
    description:
      "How Solana's runtime actually works — rent as a deposit, Ed25519 keys and off-curve PDAs, entrypoint dispatch, on-chain cryptography, and the transaction wire format.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/concepts.md",
  },
  {
    key: "confidential-transfers",
    tag: "Tokens",
    title: "Confidential Transfers",
    description:
      "Implement private, encrypted token balances on Solana using the Token-2022 confidential transfers extension.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/confidential-transfers.md",
  },
  {
    key: "frontend-kit",
    tag: "Skill",
    title: "Frontend with Solana Kit",
    description:
      "Build React and Next.js Solana apps with a Kit plugin client, Wallet Standard connection via @solana/kit-plugin-wallet (+ its React hooks), and @solana/react client bindings.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/frontend.md",
  },
  {
    key: "idl-codegen",
    tag: "Tooling",
    title: "IDL & Client Code Generation",
    description:
      "Generate type-safe program clients from IDLs using Codama, eliminating hand-maintained serializers across languages.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/idl-codegen.md",
  },
  {
    key: "kit-web3-interop",
    tag: "Tooling",
    title: "Kit ↔ web3.js Interop",
    description:
      "How to handle legacy web3.js code — web3.js v3 (Kit internals, currently RC) is the migration target; defer migration mechanics to the official migration skill.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/kit-web3-interop.md",
  },
  {
    key: "payments",
    tag: "Payments",
    title: "Payments & Commerce",
    description:
      "Build checkout flows, payment buttons, and QR-based payment requests using Solana Pay conventions, Kit instruction builders, and Kora for gasless flows.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/payments.md",
  },
  {
    key: "resources",
    tag: "Reference",
    title: "Curated Resources",
    description:
      "Authoritative Solana learning platforms, documentation, tooling references, and community resources.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/resources.md",
  },
  {
    key: "rpc-quick-lookups",
    tag: "Skill",
    title: "rpc-quick-lookups",
    description: "",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/rpc-quick-lookups.md",
  },
  {
    key: "security",
    tag: "Security",
    title: "Security Checklist",
    description:
      "Program and client security checklist covering account validation, signer checks, and common attack vectors to review before deploying.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/security.md",
  },
  {
    key: "testing",
    tag: "Testing",
    title: "Testing Strategy",
    description:
      "A testing pyramid for Solana programs using LiteSVM and Mollusk for fast unit tests and Surfpool (CLI or embedded SDK) as the integration-testing centerpiece, with mainnet forking, cheatcodes, and CI patterns.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/testing.md",
  },
  {
    key: "transactions-v1",
    tag: "Skill",
    title: "Transaction v1 (SIMD-0385 / SIMD-0296)",
    description:
      "The v1 transaction format that raises the size limit to 4096 bytes — how to check activation status, read and index v1 transactions without breaking, and build and send them with @solana/kit 8 or the Rust 4.2 crates.",
    url: "https://github.com/solana-foundation/solana-dev-skill/blob/main/skills/solana-dev/references/transactions-v1.md",
  },
];

const COMMUNITY_SKILLS = [
  {
    key: "anchor-claude",
    tag: "Testing",
    source: "Third-party",
    title: "Solana Anchor Claude Skill",
    description:
      "End-to-end Solana development for Anchor and Solana Kit with modern code patterns and LiteSVM testing.",
    url: "https://github.com/quiknode-labs/solana-anchor-claude-skill/tree/8a865b8d590ea8d9121f8c73e6abf99679f73a6a",
  },
  {
    key: "solana-skills-plugin",
    tag: "Programs",
    source: "Third-party",
    title: "Solana Skills Plugin",
    description:
      "Solana skills covering program development, security auditing with vulnerability detection, and ZK compression.",
    url: "https://github.com/tenequm/skills/tree/bedc922b6301179fbc2772079692cd3d748762d2/skills/solana-development",
  },
  {
    key: "clawpump",
    tag: "DeFi",
    source: "Third-party",
    title: "ClawPump Skill",
    description:
      "AI agent skill for gasless and self-funded token launches on pump.fun with dynamic dev buys and trading fee revenue sharing.",
    url: "https://github.com/openclaw/skills/tree/d449f70d9e347694c47a95964ea6503dacd43c86/skills/tomi204/clawpump",
  },
  {
    key: "clawpump-arb",
    tag: "DeFi",
    source: "Third-party",
    title: "ClawPump Arbitrage Skill",
    description:
      "AI agent skill for multi-DEX arbitrage on Solana with quote aggregation and transaction bundle generation.",
    url: "https://github.com/openclaw/skills/tree/d449f70d9e347694c47a95964ea6503dacd43c86/skills/tomi204/clawpump",
  },
  {
    key: "dflow-phantom",
    tag: "DeFi",
    source: "Third-party",
    title: "DFlow Phantom Connect Skill",
    description:
      "Official DFlow + Phantom Connect skill for wallet-connected Solana apps with swaps and prediction market trading.",
    url: "https://github.com/DFlowProtocol/dflow_phantom-connect-skill/tree/a0a06f522b51893cbebe4f03597538093c668e4c",
  },
  {
    key: "dflow",
    tag: "DeFi",
    source: "Third-party",
    title: "DFlow Skill",
    description:
      "AI coding skill for DFlow trading protocol covering spot trading, prediction markets, and WebSocket streaming.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/dflow",
  },
  {
    key: "glam",
    tag: "DeFi",
    source: "Third-party",
    title: "GLAM Skill",
    description:
      "AI coding skill for GLAM Protocol covering Solana vault management, tokenized vaults, and DeFi integrations.",
    url: "https://github.com/glamsystems/glam-skill/tree/v1.0.0",
  },
  {
    key: "jupiter",
    tag: "DeFi",
    source: "Third-party",
    title: "Jupiter Skill",
    description:
      "AI coding skill for Jupiter covering Ultra swaps, limit orders, DCA, perpetuals, and lending.",
    url: "https://github.com/jup-ag/agent-skills/tree/35f50e9f00288cfddbbecc31c9e97d036df8541a/skills/integrating-jupiter",
  },
  {
    key: "kamino",
    tag: "DeFi",
    source: "Third-party",
    title: "Kamino Skill",
    description:
      "AI coding skill for Kamino Finance covering lending, borrowing, liquidity management, and leverage trading.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/kamino",
  },
  {
    key: "lulo",
    tag: "DeFi",
    source: "Third-party",
    title: "Lulo Skill",
    description:
      "AI coding skill for Lulo, Solana's lending aggregator routing deposits to highest-yielding protocols.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/lulo",
  },
  {
    key: "meteora",
    tag: "DeFi",
    source: "Third-party",
    title: "Meteora Skill",
    description:
      "AI coding skill for Meteora DeFi SDK covering liquidity pools, AMMs, bonding curves, and token launches.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/meteora",
  },
  {
    key: "octav",
    tag: "DeFi",
    source: "Third-party",
    title: "Octav API Skill",
    description:
      "AI coding skill for Octav API covering wallet portfolio tracking, transaction history, and DeFi positions.",
    url: "https://github.com/Octav-Labs/octav-api-skill/tree/eba042fdada917334dc40fb46ff3a05a4ffe8a0",
  },
  {
    key: "orca",
    tag: "DeFi",
    source: "Third-party",
    title: "Orca Skill",
    description:
      "AI coding skill for Orca Whirlpools concentrated liquidity AMM covering swaps and position management.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/orca",
  },
  {
    key: "pumpfun",
    tag: "DeFi",
    source: "Third-party",
    title: "PumpFun Skill",
    description:
      "AI coding skill for PumpFun Protocol covering token launches, bonding curves, and PumpSwap integrations.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/pumpfun",
  },
  {
    key: "ranger",
    tag: "DeFi",
    source: "Third-party",
    title: "Ranger Finance Skill",
    description:
      "AI coding skill for Ranger Finance, a Solana perps aggregator across Drift, Flash, and Jupiter.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/ranger-finance",
  },
  {
    key: "raydium",
    tag: "DeFi",
    source: "Third-party",
    title: "Raydium Skill",
    description:
      "AI coding skill for Raydium Protocol covering CLMM, CPMM, AMM pools, farming, and Trade API.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/raydium",
  },
  {
    key: "sanctum",
    tag: "DeFi",
    source: "Third-party",
    title: "Sanctum Skill",
    description:
      "AI coding skill for Sanctum covering liquid staking, LST swaps, and Infinity pool operations.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/sanctum",
  },
  {
    key: "pnp",
    tag: "DeFi",
    source: "Third-party",
    title: "PNP Markets Skill",
    description:
      "AI coding skill for PNP Protocol covering permissionless prediction markets with P2P betting and custom oracles.",
    url: "https://github.com/pnp-protocol/solana-skill/tree/54d164c1f1182a0674c9e57b24a82cf18e60e500",
  },
  {
    key: "magicblock",
    tag: "Infrastructure",
    source: "Third-party",
    title: "MagicBlock Dev Skill",
    description:
      "End-to-end MagicBlock development skill for Claude Code covering latency/privacy solutions and VRFs on Solana.",
    url: "https://github.com/magicblock-labs/magicblock-dev-skill/tree/5546320bff3e544825d9f678b5458057e1a653f3",
  },
  {
    key: "metaplex",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Metaplex Skill",
    description:
      "Official Metaplex development skill covering Core NFTs, Token Metadata, Bubblegum, and Candy Machine.",
    url: "https://github.com/metaplex-foundation/skill/tree/9e12103401d9813666da451babf433c8da647d16",
  },
  {
    key: "solana-game",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Solana Game Skill",
    description:
      "Claude Code skills for developing games on Solana using C#, React Native, and Magicblock's Unity SDK.",
    url: "https://github.com/solanabr/solana-game-skill/tree/762b3b28e62b4c6cabc01ae179d316958a852a07",
  },
  {
    key: "coingecko",
    tag: "Infrastructure",
    source: "Third-party",
    title: "CoinGecko Skill",
    description:
      "AI coding skill for CoinGecko Solana API covering token prices, DEX pool data, and market analytics.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/coingecko",
  },
  {
    key: "birdeye",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Birdeye Skill",
    description:
      "AI coding skill for Birdeye API covering real-time token prices, OHLCV charts, market discovery, wallet portfolio and P&L, trader intelligence, and live WebSocket streams.",
    url: "https://github.com/sendaifun/skills/tree/ff8d226b5a9961d5bed24c549631ba791dec529/skills/birdeye",
  },
  {
    key: "debridge",
    tag: "Infrastructure",
    source: "Third-party",
    title: "deBridge Skill",
    description:
      "AI coding skill for deBridge Protocol covering cross-chain bridges and token transfers between chains.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/debridge",
  },
  {
    key: "helius",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Helius Skill",
    description:
      "AI coding skill for Helius RPC infrastructure covering DAS API, Enhanced Transactions, and webhooks.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/helius",
  },
  {
    key: "light-protocol",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Light Protocol Skill",
    description:
      "AI coding skill for Light Protocol's ZK Compression covering rent-free compressed tokens and PDAs.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/light-protocol",
  },
  {
    key: "metaplex-community",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Metaplex Community Skill",
    description:
      "Community AI coding skill for Metaplex Protocol covering Core NFTs, Token Metadata, and Umi framework.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/metaplex",
  },
  {
    key: "pyth",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Pyth Skill",
    description:
      "AI coding skill for Pyth Network oracle covering real-time price feeds with confidence intervals.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/pyth",
  },
  {
    key: "quicknode",
    tag: "Infrastructure",
    source: "Third-party",
    title: "QuickNode Blockchain Skills",
    description:
      "AI coding skill for QuickNode infrastructure covering Solana RPC, Jupiter Swap API, and Yellowstone gRPC.",
    url: "https://github.com/quiknode-labs/blockchain-skills/tree/c18430c1aef4a19e88bb21d2947b5c6e9a153576",
  },
  {
    key: "solana-dev-rentfree",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Solana Dev Skill (Rent-Free)",
    description:
      "Solana development agent skills for Claude Code covering ZK programs and rent-free development.",
    url: "https://github.com/Lightprotocol/skills/tree/e149bdca6ce440fb5a3421ae684d553fbd21ba0d",
  },
  {
    key: "squads",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Squads Skill",
    description:
      "AI coding skill for Squads Protocol covering multisig wallets and account abstraction on Solana.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/squads",
  },
  {
    key: "switchboard",
    tag: "Infrastructure",
    source: "Third-party",
    title: "Switchboard Skill",
    description:
      "AI coding skill for Switchboard Oracle covering permissionless price feeds, VRF randomness, and streaming.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/switchboard",
  },
  {
    key: "solana-kit",
    tag: "Tooling",
    source: "Third-party",
    title: "Solana Kit Skill",
    description:
      "AI coding skill for @solana/kit, the modern zero-dependency JavaScript SDK from Anza.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/solana-kit",
  },
  {
    key: "solana-kit-migration",
    tag: "Tooling",
    source: "Third-party",
    title: "Solana Kit Migration Skill",
    description:
      "AI coding skill for migrating from @solana/web3.js v1.x to @solana/kit with API mappings.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/solana-kit-migration",
  },
  {
    key: "pinocchio",
    tag: "Tooling",
    source: "Third-party",
    title: "Pinocchio Skill",
    description:
      "AI coding skill for Pinocchio, a zero-dependency framework for high-performance Solana programs.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/pinocchio-development",
  },
  {
    key: "vulnhunter",
    tag: "Tooling",
    source: "Third-party",
    title: "VulnHunter Skill",
    description:
      "AI coding skill for security vulnerability detection and dangerous API hunting across Solana codebases.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/vulnhunter",
  },
  {
    key: "code-recon",
    tag: "Tooling",
    source: "Third-party",
    title: "Code Recon Skill",
    description:
      "AI coding skill for deep architectural analysis and security audits mapping trust boundaries.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/zz-code-recon",
  },
  {
    key: "surfpool",
    tag: "Tooling",
    source: "Third-party",
    title: "Surfpool Skill",
    description:
      "AI coding skill for Surfpool, a Solana development environment with mainnet forking and cheatcodes.",
    url: "https://github.com/sendaifun/skills/tree/72ef2aa814cca4662341bfcdc01cdc288e9bb502/skills/surfpool",
  },
];

function SkillCard({ skill }) {
  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/[0.08] bg-[#0C0C0E] p-6 transition-colors hover:border-white/20"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium px-2 py-0.5 rounded bg-white/10 text-nd-mid-em-text">
          {skill.tag}
        </span>
        {skill.source && (
          <span className="text-xs text-nd-mid-em-text">
            {skill.source}@ {skill.url.split("/tree/")[1]?.split("/")[0]?.slice(0, 7)}
          </span>
        )}
      </div>
      <h3 className="text-base font-medium text-nd-high-em-text group-hover:underline">
        {skill.title}
      </h3>
      {skill.description && (
        <p className="mt-2 text-sm leading-6 text-nd-mid-em-text">
          {skill.description}
        </p>
      )}
      <p className="mt-3 text-xs text-nd-mid-em-text">
        View on GitHub →
      </p>
    </a>
  );
}

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [mode, setMode] = useState("agent");

  const allSkills = [...OFFICIAL_SKILLS, ...COMMUNITY_SKILLS];
  const filteredSkills =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((s) => s.tag === activeTab);

  const officialFiltered =
    activeTab === "All"
      ? OFFICIAL_SKILLS
      : OFFICIAL_SKILLS.filter((s) => s.tag === activeTab);

  const communityFiltered =
    activeTab === "All"
      ? COMMUNITY_SKILLS
      : COMMUNITY_SKILLS.filter((s) => s.tag === activeTab);

  return (
    <div className="docs-shell">
      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="max-w-[1440px] mx-auto px-5 py-16 md:px-8 md:py-24 xl:px-12 xl:py-32">
            <div className="flex items-center gap-2 mb-3">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                Solana Skills
              </p>
              <span className="text-nd-mid-em-text">|</span>
              <p className="text-[11px] text-nd-mid-em-text">
                Developer tooling resources
              </p>
            </div>
            <h1 className="nd-heading-2xl text-nd-high-em-text">
              Agent Skills
            </h1>
            <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text">
              Pre-built skills you can drop into your AI agents to interact with
              Solana. Each skill gives your agent the context it needs to work
              with programs, tokens, tooling, and more.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-nd-mid-em-text">
                <span className={mode === "human" ? "text-white" : ""}>Human</span>
                <button
                  onClick={() => setMode(mode === "human" ? "agent" : "human")}
                  className="relative w-12 h-6 rounded-full bg-white/20 transition-colors"
                  aria-label="Toggle mode"
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      mode === "agent" ? "translate-x-6" : ""
                    }`}
                  />
                </button>
                <span className={mode === "agent" ? "text-white" : ""}>
                  Agent
                </span>
                {mode === "agent" && (
                  <a href="/SKILL.md" className="text-nd-mid-em-text hover:text-white">
                    (/SKILL.md)
                  </a>
                )}
              </div>
            </div>
            <div className="mt-6 bg-[#0C0C0E] border border-white/[0.08] rounded-lg px-4 py-3 font-mono text-sm text-nd-mid-em-text max-w-2xl">
              <span className="text-nd-mid-em-text">$</span>{" "}
              npx skills add https://github.com/solana-foundation/solana-dev-skill
            </div>
            <p className="mt-2 text-xs text-nd-mid-em-text">
              Installs Foundation-maintained skills only.
            </p>
          </div>
        </section>

        <Divider />

        {/* Tabs and skills */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-10 md:px-8 xl:px-12">
            {/* Tab bar */}
            <div className="flex flex-wrap gap-2 mb-8">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                    activeTab === tab
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-nd-mid-em-text border-white/20 hover:border-white/40"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Official Skills */}
            {officialFiltered.length > 0 && (
              <div className="mb-10">
                <h2 className="nd-heading-s text-nd-high-em-text mb-4">
                  Official Skills
                </h2>
                <p className="text-sm text-nd-mid-em-text mb-6">
                  Skills maintained by the Solana Foundation for Solana
                  development workflows.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {officialFiltered.map((skill) => (
                    <SkillCard key={skill.key} skill={skill} />
                  ))}
                </div>
              </div>
            )}

            {/* Community Skills */}
            {communityFiltered.length > 0 && (
              <div>
                <h2 className="nd-heading-s text-nd-high-em-text mb-2">
                  Community Skills
                </h2>
                <p className="text-sm text-nd-mid-em-text mb-6">
                  Skills built and maintained by the Solana community. The
                  resources listed here are community-contributed and are not
                  endorsed by the Solana Foundation. Always do your own research
                  (DYOR) before using any tool or resource.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {communityFiltered.map((skill) => (
                    <SkillCard key={skill.key} skill={skill} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
