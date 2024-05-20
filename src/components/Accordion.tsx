"use client";
import { TAccordion } from "../types";
import { useState } from "react";

const AccordionItem = ({ title, content }: TAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border px-2 py-4 border-gray-800 rounded mb-2 w-full my-4">
      <div
        className="flex justify-start gap-4 items-center px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-2 rounded-full border border-white">
          {!isOpen ? (
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          ) : (
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffffff"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          )}
        </div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <div
        className={`${
          isOpen
            ? "max-h-96 overflow-hidden transition-max-h duration-700 ease-in border-gray-200"
            : "max-h-0 overflow-hidden duration-300 ease-out"
        }`}
      >
        <p className="text-sm md:text-base p-4 font-semibold">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
