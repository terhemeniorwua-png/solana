"use client";

const FOOTER_COLUMNS = [
  {
    title: "Use Product",
    links: ["Faucet", "Explorer", "Wallets", "Name Service", "Token Extensions", "dApp Store"],
  },
  {
    title: "Build",
    links: ["Documentation", "SDKs", "RPC Providers", "Developer Forum", "Status", "Network Monitor"],
  },
  {
    title: "Enterprise",
    links: ["Solutions", "Case Studies", "Partners", "Contact Sales", "Cloud Hosting"],
  },
  {
    title: "Products",
    links: ["Token Extensions", "Firedancer", "dApp Store", "Mobile Wallet Adapter"],
  },
  {
    title: "Ecosystem",
    links: ["Grants", "Events", "Blog", "Community", "Careers", "Press Kit"],
  },
  {
    title: "Company",
    links: ["About", "Team", "Investors", "Brand", "Community Guides"],
  },
];

const SOCIALS = [
  {
    name: "YouTube",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
      </svg>
    ),
  },
  {
    name: "X",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.369a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: "Reddit",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.906 8.874a1.257 1.257 0 00-.123.029 1.76 1.76 0 00-3.063-1.213 5.649 5.649 0 00-3.351-.105l-.605-1.846 1.172-.312c.09.21.14.433.15.66a1.76 1.76 0 002.134 1.73 1.762 1.762 0 00-1.63-2.58 1 1 0 00-.163.023l-.219-.059a.451.451 0 00-.105-.032l.688-1.77-2.2.586c-.17.045-.308.139-.386.263a.54.54 0 00-.106.383l.218.16a.48.48 0 01-.007.51l-.14.22a4.996 4.996 0 00-3.878.385c-1.047.63-1.757 1.684-1.954 2.95a2.15 2.15 0 00-.308-.061c-1.2-.247-2.29.19-2.607.91.21 1.977 2.664 3.22 5.08 2.578.325.712.778 1.337 1.28 1.843-.958 1.232-2.249 2.163-3.55 2.437-.732.154-1.7.04-2.538-.42l-.177 1.643c.95.47 2.07.508 2.833.457 1.646-.02 3.174-.75 4.437-1.842 1.263 1.09 2.79 1.822 4.436 1.842.768.05 1.883.013 2.834-.457l-.176-1.643c-.838.46-1.807.574-2.539.42-1.3-.274-2.59-1.204-3.549-2.437.502-.506.957-1.13 1.281-1.843 2.416.642 4.87-.6 5.08-2.578-.317-.72-1.407-1.157-2.607-.91zM10.34 12.669a1.448 1.448 0 01.711-.16c.063 0 .126.006.189.014a1.399 1.399 0 00.711.147 1.44 1.44 0 01.711-.147c.063-.008.125-.014.189-.014.247 0 .488.053.71.16 1.09-1.713-.521-2.338-1.22-2.58h-.04c-.03.007-.06.016-.089.026l-.24.466.245.429-.204.35-1.08-.752-.594-.005v.057c-.53.256-.94 1.248.19 2.095zm2.561 2.394c-.826.867-2.43.867-3.256 0-.236-.246-.043-.527.192-.281.654.685 2.218.685 2.872 0 .235-.246.428.035.192.281zm3.84.39a1.607 1.607 0 01-1.606 1.607 1.607 1.607 0 01-1.608-1.607 1.607 1.607 0 011.608-1.607 1.607 1.607 0 011.606 1.607zm-7.888-2.845a1.35 1.35 0 01-.271 2.682 1.35 1.35 0 01-.271-2.682zm4.042 4.532a.312.312 0 01.19.19.311.311 0 01-.19.19.311.311 0 01-.19-.19.312.312 0 01.19-.19zm.12 0a.233.233 0 00.142-.142.234.234 0 00-.142-.141.234.234 0 00-.142.141.232.232 0 00.142.142z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/[0.08] bg-[#000000]">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Top */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm text-[#A0A0A0] mb-4 font-medium">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 mb-10">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href="#"
              aria-label={social.name}
              className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#A0A0A0] hover:border-white/[0.15] hover:text-[#F5F5F5] transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded gradient-bg flex items-center justify-center text-black text-[10px] font-bold">
              N
            </div>
            <span className="text-xs text-[#A0A0A0]">
              © 2026 NexChain Foundation. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies", "Disclosures"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
