import { useState } from "react";
import { plans } from "../utils/plans";
import Plan from "./Plan";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPlans = plans.length;

  const nextPlan = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPlans);
  };

  const prevPlan = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPlans - 1 : prevIndex - 1
    );
  };

  // Determinar el índice base para el mapeo
  const baseIndex = currentIndex % totalPlans;

  return (
    <div className="relative w-full max-w-[1000px] overflow-hidden my-4">
      <div className="absolute bottom-0 left-0 transform justify-between items-center w-full z-[99] hidden md:flex px-1">
        <button
          onClick={prevPlan}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6"
          >
            <path
              fill="#00000099"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
        <button
          onClick={nextPlan}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6"
          >
            <path
              fill="#00000099"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:hidden">
        {plans.map((plan, i) => {
          return (
            <div key={i} className="mb-10 md:my-2">
              <Plan
                title={plan.title}
                background={plan.background}
                level={plan.level}
                quantity={plan.quantity}
                price={plan.price}
              />
            </div>
          );
        })}
      </div>
      <div className="hidden flex-col md:flex-row w-full justify-center items-center mb-10 md:flex">
        {[0, 1, 2].map((offset) => {
          const index = (baseIndex + offset) % totalPlans;
          return (
            <div key={index} className="my-10 md:my-2">
              <Plan key={index} {...plans[index]} />
            </div>
          );
        })}
      </div>
      <div className="hidden justify-center mt-4 md:flex">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-red" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
