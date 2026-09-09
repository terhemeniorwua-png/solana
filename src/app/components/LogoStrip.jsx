const LOGOS = [
  { name: "Western Union", src: "/img/logos-eco/western-union.svg", h: undefined },
  { name: "Visa", src: "/img/logos-eco/visa.svg", h: undefined },
  { name: "Worldpay", src: "/img/logos-eco/worldpay.svg", h: undefined },
  { name: "Circle", src: "/img/logos-eco/circle.svg", h: "80%" },
  { name: "PayPal", src: "/img/logos-eco/paypal.svg", h: undefined },
  { name: "Fiserv", src: "/img/logos-eco/fiserv.svg", h: undefined },
];

export default function LogoStrip() {
  return (
    <div className="relative w-full">
      <div className="flex whitespace-nowrap items-center scrollbar-hidden overflow-auto transform-gpu h-[73px] xl:h-[123px] gap-4 md:gap-3 xl:gap-4 justify-evenly max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 py-6 xl:py-11 mt-4 md:mt-6 xl:mt-8">
        {LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center relative md:mr-12 xl:mr-32 self-center h-full m-0 !mr-0 flex-shrink-0"
            style={logo.h ? { height: logo.h } : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="block h-full max-h-full max-w-none !w-auto"
            />
          </div>
        ))}
      </div>
      <div className="w-full pt-4">
        <hr className="border-nd-border-light border-t m-0 !opacity-100" />
      </div>
    </div>
  );
}