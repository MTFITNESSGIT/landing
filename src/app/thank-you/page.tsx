"use client";
import Image from "next/image";
import Button from "../../components/Button";
import React, { useState } from "react";
import axios from "axios";

const ThankYou = () => {
  const handleRegister = () => {
    window.location.href =
      "https://app.harbiz.io/checkout-form/matiassanchezsorondo?product=invitation&tags%5B0%5D=pagina%2520web&lang=es";
  };

  const handleWGroup = () => {
    window.location.href = "https://chat.whatsapp.com/JVc0d16WENX5DdXw5rPC7F";
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    dni: "",
  });

  const [formComplete, setFormComplete] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFormCompletion();
  };

  const checkFormCompletion = async () => {
    try {
      const { name, email, dni } = values;
      if (name && email && dni) {
        setFormComplete(true);
        await axios.post("/api/send-mail-user", { name, email });
        await axios.post("/api/send-mail-admin", { name, email, dni });
      } else {
        // setError(true);
        setFormComplete(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isButtonDisabled = !(values.name && values.email && values.dni);

  return (
    <section
      className={`w-full h-full min-h-[60vh] flex ${
        !formComplete
          ? "flex-col lg:flex-row justify-center items-center lg:items-start"
          : "flex-col justify-center items-center"
      } gap-10 max-w-[1000px] mx-auto px-10 md:px-20`}
    >
      <Image
        src="/imgs/plan3.webp"
        alt="image"
        width={1000}
        height={1000}
        className="hidden md:block w-full max-w-[400px] rounded-xl"
      />
      {!formComplete ? (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
          <div className="w-full text-center flex flex-col gap-2">
            <h3 className="font-bold text-xl md:text-2xl">
              Antes de mostrarte los links necesitamos pedirte unos datos
              adicionales
            </h3>
          </div>
          <form
            onClick={handleSubmit}
            className="flex flex-col h-full items-center gap-2 bg-white text-white p-5 rounded-xl"
          >
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full max-w-[400px] mb-5 rounded-xl px-4 py-2 bg-black"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full max-w-[400px] mb-5 rounded-xl px-4 py-2 bg-black"
            />
            <input
              type="text"
              placeholder="DNI"
              name="dni"
              value={values.dni}
              onChange={handleChange}
              className="w-full max-w-[400px] mb-5 rounded-xl px-4 py-2 bg-black"
            />
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full italic rounded-[60px] font-bold bg-black text-white py-2 animate-fade-in transform transition duration-500 hover:scale-110 ${
                isButtonDisabled ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              Enviar
            </button>
          </form>
          <p className="text-sm text-center">
            Ademas te estaremos mandando un email con los links para que no los
            pierdas!
          </p>
          {error && (
            <div className="w-[500px] flex justify-center mb-4 lg:w-[260px] relative text-red-700">
              <p className="italic text-center absolute text-sm">
                * Debes completar todos los valores antes de enviar
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-center text-2xl md:text-4xl font-extrabold">
              ¡Muchas Gracias!
            </h2>
            <h3 className="text-center text-lg md:text-2xl  font-extrabold">
              ¡Ahora tenes que registrarte en nuestra App e ingresar al grupo de
              Whatsapp!
            </h3>
          </div>
          <div className="w-full h-full flex-col md:flex-row flex justify-between my-20">
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-center text-2xl text-red font-extrabold">
                Registrarse en la App
              </p>
              <div onClick={handleRegister}>
                <Button
                  text="Registrarse"
                  background="bg-white"
                  textColor="text-black"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 mt-10 md:mt-0">
              <p className="text-center text-2xl text-red font-extrabold">
                Unirse al grupo de Whatsapp
              </p>
              <div onClick={handleWGroup}>
                <Button
                  text="Whatsapp"
                  background="bg-white"
                  textColor="text-black"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ThankYou;
