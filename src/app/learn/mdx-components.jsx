import { createElement, Fragment } from "react";
import NextLink from "next/link";

const HEADING_LEVELS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

function isInternal(href) {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

function Heading({ level, id, children, ...props }) {
  const Element = level;
  const href = `#${id || ""}`;
  return createElement(
    Element,
    { ...props, id, className: "flex scroll-m-28 flex-row items-center gap-2" },
    createElement(
      "a",
      { "data-card": "", href, className: "peer" },
      children
    ),
    createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className:
          "lucide lucide-link size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100",
        "aria-label": "Link to section",
      },
      createElement("path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      }),
      createElement("path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      })
    )
  );
}

function MdxImage(props) {
  const { alt = "", ...rest } = props;
  return createElement(
    Fragment,
    null,
    createElement("span", { className: "block" },
      createElement("img", { ...rest, alt, className: "w-full mb-4 rounded-lg" })
    ),
    createElement(
      "span",
      { className: "block text-sm text-center text-fd-muted-foreground" },
      alt
    )
  );
}

function MdxLink({ href = "", children }) {
  if (isInternal(href)) {
    return createElement(NextLink, { href }, children);
  }
  return createElement(
    "a",
    { href, target: "_blank", rel: "noopener noreferrer" },
    children
  );
}

function buildHeadingComponents() {
  const components = {};
  HEADING_LEVELS.forEach((level) => {
    components[level] = (props) =>
      createElement(Heading, { ...props, level });
  });
  return components;
}

export const mdxComponents = {
  ...buildHeadingComponents(),
  a: MdxLink,
  img: MdxImage,
};

export default mdxComponents;