import { TitleLargeDefault } from "../../components/texts/TitleLargeDefault";
import { Technologies } from "./components/Technologies";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-4/6 md:w-11/12 py-5 md:py-0 lg:py-16">
          <article className="grid justify-center h-auto">
            <div className="mb-16">
              <TitleLargeDefault>Minhas Habilidades</TitleLargeDefault>
            </div>
            <Technologies />
          </article>
        </div>
      </div>
    </section>
  );
};
