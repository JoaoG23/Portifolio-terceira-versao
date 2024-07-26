import { projectData } from "../data/project-data";
import { Project } from "../data/types/ProjectData";
import { TitleLargeDefault } from "@/app/components/texts/TitleLargeDefault";
import { ButtonDefault } from "@/app/components/buttons/buttonDefault/buttonDefault";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonSecondary } from "@/app/components/buttons/ButtonSecondary/ButtonSecondary";

export default function ProjectDetailsId({
  params,
}: {
  params: { projectDetailsId: number };
}) {
  const idProject = Number(params.projectDetailsId);

  function findProjectById(project: Project) {
    return project?.id === idProject;
  }
  const project: Project = projectData.filter(findProjectById)[0] || {};
  const projectsDetails: string[] = project.description;
  return (
    <section className="flex justify-center items-center h-screen custom-softly-animation-left-right">
      <div className="w-[32%] h-[500px] bg-amber-500 rounded-[80px] opacity-25 z-[-1] fixed right-20 background-box-1"></div>
      <div className="w-[22%] h-[300px] bg-purple-500 rounded-[80px] opacity-25 z-[-1] fixed right-96 background-box-2"></div>
      <section className="w-full lg:w-9/12 grid justify-between content-center gap-3 lg:gap-3 lg:flex lg:items-center bg-white p-1 md:p-5 lg:p-14  rounded-3xl h-auto md:h-auto lg:h-5/6 shadow-md">
        <article className="flex gap-2 flex-col items-start">
          <TitleLargeDefault>{project.name}</TitleLargeDefault>
          {projectsDetails.map((detail: string, index: number) => (
            <p key={index} className="text-gray-600 font-semibold">
              {detail}
            </p>
          ))}
          <ButtonSecondary>
            <FaWhatsapp size={25}/>
            <p>Solicite o seu orçamento</p>
          </ButtonSecondary>
        </article>
        <article>
          {project.iframe ? (
            <iframe
              className="rounded-3xl w-auto md:lg:w-[29vw] h-72"
              src={project.video}
            ></iframe>
          ) : (
            <Image
              width={400}
              height={400}
              className="rounded-t-lg w-full h-auto"
              src={project.video}
              alt={project.name}
            />
          )}
        </article>
      </section>
    </section>
  );
}
