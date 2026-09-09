"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

const X_PROFILE = "https://x.com/PIorwua12080";

const desktopQuery = () =>
  typeof window === "undefined"
    ? false
    : window.matchMedia("(min-width: 1280px)").matches;

const subscribeDesktop = (callback) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(min-width: 1280px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const DEFAULT_CATEGORY_ID = "ecosystem";

const CATEGORIES = {
  all: { id: "all", name: "All", color: "text-white", bg: "white" },
  defi: {
    id: "defi",
    name: "DeFi",
    color: "text-nd-highlight-lavendar",
    bg: "#CA9FF5",
  },
  institutions: {
    id: "institutions",
    name: "Institutions",
    color: "text-nd-highlight-green",
    bg: "#55E9AB",
  },
  consumer: {
    id: "consumer",
    name: "Consumer",
    color: "text-nd-highlight-lime",
    bg: "#CFF15E",
  },
  developers: {
    id: "developers",
    name: "Developers",
    color: "text-nd-highlight-orange",
    bg: "#F48252",
  },
  ecosystem: {
    id: "ecosystem",
    name: "Ecosystem",
    color: "text-nd-highlight-gold",
    bg: "#FFC526",
  },
};

const CATEGORY_ICONS = {
  all: [
    "m20,3H4c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM4,19V5h16v14s-16,0-16,0Z",
    "M13 8H18V10H13z",
    "M8 8.59 6.96 7.54 5.54 8.96 8 11.41 11.46 7.96 10.04 6.54 8 8.59z",
    "M13 14H18V16H13z",
    "M8 14.59 6.96 13.54 5.54 14.96 8 17.41 11.46 13.96 10.04 12.54 8 14.59z",
  ],
  defi: ["M13 8h2v12h-2zM9 4h2v16H9zM17 14h2v6h-2zM5 11h2v9H5z"],
  institutions: [
    "m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z",
    "M8 11h8v2H8zM8 15h8v2H8zM8 7h3v2H8z",
  ],
  consumer: [
    "M10.5 5 11.5 4.33 12.5 5 12.17 3.83 13 3.12 12 3 11.5 2 11 3 10 3.12 10.83 3.83 10.5 5z",
    "M20.33 13.67 19.5 12 18.67 13.67 17 13.88 18.39 15.06 17.83 17 19.5 15.89 21.17 17 20.61 15.06 22 13.88 20.33 13.67z",
    "M4.83 9 6.5 7.89 8.17 9 7.61 7.05 9 5.88 7.33 5.67 6.5 4 5.67 5.67 4 5.88 5.39 7.05 4.83 9z",
    "m18.71,2.29c-.39-.39-1.02-.39-1.41,0L2.29,17.29c-.39.39-.39,1.02,0,1.41l3,3c.2.2.45.29.71.29s.51-.1.71-.29l15-15c.39-.39.39-1.02,0-1.41l-3-3ZM6,19.59l-1.59-1.59,9.09-9.09,1.59,1.59-9.09,9.09Zm10.5-10.5l-1.59-1.59,3.09-3.09,1.59,1.59-3.09,3.09Z",
  ],
  developers: [
    "m16.71 16.71 4.7-4.71-4.7-4.71-1.42 1.42 3.3 3.29-3.3 3.29zM8.71 15.29 5.41 12l3.3-3.29-1.42-1.42L2.59 12l4.7 4.71zM14 3l-.98-.22-2 9-2 9L10 21l.98.22 2-9 2-9z",
  ],
  ecosystem: [
    "M19 3c-1.65 0-3 1.35-3 3 0 .5.14.97.35 1.38l-1.12 1.3c-.64-.43-1.41-.69-2.24-.69s-1.53.24-2.15.64l-2.2-1.65c.22-.45.35-.96.35-1.49 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5c.66 0 1.28-.2 1.81-.52l2.18 1.64c-.3.56-.49 1.2-.49 1.88 0 1 .38 1.9.99 2.6l-1.69 1.69.03.03c-.4-.2-.84-.32-1.32-.32-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.48-.12-.92-.32-1.32l.03.03 1.95-1.95c.42.15.87.25 1.34.25 2.21 0 4-1.79 4-4 0-.64-.17-1.24-.44-1.78l1.25-1.46c.36.16.76.25 1.19.25 1.65 0 3-1.35 3-3s-1.35-3-3-3ZM7 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M4 5.5C4 4.67 4.67 4 5.5 4S7 4.67 7 5.5 6.33 7 5.5 7 4 6.33 4 5.5m9 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1",
  ],
};

const NEWS = [
  {
    id: "institutions-stablewaves-remittances",
    index: 1,
    title: "Report: Stablecoins Are Reshaping Remittances",
    categoryId: "institutions",
  },
  {
    id: "ecosystem-robotic-vision",
    index: 2,
    title: "How BitRobot Crowdsources Real-World Data for Embodied AI",
    categoryId: "ecosystem",
  },
  {
    id: "consumer-cross-border-latam",
    index: 3,
    title: "Webinar Recap: Cross-Border Payments in Latin America",
    categoryId: "consumer",
  },
  {
    id: "institutions-token-supercycle",
    index: 4,
    title: "The Token Supercycle: Everything of Value is Becoming Programmable",
    categoryId: "institutions",
  },
  {
    id: "ecosystem-roundup-august-2026",
    index: 5,
    title: "Solana Ecosystem Roundup: August 2026",
    categoryId: "ecosystem",
  },
  {
    id: "developers-payment-channels",
    index: 6,
    title: "Payment Channels: 1 Million Payments Per Second",
    categoryId: "developers",
  },
  {
    id: "developers-rent-reduction-reclaim",
    index: 7,
    title: "How to Reclaim Excess SOL After Rent Reduction",
    categoryId: "developers",
  },
  {
    id: "developers-changelog-august-27",
    index: 8,
    title: "Solana Changelog: August 27, 2026",
    categoryId: "developers",
  },
  {
    id: "ecosystem-breakpoint-2026-london",
    index: 9,
    title: "The Token Supercycle Is Here: Breakpoint 2026 to London",
    categoryId: "ecosystem",
  },
  {
    id: "developers-changelog-august-20",
    index: 10,
    title: "Solana Changelog: August 20, 2026",
    categoryId: "developers",
  },
];

const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="w-3 h-3 -mt-0.5 mr-[7px]">
    <path fill="currentColor" d="m11.937 8.673-1.98 2.177a.46.46 0 0 1-.336.15H.23a.23.23 0 0 1-.127-.039.242.242 0 0 1-.043-.358l1.98-2.177a.46.46 0 0 1 .334-.15h9.391a.23.23 0 0 1 .128.037.23.23 0 0 1 .103.238.24.24 0 0 1-.06.122m-1.98-4.385a.46.46 0 0 0-.336-.15H.23a.23.23 0 0 0-.127.038.241.241 0 0 0-.043.358l1.98 2.178a.46.46 0 0 0 .334.15h9.391a.23.23 0 0 0 .126-.039.241.241 0 0 0 .042-.357zM.23 2.724h9.39a.45.45 0 0 0 .336-.15L11.937.397a.24.24 0 0 0 .061-.19.24.24 0 0 0-.104-.17.23.23 0 0 0-.128-.037h-9.39a.45.45 0 0 0-.336.15L.061 2.327a.24.24 0 0 0-.042.255.24.24 0 0 0 .085.103.23.23 0 0 0 .126.039" />
  </svg>
);

