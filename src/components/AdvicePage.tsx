"use client";
import React, { useEffect, useRef, useState } from "react";
import { advices } from "../utils/advice";
import Advice from "./Advice";

const AdvicePage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleStates, setVisibleStates] = useState(
    Array(advices.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleStates((prev) => {
              const newState = [...prev];
              newState[index] = true; // Set visibility to true for the intersecting item
              return newState;
            });
          } else {
            setVisibleStates((prev) => {
              const newState = [...prev];
              newState[index] = false; // Reset visibility when it goes out of view
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col items-center justify-start mt-14 px-4 md:px-10 lg:px-20 max-w-[1200px] mx-auto"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-center">
          <div className="w-10 h-[3px] bg-red"></div>
        </div>
        <h3
          className={`text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-red ${
            visibleStates.some((visible) => visible) // Check if any are visible
              ? "animate-fade-left animate-ease-in-out animate-duration-[1300ms]"
              : "animate-fade-out" // Ensure it fades out
          }`}
        >
          ASESORÍAS
        </h3>
      </div>
      <div>
        {advices.map((advice, i) => (
          <Advice
            key={i}
            title={advice.title}
            muscle={advice.muscle}
            fat={advice.fat}
            premium={advice.premium}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvicePage;
