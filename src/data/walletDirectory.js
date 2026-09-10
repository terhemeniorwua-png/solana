// Ported from solana-com apps/web/src/app/[locale]/wallets/get-wallet-directory.ts
import { DEFAULT_WALLET_ICON, WALLET_DATA } from "./walletData";
import { buildWalletCategories } from "./walletTaxonomy";

const SOLANA_MAINNET = "Solana Mainnet";

function getWalletIconUrls(recordIcon) {
  const recordIconUrl = recordIcon || undefined;
  const candidates = [recordIconUrl, DEFAULT_WALLET_ICON];
  return [...new Set(candidates.filter((url) => Boolean(url)))];
}

function sortWallets(wallets) {
  return [...wallets].sort((a, b) => a.name.localeCompare(b.name));
}

function buildWalletEntries() {
  return sortWallets(
    Object.entries(WALLET_DATA).map(([slug, record]) => {
      const iconUrls = getWalletIconUrls(record.icon);

      return {
        id: slug,
        name: record.name,
        tagline: record.tagline,
        slug,
        companyId: record.companyId,
        category: record.category,
        categories: buildWalletCategories(record.category, record.features),
        platforms: record.platforms,
        features: record.features,
        description: record.description,
        website: record.website,
        iconUrl: iconUrls[0],
        iconUrls,
        supportedChains: [SOLANA_MAINNET],
        supportedAssets: [],
        lastVerified: record.lastVerified,
      };
    }),
  );
}

function getLastReviewed(wallets) {
  return wallets.reduce((latest, wallet) => {
    if (!wallet.lastVerified) {
      return latest;
    }
    return !latest || wallet.lastVerified > latest ? wallet.lastVerified : latest;
  }, undefined);
}

export function getWalletDirectoryData() {
  const wallets = buildWalletEntries();
  return {
    wallets,
    lastReviewed: getLastReviewed(wallets),
  };
}