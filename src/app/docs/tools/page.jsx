import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/docs/mdx-components";
import {
  getDocsPage,
  getDocsTree,
  getToolsSidebarTree,
  getToolsNavigationTree,
  flattenChildlessFolders,
} from "@/data/docs";
import {
  DocsPageView,
  extractToc,
} from "@/app/components/docs/DocsPageView";

export const revalidate = 604800;

export const metadata = {
  title: "Developer Resources",
  description:
    "The full catalog of Solana developer resources - API references, SDKs, CLI, cookbook recipes, courses, and tools.",
};

export default async function ToolsDocsPage() {
  const page = getDocsPage(["tools"]);
  if (!page) notFound();
  const tree = getDocsTree();
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(getToolsSidebarTree(tree).children),
  };
  const toc = extractToc(page.body);

  return (
    <DocsPageView
      title={page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      href="/docs/tools"
      hideTableOfContents
      hidePageNavigation
      sidebarTree={sidebarTree}
      pageTree={getToolsNavigationTree(tree)}
      crumbs={[{ name: page.data.title }]}
      markdown={`${page.body}`}
    >
      <MDXRemote
        source={page.body}
        components={mdxComponents}
        options={{
          parseFrontmatter: true,
          mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
        }}
      />
    </DocsPageView>
  );
}