type Props = {
  children: JSX.Element | JSX.Element[] | string;
};
export const ButtonDefault = ({ children }: Props) => {
  return (
    <button className="flex items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
      {children}
    </button>
  );
};
