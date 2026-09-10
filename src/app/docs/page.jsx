import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/docs/mdx-components";
import {
  getDocsPage,
  getDocsTree,
  getMainDocsPageTree,
  flattenChildlessFolders,
} from "@/data/docs";
import {
  DocsPageView,
  extractToc,
} from "@/app/components/docs/DocsPageView";

export const revalidate = 604800;
export const metadata = {
  title: "Start building on Solana",
  description:
    "Choose a quickstart, code with an AI agent, or learn how Solana works.",
};

export default async function DocsIndexPage() {
  const page = getDocsPage([]);
  if (!page) notFound();
  const tree = getDocsTree();
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(getMainDocsPageTree(tree).children),
  };
  const toc = extractToc(page.body);

  return (
    <DocsPageView
      title={page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      href="/docs"
      sidebarTree={sidebarTree}
      pageTree={getMainDocsPageTree(tree)}
      markdown={`${page.body}`}
      isRoot
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