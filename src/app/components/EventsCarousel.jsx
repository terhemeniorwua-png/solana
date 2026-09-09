"use client";
import Image from "next/image";
import { useState } from "react";

const EVENTS = [
  {
    name: "Solana AI & Capital Forum",
    date: "Mon, Sep 28",
    city: "Woodside",
    href: "https://lu.ma/solana-capital-forum",
    image: "/img/events/capital-forum.webp",
  },
  {
    name: "Solana Capital Forum Singapore",
    date: "Tue, Oct 6",
    city: "Singapore",
    href: "https://lu.ma/sol-cap-sg",
    image: "/img/events/capital-forum-sg.webp",
  },
  {
    name: "Solana Hacker House - London",
    date: "Sun, Nov 1",
    city: "London",
    href: "https://lu.ma/london-hh-26",
    image: "/img/events/hacker-house.webp",
  },
  {
    name: "Scale or Die",
    date: "Sat, Nov 14",
    city: "London",
    href: "https://lu.ma/scale-or-die-26",
    image: "/img/events/scale-or-die.webp",
  },
  {
    name: "Solana Breakpoint 2026",
    date: "Sun, Nov 15",
    city: "London",
    href: "https://lu.ma/breakpoint2026",
    image: "/img/events/breakpoint-2026.webp",
  },
  {
    name: "Pr1me [London Series] - Exclusive Dinner for Web3 Finance",
    date: "Mon, Nov 16",
    city: "London",
    href: "https://lu.ma/aqntywn2",
    image: "/img/events/pr1me-dinner.webp",
  },
];

const PrevArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
    <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z" />
  </svg>
);

const NextArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
    <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="m19,4h-2v-2h-2v2h-6v-2h-2v2h-2c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM5,20v-12h14v-2,14s-14,0-14,0Z" />
    <path d="M12 13H17V18H12z" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="m2.6 10.42 7.64 3.34 3.34 7.64c.16.37.52.6.92.6h.05a1 1 0 0 0 .9-.69l5.5-17c.12-.36.02-.75-.24-1.01a.98.98 0 0 0-1.01-.24L2.69 8.55c-.4.13-.67.49-.69.9-.02.42.22.8.6.97m15.85-4.86-4.09 12.63-2.44-5.59c-.1-.23-.28-.41-.52-.52L5.81 9.64l12.63-4.09Z" />
  </svg>
);

export default function EventsCarousel() {
  const [index, setIndex] = useState(0);
  const len = EVENTS.length;

  const go = (dir) =>
    setIndex((i) => Math.min(len - 1, Math.max(0, i + dir)));

  return (
    <section className="relative overflow-hidden text-white text-left">
      <div className="py-10">
        <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 mb-8 xl:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="nd-heading-l">
              Meet Solana IRL. <br />
              <span className="font-light">Build connections.</span>
            </h2>
          </div>
          <div className="flex gap-3 items-center">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 rounded-full border-[1px] border-nd-border-prominent not-hover:bg-transparent hover:bg-nd-border-prominent px-6 h-12 w-auto nd-body-m text-inherit"
              href="/events"
              rel="noopener noreferrer"
            >
              View all
            </a>
            <div className="hidden xl:inline-flex">
              <div className="flex gap-2">
                <button
                  aria-label="Previous"
                  onClick={() => go(-1)}
                  disabled={index === 0}
                  className="rounded-full w-12 h-12 p-1 border-[1px] border-nd-border-prominent transition flex items-center justify-center not-hover:bg-black hover:bg-nd-border-prominent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PrevArrow />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => go(1)}
                  disabled={index === len - 1}
                  className="rounded-full w-12 h-12 p-1 border-[1px] border-nd-border-prominent transition flex items-center justify-center not-hover:bg-black hover:bg-nd-border-prominent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <NextArrow />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10">
          <div className="relative w-full flex items-center justify-center !m-0 [&>div]:!overflow-visible [&>div]:!p-0 w-full md:w-[356px] xl:w-[456px]">
            <div className="w-full overflow-hidden z-0 px-14">
              <div
                className="flex"
                style={{
                  width: `${len * 100}%`,
                  display: "flex",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                  transform: `translateX(calc(-${((index / len) * 100).toFixed(3)}% + 0px))`,
                  cursor: "grab",
                }}
              >
                {EVENTS.map((event) => (
                  <div
                    key={event.name}
                    style={{
                      width: `${(100 / len).toFixed(3)}%`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <a
                        className="flex flex-col w-full self-start min-w-0 text-inherit px-1"
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden group">
                          <Image
                            src={event.image}
                            alt={event.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover z-0"
                          />
                        </div>
                        <h3 className="nd-heading-s mt-6">{event.name}</h3>
                        <div className="mt-2 flex gap-1 flex-wrap">
                          <div className="h-[28px] md:h-[32px] px-1.5 py-1 text-nd-primary bg-nd-border-light rounded-sm font-medium nd-body-s inline-flex items-center flex-row !leading-[17px] md:!leading-[21px]">
                            <CalendarIcon />
                            <span className="px-1.5 inline-block align-middle pt-0.5">
                              {event.date}
                            </span>
                          </div>
                          <div className="h-[28px] md:h-[32px] px-1.5 py-1 text-nd-primary bg-nd-border-light rounded-sm font-medium nd-body-s inline-flex items-center flex-row !leading-[17px] md:!leading-[21px]">
                            <BoltIcon />
                            <span className="px-1.5 inline-block align-middle pt-0.5">
                              {event.city}
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}