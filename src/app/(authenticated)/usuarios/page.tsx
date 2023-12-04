import Link from "next/link";
import { buscarUsuarios } from "./services/buscar-usuarios";

export default async function Usuarios() {
  const usuarios = await buscarUsuarios();
  return (
    <main>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((usuario: any) => (
          <li key={usuario.id}>
            <Link href={`/usuarios/${usuario.id}`}>
              {usuario.first_name} {usuario.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
