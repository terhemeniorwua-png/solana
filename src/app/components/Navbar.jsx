"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Use Product",
    children: [
      { label: "Faucet", desc: "Get test tokens for development" },
      { label: "Explorer", desc: "Scan the chain for transactions" },
      { label: "Wallets", desc: "Connect and manage your assets" },
      { label: "Name Service", desc: "Register a human-readable address" },
    ],
  },
  {
    label: "Build",
    children: [
      { label: "Documentation", desc: "Guides, tutorials, and references" },
      { label: "SDKs", desc: "Client libraries in every language" },
      { label: "RPC Providers", desc: "Fast, reliable node access" },
      { label: "Developer Forum", desc: "Ask questions, share knowledge" },
    ],
  },
  {
    label: "Enterprise",
    children: [
      { label: "Solutions", desc: "Infrastructure for large-scale teams" },
      { label: "Case Studies", desc: "How organizations use the network" },
      { label: "Partners", desc: "Find a certified integration partner" },
      { label: "Contact Sales", desc: "Speak with our enterprise team" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Token Extensions", desc: "Programmable token primitives" },
      { label: "Firedancer", desc: "A next-gen validator client" },
      { label: "dApp Store", desc: "Discover decentralized applications" },
      { label: "Mobile Wallet Adapter", desc: "Connect mobile apps to wallets" },
    ],
  },
  {
    label: "Ecosystem",
    children: [
      { label: "Grants", desc: "Funding for builders and researchers" },
      { label: "Events", desc: "Conferences, hackathons, and meetups" },
      { label: "Blog", desc: "News, announcements, and deep dives" },
      { label: "Community", desc: "Join our global network of contributors" },
    ],
  },
];

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-black font-bold text-sm">
            N
          </div>
          <span className="text-lg font-semibold tracking-tight hidden sm:block">
            NexChain
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors duration-200 flex items-center gap-1">
                {item.label}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {activeDropdown === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-4 min-w-[280px] shadow-2xl shadow-black/50">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href="#"
                          className="block px-4 py-3 rounded-lg hover:bg-white/[0.04] transition-colors group"
                        >
                          <div className="text-sm font-medium text-[#F5F5F5] group-hover:text-white">
                            {child.label}
                          </div>
                          <div className="text-xs text-[#A0A0A0] mt-0.5">
                            {child.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Search trigger */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] text-sm text-[#A0A0A0] hover:border-white/[0.15] hover:text-[#F5F5F5] transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className="font-mono text-xs">⌘K</span>
          </button>

          {/* CTA */}
          <a
            href="#"
            className="hidden sm:inline-flex px-5 py-2 rounded-full gradient-bg text-black text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#A0A0A0] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-black/98 backdrop-blur-xl overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-1">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === idx ? null : idx)
                    }
                    className="w-full flex items-center justify-between py-3 text-lg text-[#F5F5F5]"
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
                              href="#"
                              className="block py-2 text-sm text-[#A0A0A0] hover:text-[#F5F5F5]"
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
              <div className="pt-6 border-t border-white/[0.08] mt-4">
                <a
                  href="#"
                  className="block w-full text-center px-5 py-3 rounded-full gradient-bg text-black font-semibold"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
