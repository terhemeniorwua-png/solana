import { Hero } from "@/app/components/solutions/Hero";
import { WhatIsIt } from "@/app/components/solutions/WhatIsIt";
import { Products } from "@/app/components/solutions/Products";
import { Divider } from "@/app/components/solutions/Divider";
import { Decor } from "@/app/components/solutions/Decor";

export const metadata = {
  title: "Agent Registry | The Trust Layer for Autonomous AI Agents | Solana",
  description:
    "The trust layer for autonomous AI agents on Solana. Verifiable identity, portable reputation, and trust infrastructure.",
};

const HIGHLIGHT = "#14F195";

const ECOSYSTEM_LINKS = [
  {
    key: "8004org",
    title: "8004.org",
    description:
      "Official hub for the ERC-8004 Trustless Agents standard — documentation, specifications, and resources for the protocol powering cross-chain agent identity",
    href: "https://8004.org/",
    external: true,
  },
  {
    key: "8004scan",
    title: "8004 Scan",
    description:
      "Explorer for the 8004 ecosystem tracking registered agents, reputation signals, and validation records across networks",
    href: "https://8004scan.io/",
    external: true,
  },
  {
    key: "8004market",
    title: "8004 Market",
    description:
      "Marketplace for discovering and transacting with registered agents, powered by onchain identity and reputation scores",
    href: "https://8004market.io/",
    external: true,
  },
  {
    key: "sati",
    title: "SATI Dashboard",
    description:
      "Live dashboard for the Solana Agent Trust Infrastructure — browse registered agents, reputation scores, and attestations",
    href: "https://sati.cascade.fyi",
    external: true,
  },
];

const TOOLKIT_LINKS = [
  {
    key: "erc8004-spec",
    title: "ERC-8004 Spec",
    description:
      "The Trustless Agents standard — reference specification for cross-chain agent identity and reputation",
    href: "https://eips.ethereum.org/EIPS/eip-8004",
    external: true,
  },
  {
    key: "agent-registry-spec",
    title: "Agent Registry Spec",
    description:
      "Explore ERC-8004 agents on Solana — browse registrations, feedback, and agent metadata onchain",
    href: "https://8004.qnt.sh",
    external: true,
  },
  {
    key: "quickstart",
    title: "Quickstart",
    description:
      "Get up and running with the Agent Registry in minutes",
    href: "https://github.com/QuantuLabs/8004-solana-ts/blob/main/docs/QUICKSTART.md",
    external: true,
  },
];

export default function AgentRegistryPage() {
  return (
    <div className="docs-shell">
      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="max-w-[1440px] mx-auto flex flex-col relative min-h-[844px] md:min-h-[1080px] xl:min-h-[1200px] justify-between">
            <div className="px-[20px] md:px-[32px] xl:px-[40px] py-[64px] md:py-[112px] xl:py-[160px] max-w-5xl">
              <h1 className="m-0 font-brand font-medium leading-[1.1] md:leading-none text-[40px] md:text-[56px] xl:text-[88px] tracking-[-1.6px] md:tracking-[-2.24px] xl:tracking-[-3.52px]">
                Agent Registry
              </h1>
              <p className="text-[#ABABBA] text-lg md:text-2xl mt-[12px] xl:mt-[24px] mb-0 max-w-xl tracking-[-0.36px] md:tracking-[-0.48px] leading-[1.33]">
                The trust layer for autonomous AI agents on Solana.
              </p>
              <div className="mt-[32px] xl:mt-[64px]">
                <a
                  href="/agent-registry/what-is-agent-registry"
                  className="inline-flex items-center rounded-full bg-white text-black text-base md:text-lg px-5 py-3 font-medium hover:bg-white/90 transition-colors tracking-[-0.16px] md:tracking-[-0.18px]"
                >
                  What is the Agent Registry?
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row xl:pb-10">
              <div className="grid grid-cols-2 w-full xl:min-h-44 xl:grid-cols-3">
                <div className="p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 border-t border-white/15">
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none uppercase font-light">
                      0.009 SOL
                    </div>
                    <div className="mt-[6px] md:mt-[8px] text-[14px] md:text-[18px] font-medium leading-[1.42] md:leading-[1.44] xl:leading-[1.33]">
                      Register Agent (~$0.81)
                    </div>
                  </div>
                </div>
                <div className="p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 max-md:border-t border-white/15 border-l">
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none uppercase font-light">
                      0.00001 SOL
                    </div>
                    <div className="mt-[6px] md:mt-[8px] text-[14px] md:text-[18px] font-medium leading-[1.42] md:leading-[1.44] xl:leading-[1.33]">
                      Leave Feedback (~$0.001)
                    </div>
                  </div>
                </div>
                <div className="p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 max-md:border-t border-white/15 xl:border-l col-span-2 xl:col-span-1">
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none uppercase font-light">
                      0.00001 SOL
                    </div>
                    <div className="mt-[6px] md:mt-[8px] text-[14px] md:text-[18px] font-medium leading-[1.42] md:leading-[1.44] xl:leading-[1.33]">
                      Set Agent Wallet (~$0.001)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* What is Agent Registry */}
        <WhatIsIt
          titleLight="What is the"
          titleRest="Agent Registry?"
          description="The Agent Registry is an open, onchain protocol that gives AI agents a verifiable identity, portable reputation, and trust infrastructure. The Agent Registry brings identity, reputation, and validation registries natively to Solana. Interoperable with ERC-8004 on Ethereum, the registry ensures agents can build trust across chains."
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
          title="Agent Registry Toolkit"
          description="Everything you need to register, discover, and build with trusted agents on Solana."
          products={TOOLKIT_LINKS}
          highlightColor={HIGHLIGHT}
        />
      </div>
    </div>
  );
}
