import { useState, useEffect } from "react";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { Post } from "./types/Post";
import { api } from "./api";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      loadingPosts();
      setLoading(false);
    }, 1000);
  }, []);

  const loadingPosts = async () => {
    const json = await api.getAllPosts();
    setPosts(json);
  };

  const handleAddPost = async (title: string, body: string) => {
    const json = await api.addNewPosts(title, body, 1);
    if (json.id) {
      setPosts([json, ...posts]);
      // alert("Post success add!");
    } else {
      alert("Ocorreu algum erro!");
    }
  };

  return (
    <div className="p-10">
      <PostForm onAdd={handleAddPost} />

      {loading && <div className="text-center mt-20">Carregando...</div>}

      {!loading && posts.length > 0 && (
        <>
          <p className="block mb-5">Total de posts: {posts.length}</p>
          <div className="">
            {posts.map((item, index) => (
              <PostItem data={item} key={index} />
            ))}
          </div>
        </>
      )}

      {!loading && !posts.length && (
        <p className="block pt-10 text-center">Não há posts para exibir.</p>
      )}
    </div>
  );
};

export default App;
