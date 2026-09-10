import { Divider } from "@/app/components/solutions/Divider";

export const metadata = {
  title: "Solana Developer Platform | Solana",
  description:
    "Launch and scale financial products on Solana with enterprise-ready APIs. The institutional infrastructure for digital assets, built for compliant issuance, seamless payments, and efficient settlement.",
};

const ADVANTAGES = [
  {
    key: "accelerate",
    title: "Accelerate time to market",
    description:
      "Ship financial products in weeks, not months. SDP provides pre-built APIs and infrastructure so your team can focus on your product, not plumbing.",
  },
  {
    key: "ai",
    title: "Built for AI",
    description:
      "SDP works out of the box with AI coding tools like Claude Code and Codex, so your team can build faster with the tools they already know.",
  },
  {
    key: "institutions",
    title: "Designed for institutions",
    description:
      "Enterprise-grade security, compliance, and reliability. Built for the world's leading financial institutions.",
  },
];

const FEATURE_STEPS = [
  {
    key: "issuance",
    number: "1",
    title: "Issuance",
    description:
      "Launch GENIUS-compliant tokenized assets across deposits, stablecoins and RWAs with permissioning and privacy built-in.",
  },
  {
    key: "payments",
    number: "2",
    title: "Payments",
    description:
      "Orchestrate fiat and stablecoin flows — on-ramp, off-ramp, and onchain transactions across B2B, B2C, and P2P use cases.",
  },
  {
    key: "markets",
    number: "3",
    title: "Markets",
    subtitle: "Coming Soon",
    description:
      "Support settlement flows for tokenized assets, including atomic delivery-versus-payment, onchain FX, and more.",
  },
];

const TESTIMONIALS = [
  {
    key: "worldpay",
    quote:
      "By leveraging SDP's payments and issuance modules, Worldpay can offer merchants seamless access to onchain settlement and tokenized assets, paving the way for new business models and unlocking the full potential of digital assets in everyday commerce.",
    company: "Worldpay",
    logo: "https://solana.com/src/img/logos-eco/worldpay.svg",
    person: "Ahmed Zifzaf",
    role: "Head of Crypto Partnerships, Worldpay",
    profileImage: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fsdp%2Fprofile-wp.png&w=3840&q=75",
  },
  {
    key: "mastercard",
    quote:
      "As an early user of Solana Developer Platform, we're helping enable direct stablecoin settlement for customers on select blockchain networks — beginning with Solana — combining the speed and programmability of blockchain with the reliability, security and global reach of the Mastercard network.",
    company: "Mastercard",
    logo: "https://solana.com/src/img/logos-eco/mastercard.svg",
    person: "Raj Dhamodharan",
    role: "Executive Vice President, Blockchain & Digital Assets, Mastercard",
    profileImage: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fsdp%2Fprofile-mc.jpg&w=3840&q=75",
  },
  {
    key: "western-union",
    quote:
      "The Solana Developer Platform lets us extend what Western Union already does best—moving money reliably across borders—by adding an API-driven, on-chain layer that can orchestrate fiat and stablecoin flows end-to-end.",
    company: "Western Union",
    logo: "https://solana.com/src/img/logos-eco/western-union.v2.svg",
    person: "Malcolm Clarke",
    role: "VP Digital Assets, Western Union",
    profileImage: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Fsolutions%2Fsdp%2Fprofile-wu.png&w=3840&q=75",
  },
];

const TRUSTED_BY = [
  { name: "Mastercard", logo: "https://solana.com/src/img/logos-eco/mastercard.svg", use: "Stablecoin settlements" },
  { name: "Worldpay", logo: "https://solana.com/src/img/logos-eco/worldpay.svg", use: "Payments and settlement" },
  { name: "Western Union", logo: "https://solana.com/src/img/logos-eco/western-union.v2.svg", use: "Cross-border payments" },
];

