"use client";
import DividerReady from "../components/DividerReady";
import Plans from "../components/Plans";
import Carousel from "../components/Carousel";
import Advice from "../components/AdvicePage";
import Principal from "../components/Principal,";
import ParagraphContainer from "../components/ParagraphContainer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Principal />
      <Plans />
      <Advice />
      <ParagraphContainer />
      <DividerReady />
      {/* <Experience /> */}
      <section className=" bg-black w-full flex  flex-col items-center justify-start px-4 md:px-10 lg:px-20 gap-20 max-w-[1200px] mx-auto animate-fade-up">
        <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
          <div className="divider"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-full flex justify-center">
            <div className="w-10 h-[3px] bg-red"></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-red">
              EXPERIENCIAS
            </h3>
            <h3 className="text-xl sm:text-3xl 2xl:text-4xl text-center font-extrabold text-white">
              Vos podes ser uno de ellos, y tener el cuerpo que siempre soñaste
            </h3>
          </div>
        </div>
        <Carousel />
      </section>
      <DividerReady ready />
      {/* <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px]">
        <div className="divider"></div>
      </div>
      <FAQ /> */}
    </>
  );
}
