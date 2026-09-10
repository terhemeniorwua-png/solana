import { NavigationHubPage } from "@/app/components/hub/hub-page";
import { useSolanaHubConfig } from "@/data/useSolanaHub";

export const revalidate = 60;

export default function Page() {
  return <NavigationHubPage config={useSolanaHubConfig} />;
}

export async function generateMetadata() {
  return {
    title: useSolanaHubConfig.metaTitle,
    description: useSolanaHubConfig.metaDescription,
  };
}