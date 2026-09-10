import DevelopersNav from "@/app/components/developers/DevelopersNav";
import DevelopersHeroSection from "@/app/components/developers/DevelopersHeroSection";
import DevelopersCoursesSection from "@/app/components/developers/DevelopersCoursesSection";
import DevelopersResourcesSection from "@/app/components/developers/DevelopersResourcesSection";
import DevelopersDocumentsSection from "@/app/components/developers/DevelopersDocumentsSection";
import DevelopersContentSection from "@/app/components/developers/DevelopersContentSection";
import { MessageBubbleDots } from "@boxicons/react/MessageBubbleDots";
import { developersCopy } from "@/data/developers";
import "@/app/learn/docs-typography.css";

const featuredResources = [
  {
    category: "Payments",
    title: "Accept payments on Solana",
    description:
      "Take stablecoin payments with instant settlement and sub-cent fees.",
    href: "/docs/payments",
  },
  {
    category: "Assets",
    title: "Launch a Token-2022 asset",
    description:
      "Create a mint with metadata, pausability, and built-in controls.",
    href: "/docs/tokenization/quickstart",
  },
  {
    category: "Assets",
    title: "Explore tokenized assets",
    description: "Issue, control, settle, and operate assets onchain.",
    href: "/docs/tokenization",
  },
  {
    category: "Games",
    title: "Get started with game development",
    description: "Build onchain games with the Solana games cookbook.",
    href: "/developers/cookbook/games/getting-started-with-game-development",
  },
  {
    category: "Infrastructure",
    title: "Explore developer tools",
    description: "Find SDKs, local testing, infrastructure, and references.",
    href: "/docs/tools",
  },
];

export const metadata = {
  title: "Developers: Resources and Information for Building on Solana",
  description:
    "Learn why Solana is used by the best and brightest teams in crypto. Explore our guides and examples to start building on the Solana blockchain.",
};

export default function DevelopersPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <DevelopersHeroSection
          title={developersCopy.hero.title}
          description={developersCopy.hero.description}
          img={{
            src: "/img/developers/hero-geometry.png",
          }}
          buttons={{
            cta: {
              label: developersCopy.hero.build,
              href: "/docs/intro/quick-start",
              prefetch: false,
            },
            secondary: {
              label: developersCopy.hero.support,
              href: "https://solana.stackexchange.com",
              icon: (
                <MessageBubbleDots
                  width={20}
                  height={20}
                  pack="filled"
                  aria-hidden="true"
                />
              ),
            },
          }}
        />
        <DevelopersCoursesSection />
        <DevelopersResourcesSection
          items={featuredResources}
          baseHref={`/docs`}
          title={developersCopy.guides.title}
          description={developersCopy.guides.description}
        />
        <DevelopersDocumentsSection latestVideo={null} />
        <DevelopersContentSection />
      </div>
    </div>
  );
}