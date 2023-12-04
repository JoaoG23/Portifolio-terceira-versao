export const buscarUsuarios = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const usuarios = await response.json();

  return usuarios?.data || [];
};
