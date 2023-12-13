"use client";

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const reponse = await fetch(url);
    const data = await reponse.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsers(data);
    //   })
    //   .catch(() => {
    //     console.error("ERRO");
    //   })
    //   .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl w-screen block text-center mt-6 font-bold mb-4">
        Lista de usuários
      </h1>
      {loading && (
        <h1 className="text-1xl w-screen block text-center mt-6 font-bold mb-4">
          Carregando...
        </h1>
      )}
      {!loading && users.length > 0 && (
        <ul className="flex w-screen flex-wrap justify-center items-center px-6">
          {users.map(({ id, name, email, address }) => (
            <li className="m-3 text-sm w-72 border p-2" key={id}>
              <p>ID: {id}</p>
              <p>Nome: {name}</p>
              <p>E-mail: {email}</p>
              <p>Cidade: {address.city}</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && !users.length && (
        <h1 className="text-1xl w-screen block text-center mt-6 font-bold mb-4">
          Não há usuários para exibir...
        </h1>
      )}
    </div>
  );
};

export default Page;
