import { createElement, Children, cloneElement, Fragment } from "react";
import NextLink from "next/link";
import { Rocket } from "@boxicons/react/Rocket";
import { Tabs, Tab } from "@/app/components/docs/Tabs";
import { Accordion, Accordions } from "@/app/components/docs/Accordion";
import { CodeTabs } from "@/app/components/docs/CodeTabs";

const HEADING_LEVELS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

function isInternal(href) {
  return (
    typeof href === "string" && href.startsWith("/") && !href.startsWith("//")
  );
}

function MdxLink({ href = "", children }) {
  if (href.startsWith("tools:")) return createElement(Fragment, null, children);
  if (isInternal(href)) {
    return createElement(NextLink, { href, prefetch: false, className: "docs-anchor" }, children);
  }
  return createElement(
    "a",
    { href, target: "_blank", rel: "noopener noreferrer", className: "docs-anchor" },
    children
  );
}

function Heading({ level, id, children, ...props }) {
  const Element = level;
  return createElement(
    Element,
    { ...props, id, className: "docs-heading" },
    createElement("a", { href: `#${id}`, className: "docs-heading-anchor" }, children)
  );
}

function MdxImage(props) {
  const { alt = "", ...rest } = props;
  const src = typeof props.src === "string" ? props.src : "";
  const isThemed =
    (src.startsWith("/assets/docs/core/") ||
      (src.startsWith("/assets/docs/tools/") && src.endsWith(".svg")) ||
      src === "/assets/docs/tools/kora/kora.svg") &&
    src.endsWith(".svg");
  if (isThemed) {
    return createElement(ThemedDiagram, { ...props, src, alt, showCaption: true });
  }
  return createElement(
    Fragment,
    null,
    createElement(
      "span",
      { className: "docs-img-block" },
      createElement("img", { ...rest, alt, className: "docs-img" })
    ),
    createElement("span", { className: "docs-img-caption" }, alt)
  );
}

export function ThemedDiagram({ src, alt = "", className = "", showCaption = false, ...props }) {
  const lightSrc = src.replace(/\.svg$/, "-light.svg");
  return createElement(
    "figure",
    { className: `docs-diagram ${className}` },
    createElement("img", {
      ...props,
      src: lightSrc,
      alt,
      className: "docs-diagram-light",
      decoding: "async",
      loading: "lazy",
    }),
    createElement("img", {
      ...props,
      src,
      alt,
      className: "docs-diagram-dark",
      decoding: "async",
      loading: "lazy",
    }),
    showCaption && alt
      ? createElement("figcaption", { className: "docs-diagram-caption" }, alt)
      : null
  );
}

export function Cards({ children }) {
  return createElement("div", { className: "docs-cards" }, children);
}

export function Card({ title, href = "", icon, children }) {
  const contentWrapper = createElement(
    "div",
    { className: "docs-card-body" },
    createElement("span", { className: "docs-card-title" }, title),
    children ? createElement("span", { className: "docs-card-desc" }, children) : null
  );
  const inner = createElement(
    "div",
    { className: "docs-card-inner" },
    icon ? createElement("span", { className: "docs-card-icon" }, icon) : null,
    contentWrapper
  );
  if (isInternal(href)) {
    return createElement(
      NextLink,
      { href, prefetch: false, className: "docs-card", "data-cmp": "card" },
      inner
    );
  }
  return createElement(
    "a",
    { href, target: "_blank", rel: "noopener noreferrer", className: "docs-card" },
    inner
  );
}

export function Steps({ children }) {
  let counter = 0;
  const numbered = Children.map(children, (child) => {
    counter += 1;
    return cloneElement(child, { "data-step": counter });
  });
  return createElement("div", { className: "docs-steps" }, numbered);
}

export function Step({ children }) {
  return createElement("div", { className: "docs-step" }, children);
}

export function Callout({ title, type = "info", children }) {
  const iconMap = {
    info: "ℹ",
    default: "ℹ",
    warn: "⚠",
    warning: "⚠",
    error: "✕",
    danger: "✕",
  };
  const icon = iconMap[type] || "ℹ";
  return createElement(
    "div",
    { className: `docs-callout docs-callout-${type}` },
    createElement("span", { className: "docs-callout-icon" }, icon),
    createElement(
      "div",
      { className: "docs-callout-content" },
      title ? createElement("strong", { className: "docs-callout-title" }, title) : null,
      createElement("div", null, children)
    )
  );
}

function DocsLandingHeaderHeading({ children }) {
  return createElement("h1", { className: "docs-body-h1" }, children);
}

function buildHeadingComponents() {
  const components = {};
  HEADING_LEVELS.forEach((level) => {
    components[level] = (props) => createElement(Heading, { ...props, level });
  });
  return components;
}

const iconMap = { Rocket };

export const mdxComponents = {
  ...buildHeadingComponents(),
  a: MdxLink,
  img: MdxImage,
  Cards,
  Card,
  DocsDiagram: (props) =>
    createElement(ThemedDiagram, { ...props, className: "first:-mt-6" }),
  Steps,
  Step,
  Callout,
  Tabs,
  Tab,
  CodeTabs,
  Accordion,
  Accordions,
  Rocket: (props) => createElement(iconMap.Rocket, { width: 20, height: 20, ...props }),
};