import Image from "next/image";

import { techlist } from "./data/techlist";

import { Technology } from "./data/types/Technology";

export const Technologies: React.FC = () => {
  const textTechnologies: string = "text-amber-500 font-extrabold text-center";
  return (
    <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-3">
      {techlist?.map((technology: Technology, i) => (
        <div key={i} className="w-[80px] grid items-center">
          <p className={textTechnologies}>{technology.name}</p>
          <Image
            src={technology.srcImage}
            width={300}
            height={300}
            alt={technology.name}
          />
        </div>
      ))}
    </section>
  );
};
