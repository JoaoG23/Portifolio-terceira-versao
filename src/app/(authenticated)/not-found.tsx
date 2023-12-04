import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Ooops, não conseguimos encontrar sua página</p>
      <Link href={"/"}>Volte para página inicial</Link>
    </div>
  );
};

export default NotFound;
