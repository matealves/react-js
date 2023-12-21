"use client";

import axios from "axios";
import { headers } from "next/dist/client/components/headers";

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
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId: 98,
        title: "Título",
        body: "Conteúdo teste...",
      }
    );
    console.log("response", response.data);
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
    </div>
  );
};

export default Page;
