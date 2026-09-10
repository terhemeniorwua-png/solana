import { Hero } from "@/app/components/solutions/Hero";
import { WhatIsIt } from "@/app/components/solutions/WhatIsIt";
import { Products } from "@/app/components/solutions/Products";
import { Divider } from "@/app/components/solutions/Divider";
import { Decor } from "@/app/components/solutions/Decor";

export const metadata = {
  title: "AI on Solana | Build Open Intelligence | Solana",
  description:
    "Build the future of open intelligence on Solana. Develop agents, find compute, transact instantly, and source data - all at Solana scale.",
};

const HIGHLIGHT = "#14F195";

const ECOSYSTEM_STORIES = [
  {
    key: "inference",
    name: "Inference.net",
    logo: "https://solana.com/src/img/logos-eco/inference.svg",
    desc: "Inference.net is a real-time AI inference marketplace matching spare GPU capacity with developers, processing over 1T inference tokens.",
    stat: "5000+",
    statLabel: "GPUs active across network",
  },
  {
    key: "nous",
    name: "Nous Research",
    logo: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flogos-eco%2Fnous-research.webp&w=3840&q=75",
    desc: "Nous Research is an open-source AI collective that trained the 15B-parameter Hermes 3 model on a decentralized network.",
  },
  {
    key: "grass",
    name: "Grass",
    logo: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flogos-eco%2Fgrass.webp&w=3840&q=75",
    desc: "Grass is a marketplace for web data collection fueling training needs for AI models.",
    stat: "2M+",
    statLabel: "Contributors earning from data sharing",
  },
  {
    key: "gradient",
    name: "Gradient",
    logo: "https://solana.com/src/img/logos-eco/gradient.svg",
    desc: "Gradient develops distributed protocols for inference, reinforcement learning, and world simulation, serving over 7M users.",
    stat: "700K+",
    statLabel: "Concurrent active nodes",
  },
  {
    key: "eliza",
    name: "Eliza",
    logo: "https://solana.com/src/img/logos-eco/elizaos.svg",
    desc: "Eliza is an agentic operating system connecting AI agents to Solana, with 200+ supported plugins.",
    stat: "16K+",
    statLabel: "Stars on GitHub",
  },
];

const MORE_ECOSYSTEM = [
  { name: "Nosana", logo: "https://solana.com/src/img/logos-eco/nosana.svg" },
  { name: "IO Net", logo: "https://solana.com/src/img/logos-eco/ionet.svg" },
  { name: "Render Network", logo: "https://solana.com/src/img/logos-eco/render.webp" },
  { name: "Synesis", logo: "https://solana.com/src/img/logos-eco/synesis.svg" },
  { name: "Crossmint", logo: "https://solana.com/src/img/logos-eco/crossmint.svg" },
  { name: "Public AI", logo: "https://solana.com/src/img/logos-eco/publicai.svg" },
  { name: "Unif AI", logo: "https://solana.com/src/img/logos-eco/unifai.svg" },
  { name: "Poof", logo: "https://solana.com/src/img/logos-eco/poof.webp" },
  { name: "Cambrian", logo: "https://solana.com/src/img/logos-eco/cambrian.webp" },
  { name: "Yupp", logo: "https://solana.com/src/img/logos-eco/yupp.webp" },
  { name: "Coral Protocol", logo: "https://solana.com/src/img/logos-eco/coral-protocol.webp" },
  { name: "Pin AI", logo: "https://solana.com/src/img/logos-eco/pinai.webp" },
];

const AI_TOOLKIT = [
  {
    key: "mcp",
    title: "Solana MCP",
    description: "Set up remote Solana Developer MCP in your IDE",
    href: "https://mcp.solana.com",
    external: true,
  },
  {
    key: "agent-kit",
    title: "Solana agent kit",
    description: "Connect any AI agent to Solana protocols",
    href: "https://github.com/sendaifun/solana-agent-kit",
    external: true,
  },
  {
    key: "payments",
    title: "Payments",
    description: "Build with agentic payments",
    href: "https://www.crossmint.com/solutions/ai-agents",
    external: true,
  },
];

const VIDEOS = [
  {
    key: "decentralized-intelligence",
    title: "Decentralized intelligence on Solana",
    speaker: "Dillon Rolnick, Nous Research",
    thumbnail: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fai%2Fvideos%2Fvideo1.webp&w=3840&q=75",
    type: "Podcast",
  },
  {
    key: "gpu-rendering",
    title: "GPU rendering at a fraction of the cost",
    speaker: "Jules Urbach & Trevor Harries Jones, Render CEO & COO",
    thumbnail: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fai%2Fvideos%2Fvideo2.webp&w=3840&q=75",
    type: "Podcast",
  },
];

export default function AiPage() {
  return (
    <div className="docs-shell">
      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="max-w-[1440px] mx-auto px-5 py-16 md:px-8 md:py-24 xl:px-12 xl:py-32">
            <div className="max-w-[860px]">
              <h1 className="nd-heading-2xl text-nd-high-em-text">
                AI at Solana scale.
              </h1>
              <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text">
                Build the future of open intelligence on Solana. Develop agents,
                find compute, transact instantly, and source data — all at Solana
                scale.
              </p>
              <div className="mt-8">
                <a
                  href="https://x.com/knimkar/status/1863719025500623344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Explore Solana AI
                </a>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Why AI on Solana */}
        <WhatIsIt
          titleLight="Why"
          titleRest="AI on Solana?"
          description="As AI continues to shape technology development, the need for open, permissionless systems become more meaningful. Solana provides the foundation for an ecosystem of open intelligence, enabling decentralized ownership, efficient resource allocation, and seamless value transfer of AI."
          imageSrc="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fai%2Fwhat-is.webp&w=1200&q=75"
        />

        <Divider />

        {/* Explore the ecosystem */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Explore the ecosystem &amp; impact
            </h2>
            <div className="mt-10 space-y-4">
              {ECOSYSTEM_STORIES.map((story) => (
                <div
                  key={story.key}
                  className="border border-white/[0.08] bg-[#0C0C0E] p-6 md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={story.logo}
                      alt={story.name}
                      className="h-10 w-10 rounded-full object-contain"
                    />
                    <h3 className="nd-heading-s text-nd-high-em-text">
                      {story.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-nd-mid-em-text">
                    {story.desc}
                  </p>
                  {story.stat && (
                    <div className="mt-6 border-t border-white/[0.08] pt-4">
                      <div className="nd-heading-m text-nd-high-em-text">
                        {story.stat}
                      </div>
                      <p className="mt-1 text-xs text-nd-mid-em-text">
                        {story.statLabel}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* More ecosystem logos */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              {MORE_ECOSYSTEM.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.logo}
                  alt={logo.name}
                  className="h-8 w-auto opacity-60"
                />
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* AI toolkit */}
        <Products
          className="z-[1]"
          title="AI toolkit"
          description="Solana has dozens of turnkey products for AI."
          products={AI_TOOLKIT}
          highlightColor={HIGHLIGHT}
        />

        <Decor imageSrc="https://solana.com/src/img/solutions/icm/bg-1.webp" />

        {/* Open intelligence at scale - Videos */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Open intelligence at scale
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {VIDEOS.map((video) => (
                <div
                  key={video.key}
                  className="border border-white/[0.08] bg-[#0C0C0E] overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-nd-mid-em-text mb-1">
                      {video.type}
                    </p>
                    <h3 className="text-sm font-medium text-nd-high-em-text">
                      {video.title}
                    </h3>
                    <p className="text-xs text-nd-mid-em-text mt-1">
                      {video.speaker}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
