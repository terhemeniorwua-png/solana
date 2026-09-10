"use client";
import { useState } from "react";

export function Tabs({ items, defaultValue, children, "aria-label": ariaLabel }) {
  const tabs = Array.isArray(children) ? children : children ? [children] : [];
  const hasItems = items && Array.isArray(items) && items.length > 0;

  const keyValues = hasItems
    ? items.map((item) =>
        typeof item === "string" ? item : item.id ?? item.label ?? String(item)
      )
    : tabs.map((child) => child.props?.value);

  const labels = hasItems
    ? items.map((item) =>
        typeof item === "string" ? item : item.label ?? item.id ?? item
      )
    : tabs.map((child) => child.props?.label);

  const [active, setActive] = useState(defaultValue ?? keyValues[0]);

  return (
    <div className="docs-tabs">
      <div className="docs-tabs-bar" role="tablist" aria-label={ariaLabel}>
        {keyValues.map((value, index) => (
          <button
            key={value}
            role="tab"
            aria-selected={active === value}
            className={active === value ? "docs-tab active" : "docs-tab"}
            onClick={() => setActive(value)}
          >
            {labels[index] ?? String.fromCharCode(0x41 + index)}
          </button>
        ))}
      </div>
      <div className="docs-tabs-content">
        {tabs.filter((child) => child.props?.value === active)}
      </div>
    </div>
  );
}

export function Tab({ children }) {
  return <div>{children}</div>;
}