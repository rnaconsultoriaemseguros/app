import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="p-10 mt-10">
      <div>
        <h2 className="text-5xl uppercase font-extrabold mb-2 text-indigo-600">
          Blog RNA
        </h2>
        <p className="text-xl font-bold mb-16">Confira as novidades</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 items-stretch mt-10 m-auto">
        <div className="p-5 mx-2 border-r-2 border-indigo-200">
          <Image
            src="/blog1.jpg"
            width={330}
            height={300}
            alt="Blog"
            className="rounded-xl mb-5"
          />
          <p className="text-xl font-bold uppercase text-indigo-600 mb-3">
            8 Brincadeiras Divertidas para o Dia das Crianças
          </p>
          <p className="mb-8">
            Aproveite o Dia das Crianças com diversão em família! Descubra 8
            brincadeiras para todas as idades, dos bebês aos pré-adolescentes.
          </p>
          <Link
            href="https://rixxer.com.br"
            className="text-white bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          >
            Conferir notícia
          </Link>
        </div>
        <div className="p-5 mx-2 border-r-2 border-indigo-200">
          <Image
            src="/blog2.jpg"
            width={330}
            height={300}
            alt="Blog"
            className="rounded-xl mb-5"
          />
          <p className="text-xl font-bold uppercase text-indigo-600 mb-3">
            Outubro Rosa: 5 Dicas para uma Vida Mais Saudável
          </p>
          <p className="mb-8">
            O Outubro Rosa vai além de apenas usar a cor rosa como símbolo. Por
            isso, preparamos 5 dicas de autocuidado para você levar uma vida
            mais leve e saudável.
          </p>
          <Link
            href="https://rixxer.com.br"
            className="text-white bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          >
            Conferir notícia
          </Link>
        </div>
        <div className="p-5 mx-2 border-r-2 border-indigo-200">
          <Image
            src="/blog3.jpg"
            width={330}
            height={300}
            alt="Blog"
            className="rounded-xl mb-5"
          />
          <p className="text-xl font-bold uppercase text-indigo-600 mb-3">
            Mês da Longevidade: Envelhecimento Ativo em Destaque
          </p>
          <p className="mb-8">
            Pesquisadores criaram um indicador inovador para medir o nível de
            envelhecimento ativo. Descubra como isso impacta o bem-estar na
            terceira idade.
          </p>
          <Link
            href="https://rixxer.com.br"
            className="text-white bg-indigo-600 hover:bg-indigo-900 hover:transition-all focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          >
            Conferir notícia
          </Link>
        </div>
      </div>
    </div>
  );
}
