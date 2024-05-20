import DividerReady from "../components/DividerReady";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { paragraph } from "../utils/paragraphs";
import Plans from "../components/Plans";
import Carousel from "../components/Carousel";
import ScrollLink from "../components/SmoothLink";
import Image from "next/image";
import Advice from "../components/AdvicePage";

export default function Home() {
  return (
    <>
      <section className="w-full flex  flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="flex flex-col justify-center items-center gap-5 text-center text-xl lg:text-4xl leading-4 ">
          <span className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-red">
            RETO 90 DIAS
          </span>
          <span className="text-xl sm:text-3xl 2xl:text-4xl  font-extrabold">
            “3 MESES PARA EL RESTO DE TU VIDA”
          </span>
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 md:mt-10">
          {/* <Player src={"/videos/video-presentacion.webm"} /> */}

          <div className="w-full h-full bg-gradient-to-r from-[#650C0C] to-red rounded-xl border-2 border-white flex justify-center items-center lg:w-[1000px] lg:h-[565px]">
            <h3 className="text-xl font-bold px-40 py-24 lg:p-0">VIDEO</h3>
          </div>
          <ScrollLink href="#planes">
            <Button
              background="bg-white"
              textColor="text-black"
              text="quiero empezar yá"
            />
          </ScrollLink>
        </div>
      </section>
      <Plans />
      <Advice />
      <section className="flex flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
          <div className="divider"></div>
        </div>
        <div className=" w-full h-full px-5 max-w-[1050px]">
          {paragraph.map((info, index) => (
            <div
              key={index}
              className={`my-20 flex flex-col ${
                info.switch ? "md:flex-row-reverse" : "md:flex-row"
              } items-start`}
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
                className="rounded-xl"
              />
              <Paragraph
                key={index}
                title={info.title}
                texts={info.texts}
                Switch={info.switch}
              />
            </div>
          ))}
        </div>
      </section>
      <DividerReady />
      {/* <Experience /> */}
      <section className=" bg-black w-full flex  flex-col items-center justify-start px-4 md:px-10 lg:px-20 gap-20 max-w-[1200px] mx-auto">
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