const ECOSYSTEM_CATEGORIES = [
  {
    title: "Node / RPC",
    partners: [
      { name: "Helius", logo: "https://solana.com/src/img/logos-eco/helius.svg", url: "https://helius.dev" },
      { name: "Triton", logo: "https://solana.com/src/img/logos-eco/triton.svg", url: "https://triton.one" },
      { name: "Alchemy", logo: "https://solana.com/src/img/logos-eco/alchemy.svg", url: "https://alchemy.com" },
      { name: "QuickNode", logo: "https://solana.com/src/img/logos-eco/quicknode.svg", url: "https://quicknode.com" },
      { name: "Validation Cloud", logo: "https://solana.com/src/img/logos-eco/validation-cloud.svg", url: "https://validationcloud.io" },
    ],
  },
  {
    title: "Institutional custody",
    partners: [
      { name: "Paxos", logo: "https://solana.com/src/img/logos-eco/paxos.svg", url: "https://paxos.com" },
      { name: "BitGo", logo: "https://solana.com/src/img/logos-eco/bitgo.svg", url: "https://bitgo.com" },
      { name: "Coinbase", logo: "https://solana.com/src/img/logos-eco/coinbase.svg", url: "https://coinbase.com" },
      { name: "Privy", logo: "https://solana.com/src/img/logos-eco/privy.svg", url: "https://privy.io" },
      { name: "Para", logo: "https://solana.com/src/img/logos-eco/para.svg", url: "https://getpara.com" },
      { name: "Crossmint", logo: "https://solana.com/src/img/logos-eco/crossmint.svg", url: "https://crossmint.com" },
      { name: "Turnkey", logo: "https://solana.com/src/img/logos-eco/turnkey.svg", url: "https://turnkey.com" },
      { name: "Dfns", logo: "https://solana.com/src/img/logos-eco/dfns.svg", url: "https://dfns.co" },
      { name: "Anchorage Digital", logo: "https://solana.com/src/img/logos-eco/anchorage-digital.svg", url: "https://anchorage.com" },
      { name: "Dynamic", logo: "https://solana.com/src/img/logos-eco/dynamic.svg", url: "https://dynamic.xyz" },
      { name: "Fireblocks", logo: "https://solana.com/src/img/logos-eco/fireblocks.svg", url: "https://fireblocks.com" },
      { name: "Utila", logo: "https://solana.com/src/img/logos-eco/utila.png", url: "https://utila.io" },
      { name: "Cactus Custody", logo: "https://solana.com/src/img/logos-eco/cactus-custody.svg", url: "https://www.mycactus.com" },
    ],
  },
  {
    title: "Compliance",
    partners: [
      { name: "Range", logo: "https://solana.com/src/img/logos-eco/range.svg", url: "https://range.org" },
      { name: "Chainalysis", logo: "https://solana.com/src/img/logos-eco/chainalysis.svg", url: "https://chainalysis.com" },
      { name: "Elliptic", logo: "https://solana.com/src/img/logos-eco/elliptic.svg", url: "https://elliptic.co" },
      { name: "TRM", logo: "https://solana.com/src/img/logos-eco/trm.svg", url: "https://trmlabs.com" },
    ],
  },
  {
    title: "On / Off Ramps",
    partners: [
      { name: "Bridge", logo: "https://solana.com/src/img/logos-eco/bridge.svg", url: "https://bridge.xyz" },
      { name: "Modern Treasury", logo: "https://solana.com/src/img/logos-eco/modern-treasury.svg", url: "https://moderntreasury.com" },
      { name: "BVNK", logo: "https://solana.com/src/img/logos-eco/bvnk.svg", url: "https://bvnk.com" },
      { name: "Lightspark", logo: "https://solana.com/src/img/logos-eco/lightspark.svg", url: "https://lightspark.com" },
      { name: "MoonPay", logo: "https://solana.com/src/img/logos-eco/moonpay.svg", url: "https://moonpay.com" },
    ],
  },
];

const AI_FEATURES = [
  {
    key: "api",
    title: "Fully API driven",
    description: "Everything in SDP is accessible via APIs, making it easy to integrate with AI tools.",
  },
  {
    key: "skills",
    title: "Skills for AI agents",
    description: "Pre-built skills help AI agents work with SDP out of the box.",
  },
  {
    key: "docs",
    title: "AI-ready API documentation",
    description: "Documentation designed for both humans and AI coding tools.",
  },
];

