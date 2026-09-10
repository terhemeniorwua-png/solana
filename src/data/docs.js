import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const CONTENT_DIR = join(process.cwd(), "content/docs/en");

export const STANDALONE_ROUTES = [
  "/docs/core",
  "/docs/tokens",
  "/docs/references",
  "/docs/rpc",
  "/docs/finance",
  "/docs/payments",
  "/docs/tokenization",
  "/docs/defi",
  "/docs/tools",
];

export function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const frontmatter = {};
  let body = source;
  if (match) {
    body = source.slice(match[0].length);
    const section = match[1];
    const lines = section.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (kv) {
        frontmatter[kv[1]] = kv[2].trim().replace(/^"|"$/g, "");
      } else if (line.startsWith("  ")) {
        const key = Object.keys(frontmatter).at(-1);
        if (key) frontmatter[key] += " " + line.trim().replace(/^"|"$/g, "");
      } else if (line.trim() !== "") {
        const key = Object.keys(frontmatter).at(-1);
        if (key) frontmatter[key] += " " + line.trim().replace(/^"|"$/g, "");
      }
    }
  }
  return { data: frontmatter, body };
}

export function readDocFile(relPath) {
  const filePath = join(CONTENT_DIR, relPath);
  let source;
  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
  const { data, body } = parseFrontmatter(source);
  return { data, body };
}

