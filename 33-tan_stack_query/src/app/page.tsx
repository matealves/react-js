"use client";

import { addPost } from "@/utils/api";
import { invalidatePosts, usePosts, useUsersPrefetch } from "@/utils/queries";
import { queryClient } from "@/utils/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Page = () => {
  const limit = 3;
  const [page, setPage] = useState(0);

  const posts = usePosts(limit, page * limit);

  // useUsersPrefetch();

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1);
  };

  const handleNextButton = () => {
    setPage(page === 9 ? 9 : page + 1);
  };

  const handleInsertNewPost = () => {
    // fazer inserção

    invalidatePosts();
  };

  // Mutation
  const addMutation = useMutation({
    mutationFn: addPost,
    onMutate: (data) => {
      console.log("Dados da Mutation: ", data);
    },
    onError: (error, data, context) => {
      alert(`Erro ao adicionar novo post: ${error}`);
    },
    onSuccess: (response, data, context) => {
      // redirecionar para página...
    },
    onSettled: () => {
      // Sempre vai rodar por último, independete de erro ou sucesso.
    },
  });

  const handleAddButton = async () => {
    const data = {
      title: "Título teste",
      body: "lorem ipsum test one two three",
      userId: 7,
    };

    // addMutation.mutate(data);

    // É possível utilizar effects como 2º param do mutate (onSuccess, onError...)
    // E também utilizar mutate com await
    await addMutation.mutateAsync(data, {
      onSuccess: (response, data, context) => {
        console.log("Post adicionado com sucesso!", data);
        queryClient.invalidateQueries({
          queryKey: ["posts"],
        });
      },
    });

    console.log("Executou depois do mutate!");
  };

  return (
    <div className="container mx-auto my-8 flex flex-col gap-3 items-center text-sm">
      <h1 className="text-xl font-bold">Feed</h1>

      <button
        onClick={handleAddButton}
        className="rounded-md border border-white p-3 my-3"
      >
        Adicionar novo post
      </button>

      {/* Existem vários métodos para status e reset de Mutation */}
      <p>Status: {addMutation.status}</p>

      {posts.isLoading && "Loading..."}

      {posts.data && (
        <>
          <ul>
            {posts.data.map((item) => (
              <li
                key={item.id}
                className="border border-white border-opacity-30 mb-5 py-3 px-5 rounded-md max-w-md"
              >
                <div className="flex items-center h-8 mb-3">
                  <div className="bg-white opacity-10 rounded-full w-8 h-8"></div>
                  <div className="text-xs ml-2 opacity-60 font-medium">
                    @username
                  </div>
                </div>

                <div className="font-bold text-sm">{item.title}</div>

                <div className="text-xs font-light mt-2">{item.body}</div>
              </li>
            ))}
          </ul>

          <span className="text-xs text-gray-400 font-light mb-0">
            Página: {page === 10 ? 10 : page + 1}
          </span>

          <div className="flex gap-4 text-xs text-orange-300 font-bold">
            <button onClick={handlePrevButton}>{"← Prev"}</button>
            <button onClick={handleNextButton}>{"Next →"}</button>
          </div>

          {/* <div>
            <button
              onClick={handleInsertNewPost}
              className="bg-blue-500 p-2 font-bold w-full"
            >
              Invalidar Query
            </button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Page;
