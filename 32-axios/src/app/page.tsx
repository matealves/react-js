"use client";

import { api } from "@/utils/api";
import axios from "axios";
import { useRef } from "react";

const Page = () => {
  const handleGetPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
      {
        params: {
          postId: 1,
        },
      }
    );
    console.log("response", response.data);
  };

  const handleSendPosts = async () => {
    const response = await api.post("/posts", {
      userId: 98,
      title: "Título",
      body: "Conteúdo teste...",
    });
    console.log("response", response.data);
  };

  const fileInput = useRef<HTMLInputElement>(null);

  const handleSendFile = async () => {
    if (fileInput.current?.files && fileInput.current.files.length > 0) {
      
      const file = fileInput.current.files[0];
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      
      console.log('file', file);
      const response = await api.post("/posts", data);
      console.log("response", response.data);
    }
  };

  return (
    <div className="container mx-auto flex flex-col gap-3 items-center">
      <h1 className="text-center text-xl mt-6 font-bold">Axios</h1>
      <p className="text-center text-sm mb-4 ">abrir console (f12)</p>
      <button
        onClick={handleGetPosts}
        className="bg-green-500 p-2 rounded-md text-sm"
      >
        Buscar Posts
      </button>
      <button
        onClick={handleSendPosts}
        className="bg-blue-500 p-2 rounded-md text-sm"
      >
        Inserir Posts
      </button>
      <input type="file" ref={fileInput} className="mt-5" />
      <button
        onClick={handleSendFile}
        className="bg-pink-500 p-2 rounded-md text-sm"
      >
        Enviar
      </button>
    </div>
  );
};

export default Page;
