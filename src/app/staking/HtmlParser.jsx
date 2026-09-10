import { createElement, Fragment } from "react";
import Link from "next/link";
import styles from "./staking.module.css";

const VOID_TAGS = new Set(["br", "img", "hr", "meta", "link", "input"]);
const BLOCK_TAGS = new Set([
  "p",
  "ul",
  "ol",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "blockquote",
  "div",
  "section",
]);
const KNOWN_TAGS = new Set([
  ...VOID_TAGS,
  ...BLOCK_TAGS,
  "a",
  "strong",
  "em",
  "code",
  "b",
  "i",
  "span",
  "br",
  "img",
]);

function tokenize(html) {
  const tokens = [];
  const re = /<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>|[^<]+/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    const part = match[0];
    if (part.startsWith("<!--")) continue;
    if (part.startsWith("</")) {
      tokens.push({ type: "close", tag: part.slice(2, -1).trim().split(/\s/)[0] });
    } else if (part.startsWith("<")) {
      const m = part.slice(1, -1).trim();
      const tagMatch = m.match(/^([a-zA-Z0-9]+)/);
      const tag = tagMatch ? tagMatch[1] : null;
      if (!tag) continue;
      const attrs = {};
      const attrRe = /([a-zA-Z0-9-_:]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
      let am;
      while ((am = attrRe.exec(m)) !== null) {
        attrs[am[1].toLowerCase()] = am[2] ?? am[3] ?? am[4] ?? "";
      }
      tokens.push({ type: "open", tag, attrs });
    } else {
      tokens.push({ type: "text", text: part });
    }
  }
  return tokens;
}

function kebabCase(str = "") {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function build(tokens) {
  const root = [];
  const stack = [{ tag: "#root", children: root }];
  for (const token of tokens) {
    const top = stack[stack.length - 1];
    if (token.type === "text") {
      top.children.push(token.text);
      continue;
    }
    if (token.type === "close") {
      for (let i = stack.length - 1; i >= 1; i--) {
        if (stack[i].tag === token.tag) {
          stack.length = i;
          break;
        }
      }
      continue;
    }
    if (token.type === "open") {
      const tag = token.tag.toLowerCase();
      if (VOID_TAGS.has(tag) || !KNOWN_TAGS.has(tag)) {
        if (BLOCK_TAGS.has(tag) || tag === "img" || tag === "br") {
          top.children.push({ type: "node", tag, attrs: token.attrs, children: [] });
        }
        continue;
      }
      const node = { type: "node", tag, attrs: token.attrs, children: [] };
      top.children.push(node);
      stack.push(node);
    }
  }
  return root;
}

const TAG_ELEMENTS = {
  p: "p",
  ul: "ul",
  ol: "ol",
  li: "li",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  strong: "strong",
  em: "em",
  b: "b",
  i: "i",
  code: "code",
  blockquote: "blockquote",
  div: "div",
  section: "section",
  span: "span",
};

function remapSrc(src) {
  if (!src) return "";
  return src.replace(/^\/src\/img\//, "/img/");
}

function renderNodes(nodes, keyPrefix = "") {
  return nodes.map((node, i) => {
    const key = `${keyPrefix}${i}`;
    if (typeof node === "string") return node;
    const { tag, attrs, children } = node;
    if (tag === "br") return createElement("br", { key });
    if (tag === "img") {
      return createElement("img", {
        key,
        src: remapSrc(attrs.src || ""),
        alt: attrs.alt || "",
        width: attrs.width ? Number(attrs.width) : undefined,
        height: attrs.height ? Number(attrs.height) : undefined,
        loading: "lazy",
      });
    }
    const Element = TAG_ELEMENTS[tag] || tag;
    const props = {};
    if (tag === "a") {
      const href = attrs.href || "";
      if (href.startsWith("/")) {
        props.href = href;
        if (href === "#" || href === "") {
          props["aria-disabled"] = true;
        }
        return createElement(
          Link,
          { key, href },
          renderNodes(children, `${key}-`)
        );
      }
      props.href = href;
      if (href && !href.startsWith("#")) {
        props.target = "_blank";
        props.rel = "noopener noreferrer";
      }
    }
    if ((tag.startsWith("h") && /^[1-6]$/.test(tag[1])) || tag === "p") {
      if (!attrs.id) {
        props.id = kebabCase(children.filter((c) => typeof c === "string").join(" ")) || undefined;
      } else {
        props.id = attrs.id;
      }
      props.scrollMt = "7rem";
      props.style = { scrollMarginTop: "7rem" };
    }
    return createElement(Element, { key, ...props }, renderNodes(children, `${key}-`));
  });
}

export default function HtmlParser({ rawHtml, className, asClasses = styles.richText }) {
  if (!rawHtml) return null;
  const tokens = tokenize(rawHtml);
  const tree = build(tokens);
  return createElement(
    "div",
    { className: `${className || ""} ${asClasses}`.trim() },
    renderNodes(tree)
  );
}

export { tokenize, build };