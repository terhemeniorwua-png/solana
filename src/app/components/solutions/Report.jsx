import { ArrowToBottom } from "@boxicons/react/ArrowToBottom";

export function Report({ eyebrow, description, emailCta, emailHref }) {
  return (
    <section className="relative overflow-hidden bg-black text-white text-left">
      <div className="!absolute m-auto max-xl:top-2 max-xl:right-2 max-xl:bottom-2 max-xl:left-2 xl:top-10 xl:bottom-10 xl:right-10 xl:left-10" />
      <div className="py-[64px] md:py-[112px] xl:py-[160px] relative">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[32px] xl:px-[40px] mb-[32px] xl:mb-[48px]">
          <div className="flex flex-col md:flex-row items-stretch max-xl:gap-6 xl:gap-14">
            <div className="grow flex flex-col justify-between gap-4">
              <div>
                {eyebrow && (
                  <h3 className="font-brand font-medium leading-[1.25] md:leading-[1.1] xl:leading-[1.125] text-[32px] md:text-[40px] xl:text-[64px] m-0 max-w-xl tracking-[-1.28px] md:tracking-[-1.6px] xl:tracking-[-2.56px]">
                    {eyebrow}
                  </h3>
                )}
                {description && (
                  <p className="text-lg md:text-2xl text-white opacity-[0.64] max-md:mt-2 md:mt-6 mb-0 max-w-md tracking-[-0.36px] md:tracking-[-0.48px] leading-[1.33]">
                    {description}
                  </p>
                )}
              </div>
              <div>
                <button
                  type="button"
                  aria-label={emailCta}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 hover:bg-[#7b47ff]/90 h-11 rounded-full text-base md:text-lg px-5 bg-white text-black hover:!bg-white/90 tracking-[-0.16px] md:tracking-[-0.18px]"
                  onClick={() => {
                    window.location.href = emailHref;
                  }}
                >
                  <ArrowToBottom
                    aria-hidden="true"
                    className="-ml-2 p-1 !size-6 bg-black text-white rounded-full"
                  />
                  {emailCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}