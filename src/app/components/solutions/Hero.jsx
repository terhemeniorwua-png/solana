export function Hero({ title, subtitle, stats = [], extraCta, extraCtaHref }) {
  const statsCount = stats.length;
  const hasStats = statsCount > 0;
  const gridCols =
    statsCount === 2 ? "xl:grid-cols-2" : statsCount === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4";

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black text-white text-left"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col relative min-h-[844px] md:min-h-[1080px] xl:min-h-[1200px] justify-between">
        <div className="px-[20px] md:px-[32px] xl:px-[40px] py-[64px] md:py-[112px] xl:py-[160px] max-w-5xl">
          <h1
            id="hero-title"
            className="m-0 font-brand font-medium leading-[1.1] md:leading-none text-[40px] md:text-[56px] xl:text-[88px] tracking-[-1.6px] md:tracking-[-2.24px] xl:tracking-[-3.52px]"
          >
            {title}
          </h1>
          <p className="text-[#ABABBA] text-lg md:text-2xl mt-[12px] xl:mt-[24px] mb-0 max-w-xl tracking-[-0.36px] md:tracking-[-0.48px] leading-[1.33]">
            {subtitle}
          </p>
          {extraCta && extraCtaHref && (
            <div className="mt-[32px] xl:mt-[64px]">
              <a
                href={extraCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={extraCta}
                className="inline-flex items-center rounded-full bg-white text-black text-base md:text-lg px-5 py-3 font-medium hover:bg-white/90 transition-colors tracking-[-0.16px] md:tracking-[-0.18px]"
              >
                {extraCta}
              </a>
            </div>
          )}
        </div>
        {hasStats && (
          <div className="w-full flex flex-col xl:flex-row xl:pb-10">
            <div className={`grid grid-cols-2 w-full xl:min-h-44 ${gridCols}`}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 max-xl:border-t border-white/15 ${
                    index % 2 ? "border-l" : ""
                  } ${index ? "xl:border-l" : ""}`}
                >
                  <div className="max-md:hidden">
                    {stat.Icon ? <stat.Icon /> : null}
                  </div>
                  <div>
                    <div className="text-[20px] xl:text-[40px] leading-none uppercase font-light">
                      {stat.value}
                    </div>
                    <div className="mt-[6px] md:mt-[8px] text-[14px] md:text-[18px] font-medium leading-[1.42] md:leading-[1.44] xl:leading-[1.33]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
              {statsCount % 2 !== 0 && (
                <div className="p-[16px] xl:p-[16px_24px] flex flex-col justify-between gap-4 max-xl:border-t border-white/15 xl:hidden border-l" aria-hidden="true" />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}