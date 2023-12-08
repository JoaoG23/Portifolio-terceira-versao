import { TitleLargeDefault } from "../../components/texts/TitleLargeDefault";
import { Technologies } from "./components/Technologies";

export const Skills = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-4/6 md:w-11/12">
          <article className="grid justify-center items-center h-[1000px] lg:h-screen ">
            <TitleLargeDefault>Minhas Habilidades</TitleLargeDefault>
            <Technologies />
          </article>
        </div>
      </div>
    </section>
  );
};
