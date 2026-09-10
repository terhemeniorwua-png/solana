"use client";

import { useState } from "react";
import Link from "next/link";
import { Divider } from "@/app/components/solutions/Divider";

const PARTNER_LOGOS = [
  { name: "Access Protocol", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Ff24feae77403493d90609826fcf81437.png&w=256&q=75" },
  { name: "Backpack", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Fc92e6e303f804f47b0332b97d3607b26.png&w=256&q=75" },
  { name: "Genopets", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F52200d569bd648b1aaf51cee933dcb28.png&w=256&q=75" },
  { name: "Helium", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Fd9cf65c933fc45a081b25a4757e22d94.png&w=256&q=75" },
  { name: "Helius", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Fc90433134fba44418dec87e644e6568e.png&w=256&q=75" },
  { name: "Jupiter", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Fbcf8f3ef4068450b8a70dbebcdd56e4a.png&w=256&q=75" },
  { name: "Meteora", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Ffb3e0d3a36d4492fb61788f01bf428fe.png&w=256&q=75" },
  { name: "Phantom", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F1c6a92d5bc324859a61bdd6acb7185c4.png&w=256&q=75" },
  { name: "Sanctum", url: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F4f028f93c2584d0ea60b16a75400473d.png&w=256&q=75" },
];

const SURFACE_TYPES = [
  { title: "A link", image: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F4c8f1f0f555e4c1ca8f7d5f86ad13d5c.png&w=3840&q=75" },
  { title: "A QR Code", image: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Ffc09e2ce4b1a4059b22c144f1a071de4.png&w=3840&q=75" },
  { title: "A push notification", image: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F47161c34d2b04f25aca2961505231909.png&w=3840&q=75" },
  { title: "A messaging app", image: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F5cd936f2074b42a1913350cc8c97b9eb.png&w=3840&q=75" },
  { title: "A button", image: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F0bd981475b1848608afba5c49c3ca48a.png&w=3840&q=75" },
  { title: "Anywhere you can place a URL", image: "https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Ff873cab6d1d34e65be121662945e6976.png&w=3840&q=75" },
];

const FAQS = [
  {
    q: "What are Solana Actions and blockchain links (blinks)?",
    a: "Solana Actions are specification-compliant APIs that return transactions on the Solana blockchain to be previewed, signed, and sent across various contexts, including QR codes, buttons + widgets in mobile and desktop applications, and websites across the internet. Actions make it simple for developers to integrate the things you can do throughout the Solana ecosystem right into your environment, allowing you to perform blockchain transactions without needing to navigate away to a different app or webpage.\n\nBlockchain links – or blinks – turn any Solana Action into a shareable, metadata-rich link. Blinks allow Action-aware clients (browser extension wallets, bots) to display additional capabilities for the user. On a website, a blink might immediately trigger a transaction preview in a wallet without going to a decentralized app; in Discord, a bot might expand the blink into an interactive set of buttons. This pushes the ability to interact onchain to any web surface capable of displaying a URL.",
  },
  {
    q: "What is the difference between Actions and blinks?",
    a: "Actions are APIs that allow complex business logic (both on and off-chain) to be used to construct transaction messages that are previewed, signed, and sent by the client. Native buttons, QR codes, or URLs (blinks) can initiate an Action.\n\nBlinks are one way to interact with an Action. Blinks allow users to execute blockchain transactions directly from URLs, making decentralized applications accessible from any platform or device.",
  },
  {
    q: "How is Solana Pay different from Actions?",
    a: "Solana Pay transactions are now called Actions. Actions are not specific to payments – there are many other types of Actions, such as voting, staking, swapping, minting and more.\n\nThe goal with Actions is to apply the Solana Pay specification to many more use cases. By using the Solana Pay primitive as inspiration, Actions will change how users interact with blockchain in everyday environments.\n\nIn short, the Solana Pay spec isn't changing. But what you can do with Actions expands the scope from payments to anything you can do onchain.",
  },
  {
    q: "What are some examples of how Actions and blinks can be used?",
    a: "Some examples of Actions might include:\n\n- Staking SOL to help secure the Solana network, including liquid staking tokens\n- Allowing customers to pay at a retail store using a QR code scan\n- Token-gated minting experiences\n- Enabling e-commerce websites to accept cryptocurrency payments directly from product pages\n- Topping up a trading account before a margin call\n- Integrating blockchain functionality into gaming platforms for in-game asset purchases and trades\n\nSome examples of blinks might include:\n\n- Tipping content creators on social media without the need for complex wallet setups\n- Minting custom NFTs or participating in governance votes directly from URLs\n- Letting users vote on community policies via links in newsletters",
  },
  {
    q: "What are some key benefits of using Actions and blinks?",
    a: "Key benefits include:\n\n- Enhancing user experiences by bringing signable transactions to users where they already are.\n- Increasing accessibility to Web3 applications from any platform.\n- Eliminating the friction of many clicks on many websites to send an onchain transaction.\n- Simplifying the integration of onchain actions into existing platforms, websites, or applications for developers.",
  },
  {
    q: "How can developers integrate Actions and blinks into their applications?",
    a: "Developers create actions as standalone APIs that conform to the Solana Actions Specification, and then may link them to their existing site URLs using an actions.json file.\n\nBlinks are fully-qualified URLs. An actions.json file must be published at the root of the domain (e.g., solanapay.com/actions.json) in order to self-register as a blink.\n\nAs of launch, all three extensions (Phantom, Backpack, Dialect) will *only* unfurl registered (\"trusted\") Actions URLs on X. To enable this, developers must register their Actions in the Dialect Actions Registry.\n\nDevelopers can test the entire end-to-end flow, including what the blink will look like, on dial.to by inputting their Actions URL.",
  },
  {
    q: "Are Actions and blinks secure?",
    a: "Actions and blinks are similar to \"connecting\" your wallet to dApps - trust the sites you know and use, just as you trust the dApps you know and use.\n\nThe first time a wallet attempts to retrieve a transaction from an unknown API, users should be shown a familiar \"connect to site\" prompt. If the site domain has connected to the wallet in the past, the site domain is more likely to be trustworthy. As with dApps, Action transactions are always simulated prior to execution.\n\nNote: blinks are executed on a different origin (X, Reddit, etc.) than their Action, so some caution should be exercised.",
  },
  {
    q: "What happens if I click on a blink but don't have a blockchain wallet set up?",
    a: "Blinks are just regular links, with superpowers. If you don't have blink support through a wallet Chrome extension (like Phantom or Backpack), the underlying link will behave like links always do – it will take you to a website. That website is either:\n\n1. The existing website of the dApp you are engaging with, whether it be the swap page on Jupiter, an NFT collection on Tensor, or a DAO proposal. From that site you can then take action as you normally do.\n2. A kind of popup – or \"interstitial\" interface – for independent developers without a pre-existing website or app.",
  },
  {
    q: "What is Dialect's involvement in Actions and blinks?",
    a: "Dialect is building developer tooling that powers Actions, such as forkable, self-hosted interstitial signing sites, SDKs, and analytics for Actions APIs. Other teams are free to build tooling, as well.",
  },
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/[0.08] bg-[#0C0C0E]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-nd-high-em-text text-left"
      >
        {faq.q}
        <span className="ml-4 text-nd-mid-em-text transition-transform shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-4 text-sm leading-6 text-nd-mid-em-text whitespace-pre-line">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function ActionsPage() {
  return (
    <div className="docs-shell">
      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white text-left">
          <div className="max-w-[1440px] mx-auto px-5 py-16 md:px-8 md:py-24 xl:px-12 xl:py-32">
            <div className="max-w-[860px]">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text mb-3">
                Solana Actions
              </p>
              <h1 className="nd-heading-2xl text-nd-high-em-text">
                Bring Crypto to the People with Solana Actions and Blockchain Links
              </h1>
              <p className="mt-5 max-w-[720px] nd-body-l text-nd-mid-em-text font-medium">
                It&apos;s time to connect Solana to the entire internet.
              </p>
              <p className="mt-4 max-w-[720px] text-nd-mid-em-text">
                Traditional onchain transactions have been locked away in apps or complex interfaces, making it significantly harder for people to use crypto products. With Solana Actions and blockchain links, or blinks, transactions can open up to anywhere on the internet — no dApp required.
              </p>
              <div className="mt-8">
                <Link
                  href="/docs/tools/actions"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Start Building
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Featured Action - Blinks */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="p-5 md:p-8 xl:p-12">
              <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text mb-3">
                Featured Action
              </p>
              <h2 className="mt-3 nd-heading-l text-nd-high-em-text">
                Blockchain Links, or Blinks
              </h2>
              <p className="mt-4 text-nd-mid-em-text">
                Using Solana Actions, you can turn any transaction into a blockchain link that can be shared anywhere on the internet — no third party application required. Request a payment in a text message. Vote on governance in a chatroom. Buy an NFT on social media. It&apos;s all possible.
              </p>
            </div>
            <div className="relative hidden min-h-[300px] md:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2F9259fc4ba3594dcda2391ba6680446b7.png&w=1920&q=75"
                alt="Blinks"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* Meet users where they are */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Meet users where they are, with blinks.
            </h2>
            <p className="mt-4 max-w-2xl text-nd-mid-em-text">
              Make a donation with <strong className="text-white">Sphere</strong>. Purchase an NFT with <strong className="text-white">Tensor</strong>. Vote on proposals with <strong className="text-white">Realms</strong>.
            </p>
            <p className="mt-2 text-sm text-nd-mid-em-text">Plus more support from</p>
            <div className="mt-6 flex flex-wrap gap-6 items-center">
              {PARTNER_LOGOS.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 w-auto opacity-60"
                />
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Get Started with Dialect */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="grid md:grid-cols-2">
            <div className="p-5 md:p-8 xl:p-12">
              <h2 className="nd-heading-l text-nd-high-em-text">
                Get Started with Dialect
              </h2>
              <p className="mt-4 text-nd-mid-em-text">
                Build, test, and deploy blinks quickly with Dialect&apos;s suite of developer tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://dashboard.dialect.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
                >
                  Developer Dashboard
                </a>
                <a
                  href="https://docs.dialect.to/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
                >
                  Dialect Docs
                </a>
              </div>
            </div>
            <div className="relative hidden min-h-[300px] md:block">
              <img
                src="https://solana.com/_next/image?url=%2Fsrc%2Fimg%2Flandings%2Fassets_2Fce0c7323a97a4d91bd0baa7490ec9139_2Fb5f3fd2c0b4f4f9a9c22f71dba82560f.png&w=1200&q=75"
                alt="Dialect"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* Transaction surfaces */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="text-sm text-nd-mid-em-text mb-2">
              <em>Blockchain links are an interface. Solana Actions are the APIs to deliver transactions on many surfaces.</em>
            </p>
            <h2 className="nd-heading-l text-nd-high-em-text">
              With Solana Actions, request transactions with…
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {SURFACE_TYPES.map((surface) => (
                <div
                  key={surface.title}
                  className="border border-white/[0.08] bg-[#0C0C0E] overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={surface.image}
                      alt={surface.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-nd-high-em-text">
                      {surface.title}
                    </h3>
                    <a
                      href="https://dialect.to"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-nd-mid-em-text hover:text-white mt-1 inline-block"
                    >
                      More from Dialect
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Grant CTA */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24 text-center">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Got a big idea?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-nd-mid-em-text">
              Apply for a grant to help bring your idea for a Solana Action or blink integration to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://share.hsforms.com/1GE1hYdApQGaDiCgaiWMXHA5lohw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
              >
                Make a Proposal
              </a>
              <a
                href="https://earn.superteam.fun/grants/blink-grants/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Apply for Microgrant
              </a>
            </div>
          </div>
        </section>

        <Divider />

        {/* FAQ */}
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              More About Blinks and Solana Actions
            </h2>
            <p className="mt-2 font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
              FAQ
            </p>
            <div className="mt-10 space-y-px">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
