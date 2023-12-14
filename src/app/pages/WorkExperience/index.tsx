import { TitleLargeDefault } from "@/app/components/texts/TitleLargeDefault";
import { Experience, experiences } from "./data/experiences";
import { ExperienceLine } from "./components/ExperienceLine";

export const WorkExperience = () => {
  return (
    <section
      id="workexperience"
      className="p-0 lg:p-10 h-screen lg:h-[50rem] grid items-center"
    >
      <div className="flex lg:justify-center p-6 lg:p-0">
        <div className="w-screen lg:w-4/6 md:w-11/12">
          <article className="grid  justify-center items-center gap-0 lg:gap-8">
            <TitleLargeDefault>Minha Experiência</TitleLargeDefault>

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
