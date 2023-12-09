"use client";
import Link from "next/link";

type Props = {
  show: boolean;
  setShow: any;
};

export const SidebarMobile = ({ show, setShow }: Props) => {
  const mostrarSidebar: string = show ? "w-11/12" : "w-0";
  return (
    <header
      className={`z-10 fixed text-4xl bg-purple-500 text-gray-50 font-bold grid overflow-hidden ease-in duration-300 h-full lg:h-0 ${mostrarSidebar}`}
    >
      <div className="flex items-center justify-center">
        <nav className="grid gap-3" onClick={() => setShow(false)}>
          <Link
            className="rounded-lg p-2 hover:bg-gray-50 hover:text-purple-600"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="rounded-lg p-2 hover:bg-gray-50 hover:text-purple-600"
            href="#about"
          >
            Sobre
          </Link>
          <Link
            className="rounded-lg p-2 hover:bg-gray-50 hover:text-purple-600"
            href="#workexperience"
          >
            Experiência
          </Link>

          <Link
            className="rounded-lg p-2 hover:bg-gray-50 hover:text-purple-600"
            href="#projects"
          >
            Projetos
          </Link>
          <Link
            className="rounded-lg p-2 hover:bg-gray-50 hover:text-purple-600"
            href="#skills"
          >
            Habilidades
          </Link>
        </nav>
      </div>
    </header>
  );
};
