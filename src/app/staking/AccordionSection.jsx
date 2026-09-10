"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import HtmlParser from "./HtmlParser";
import styles from "./staking.module.css";

const SVG_CHEVRON = (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

const hashStore = {
  listeners: new Set(),
  subscribe(listener) {
    hashStore.listeners.add(listener);
    return () => hashStore.listeners.delete(listener);
  },
  emit() {
    hashStore.listeners.forEach((listener) => listener());
  },
  getSnapshot() {
    if (typeof window === "undefined") return "";
    return decodeURIComponent(window.location.hash.slice(1));
  },
  getServerSnapshot() {
    return "";
  },
};

function useHash() {
  return useSyncExternalStore(
    hashStore.subscribe,
    hashStore.getSnapshot,
    hashStore.getServerSnapshot,
  );
}

function AccordionItem({ title, body, open, onToggle, id, tabIndex }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    const element = bodyRef.current;
    if (element) {
      element.style.height = open ? `${element.scrollHeight}px` : "0px";
    }
  }, [open]);

  return (
    <div
      id={id}
      tabIndex={tabIndex}
      role="button"
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      className={styles.accordionItem}
    >
      <div
        className={`${styles.accordionItemInner} ${
          open ? styles.accordionItemInnerOpen : ""
        }`.trim()}
      >
        <div>{title}</div>
        <span
          className={`${styles.accordionChevron} ${
            open ? styles.accordionChevronOpen : ""
          }`.trim()}
          style={{ minWidth: "12px" }}
        >
          {SVG_CHEVRON}
        </span>
      </div>
      <div ref={bodyRef} className={styles.accordionBody} style={{ height: "0px", wordBreak: "break-word" }}>
        <HtmlParser rawHtml={body} asClasses={styles.richText} />
      </div>
    </div>
  );
}

export default function AccordionSection({ sections }) {
  const hash = useHash();

  const openIndexFor = (section) => {
    if (!hash) return null;
    const index = section.items.findIndex(
      (item) => slugify(item.title) === hash,
    );
    return index === -1 ? null : index;
  };

  useEffect(() => {
    if (!hash) return;
    for (let sIndex = 0; sIndex < sections.length; sIndex++) {
      const index = sections[sIndex].items.findIndex(
        (item) => slugify(item.title) === hash,
      );
      if (index !== -1) {
        const el = document.getElementById(`accordion-${sIndex}-${index}`);
        if (el) el.scrollIntoView({ block: "center" });
        break;
      }
    }
  }, [hash, sections]);

  const toggle = (sIndex, index) => {
    const current = openIndexFor(sections[sIndex]);
    const nextOpen = current === index ? null : index;
    if (nextOpen !== null) {
      const slug = slugify(sections[sIndex].items[nextOpen].title);
      window.history.pushState(null, "", `#${slug}`);
    } else {
      window.history.pushState(null, "", window.location.pathname);
    }
    hashStore.emit();
  };

  return sections.map((section, sIndex) => (
    <div key={sIndex} className={`${styles.section} ${styles.accordionSection}`}>
      <div className={styles.accordionHeadlineWrap}>
        <h2 className={styles.accordionHeading}>
          {section.headline}
        </h2>
      </div>
      <div className={styles.accordionItemsWrap}>
        {section.items.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.title}
            body={item.body}
            id={`accordion-${sIndex}-${i}`}
            tabIndex={0}
            open={openIndexFor(section) === i}
            onToggle={() => toggle(sIndex, i)}
          />
        ))}
      </div>
    </div>
  ));
}

export { slugify };