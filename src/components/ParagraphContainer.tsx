"use client";
import React, { useEffect, useRef, useState } from "react";
import { paragraph } from "../utils/paragraphs";
import Image from "next/image";
import Paragraph from "./Paragraph";

const ParagraphContainer = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    new Array(paragraph.length).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((currentSection, index) => {
      if (currentSection) {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            setVisibleStates((prevVisibleStates) => {
              const updatedStates = [...prevVisibleStates];
              updatedStates[index] = entry.isIntersecting;
              return updatedStates;
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(currentSection);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index] as Element);
        }
      });
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto animate-fade-up">
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      <div className="w-full h-full px-5 max-w-[1050px]">
        {paragraph.map((info, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`my-20 flex flex-col ${
              info.switch ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center lg:items-start`}
          >
            <Image
              alt="mobile"
              src={
                index === 0
                  ? "/imgs/plan3.webp"
                  : index === 1
                  ? "/imgs/plan4.webp"
                  : "/imgs/plan1.webp"
              }
              width={400}
              height={480}
              className={`rounded-xl mb-6 lg:mb-0 ${
                visibleStates[index]
                  ? info.switch
                    ? "animate-fade-right animate-ease-in-out animate-duration-[1000ms]" // Right animation for reversed layout
                    : "animate-fade-left animate-ease-in-out animate-duration-[1000ms]" // Left animation for normal layout
                  : "animate-fade-out"
              }`}
            />
            <Paragraph
              key={index}
              title={info.title}
              texts={info.texts}
              Switch={info.switch}
              isVisible={visibleStates[index]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParagraphContainer;
