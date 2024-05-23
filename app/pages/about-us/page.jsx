import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const ChevronIcon = {
  color: "#2B3E59",
  fontSize: "1.2em",
  fontWeight: "800",
};

export default function AboutUs() {
  return (
    <div>
      <div>
        <Image
          src={"/about-slider.png"}
          alt="Sobre Nós"
          className="object-contain"
          width={1920}
          height={600}
        />
      </div>

      <div className="flex justify-center text-justify mb-24">
        <div className="flex md:flex-row flex-col md:w-3/4 w-11/12 mx-5 border border-[#ACA4C0] bg-white md:-mt-32 -mt-16 rounded-xl px-11 md:pt-20 pt-16">
          <div className="md:flex-1">
            <div className="flex">
              <h2 className="md:text-4xl text-3xl text-[#2B3E59] font-bold pb-16">
                Cultura Organizacional
              </h2>
            </div>
            <div className="flex items-center">
              <BsChevronRight style={ChevronIcon} />
              <h3 className="font-bold text-3xl text-[#2B3E59]">Missão</h3>
            </div>
            <p className="md:mb-12 mb-8">
              Desempenhar com excelência os serviços de corretagem,
              administração e consultoria na área de seguros, oferecendo as
              melhores soluções do mercado, zelando e garantindo a tranquilidade
              de nossos clientes.
            </p>

            <div className="flex items-center">
              <BsChevronRight style={ChevronIcon} />
              <h3 className="font-bold text-3xl text-[#2B3E59]">Visão</h3>
            </div>
            <p className="md:mb-12 mb-8">
              Ser uma referência no mercado de corretagem de seguro, reconhecida
              pelo padrão de atendimento, pela qualidade e eficácia das soluções
              que oferece, e pela busca contínua por inovação e aprimoramento do
              seu portfólio de produtos.
            </p>

            <div className="flex items-center">
              <BsChevronRight style={ChevronIcon} />
              <h3 className="font-bold text-3xl text-[#2B3E59]">Valores</h3>
            </div>
            <p className="mb-12">
              Pautamos a busca de resultados em atitudes éticas, sustentáveis e
              inovadoras. Nos empenhamos em construir relações duradouras com
              nossos clientes com muito entusiasmo e respeito.
            </p>
          </div>

          <div className="md:flex-1 md:mt-0 mt-8">
            <div className="float-right">
              <Image
                src="/about-img-1.png"
                alt="Cultura Organizacional"
                width={377}
                height={264}
              />
            </div>
            <div className="float-left ml-10 mb-8">
              <Image
                src="/about-img-2.png"
                alt="Cultura Organizacional"
                width={287}
                height={244}
                className="-mt-8 ml-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-justify mb-24 mt-24">
        <div className="flex md:flex-row flex-col md:w-3/4 w-11/12 mx-5 rounded-xl md:px-11">
          <div className="md:w-2/3 md:order-first order-last">
            <div className="path md:mr-16 p-8 bg-[#f7f7f7] mb-8 rounded-l-3xl mt-8">
              <div className="text-xl md:mr-16 mr-8 mb-6">
                Encontrei o{" "}
                <span className="font-bold text-[#2b3e59]">Ronaldo</span> quando
                já estava desacreditada dos serviços dos corretores. Ele me
                atendeu com paciência e clareza de informações. Assim pude optar
                por itens que nem sabia que tinha direito com o corretor que me
                atendia anteriormente. Quando tive problema com meu carro, ele
                me auxiliou em tudo o que precisei. Já o recomendei a diversas
                pessoas que também estão muito satisfeitas com seu atendimento.
              </div>
            </div>
            <div className="text-center md:mr-28 mr-8 -mt-14 text-2xl font-bold bg-[#2B3E59] text-white rounded-b-xl mb-16 relative py-4">
              Kátia - Campinas/SP
            </div>

            <div className="path md:mr-16 p-8 bg-[#f7f7f7] mb-8 rounded-l-3xl mt-8">
              <div className="text-xl md:mr-16 mr-8 mb-6">
                O <span className="font-bold text-[#2b3e59]">Ronaldo</span> é
                meu corretor de seguros a anos, de automóvel e residencial, o
                atendimento é impecável, eu não tenho preocupações. Quando
                precisei acionar meu seguro, ele me orientou, acompanhou todo o
                processo, ele sempre me avisa quando minha apólice está para
                vencer, faz a cotação do que é melhor para mim, me explica sobre
                as opções, diferenças de apólices, enfim, tenho total confiança
                em seu trabalho.
              </div>
            </div>
            <div className="text-center md:mr-28 mr-8 -mt-14 text-2xl font-bold bg-[#2B3E59] text-white rounded-b-xl mb-16 relative py-4">
              Michele - Campinas/SP
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-5xl md:text-right font-bold mb-10 text-center">
              O que nossos <span className="text-[#2B3E59]">clientes</span>{" "}
              estão falando de nós?
            </h2>
            <h3 className="text-3xl md:text-right mb-10 text-center">
              Confira alguns depoimentos de nossos clientes, sobre nossa
              empresa, prestação de serviços e atendimento.
            </h3>
            <Link
              href={""}
              className="bg-[#2B3E59] text-white hover:transition-all hover:bg-[#A5B9D3] hover:text-white block rounded-full px-6 py-4 font-medium text-center text-2xl"
            >
              Solicite uma cotação conosco, sem compromisso!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