const VIDEOS = [
  { key: "creating-wallets", title: "Creating Wallets and API Keys", duration: "5:04", thumbnail: "https://img.youtube.com/vi/LzWakjjmPdc/maxresdefault.jpg" },
  { key: "token-issuance", title: "Token Issuance", duration: "5:58", thumbnail: "https://img.youtube.com/vi/LzWakjjmPdc/maxresdefault.jpg" },
  { key: "onchain-payments", title: "Onchain Payments", duration: "2:51", thumbnail: "https://img.youtube.com/vi/LzWakjjmPdc/maxresdefault.jpg" },
];

const NEWS = [
  { key: "triton", title: "Triton x SDP: Bringing Solana to Institutional Finance", image: "https://solana.com/src/img/solutions/sdp/news/triton.jpg", url: "https://blog.triton.one/triton-x-solana-developer-platform-bringing-the-chain-to-institutional-finance/" },
  { key: "alchemy", title: "Alchemy Powers Solana Developer Platform", image: "https://solana.com/src/img/solutions/sdp/news/alchemy.png", url: "https://www.alchemy.com/blog/alchemy-powers-solana-developer-platform" },
  { key: "quicknode", title: "Quicknode Powers Solana Developer Platform for Enterprises", image: "https://solana.com/src/img/solutions/sdp/news/quicknode.png", url: "https://blog.quicknode.com/quicknode-solana-developer-platform-sdp/" },
  { key: "turnkey", title: "Turnkey selected as infrastructure partner for Solana Developer Platform", image: "https://solana.com/src/img/solutions/sdp/news/turnkey.png", url: "https://www.turnkey.com/blog/turnkey-solana-developer-platform" },
  { key: "crossmint", title: "Crossmint Joins Solana Developer Platform as Wallet and Payments Infrastructure", image: "https://solana.com/src/img/solutions/sdp/news/crossmint.png", url: "https://www.crossmint.com/announcement/crossmint-joins-solana-developer-platform" },
  { key: "para", title: "Introducing Solana Developer Platform: Built for Institutional-Grade Finance", image: "https://solana.com/src/img/solutions/sdp/news/para.png", url: "https://blog.getpara.com/solana-developer-platform/" },
];

