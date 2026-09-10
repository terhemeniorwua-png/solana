import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/app/learn/mdx-components";
import { learnCopy, tutorialSlugs } from "@/data/learn";
import { allArticleSlugs, readArticle } from "@/app/learn/article-utils";
import ChapterIndicator from "@/app/components/learn/ChapterIndicator";
import ChapterNavigation from "@/app/components/learn/ChapterNavigation";
import MobileChapterNavigation from "@/app/components/learn/MobileChapterNavigation";
import TutorialNavigation from "@/app/components/learn/TutorialNavigation";
import "@/app/learn/docs-typography.css";

export const revalidate = 604800;

export function generateStaticParams() {
  return allArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = readArticle(slug);
  if (!page) notFound();
  return {
    title: page.data.seoTitle || page.data.title,
    description: page.data.description,
  };
}

export default async function LearnContentPage({ params }) {
  const { slug } = await params;
  const article = readArticle(slug);
  if (!article) notFound();

  const { data, source } = article;

  const t = learnCopy;

  const currentSlug = slug;
  const currentIndex = tutorialSlugs.indexOf(currentSlug);
  const prevSlug = currentIndex > 0 ? tutorialSlugs[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < tutorialSlugs.length - 1
      ? tutorialSlugs[currentIndex + 1]
      : null;

  const items = t.tutorials.items;

  const prevTitle = prevSlug ? items[prevSlug].title : null;
  const nextTitle = nextSlug ? items[nextSlug].title : null;
  const prevCategory = prevSlug ? items[prevSlug].category : null;
  const nextCategory = nextSlug ? items[nextSlug].category : null;

  const tutorialsWithTranslations = tutorialSlugs.map((slug, index) => ({
    id: index + 1,
    slug,
    title: items[slug].title,
    category: items[slug].category,
  }));

  const category = items[currentSlug]?.category;

  return (
    <div className="docs-shell">
      <div className="container-fluid py-12 md:py-12">
        <div className="container">
          <div className="relative flex justify-center">
            <main className="w-full max-w-4xl px-4">
              <article role="article" aria-labelledby="article-title">
                <ChapterIndicator
                  currentIndex={currentIndex}
                  nextSlug={nextSlug}
                  nextTitle={nextTitle}
                  translations={{
                    currentChapter: t.navigation.currentChapter,
                    chapter: t.navigation.chapter,
                    chapterCategory: t.navigation.chapterCategory,
                    goToNextChapter: t.navigation.goToNextChapter,
                    next: t.navigation.next,
                  }}
                  category={category}
                />

                <MobileChapterNavigation
                  currentSlug={currentSlug}
                  tutorials={tutorialsWithTranslations}
                  translations={{
                    toggleChapterNavigation:
                      t.navigation.toggleChapterNavigation,
                    chapters: t.navigation.chapters,
                    chapterNavigationAriaLabel:
                      t.navigation.chapterNavigationAriaLabel,
                    chapterNumber: t.navigation.chapterNumber,
                  }}
                />

                <header className="mb-12">
                  <h1 id="article-title" className="h1 mb-4">
                    {data.h1 || data.title}
                  </h1>
                  {data.description && (
                    <p className="lead text-white">{data.description}</p>
                  )}
                </header>

                <div className="prose prose-xl max-w-none">
                  <MDXRemote
                    source={source}
                    components={mdxComponents}
                    options={{
                      parseFrontmatter: true,
                      mdxOptions: { rehypePlugins: [rehypeSlug] },
                    }}
                  />
                </div>

                <TutorialNavigation
                  prevSlug={prevSlug}
                  nextSlug={nextSlug}
                  prevTitle={prevTitle}
                  nextTitle={nextTitle}
                  prevCategory={prevCategory}
                  nextCategory={nextCategory}
                  currentIndex={currentIndex}
                  translations={{
                    tutorialNavigationAriaLabel:
                      t.navigation.tutorialNavigationAriaLabel,
                    previousChapterAriaLabel:
                      t.navigation.previousChapterAriaLabel,
                    nextChapterAriaLabel: t.navigation.nextChapterAriaLabel,
                    previous: t.navigation.previous,
                    next: t.navigation.next,
                  }}
                />
              </article>
            </main>

            <ChapterNavigation
              currentSlug={currentSlug}
              tutorials={tutorialsWithTranslations}
              translations={{
                chapters: t.navigation.chapters,
                chapterNavigationAriaLabel:
                  t.navigation.chapterNavigationAriaLabel,
                chapterNumber: t.navigation.chapterNumber,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}