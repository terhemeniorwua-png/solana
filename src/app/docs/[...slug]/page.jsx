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

export default async function DocsFallbackPage({ params }) {
  const { slug } = await params;
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const page = getDocsPage(slugArray);
  if (!page) notFound();
  const tree = getDocsTree();
  const section = slugArray[0];
  const sectionRoute = `/docs/${section}`;
  const sidebarTree = {
    ...tree,
    children: flattenChildlessFolders(
      getSectionSidebarTree(tree, sectionRoute).children
    ),
  };
  const toc = extractToc(page.body);
  const href = `/docs/${slugArray.join("/")}`;

  return (
    <DocsPageView
      title={page.data.title}
      description={page.data.description}
      filePath={page.filePath}
      toc={toc}
      hideTableOfContents={page.data.hideTableOfContents}
      hidePageNavigation={page.data.hidePageNavigation}
      href={href}
      sidebarTree={sidebarTree}
      pageTree={getSectionSidebarTree(tree, sectionRoute)}
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