import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Token Extensions | Solana",
  description:
    "Permissioned tokens on a permissionless network. Get native support for enterprise features without third party tooling.",
};

const faqs = [
  {
    q: "What are token extensions?",
    a: "Token extensions are new token program-level features, enabled by the new open-source token minting program available on the Solana blockchain. Token extensions enable the next generation of features for digital assets and stablecoins on the Solana blockchain by imbuing the assets with a native set of rich features ranging from confidentiality to token-gated access to required metadata.",
  },
  {
    q: "How is this different from Token-2022?",
    a: "Token-2022 is the technical name and GitHub repository for the new SPL token program, as released by Solana Labs. Token extensions are what the new token standard enables — a list of new features and functions that can now function at the token program level.",
  },
  {
    q: "What are the benefits of using token extensions versus the legacy Solana token standard?",
    a: "Token extensions take the core functionality of tokens on Solana and imbue them with an entirely new, native set of features that open up a whole new set of use cases for digital assets. Examples include: confidential transfers, token-gated transfers, transfer fees, and required metadata.",
  },
];

export default function TokenExtensionsPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="relative mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid min-h-[430px] xl:grid-cols-[minmax(0,1fr)_480px] xl:min-h-[560px]">
            <div className="relative z-10 flex flex-col justify-end px-5 py-14 md:px-8 md:py-20 xl:px-12 xl:py-24">
              <div className="max-w-[860px]">
                <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
                  Token Extensions
                </p>
                <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
                  Permissioned tokens on a permissionless network
                </h1>
                <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text md:mt-6">
                  Get native support for enterprise features — without third
                  party tooling.
                </p>
                <p className="mt-4 max-w-[720px] text-nd-mid-em-text">
                  Token extensions unlock new business standards and use cases
                  on the Solana blockchain.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://solana.com/enterprise/contact-us"
                    className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                  >
                    Want to build? Get in touch.
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden overflow-hidden border-l border-white/[0.08] xl:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Ff51feece35094bfba4ab2931f16836c7.png&w=1920&q=75"
                alt="Token Extensions"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 space-y-px">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group border border-white/[0.08] bg-[#0C0C0E]"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-nd-high-em-text">
                    {faq.q}
                    <span className="ml-4 text-nd-mid-em-text transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-sm leading-6 text-nd-mid-em-text">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}