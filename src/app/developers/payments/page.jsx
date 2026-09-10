import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Decentralized payments at scale | Solana",
  description:
    "Solana's high throughput and low fees make it a perfect fit for merchants to accept stablecoin payments.",
};

function StatCard({ value, label }) {
  return (
    <div className="border border-white/[0.08] bg-[#0C0C0E] p-6">
      <div className="nd-heading-m text-nd-high-em-text">{value}</div>
      <p className="mt-2 text-sm text-nd-mid-em-text">{label}</p>
    </div>
  );
}

function ResourceCard({ title, description, href, gradient }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block border border-white/[0.08] p-6 transition-colors hover:bg-[#151518] bg-gradient-to-br ${gradient}`}
    >
      <h3 className="nd-heading-s text-nd-high-em-text">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-nd-mid-em-text line-clamp-2">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm text-white underline-offset-4 group-hover:underline">
        Learn more →
      </span>
    </a>
  );
}

function FeatureItem({ title, description }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-nd-high-em-text">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-nd-mid-em-text">{description}</p>
    </div>
  );
}

export default function PaymentsPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="relative mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid min-h-[430px] xl:grid-cols-[minmax(0,1fr)_480px] xl:min-h-[560px]">
            <div className="relative z-10 flex flex-col justify-end px-5 py-14 md:px-8 md:py-20 xl:px-12 xl:py-24">
              <div className="max-w-[860px]">
                <h1 className="nd-heading-2xl text-nd-high-em-text">
                  Decentralized payments at scale
                </h1>
                <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text md:mt-6">
                  Solana&apos;s high throughput and low fees make it a perfect fit
                  for merchants to accept stablecoin payments.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/solana-foundation/solana-pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                  >
                    Get Started
                  </a>
                  <a
                    href="https://solanapay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-none border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/40"
                  >
                    Learn More About Solana Pay
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden overflow-hidden border-l border-white/[0.08] xl:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Fa3d9b6b91e2645d7a071fc94210caf50.png&w=1920&q=75"
                alt="Decentralized payments at scale"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid grid-cols-1 gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <StatCard value="$695M+" label="USDC in circulation on Solana" />
            <StatCard value="280K" label="active daily accounts" />
            <StatCard value="$0.00025" label="avg transaction fee" />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Getting started
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              Ecosystem projects have provided reference implementations to get
              you started on Solana in record speed.
            </p>
          </div>
          <div className="grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <ResourceCard
              title="Developer docs"
              description="Getting started? Learn everything you need to know about payments on Solana in our developer docs."
              href="https://docs.solanapay.com/"
              gradient="from-blue-500/10 to-transparent"
            />
            <ResourceCard
              title="Solana Pay on Shopify"
              description="Instant, fee-free transactions are now available to millions of businesses with the Solana Pay app integration on Shopify."
              href="https://apps.shopify.com/solana-pay-helio"
              gradient="from-pink-500/10 to-transparent"
            />
            <ResourceCard
              title="Solana Pay brand guidelines"
              description="Implementing Solana Pay? Get the lowdown on the design and brand guidelines."
              href="https://solanapay.com/branding"
              gradient="from-purple-500/10 to-transparent"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Create the next generation of merchant payment and commerce rails
              built on Solana technology
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              The only solution for low cost, instant settlement for online and
              in-store payments.
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              <FeatureItem
                title="Eliminate fees"
                description="Stop paying interchange and other fees that erode top line revenue. Solana fees are a fraction of a cent."
              />
              <FeatureItem
                title="Incentivize your customers"
                description="Share the incremental value with customers with onchain rewards and loyalty offerings."
              />
              <FeatureItem
                title="Capture new revenue"
                description="Build new payment products and services that were not possible before."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}