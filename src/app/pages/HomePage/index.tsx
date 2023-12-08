import Image from "next/image";

import { TitleLargeDefault } from "../../components/texts/TitleLargeDefault";
import { NavContacts } from "./components/NavContacts";

export function HomePage() {
  return (
    <section>
      <div className="flex justify-center">
        <div className="w-full lg:w-4/6 md:w-11/12">
          <article className="grid lg:flex justify-center items-center h-[1000px] lg:h-screen gap-8">
            <div className="grid justify-center">
              <Image
                className="rounded-full shadow-md shadow-indigo-500/50 m-4 "
                src="/perfil.jpg"
                width={320}
                height={320}
                alt="Picture of the author"
              />
              <NavContacts />
            </div>
            <article className="grid p-1 lg:p-10 sm:p-4 md:p-4">
              <TitleLargeDefault>
                Olá! Eu sou o João Guilherme!
              </TitleLargeDefault>
              <TitleLargeDefault>Desenvolvedor</TitleLargeDefault>
              <h2 className="font-extrabold text-4xl md:text-6xl lg:text-7xl  text-gray-500">
                FullStack
              </h2>
              <h1 className="font-extrabold text-2xl md:text-4xl lg:text-4xl  text-gray-500">
                Inovação constante, soluções web para o futuro.
              </h1>
            </article>
          </article>
        </div>
      </div>
    </section>
  );
}
