"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function isFolderExpanded(node, pathname) {
  const items = [];
  const walk = (n) => {
    if (n.type === "page") items.push(n.url);
    if (n.type === "folder") {
      if (n.index) items.push(n.index.url);
      n.children.forEach(walk);
    }
  };
  if (node.type === "folder") node.children.forEach(walk);
  return items.some((url) => url === pathname || pathname.startsWith(`${url}/`));
}

function SidebarNode({ node, pathname, level }) {
  const [open, setOpen] = useState(
    node.defaultOpen === true || isFolderExpanded(node, pathname)
  );
  const active =
    node.type === "page" &&
    (node.url === pathname ||
      (node.url !== "/docs" && node.url !== "/docs/tools" && node.url !== "/docs/core" &&
        node.url !== "/docs/rpc" && node.url !== "/docs/finance" &&
        pathname.startsWith(`${node.url}/`)));
  const toggle = () => setOpen((v) => !v);

  if (node.type === "separator") {
    return (
      <div
        className="docs-sidebar-separator"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {node.name}
      </div>
    );
  }

  if (node.type === "page") {
    return (
      <Link
        href={node.url}
        prefetch={false}
        className={active ? "docs-sidebar-link active" : "docs-sidebar-link"}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {node.name}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={toggle}
        className="docs-sidebar-folder"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        <svg
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={open ? "docs-sidebar-chevron open" : "docs-sidebar-chevron"}
        >
          <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{node.index ? node.index.name : node.name}</span>
      </button>
      {open ? (
        <div>
          {node.children.map((child, i) => (
            <SidebarNode key={i} node={child} pathname={pathname} level={level + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Sidebar({ tree }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <div className="docs-sidebar-inner">
      <div className="docs-sidebar-scroll">
        <div className="docs-sidebar-list">
          {(tree.children ?? []).map((node, i) => (
            <SidebarNode key={i} node={node} pathname={pathname} level={0} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside
        className="docs-sidebar desktop"
        data-open={mobileOpen || undefined}
      >
        {content}
      </aside>
      {mobileOpen ? (
        <div className="docs-sidebar-overlay" onClick={() => setMobileOpen(false)}>
          <aside
            className="docs-sidebar mobile"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </aside>
        </div>
      ) : null}
      <button
        type="button"
        aria-label="Toggle sidebar"
        className="docs-sidebar-toggle"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}