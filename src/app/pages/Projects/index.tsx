"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TitleLargeDefault } from "../../components/texts/TitleLargeDefault";
import { ProjectCard } from "./components/ProjectCard";

import { projects } from "./data/projects";
import { breakpoints } from "./data/breakpoints";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-4/6 md:w-11/12">
          <article className="grid justify-center items-center h-[1000px] lg:h-screen gap-3">
            <TitleLargeDefault>Meus projetos</TitleLargeDefault>
            <Swiper
              breakpoints={breakpoints}
              modules={[Navigation]}
              slidesPerView={3}
              navigation
              className="ease flex items-center w-full justify-center m-auto h-full transition duration-200 cardsSwiper"
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <ProjectCard
                    srcImage={project.src}
                    title={project.name}
                    description={project.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </article>
        </div>
      </div>
    </section>
  );
};
