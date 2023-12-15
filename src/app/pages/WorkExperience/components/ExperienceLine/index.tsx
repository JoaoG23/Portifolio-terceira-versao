import { MdWork } from "react-icons/md";
import { Experience } from "../../data/experiences";
import { BadgeDefault } from "@/app/components/badges/BadgeDefault";

export const ExperienceLine = ({
  profession,
  company,
  area,
  time,
  description,
  techs,
}: Experience) => {
  return (
    <ul className="p-1 text-gray-500">
      <li className="bg-gray-50 pl-12 text-amber-500 rounded-lg mb-4 flex items-center gap-2">
        <MdWork size={50} />
        <h2 className="text-2xl font-bold">{profession}</h2>
      </li>
      <li className="text-xl font-bold pl-14">{area}</li>
      <li className="text-lg font-bold pl-14">{company}</li>
      <li className="font-bold pl-14">{time}</li>
      <li className="pl-14">{description}</li>
      <li className="pl-14 my-2 flex gap-1">
        {techs?.map((tech: string, i) => (
          <BadgeDefault key={i} description={tech} />
        ))}
      </li>
    </ul>
  );
};