function CategoryIcon({ id, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
      {CATEGORY_ICONS[id].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const PAGINATION_SIZE = 5;

export default function NewsCarousel() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [inView, setInView] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const containerRef = useRef(null);
  const isDesktop = useSyncExternalStore(subscribeDesktop, desktopQuery, () => false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!firstRender || !inView) return;
    const timer = setTimeout(() => setFirstRender(false), 10000);
    return () => clearTimeout(timer);
  }, [firstRender, inView]);

  const filtered =
    activeCategory === "all"
      ? NEWS
      : NEWS.filter((item) => item.categoryId === activeCategory);

  const totalItems = filtered.length;

  const paginate = (items) =>
    isDesktop
      ? items
      : page === 1
        ? items.filter((_, index) => index < PAGINATION_SIZE)
        : items.filter((_, index) => index >= PAGINATION_SIZE);

  const visible = paginate(filtered);

  const selectCategory = (id) => {
    if (id === activeCategory) return;
    setActiveCategory(id);
    setPage(1);
    setFirstRender(false);
  };

  const itemContent = (item) => {
    const category = CATEGORIES[item.categoryId] || CATEGORIES[DEFAULT_CATEGORY_ID];
    return (
      <>
        <div className="shrink-0 grow-0 xl:w-16 flex xl:hidden items-start xl:items-center justify-center">
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-nd-border-light">
            <span className="nd-body-s text-nd-mid-em-text pt-[1px]">{item.index}</span>
          </div>
        </div>
        <div className="w-auto grow xl:px-5 flex items-center justify-start min-w-0 xl:!border-l-0">
          <div className="xl:text-ellipsis xl:text-nowrap overflow-hidden max-w-full nd-body-l leading-[1.5]">
            {item.title}
          </div>
        </div>
        <div className="shrink-0 grow-0 px-5 hidden xl:flex items-center justify-start w-[180px]">
          <CategoryIcon
            id={category.id}
            className={`w-4 h-4 mr-2.5 -mt-0.5 ${category.color}`}
          />
          <span className="font-brand-mono font-medium text-[14px] leading-[1.42] uppercase">
            {category.name}
          </span>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="w-full">
        <hr className="border-nd-border-light border-t m-0 !opacity-100" />
      </div>
      <section className="relative overflow-hidden bg-nd-inverse text-nd-high-em-text text-left m-0">
        <div className="py-10">
          <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 flex flex-col justify-between relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="xl:max-w-[70%] grow-0">
                <h2 className="nd-heading-l">
                  What&rsquo;s happening <br />
                  <span className="font-light">right now</span>
                </h2>
              </div>
              <div>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 rounded-full border-[1px] border-nd-border-prominent not-hover:bg-transparent hover:bg-nd-border-prominent px-6 h-12 w-auto nd-body-m text-inherit"
                  href="/news"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View all
                </a>
              </div>
            </div>
          </div>

          <div
            ref={containerRef}
            className="border-t border-b border-nd-border-light mt-10 xl:mt-16"
          >
            <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10">
              <div className="xl:border-l xl:border-r border-nd-border-light -mx-5 md:-mx-8 xl:mx-0 divide-x divide-nd-border-light flex flex-col xl:flex-row">
                {/* -------- Left: categories -------- */}
                <div className="xl:w-[220px] border-b xl:border-b-0 border-nd-border-light shrink-0 mb-2 xl:mb-0 overflow-hidden relative">
                  <div
                    className={`h-16 px-6 items-center justify-between flex gap-3 border-b xl:border-b-0 border-nd-border-light mb-2 xl:mb-0 ${
                      inView ? "animate-curtain-left-to-right" : ""
                    }`}
                    style={inView ? { animationDelay: "0s" } : { opacity: 0 }}
                  >
                    <span className="font-brand-mono text-[14px] leading-[1.14] font-bold uppercase flex items-center">
                      <TerminalIcon />
                      TERMINAL
                    </span>
                    <div className="flex gap-1">
                      <div className="terminal-loader animate" />
                    </div>
                  </div>
                  <div
                    className={`h-48 p-6 items-end justify-start hidden xl:flex border-t border-nd-border-light ${
                      inView ? "animate-curtain-left-to-right" : ""
                    }`}
                    style={inView ? { animationDelay: "0.2s" } : { opacity: 0 }}
                  >
                    <span className="text-[28px] leading-[1.14] font-medium">
                      <span className="text-nd-mid-em-text">
                        Explore<br />
                      </span>{" "}
                      Categories
                    </span>
                  </div>
                  <div className="xl:divide-y xl:divide-nd-border-light grid grid-cols-3 xl:grid-cols-1 mr-[-1px] mb-[-1px] xl:mr-0 xl:mb-0 border-t xl:border-t-0 border-nd-border-light">
                    <div className="hidden xl:block h-0 xl:mb-[-1px]" />
                    {Object.keys(CATEGORIES).map((id, index) => {
                      const cat = CATEGORIES[id];
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => selectCategory(cat.id)}
                          disabled={isActive}
                          className={`p-3 xl:px-5 flex flex-col xl:flex-row items-start xl:items-center justify-start gap-2.5 w-full xl:min-h-16 hover:bg-nd-border-light/20 relative border-r border-b border-nd-border-light xl:border-b-0 xl:border-r-0 ${
                            isActive
                              ? "!bg-nd-primary !text-nd-inverse xl:before:absolute xl:before:top-1.5 xl:before:left-1.5 xl:before:bottom-1.5 xl:before:w-[3px] xl:before:bg-nd-inverse"
                              : "text-nd-mid-em-text"
                          } ${inView ? "animate-curtain-top-to-bottom" : ""}`}
                          style={
                            inView
                              ? { animationDelay: `${0.2 + index * 0.1}s` }
                              : { opacity: 0 }
                          }
                        >
                          <CategoryIcon
                            id={cat.id}
                            className={`w-5 h-5 -mt-0.5 ${
                              isActive ? "" : cat.color
                            }`}
                          />
                          <span className="nd-body-l leading-[1.5]">{cat.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* -------- Middle: index rail -------- */}
                <div className="w-16 divide-y divide-nd-border-light border-t xl:border-t-0 border-nd-border-light grow-0 shrink-0 overflow-hidden relative hidden xl:block">
                  {visible.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex flex-row gap-4 xl:gap-0 p-4 xl:p-0 w-full xl:min-h-16 divide-x divide-nd-border-light ${
                        inView ? "animate-stretch-in" : ""
                      }`}
                      style={
                        inView
                          ? { animationDelay: `${1 + (totalItems - index) * 0.15}s` }
                          : undefined
                      }
                    >
                      <div className="shrink-0 grow-0 xl:w-16 flex items-start xl:items-center justify-center">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-nd-border-light">
                          <span className="nd-body-s text-nd-mid-em-text pt-[1px]">
                            {item.index}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="h-0 mb-[-1px]" />
                </div>

                {/* -------- Right: items -------- */}
                <div className="divide-y divide-nd-border-light border-t xl:border-t-0 border-nd-border-light grow overflow-hidden relative">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {visible.map((item, index) => {
                      const content = itemContent(item);
                      if (firstRender) {
                        return (
                          <a
                            key={item.id}
                            href={X_PROFILE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-row gap-4 xl:gap-0 p-4 xl:p-0 w-full xl:min-h-16 xl:divide-x xl:divide-nd-border-light hover:bg-nd-border-light/10 transition-colors text-white cursor-pointer ${
                              inView ? "animate-stretch-in" : ""
                            }`}
                            style={
                              inView
                                ? {
                                    animationDelay: `${1 + (totalItems - index) * 0.15}s`,
                                  }
                                : { opacity: 0 }
                            }
                          >
                            {content}
                          </a>
                        );
                      }
                      return (
                        <motion.a
                          key={`${item.id}-${activeCategory}`}
                          href={X_PROFILE}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{
                            duration: 0.2,
                            opacity: { duration: 0.1 },
                          }}
                          className="flex flex-row gap-4 xl:gap-0 p-4 xl:p-0 w-full xl:min-h-16 xl:divide-x xl:divide-nd-border-light hover:bg-nd-border-light/10 transition-colors text-white cursor-pointer"
                        >
                          {content}
                        </motion.a>
                      );
                    })}
                    <div className="h-0 mb-[-1px]" />
                  </AnimatePresence>
                </div>

                {/* -------- Mobile pagination -------- */}
                <div className="flex flex-1 flex-row divide-x divide-nd-border-light border-t border-nd-border-light xl:hidden">
                  <button
                    className="py-3 px-5 flex flex-col items-start justify-start gap-2.5 w-full hover:bg-nd-border-light/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage(1)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-4 h-4 -mt-0.5">
                      <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z" />
                    </svg>
                    <span className="nd-body-l leading-[1.5]">Previous</span>
                  </button>
                  <button
                    className="py-3 px-5 flex flex-col items-end justify-end gap-2.5 w-full hover:bg-nd-border-light/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="button"
                    disabled={page === 2 || filtered.length <= PAGINATION_SIZE}
                    onClick={() => setPage(2)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-4 h-4 -mt-0.5">
                      <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z" />
                    </svg>
                    <span className="nd-body-l leading-[1.5]">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}