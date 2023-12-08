"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { toggleMobileButtonVisibility } from "./utils/toggleMobileButtonVisibility/toggleMobileButtonVisibility";

import { SidebarMobile } from "./components/SidebarMobile";

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const showOrHiddenSideBar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {toggleMobileButtonVisibility(showSidebar, () => showOrHiddenSideBar())}
      <header className="hidden md:hidden lg:flex justify-between items-center h-16 px-10 text-amber-500 font-semibold shadow-sm">
        <Image
          src={"/logo.svg"}
          width={60}
          height={60}
          alt={"logomarca"}
        />

        <nav className="flex gap-3 ">
          <Link className="hover:text-purple-500 duration-200" href="#home">Home</Link>
          <Link className="hover:text-purple-500 duration-200" href="#about">Sobre</Link>
          <Link className="hover:text-purple-500 duration-200" href="#projects">Projetos</Link>
          <Link className="hover:text-purple-500 duration-200" href="#skills">Habilidades</Link>
        </nav>
      </header>
      <SidebarMobile show={showSidebar} setShow={setShowSidebar} />
    </>
  );
};
