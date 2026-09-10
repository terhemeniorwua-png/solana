"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const MIN_UNICORN_DPI = 1;
const MAX_UNICORN_DPI = 2;
const DEFAULT_UNICORN_DPI = 1.5;

function clampUnicornDpi(dpi) {
  if (Number.isNaN(dpi)) {
    return DEFAULT_UNICORN_DPI;
  }
  return Math.min(Math.max(dpi, MIN_UNICORN_DPI), MAX_UNICORN_DPI);
}

const UnicornScene = dynamic(
  () => import("unicornstudio-react").then((mod) => mod.default),
  { ssr: false },
);

function canUseWebGL() {
  if (typeof document === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

function subscribeWebGLSupport() {
  return () => {};
}

function useWebGLSupport() {
  return useSyncExternalStore(
    subscribeWebGLSupport,
    () => canUseWebGL(),
    () => false,
  );
}

export function getSafeUnicornDpi() {
  if (typeof window === "undefined") {
    return DEFAULT_UNICORN_DPI;
  }
  return clampUnicornDpi(window.devicePixelRatio || MIN_UNICORN_DPI);
}

export function SafeUnicornScene({ fallback = null, dpi, ...props }) {
  const isSupported = useWebGLSupport();

  if (!isSupported) {
    return fallback;
  }

  return <UnicornScene {...props} dpi={clampUnicornDpi(dpi ?? getSafeUnicornDpi())} />;
}