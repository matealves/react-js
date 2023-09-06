"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState("");

  const handleAddButton = () => {
    if (addField === "") return false;

    dispatch({
      type: "add",
      payload: { text: addField },
    });

    setAddField("");
  };

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
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
          onChange={(e) => setAddField(e.target.value.trim())}
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
            {/* <input
              type="checkbox"
              className="w-4 h-4 mr-4"
              checked={item.done}
              onClick={() => handleDoneCheckbox(id)}
            /> */}
            <p className="flex-1 text-md">{item.text}</p>
            <button className="mx-4 hover:opacity-50 transition ease-in-out delay-50">
              ✏️
            </button>
            <button className="mr-2 hover:opacity-50 transition ease-in-out delay-50">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
