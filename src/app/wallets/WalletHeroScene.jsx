"use client";

import { useSyncExternalStore } from "react";
import { SafeUnicornScene } from "@/app/components/UnicornScene";
import styles from "./WalletDirectory.module.scss";

const SCENE_JSON_PATH = "/img/wallets/hero-bg.json";

function subscribeReducedMotion(callback) {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function WalletHeroScene() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const fallback = <div className={styles.heroSceneFallback} />;

  return (
    <div className={styles.heroScene} aria-hidden="true">
      {reducedMotion ? (
        fallback
      ) : (
        <SafeUnicornScene
          projectId="wallets-hero"
          jsonFilePath={SCENE_JSON_PATH}
          width="100%"
          height="100%"
          scale={1}
          fps={30}
          lazyLoad
          production
          placeholder={fallback}
          fallback={fallback}
          showPlaceholderOnError
          showPlaceholderWhileLoading
          onError={(error) => console.error("UnicornScene error:", error)}
        />
      )}
    </div>
  );
}