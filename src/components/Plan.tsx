import React from "react";
import { TPlan } from "../types";
import Link from "next/link";

const Plan = ({ background, title, quantity, level, price }: TPlan) => {
  return (
    <Link
      href={{
        pathname: "/checkout",
        query: { plan: title.toLowerCase(), level: level.toLowerCase() },
      }}
    >
      <div className="flex flex-col mx-5 transition-transform transform hover:scale-105">
        <div
          className={`${
            background === 1
              ? "bg-plan-1"
              : background === 2
              ? "bg-plan-2"
              : "bg-plan-3"
          } relative bg-cover bg-top flex flex-col justify-between items-center w-full min-w-[300px] h-full min-h-[420px] rounded-3xl hover:border-2 hover:border-red cursor-pointer`}
        >
          <div
            className={`absolute w-full mt-2 p-4 h-full flex flex-col justify-end items-center bg-[rgba(0,0,0,0.30)] rounded-2xl`}
          >
            <h3 className="text-2xl md:text-base xl:text-2xl font-extrabold text-center">
              {title}
            </h3>
            <p className="text-2xl md:text-base xl:text-2xl font-extrabold text-center">
              {level}
            </p>
            <p className="text-2xl md:text-base xl:text-2xl text-red font-semibold text-center">
              {quantity} veces por semana
            </p>
          </div>
        </div>
        <p className="text-2xl md:text-base font-semibold mt-3">
          RUTINA {title} {level}
        </p>
        <p className="text-2xl md:text-base font-semibold">{quantity}x7</p>
        <p className="text-4xl font-extrabold m-0">$ {price}</p>
      </div>
    </Link>
  );
};

export default Plan;
