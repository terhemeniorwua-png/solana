export function WhatIsIt({ titleLight, titleRest, description, imageSrc }) {
  return (
    <section className="relative bg-black text-white text-left">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[32px] xl:px-[40px] pt-[64px] md:pt-[112px] xl:pt-[160px] pb-5 md:pb-[32px] xl:pb-[40px]">
        <h2 className="font-brand font-medium text-[40px] md:text-[48px] xl:text-[80px] max-w-2xl mb-[32px] xl:mb-[64px] tracking-[-1.6px] md:tracking-[-1.92px] xl:tracking-[-3.2px] [&>span]:tracking-[-1.28px] md:[&>span]:tracking-[-1.6px] xl:[&>span]:tracking-[-2.56px] [&>span]:text-[32px] md:[&>span]:text-[40px] xl:[&>span]:text-[64px] [&>span]:leading-[1.25] md:[&>span]:leading-[1.1] xl:[&>span]:leading-[1.125]">
          <span className="font-light">
            {titleLight}
            <br />
          </span>
          {titleRest}
        </h2>
        <div className="flex flex-col xl:items-center xl:flex-row gap-8 xl:gap-16">
          <div className="w-[35%] max-xl:hidden">
            {imageSrc && (
              <div className="relative overflow-hidden rounded-xl translate-z-0">
                <img
                  className="w-full h-auto object-cover absolute top-[20%] left-[40%] mix-blend-overlay z-1"
                  src="/src/img/solutions/what-is-part.svg"
                  alt=""
                  width={395}
                  height={80}
                  loading="lazy"
                />
                <img
                  className="w-full h-auto object-cover absolute top-[60%] left-[40%] mix-blend-overlay z-1"
                  src="/src/img/solutions/what-is-part.svg"
                  alt=""
                  width={395}
                  height={80}
                  loading="lazy"
                />
                <img
                  className="w-full h-auto object-cover absolute top-[40%] -left-[15%] mix-blend-overlay z-1"
                  src="/src/img/solutions/what-is-part.svg"
                  alt=""
                  width={395}
                  height={80}
                  loading="lazy"
                />
                <img
                  className="w-full h-auto object-cover block"
                  src={imageSrc}
                  alt=""
                  width={600}
                  height={350}
                  loading="lazy"
                />
              </div>
            )}
          </div>
          <div className="relative w-full xl:w-3/5 max-w-2xl">
            <p className="text-xl md:text-[32px] mb-0 font-medium tracking-[-0.6px] md:tracking-[-0.96px] leading-[1.4] md:leading-[1.25]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}