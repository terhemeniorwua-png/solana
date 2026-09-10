import { readFileSync } from "node:fs";
import { join } from "node:path";
import { tutorialSlugs } from "@/data/learn";

const CONTENT_DIR = join(process.cwd(), "content/learn/en");

export function allArticleSlugs() {
  return [...tutorialSlugs, "getting-started"];
}

export function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const frontmatter = {};
  let body = source;
  if (match) {
    body = source.slice(match[0].length);
    const section = match[1];
    const current = { name: null, value: null };
    for (const line of section.split(/\r?\n/)) {
      const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (kv) {
        if (current.name) frontmatter[current.name] = current.value.trim();
        current.name = kv[1];
        current.value = kv[2];
      } else if (current.name) {
        current.value += " " + line.trim();
      }
    }
    if (current.name) frontmatter[current.name] = current.value.trim();
  }
  return { data: frontmatter, body };
}

export function readArticle(slug) {
  const filePath = join(CONTENT_DIR, `${slug}.mdx`);
  let source;
  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
  const { data, body } = parseFrontmatter(source);
  return {
    slug,
    data,
    source: body,
  };
}

export function slugifyHeading(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}