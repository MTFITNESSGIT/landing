"use client";
import { useState } from "react";
import Video from "./Video";
import { experience } from "../utils/experience";

const ExperienceCarousel = () => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? experience.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === experience.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative flex justify-center">
      <div className="flex w-full h-full max-w-[500px] max-h-full 2xl:max-w-[800px] 2xl:max-h-full transition-transform ease-out duration-1200">
        {experience.map((item, index) => (
          <div
            key={index}
            style={{ display: index === curr ? "block" : "none" }}
          >
            <Video
              source={item.video}
              height="600"
              width="500"
              mutedVideo={index !== curr}
            />
            {/* <VimeoPlayer videoId={item.video} /> */}
          </div>
        ))}
      </div>
      <div className="absolute w-full h-full max-w-[500px] max-h-[700px] 2xl:max-w-[800px] 2xl:max-h-[1000px] flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8"
          >
            <path
              fill="#00000099"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8"
          >
            <path
              fill="#00000099"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {experience.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
