import LearnPageContent from "@/app/components/learn/learn-page-content";
import { learnCopy, tutorialSlugs } from "@/data/learn";
import "@/app/learn/docs-typography.css";

export const metadata = {
  title: "Learn | Solana",
  description: "Learn about Solana",
};

export const revalidate = 604800;

export default function LearnPage() {
  const t = learnCopy;

  const tutorials = tutorialSlugs.map((slug, index) => ({
    id: index + 1,
    slug,
    title: t.tutorials.items[slug].title,
    description: t.tutorials.items[slug].description,
    category: t.tutorials.items[slug].category,
  }));

  const translations = {
    heroTitle: t.hero.title,
    heroSubtitle: t.hero.subtitle,
    heroStartLearning: t.hero.startLearning,
    heroBuild: t.hero.build,
    tutorialsAriaLabel: t.tutorials.ariaLabel,
    continueJourneyTitle: t.resources.continueJourneyTitle,
    continueJourneySubtitle: t.resources.continueJourneySubtitle,
    resourcesAriaLabel: t.resources.ariaLabel,
    documentationLabel: t.resources.documentation.label,
    documentationDescription: t.resources.documentation.description,
    documentationAriaLabel: t.resources.documentation.ariaLabel,
    cookbookLabel: t.resources.cookbook.label,
    cookbookDescription: t.resources.cookbook.description,
    cookbookAriaLabel: t.resources.cookbook.ariaLabel,
    coursesLabel: t.resources.courses.label,
    coursesDescription: t.resources.courses.description,
    coursesAriaLabel: t.resources.courses.ariaLabel,
    walletsLabel: t.resources.wallets.label,
    walletsDescription: t.resources.wallets.description,
    walletsAriaLabel: t.resources.wallets.ariaLabel,
    opensInNewTabAriaLabel: t.resources.opensInNewTab,
    tutorialPartLabel: t.tutorials.partLabel,
    readMoreLabel: t.tutorials.readMore,
    readMoreAriaLabel: t.tutorials.readMoreAriaLabel,
    developersResourcesLearnMore: t.developers.resources.learnMore,
    developersDocumentsViewAll: t.developers.documents.viewAll,
  };

  return (
    <div className="docs-shell">
      <LearnPageContent tutorials={tutorials} translations={translations} />
    </div>
  );
}