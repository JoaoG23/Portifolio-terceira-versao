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

  return (
    <main className="flex justify-center">
      <section className="w-9/12 h-screen flex justify-between items-center gap-3">
        <article className="grid gap-2">
          <TitleLargeDefault>{project.name}</TitleLargeDefault>
          <p>{project.description}</p>
          <ButtonDefault>Acesso para mais detalhes > </ButtonDefault>
        </article>
        <article>
          <video 
            className="rounded-md"
            // width={"400px"}
            // height={"400px"}
            controls
            preload={project.image}
          >
            <source src={project.video} type="video/mp4" />
            {project.name}
          </video>
          {/* <Image
            src={project.image}
            width={300}
            height={300}
            alt={project.name}
          /> */}
        </article>
      </section>
    </main>
  );
}
