import React from "react";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

export const CardDefault = ({ children }: Props) => {
  return (
    <div className="rounded-xl shadow-lg shadow-orange-400/10 transition delay-150 hover:-translate-y-1 hover:scale-110  hover:duration-300">
      {children}
    </div>
  );
};
