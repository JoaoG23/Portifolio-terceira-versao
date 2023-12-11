import { TitleLargeSecondary } from "../../components/texts/TitleLargeSecondary";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-amber-500 p-0 lg:p-10 h-[43rem] grid items-center"
    >
      <div className="flex lg:justify-center p-6 lg:p-0">
        <div className="w-screen lg:w-4/6 md:w-11/12">
          <article className="grid lg:flex justify-center items-center gap-0 lg:gap-8">
            <TitleLargeSecondary>Um pouco sobre mim</TitleLargeSecondary>
            <article className="py-10 custom-softly-animation-left-right">
              <p className="text-gray-50 font-extrabold text-lg  lg:text-base ">
                Sou um desenvolvedor apaixonado desde 2021, com habilidades em
                backend e frontend, destacando-me no ecossistema JavaScript.
                Especializado em controle de acesso, meu compromisso é aprimorar
                habilidades e contribuir para soluções eficientes, refletindo
                meu comprometimento com a excelência e o impacto positivo
                através da tecnologia.
              </p>
            </article>
          </article>
        </div>
      </div>
    </section>
  );
};
