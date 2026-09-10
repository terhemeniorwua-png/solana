import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "RPC Infrastructure | Solana",
  description:
    "RPC requests are an application's gateway to the Solana cluster. Learn how to set up reliable RPC infrastructure.",
};

const freeProviders = [
  { network: "Testnet", providers: [{ name: "api.testnet.solana.com", href: "https://api.testnet.solana.com" }] },
  {
    network: "Devnet",
    providers: [
      { name: "api.devnet.solana.com", href: "https://api.devnet.solana.com" },
      { name: "Ankr", href: "https://rpc.ankr.com/solana_devnet" },
      { name: "Helius", href: "https://www.helius.dev/solana-rpc-nodes" },
      { name: "Quicknode", href: "https://www.quicknode.com/chains/sol" },
      { name: "Chainstack", href: "https://chainstack.com/build-better-with-solana/" },
    ],
  },
  {
    network: "Mainnet-beta",
    providers: [
      { name: "api.mainnet-beta.solana.com", href: "https://api.mainnet-beta.solana.com" },
      { name: "Syndica", href: "https://syndica.io/" },
      { name: "Ankr", href: "https://rpc.ankr.com/solana" },
      { name: "Helius", href: "https://www.helius.dev/solana-rpc-nodes" },
      { name: "Quicknode", href: "https://www.quicknode.com/chains/sol" },
      { name: "Chainstack", href: "https://chainstack.com/build-better-with-solana/" },
      { name: "Blockdaemon", href: "https://www.blockdaemon.com/protocols/solana" },
      { name: "GetBlock", href: "https://getblock.io/nodes/sol/" },
    ],
  },
];

const privateProviders = [
  { name: "Quicknode", href: "https://www.quicknode.com/chains/sol" },
  { name: "Triton / RPC Pool", href: "https://triton.one/" },
  { name: "Helius", href: "https://www.helius.dev/solana-rpc-nodes" },
  { name: "Syndica", href: "https://syndica.io/" },
  { name: "Chainstack", href: "https://chainstack.com/build-better-with-solana/" },
  { name: "Blockdaemon", href: "https://www.blockdaemon.com/protocols/solana" },
];

export default function RpcStandalonePage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h1 className="nd-heading-2xl text-nd-high-em-text">
              RPC Infrastructure
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              RPC requests are an application&apos;s gateway to the Solana
              cluster. The requests are serviced by aptly named RPC Nodes, which
              are typically dedicated to the task rather than participating in
              consensus. Poor RPC performance is no different from poor cluster
              performance.
            </p>
            <a
              href="/docs/rpc"
              className="mt-6 inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
            >
              Read Developer Docs
            </a>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">Free Services</h2>
            <p className="mt-4 max-w-3xl text-nd-mid-em-text">
              Several providers offer free RPC access to the public Solana
              clusters. These services are good for real-world testing, early
              demos, and small, private beta programs.
            </p>
            <div className="mt-8 space-y-8">
              {freeProviders.map((group) => (
                <div key={group.network}>
                  <h3 className="text-sm font-medium text-nd-high-em-text mb-3">
                    {group.network}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.providers.map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-none border border-white/20 px-3 py-1.5 text-xs text-white transition-colors hover:border-white/40"
                      >
                        {p.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Private Services
            </h2>
            <p className="mt-4 max-w-3xl text-nd-mid-em-text">
              To ensure users get a good experience, public facing applications
              need to secure their own private RPC access. This allows you to
              autoscale based on user demand, relax rate limits, and have peace
              of mind.
            </p>
            <div className="mt-8 grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
              {privateProviders.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#0C0C0E] p-6 transition-colors hover:bg-[#151518]"
                >
                  <h3 className="text-sm font-medium text-white group-hover:underline underline-offset-4">
                    {p.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}