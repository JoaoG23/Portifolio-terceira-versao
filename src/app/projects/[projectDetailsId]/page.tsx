import { projectData } from "../data/project-data";
import { Project } from "../data/types/ProjectData";
import { TitleLargeDefault } from "@/app/components/texts/TitleLargeDefault";
import Image from "next/image";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { ButtonSecondary } from "@/app/components/buttons/ButtonSecondary/ButtonSecondary";
import Link from "next/link";
import { ButtonDefault } from "@/app/components/buttons/buttonDefault/buttonDefault";

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
      <div className="w-[32%] h-[400px] bg-amber-500 rounded-[80px] opacity-25 z-[-1] fixed right-20 background-box-1 "></div>
      <section className="w-full lg:w-9/12 grid justify-between content-center gap-3 lg:gap-3 lg:flex lg:items-center bg-white p-3 md:p-5 lg:p-14  rounded-3xl h-auto md:h-auto lg:h-5/6 shadow-md">
        <article className="flex gap-2 flex-col items-start">
          <TitleLargeDefault>{project.name}</TitleLargeDefault>
          {projectsDetails.map((detail: string, index: number) => (
            <p key={index} className="text-gray-600 font-semibold">
              {detail}
            </p>
          ))}

          <div className="grid gap-2 lg:gap-2 lg:grid-cols-2 ">
            <Link href={"https://wa.me/5531996216938"}>
              <ButtonSecondary>
                <FaWhatsapp size={25} />
                <p>Solicite o seu orçamento</p>
              </ButtonSecondary>
            </Link>
            <Link href={project.link}>
              <ButtonDefault>
                <FaGithub size={25} />
                <p>Acesse o Github</p>
              </ButtonDefault>
            </Link>
          </div>
        </article>
        <article>
          {project.iframe ? (
            <iframe
              className="rounded-3xl w-full md:lg:w-[29vw] h-72"
              src={project.video}
            ></iframe>
          ) : (
            <Image
              width={400}
              height={400}
              className="rounded-2xl w-full h-auto shadow-sm"
              src={project.image}
              alt={project.name}
            />
          )}
        </article>
      </section>
    </section>
  );
}
