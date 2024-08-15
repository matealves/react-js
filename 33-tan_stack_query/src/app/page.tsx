"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/utils/api";

const Page = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div className="container mx-auto flex flex-col gap-3 items-center">
      {query.isLoading && "Loading..."}

      {query.data && (
        <ul>
          {query.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
