"use client";

import { usePost, usePosts } from "@/utils/queries";

const Page = () => {
  const posts = usePosts();
  const postItem = usePost(10);

  return (
    <div className="container mx-auto flex flex-col gap-3 items-center">
      <h1>Posts:</h1>

      {posts.isLoading && "Loading..."}

      {posts.data && (
        <ul>
          {posts.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
