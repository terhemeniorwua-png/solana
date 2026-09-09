"use client";
import { useRef, useCallback, useState, useEffect } from "react";

export function useCarousel() {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.children[0]
      ? el.children[0].offsetWidth + 24
      : 300;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, []);

  const dragStart = useRef({ scrollLeft: 0 });

  const onDragStart = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    dragStart.current = { scrollLeft: el.scrollLeft };
  }, []);

  const onDrag = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    // handle mouse/touch drag
    const currentX =
      e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    if (!dragStart.current.x) {
      dragStart.current = {
        x: currentX,
        scrollLeft: el.scrollLeft,
      };
    }
    el.scrollLeft = dragStart.current.scrollLeft - (currentX - dragStart.current.x);
  }, []);

  const endDrag = useCallback(() => {
    dragStart.current = { scrollLeft: 0 };
  }, []);

  return {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scroll,
    onDragStart,
    onDrag,
    endDrag,
  };
}
