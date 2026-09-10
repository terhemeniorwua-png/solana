import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/docs/mdx-components";
import {
  getDocsPage,
  getDocsTree,
  getSectionSidebarTree,
  flattenChildlessFolders,
} from "@/data/docs";
import {
  DocsPageView,
  extractToc,
} from "@/app/components/docs/DocsPageView";

export const revalidate = 604800;

export const metadata = {
  title: "Core Concepts",
  description:
    "Solana's core building blocks, including accounts, programs, instructions, transactions, fees, program-derived addresses, and cross-program invocations.",
};

export default async function CoreDocsPage() {
  const page = getDocsPage(["core"]);
  if (!page) notFound();
  const tree = getDocsTree();
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(
      getSectionSidebarTree(tree, "/docs/core").children
    ),
  };
  const toc = extractToc(page.body);

  return (
    <DocsPageView
      title={page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      href="/docs/core"
      sidebarTree={sidebarTree}
      pageTree={getSectionSidebarTree(tree, "/docs/core")}
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