import Link from "next/link";
import React from "react";

export default function HowToChoose() {
  return (
    <div className="bg-indigo-100 p-5 pt-16 pb-16 md:p-24 text-center">
      <h2 className="text-4xl uppercase font-extrabold flex justify-center mb-2 text-indigo-600">Como escolher o melhor seguro para mim?</h2>
      <p className="text-xl font-bold flex justify-center mb-16">
        Faça uma cotação e descubra que com a RNA Consultoria em Seguros você
        sempre tem uma escolha precisa.
      </p>
      <Link
        href="https://rixxer.com.br"
        className="text-white text-lg bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg px-10 py-5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
      >
        Faça uma simulação
      </Link>
    </div>
  );
}
