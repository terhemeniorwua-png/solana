// Ported from solana-com packages/ecosystem-data/src/wallets/taxonomy.ts
const WALLET_CATEGORY_LABELS = {
  consumer: "Wallets",
  hardware: "Hardware",
  infrastructure: "Developer tools",
  institutional: "Institutional",
  payments: "Payments",
};

export const WALLET_CATEGORIES = Object.keys(WALLET_CATEGORY_LABELS);

const WALLET_PLATFORM_LABELS = {
  ios: "iOS",
  android: "Android",
  chrome: "Chrome",
  firefox: "Firefox",
  brave: "Brave",
  edge: "Edge",
  desktop: "Desktop",
  web: "Web",
  hardware: "Hardware",
  api: "API",
  sdk: "SDK",
};

export const WALLET_PLATFORMS = Object.keys(WALLET_PLATFORM_LABELS);

const WALLET_FEATURE_METADATA = {
  custodial: {
    label: "Custodial",
    description: "The provider controls custody or account access for users.",
  },
  non_custodial: {
    label: "Self-custody",
    description: "Users control their keys or signing authority.",
  },
  te: {
    label: "Token Extensions",
    description: "Supports Solana Token Extensions capabilities.",
  },
  blinks_and_actions: {
    label: "Blinks and Actions",
    description: "Supports Solana Actions or Blinks transaction flows.",
  },
  solana_pay: {
    label: "Solana Pay",
    description: "Supports Solana Pay payment flows.",
  },
  buy_crypto: {
    label: "Buy crypto",
    description: "Lets users buy crypto from fiat or linked accounts.",
  },
  sell_crypto: {
    label: "Sell crypto",
    description: "Lets users directly cash out crypto to a fiat account.",
  },
  get_paid: {
    label: "Get paid",
    description:
      "Lets users or businesses accept payments, payment requests, or payouts.",
  },
  card_spending: {
    label: "Card spending",
    description:
      "Provides an integrated payment card for spending wallet or account balances.",
  },
  hold_nfts: {
    label: "NFTs",
    description: "Displays or manages NFTs and collectibles.",
  },
  mpc: {
    label: "MPC",
    description: "Uses multi-party computation for key management.",
  },
  gas_abstraction: {
    label: "Gas abstraction",
    description: "Can hide or sponsor network fee complexity.",
  },
  social_recovery: {
    label: "Social recovery",
    description: "Supports account recovery through trusted or social flows.",
  },
  staking: {
    label: "Staking",
    description: "Supports SOL staking or staking account management.",
  },
  spending_limits: {
    label: "Spending limits",
    description:
      "Provides configurable spend controls or transaction policies.",
  },
  open_source: {
    label: "Open source",
    description: "Publishes relevant source code or SDKs.",
  },
  hardware: {
    label: "Hardware support",
    description: "Works as or with a hardware wallet.",
  },
  private_key_infrastructure: {
    label: "Key infrastructure",
    description: "Provides key custody or signing infrastructure.",
  },
  multi_chain: {
    label: "Multi-chain",
    description: "Supports multiple blockchain networks.",
  },
  solana_native: {
    label: "Solana native",
    description: "Built primarily for Solana users or Solana-first flows.",
  },
  multi_sig: {
    label: "Multisig",
    description: "Supports multiple approvals for account or treasury control.",
  },
};

export const WALLET_FEATURES = Object.keys(WALLET_FEATURE_METADATA);

export const FEATURED_EVERYDAY_WALLET_IDS = [
  "solflare",
  "backpack",
  "phantom",
  "fuse",
  "jupiter",
];

const FEATURED_EVERYDAY_WALLET_COUNT = 4;

export function getFeaturedEverydayWallets(wallets, { randomize = false, random = Math.random } = {}) {
  const candidates = FEATURED_EVERYDAY_WALLET_IDS.flatMap((id) => {
    const wallet = wallets.find(
      (candidate) => candidate.id === id && candidate.category === "consumer",
    );
    return wallet ? [wallet] : [];
  });

  if (randomize) {
    for (let index = candidates.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [candidates[index], candidates[swapIndex]] = [
        candidates[swapIndex],
        candidates[index],
      ];
    }
  }

  return candidates.slice(0, FEATURED_EVERYDAY_WALLET_COUNT);
}

const PAYMENT_CATEGORY_FEATURES = ["buy_crypto", "sell_crypto", "get_paid", "card_spending"];

export function buildWalletCategories(category, features) {
  const categories = [category];
  const supportsPayments = PAYMENT_CATEGORY_FEATURES.some((feature) =>
    features.includes(feature),
  );

  if (supportsPayments && !categories.includes("payments")) {
    categories.push("payments");
  }

  return categories;
}