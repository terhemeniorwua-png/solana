import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Solana Cookbook | Solana",
  description:
    "The Solana Cookbook is a developer resource that provides examples and references for building applications on Solana.",
};

const sections = [
  {
    title: "Development",
    guides: [
      { name: "How to Start a Local Validator", desc: "Set up and run a local Solana validator", client: "Solana CLI", href: "/docs/intro/installation/surfpool-cli-basics" },
      { name: "Connecting to a Solana Environment", desc: "Connect to different Solana networks", client: "JavaScript, Python", href: "#" },
      { name: "Getting Test SOL", desc: "Obtain SOL tokens for testing", client: "JavaScript, Python", href: "#" },
      { name: "Subscribing to Events", desc: "Listen to Solana program events", client: "JavaScript, Python", href: "#" },
    ],
  },
  {
    title: "Wallets",
    guides: [
      { name: "How to Create a Keypair", desc: "Generate new Solana keypairs", client: "JavaScript, Python", href: "#" },
      { name: "How to Restore a Keypair", desc: "Recover existing keypairs", client: "JavaScript, Python", href: "#" },
      { name: "How to Verify a Keypair", desc: "Validate keypair authenticity", client: "JavaScript, Python", href: "#" },
      { name: "How to Validate a Public Key", desc: "Check public key validity", client: "JavaScript, Python", href: "#" },
      { name: "How to Generate a Vanity Address", desc: "Create custom addresses", client: "Solana CLI", href: "#" },
      { name: "How to Sign and Verify a Message", desc: "Message signing and verification", client: "JavaScript, Python", href: "#" },
      { name: "How to Connect a Wallet with React", desc: "Integrate wallets in React apps", client: "React, JavaScript", href: "#" },
    ],
  },
  {
    title: "Transactions",
    guides: [
      { name: "How to Send SOL", desc: "Transfer SOL between accounts", client: "JavaScript, Python", href: "#" },
      { name: "How to Send Tokens", desc: "Transfer SPL tokens", client: "JavaScript, Python", href: "/docs/tokens/basics/transfer-tokens" },
      { name: "How to Calculate Transaction Cost", desc: "Estimate transaction fees", client: "JavaScript, Python", href: "#" },
      { name: "How to Add a Memo to a Transaction", desc: "Include memos in transactions", client: "JavaScript, Python", href: "#" },
      { name: "How to Add Priority Fees", desc: "Set transaction priorities", client: "JavaScript, Python", href: "#" },
      { name: "How to Optimize Compute Requested", desc: "Improve transaction efficiency", client: "JavaScript, Python", href: "#" },
      { name: "Offline Transactions", desc: "Handle offline operations", client: "JavaScript, Python", href: "#" },
    ],
  },
  {
    title: "Accounts",
    guides: [
      { name: "How to Create an Account", desc: "Create new Solana accounts", client: "JavaScript, Python", href: "#" },
      { name: "How to Calculate Account Creation Cost", desc: "Estimate account costs", client: "JavaScript, Python", href: "#" },
      { name: "How to Create a PDA's Account", desc: "Work with PDAs", client: "JavaScript, Rust", href: "/docs/core/pda" },
      { name: "How to Sign with a PDA's Account", desc: "PDA signing operations", client: "Rust", href: "/docs/core/cpi" },
      { name: "How to Close an Account", desc: "Remove accounts", client: "Rust", href: "/docs/core/accounts" },
      { name: "How to Get Account Balance", desc: "Check account balances", client: "JavaScript, Python", href: "#" },
    ],
  },
];

export default function CookbookPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h1 className="nd-heading-2xl text-nd-high-em-text">
              Solana Cookbook
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-nd-mid-em-text">
              The Solana Cookbook is a developer resource that provides examples
              and references for building applications on Solana. Each example
              and reference will focus on specific aspects of Solana development
              while providing additional details and usage examples.
            </p>
          </div>
        </section>

        {sections.map((section) => (
          <section
            key={section.title}
            className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x"
          >
            <div className="px-5 py-10 md:px-8 xl:px-12">
              <h2 className="nd-heading-m text-nd-high-em-text">
                {section.title}
              </h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08] text-left">
                      <th className="pb-3 pr-4 text-nd-mid-em-text font-medium">Guide</th>
                      <th className="pb-3 pr-4 text-nd-mid-em-text font-medium">Client</th>
                      <th className="pb-3 text-nd-mid-em-text font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.guides.map((g) => (
                      <tr key={g.name} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4">
                          <a
                            href={g.href}
                            className="text-white hover:underline underline-offset-4"
                          >
                            {g.name}
                          </a>
                        </td>
                        <td className="py-3 pr-4 text-nd-mid-em-text">{g.client}</td>
                        <td className="py-3 text-nd-mid-em-text">{g.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}