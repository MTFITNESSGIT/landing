import { questions } from "../utils/questions";
import React from "react";
import AccordionItem from "./Accordion";

const FAQ = () => {
  return (
    <section className="flex w-full h-full flex-col items-center justify-start my-20 px-4 md:px-10 lg:px-20 max-w-[1350px]">
      <div className="flex flex-col justify-center items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-10 h-10"
        >
          <path
            fill="#DA0504"
            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
          />
        </svg>
        <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-extrabold text-red my-5">
          PREGUNTAS FRECUENTES
        </h2>
      </div>
      <div>
        {questions.map((question, index) => (
          <AccordionItem
            key={index}
            title={question.title}
            content={question.content}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
