import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "AI on Solana | Build Open Intelligence | Solana",
  description:
    "Build the future of open intelligence on Solana. Develop agents, find compute, transact instantly, and source data - all at Solana scale.",
};

const ecosystemStories = [
  {
    name: "Inference.net",
    logo: "https://solana.com/src/img/logos-eco/inference.svg",
    desc: "Inference.net is a real-time AI inference marketplace matching spare GPU capacity with developers, processing over 1T inference tokens.",
    stat: "5000+",
    statLabel: "GPUs active across network",
  },
  {
    name: "Nous Research",
    logo: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flogos-eco%2Fnous-research.webp&w=3840&q=75",
    desc: "Nous Research is an open-source AI collective that trained the 15B-parameter Hermes 3 model on a decentralized network.",
  },
  {
    name: "Grass",
    logo: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flogos-eco%2Fgrass.webp&w=3840&q=75",
    desc: "Grass enables users to earn from unused internet bandwidth, powering AI development with a distributed web-scale network.",
  },
];

export default function AiPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 md:py-24 xl:px-12 xl:py-32">
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
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="p-5 md:p-8 xl:p-12">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                Why
              </p>
              <h2 className="mt-3 nd-heading-l text-nd-high-em-text">
                AI on Solana?
              </h2>
              <p className="mt-4 text-nd-mid-em-text">
                As AI continues to shape technology development, the need for
                open, permissionless systems becomes more meaningful. Solana
                provides the foundation for an ecosystem of open intelligence,
                enabling decentralized ownership, efficient resource allocation,
                and seamless value transfer of AI.
              </p>
            </div>
            <div className="relative hidden min-h-[300px] md:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fai%2Fwhat-is.webp&w=1200&q=75"
                alt="What is AI on Solana"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Explore the ecosystem &amp; impact
            </h2>
            <div className="mt-10 space-y-4">
              {ecosystemStories.map((story) => (
                <div
                  key={story.name}
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
          </div>
        </section>
      </div>
    </div>
  );
}