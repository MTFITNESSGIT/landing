"use client";
import React from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-start items-center gap-5 min-h-[50vh]">
      <h1 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-red">
        Ups... :(
      </h1>
      <p className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold">
        La pagina que estas buscando no existe, por favor, vuelva al inicio
      </p>
      <Button
        text="Volver al inicio"
        background="bg-red"
        textColor="#fff"
        onClick={goToHome}
      ></Button>
    </div>
  );
}
