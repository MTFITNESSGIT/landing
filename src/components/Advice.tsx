import React from "react";
import Button from "./Button";

const Advice = ({ title, muscle, fat, premium }: any) => {
  return (
    <div className="w-full h-full">
      <h2 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-white text-center my-5">
        {title}
      </h2>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 lg:flex-row">
        <div
          className={`w-full h-full p-6 ${
            premium ? "bg-gradient-to-b from-[#650C0C] to-red" : "bg-[#232323]"
          } rounded-lg flex flex-col justify-evenly items-center gap-2`}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold">{muscle.title}</h3>
            <h3 className="text-lg font-bold">
              $ {muscle.price} USD mensuales
            </h3>
            <h3 className="text-lg font-bold">
              ( Estadía {muscle.stay} 3 meses )
            </h3>
          </div>
          <div
            className={`w-full h-[1px] ${
              premium ? "bg-white" : "bg-[#5a5a5a]"
            } my-2`}
          ></div>
          <div className="w-full h-full">
            {muscle.values.map((value, i) => (
              <div className="flex justify-start items-center gap-2" key={i}>
                {value.approved && <p className="text-lg">✅</p>}
                <p className="text-base" key={i}>
                  {value.text}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full h-full">
            <h4 className="text-lg font-bold my-4">¿Que incluye?</h4>
            {muscle.includes.map((include, i) => (
              <div className="flex justify-start items-center gap-2" key={i}>
                {include.approved ? (
                  <p className="text-lg">✅</p>
                ) : (
                  <p className="text-lg">❌</p>
                )}
                <p className="text-base" key={i}>
                  {include.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 w-full">
            <Button
              text="comprar"
              textColor={!premium ? "text-white" : "text-black"}
              background={
                !premium ? "bg-gradient-to-b from-[#650C0C] to-red" : "bg-white"
              }
            />
          </div>
        </div>
        <div
          className={`w-full h-full p-6 ${
            premium ? "bg-gradient-to-b from-[#650C0C] to-red" : "bg-[#232323]"
          } rounded-lg flex flex-col justify-evenly items-center gap-2`}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold">{fat.title}</h3>
            <h3 className="text-lg font-bold">${fat.price} mensuales</h3>
            <h3 className="text-lg font-bold">
              ( Estadía {fat.stay} 3 meses )
            </h3>
          </div>
          <div
            className={`w-full h-[1px] ${
              premium ? "bg-white" : "bg-[#5a5a5a]"
            } my-2`}
          ></div>{" "}
          <div className="w-full h-full">
            {fat.values.map((value, i) => (
              <div className="flex justify-start items-center gap-2" key={i}>
                {value.approved && <p className="text-lg">✅</p>}
                <p className="text-base" key={i}>
                  {value.text}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full h-full">
            <h4 className="text-lg font-bold my-4">¿Que incluye?</h4>
            {fat.includes.map((include, i) => (
              <div className="flex justify-start items-center gap-2" key={i}>
                {include.approved ? (
                  <p className="text-lg">✅</p>
                ) : (
                  <p className="text-lg">❌</p>
                )}
                <p className="text-base" key={i}>
                  {include.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 w-full">
            <Button
              text="comprar"
              textColor={!premium ? "text-white" : "text-black"}
              background={
                !premium ? "bg-gradient-to-b from-[#650C0C] to-red" : "bg-white"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advice;
