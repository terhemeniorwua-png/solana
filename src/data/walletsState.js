// Ported from solana-com apps/web/src/app/[locale]/wallets/wallet-directory-state.ts
import { WALLET_CATEGORIES, WALLET_FEATURES, WALLET_PLATFORMS } from "./walletTaxonomy";

export const DEFAULT_DIRECTORY_STATE = {
  scope: "native",
  category: "all",
  platforms: [],
  features: [],
  search: "",
  view: "grid",
};

function parseCsv(value, allowedValues) {
  if (!value) {
    return [];
  }
  return value
    .split(",")
    .filter((item) => allowedValues.includes(item));
}

export function parseDirectoryState(searchParams) {
  const category = searchParams.get("category");
  const view = searchParams.get("view");
  const features = parseCsv(searchParams.get("features"), WALLET_FEATURES);

  return {
    scope: searchParams.get("scope") === "all" ? "all" : "native",
    category:
      category && WALLET_CATEGORIES.includes(category) ? category : "all",
    platforms: parseCsv(searchParams.get("platform"), WALLET_PLATFORMS),
    features: features.filter((feature) => feature !== "solana_native"),
    search: searchParams.get("q") ?? "",
    view: view === "list" ? "list" : "grid",
  };
}

export function buildDirectorySearchParams(state) {
  const params = new URLSearchParams();

  if (state.scope === "all") {
    params.set("scope", "all");
  }

  if (state.category !== "all") {
    params.set("category", state.category);
  }

  if (state.platforms.length) {
    params.set("platform", state.platforms.join(","));
  }

  if (state.features.length) {
    params.set("features", state.features.join(","));
  }

  if (state.search.trim()) {
    params.set("q", state.search.trim());
  }

  if (state.view !== DEFAULT_DIRECTORY_STATE.view) {
    params.set("view", state.view);
  }

  return params;
}