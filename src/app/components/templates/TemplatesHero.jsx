export default function TemplatesHero() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
      <div className="grid min-h-[430px] xl:grid-cols-[minmax(0,1fr)_480px] xl:min-h-[560px]">
        <div className="relative z-10 flex flex-col justify-end px-5 py-14 md:px-8 md:py-20 xl:px-12 xl:py-24">
          <div className="max-w-[860px]">
            <h1 className="nd-heading-2xl text-nd-high-em-text">
              Solana Developer Templates
            </h1>
            <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text md:mt-6">
              Build faster with production-ready templates for dApps, DeFi
              protocols, NFT marketplaces, and more. Get started with
              battle-tested code patterns optimized for the Solana ecosystem.
            </p>
          </div>
        </div>
        <div className="relative hidden overflow-hidden border-l border-white/[0.08] xl:block">
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(202,159,245,0.14),transparent_48%)]"></div>
            <div className="absolute left-8 top-16 w-[72%] -rotate-3 border border-white/[0.08] bg-[#0C0C0E]/80 opacity-60 shadow-2xl">
              <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.08] px-3">
                <span className="size-1.5 rounded-full bg-white/20"></span>
                <span className="size-1.5 rounded-full bg-white/15"></span>
                <span className="size-1.5 rounded-full bg-white/10"></span>
              </div>
              <div className="relative aspect-[1200/630] overflow-hidden">
                <img
                  src="/assets/templates/nextjs.png"
                  alt="Preview of nextjs"
                  width="1200"
                  height="630"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="grid grid-cols-[1fr_72px] border-t border-white/[0.08]">
                <div className="space-y-2 px-4 py-4">
                  <div className="h-1.5 w-28 rounded-full bg-white/25"></div>
                  <div className="h-1.5 w-40 rounded-full bg-white/10"></div>
                </div>
                <div className="flex items-center justify-center border-l border-white/[0.08]">
                  <span className="size-7 rounded-full border border-white/20 bg-white/[0.06]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}