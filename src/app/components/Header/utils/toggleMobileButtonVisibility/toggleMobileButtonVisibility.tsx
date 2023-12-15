"use client";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonDefault } from "../../../../components/buttons/buttonDefault/buttonDefault";


export const toggleMobileButtonVisibility = (isOpen: boolean, onClick: any) => {
  const sizeIcons: number = 70;
  return (
    <div className="flex lg:hidden fixed top-4 left-2 z-20 opacity-80">
      {isOpen ? (
        <button onClick={onClick}>
          <AiOutlineClose size={50} color={"#fff"} />
        </button>
      ) : (
        <ButtonDefault onClick={onClick}>
          <IoMenuOutline size={sizeIcons} color={"#fff"} />
        </ButtonDefault>
      )}
    </div>
  );
};
