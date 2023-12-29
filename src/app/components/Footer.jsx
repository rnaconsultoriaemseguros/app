import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 items-stretch mt-10 m-auto bg-indigo-600 p-12">
      <div className="text-white">
        <p className="text-xl font-bold mb-5 text-yellow-400">Links Rápidos</p>
        <ul className="mb-10">
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block pl-1 align-middle">
                Perguntas Frequentes
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block pl-1 align-middle">
                SAC e Telefones
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block pl-1 align-middle">WhatsApp</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block pl-1 align-middle">Endereço</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block pl-1 align-middle">Ouvidoria</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block pl-1 align-middle">
                Chat Online
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white">
        <p className="text-xl text-yellow-400 font-bold mb-5">Sobre Nós</p>
        <ul className="mb-10">
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              Quem Somos
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              Nossa História
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="https://rixxer.com.br"
              className="hover:text-yellow-400 hover:transition-all"
            >
              Dicas de Segurança
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white">
        <Image
          src="/logotipo-white.png"
          width={200}
          height={200}
          alt="RNA Consultoria em Seguros"
        />
        <p className="mt-5 mb-4">Acompanhe a gente nas redes sociais:</p>
        <Link href="https://www.facebook.com/ra.consultoriaemseguros" target="_blank" className="pr-4">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
        <Link href="https://www.instagram.com/rna_consultoria?r=nametag" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      </div>
    </div>
  );
}
