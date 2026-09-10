"use client";
import { useState } from "react";

export default function Rate() {
  const [feedback, setFeedback] = useState(null);
  if (feedback) {
    return (
      <div className="docs-rate done">
        <p>Thanks for the feedback!</p>
      </div>
    );
  }
  return (
    <div className="docs-rate">
      <p>Was this page helpful?</p>
      <div className="docs-rate-buttons" role="group" aria-label="Rate this page">
        <button type="button" aria-label="Yes" onClick={() => setFeedback("yes")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
        </button>
        <button type="button" aria-label="No" onClick={() => setFeedback("no")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V3H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
          </svg>
        </button>
      </div>
    </div>
  );
}