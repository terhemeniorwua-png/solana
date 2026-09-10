"use client";
import { useState } from "react";

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function LLMCopyButton({ markdown }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };
  return (
    <button
      type="button"
      className="docs-page-action"
      onClick={copy}
      title="Copy page content for LLMs"
      aria-label="Copy page content"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export function ViewOptions({ markdown }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="docs-view-options">
      <button
        type="button"
        className="docs-page-action"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        title="Source"
      >
        <span>&lt;/&gt;</span>
        <span>Source</span>
      </button>
      {open ? (
        <div className="docs-view-menu" role="menu">
          <a
            role="menuitem"
            href={`data:text/markdown;charset=utf-8,${encodeURIComponent(markdown)}`}
            download="page.md"
          >
            Download Markdown (.md)
          </a>
        </div>
      ) : null}
    </div>
  );
}