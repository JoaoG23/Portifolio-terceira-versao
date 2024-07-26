import { TitleLargeDefault } from "@/app/components/texts/TitleLargeDefault";
import { Experience, experiences } from "./data/experiences";
import { ExperienceLine } from "./components/ExperienceLine";

export const WorkExperience = () => {
  return (
    <section
      id="workexperience"
      className="p-0 py-10 lg:p-10 h-full grid items-center"
    >
      <div className="flex lg:justify-center p-2 lg:p-0">
        <div className="w-screen lg:w-4/6 md:w-11/12">
          <article className="grid justify-center items-center gap-0 lg:gap-8 p-2 ">
            <div className="grid justify-start">
              <TitleLargeDefault>Minha Experiência</TitleLargeDefault>
            </div>
            {experiences.map((experience: Experience) => (
              <ExperienceLine
                key={experience.id}
                profession={experience.profession}
                company={experience.company}
                area={experience.area}
                time={experience.time}
                description={experience.description}
                techs={experience.techs}
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};
