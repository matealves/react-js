"use client";

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([
    { label: "Fazer o almoço", checked: false },
    { label: "Limpar a cozinha", checked: false },
  ]);

  const handleAddButon = () => {
    setList([...list, { label: itemInput, checked: false }]);
    setItemInput("");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
      <h1 className="text-3xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          className="border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button
          className=" rounded bg-gray-400 text-sm px-7"
          onClick={handleAddButon}
        >
          Adicionar
        </button>
      </div>
      <p className="my-4">{list.length} itens na lista</p>
      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item) => (
          <li>
            {item.label} -{" "}
            <button className="hover:underline">[Deletar]</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
