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
  title: "Solana RPC Methods",
  description:
    "Solana's Remote Procedure Call (RPC) API methods for reading blockchain data, submitting transactions, and interacting with the network.",
};

export default async function RpcDocsPage() {
  const page = getDocsPage(["rpc"]);
  if (!page) notFound();
  const tree = getDocsTree();
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(
      getSectionSidebarTree(tree, "/docs/rpc").children
    ),
  };
  const toc = extractToc(page.body);

  return (
    <DocsPageView
      title={page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      href="/docs/rpc"
      sidebarTree={sidebarTree}
      pageTree={getSectionSidebarTree(tree, "/docs/rpc")}
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