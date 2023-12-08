import "./styles.css";

type Props = {
  children?: string;
};

export const TitleLargeSecondary = ({ children }: Props) => {
  return <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl  text-stone-50">{children}</h1>;
};
