import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

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
            <div className="float-left ml-10">
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
    </div>
  );
}
