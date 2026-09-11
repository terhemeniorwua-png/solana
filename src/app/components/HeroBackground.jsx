"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { SafeUnicornScene } from "@/app/components/UnicornScene";

const SCENE_JSON_PATH = "/img/index/hero-bg.json";
const HERO_IMAGE_SRC = "/img/index/hero-bg.webp";

function subscribeReducedMotion(callback) {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function HeroBackground() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const fallback = (
    <Image
      className="!absolute inset-0 z-0 object-cover"
      src={HERO_IMAGE_SRC}
      alt=""
      fill
      priority
      sizes="150vw"
    />
  );

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {reducedMotion ? (
        fallback
      ) : (
        <SafeUnicornScene
          projectId="index-hero"
          jsonFilePath={SCENE_JSON_PATH}
          width="100%"
          height="100%"
          scale={1}
          fps={30}
          lazyLoad
          production
          placeholder={fallback}
          fallback={fallback}
          showPlaceholderWhileLoading
          showPlaceholderOnError
          onError={(error) => console.error("UnicornScene error:", error)}
        />
      )}
    </div>
  );
}