import { createElement } from "react";
import { ChevronRight } from "@boxicons/react/ChevronRight";

const SquareIcon = () => (
  <svg src="#" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 0V8H16V16H8V8H0V0H8Z" fill="currentColor" />
  </svg>
);

export function Products({
  title,
  description,
  products = [],
  highlightColor = "#fff",
  imageSrc,
  className,
}) {
  const oneColumn = Boolean(imageSrc);
  const contentCol = oneColumn ? "w-full xl:w-2/5" : "w-full";
  const headerCls = oneColumn
    ? "mb-[32px] xl:mb-[48px]"
    : "mb-[32px] xl:mb-[48px] xl:w-2/5";
  const ulCls = oneColumn
    ? "p-0 m-0 list-none divide-y-[1px] divide-white/10"
    : "p-0 m-0 list-none divide-y-[1px] divide-white/10 grid grid-cols-1 xl:grid-cols-2 max-md:gap-x-8 md:gap-x-16";

  return (
    <section
      className={`relative text-white text-left overflow-hidden ${className || ""}`}
    >
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[32px] xl:px-[40px] py-[64px] md:py-[112px] xl:py-[160px] flex flex-col xl:flex-row max-md:gap-8 md:gap-16">
        <div className={contentCol}>
          {(title || description) && (
            <div className={headerCls}>
              {title && (
                <h2 className="font-brand font-medium leading-[1.25] md:leading-[1.1] xl:leading-[1.125] text-[32px] md:text-[40px] xl:text-[64px] mb-0 tracking-[-1.28px] md:tracking-[-1.6px] xl:tracking-[-2.56px]">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-[#ABABBA] text-lg md:text-2xl max-xl:mt-2 xl:mt-5 mb-0 tracking-[-0.36px] md:tracking-[-0.48px] leading-[1.33]">
                  {description}
                </p>
              )}
            </div>
          )}
          <ul className={ulCls}>
            {products.map(({ key, title: itemTitle, description: itemDesc, href, eyebrowTag, external }, index) => {
              const opensNewTab = external !== false;
              const content = (
                <>
                  <div
                    className="mr-4 leading-4 md:leading-6 group-hover:text-[var(--highlight-color)]"
                    style={{ "--highlight-color": highlightColor }}
                  >
                    <SquareIcon />
                  </div>
                  <div className="grow">
                    {eyebrowTag && (
                      <p
                        className="text-sm font-medium mb-1 tracking-[-0.14px] leading-[1.4]"
                        style={{ color: highlightColor }}
                      >
                        {eyebrowTag}
                      </p>
                    )}
                    <p className="font-medium mb-0 text-base md:text-2xl tracking-[-0.36px] md:tracking-[-0.48px] leading-[1.5] md:leading-[1.33]">
                      {itemTitle}
                    </p>
                    <p className="text-[#ABABBA] mt-[2px] mb-0 text-base md:text-lg xl:text-xl tracking-[-0.16px] md:tracking-[-0.18px] xl:tracking-[-0.2px] leading-[1.5] md:leading-[1.77] xl:leading-[1.6]">
                      {itemDesc}
                    </p>
                  </div>
                  <div className="leading-4 md:leading-6">
                    {href ? (
                      <ChevronRight width={22} height={22} className="text-[#ABABBA] group-hover:text-white" aria-hidden="true" />
                    ) : null}
                  </div>
                </>
              );

              const liInner = href ? (
                <a
                  href={href}
                  target={opensNewTab ? "_blank" : undefined}
                  rel={opensNewTab ? "noopener noreferrer" : undefined}
                  className="group flex flex-row w-full p-[24px_0] xl:p-[24px_12px] text-inherit focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-xl"
                >
                  {content}
                </a>
              ) : (
                <div className="flex flex-row w-full p-[24px_0] xl:p-[24px_12px]">
                  {content}
                </div>
              );

              return (
                <li key={key} className={`p-0 ${!oneColumn && index === 1 ? "xl:!border-t-0" : ""}`}>
                  {liInner}
                </li>
              );
            })}
          </ul>
        </div>
        {imageSrc && (
          <div className="w-full xl:w-3/5">
            <img
              className="w-full max-w-full xl:max-w-[110%] h-auto object-contain xl:mb-[-60px]"
              src={imageSrc}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        )}
      </div>
    </section>
  );
}