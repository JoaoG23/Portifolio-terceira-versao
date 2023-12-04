import { buscarUsuarioId } from "./services/buscar-usuarios-id";

export default async function UsuarioDetalhesPagina({
  params,
}: {
  params: { usuarioId: string };
}) {
  const usuario = await buscarUsuarioId(params.usuarioId);
  return (
    <main>
      <h1>
        Usuario: {usuario.first_name} {usuario.last_name}
      </h1>
      <p>{usuario.email}</p>
    </main>
  );
}
