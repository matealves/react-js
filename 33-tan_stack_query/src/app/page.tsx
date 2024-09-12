"use client";

import { usePosts } from "@/utils/queries";
import { useState } from "react";

const Page = () => {
  const limit = 3;
  const [page, setPage] = useState(0);

  const posts = usePosts(limit, page * limit);

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1);
  };

  const handleNextButton = () => {
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto my-8 flex flex-col gap-3 items-center">
      <h1 className="text-xl font-bold">Feed</h1>

      <span className="text-xs text-gray-400 font-light mb-0">
        Página: {page + 1}
      </span>

      <div className="flex gap-4 text-xs text-orange-300 font-bold">
        <button onClick={handlePrevButton}>{"← Prev"}</button>
        <button onClick={handleNextButton}>{"Next →"}</button>
      </div>

      {posts.isLoading && "Loading..."}

      {posts.data && (
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
      )}
    </div>
  );
};

export default Page;
