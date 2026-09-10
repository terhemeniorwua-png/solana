"use client";
import Link from "next/link";
import { ChevronLeft } from "@boxicons/react/ChevronLeft";
import { ChevronRight } from "@boxicons/react/ChevronRight";

export default function DocsFooter({ previous, next }) {
  return (
    <nav className="docs-footer" aria-label="Pagination">
      {previous ? (
        <Link href={previous.url} prefetch={false} className="docs-footer-card">
          <div className="docs-footer-label">
            <ChevronLeft className="docs-footer-chevron" />
            <span>Previous page</span>
          </div>
          <p>{previous.name}</p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.url}
          prefetch={false}
          className="docs-footer-card docs-footer-card-next"
        >
          <div className="docs-footer-label docs-footer-label-next">
            <span>Next page</span>
            <ChevronRight className="docs-footer-chevron" />
          </div>
          <p>{next.name}</p>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}