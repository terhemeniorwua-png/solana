"use client";
import { createElement, Children, useState } from "react";

const LANG_LABEL = {
  ts: "TypeScript",
  js: "JavaScript",
  rs: "Rust",
  rust: "Rust",
  py: "Python",
  python: "Python",
  sh: "Shell",
  bash: "Shell",
  sol: "Solana",
};

function langOf(child) {
  const inner = child?.props?.children;
  const cls =
    child?.props?.className ||
    (inner && !Array.isArray(inner) && inner.props?.className) ||
    (Array.isArray(inner) ? inner[0]?.props?.className : "") ||
    "";
  const match = /language-([\w-]+)/.exec(String(cls));
  return match ? match[1] : "";
}

export function CodeTabs({ children }) {
  const items = Children.toArray(children).filter(Boolean);
  const [active, setActive] = useState(0);

  return createElement(
    "div",
    { className: "docs-codetabs" },
    createElement(
      "div",
      { className: "docs-codetabs-bar", role: "tablist" },
      items.map((child, index) => {
        const lang = langOf(child);
        const label = LANG_LABEL[lang] || lang || `Tab ${index + 1}`;
        return createElement(
          "button",
          {
            key: index,
            type: "button",
            role: "tab",
            "aria-selected": index === active,
            className:
              "docs-codetabs-tab" + (index === active ? " is-active" : ""),
            onClick: () => setActive(index),
          },
          label
        );
      })
    ),
    createElement("div", { className: "docs-codetabs-panel" }, items[active])
  );
}