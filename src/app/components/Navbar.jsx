"use client";
import { useState, useEffect, useRef, createElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ICONS, NAV_MENUS, NAV_MATCH_RULES } from "./navData";

/* ---------------- shared svgs ---------------- */

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="relative top-px ml-0.5 -mr-1 size-4 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853z" />
    </g>
  </svg>
);

const SearchIcon = () => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 20 20" className="flex-shrink-0">
    <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="none" viewBox="0 0 16 16">
    <path stroke="#ABABBA" strokeLinecap="square" d="M8 14.333A6.333 6.333 0 1 0 8 1.667m0 12.666A6.333 6.333 0 1 1 8 1.667m0 12.666c-1.473 0-2.667-2.835-2.667-6.333s1.194-6.333 2.666-6.333m0 12.666c1.473 0 2.667-2.835 2.667-6.333S9.472 1.667 7.999 1.667M14 8H2" />
  </svg>
);

const ArrowUpDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="m6.666 7.5 3.333-3.333L13.333 7.5M13.333 12.5l-3.334 3.333L6.666 12.5" />
  </svg>
);

const ArrowRight = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="m10 16 4-4-4-4" />
  </svg>
);

const SolanaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="18" fill="none" style={{ color: "currentColor" }} viewBox="0 0 149 22" className="block h-auto w-28 xl:w-[120px]">
    <defs>
      <linearGradient id="solana-gradient" x1="2.494" x2="22.809" y1="22.671" y2="-0.233" gradientUnits="userSpaceOnUse">
        <stop offset="0.08" stopColor="#9945FF" />
        <stop offset="0.3" stopColor="#8752F3" />
        <stop offset="0.5" stopColor="#5497D5" />
        <stop offset="0.6" stopColor="#43B4CA" />
        <stop offset="0.72" stopColor="#28E0B9" />
        <stop offset="0.97" stopColor="#19FB9B" />
      </linearGradient>
    </defs>
    <path fill="url(#solana-gradient)" d="m25.033 17.458-4.087 4.382a.95.95 0 0 1-.692.302H.879a.476.476 0 0 1-.348-.798l4.082-4.382a.95.95 0 0 1 .692-.302H24.68a.473.473 0 0 1 .353.798m-4.087-8.827a.96.96 0 0 0-.692-.302H.879a.475.475 0 0 0-.348.798l4.082 4.385a.96.96 0 0 0 .692.302H24.68a.476.476 0 0 0 .346-.798zM.879 5.483h19.375a.95.95 0 0 0 .692-.302L25.033.798a.475.475 0 0 0-.09-.724A.47.47 0 0 0 24.68 0H5.305a.95.95 0 0 0-.692.302L.531 4.685a.475.475 0 0 0 .348.798" />
    <path fill="currentColor" d="M48.653 9.365H38.288V5.95h13.06V2.538H38.252a3.407 3.407 0 0 0-3.425 3.388v3.46a3.406 3.406 0 0 0 3.425 3.392h10.38v3.414H35.075v3.413h13.578a3.41 3.41 0 0 0 3.425-3.388v-3.46a3.406 3.406 0 0 0-3.425-3.392m20.08-6.827H58.33a3.407 3.407 0 0 0-3.434 3.388v10.291a3.405 3.405 0 0 0 3.434 3.389h10.405a3.407 3.407 0 0 0 3.425-3.389V5.926a3.4 3.4 0 0 0-2.12-3.136 3.4 3.4 0 0 0-1.305-.252Zm-.025 13.654H58.354V5.952h10.35zm36.468-13.654H95.028a3.407 3.407 0 0 0-3.425 3.388v13.68h3.46v-5.607h10.102v5.607h3.46V5.926a3.41 3.41 0 0 0-2.136-3.143 3.4 3.4 0 0 0-1.313-.246Zm-.025 8.047H95.049V5.951h10.102zm40.424-8.047h-10.149a3.406 3.406 0 0 0-3.425 3.388v13.68h3.46v-5.607h10.079v5.607H149V5.926a3.42 3.42 0 0 0-1.011-2.403 3.4 3.4 0 0 0-2.414-.985m-.035 8.047h-10.102V5.951h10.102zm-20.066 5.607h-1.384l-4.948-12.224a2.27 2.27 0 0 0-2.113-1.43h-3.07a2.27 2.27 0 0 0-2.283 2.26v14.808h3.46V5.95h1.384l4.945 12.225a2.285 2.285 0 0 0 2.122 1.42h3.07a2.27 2.27 0 0 0 2.283-2.26V2.538h-3.466zm-46.8-13.654h-3.46v13.68a3.405 3.405 0 0 0 3.438 3.388H89.03v-3.414H78.675z" />
  </svg>
);

