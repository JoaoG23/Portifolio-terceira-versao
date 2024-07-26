type Props = {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
};
export const ButtonSecondary = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 py-2 px-4 rounded-lg bg-purple-500 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 shadow-md"
    >
      {children}
    </button>
  );
};
