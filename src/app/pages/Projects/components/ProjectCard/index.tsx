import { ButtonDefault } from "@/app/components/buttons/buttonDefault/buttonDefault";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import { CardDefault } from "@/app/components/cards/CardDefault";

type Props = {
  srcImage: string;
  title: string;
  description: string;
};

export const ProjectCard = ({ srcImage, title, description }: Props) => {
  return (
    <CardDefault>
      <Image
        width={400}
        height={400}
        className="rounded-t-lg"
        src={srcImage}
        alt={title}
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <ButtonDefault>
          <strong>Veja mais</strong>
          <IoArrowForward size={30} />
        </ButtonDefault>
      </div>
    </CardDefault>
  );
};
