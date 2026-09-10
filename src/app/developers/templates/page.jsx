import DevelopersNav from "@/app/components/developers/DevelopersNav";
import TemplatesHero from "@/app/components/templates/TemplatesHero";
import TemplatesExplorer from "@/app/components/templates/TemplatesExplorer";

export const metadata = {
  title: "Solana Developer Templates",
  description:
    "Build faster with production-ready templates for dApps, DeFi protocols, NFT marketplaces, and more. Get started with battle-tested code patterns optimized for the Solana ecosystem.",
};

export default function TemplatesPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <TemplatesHero />
        <TemplatesExplorer />
      </div>
    </div>
  );
}