/* ---------------- dropdown building blocks (exact replica of live markup) ---------------- */

function SvgIcon({ name, className, width, height }) {
  const data = ICONS[name];
  if (!data) return null;
  const render = (node, key) => {
    const props = node.a ? { ...node.a } : {};
    const children = node.k ? node.k.map(render) : null;
    return createElement(node.tag, { key, ...props }, children);
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? data.a.width ?? 24}
      height={height ?? data.a.height ?? 24}
      fill={data.a.fill ?? "none"}
      viewBox={data.a.viewBox}
      className={className}
      aria-hidden="true"
    >
      {data.k.map(render)}
    </svg>
  );
}

const ROW_HOVER =
  "group-[.active]/link:bg-gradient-to-r group-[.active]/link:from-transparent group-[.active]/link:via-[10%] group-[.active]/link:via-white/5 group-[.active]/link:to-transparent group-hover/link:bg-gradient-to-r group-hover/link:from-transparent group-hover/link:via-[10%] group-hover/link:via-white/5 group-hover/link:to-transparent";

function HeadingF({ title }) {
  return (
    <h3 className="m-0 pt-2 pb-3 xl:pt-1 xl:pb-3 font-brand-mono font-medium text-white/45 text-[11px] tracking-[0.12em] uppercase">
      {title}
    </h3>
  );
}

function HeadingW({ title, className = "", children }) {
  return (
    <section className={className}>
      <h3 className="m-0 py-3 font-brand-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 xl:pb-3 xl:pt-1">
        {title}
      </h3>
      {children}
    </section>
  );
}

function ItemRow({ item }) {
  const className = ROW_HOVER + " flex items-start gap-3 max-xl:py-4 xl:py-4";
  const iconWrap = (
    <div className="w-[40px] h-[40px] shrink-0 flex items-center justify-center bg-white/[0.06] rounded-lg">
      <SvgIcon name={item.icon} className="size-[20px] text-white" />
    </div>
  );
  const text = (
    <div className="min-w-0">
      <div className="font-medium text-white text-[14px] xl:text-[15px] leading-[1.35]">
        {item.title}
      </div>
      {item.desc && (
        <div className="text-white/55 mt-0.5 text-[13px] xl:text-[13px] leading-[1.4]">
          {item.desc}
        </div>
      )}
    </div>
  );
  const body = item.variant === "large"
    ? (<div className={className}>{iconWrap}{text}</div>)
    : (<div className={ROW_HOVER + " flex items-center gap-2.5 max-xl:py-3.5 xl:py-3"}>
        <SvgIcon name={item.icon} className="size-[18px] text-white shrink-0" />
        <div className="font-medium text-white text-[14px]">{item.title}</div>
      </div>);
  return (
    <Link
      href={item.href}
      prefetch={false}
      className="block no-underline text-inherit group/link"
      target={item.ext ? "_blank" : undefined}
      rel={item.ext ? "noopener noreferrer" : undefined}
    >
      {body}
    </Link>
  );
}

function ItemsList({ items }) {
  return (
    <div className="divide-y divide-[rgba(238,228,255,0.04)]">
      {items.map((it) => <ItemRow key={it.title} item={it} />)}
    </div>
  );
}

function SplitColumns({ lists }) {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-5 max-xl:divide-y max-xl:divide-[rgba(238,228,255,0.04)]">
      {lists.map((list, i) => (
        <div key={i} className="divide-y divide-[rgba(238,228,255,0.04)] flex-1">
          {list.map((it) => <ItemRow key={it.title} item={it} />)}
        </div>
      ))}
    </div>
  );
}

