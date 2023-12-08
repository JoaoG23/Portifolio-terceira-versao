import Image from "next/image";

export const NavContacts = () => {
  const fontCuston: string = "font-bold text-amber-500";
  return (
    <nav className="flex justify-between">
      <div className="grid justify-items-center gap-1">
        <Image src={"github.svg"} width={40} height={40} alt={"Github"} />
        <p className={fontCuston}>Github</p>
      </div>
      <div className="grid justify-items-center gap-1">
        <Image src={"linkedin.svg"} width={40} height={40} alt={"Linkedin"} />
        <p className={fontCuston}>Linkedin</p>
      </div>
      <div className="grid justify-items-center gap-1">
        <Image src={"email.svg"} width={40} height={40} alt={"Email"} />
        <p className={fontCuston}>E-mail</p>
      </div>
    </nav>
  );
};
