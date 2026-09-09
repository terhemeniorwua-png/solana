"use client";

const INSTITUTIONS = [
  { name: "Meridian Capital", stat: "$12B", label: "Assets under management" },
  { name: "Aurora Bank", stat: "28", label: "Institutional products" },
  { name: "Vertex Fund", stat: "$4.5B", label: "Tokenized holdings" },
  { name: "Cobalt Trust", stat: "150K", label: "Active institutional wallets" },
  { name: "Onyx Exchange", stat: "99.99%", label: "Uptime guarantee" },
  { name: "Glacier Custody", stat: "38", label: "Countries served" },
];

const SECONDARY_LOGOS = ["Pinnacle", "Braid", "Halo", "Drift", "Northrow"];

export default function Institutions() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0a0a] border-t border-white/[0.08]">
      {/* Ambient blurred blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#9945FF]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#14F195]/8 blur-[100px]" />
        <div className="absolute top-1/2 left-3/4 w-[400px] h-[400px] rounded-full bg-[#9945FF]/5 blur-[100px]" />
        {/* TODO: Replace with actual licensed asset images */}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Built for institutions
            </h2>
            <p className="text-[#A0A0A0] max-w-xl">
              From custody to trading, enterprises rely on the network for
              speed, security, and scale.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Institution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INSTITUTIONS.map((inst) => (
            <div
              key={inst.name}
              className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="flex items-center gap-2 mb-8">
                {/* TODO: Replace with actual logo */}
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded bg-white/20" />
                </div>
                <span className="font-semibold text-[#F5F5F5]">{inst.name}</span>
              </div>
              <div className="text-4xl font-bold tracking-tight gradient-text font-mono">
                {inst.stat}
              </div>
              <div className="mt-2 text-sm text-[#A0A0A0]">{inst.label}</div>
            </div>
          ))}
        </div>

        {/* Secondary logo row */}
        <div className="flex items-center justify-between gap-8 flex-wrap opacity-40">
          {SECONDARY_LOGOS.map((name) => (
            <div key={name} className="flex items-center gap-2 h-8">
              {/* TODO: Replace with real logo */}
              <div className="w-4 h-4 rounded bg-white/25" />
              <span className="text-gray-400 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