function readMeta(dir) {
  const filePath = join(dir, "meta.json");
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function toUrl(urlPrefix, entry) {
  return `${urlPrefix}/${entry}`;
}

function isSeparator(entry) {
  return entry.startsWith("---") && entry.endsWith("---");
}

function isLinkEntry(entry) {
  return entry.startsWith("[");
}

function entryLink(entry) {
  const match = entry.match(/^\[([\s\S]*?)\]\((.*?)\)$/);
  if (!match) return { name: entry, url: "" };
  return { name: match[1], url: match[2] };
}

function pageTitle(data) {
  return data.sidebarLabel || data.title || data.h1;
}

function buildFolderNode(dir, urlPrefix) {
  const meta = readMeta(dir);
  if (!meta) return null;
  const children = [];
  const entries = Array.isArray(meta.pages) ? meta.pages : [];
  for (const entry of entries) {
    if (!entry || isSeparator(entry)) {
      const name = isSeparator(entry)
        ? entry.slice(3, -3).trim()
        : null;
      if (entry === "---") continue;
      children.push({ type: "separator", name });
      continue;
    }
    if (isLinkEntry(entry)) {
      const { name, url } = entryLink(entry);
      children.push({ type: "page", name, url, data: {} });
      continue;
    }
    const entryDir = join(dir, entry);
    if (existsSync(entryDir) && statSync(entryDir).isDirectory()) {
      const child = buildFolderNode(entryDir, toUrl(urlPrefix, entry));
      if (child) children.push(child);
      continue;
    }
    const filePath = join(dir, `${entry}.mdx`);
    if (existsSync(filePath)) {
      const { data } = parseFrontmatter(readFileSync(filePath, "utf8"));
      children.push({
        type: "page",
        name: pageTitle(data),
        url: toUrl(urlPrefix, entry),
        data,
      });
      continue;
    }
  }

  const indexFile = join(dir, "index.mdx");
  let index = null;
  if (existsSync(indexFile)) {
    const { data } = parseFrontmatter(readFileSync(indexFile, "utf8"));
    index = {
      type: "page",
      name: pageTitle(data) || meta.title,
      url: urlPrefix,
      data,
    };
  }

  return {
    type: "folder",
    name: meta.title,
    index,
    children,
    defaultOpen: meta.defaultOpen === true,
  };
}

let cachedTree = null;

export function getDocsTree() {
  if (cachedTree) return cachedTree;
  const rootMeta = readMeta(CONTENT_DIR);
  const root = buildFolderNode(CONTENT_DIR, "/docs");
  cachedTree = {
    name: rootMeta?.title || "Documentation",
    children: root ? root.children : [],
  };
  return cachedTree;
}

export function getDocsPage(slug) {
  const rel = slug.join("/");
  const direct = readDocFile(`${rel}.mdx`);
  if (direct) return { ...direct, url: `/docs/${rel}`, filePath: `${rel}.mdx` };
  const index = readDocFile(`${rel}/index.mdx`);
  if (index) return { ...index, url: `/docs/${rel}`, filePath: `${rel}/index.mdx` };
  return null;
}

function folderContainsRoute(node, route) {
  if (node.type === "page") return node.url?.includes(route) ?? false;
  if (node.type === "folder") {
    if (node.index?.url?.includes(route)) return true;
    return node.children.some((child) => folderContainsRoute(child, route));
  }
  return false;
}

export function getMainDocsPageTree(tree) {
  return {
    ...tree,
    children: (tree.children ?? [])
      .filter(
        (child) =>
          child.type !== "folder" ||
          !STANDALONE_ROUTES.some((route) => folderContainsRoute(child, route)),
      )
      .flatMap((child) =>
        child.type === "folder" && folderContainsRoute(child, "/docs/intro")
          ? child.children
          : [child],
      ),
  };
}

export function getSectionSidebarTree(tree, route) {
  const folder = (tree.children ?? []).find(
    (child) =>
      child.type === "folder" &&
      (child.index?.url === route ||
        child.children.some((c) => folderContainsRoute(c, route))),
  );
  if (!folder) return { ...tree, children: [] };
  return {
    ...tree,
    children: folder.children,
  };
}

export function getToolsSidebarTree(tree) {
  const folder = (tree.children ?? []).find(
    (child) =>
      child.type === "folder" &&
      child.index?.url?.endsWith("/docs/tools"),
  );
  if (!folder) return { ...tree, children: [] };
  return {
    ...tree,
    children: [folder.index, ...folder.children].filter(Boolean),
  };
}

export function getToolsNavigationTree(tree, activeTool) {
  const folder = (tree.children ?? []).find(
    (child) =>
      child.type === "folder" && child.index?.url?.endsWith("/docs/tools"),
  );
  if (!folder || !activeTool) {
    return { ...tree, children: folder ? [folder] : [] };
  }
  const node = folder.children.find(
    (child) => getToolSlug(getLandingPage(child)?.url) === activeTool,
  );
  if (!node) {
    return { ...tree, children: folder.index ? [folder.index, ...folder.children] : [...folder.children] };
  }
  if (node.type !== "folder") return { ...tree, children: [node] };
  return {
    ...tree,
    children: [...(node.index ? [node.index] : []), ...node.children],
  };
}

function getLandingPage(node) {
  if (node.type === "page") return node;
  if (node.type === "folder") return node.index;
}

function getToolSlug(url) {
  if (!url) return undefined;
  const toolsPath = "/docs/tools/";
  const start = url.indexOf(toolsPath);
  if (start < 0) return undefined;
  return url.slice(start + toolsPath.length).split(/[/?#]/, 1)[0];
}

export function findNeighbour(tree, pageUrl) {
  const nodes = [];
  const walk = (node) => {
    if (node.type === "separator") return;
    if (node.type === "page") {
      nodes.push(node);
      return;
    }
    if (node.type === "folder") {
      if (node.index) nodes.push(node.index);
      node.children.forEach(walk);
    }
  };
  (tree.children ?? []).forEach(walk);
  const index = nodes.findIndex((node) => node.url === pageUrl);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? nodes[index - 1] : undefined,
    next: index < nodes.length - 1 ? nodes[index + 1] : undefined,
  };
}

export function getFirstPage(node) {
  if (!node) return null;
  if (node.type === "page") return node;
  if (node.children || node.index) {
    const firstChild = node.index ? node.index : node.children[0];
    return firstChild ? getFirstPage(firstChild) : null;
  }
  return null;
}

export function flattenChildlessFolders(nodes) {
  return nodes.map((node) => {
    if (node.type !== "folder") return node;
    const children = flattenChildlessFolders(node.children);
    if (node.index && children.length === 0) {
      return { ...node.index, icon: node.index.icon ?? node.icon };
    }
    return { ...node, children };
  });
}

export function getDocCategoryChildren(folderNode) {
  if (!folderNode) return [];
  const children = folderNode.children ?? [];
  const items = [];
  for (const child of children) {
    if (child.type === "separator") continue;
    if (child.type === "folder") {
      items.push({
        ...child,
        url: child.index?.url || child.children[0]?.url || "",
      });
    } else {
      items.push(child);
    }
  }
  return items;
}