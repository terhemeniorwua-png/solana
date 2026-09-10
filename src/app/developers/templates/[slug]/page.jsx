import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import DevelopersNav from "@/app/components/developers/DevelopersNav";
import TemplateUseDialog from "@/app/components/templates/TemplateUseDialog";
import { mdxComponents } from "@/app/docs/mdx-components";
import { getTemplates, getTemplate, getTemplateMeta } from "@/data/templates";
import "@/app/components/templates/templates-detail.css";

export const revalidate = 604800;

const README_DIR = join(process.cwd(), "content/templates");

function getTemplateReadme(name) {
  try {
    return readFileSync(join(README_DIR, `${name}.mdx`), "utf8");
  } catch {
    return "";
  }
}

export function generateStaticParams() {
  return getTemplates().map(({ name }) => ({ slug: name }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();
  return {
    title: template.displayName || template.name,
    description: template.description,
  };
}

export default async function TemplatePage({ params }) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();
  const readme = getTemplateReadme(slug);
  const meta = getTemplateMeta(template);
  const command = `npx -y create-solana-dapp@latest -t solana-foundation/templates/${template.path}`;

  return (
    <div className="docs-shell">
      <DevelopersNav />
      <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
        <header className="border-b border-white/[0.08] px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16 xl:px-12 xl:pb-24 xl:pt-20">
          <a
            href="/developers/templates"
            className="inline-flex items-center font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text transition-colors hover:text-white"
          >
            ← Back to templates
          </a>
          <h1 className="nd-heading-2xl mt-8 max-w-5xl text-nd-high-em-text">
            {template.displayName || template.name}
          </h1>
          <p className="mt-5 max-w-2xl nd-body-l text-nd-mid-em-text md:mt-6">
            {template.description}
          </p>
        </header>
        <div className="border-b border-white/[0.08] p-3 md:p-8 xl:p-12">
          <div className="relative overflow-hidden border border-white/[0.12] bg-black shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(202,159,245,0.08),transparent_60%)]"></div>
            <div className="relative flex w-full items-center justify-center">
              <img
                src={template.image}
                alt={`Preview of ${template.name}`}
                width="1200"
                height="630"
                className="h-auto w-full"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="border-b border-white/[0.08] p-5 md:p-8 xl:border-b-0 xl:border-r xl:p-10">
            <div className="xl:sticky xl:top-20">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
                  <h2 className="font-brand-mono text-[12px] font-medium uppercase tracking-[0.08em] text-white">
                    Template details
                  </h2>
                  <a
                    href={template.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-nd-mid-em-text transition-colors hover:text-white"
                    title="View on GitHub"
                  >
                    GitHub
                  </a>
                </div>
                <dl className="space-y-4">
                  <div className="flex justify-between gap-5 text-sm">
                    <dt className="text-nd-mid-em-text">Author</dt>
                    <dd className="text-right text-nd-high-em-text">Solana</dd>
                  </div>
                  {meta.frameworks.length > 0 && (
                    <div className="flex justify-between gap-5 text-sm">
                      <dt className="text-nd-mid-em-text">Frameworks</dt>
                      <dd className="max-w-[170px] text-right text-nd-high-em-text">
                        {meta.frameworks.join(", ")}
                      </dd>
                    </div>
                  )}
                  {meta.sdks.length > 0 && (
                    <div className="flex justify-between gap-5 text-sm">
                      <dt className="text-nd-mid-em-text">Solana SDKs</dt>
                      <dd className="max-w-[170px] text-right text-nd-high-em-text">
                        {meta.sdks.join(", ")}
                      </dd>
                    </div>
                  )}
                </dl>
                <TemplateUseDialog command={command} />
              </div>
            </div>
          </aside>
          <article className="min-w-0 overflow-hidden p-5 md:p-8 xl:p-12">
            <div className="tpl-prose">
              <MDXRemote
                source={readme}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}