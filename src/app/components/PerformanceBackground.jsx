"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const BG_SRC = "/img/index/performance-bg.webp";
const IMG_ASPECT = 3326 / 1596;
const DURATION = 4800;
const FEATHER = 0.24;

function clamp(n, lo = 0, hi = 1) {
  return Math.min(Math.max(n, lo), hi);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function rgba(r, g, b, a) {
  return `rgba(${r},${g},${b},${a})`;
}

function subscribeReducedMotion(cb) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const q = window.matchMedia("(prefers-reduced-motion: reduce)");
  q.addEventListener("change", cb);
  return () => q.removeEventListener("change", cb);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function sizeCanvas(wrapper, canvas) {
  const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
  const rect = wrapper.getBoundingClientRect();
  const w = Math.max(1, Math.round(rect.width * dpr));
  const h = Math.max(1, Math.round(rect.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  return [w, h];
}

function drawImage(ctx, img, w, h) {
  if (!img || !img.complete || !img.naturalWidth) return;
  const scale = Math.max(w / IMG_ASPECT, h);
  const dw = IMG_ASPECT * scale;
  const dh = scale;
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
}

export default function PerformanceBackground() {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const sheetRef = useRef(null);
  const imgRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvasRefEl = canvasRef.current;
    if (!wrapper || !canvasRefEl) return undefined;

    const ctx = canvasRefEl.getContext("2d");
    if (!ctx) return undefined;

    const sheet = document.createElement("canvas");
    const sctx = sheet.getContext("2d");
    sheetRef.current = sheet;

    const img = new Image();
    img.decoding = "async";
    img.src = BG_SRC;
    imgRef.current = img;

    let raf = 0;
    let ro = null;
    let io = null;
    let origin = 0;
    let started = false;
    let inView = false;
    let current = 0;
    let disposed = false;

    const paintFrame = (progress) => {
      const [w, h] = sizeCanvas(wrapper, canvasRefEl);
      if (sheet.width !== w || sheet.height !== h) {
        sheet.width = w;
        sheet.height = h;
      }

      sctx.setTransform(1, 0, 0, 1, 0, 0);
      sctx.clearRect(0, 0, w, h);
      drawImage(sctx, img, w, h);
      sctx.globalCompositeOperation = "destination-in";
      const edge = progress * (w * (1 + FEATHER * 2)) - w * FEATHER;
      const feather = w * FEATHER;
      const mask = sctx.createLinearGradient(0, 0, w, 0);
      mask.addColorStop(0, "rgba(0,0,0,1)");
      mask.addColorStop(clamp((edge - feather) / w), "rgba(0,0,0,1)");
      mask.addColorStop(clamp(edge / w), "rgba(0,0,0,0)");
      mask.addColorStop(1, "rgba(0,0,0,0)");
      sctx.fillStyle = mask;
      sctx.fillRect(0, 0, w, h);
      sctx.globalCompositeOperation = "source-over";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#040606";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(sheet, 0, 0);

      const lead = clamp(1 - Math.abs(progress - 0.5) * 2);
      if (lead > 0.01 && progress > 0 && progress < 1) {
        ctx.globalCompositeOperation = "lighter";
        const glow = ctx.createLinearGradient(edge - feather, 0, edge + feather, 0);
        glow.addColorStop(0, rgba(20, 60, 46, 0));
        glow.addColorStop(0.5, rgba(96, 196, 146, 0.32 * lead));
        glow.addColorStop(1, rgba(20, 60, 46, 0));
        ctx.fillStyle = glow;
        ctx.fillRect(edge - feather, 0, feather * 2, h);
        ctx.globalCompositeOperation = "source-over";
      }
    };

    const renderStatic = () => paintFrame(1);

    const tick = (now) => {
      const t = clamp((now - origin) / DURATION);
      current = easeInOutCubic(t);
      paintFrame(current);
      if (t < 1 && !disposed) {
        raf = requestAnimationFrame(tick);
      } else {
        started = false;
        ro = new ResizeObserver(renderStatic);
        ro.observe(wrapper);
      }
    };

    const start = () => {
      if (started) return;
      started = true;
      origin = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onReady = () => {
      if (disposed) return;
      if (reducedMotion) {
        renderStatic();
        return;
      }
      if (inView) start();
      else paintFrame(0);
    };

    if (img.complete && img.naturalWidth) {
      onReady();
    } else {
      img.addEventListener("load", onReady, { once: true });
      paintFrame(0);
    }

    if (!reducedMotion) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            inView = true;
            if (img.complete && img.naturalWidth) start();
            io.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      io.observe(wrapper);
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      if (ro) ro.disconnect();
      img.removeEventListener("load", onReady);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={wrapperRef}
      className="!absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}