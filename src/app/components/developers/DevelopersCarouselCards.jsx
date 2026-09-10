"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowLeft } from "@boxicons/react/ArrowLeft";
import { ArrowRight } from "@boxicons/react/ArrowRight";
import { developersCopy } from "@/data/developers";

const Direction = {
  LEFT: -1,
  RIGHT: 1,
  NONE: 0,
};

export default function DevelopersCarouselCards({ children }) {
  const timerIdRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const scrollDirRef = useRef(0);

  const updateArrows = () => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const contentWidth = content.scrollWidth;
    const contentUIWidth = Math.floor(content.getBoundingClientRect().width);
    const scrollLeft = wrapper.scrollLeft;
    const maxScroll = contentUIWidth + scrollLeft >= contentWidth;

    let pos = "none";
    if (scrollLeft === 0) pos = "right";
    else if (maxScroll) pos = "left";
    else pos = "both";

    const showRight = pos === "both" || pos === "right";
    const showLeft = pos === "both" || pos === "left";
    if (leftBtnRef.current)
      leftBtnRef.current.style.display = showLeft ? "flex" : "none";
    if (rightBtnRef.current)
      rightBtnRef.current.style.display = showRight ? "flex" : "none";
  };

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;
    updateArrows();
    wrapper.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      wrapper.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const stopScroll = useCallback(() => {
    scrollDirRef.current = Direction.NONE;
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, []);

  const scrollTo = useCallback(
    (direction) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
      const currentPos = wrapper.scrollLeft;
      let nextPos = currentPos + direction * 264;
      if (nextPos < 0 || nextPos > maxScrollLeft) {
        nextPos =
          nextPos < 0 ? 0 : Math.max(0, maxScrollLeft);
        stopScroll();
      }
      wrapper.scrollTo({ top: 0, left: nextPos, behavior: "smooth" });
    },
    [stopScroll],
  );

  const startScroll = useCallback(
    (direction) => {
      scrollDirRef.current = direction;
      if (timerIdRef.current) return;
      timerIdRef.current = setInterval(() => scrollTo(direction), 80);
    },
    [scrollTo],
  );

  return (
    <div className="py-2 relative px-0">
      <div
        ref={wrapperRef}
        className="carousel-cards overflow-auto scrollbar-hidden"
      >
        <div
          ref={contentRef}
          className="flex flex-nowrap gap-x-6 mx-0"
        >
          {children}
        </div>
      </div>

      <button
        ref={leftBtnRef}
        className="absolute top-0 bottom-0 left-[-20px] z-[100] transition-opacity justify-center items-center btn btn-link text-white bg-gradient-to-l from-transparent to-black border-none hidden"
        aria-label={developersCopy.nav.prev}
        onMouseDown={() => startScroll(Direction.LEFT)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        onClick={() => scrollTo(Direction.LEFT)}
      >
        <ArrowLeft />
      </button>

      <button
        ref={rightBtnRef}
        className="absolute top-0 bottom-0 right-[-20px] z-[100] transition-opacity justify-center items-center btn btn-link text-white bg-gradient-to-r from-transparent to-black border-none hidden"
        aria-label={developersCopy.nav.next}
        onMouseDown={() => startScroll(Direction.RIGHT)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        onClick={() => scrollTo(Direction.RIGHT)}
      >
        <ArrowRight />
      </button>
    </div>
  );
}