"use client";

import { useState, createElement } from "react";
import Link from "@/lib/Link";
import { ChevronDown } from "@boxicons/react/ChevronDown";
import { ArrowRight } from "@boxicons/react/ArrowRight";
import { ArrowOutUpRightSquare } from "@boxicons/react/ArrowOutUpRightSquare";
import { FILTER_GROUPS, filterTemplates } from "@/data/templates";

function TemplateCard({ template }) {
  return (
    <article className="group relative min-w-0 bg-[#0C0C0E] transition-colors hover:bg-[#151518]">
      <Link
        to={`/developers/templates/${template.name}`}
        prefetch={false}
        className="flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-white/[0.03]">
          <img
            src={template.image}
            alt={`Preview of ${template.name}`}
            width="1200"
            height="630"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            style={{ color: "transparent" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="flex flex-1 flex-col p-5 xl:p-6">
          {template.badges.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-1.5">
              {template.badges.map((badge) => (
                <span
                  key={badge}
                  className="border border-white/[0.12] bg-white/[0.03] px-2 py-1 font-brand-mono text-[10px] font-medium uppercase tracking-[0.06em] text-nd-mid-em-text"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-start justify-between gap-4">
            <h3 className="nd-heading-xs line-clamp-2 text-nd-high-em-text">
              {template.displayName || template.name}
            </h3>
            {createElement(ArrowRight, {
              className:
                "mt-1 size-4 shrink-0 text-nd-mid-em-text transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white",
            })}
          </div>
          <p className="mt-2 line-clamp-3 text-sm leading-5 text-nd-mid-em-text">
            {template.description}
          </p>
        </div>
      </Link>
      <a
        href={template.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="View Repo"
        aria-label={`View Repo: ${template.name}`}
        className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full border border-white/[0.16] bg-black/70 text-nd-mid-em-text backdrop-blur-md transition-colors hover:border-white/30 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        {createElement(ArrowOutUpRightSquare, {
          className: "size-4",
        })}
      </a>
    </article>
  );
}

function FilterGroup({ group, open, onToggle, selected, onChange }) {
  return (
    <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-4 last:border-b-0 last:pb-0">
      <button
        type="button"
        aria-expanded={open}
        className="flex items-center justify-between py-1.5 font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-high-em-text transition-colors hover:text-nd-mid-em-text"
        onClick={onToggle}
      >
        <span>{group.name}</span>
        {createElement(ChevronDown, {
          className: `pointer-events-none size-4 shrink-0 translate-y-0.5 text-nd-mid-em-text transition-transform duration-200${
            open ? " rotate-180" : ""
          }`,
        })}
      </button>
      {open && (
        <div className="flex flex-col gap-2 pt-1">
          {group.keywords.map((keyword) => (
            <label
              key={keyword.id}
              className="group flex cursor-pointer items-center gap-2.5 text-sm text-nd-mid-em-text transition-colors hover:text-nd-high-em-text"
            >
              <input
                type="checkbox"
                checked={selected.includes(keyword.id)}
                onChange={() => onChange(keyword.id)}
                className="size-3.5 cursor-pointer rounded-sm border-white/25 bg-white/[0.04] accent-white"
              />
              <span>{keyword.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TemplatesExplorer() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [openGroups, setOpenGroups] = useState(["usecases"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = filterTemplates({ query, selectedKeywords: selected });

  function toggleKeyword(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((k) => k !== id) : [...prev, id]
    );
  }

  function toggleGroup(id) {
    setOpenGroups((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  }

  const filters = (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <span className="whitespace-nowrap font-brand-mono text-[12px] font-medium uppercase tracking-[0.08em] text-nd-high-em-text">
          Filter Templates
        </span>
      </div>
      <input
        type="search"
        aria-label="Search templates"
        placeholder="Search templates..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-11 w-full min-w-0 rounded-none border border-white/[0.16] bg-white/[0.03] px-3 text-sm text-nd-high-em-text transition-[color,box-shadow,outline] outline-none placeholder:text-nd-mid-em-text/60 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/20"
      />
      {FILTER_GROUPS.map((group) => (
        <FilterGroup
          key={group.id}
          group={group}
          open={openGroups.includes(group.id)}
          onToggle={() => toggleGroup(group.id)}
          selected={selected}
          onChange={toggleKeyword}
        />
      ))}
    </div>
  );

  return (
    <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
      <div className="grid xl:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="border-b border-white/[0.08] xl:border-b-0 xl:border-r">
          <div className="hidden px-8 py-10 xl:sticky xl:top-16 xl:block xl:max-h-[calc(100vh-4rem)] xl:overflow-y-auto custom-scrollbar">
            {filters}
          </div>
          <div className="px-5 md:px-8 xl:hidden">
            <button
              type="button"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex w-full items-center justify-between py-5 font-brand-mono text-[12px] font-medium uppercase tracking-[0.08em] text-nd-high-em-text"
            >
              <span>Filter and Search</span>
              {createElement(ChevronDown, {
                className: `size-4 shrink-0 translate-y-0.5 text-nd-mid-em-text transition-transform duration-200${
                  mobileOpen ? " rotate-180" : ""
                }`,
              })}
            </button>
          </div>
          {mobileOpen && (
            <div className="px-5 pb-6 md:px-8 xl:hidden">{filters}</div>
          )}
        </aside>
        <div className="min-w-0 p-3 md:p-8 xl:p-10">
          <div className="grid auto-rows-fr gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((template) => (
              <TemplateCard key={template.name} template={template} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}