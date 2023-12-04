export const buscarUsuarioId = async (id: string) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const usuarios = await response.json();

  return usuarios?.data || [];
};
