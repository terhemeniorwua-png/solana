import { getWalletDirectoryData } from "@/data/walletDirectory";
import { WalletDirectory } from "./WalletDirectory";

export const revalidate = 604800;

const QUICK_FEATURE_FILTERS = [
  "non_custodial",
  "buy_crypto",
  "card_spending",
  "staking",
  "hold_nfts",
  "hardware",
  "multi_sig",
];

function shuffle(items) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index],
    ];
  }

  return shuffledItems;
}

export default function Page() {
  const data = getWalletDirectoryData();

  return (
    <WalletDirectory
      data={{
        ...data,
        wallets: shuffle(data.wallets),
      }}
      quickFeatureFilters={QUICK_FEATURE_FILTERS}
    />
  );
}

export async function generateMetadata() {
  const { walletsCopy } = await import("@/data/walletCopy");
  const { buildT } = await import("@/lib/i18n");
  const t = buildT(walletsCopy);

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}