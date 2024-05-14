import Image from "next/image";
import { BsCashCoin } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

const CashIcon = {
  color: "#2B3E59",
  fontSize: "3.125em",
  marginLeft: "0.55rem",
  marginTop: "0.7rem",
};

const BsFileEarmarkTextIcon = {
  color: "#FFFFFF",
  fontSize: "3.125em",
  marginLeft: "0.55rem",
  marginTop: "0.6rem",
};

const BsFillClockFillIcon = {
  color: "#2B3E59",
  fontSize: "3.125em",
  marginLeft: "0.6rem",
  marginTop: "0.6rem",
};

export default function About2() {
  return (
    <div>
      <div className="bg-[#2B3E59] h-56"></div>
      <div className="flex flex-wrap md:flex-nowrap md:mx-40 mb-28">
        <div className="-mt-24 bg-white rounded-3xl border-2 border-[#ACA4C0] p-9 md:w-full md:h-96 md:-mr-4 mx-12">
          <div className="border-2 border-[#ACA4C0] rounded-full text-[#2B3E59] w-20 h-20 mb-6 p-1">
            <BsCashCoin style={CashIcon} />
          </div>

          <h2 className="text-2xl text-[#2B3E59] font-semibold mb-4">
            Proteja seu patrimônio
          </h2>
          <span>
            Oferecemos uma gama completa de seguros para garantir a segurança do
            seu patrimônio, da sua vida e da sua família.
          </span>
        </div>

        <div className="relative md:-mt-32 -mt-4 bg-[#2B3E59] rounded-3xl border-2 border-[#ACA4C0] md:w-full md:h-full py-20 pl-9 pr-20 mx-5 md:mx-0">
          <Image
            src="/about2-img.jpg"
            className="absolute object-cover mix-blend-overlay rounded-3xl"
            layout="fill"
            alt="About Us"
          />
          <div className="relative">
            <div className="border-2 border-white rounded-full text-white w-20 h-20 mb-6 p-1">
              <BsFileEarmarkText style={BsFileEarmarkTextIcon} />
            </div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Solicite um orçamento
            </h2>
            <span className="text-white">
              Entre em contato conosco e faça uma cotação, sem compromisso.
              Compare e comprove, nossa qualidade e atendimento ímpares.
            </span>
          </div>
        </div>

        <div className="md:-mt-24 -mt-4 bg-white rounded-3xl border-2 border-[#ACA4C0] p-9 md:w-full md:h-96 md:-ml-4 mx-12">
          <div className="border-2 border-[#ACA4C0] rounded-full text-[#2B3E59] w-20 h-20 mb-6 p-1">
            <BsFillClockFill style={BsFillClockFillIcon} />
          </div>
          <h2 className="text-2xl text-[#2B3E59] font-semibold mb-4">
            Rápido e confiável
          </h2>
          <span>
            Em um mundo cada vez mais rápido, tenha a tranquilidade de ter a R N
            A Consultoria em Seguros ao seu lado.
          </span>
        </div>
      </div>
    </div>
  );
}
