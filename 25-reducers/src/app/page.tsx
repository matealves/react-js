"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState("");

  const handleAddButton = () => {
    if (addField.trim() === "") return false;

    dispatch({
      type: "add",
      payload: { text: addField.trim() },
    });

    setAddField("");
  };

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id },
    });
  };

  const handleEdit = (id: number) => {
    const item = list.find((task) => task.id === id);
    if (!item) return false;

    const newText = window.prompt("Editar Tarefa", item.text);
    if (!newText || newText?.trim() === "") return false;

    dispatch({
      type: "editText",
      payload: {
        id,
        newText,
      },
    });
  };

  const handleRemove = (id: number) => {
    const item = list.find((task) => task.id === id);
    if (
      !window.confirm(
        `Tem certeza que deseja excluir a tarefa '${item?.text}'?`
      )
    )
      return false;

    dispatch({
      type: "remove",
      payload: { id },
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-8">
        📋 Lista de Tarefas
      </h1>
      <div className="max-w-2xl mx-auto bg-gray-900 flex p-5 my-4 rounded-md">
        <input
          type="text"
          className="flex-1 p-3 border border-white bg-transparent rounded-md outline-none"
          placeholder="Digite uma tarefa"
          value={addField}
          onChange={(e) => setAddField(e.target.value)}
        />
        <button
          onClick={handleAddButton}
          className="p-3 font-bold hover:bg-white hover:text-gray-900 rounded-md transition ease-in-out delay-50"
        >
          SALVAR
        </button>
      </div>

      <ul className="max-w-2xl mx-auto">
        {list.map((item) => (
          <li className="flex p-3 my-3 border-b border-gray-700" key={item.id}>
            <input
              type="checkbox"
              className="w-4 h-4 mr-2 mt-0.5"
              checked={item.done}
              onChange={() => handleDoneCheckbox(item.id)}
            />
            <p className="flex-1 text-md">{item.text}</p>
            <button
              className="mx-4 hover:opacity-100 opacity-50 transition ease-in-out delay-50"
              onClick={() => handleEdit(item.id)}
            >
              ✏️
            </button>
            <button
              className="mr-2 opacity-50 hover:opacity-100 transition ease-in-out delay-50"
              onClick={() => handleRemove(item.id)}
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
