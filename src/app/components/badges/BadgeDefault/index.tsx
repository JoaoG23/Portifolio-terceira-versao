import React from "react";

type Props = {
  description: string;
};
export const BadgeDefault = ({ description }: Props) => {
  return (
    <span className="inline-flex items-center rounded-md bg-amber-500 px-2 py-1 text-xs font-medium text-amber-50 ring-1 ring-inset ring-amber-600/20">
      {description}
    </span>
  );
};
