import { createElement } from "react";
import NextLink from "next/link";
import Sidebar from "@/app/components/docs/Sidebar";
import DocsFooter from "@/app/components/docs/DocsFooter";
import Rate from "@/app/components/docs/Rate";
import ScrollToTop from "@/app/components/docs/ScrollToTop";
import { LLMCopyButton, ViewOptions } from "@/app/components/docs/PageActions";
import { findNeighbour, getFirstPage } from "@/data/docs";

export function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/["'`]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}

export function extractToc(source) {
  const toc = [];
  const slugs = {};
  const clean = source.replace(/```[\s\S]*?```/g, "");
  const re = /^#{2,3}\s+(.+)$/gm;
  let m;
  while ((m = re.exec(clean)) !== null) {
    let text = m[1]
      .replace(/`([^`]*)`/g, "$1")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\*\*?([^*]+)\*+?/g, "$1")
      .trim();
    let slug = slugify(text);
    if (slug in slugs) {
      let i = 2;
      while (`${slug}-${i}` in slugs) i++;
      slugs[slug] = true;
      slug = `${slug}-${i}`;
    } else {
      slugs[slug] = true;
    }
    toc.push({ text, slug, level: m[0].startsWith("###") ? 3 : 2 });
  }
  return toc;
}

function Breadcrumb({ isRoot, crumbs = [] }) {
  if (isRoot) return null;
  return (
    <nav className="docs-breadcrumb" aria-label="Breadcrumb">
      <NextLink href="/docs">Start here</NextLink>
      {crumbs.map((crumb, i) => (
        <span key={i} className="docs-breadcrumb-group">
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m8 6 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="docs-breadcrumb-current">{crumb.name}</span>
        </span>
      ))}
    </nav>
  );
}

function DocsLandingHeader({ title, description }) {
  return (
    <div className="docs-landing-header">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function DocsPageView({
  children,
  toc,
  title,
  description,
  filePath,
  hideTableOfContents,
  hidePageNavigation,
  pageTree,
  href,
  markdown,
  isRoot,
  sidebarTree,
  crumbs = [],
}) {
  const editUrl = `https://github.com/solana-foundation/solana-com/blob/main/apps/docs/content/docs/${filePath}`;
  const tocs = hideTableOfContents ? [] : toc;

  return (
    <div className="docs-page">
      <Sidebar tree={sidebarTree} />
      <main className="docs-main" id="docs-main">
        <div className="docs-main-inner">
          <Breadcrumb isRoot={isRoot} crumbs={crumbs} />
          {isRoot ? (
            <DocsLandingHeader title={title} description={description} />
          ) : (
            <div className="docs-header">
              <h1>{title}</h1>
              <div className="docs-actions">
                <LLMCopyButton markdown={markdown} />
                <ViewOptions markdown={markdown} />
              </div>
            </div>
          )}
          <div className="docs-body docs-body-prose">
            {children}
          </div>
          <Rate />
          {!hidePageNavigation && pageTree ? (
            <DocsFooterNav pageUrl={href} pageTree={pageTree} />
          ) : null}
        </div>
      </main>
      {tocs.length > 0 ? (
        <aside className="docs-toc">
          <div className="docs-toc-label">On this page</div>
          <nav className="docs-toc-nav" aria-label="Table of contents">
            {tocs.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className={`docs-toc-link level-${item.level}`}
              >
                {item.text}
              </a>
            ))}
          </nav>
          <a
            href={editUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="docs-edit-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM7 17l1-4 8.5-8.5a2 2 0 0 1 3 3L11 16l-4 1z" />
            </svg>
            <span>Edit on GitHub</span>
          </a>
          <ScrollToTop />
        </aside>
      ) : null}
    </div>
  );
}

export function DocsFooterNav({ pageUrl, pageTree }) {
  const { next, previous } = findNeighbour(pageTree, pageUrl);
  if (!previous && !next) {
    const firstPage = getFirstPage(pageTree);
    if (!firstPage) return null;
    return <DocsFooter next={firstPage} previous={undefined} />;
  }
  return <DocsFooter previous={previous} next={next} />;
}

export function DocsCategoryGrid({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="docs-category">
      <div className="docs-cards docs-category-grid">
        {items.map((item, i) =>
          item.url ? (
            <NextLink key={i} href={item.url} className="docs-card docs-category-card">
              <div className="docs-card-inner">
                <div className="docs-card-body">
                  <span className="docs-card-title">{item.name}</span>
                  {item.data?.description ? (
                    <span className="docs-card-desc">{item.data.description}</span>
                  ) : null}
                </div>
              </div>
              <span className="docs-category-arrow" aria-hidden="true">→</span>
            </NextLink>
          ) : (
            createElement("div", { key: i, className: "docs-category-empty" })
          )
        )}
      </div>
    </div>
  );
}