const templates = [
  {
    name: "nextjs",
    displayName: undefined,
    usecase: undefined,
    description: "Next.js, Tailwind, @solana/kit wallet + on-chain actions",
    keywords: ["kit","nextjs","react","solana-kit","tailwind","typescript"],
    path: "kit/nextjs",
    image: "/assets/templates/nextjs.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/kit/nextjs",
    badges: ["Next.js","React","@solana/kit"],
  },
  {
    name: "nextjs-anchor",
    displayName: undefined,
    usecase: undefined,
    description: "Next.js, Tailwind, @solana/kit, Anchor vault program",
    keywords: ["anchor","kit","nextjs","react","solana-kit","tailwind","typescript"],
    path: "kit/nextjs-anchor",
    image: "/assets/templates/nextjs_anchor.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/kit/nextjs-anchor",
    badges: ["Next.js","React","@solana/kit"],
  },
  {
    name: "pinocchio-counter",
    displayName: "Pinocchio Counter",
    usecase: "Program Development",
    description: "Pinocchio Counter Program",
    keywords: ["pinocchio","counter","native","solana-program"],
    path: "kit/pinocchio-counter",
    image: "/assets/templates/pinocchio_counter.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/kit/pinocchio-counter",
    badges: ["Pinocchio"],
  },
  {
    name: "react-vite",
    displayName: undefined,
    usecase: undefined,
    description: "React + Vite, Tailwind, @solana/react-hooks",
    keywords: ["kit","react","solana-kit","tailwind","typescript","vite"],
    path: "kit/react-vite",
    image: "/assets/templates/react_vite.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/kit/react-vite",
    badges: ["Vite","React","@solana/kit"],
  },
  {
    name: "react-vite-anchor",
    displayName: undefined,
    usecase: undefined,
    description: "React + Vite, Tailwind, @solana/react-hooks, Anchor vault program",
    keywords: ["anchor","kit","react","solana-kit","tailwind","typescript","vite"],
    path: "kit/react-vite-anchor",
    image: "/assets/templates/react_vite_anchor.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/kit/react-vite-anchor",
    badges: ["Vite","React","@solana/kit"],
  },
  {
    name: "web3js-expo",
    displayName: "Mobile Expo Boilerplate",
    usecase: "Mobile",
    description: "A template for building a Solana mobile app with Expo and React Native.",
    keywords: ["expo","mobile-wallet-adapter","react-native","solana-web3js"],
    path: "mobile/web3js-expo",
    image: "/assets/templates/web3js_expo.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/mobile/web3js-expo",
    badges: ["Expo","React Native","@solana/web3.js"],
  },
  {
    name: "phantom-embedded-js",
    displayName: "Phantom Embedded JS",
    usecase: "Auth",
    description: "Vite + vanilla JavaScript template for integrating Phantom's embedded user wallets on Solana",
    keywords: ["solana","phantom","wallet","embedded-wallet","javascript","typescript","vite","oauth","social-login"],
    path: "community/phantom-embedded-js",
    image: "/assets/templates/phantom_embedded_js.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/community/phantom-embedded-js",
    badges: ["Vite"],
  },
  {
    name: "phantom-embedded-react",
    displayName: "Phantom Embedded Wallet",
    usecase: "Starter",
    description: "Next.js template with Phantom Embedded Wallet SDK for seamless Web3 authentication",
    keywords: ["solana","phantom","embedded-wallet","nextjs","react","typescript","tailwind","web3","authentication"],
    path: "community/phantom-embedded-react",
    image: "/assets/templates/phantom_embedded_react.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/community/phantom-embedded-react",
    badges: ["Next.js","React"],
  },
  {
    name: "phantom-embedded-react-native-starter",
    displayName: "Phantom Embedded React Native Starter",
    usecase: "Mobile",
    description: "Expo starter for Phantom's embedded wallet on Solana. Google or Apple OAuth, no extension needed.",
    keywords: ["solana","phantom","wallet","embedded-wallet","react-native","expo","mobile","typescript","oauth","authentication"],
    path: "community/phantom-embedded-react-native",
    image: "/assets/templates/phantom_embedded_react_native_starter.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/community/phantom-embedded-react-native",
    badges: ["Mobile","Expo","React Native"],
  },
  {
    name: "supabase-auth",
    displayName: "Supabase Auth",
    usecase: "Auth",
    description: "Authenticate Solana wallets with Supabase",
    keywords: ["supabase","authentication","solana","framework-kit"],
    path: "community/supabase-auth",
    image: "/assets/templates/supabase_auth.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/community/supabase-auth",
    badges: [],
  },
  {
    name: "x402-template",
    displayName: "X402 Next.js",
    usecase: "Payments",
    description: "Next.js Solana starter with X402 payment protocol integration",
    keywords: ["solana","nextjs","x402","template","starter"],
    path: "community/x402-template",
    image: "/assets/templates/x402_template.png",
    repoUrl: "https://github.com/solana-foundation/templates/tree/main/community/x402-template",
    badges: ["Starter","Next.js"],
  },
];