function Banner({ banner }) {
  return (
    <div
      className={`p-4 xl:p-5 rounded-xl flex flex-col items-start justify-between gap-4 min-h-[200px] xl:min-h-[260px] text-[14px] xl:text-[15px] leading-[1.5] xl:w-[300px] xl:shrink-0 w-full max-xl:order-2 ${
        banner.position === "left" ? "xl:order-1" : "xl:order-2"
      } bg-cover bg-center bg-no-repeat bg-black ${banner.bg || ""}`}
    >
      <div>
        {banner.logo && (
          <span className={banner.logoClass || ""}>
            <SvgIcon
              name={banner.logo}
              width={banner.logoW ?? undefined}
              height={banner.logoH ?? undefined}
            />
          </span>
        )}
        <div className="font-medium text-white text-[17px] xl:text-[20px] leading-[1.2] tracking-[-0.32px] xl:tracking-[-0.4px] mt-1">
          {banner.title}
        </div>
        {banner.desc && (
          <div className="font-medium text-[rgba(255,255,255,0.64)] mt-1.5 text-[13px] xl:text-[14px] leading-[1.45]">
            {banner.desc}
          </div>
        )}
      </div>
      <div className="flex flex-col items-start gap-1.5">
        {banner.location && (
          <div className="pr-3 pl-2 h-[28px] xl:h-[30px] font-medium text-white text-[12px] xl:text-[13px] leading-none tracking-[-0.14px] bg-[rgba(25,24,27,0.4)] rounded-full backdrop-blur-[12px] flex items-center">
            <SvgIcon name="note" className="mr-1.5 size-4" />
            {banner.location}
          </div>
        )}
        {banner.date && (
          <div className="pr-3 pl-2 h-[28px] xl:h-[30px] text-white text-[12px] xl:text-[13px] leading-none tracking-[-0.14px] bg-[rgba(25,24,27,0.4)] rounded-full backdrop-blur-[12px] flex items-center">
            <SvgIcon name="bolt" className="mr-1.5 size-4" />
            {banner.date}
          </div>
        )}
        {banner.cta && (
          <div className={banner.location || banner.date ? "mt-2" : ""}>
            <Link
              href={banner.href}
              className="group/cta flex min-h-11 items-center rounded-full bg-white pl-4 pr-2 text-[14px] font-medium leading-none tracking-[-0.16px] text-black text-nowrap transition-colors hover:bg-white/90"
            >
              {banner.cta}
              <ArrowRight className="ml-1 size-5 group-hover/cta:translate-x-[2px] transition-transform duration-200 inline-flex" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function ColumnWidth({ width, children }) {
  const extra =
    width === "primary"
      ? "xl:flex-[1.2] xl:min-w-0"
      : width === "grow"
        ? "grow xl:min-w-0"
        : "xl:flex-1 xl:min-w-0";
  return <div className={`px-2 xl:px-3 ${extra}`}>{children}</div>;
}

function Group({ group, index }) {
  if (index === 0) {
    return (
      <>
        <HeadingF title={group.title} />
        {group.split
          ? <SplitColumns lists={group.split} />
          : <ItemsList items={group.items} />}
      </>
    );
  }
  const Body = group.split ? (
    <SplitColumns lists={group.split} />
  ) : (
    <ItemsList items={group.items} />
  );
  return (
    <HeadingW title={group.title} className={group.divider || ""}>
      {Body}
    </HeadingW>
  );
}

function Column({ column }) {
  return (
    <ColumnWidth width={column.width}>
      {column.groups.map((g, i) => (
        <Group key={g.title} group={g} index={i} />
      ))}
    </ColumnWidth>
  );
}

function PanelContent({ menu }) {
  const banner = menu.banner ? <Banner banner={menu.banner} /> : null;
  const orderCls =
    menu.banner && menu.banner.position === "left" ? "xl:order-2" : "xl:order-1";
  return (
    <div className="xl:w-[960px] max-w-full flex flex-col xl:flex-row max-xl:gap-6 xl:gap-3 xl:items-start">
      {banner}
      <div
        className={`order-1 flex w-full flex-1 flex-col max-xl:gap-6 xl:min-w-0 xl:flex-row xl:gap-5 ${orderCls}`}
      >
        {menu.columns.map((col) => (
          <Column key={col.groups[0].title} column={col} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- navbar ---------------- */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(0);
  const timeoutRef = useRef(null);
  const headerRef = useRef(null);
  const pathname = usePathname();

  const isMenuActive = (menu) =>
    (NAV_MATCH_RULES[menu.id] || []).some((rule) => {
      if (rule.exclude?.some((value) => pathname.includes(value))) return false;
      return rule.type === "equals" ? pathname === rule.value : pathname.includes(rule.value);
    });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    const onScroll = () => {
      if (window.scrollY > 40) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const enter = (idx) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(idx);
  };

  const leave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const panelAlign = (menu) =>
    menu.align === "center"
      ? "xl:left-1/2 xl:-translate-x-1/2"
      : "xl:left-0 xl:translate-x-0";

  const PANEL_CLS =
    "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out top-[45px] left-0 w-full xl:absolute xl:w-auto [&_data-[slot=navigation-menu-link]]:focus:ring-0 [&_data-[slot=navigation-menu-link]]:focus:outline-none min-w-[320px] bg-[rgba(25,24,27,0.92)] p-2 xl:p-4 rounded-2xl text-[rgba(255,255,255,0.64)] text-[14px] xl:text-[15px] leading-[1.5] backdrop-blur-[20px] xl:max-h-[calc(100dvh-5rem)] xl:overflow-y-auto xl:overscroll-contain xl:border xl:border-white/[0.06] xl:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6)]";

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <nav id="navbar" className="h-14 border-b border-white/10 bg-black/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-x-4 px-4 sm:px-5 xl:gap-x-8 xl:px-6">
          <Link aria-label="Solana" className="flex h-11 shrink-0 grow-0 items-center !text-white" href="/">
            <SolanaLogo />
          </Link>

          <div className="ml-auto flex items-center gap-1 md:gap-2 xl:grow">
            <div className="hidden xl:block flex-1">
              <nav aria-label="Main" className="group/navigation-menu relative flex w-full max-w-none flex-1 [&>div]:w-full">
                <div style={{ position: "relative" }}>
                  <ul className="group flex flex-1 list-none mb-0 flex-wrap gap-2 xl:gap-1 xl:items-center pl-0" dir="ltr">
                    {NAV_MENUS.map((menu, idx) => (
                      <li
                        key={menu.id}
                        className="relative w-full xl:static xl:w-auto border-b xl:border-b-0 border-white/10"
                      >
                        <button
                          id={`nav-trigger-${idx}`}
                          data-state={activeDropdown === idx ? "open" : "closed"}
                          aria-expanded={activeDropdown === idx}
                          data-slot="navigation-menu-trigger"
                          className={"group h-9 flex justify-between items-center w-full xl:w-auto py-1.5 xl:py-1 px-4 xl:px-3.5 text-[rgba(255,255,255,0.64)] text-[16px] xl:text-[15px] leading-[1.5] font-normal bg-transparent border-0 rounded-full hover:text-white focus:text-white hover:bg-white/[0.08] focus:bg-white/[0.08] relative transition-colors duration-200 data-[state=open]:text-white data-[state=open]:bg-white/[0.08]" +
              (isMenuActive(menu) ? " !text-white" : "")}
                          onMouseEnter={() => enter(idx)}
                          onMouseLeave={leave}
                          onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                        >
                          {menu.label}
                          <ChevronDown />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === idx && (
                            <motion.div
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.12, ease: "easeOut" }}
                              data-slot="navigation-menu-content"
                              data-state="open"
                              data-motion="from-start"
                              className={`${PANEL_CLS} ${panelAlign(menu)} hidden xl:block`}
                              onMouseEnter={() => enter(idx)}
                              onMouseLeave={leave}
                            >
                              <PanelContent menu={menu} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <div className="group relative shrink-0">
                <button type="button" aria-label="Search" title="Search (⌘ K)" className="m-0 flex size-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] p-0 text-white/70 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:h-9 md:w-auto md:px-2.5">
                  <SearchIcon />
                  <span className="hidden flex-1 text-left text-sm md:inline">Search</span>
                  <kbd aria-hidden="true" className="hidden h-5 items-center rounded border border-white/10 bg-black/30 px-1.5 font-sans text-[11px] font-medium leading-none text-white/55 md:inline-flex">⌘K</kbd>
                </button>
              </div>

              <div className="relative items-center hidden xl:flex">
                <button className="p-0 border-0 inline-flex items-center h-9 text-[#848895] text-base hover:text-white transition-colors duration-200" type="button">
                  <GlobeIcon />
                  <span className="mx-1 align-middle text-base font-normal uppercase">en</span>
                  <ArrowUpDownIcon />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="-m-1 flex size-11 cursor-pointer flex-col items-center justify-center gap-1 border-0 p-3 xl:hidden"
            aria-label="Open navigation menu"
            type="button"
          >
            <div className="flex w-4 shrink-0 flex-col items-stretch gap-1">
              <span className="h-0.5 bg-white transition-all duration-300" />
              <span className="self-end w-[60%] h-0.5 bg-white transition-all duration-300" />
              <span className="h-0.5 bg-white transition-all duration-300" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-14 bg-black/98 backdrop-blur-xl overflow-y-auto z-50"
          >
            <div className="px-6 py-6 space-y-3">
              {NAV_MENUS.map((menu, idx) => (
                <div key={menu.id}>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === idx ? null : idx)}
                    className="w-full flex items-center gap-3 py-3 text-lg text-white"
                  >
                    <SvgIcon name={`m_${menu.id}`} className="size-5 text-white shrink-0" />
                    <span>{menu.label}</span>
                    <svg
                      className={`w-5 h-5 ml-auto transition-transform duration-200 ${mobileAccordion === idx ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4">
                          <PanelContent menu={menu} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}