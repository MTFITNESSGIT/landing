import { TButton } from "../types";
import React from "react";

const Button = ({ background, textColor, text, onClick }: TButton) => {
  return (
    <button
      className={`md:text-xl lg:text-2xl 2xl:text-4xl rounded-[60px] ${background} ${textColor} px-[20px] py-[15px] md:px-[50px] md:py-[10px] w-full uppercase font-bold italic animate-fade-in transform transition duration-500 
      hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
