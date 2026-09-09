"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Use Solana",
    children: [
      { label: "Use Solana", href: "/use-solana" },
      { label: "Wallets", href: "/wallets" },
      { label: "Learn", href: "/learn" },
      { label: "Staking", href: "/staking" },
    ],
  },
  {
    label: "Build",
    children: [
      { label: "Developer hub", href: "/developers" },
      { label: "Docs", href: "/docs" },
      { label: "Templates", href: "/developers/templates" },
    ],
  },
  {
    label: "Enterprise",
    children: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Institutional payments", href: "/solutions/institutional-payments" },
      { label: "Tokenization", href: "/solutions/tokenization" },
      { label: "Reports", href: "/reports" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Products", href: "/products" },
      { label: "Solana Developer Platform", href: "/solutions/sdp" },
      { label: "x402", href: "/x402" },
      { label: "Agent Registry", href: "/agent-registry" },
      { label: "Skills", href: "/skills" },
    ],
  },
  {
    label: "Ecosystem",
    children: [
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Network", href: "/network" },
      { label: "Events", href: "/events" },
      { label: "Community", href: "/community" },
      { label: "News", href: "/news" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (idx) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav id="navbar" className="h-14 border-b border-white/10 bg-black/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-x-4 px-4 sm:px-5 xl:gap-x-8 xl:px-6">
          {/* Logo */}
          <Link aria-label="Solana" className="flex h-11 shrink-0 grow-0 items-center !text-white" href="/">
            <SolanaLogo />
          </Link>

          {/* Desktop nav */}
          <div className="ml-auto flex items-center gap-1 md:gap-2 xl:grow">
            <div className="hidden xl:block flex-1">
              <nav aria-label="Main" className="group/navigation-menu relative flex w-full max-w-none flex-1 [&>div]:w-full">
                <div style={{ position: "relative" }}>
                  <ul className="group flex flex-1 list-none mb-0 flex-wrap gap-2 xl:gap-1 xl:items-center pl-0" dir="ltr">
                    {NAV_ITEMS.map((item, idx) => (
                      <li key={item.label} className="relative w-full xl:static xl:w-auto border-b xl:border-b-0 border-white/10">
                        <button
                          id={`nav-trigger-${idx}`}
                          data-state={activeDropdown === idx ? "open" : "closed"}
                          aria-expanded={activeDropdown === idx}
                          className="group h-9 flex justify-between items-center w-full xl:w-auto py-1.5 xl:py-1 px-4 xl:px-3.5 text-[rgba(255,255,255,0.64)] text-[16px] xl:text-[15px] leading-[1.5] font-normal bg-transparent border-0 rounded-full hover:text-white focus:text-white hover:bg-white/[0.08] focus:bg-white/[0.08] relative transition-colors duration-200 data-[state=open]:text-white data-[state=open]:bg-white/[0.08]"
                          onMouseEnter={() => handleMouseEnter(idx)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                        >
                          {item.label}
                          <ChevronDown />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="group relative shrink-0">
                <button type="button" aria-label="Search" title="Search (⌘ K)" className="m-0 flex size-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] p-0 text-white/70 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:h-9 md:w-auto md:px-2.5">
                  <SearchIcon />
                  <span className="hidden flex-1 text-left text-sm md:inline">Search</span>
                  <kbd aria-hidden="true" className="hidden h-5 items-center rounded border border-white/10 bg-black/30 px-1.5 font-sans text-[11px] font-medium leading-none text-white/55 md:inline-flex">⌘K</kbd>
                </button>
              </div>

              {/* Language selector */}
              <div className="relative items-center hidden xl:flex">
                <button className="p-0 border-0 inline-flex items-center h-9 text-[#848895] text-base hover:text-white transition-colors duration-200" type="button">
                  <GlobeIcon />
                  <span className="mx-1 align-middle text-base font-normal uppercase">en</span>
                  <ArrowUpDownIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-14 bg-black/98 backdrop-blur-xl overflow-y-auto z-50"
          >
            <div className="px-6 py-6 space-y-1">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === idx ? null : idx)
                    }
                    className="w-full flex items-center justify-between py-3 text-lg text-white"
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileAccordion === idx ? "rotate-180" : ""
                      }`}
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
                        <div className="pl-4 pb-3 space-y-1">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block py-2 text-sm text-[#848895] hover:text-white"
                            >
                              {child.label}
                            </a>
                          ))}
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
