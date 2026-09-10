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

export async function generateMetadata() {
  const page = getDocsPage(["intro", "installation"]);
  return {
    title:
      (page?.data && (page.data.seoTitle || page.data.title)) ||
      "Local Installation",
    description: page?.data?.description,
  };
}

export default async function InstallationPage() {
  const page = getDocsPage(["intro", "installation"]);
  if (!page) notFound();
  const tree = getDocsTree();
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(getMainDocsPageTree(tree).children),
  };
  const toc = extractToc(page.body);
  const mainTree = getMainDocsPageTree(tree);

  return (
    <DocsPageView
      title={page.data.h1 || page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      href="/docs/intro/installation"
      sidebarTree={sidebarTree}
      pageTree={mainTree}
      crumbs={[{ name: page.data.h1 || page.data.title }]}
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