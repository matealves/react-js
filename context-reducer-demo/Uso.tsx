import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const PostList = () => {
  // Usando context 'PostContext' importado no projeto
  const postCtx = useContext(PostContext);

  const handleRemoveButton = (id: number) => {
    postCtx?.removePost(id);
  };
  return (
    <div>
      {postCtx?.posts.map((item) => (
        <div key={item.id} className="border-b border-gray-500 p-3 mb-4">
          <div className="text-xl font-bold mb-2">{item.title}</div>
          <div className="flex justify-between">
            <div className="text-sm">{item.body}</div>
            <button onClick={() => handleRemoveButton(item.id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
};
