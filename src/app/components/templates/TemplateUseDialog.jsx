"use client";

import { useState, createElement } from "react";
import { X } from "@boxicons/react/X";
import { Check } from "@boxicons/react/Check";
import { Copy } from "@boxicons/react/Copy";

export default function TemplateUseDialog({ command }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = command;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-none border border-white bg-white px-4 py-2 text-sm font-medium text-black shadow-xs transition-all outline-none hover:bg-white/90 disabled:pointer-events-none disabled:opacity-50"
      >
        Use This Template
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Use This Template"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl border border-white/[0.12] bg-[#0C0C0E] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
              <h2 className="font-brand-mono text-[12px] font-medium uppercase tracking-[0.08em] text-white">
                Install with create-solana-dapp
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="flex size-8 items-center justify-center text-nd-mid-em-text transition-colors hover:text-white"
              >
                {createElement(X, { className: "size-4" })}
              </button>
            </div>
            <div className="flex items-stretch gap-0 border-b border-white/[0.08]">
              <pre className="flex-1 overflow-x-auto bg-black px-6 py-5 text-sm leading-6 text-white">
                {command}
              </pre>
              <button
                type="button"
                onClick={copyCommand}
                className="flex items-center gap-2 border-l border-white/[0.08] px-5 text-xs text-nd-mid-em-text transition-colors hover:text-white"
              >
                {createElement(copied ? Check : Copy, {
                  className: "size-4",
                  pack: "regular",
                })}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="px-6 py-4 text-xs leading-5 text-nd-mid-em-text">
              Run this command in a new directory to scaffold the template.
            </p>
          </div>
        </div>
      )}
    </>
  );
}