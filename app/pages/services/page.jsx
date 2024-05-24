import Image from "next/image";
import {
  BsFillHouseCheckFill,
  BsFillCarFrontFill,
  BsCashCoin,
  BsFillBuildingFill,
  BsFillPeopleFill,
  BsBuildings,
  BsTruck,
  BsPersonWheelchair,
  BsChatSquareHeart,
  BsPrescription2,
  BsCoin,
  BsBrightnessHigh,
  BsLifePreserver,
  BsBicycle,
} from "react-icons/bs";

const icon = {
  color: "#FFFFFF",
  fontSize: "2em",
  fontWeight: "800",
};

export default function Services() {
  return (
    <div className="mb-24">
      <div>
        <Image
          src={"/services.png"}
          alt="Sobre Nós"
          className="object-contain"
          width={1920}
          height={600}
        />
      </div>

      <div className="text-center mt-16 mb-16">
        <h2 className="md:text-5xl text-4xl font-bold text-[#2B3E59]">
          Produtos e Serviços
        </h2>
        <h3 className="md:text-3xl text-2xl px-8">
          Conheça todas as nossas soluções
        </h3>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:mb-8">
        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/residencias.png"}
            alt="Proteção para Residências"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsFillHouseCheckFill style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Proteção para Residências
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Sua residência protegida contra incêndio, pane elétrica,
              vazamento, serviço de chaveiro e mais.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/veiculos.png"}
            alt="Proteção para Veículos"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsFillCarFrontFill style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Proteção para Veículos
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              A proteção veicular oferece proteção à seu veículo, incluindo
              danos causados por colisões, roubos e outros eventos.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8">
          <Image
            src={"/financeira.png"}
            alt="Proteção Financeira"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsCashCoin style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Proteção Financeira
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Seguro para cobrir eventos que podem gerar dificuldades no
              orçamento, como invalidez temporária ou permanente.
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:mb-8 px-5">
        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/empresas.png"}
            alt="Proteção para Empresas"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsFillBuildingFill style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Proteção para Empresas
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Produto para Pessoas Jurídicas que visa proteger um negócio contra
              perdas decorrentes de diferentes acontecimentos.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/civil.png"}
            alt="Seguro de Responsabilidade Civil"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsFillPeopleFill style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Seguro de Responsabilidade Civil
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              O principal objetivo deste seguro é de reembolsar os valores
              despendidos nas ações administrativas ou judiciais.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8">
          <Image
            src={"/condominios.png"}
            alt="Proteção para Condomínios"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsBuildings style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Proteção para Condomínios
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              A Proteção para Condomínios cobre despesas com reformas, reparos e
              danos em condomínios.
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:mb-8 px-5">
        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/consorcios_interna.png"}
            alt="Consórcios"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsTruck style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Consórcios
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Seguro que garante ao cotista a cobertura no valor do crédito
              contratado, somado às taxas administrativas previstas.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/previdencia.png"}
            alt="Previdência Privada"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsPersonWheelchair style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Previdência Privada
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Investimento disponibilizado para pessoas físicas com o caráter de
              longo prazo, a fim de complementar a previdência pública.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8">
          <Image src={"/pet.png"} alt="Saúde Pet" width={362} height={246} />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsChatSquareHeart style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Saúde Pet
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Proteção para animais de estimação que realiza a cobertura de uma
              série de sinistros.
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:mb-8 px-5">
        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/vida.png"}
            alt="Proteção para a vida"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsPrescription2 style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Proteção para a vida
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              É um contrato pelo qual a seguradora se compromete a pagar uma
              indenização a beneficiários indicados pelo segurado.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/emprestimos.png"}
            alt="Empréstimos e Financiamentos"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsCoin style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Empréstimos e Financiamentos
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Seguro que cobre o valor total ou as parcelas de empréstimos e
              financiamentos do segurado nas situações contempladas na apólice.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8">
          <Image
            src={"/rural.png"}
            alt="Seguro Rural"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsBrightnessHigh style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Seguro Rural
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Protege o produtor contra perdas financeiras resultantes de
              eventos imprevisíveis, como fenômenos climáticos por exemplo.
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center mb-16 px-5">
        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/nautico.png"}
            alt="Seguro Náutico"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsLifePreserver style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Seguro Náutico
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Seguro específico para embarcações de recreio, ou seja, de lazer
              ou esporte.
            </h5>
          </div>
        </div>

        <div className="w-[362px] border border-[#ACA4C0] rounded-2xl mb-8 md:mr-16">
          <Image
            src={"/bicicleta.png"}
            alt="Seguro Bike"
            width={362}
            height={246}
          />
          <div className="icon bg-[#2b3e59] px-3 py-3 rounded-xl float-end -mt-8 mr-6 relative">
            <BsBicycle style={icon} />
          </div>
          <div className="pl-9">
            <hr className="w-20 h-1 mt-7 mb-7 bg-gray-100 border-0 rounded dark:bg-[#ACA4C0]" />
            <h3 className="font-bold text-2xl text-[#2B3E59] pr-6">
              Seguro Bike
            </h3>
            <h5 className="pr-6 mt-4 mb-8">
              Apólice de seguro que oferece proteção financeira para ciclistas
              em caso de roubo ou danos acidentais.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
