import Image from "next/image";
import { BsPostcardHeart } from "react-icons/bs";
import { BsFillCarFrontFill } from "react-icons/bs";
import { BsHeartPulseFill } from "react-icons/bs";

const BsPostcardHeartIcon = {
  color: "#FFFFFF",
  fontSize: "3.125em",
  marginLeft: "1rem",
  marginTop: "3rem",
};

const BsFillCarFrontFillIcon = {
  color: "#FFFFFF",
  fontSize: "3.125em",
  marginLeft: "1rem",
  marginTop: "3rem",
};

const BsHeartPulseFillIcon = {
  color: "#FFFFFF",
  fontSize: "3.125em",
  marginLeft: "1rem",
  marginTop: "3rem",
};

export default function Operation() {
  return (
    <div className="mb-28 bg-white z-0 relative">
      <h2 className="md:text-5xl text-4xl font-bold text-[#2B3E59] text-center">
        Nossa Atuação
      </h2>

      <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:mt-9 mt-7 md:mb-20 mb-12 dark:bg-[#ACA4C0]" />

      <div className="flex flex-wrap md:flex-nowrap md:mx-16 mx-6">
        <div className="md:flex-1 border-2 border-[#ACA4C0] rounded-2xl mx-4 relative overflow-hidden mb-8 md:mb-0">
          <Image
            src="/insurance.png"
            alt="Seguros"
            width={386}
            height={258}
            className="px-2 relative z-10"
          />

          <div className="flex title">
            <div className="icon bg-[#2B3E59] w-20 h-28 ml-4 rounded-xl -mt-9">
              <BsPostcardHeart style={BsPostcardHeartIcon} />
            </div>

            <div className="text">
              <h2 className="font-bold text-2xl md:text-3xl text-[#2B3E59] mt-5 ml-6">
                Seguros
              </h2>
            </div>
          </div>

          <div className="line">
            <hr className="w-48 h-1 mx-auto mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0] -mt-2" />
          </div>

          <div className="text-center mx-7 mb-7">
            <span>
              São contratos pelo qual uma das partes, segurador, se obriga a
              indenizar a outra, segurado, em caso da ocorrência de determinado
              sinistro, em troca do recebimento de um prêmio de seguro.
            </span>
          </div>
          <div className="bg-[#A5B9D3] w-24 h-24 rounded-full -mr-12 -mb-12 float-right"></div>
        </div>

        <div className="md:flex-1 border-2 border-[#ACA4C0] rounded-2xl mx-4 relative overflow-hidden mb-8 md:mb-0">
          <Image
            src="/consorcios.png"
            alt="Consórcios"
            width={386}
            height={258}
            className="px-2 relative z-10"
          />

          <div className="flex title">
            <div className="icon bg-[#2B3E59] w-20 h-28 ml-4 rounded-xl -mt-9">
              <BsFillCarFrontFill style={BsFillCarFrontFillIcon} />
            </div>

            <div className="text">
              <h2 className="font-bold text-2xl md:text-3xl text-[#2B3E59] mt-5 ml-6">
                Consórcios
              </h2>
            </div>
          </div>

          <div className="line">
            <hr className="w-48 h-1 mx-auto mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0] -mt-2" />
          </div>

          <div className="text-center mx-7 mb-7">
            <span>
              Consórcio é uma associação de dois ou mais indivíduos, empresas,
              organizações ou governos, com o objetivo de atividade comum ou de
              partilha de recursos para atingir um objetivo comum.
            </span>
          </div>
          <div className="bg-[#A5B9D3] w-24 h-24 rounded-full -mr-12 -mb-12 float-right"></div>
        </div>

        <div className="md:flex-1 border-2 border-[#ACA4C0] rounded-2xl mx-4 relative overflow-hidden mb-8 md:mb-0">
          <Image
            src="/planos-de-saude.png"
            alt="Planos de Saúde"
            width={386}
            height={258}
            className="px-2 relative z-10"
          />

          <div className="flex title">
            <div className="icon bg-[#2B3E59] w-20 h-28 ml-4 rounded-xl -mt-9">
              <BsHeartPulseFill style={BsHeartPulseFillIcon} />
            </div>

            <div className="text">
              <h2 className="font-bold text-2xl md:text-3xl text-[#2B3E59] mt-5 ml-6">
                Planos de Saúde
              </h2>
            </div>
          </div>

          <div className="line">
            <hr className="w-48 h-1 mx-auto mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0] -mt-2" />
          </div>

          <div className="text-center mx-7 mb-7">
            <span>
              Um plano de saúde é um tipo de seguro que oferece proteção
              financeira para as pessoas contra o risco de incorrerem em
              despesas médicas. Isso proporciona mais tranquilidade aos
              segurados.
            </span>
          </div>
          <div className="bg-[#A5B9D3] w-24 h-24 rounded-full -mr-12 -mb-12 float-right"></div>
        </div>
      </div>
    </div>
  );
}
