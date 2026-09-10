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

export async function generateStaticParams() {
  const tree = getDocsTree();
  const rpcTree = getSectionSidebarTree(tree, "/docs/rpc");
  const collectSlugs = (node, prefix = []) => {
    const slugs = [];
    if (node.children) {
      for (const child of node.children) {
        if (child.type === "file" && !child.name.endsWith("index")) {
          slugs.push({ slug: [...prefix, child.name] });
        }
        if (child.type === "folder" && child.children) {
          for (const sub of child.children) {
            if (sub.type === "file" && !sub.name.endsWith("index")) {
              slugs.push({ slug: [...prefix, child.name, sub.name] });
            }
          }
        }
      }
    }
    return slugs;
  };
  return collectSlugs(rpcTree);
}

export default async function RpcChildPage({ params }) {
  const { slug } = await params;
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const page = getDocsPage(["rpc", ...slugArray]);
  if (!page) notFound();
  const tree = getDocsTree();
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(
      getSectionSidebarTree(tree, "/docs/rpc").children
    ),
  };
  const toc = extractToc(page.body);
  const href = `/docs/rpc/${slugArray.join("/")}`;

  return (
    <DocsPageView
      title={page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      href={href}
      sidebarTree={sidebarTree}
      pageTree={getSectionSidebarTree(tree, "/docs/rpc")}
      crumbs={[{ name: "RPC" }, { name: page.data.title }]}
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