const usecaseFilters = [
  { id: 'starter', name: 'Starter' },
  { id: 'backend', name: 'Backend' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'payments', name: 'Payments' },
  { id: 'airdrop', name: 'Airdrop' },
  { id: 'auth', name: 'Auth' },
];

const frameworkFilters = [
  { id: 'nextjs', name: 'Next.js' },
  { id: 'expo', name: 'Expo' },
  { id: 'vite', name: 'Vite' },
  { id: 'react', name: 'React' },
  { id: 'react-native', name: 'React Native' },
  { id: 'node', name: 'Node' },
];

const sdkFilters = [
  { id: 'solana-kit', name: '@solana/kit' },
  { id: 'solana-web3js', name: '@solana/web3.js' },
  { id: 'gill', name: 'Gill' },
];

const walletFilters = [
  { id: 'wallet-ui', name: 'Wallet UI' },
  { id: 'mobile-wallet-adapter', name: 'Mobile Wallet Adapter' },
  { id: 'wallet-adapter', name: 'Wallet Adapter' },
];

export function getTemplates() {
  return templates;
}

export function getTemplate(name) {
  return templates.find((t) => t.name === name) || null;
}

const FRAMEWORK_LABELS = {
  nextjs: "Next.js",
  expo: "Expo",
  vite: "Vite",
  react: "React",
  "react-native": "React Native",
  node: "Node",
};

const SDK_LABELS = {
  "solana-kit": "@solana/kit",
  "solana-web3js": "@solana/web3.js",
  gill: "Gill",
};

export function getTemplateMeta(t) {
  return {
    frameworks: (t.keywords || []).filter((k) => FRAMEWORK_LABELS[k]).map((k) => FRAMEWORK_LABELS[k]),
    sdks: (t.keywords || []).filter((k) => SDK_LABELS[k]).map((k) => SDK_LABELS[k]),
  };
}

export function getDefaultTemplateNames() {
  return templates.map((t) => t.name);
}

export function filterTemplates({ query, selectedKeywords }) {
  const hasFilter = query.trim() !== '' || selectedKeywords.length > 0;
  if (!hasFilter) return templates;
  return templates.filter((t) => {
    if (query.trim() !== '') {
      const haystack = [t.name, t.displayName, t.description, t.usecase, ...t.keywords]
        .filter(Boolean).join(' ').toLowerCase();
      if (!haystack.includes(query.toLowerCase())) return false;
    }
    if (selectedKeywords.length > 0) {
      const matches = selectedKeywords.some((k) =>
        t.keywords.includes(k) ||
        (t.usecase && t.usecase.toLowerCase() === k.toLowerCase()) ||
        badgesLookup(t).some((b) => b.toLowerCase().replace(/[^a-z0-9]/g, '') === k.toLowerCase())
      );
      if (!matches) return false;
    }
    return true;
  });
}

export const FILTER_GROUPS = [
  { id: 'usecases', name: 'Use Cases', keywords: usecaseFilters },
  { id: 'frameworks', name: 'Frameworks', keywords: frameworkFilters },
  { id: 'solana-sdks', name: 'Solana SDKs', keywords: sdkFilters },
  { id: 'wallet-adapters', name: 'Wallet Adapters', keywords: walletFilters },
];

function badgesLookup(t) {
  const map = {
    nextjs: ['Next.js'], react: ['React'], 'react-native': ['React Native'],
    expo: ['Expo'], vite: ['Vite'], 'solana-kit': ['@solana/kit'],
    'solana-web3js': ['@solana/web3.js'], 'mobile-wallet-adapter': ['Mobile Wallet Adapter'],
    node: ['Node'], starter: ['Starter'], mobile: ['Mobile'], auth: ['Auth'],
    backend: ['Backend'], payments: ['Payments'], airdrop: ['Airdrop'],
  };
  return (t.keywords || []).flatMap((k) => map[k] || []);
}
