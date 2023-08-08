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
    if (!itemInput.trim()) {
      alert("Campo vazio");
      return;
    }
    setList([...list, { label: itemInput, checked: false }]);
    setItemInput("");
  };

  const deleteItem = (key: number) => {
    setList(list.filter((item, index) => index !== key));
  };

  const toggleItem = (index: number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;

    setList(newList);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-xl">
      <h1 className="text-2xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-md my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          className="border border-black p-3 text-1xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button
          className=" rounded bg-green-500 text-sm px-5"
          onClick={handleAddButon}
        >
          Adicionar
        </button>
      </div>
      <p className="my-4">{list.length} itens na lista</p>
      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={index}>
            <input
              onChange={() => toggleItem(index)}
              type="checkbox"
              checked={item.checked}
              className="w-4 h-4 mr-2"
            />
            {item.label}{" "}
            <button
              onClick={() => deleteItem(index)}
              className="hover:underline text-red-500 text-sm"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
