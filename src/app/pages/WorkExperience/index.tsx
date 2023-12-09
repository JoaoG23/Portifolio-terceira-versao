import { TitleLargeDefault } from "@/app/components/texts/TitleLargeDefault";
import { TitleLargeSecondary } from "../../components/texts/TitleLargeSecondary";

export const WorkExperience = () => {
  return (
    <section
      id="workexperience"
      className="p-0 lg:p-10 h-screen lg:h-[43rem] grid items-center"
    >
      <div className="flex lg:justify-center p-6 lg:p-0">
        <div className="w-screen lg:w-3/5 md:w-11/12">
          <article className="grid  justify-center items-center gap-0 lg:gap-8">
            <TitleLargeDefault>Minha Experiência</TitleLargeDefault>

            <ul className="my-4 list-disc text-gray-500">
              <div className="bg-gray-50 text-amber-500 rounded-lg mb-4">
                <h2 className="text-2xl font-bold">
                  Desenvolvedor Fullstack Web
                </h2>
              </div>
              <li className="font-bold">Empresa: XC Soluções</li>
              <li className="">
                <strong>Período de Atuação:</strong> Dez de 2022 até Atualmente
              </li>
              <li>
                <strong className="font-semibold">
                  Descrição da Atividade:
                </strong>{" "}
                Atuei na criação, estruturação e documentação do Sistema de
                Gestão de Doca e Portaria, desempenhando funções tanto no
                Back-end quanto no Front-end.
              </li>
              <li>
                Automatizei o check-in de veículos no Sistema de Gestão de Doca
                e Portaria ao integrar uma balança rodoviária. Essa
                implementação eficiente resultou na notável agilização do
                processo logístico, reduzindo as filas de caminhões.
              </li>
            </ul>
            <ul className="my-4 list-disc text-gray-500">
              <div className="bg-gray-50 text-amber-500 rounded-lg mb-4">
                <h2 className="text-2xl font-bold">
                  Técnico de Suporte em Desenvolvimento TI e Software{" "}
                </h2>
              </div>
              <li className="font-bold">Empresa: XC Soluções</li>
              <li className="">
                <strong>Período de Atuação:</strong> Jul de 2021 até Abr de 2022
              </li>
              <li>
                <strong className="font-semibold">
                  Descrição da Atividade:
                </strong>{" "}
                Auxiliei na primeira integração entre dois sistemas internos de
                controle de acesso, conectando-os ao sistema de portaria de
                visitantes. Incrementando funcionalidades para proporcionar
                ainda mais valor ao cliente.
              </li>
              <li>
                Auxílio no suporte técnico ao usuário de softwares desenvolvidos
                na empresa.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
