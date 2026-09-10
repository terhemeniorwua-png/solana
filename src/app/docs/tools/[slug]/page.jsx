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

export function generateStaticParams() {
  const toolNames = [
    "actions",
    "ai",
    "kora",
    "keychain",
    "commerce-kit",
    "solana-pay",
    "attestations",
    "private-channels",
    "surfpool",
    "litesvm",
  ];
  return toolNames.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getDocsPage(["tools", slug]);
  if (!page) notFound();
  return {
    title: page.data.seoTitle || page.data.title,
    description: page.data.description,
  };
}

export default async function ToolPage({ params }) {
  const { slug } = await params;
  const page = getDocsPage(["tools", slug]);
  if (!page) notFound();
  const tree = getDocsTree();
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(getToolsSidebarTree(tree).children),
  };
  const toc = extractToc(page.body);
  const navigationTree = getToolsNavigationTree(tree, slug);

  return (
    <DocsPageView
      title={page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      hideTableOfContents={page.data.hideTableOfContents}
      hidePageNavigation={page.data.hidePageNavigation}
      href={`/docs/tools/${slug}`}
      sidebarTree={sidebarTree}
      pageTree={navigationTree}
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