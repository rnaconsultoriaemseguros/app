import Link from "next/link";
import React from "react";
const data = new Date();
const ano = data.getFullYear();

export default function Footer2() {
  return (
    <div className="p-4 text-center">
      <span className="text-sm">
        <span className="font-bold">RNA Consultoria em Seguros - {ano}</span> - Desenvolvido por
        <Link
          href="https://rixxer.com.br"
          target="_blank"
          className="font-bold hover:text-indigo-600 transition-all"
        >
          &nbsp;Rixxer Corp&nbsp;
        </Link>
        - Todos os Direitos Reservados
      </span>
    </div>
  );
}