export default function SdpPage() {
  return (
    <div className="docs-shell">
      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="absolute inset-0">
            <img
              src="https://solana.com/src/img/solutions/sdp/hero-bg.png"
              alt=""
              className="h-full w-full object-cover opacity-60"
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-5 py-24 md:px-8 md:py-32 xl:px-12 xl:py-40 min-h-[500px] md:min-h-[600px] xl:min-h-[700px] flex flex-col justify-end">
            <div className="max-w-[860px]">
              <h1 className="nd-heading-2xl text-nd-high-em-text">
                Launch and scale financial products on Solana with enterprise-ready APIs
              </h1>
              <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text">
                The institutional infrastructure for digital assets, built for compliant issuance, seamless payments, and efficient settlement from a single platform on Solana.
              </p>
              <div className="mt-8">
                <a
                  href="https://platform.solana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Join waitlist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision behind SDP - Logo marquee */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-10 md:px-8 md:py-16 xl:px-12">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text mb-6">
              Vision behind SDP
            </p>
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-marquee">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 shrink-0">
                    {["bridge", "modern-treasury", "bvnk", "lightspark", "moonpay", "range", "chainalysis", "elliptic", "trm", "paxos", "bitgo", "coinbase", "privy", "para", "crossmint", "turnkey", "dfns", "anchorage-digital", "dynamic", "fireblocks"].map((name) => (
                      <img
                        key={`${setIndex}-${name}`}
                        src={`https://solana.com/src/img/logos-eco/${name}.svg`}
                        alt={name}
                        className="h-8 w-auto opacity-50"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Build and launch advantages */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 md:py-24 xl:px-12 xl:py-32">
            <h2 className="nd-heading-l text-nd-high-em-text max-w-2xl">
              Build and launch financial products in weeks, not months.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADVANTAGES.map((adv) => (
                <div
                  key={adv.key}
                  className="border border-white/[0.08] bg-[#0C0C0E] p-6 md:p-8"
                >
                  <h3 className="nd-heading-s text-nd-high-em-text">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unified interface - Feature steps */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="p-5 md:p-8 xl:p-12">
              <h2 className="nd-heading-l text-nd-high-em-text">
                A single, unified interface to issue, move and settle tokenized assets
              </h2>
              <div className="mt-10 space-y-8">
                {FEATURE_STEPS.map((step) => (
                  <div key={step.key} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium text-nd-high-em-text">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="nd-heading-s text-nd-high-em-text">
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <p className="mt-1 text-xs font-medium text-nd-mid-em-text">
                          {step.subtitle}
                        </p>
                      )}
                      <p className="mt-2 text-sm leading-6 text-nd-mid-em-text">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden min-h-[300px] md:block">
              <img
                src="https://solana.com/src/img/solutions/sdp/advantages-visual-bg.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Build any financial product, without worrying about the infrastructure
            </h2>
            <p className="mt-4 max-w-2xl text-nd-mid-em-text">
              Whether you&apos;re issuing a stablecoin, orchestrating cross-border payments, or tokenizing real-world assets, SDP provides the most reliable APIs and infrastructure to make it happen.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.key}
                  className="border border-white/[0.08] bg-[#0C0C0E] p-6 md:p-8 flex flex-col"
                >
                  <p className="text-sm leading-6 text-nd-mid-em-text flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    <img
                      src={t.logo}
                      alt={t.company}
                      className="h-6 w-auto mb-3"
                    />
                    <div className="flex items-center gap-3">
                      <img
                        src={t.profileImage}
                        alt={t.person}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-nd-high-em-text">
                          {t.person}
                        </p>
                        <p className="text-xs text-nd-mid-em-text">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Trusted by */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Trusted by the world&apos;s leading financial institutions
            </h2>
            <p className="mt-4 max-w-2xl text-nd-mid-em-text">
              The biggest names in payments and finance are already building with SDP, alongside our vetted infrastructure partners powering the platform.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRUSTED_BY.map((t) => (
                <div
                  key={t.name}
                  className="border border-white/[0.08] bg-[#0C0C0E] p-6"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="h-8 w-auto mb-3"
                  />
                  <p className="text-sm font-medium text-nd-high-em-text">
                    {t.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Enterprise-grade ecosystem */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Enterprise-grade ecosystem
            </h2>
            <p className="mt-4 max-w-2xl text-nd-mid-em-text">
              Access the best of the Solana ecosystem with a unified experience
            </p>
            <div className="mt-10 space-y-10">
              {ECOSYSTEM_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <h3 className="text-sm font-medium text-nd-mid-em-text mb-4">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    {cat.partners.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block opacity-60 hover:opacity-100 transition-opacity"
                      >
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="h-8 w-auto"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* AI tools */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Build with the AI tools you already use
            </h2>
            <p className="mt-4 max-w-2xl text-nd-mid-em-text">
              SDP works out of the box with AI coding tools like Claude Code by Anthropic and Codex by OpenAI, so your team can build faster with the tools they already know.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {AI_FEATURES.map((feat) => (
                <div
                  key={feat.key}
                  className="border border-white/[0.08] bg-[#0C0C0E] p-6 md:p-8"
                >
                  <h3 className="nd-heading-s text-nd-high-em-text">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-nd-mid-em-text">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Get started in 10min - Videos */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Get started in 10min
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {VIDEOS.map((v) => (
                <div
                  key={v.key}
                  className="border border-white/[0.08] bg-[#0C0C0E] overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-nd-high-em-text">
                      {v.title}
                    </p>
                    <p className="text-xs text-nd-mid-em-text mt-1">
                      {v.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* News & updates */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              News &amp; updates
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {NEWS.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-white/[0.08] bg-[#0C0C0E] overflow-hidden transition-colors hover:border-white/20"
                >
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-nd-high-em-text group-hover:underline">
                      {item.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* CTA */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="absolute inset-0">
            <img
              src="https://solana.com/src/img/solutions/sdp/hero-bg.png"
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-5 py-24 md:px-8 md:py-32 xl:px-12 xl:py-40">
            <div className="max-w-[860px]">
              <h2 className="nd-heading-l text-nd-high-em-text">
                Build the next wave of finance on Solana
              </h2>
              <div className="mt-8">
                <a
                  href="https://platform.solana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Join waitlist
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
