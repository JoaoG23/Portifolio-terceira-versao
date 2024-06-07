import { projectData } from "../data/project-data";
import { Project } from "../data/types/ProjectData";
import { TitleLargeDefault } from "@/app/components/texts/TitleLargeDefault";
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
    <section className="flex justify-center h-screen custom-softly-animation-left-right ">
      <div className="w-[32%] h-[500px] bg-amber-500 rounded-[80px] opacity-25 z-[-1] fixed right-20 background-box-1"></div>
      <div className="w-[22%] h-[300px] bg-purple-500 rounded-[80px] opacity-25 z-[-1] fixed right-96 background-box-2"></div>
      <section className="w-9/12 grid justify-between content-center gap-3 lg:gap-3 lg:flex lg:items-center">
        <article className="flex gap-2 flex-col items-start">
          <TitleLargeDefault>{project.name}</TitleLargeDefault>
          {projectsDetails.map((detail: string, index: number) => (
            <p key={index} className="text-gray-600 font-semibold">
              {detail}
            </p>
          ))}
          <ButtonDefault>Acesso para mais detalhes </ButtonDefault>
        </article>
        <article>
          <video controls preload={project.image}>
            <source src={project.video} type="video/mp4" />
            {project.name}
          </video>
        </article>
      </section>
    </section>
  );
}
