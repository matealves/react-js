"use client";

import { useState } from "react";

const Page = () => {
  const [list, setList] = useState([]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <h1 className="text-3xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input
          type="text"
          placeholder="Nome"
          className="border border-black p-3 text-2xl text-black rounded-md mr-3"
        />
        <button className=" rounded bg-blue-500 text-sm px-7">Adicionar</button>
      </div>
      <ul className="w-full max-w-lg list-disc pl-5">
        <li>
          Tarefa 1 - <button className="hover:underline">[Deletar]</button>
        </li>
        <li>
          Tarefa 2 - <button className="hover:underline">[Deletar]</button>
        </li>
      </ul>
    </div>
  );
};

export default Page;
