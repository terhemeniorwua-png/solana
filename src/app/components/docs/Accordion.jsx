"use client";
import { useState } from "react";

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="docs-accordion" data-state={open ? "open" : "closed"}>
      <button
        type="button"
        className="docs-accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span className="docs-accordion-chevron" aria-hidden="true">
          <svg
            viewBox="0 0 20 20"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className="docs-accordion-content" hidden={!open}>
        {children}
      </div>
    </div>
  );
}

export function Accordions({ children }) {
  return <div className="docs-accordions">{children}</div>;
}