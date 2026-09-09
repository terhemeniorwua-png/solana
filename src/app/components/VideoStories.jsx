"use client";
import Image from "next/image";
import { useState } from "react";

const VIDEOS = [
  {
    title: "Solana Stories: We Bought A Bank",
    thumbnail: "https://i.ytimg.com/vi/qMspBj3xwqA/maxresdefault.jpg",
  },
  {
    title: "Solana Stories: Crypto Never Sleeps",
    thumbnail: "https://i.ytimg.com/vi/JNLbpT5qgww/maxresdefault.jpg",
  },
  {
    title: "Solana Stories: The Agents Are Here",
    thumbnail: "https://i.ytimg.com/vi/Jh_TXAnVMkM/maxresdefault.jpg",
  },
  {
    title: "Solana Stories: The First Touchpoint",
    thumbnail: "https://i.ytimg.com/vi/CqpCD7Dj2Sk/maxresdefault.jpg",
  },
  {
    title: "Solana Stories: The Founder",
    thumbnail: "https://i.ytimg.com/vi/LfbCzbLp6pQ/maxresdefault.jpg",
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

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white" className="w-8 h-8 max-md:!w-4 max-md:!h-4 md:!w-5 md:!h-5 xl:!w-6 xl:!h-6">
    <path d="M6.51 18.87a1.002 1.002 0 0 0 1-.01l10-6c.3-.18.49-.51.49-.86s-.18-.68-.49-.86l-10-6a.99.99 0 0 0-1.01-.01c-.31.18-.51.51-.51.87v12c0 .36.19.69.51.87ZM8 7.77 15.06 12 8 16.23z" />
  </svg>
);

export default function VideoStories() {
  const [index, setIndex] = useState(0);
  const len = VIDEOS.length;
  const go = (dir) =>
    setIndex((i) => Math.min(len - 1, Math.max(0, i + dir)));

  return (
    <div>
      <div className="w-full">
        <hr className="border-nd-border-light border-t m-0 !opacity-100" />
      </div>
      <section className="relative overflow-hidden text-white text-left">
        <div className="py-10">
          <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 mb-8 xl:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="nd-heading-l">How we built this</h2>
              <p className="text-nd-mid-em-text nd-body-xl max-xl:mt-3 xl:mt-5">
                Hear from pioneers creating the future of global{" "}
                <br className="max-xl:hidden" />
                financial markets.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="hidden xl:inline-flex">
                <div className="flex gap-2">
                  <button
                    aria-label="Previous"
                    onClick={() => go(-1)}
                    className="rounded-full w-12 h-12 p-1 border-[1px] border-nd-border-prominent transition flex items-center justify-center not-hover:bg-black hover:bg-nd-border-prominent"
                  >
                    <PrevArrow />
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => go(1)}
                    className="rounded-full w-12 h-12 p-1 border-[1px] border-nd-border-prominent transition flex items-center justify-center not-hover:bg-black hover:bg-nd-border-prominent"
                  >
                    <NextArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10">
            <div className="relative w-full flex items-center justify-center !m-0 [&>div]:!overflow-visible [&>div]:!p-0 w-full md:w-[700px] xl:w-[800px]">
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
                  {VIDEOS.map((video) => (
                    <div
                      key={video.title}
                      style={{
                        width: `${(100 / len).toFixed(3)}%`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexShrink: 0,
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="flex flex-col w-full self-start min-w-0 px-1">
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group">
                            <Image
                              src={video.thumbnail}
                              alt={video.title}
                              fill
                              sizes="(max-width: 768px) 120vw, 80vw"
                              className="object-cover z-0"
                            />
                            <button
                              type="button"
                              aria-label={video.title}
                              tabIndex="0"
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 max-md:w-10 max-md:h-10 md:w-12 md:h-12 xl:w-[72px] xl:h-[72px] left-5 top-auto bottom-5 !translate-x-0 !translate-y-0 backdrop-blur-xs !bg-black/70 shadow-[0_2px_4px_1px_rgba(0,0,0,0.17),0_-4px_12px_0_rgba(255,255,255,0.29)_inset,0_1px_0_0_rgba(255,255,255,0.40)_inset,0_-1px_0_0_rgba(255,255,255,0.20)_inset] rounded-full flex items-center justify-center transition group-hover:scale-110 z-10"
                            >
                              <PlayIcon />
                            </button>
                          </div>
                          <h3 className="nd-heading-m max-xl:mt-5 xl:mt-7">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}