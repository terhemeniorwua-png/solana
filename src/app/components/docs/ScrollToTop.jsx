"use client";
export default function ScrollToTop() {
  return (
    <button
      type="button"
      className="docs-scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Scroll to top
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m6 12 4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}