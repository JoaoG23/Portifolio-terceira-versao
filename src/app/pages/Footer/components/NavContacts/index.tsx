import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const NavContacts = () => {
  const sizeIcons: number = 34;
  const fontCuston: string = "font-bold text-amber-50";
  return (
    <nav className="flex lg:flex justify-center gap-5 lg:justify-between ">
      <Link href={"https://github.com/JoaoG23"}>
        <div
          className={`grid justify-items-center gap-1 rounded-lg p-2 lg:p-0 ${fontCuston} duration-200 hover:scale-125`}
        >
          <FaGithub size={sizeIcons} />
        </div>
      </Link>
      <Link href={"https://www.linkedin.com/in/joaog123/"}>
        <div
          className={`grid justify-items-center gap-1 rounded-lg p-2 lg:p-0 ${fontCuston} duration-200 hover:scale-125`}
        >
          <FaLinkedin size={sizeIcons} />
        </div>
      </Link>
      <Link href={"mailto:jguilhermeempresarial@outlook.com"}>
        <div
          className={`grid justify-items-center gap-1 rounded-lg p-2 lg:p-0 ${fontCuston} duration-200 hover:scale-125`}
        >
          <MdEmail size={sizeIcons} />
        </div>
      </Link>
    </nav>
  );
};
