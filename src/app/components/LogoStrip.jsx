"use client";

const LOGOS = [
  { name: "Defi Protocol", width: "w-24" },
  { name: "CryptoVault", width: "w-28" },
  { name: "ChainLink Pro", width: "w-20" },
  { name: "TokenForge", width: "w-24" },
  { name: "Nexus Finance", width: "w-28" },
  { name: "BlockStream", width: "w-24" },
];

export default function LogoStrip() {
  return (
    <section className="py-16 border-y border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-center justify-between gap-8 flex-wrap">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
            >
              {/* TODO: Replace with actual logo SVGs/images */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-white/20" />
                <span className="text-sm font-semibold text-[#F5F5F5] whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
