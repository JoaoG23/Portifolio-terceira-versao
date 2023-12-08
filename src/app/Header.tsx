import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="hidden sm:hidden md:hidden lg:flex justify-between items-center h-16 px-10 text-amber-500 shadow-sm">
        <h3>Logo</h3>
        <nav className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/habilidades">Habilidades</Link>
        </nav>
      </header>
    </>
  );
};
