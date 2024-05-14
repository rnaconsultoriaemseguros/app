import { BsCaretRightFill, BsTelephoneFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";

const Icons = {
  float: "left",
  marginRight: "3px",
};

export default function Footer() {
  return (
    <div className="flex flex-wrap bg-[#2B3E59] text-white md:px-44 px-10 py-14">
      <div className="md:flex-1 mb-12">
        <h2 className="text-2xl font-bold mb-5">MAPA DO SITE</h2>
        <ul>
          <li>
            <BsCaretRightFill style={Icons} /> Home
          </li>
          <li>
            <BsCaretRightFill style={Icons} /> Quem Somos
          </li>
          <li>
            <BsCaretRightFill style={Icons} /> Produtos e Serviços
          </li>
          <li>
            <BsCaretRightFill style={Icons} /> Parceiros
          </li>
          <li>
            <BsCaretRightFill style={Icons} /> Convênios
          </li>
          <li>
            <BsCaretRightFill style={Icons} /> Entre em contato
          </li>
        </ul>
      </div>

      <div className="md:flex-1 mb-12">
        <h2 className="text-2xl font-bold mb-5">CONTATOS</h2>
        <ul>
          <li>
            <span>
              <BsFillTelephoneFill style={Icons} />
              (19) 98369-0832
            </span>
          </li>
          <li>
            <span>
              <BsWhatsapp style={Icons} />
              (19) 98369-0832
            </span>
          </li>
          <li>
            <span>
              <BsSendFill style={Icons} />
              contato@rna-consultoria.com.br
            </span>
          </li>
        </ul>
      </div>

      <div className="md:flex-1">
        <h2 className="text-2xl font-bold mb-5">FIQUE POR DENTRO</h2>
        <span>
          Inscreva seu e-mail no formulário abaixo e receba os melhores
          conteúdos por e-mail, rápido e fácil
        </span>

        <label className="block text-sm font-medium leading-6 text-white mt-4">
          Seu nome
        </label>
        <div className="mt-2 mb-5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <label className="block text-sm font-medium leading-6 text-white">
          Seu e-mail
        </label>
        <div className="mt-2 mb-5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="bg-[#FFFFFF] text-[#2B3E59] hover:transition-all hover:bg-[#A5B9D3] hover:text-[#211C1B] rounded-full mx-3 px-6 py-4 md:text-sm text-[0.830rem] font-bold"
          >
            ME CADASTRE NA LISTA DE NOVIDADES
          </a>
        </div>
      </div>
    </div>
  );
}
