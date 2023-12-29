import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Solutions() {
  return (
    <div className="p-10 mt-10">
      <h2 className="text-5xl uppercase font-extrabold flex justify-center mb-2 text-indigo-600">
        Nossas Soluções
      </h2>
      <p className="text-xl font-bold flex justify-center mb-16">
        Cuidamos dos seus seguros para você ter tempo de cuidar do que realmente
        importa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 items-stretch mt-10 m-auto">
        <div className="p-5 mx-2 border-r-2 border-indigo-200">
          <Image src="/seguros.jpg" width={300} height={300} alt="Seguros" className="rounded-xl mb-5" />
          <p className="text-xl font-bold uppercase text-indigo-600 mb-3">seguros</p>
          <p className="mb-8">Seguros são contratos pelo qual uma das partes, segurador, se obriga a indenizar a outra, segurado, em caso da ocorrência de determinado sinistro, em troca do recebimento de um prêmio de seguro.</p>
          <Link href="https://rixxer.com.br" className="text-white bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">Conheça-nos</Link>
        </div>
        <div className="p-5 mx-2">
          <Image src="/consorcios.jpg" width={300} height={300} alt="Consórcios" className="rounded-xl mb-5" />
          <p className="text-xl font-bold uppercase text-indigo-600 mb-3">consórcios</p>
          <p className="mb-8">Consórcio é uma associação de dois ou mais indivíduos, empresas, organizações ou governos, com o objetivo de atividade comum ou de partilha de recursos para atingir um objetivo comum.</p>
          <Link href="https://rixxer.com.br" className="text-white bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">Contrate-nos</Link>
        </div>
        <div className="p-5 mx-2 border-l-2 border-indigo-200">
          <Image src="/planoSaude.jpg" width={300} height={300} alt="Planos de Saúde" className="rounded-xl mb-5" />
          <p className="text-xl font-bold uppercase text-indigo-600 mb-3">planos de saúde</p>
          <p className="mb-8">Um seguro de saúde ou plano de saúde constitui um seguro de proteção das pessoas contra o risco de terem que vir a incorrer em despesas médicas.</p>
          <Link href="https://rixxer.com.br" className="text-white bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">Proteja-se</Link>
        </div>
      </div>
    </div>
  );
}
