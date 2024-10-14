"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DownloadFilesButton from "../../components/DownloadButton";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  useEffect(() => {
    setIsMounted(true);
    if (isMounted && (!type || !category)) {
      router.replace("/404");
    }
    window.scrollTo(0, 350); // Scroll to the top of the page
  }, [isMounted, router, type, category]);

  return (
    <section
      className={`w-full h-full min-h-[100vh] flex flex-col justify-center items-center lg:flex-row gap-10 max-w-[1000px] mx-auto px-10 md:px-20`}
    >
      <Image
        src="/imgs/plan3.webp"
        alt="image"
        width={1000}
        height={1000}
        className="w-full max-w-[400px] rounded-xl"
      />
      <div className="flex flex-col justify-center items-center gap-5 max-w-[400px]">
        <h2 className="text-xl text-center sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-red">
          Muchas gracias
        </h2>
        <p className="text-xl text-center sm:text-xl 2xl:text-2xl font-extrabold">
          Acá te dejo el link para que descargues el plan {type} nivel{" "}
          {category}
        </p>
        <DownloadFilesButton />
      </div>
    </section>
  );
};

export default ThankYou;
