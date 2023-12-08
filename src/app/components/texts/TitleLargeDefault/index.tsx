
type Props = {
  children?: string;
};

export const TitleLargeDefault = ({ children }: Props) => {
  return <h1 className="font-extrabold text-transparent text-6xl md:text-6xl lg:text-7xl  bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500">{children}</h1>;
};
