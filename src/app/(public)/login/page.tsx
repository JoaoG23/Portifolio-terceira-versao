"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/");
      }}
    >
      <div>
        <label>Email:</label>
        <input />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" />
      </div>
      <div>
        <button type="submit">Logar</button>
      </div>
    </form>
  );
}
