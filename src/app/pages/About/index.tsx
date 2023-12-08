import { TitleLargeSecondary } from "../../components/texts/TitleLargeSecondary";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-amber-500 p-0 lg:p-10 h-[43rem] grid items-center"
    >
      <div className="flex lg:justify-center p-6 lg:p-0">
        <div className="w-screen lg:w-3/5 md:w-11/12">
          <article className="grid lg:flex justify-center items-center gap-0 lg:gap-8">
            <TitleLargeSecondary>Um pouco sobre mim</TitleLargeSecondary>
            <article className="py-10">
              <p className="text-gray-50 font-extrabold text-lg  lg:text-base ">
                Eu sou um desenvolvedor apaixonado que iniciou sua jornada em
                2021, mergulhando de cabeça no mundo da programação. Com
                habilidades tanto no desenvolvimento backend quanto no frontend,
                encontrei minha verdadeira paixão no ecossistema JavaScript. Ao
                longo da minha carreira, fui levado a trabalhar no nicho
                desafiador da área de controle de acesso. Minha dedicação em
                aprimorar minhas habilidades e contribuir para soluções
                eficientes nesse campo específico reflete meu compromisso com a
                excelência e o impacto positivo por meio da tecnologia.
              </p>
            </article>
          </article>
        </div>
      </div>
    </section>
  );
};
