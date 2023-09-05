"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: { text: "Item novo - test" },
    });
  };

  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen">
      <button onClick={handleAddClick} className="bg-blue-500 p-2 rounded-md">
        Adicionar
      </button>
      {list.map((item, key) => (
        <div className="" key={key}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Page;
