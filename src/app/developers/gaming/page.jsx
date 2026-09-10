import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Gaming | Solana",
  description:
    "Build the games of the future at the speed of the internet. Solana's high throughput and low fees make it a perfect fit for your masterpiece.",
};

function FeatureItem({ title, description }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-nd-high-em-text">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-nd-mid-em-text">{description}</p>
    </div>
  );
}

export default function GamingPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="relative mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid min-h-[430px] xl:grid-cols-[minmax(0,1fr)_480px] xl:min-h-[560px]">
            <div className="relative z-10 flex flex-col justify-end px-5 py-14 md:px-8 md:py-20 xl:px-12 xl:py-24">
              <div className="max-w-[860px]">
                <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                  Gaming
                </p>
                <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
                  Web3 games. Web2 speeds.
                </h1>
                <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text md:mt-6">
                  Build the games of the future at the speed of the internet.
                  Solana&apos;s high throughput and low fees make it a perfect
                  fit for your masterpiece.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/developers"
                    className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                  >
                    Start Building
                  </a>
                  <a
                    href="mailto:games@solana.org"
                    className="inline-flex items-center justify-center rounded-none border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/40"
                  >
                    Reach out
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden overflow-hidden border-l border-white/[0.08] xl:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F41fd7d3ae9764ca9bb7244717136dcb8.png&w=1920&q=75"
                alt="Web3 games on Solana"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="p-5 md:p-8 xl:p-12 xl:border-r border-b md:border-b-0 border-white/[0.08]">
              <h2 className="nd-heading-m text-nd-high-em-text">
                Solana Games Kit
              </h2>
              <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                A collection of tools and services being developed in the Solana
                ecosystem to empower game developers and accelerate the
                development of amazing web3 games on Solana.
              </p>
              <a
                href="https://solanafoundation.notion.site/Solana-Games-Kit-10da2edd41264c78b4aa410fb6616c16"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-white underline-offset-4 hover:underline"
              >
                Check it out →
              </a>
            </div>
            <div className="p-5 md:p-8 xl:p-12">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F323f952777f7483990b734e901c6927a.png&w=3840&q=75"
                alt="Solana Games Kit"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Why Solana
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              Go bigger, faster, smarter.
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <FeatureItem
                title="A single state, by design"
                description="Solana is built for interoperability — it horizontally scales while maintaining a shared state. Connecting Solana and gaming communities is seamless."
              />
              <FeatureItem
                title="The fastest speeds"
                description="Solana comes to consensus and finality almost immediately — no long wait times like other blockchains."
              />
              <FeatureItem
                title="The lowest fees"
                description="Each transaction on Solana costs a fraction of a cent. Don't worry about fees slowing down the experience."
              />
              <FeatureItem
                title="Up your game"
                description="Build the metaverse with decentralized marketplaces, cross-game items, and fully-onchain elements."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="p-5 md:p-8 xl:p-12 xl:border-r border-b md:border-b-0 border-white/[0.08]">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                Solana in action
              </p>
              <h2 className="mt-4 nd-heading-m text-nd-high-em-text">
                Super fast. Super cheap. Super seamless.
              </h2>
              <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                Solana&apos;s blazing-fast speed and ultra-low fees are built to
                scale, so the ecosystem grows without sacrificing censorship
                resistance or security. See how Mini Royale: Nations uses the
                blockchain to create a unique open-economy multiplayer shooter.
              </p>
              <a
                href="https://miniroyale.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-white underline-offset-4 hover:underline"
              >
                Play Game →
              </a>
            </div>
            <div className="p-5 md:p-8 xl:p-12">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Ff74d67d0c2ad45c5b3003b37df3198ef.png&w=1200&q=75"
                alt="Mini Royale Nations"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="nd-heading-l text-nd-high-em-text">
                  Solana games
                </h2>
                <p className="mt-4 text-lg text-nd-mid-em-text">
                  Top games from the community
                </p>
              </div>
              <a
                href="https://solana.com/ecosystem/explore?categories=gaming"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white underline-offset-4 hover:underline"
              >
                View All →
              </a>
            </div>
            <div className="mt-12 border border-white/[0.08] bg-[#0C0C0E] p-8">
              <h3 className="nd-heading-s text-nd-high-em-text">Star Atlas</h3>
              <p className="mt-2 text-sm text-nd-mid-em-text">
                Space, the first frontier of the metaverse. Search for resources
                in a massive, futuristic, NFT-powered universe.
              </p>
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F27ad05629be4468b95da8aa1789aa165.png&w=1200&q=75"
                alt="Star Atlas"
                className="mt-4 w-full rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}