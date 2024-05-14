import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const socialIcons = {
  fontSize: "2em",
};

export default function Contact() {
  return (
    <div className="bg-[#2B3E59] md:px-52 px-5 py-14 text-white mb-24">
      <div className="flex flex-wrap">
        <div className="md:flex-1 mb-14">
          <h2 className="font-bold text-3xl mb-7">Entre em contato</h2>
          <hr className="w-48 h-1 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0] mb-7" />
          <span className="text-base">
            Para saber mais sobre nossos produtos e serviços, por favor preencha
            o formulário que entraremos em contato.
          </span>

          <div className="flex mt-7">
            <div className="flex-row mr-4">
              <BsFacebook style={socialIcons} />
            </div>
            <div className="flex-row mr-4">
              <BsInstagram style={socialIcons} />
            </div>
            <div className="flex-row">
              <BsWhatsapp style={socialIcons} />
            </div>
          </div>
        </div>

        <div className="md:after:block md:after:bg-white md:after:w-[1px] md:after:h-[500px] md:after:mx-2"></div>

        <div className="md:flex-1 md:ml-4 w-full">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-white"
          >
            Seu nome
          </label>
          <div class="mt-2 mb-5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-white"
          >
            Seu e-mail
          </label>
          <div class="mt-2 mb-5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-white"
          >
            Seu telefone
          </label>
          <div class="mt-2 mb-5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <label
            for="about"
            class="block text-sm font-medium leading-6 text-white"
          >
            Sua mensagem (opcional)
          </label>
          <div class="mt-2 mb-7">
            <textarea
              id="about"
              name="about"
              rows="5"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>

          <div className="button">
            <a
              href="#"
              className="bg-white text-[#2B3E59] hover:transition-all hover:bg-[#000000] hover:text-white block rounded-full text-center px-3 py-2 text-base font-bold w-28"
            >
              ENVIAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
